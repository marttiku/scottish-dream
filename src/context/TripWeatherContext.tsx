import { createContext, useContext, type ReactNode } from "react";
import { useTripWeather, type StopWeather } from "../hooks/useTripWeather";
import type { DailyForecast } from "../lib/openMeteo";

interface TripWeatherContextValue {
  stops: StopWeather[];
  loading: boolean;
  error: string | null;
  fetchedAt: Date | null;
  retry: () => void;
  getForecast: (dateIso: string, dayLabel: string) => DailyForecast | null;
}

const TripWeatherContext = createContext<TripWeatherContextValue | null>(null);

export function TripWeatherProvider({ children }: { children: ReactNode }) {
  const weather = useTripWeather();

  const getForecast = (dateIso: string, dayLabel: string) => {
    const match = weather.stops.find(
      (s) => s.stop.dateIso === dateIso && s.stop.dayLabel === dayLabel,
    );
    return match?.forecast ?? null;
  };

  return (
    <TripWeatherContext.Provider value={{ ...weather, getForecast }}>
      {children}
    </TripWeatherContext.Provider>
  );
}

export function useTripWeatherContext() {
  const ctx = useContext(TripWeatherContext);
  if (!ctx) {
    throw new Error("useTripWeatherContext must be used within TripWeatherProvider");
  }
  return ctx;
}

export function useDayForecast(dateIso: string, dayLabel: string) {
  const { getForecast, loading, error } = useTripWeatherContext();
  return { forecast: getForecast(dateIso, dayLabel), loading, error };
}

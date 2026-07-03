import { useCallback, useEffect, useState } from "react";
import type { WeatherStop } from "../data/weatherStops";
import {
  fetchForecastsForStops,
  lookupDay,
  type DailyForecast,
} from "../lib/openMeteo";

export interface StopWeather {
  stop: WeatherStop;
  forecast: DailyForecast | null;
}

interface TripWeatherState {
  stops: StopWeather[];
  loading: boolean;
  error: string | null;
  fetchedAt: Date | null;
}

export function useTripWeather(weatherStops: WeatherStop[]) {
  const [state, setState] = useState<TripWeatherState>({
    stops: [],
    loading: true,
    error: null,
    fetchedAt: null,
  });

  const load = useCallback(async () => {
    setState((s) => ({ ...s, loading: true, error: null }));

    try {
      const forecasts = await fetchForecastsForStops(weatherStops);
      const stops: StopWeather[] = weatherStops.map((stop) => ({
        stop,
        forecast: lookupDay(
          forecasts,
          stop.latitude,
          stop.longitude,
          stop.dateIso,
        ),
      }));

      setState({
        stops,
        loading: false,
        error: null,
        fetchedAt: new Date(),
      });
    } catch (err) {
      setState({
        stops: [],
        loading: false,
        error:
          err instanceof Error ? err.message : "Could not load weather data",
        fetchedAt: null,
      });
    }
  }, [weatherStops]);

  useEffect(() => {
    load();
  }, [load]);

  return { ...state, retry: load };
}

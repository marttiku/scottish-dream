import { useEffect, useState } from "react";
import type { TripData } from "../data/types";
import {
  buildWeatherAssessment,
  fetchAllTripsLiveWeather,
  type LiveWeatherStats,
  type WeatherAssessment,
} from "../lib/weather-assessment";

interface AllTripsWeatherState {
  byTripId: Record<string, WeatherAssessment>;
  loading: boolean;
  error: string | null;
}

export function useAllTripsWeather(trips: TripData[]): AllTripsWeatherState {
  const [byTripId, setByTripId] = useState<Record<string, WeatherAssessment>>(
    () =>
      Object.fromEntries(
        trips.map((t) => [t.meta.id, buildWeatherAssessment(t.meta.id)]),
      ),
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);
      setError(null);

      try {
        const liveByTrip = await fetchAllTripsLiveWeather(trips);
        if (cancelled) return;

        const next: Record<string, WeatherAssessment> = {};
        for (const trip of trips) {
          next[trip.meta.id] = buildWeatherAssessment(
            trip.meta.id,
            liveByTrip[trip.meta.id],
          );
        }
        setByTripId(next);
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Could not load forecasts",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [trips]);

  return { byTripId, loading, error };
}

export function useTripWeatherAssessment(
  tripId: string,
  live?: LiveWeatherStats | null,
): WeatherAssessment {
  return buildWeatherAssessment(tripId, live);
}

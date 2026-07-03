import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_TRIP_ID,
  TRIP_LIST,
  getTrip,
  isValidTripId,
} from "../data/trips";
import type { TripData } from "../data/types";

const STORAGE_KEY = "scottish-dream-trip";

const TRIP_TITLES: Record<string, string> = {
  scotland: "Scottish Dream · Highland Trek 2026",
  tatras: "Tatra Dream · High Tatras 2026",
  lapland: "Arctic Dream · Lapland 2026",
  montblanc: "Mont Blanc Dream · TMB 2026",
};

interface TripContextValue {
  trip: TripData;
  tripId: string;
  setTripId: (id: string) => void;
  trips: TripData[];
}

const TripContext = createContext<TripContextValue | null>(null);

function readTripIdFromUrl(): string | null {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get("trip");
  if (fromQuery && isValidTripId(fromQuery)) {
    return fromQuery;
  }
  return null;
}

function writeTripIdToUrl(id: string) {
  const url = new URL(window.location.href);
  if (id === DEFAULT_TRIP_ID) {
    url.searchParams.delete("trip");
  } else {
    url.searchParams.set("trip", id);
  }
  window.history.replaceState({}, "", url);
}

export function TripProvider({ children }: { children: ReactNode }) {
  const [tripId, setTripIdState] = useState(() => {
    return readTripIdFromUrl() ?? localStorage.getItem(STORAGE_KEY) ?? DEFAULT_TRIP_ID;
  });

  const trip = useMemo(() => getTrip(tripId), [tripId]);

  const setTripId = useCallback((id: string) => {
    if (!isValidTripId(id)) return;
    setTripIdState(id);
    localStorage.setItem(STORAGE_KEY, id);
    writeTripIdToUrl(id);
    document.title = TRIP_TITLES[id] ?? TRIP_TITLES[DEFAULT_TRIP_ID];
  }, []);

  useEffect(() => {
    document.title = TRIP_TITLES[tripId] ?? TRIP_TITLES[DEFAULT_TRIP_ID];
  }, [tripId]);

  const value = useMemo(
    () => ({
      trip,
      tripId,
      setTripId,
      trips: TRIP_LIST,
    }),
    [trip, tripId, setTripId],
  );

  return <TripContext.Provider value={value}>{children}</TripContext.Provider>;
}

export function useTrip() {
  const ctx = useContext(TripContext);
  if (!ctx) {
    throw new Error("useTrip must be used within TripProvider");
  }
  return ctx;
}

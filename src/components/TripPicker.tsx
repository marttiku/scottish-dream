import { getTripStats } from "../data/types";
import { TRIP_LABELS } from "../data/trips";
import { getTripCard } from "../data/trip-cards";
import { useTrip } from "../context/TripContext";
import { useAllTripsWeather } from "../hooks/useAllTripsWeather";
import { formatTripDateRangeWithWeekdays } from "../lib/dates";
import { getFunStats } from "../lib/fun";
import { TripIndicatorPills } from "./TripIndicatorPills";
import { Check } from "lucide-react";

export function TripPicker() {
  const { tripId, setTripId, trips } = useTrip();
  const { byTripId: weatherByTrip, loading: weatherLoading } =
    useAllTripsWeather(trips);

  const handleSelect = (id: string) => {
    setTripId(id);
    requestAnimationFrame(() => {
      document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <section id="trips" aria-label="Choose a trip">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-100">Potential trips</h2>
        <p className="text-sm text-gray-400 mt-1">
          Same dates · 7–15 Jul 2026 — compare fun, effort & weather, then pick a
          route
        </p>
      </div>

      <div className="-mx-4 px-4 sm:-mx-6 sm:px-6">
        <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scroll-px-4 sm:scroll-px-6 xl:grid xl:grid-cols-4 xl:overflow-visible xl:pb-0 xl:snap-none">
          {trips.map((t) => {
            const card = getTripCard(t.meta.id);
            if (!card) return null;

            const stats = getTripStats(t.meta, t.hikingDays, t.connections);
            const weather = weatherByTrip[t.meta.id] ?? stats.weather;
            const fun = getFunStats(stats.transit, stats.effort, weather);
            const isActive = tripId === t.meta.id;

            return (
              <button
                key={t.meta.id}
                type="button"
                onClick={() => handleSelect(t.meta.id)}
                aria-pressed={isActive}
                aria-label={`View ${t.meta.title} trip plan`}
                className={`group relative flex w-[17.5rem] shrink-0 snap-start flex-col overflow-hidden rounded-xl border text-left transition-all motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 xl:w-auto ${
                  isActive
                    ? "border-indigo-500 ring-2 ring-indigo-500/40 shadow-lg shadow-indigo-950/50"
                    : "border-gray-800 hover:border-gray-600 hover:shadow-lg hover:shadow-black/20"
                }`}
              >
                <div className="relative h-28 shrink-0">
                  <img
                    src={card.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"
                    aria-hidden="true"
                  />
                  {isActive && (
                    <span className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-medium text-white shadow-lg">
                      <Check className="w-3 h-3" aria-hidden="true" />
                      Selected
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-2.5 bg-gray-900 p-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-indigo-300 line-clamp-1">
                      {t.meta.subtitle}
                    </p>
                    <h3 className="mt-0.5 text-lg font-bold text-gray-100">
                      {TRIP_LABELS[t.meta.id] ?? t.meta.title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-snug text-gray-500">
                      {formatTripDateRangeWithWeekdays(
                        t.meta.departureDate,
                        t.meta.returnDate,
                      )}
                    </p>
                    <p className="mt-0.5 text-[11px] text-gray-400">
                      {stats.transit.formatted} transit · {t.meta.hikingDays} hike
                      days · {t.meta.totalHikingKm}
                    </p>
                  </div>

                  <TripIndicatorPills
                    fun={fun}
                    effort={stats.effort}
                    weather={weather}
                    weatherLoading={weatherLoading}
                    compact
                    dense
                  />

                  <p className="text-[11px] text-gray-400 leading-snug line-clamp-2">
                    {card.highlights[0]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

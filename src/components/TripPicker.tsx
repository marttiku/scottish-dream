import { getTripStats } from "../data/types";
import { TRIP_LABELS } from "../data/trips";
import { getTripCard } from "../data/trip-cards";
import { useTrip } from "../context/TripContext";
import { useAllTripsWeather } from "../hooks/useAllTripsWeather";
import { formatTripDateRangeWithWeekdays } from "../lib/dates";
import { getFunStats } from "../lib/fun";
import { TripIndicatorPills } from "./TripIndicatorPills";
import {
  BedDouble,
  Check,
  Footprints,
  MapPin,
  Mountain,
  Tent,
} from "lucide-react";

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

      <div className="grid gap-3 lg:grid-cols-2">
        {trips.map((t) => {
          const card = getTripCard(t.meta.id);
          if (!card) return null;

          const stats = getTripStats(t.meta, t.hikingDays, t.connections);
          const weather = weatherByTrip[t.meta.id] ?? stats.weather;
          const fun = getFunStats(stats.transit, stats.effort, weather);
          const isActive = tripId === t.meta.id;
          const lodging =
            t.meta.hutNights != null && t.meta.hutNights > 0
              ? `${t.meta.hutNights} hut nights`
              : `${stats.wildCampNights} wild camps`;

          return (
            <button
              key={t.meta.id}
              type="button"
              onClick={() => handleSelect(t.meta.id)}
              aria-pressed={isActive}
              aria-label={`View ${t.meta.title} trip plan`}
              className={`group relative flex w-full overflow-hidden rounded-xl border text-left transition-all motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 ${
                isActive
                  ? "border-indigo-500 ring-2 ring-indigo-500/40 shadow-lg shadow-indigo-950/50"
                  : "border-gray-800 hover:border-gray-600 hover:shadow-lg hover:shadow-black/20"
              }`}
            >
              <div className="relative w-28 sm:w-36 md:w-44 shrink-0 self-stretch min-h-[7.5rem]">
                <img
                  src={card.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-950/90 sm:to-gray-950/70"
                  aria-hidden="true"
                />
                {isActive && (
                  <span className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-medium text-white shadow-lg">
                    <Check className="w-3 h-3" aria-hidden="true" />
                    Selected
                  </span>
                )}
              </div>

              <div className="relative flex min-w-0 flex-1 flex-col gap-2 bg-gray-950/80 p-3 sm:flex-row sm:items-center sm:gap-4 sm:p-4">
                <div className="min-w-0 shrink-0 sm:w-[10.5rem] md:w-[12rem]">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-indigo-300 truncate">
                    {t.meta.subtitle}
                  </p>
                  <h3 className="mt-0.5 text-lg font-bold text-gray-100 sm:text-xl">
                    {TRIP_LABELS[t.meta.id] ?? t.meta.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] text-gray-500 truncate">
                    {formatTripDateRangeWithWeekdays(
                      t.meta.departureDate,
                      t.meta.returnDate,
                    )}
                    {" · "}
                    <span className="text-gray-400">{stats.transit.formatted}</span>{" "}
                    transit
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

                <dl className="hidden lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-1 lg:shrink-0 lg:w-[13rem] xl:w-[15rem]">
                  <Metric
                    icon={Footprints}
                    label="Hiking"
                    value={`${t.meta.hikingDays} days`}
                  />
                  <Metric
                    icon={MapPin}
                    label="Distance"
                    value={t.meta.totalHikingKm}
                  />
                  <Metric
                    icon={Mountain}
                    label="Ascent"
                    value={`~${stats.totalAscentM.toLocaleString("en-GB")} m`}
                  />
                  <Metric
                    icon={
                      t.meta.hutNights != null && t.meta.hutNights > 0
                        ? BedDouble
                        : Tent
                    }
                    label="Nights"
                    value={lodging}
                  />
                </dl>

                <p className="hidden xl:block min-w-0 flex-1 text-xs text-gray-400 leading-snug line-clamp-2">
                  {card.highlights[0]}
                </p>

                <span className="hidden sm:block shrink-0 text-xs font-medium text-indigo-400 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
                  {isActive ? "Viewing ↓" : "Open →"}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Footprints;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-baseline gap-1.5 min-w-0">
      <dt className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-gray-500 shrink-0">
        <Icon className="w-3 h-3" aria-hidden="true" />
        {label}
      </dt>
      <dd className="text-xs font-semibold text-gray-200 truncate">{value}</dd>
    </div>
  );
}

import { getTripStats } from "../data/types";
import { TRIP_LABELS } from "../data/trips";
import { getTripCard } from "../data/trip-cards";
import { useTrip } from "../context/TripContext";
import { formatTripDateRangeWithWeekdays } from "../lib/dates";
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
          Same dates · 7–15 Jul 2026 — pick a route to explore the full plan
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trips.map((t) => {
          const card = getTripCard(t.meta.id);
          if (!card) return null;

          const stats = getTripStats(t.meta, t.hikingDays);
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
              className={`group relative min-h-[22rem] overflow-hidden rounded-xl border text-left transition-all motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 ${
                isActive
                  ? "border-indigo-500 ring-2 ring-indigo-500/40 shadow-lg shadow-indigo-950/50"
                  : "border-gray-800 hover:border-gray-600 hover:shadow-xl hover:shadow-black/30"
              }`}
            >
              <img
                src={card.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/85 to-gray-950/25"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-indigo-950/0 transition-colors group-hover:bg-indigo-950/10 motion-reduce:transition-none"
                aria-hidden="true"
              />

              {isActive && (
                <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-indigo-600 px-2.5 py-1 text-xs font-medium text-white shadow-lg">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  Selected
                </span>
              )}

              <div className="relative flex h-full min-h-[22rem] flex-col justify-end p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  {t.meta.subtitle}
                </p>
                <h3 className="mt-1 text-2xl font-bold text-gray-100">
                  {TRIP_LABELS[t.meta.id] ?? t.meta.title}
                </h3>
                <p className="mt-1 text-xs text-gray-400">
                  {formatTripDateRangeWithWeekdays(
                    t.meta.departureDate,
                    t.meta.returnDate,
                  )}
                </p>

                <dl className="mt-4 grid grid-cols-2 gap-2">
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

                <ul className="mt-4 space-y-1.5 border-t border-gray-700/60 pt-4">
                  {card.highlights.map((line) => (
                    <li
                      key={line}
                      className="text-xs text-gray-300 leading-snug flex gap-2"
                    >
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400"
                        aria-hidden="true"
                      />
                      {line}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs font-medium text-indigo-400 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
                  {isActive ? "Viewing this plan below" : "Open full itinerary →"}
                </p>
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
    <div className="rounded-lg bg-gray-950/50 px-2.5 py-2 backdrop-blur-sm">
      <dt className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-gray-500">
        <Icon className="w-3 h-3 shrink-0" aria-hidden="true" />
        {label}
      </dt>
      <dd className="mt-0.5 text-sm font-semibold text-gray-100">{value}</dd>
    </div>
  );
}

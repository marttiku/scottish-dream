import type { LegType } from "../data/types";
import { useTrip } from "../context/TripContext";
import { formatTripDateLong, formatTripDateShort } from "../lib/dates";
import { SectionHeader } from "./Timeline";
import {
  Bus,
  Calendar,
  Car,
  ExternalLink,
  Footprints,
  Hotel,
  Plane,
  Ship,
  Train,
} from "lucide-react";

const MODE_ICONS: Record<LegType, typeof Plane> = {
  flight: Plane,
  train: Train,
  ferry: Ship,
  bus: Bus,
  car: Car,
  hike: Footprints,
  stay: Hotel,
};

export function Connections() {
  const { trip, tripId } = useTrip();
  const subtitle =
    tripId === "lapland"
      ? "Ferry, rental car, STF huts & Nikkaluokta bus — links for your travel dates"
      : tripId === "tatras"
        ? "Flights, rental car & Tatra railway — links for your travel dates"
        : "Flights, trains, ferries & bus — timetable links for your travel dates";

  return (
    <section id="connections">
      <SectionHeader title="Connections" subtitle={subtitle} />
      <div className="grid gap-3 sm:grid-cols-2">
        {trip.connections.map((conn) => {
          const Icon = MODE_ICONS[conn.mode];
          return (
            <article
              key={`${conn.name}-${conn.dateIso ?? ""}`}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4"
            >
              <div className="flex items-start gap-2">
                <div className="p-1.5 rounded-md bg-gray-800 shrink-0">
                  <Icon className="w-4 h-4 text-indigo-400" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-gray-100">{conn.name}</h3>
                  <p className="text-xs text-gray-500">{conn.route}</p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {conn.dateIso && (
                  <time
                    dateTime={conn.dateIso}
                    className="bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded font-medium"
                  >
                    {formatTripDateShort(conn.dateIso)}
                  </time>
                )}
                <span className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded">
                  {conn.duration}
                </span>
                <span className="text-gray-500">{conn.operator}</span>
              </div>

              {conn.dateIso && (
                <p className="text-[11px] text-gray-600 mt-1">
                  {formatTripDateLong(conn.dateIso)}
                </p>
              )}

              {conn.schedule && (
                <p className="text-xs text-indigo-300/90 mt-2 flex items-start gap-1.5">
                  <Calendar className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{conn.schedule}</span>
                </p>
              )}

              <p className="text-xs text-gray-500 mt-2">{conn.notes}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={conn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
                >
                  Book / plan
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
                {conn.timetableUrl && (
                  <a
                    href={conn.timetableUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 text-gray-100 px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
                  >
                    Timetable
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

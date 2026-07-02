import { CONNECTIONS } from "../data/trip";
import type { LegType } from "../data/trip";
import { SectionHeader } from "./Timeline";
import { Bus, ExternalLink, Footprints, Plane, Ship, Train } from "lucide-react";

const MODE_ICONS: Record<LegType, typeof Plane> = {
  flight: Plane,
  train: Train,
  ferry: Ship,
  bus: Bus,
  hike: Footprints,
  stay: Train,
};

export function Connections() {
  return (
    <section id="connections">
      <SectionHeader
        title="Connections"
        subtitle="Flights, trains, ferries & bus — book ahead for summer"
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {CONNECTIONS.map((conn) => {
          const Icon = MODE_ICONS[conn.mode];
          return (
            <a
              key={conn.name}
              href={conn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-indigo-500/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-gray-800">
                    <Icon className="w-4 h-4 text-indigo-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-100 group-hover:text-indigo-400 transition-colors">
                      {conn.name}
                    </h3>
                    <p className="text-xs text-gray-500">{conn.route}</p>
                  </div>
                </div>
                <ExternalLink
                  className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-400 shrink-0"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded">
                  {conn.duration}
                </span>
                <span className="text-gray-500">{conn.operator}</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">{conn.notes}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

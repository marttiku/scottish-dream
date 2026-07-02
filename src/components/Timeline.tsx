import type { TimelineEvent, LegType } from "../data/trip";
import { TIMELINE, TRIP_META } from "../data/trip";
import { getDayPhotos } from "../data/photos";
import {
  formatTripDateLong,
  formatTripDateRangeWithWeekdays,
  formatTripDateShort,
} from "../lib/dates";
import { PhotoCarousel } from "./PhotoCarousel";
import { Bus, Footprints, Hotel, Plane, Ship, Train } from "lucide-react";

const TYPE_CONFIG: Record<
  LegType,
  { icon: typeof Plane; color: string; bg: string }
> = {
  flight: { icon: Plane, color: "text-blue-400", bg: "bg-blue-500/20" },
  train: { icon: Train, color: "text-yellow-400", bg: "bg-yellow-500/20" },
  ferry: { icon: Ship, color: "text-cyan-400", bg: "bg-cyan-500/20" },
  bus: { icon: Bus, color: "text-orange-400", bg: "bg-orange-500/20" },
  hike: { icon: Footprints, color: "text-indigo-400", bg: "bg-indigo-500/20" },
  stay: { icon: Hotel, color: "text-gray-400", bg: "bg-gray-500/20" },
};

export function Timeline() {
  return (
    <section id="timeline">
      <SectionHeader
        title="Full itinerary"
        subtitle={`${formatTripDateRangeWithWeekdays(TRIP_META.departureDate, TRIP_META.returnDate)} · 3-day Knoydart, no Glenfinnan stop, Morvern by bus & ferry`}
      />
      <div className="relative">
        <div
          className="absolute left-[19px] top-2 bottom-2 w-px bg-gray-800"
          aria-hidden="true"
        />
        <div className="space-y-4">
          {TIMELINE.map((event) => (
            <TimelineItem
              key={`${event.dateIso}-${event.dayLabel}`}
              event={event}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event }: { event: TimelineEvent }) {
  const config = TYPE_CONFIG[event.type];
  const Icon = config.icon;

  return (
    <div className="relative flex gap-4 pl-0">
      <div
        className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${config.bg}`}
      >
        <Icon className={`w-4 h-4 ${config.color}`} aria-hidden="true" />
      </div>
      <div className="flex-1 bg-gray-900 border border-gray-800 rounded-lg p-4 pb-3">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <time
            dateTime={event.dateIso}
            className="text-xs font-medium text-indigo-400"
          >
            {formatTripDateShort(event.dateIso)}
          </time>
          <span className="text-xs text-gray-500">{event.dayLabel}</span>
        </div>
        <p className="text-xs text-gray-600 mt-0.5">
          {formatTripDateLong(event.dateIso)}
        </p>
        <h3 className="text-base font-semibold text-gray-100 mt-1">{event.title}</h3>
        <p className="text-sm text-gray-400 mt-1">{event.description}</p>

        <div className="mt-3">
          <PhotoCarousel
            photos={getDayPhotos(event.dateIso, event.dayLabel)}
            label={`${event.title} photos`}
            variant="compact"
          />
        </div>

        {event.details && (
          <ul className="mt-2 space-y-1">
            {event.details.map((d, i) => (
              <li key={i} className="text-xs text-gray-500 flex items-start gap-1.5">
                <span className="text-gray-600 mt-0.5">·</span>
                {d}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-100">{title}</h2>
      {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
    </div>
  );
}

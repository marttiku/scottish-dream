import { ExternalLink, Hotel } from "lucide-react";
import {
  OVERNIGHT_STAYS,
  accommodationTypeLabel,
  type AccommodationOption,
  type AccommodationType,
  type OvernightStay,
} from "../data/accommodation";
import { getDayPhotos } from "../data/photos";
import { formatTripDateLong, formatTripDateShort } from "../lib/dates";
import { DayWeatherStrip } from "./DayWeatherStrip";
import { PhotoCarousel } from "./PhotoCarousel";
import { SectionHeader } from "./Timeline";

const TYPE_STYLES: Record<AccommodationType, string> = {
  hotel: "bg-purple-500/20 text-purple-300",
  hostel: "bg-indigo-500/20 text-indigo-300",
  "b&b": "bg-pink-500/20 text-pink-300",
  lodge: "bg-amber-500/20 text-amber-300",
  campsite: "bg-green-500/20 text-green-300",
  bunkhouse: "bg-orange-500/20 text-orange-300",
  "wild-camp": "bg-cyan-500/20 text-cyan-300",
};

export function Accommodation() {
  const lodging = OVERNIGHT_STAYS.filter((s) =>
    ["edinburgh-7", "inverie-8", "glenfinnan-11", "oban-13"].includes(s.id),
  );
  const trail = OVERNIGHT_STAYS.filter((s) =>
    ["sourlies-9", "achuil-10", "strontian-12"].includes(s.id),
  );

  return (
    <section id="stays">
      <SectionHeader
        title="Overnight stays"
        subtitle="Hotels, hostels, lodges & trail camps — one card per night"
      />

      <h3 className="text-sm font-semibold text-gray-300 mb-3">Lodging</h3>
      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        {lodging.map((stay) => (
          <StayCard key={stay.id} stay={stay} />
        ))}
      </div>

      <h3 className="text-sm font-semibold text-gray-300 mb-3">Trail camps</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trail.map((stay) => (
          <StayCard key={stay.id} stay={stay} compact />
        ))}
      </div>
    </section>
  );
}

function StayCard({
  stay,
  compact = false,
}: {
  stay: OvernightStay;
  compact?: boolean;
}) {
  const photos = getDayPhotos(stay.dateIso, stay.weatherDayLabel);

  return (
    <article className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden flex flex-col">
      <div className="h-1.5 bg-gradient-to-r from-amber-600 to-amber-400" aria-hidden="true" />
      <div className={`p-4 flex flex-col flex-1 ${compact ? "" : ""}`}>
        <div className="flex items-start gap-2">
          <div className="p-1.5 rounded-md bg-gray-800 shrink-0">
            <Hotel className="w-4 h-4 text-amber-400" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <time
              dateTime={stay.dateIso}
              className="text-xs font-medium text-indigo-400"
            >
              {formatTripDateShort(stay.dateIso)}
            </time>
            <p className="text-[11px] text-gray-600">{formatTripDateLong(stay.dateIso)}</p>
            <h3 className="text-base font-semibold text-gray-100 mt-0.5">
              {stay.headline}
            </h3>
            <p className="text-xs text-gray-500">{stay.location}</p>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-3 leading-relaxed">{stay.summary}</p>

        <DayWeatherStrip dateIso={stay.dateIso} dayLabel={stay.weatherDayLabel} />

        {!compact && photos.length > 0 && (
          <div className="mt-3">
            <PhotoCarousel
              photos={photos}
              label={`${stay.headline} photos`}
              variant="compact"
            />
          </div>
        )}

        <ul className="mt-4 space-y-2 flex-1">
          {stay.options.map((option) => (
            <OptionRow key={option.name} option={option} />
          ))}
        </ul>
      </div>
    </article>
  );
}

function OptionRow({ option }: { option: AccommodationOption }) {
  const content = (
    <>
      <div className="flex flex-wrap items-center gap-2 min-w-0">
        <span
          className={`text-[10px] font-medium uppercase tracking-wide px-1.5 py-0.5 rounded ${TYPE_STYLES[option.type]}`}
        >
          {accommodationTypeLabel(option.type)}
        </span>
        {option.recommended && (
          <span className="text-[10px] text-amber-400 font-medium">Suggested</span>
        )}
      </div>
      <p className="text-sm font-medium text-gray-200 mt-1 group-hover:text-indigo-300 transition-colors">
        {option.name}
      </p>
      {option.notes && (
        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{option.notes}</p>
      )}
    </>
  );

  if (option.url) {
    return (
      <li>
        <a
          href={option.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-lg border border-gray-800 bg-gray-800/30 px-3 py-2.5 hover:border-indigo-500/40 transition-colors"
        >
          <div className="flex justify-between gap-2">
            <div className="min-w-0 flex-1">{content}</div>
            <ExternalLink
              className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-400 shrink-0 mt-1"
              aria-hidden="true"
            />
          </div>
        </a>
      </li>
    );
  }

  return (
    <li className="rounded-lg border border-gray-800 bg-gray-800/30 px-3 py-2.5">
      {content}
    </li>
  );
}

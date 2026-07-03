import { useMemo } from "react";
import { getTripStats } from "../data/types";
import { useTrip } from "../context/TripContext";
import { useTripWeatherContext } from "../context/TripWeatherContext";
import {
  formatTripDateLong,
  formatTripDateRangeWithWeekdays,
  formatTripDateShort,
} from "../lib/dates";
import {
  assessLiveWeatherFromRows,
  buildWeatherAssessment,
} from "../lib/weather-assessment";
import { TripIndicatorPills } from "./TripIndicatorPills";
import {
  Activity,
  ArrowRight,
  BedDouble,
  Calendar,
  CloudSun,
  Footprints,
  Home,
  MapPin,
  Mountain,
  Tent,
  Timer,
} from "lucide-react";

function daysUntil(dateStr: string): number {
  const target = new Date(dateStr + "T00:00:00");
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function formatAscent(m: number): string {
  return `~${m.toLocaleString("en-GB")} m`;
}

export function Hero() {
  const { trip, tripId } = useTrip();
  const { meta } = trip;
  const { stops, loading: weatherLoading } = useTripWeatherContext();
  const days = daysUntil(meta.departureDate);
  const stats = getTripStats(meta, trip.hikingDays, trip.connections);

  const weather = useMemo(() => {
    const live = assessLiveWeatherFromRows(stops);
    return buildWeatherAssessment(tripId, live);
  }, [stops, tripId]);

  const countdown =
    days > 0 ? `${days} days away` : days === 0 ? "Departs today" : "Underway";

  const secondaryStat =
    meta.hutNights != null && meta.hutNights > 0
      ? {
          icon: Home,
          label: "Hut nights",
          value: `${meta.hutNights} nights`,
          hint:
            tripId === "lapland"
              ? "STF huts · Abisko to Kebnekaise"
              : tripId === "montblanc"
                ? "Elisabetta · Bonatti · Swiss refuges"
                : "Zelené pleso · Zbojnícka · Popradské",
        }
      : {
          icon: Tent,
          label: "Wild camps",
          value: `${stats.wildCampNights} nights`,
          hint: "Sourlies · A' Chuil · Strontian",
        };

  return (
    <section
      id="overview"
      className="relative overflow-hidden rounded-2xl border border-gray-800"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-gray-900 to-cyan-950"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgb(99 102 241 / 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgb(34 211 238 / 0.3) 0%, transparent 50%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative px-6 py-12 sm:px-10 sm:py-16">
        <p className="text-indigo-400 text-sm font-medium tracking-wide uppercase">
          {meta.subtitle}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mt-2 tracking-tight">
          {meta.title}
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl text-lg leading-relaxed">
          {meta.tagline}
        </p>

        <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur px-4 py-4 sm:px-5 sm:py-5 max-w-2xl">
          <p className="text-sm font-medium text-indigo-400">
            {formatTripDateRangeWithWeekdays(
              meta.departureDate,
              meta.returnDate,
            )}
          </p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <DateBlock
              label="Depart"
              dateIso={meta.departureDate}
              hint={countdown}
            />
            <ArrowRight
              className="hidden sm:block w-5 h-5 text-gray-600 shrink-0"
              aria-hidden="true"
            />
            <DateBlock
              label="Return"
              dateIso={meta.returnDate}
              hint={meta.returnHint}
            />
          </div>
          <p className="mt-3 text-xs text-gray-500">
            {stats.calendarDays} days · {stats.route} · {meta.transportLabel}
          </p>
          <TripIndicatorPills
            trailTime={stats.trailTime}
            effort={stats.effort}
            weather={weather}
            weatherLoading={weatherLoading}
            compact
          />
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard
            icon={Timer}
            label="Duration"
            value={`${stats.calendarDays} days`}
            hint={`${stats.calendarNights} nights`}
          />
          <StatCard
            icon={Footprints}
            label="Hiking"
            value={`${meta.hikingDays} days`}
            hint={meta.hikingStatHint}
          />
          <StatCard
            icon={Activity}
            label="Effort"
            value={stats.effort.label}
            hint={stats.effort.hint}
          />
          <StatCard
            icon={CloudSun}
            label="Weather"
            value={weather.displayValue}
            hint={weather.displayHint}
            valueClassName={
              weather.tone === "green"
                ? "text-green-400"
                : weather.tone === "yellow"
                  ? "text-yellow-400"
                  : weather.tone === "orange"
                    ? "text-orange-400"
                    : "text-red-400"
            }
          />
          <StatCard
            icon={MapPin}
            label="Distance"
            value={meta.totalHikingKm + " km"}
            hint="On foot"
          />
          <StatCard
            icon={Mountain}
            label="Ascent"
            value={formatAscent(stats.totalAscentM)}
            hint="Cumulative climb"
          />
          <StatCard
            icon={secondaryStat.icon}
            label={secondaryStat.label}
            value={secondaryStat.value}
            hint={secondaryStat.hint}
          />
          <StatCard
            icon={BedDouble}
            label="Lodged"
            value={`${stats.lodgedNights} nights`}
            hint={meta.lodgedHint}
          />
        </div>
      </div>
    </section>
  );
}

function DateBlock({
  label,
  dateIso,
  hint,
}: {
  label: string;
  dateIso: string;
  hint?: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
        {label}
      </p>
      <time
        dateTime={dateIso}
        className="text-lg font-semibold text-gray-100 mt-0.5 block"
      >
        {formatTripDateShort(dateIso)}
      </time>
      <p className="text-xs text-gray-500 mt-0.5">{formatTripDateLong(dateIso)}</p>
      {hint && <p className="text-xs text-indigo-400/80 mt-1">{hint}</p>}
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  hint,
  valueClassName,
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
  hint?: string;
  valueClassName?: string;
}) {
  return (
    <div className="bg-gray-900/60 backdrop-blur border border-gray-800 rounded-lg px-3 py-3 sm:px-4">
      <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
        <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        {label}
      </div>
      <p
        className={`text-lg sm:text-xl font-semibold text-gray-100 ${valueClassName ?? ""}`}
      >
        {value}
      </p>
      {hint && <p className="text-xs text-gray-500 mt-0.5 leading-snug">{hint}</p>}
    </div>
  );
}

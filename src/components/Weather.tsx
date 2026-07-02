import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Droplets,
  Loader2,
  RefreshCw,
  Sun,
  Wind,
} from "lucide-react";
import { useTripWeather } from "../hooks/useTripWeather";
import { weatherCodeInfo, type WeatherCodeInfo } from "../lib/openMeteo";
import type { DailyForecast } from "../lib/openMeteo";
import type { WeatherStop } from "../data/weatherStops";
import { formatTripDateLong, formatTripDateShort } from "../lib/dates";

const ICONS: Record<WeatherCodeInfo["icon"], typeof Sun> = {
  sun: Sun,
  "partly-cloudy": CloudSun,
  cloud: Cloud,
  fog: CloudFog,
  drizzle: CloudDrizzle,
  rain: CloudRain,
  snow: CloudSnow,
  thunder: CloudLightning,
};

export function Weather() {
  const { stops, loading, error, fetchedAt, retry } = useTripWeather();

  const rainyDays = stops.filter(
    (s) => s.forecast && (s.forecast.precipitation > 1 || s.forecast.precipProbability > 50),
  ).length;

  const hikingRain = stops.filter(
    (s) =>
      s.stop.dayLabel.startsWith("Hike") &&
      s.forecast &&
      s.forecast.precipitation > 0.5,
  ).length;

  return (
    <section id="weather">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-100">Trip forecast</h2>
          <p className="text-sm text-gray-400 mt-1">
            Live 16-day outlook from Open-Meteo · matched to each day on trail
          </p>
        </div>
        {!loading && !error && (
          <button
            type="button"
            onClick={retry}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-100 px-3 py-1.5 rounded-md border border-gray-800 hover:border-gray-700 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
            Refresh
          </button>
        )}
      </div>

      {loading && (
        <div className="flex items-center justify-center gap-2 py-16 text-gray-400">
          <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
          <span className="text-sm">Loading forecasts…</span>
        </div>
      )}

      {error && (
        <div className="bg-gray-900 border border-red-500/30 rounded-lg p-6 text-center">
          <p className="text-red-400 text-sm">{error}</p>
          <button
            type="button"
            onClick={retry}
            className="mt-3 text-sm text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Try again
          </button>
        </div>
      )}

      {!loading && !error && stops.length > 0 && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <SummaryCard
              label="Rainy days"
              value={String(rainyDays)}
              hint=">1 mm or >50% chance"
            />
            <SummaryCard
              label="Wet hiking days"
              value={String(hikingRain)}
              hint=">0.5 mm on trail"
            />
            <SummaryCard
              label="Coldest night"
              value={formatTemp(Math.min(...minTemps(stops)))}
              hint="Trip low"
            />
            <SummaryCard
              label="Windiest day"
              value={formatWind(maxWind(stops))}
              hint="Max gust forecast"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {stops.map(({ stop, forecast }) => (
              <DayCard key={stop.dateIso} stop={stop} forecast={forecast} />
            ))}
          </div>

          <p className="text-xs text-gray-600 mt-4 text-center">
            Forecast by{" "}
            <a
              href="https://open-meteo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-400 underline"
            >
              Open-Meteo
            </a>
            {fetchedAt && (
              <> · updated {fetchedAt.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}</>
            )}
          </p>
        </>
      )}
    </section>
  );
}

function DayCard({
  stop,
  forecast,
}: {
  stop: Pick<WeatherStop, "dateIso" | "dayLabel" | "location" | "context">;
  forecast: DailyForecast | null;
}) {
  if (!forecast) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
        <div className="flex justify-between items-start">
          <div>
            <time dateTime={stop.dateIso} className="text-xs text-indigo-400">
              {formatTripDateShort(stop.dateIso)}
            </time>
            <p className="text-[11px] text-gray-600 mt-0.5">
              {formatTripDateLong(stop.dateIso)}
            </p>
            <h3 className="text-sm font-semibold text-gray-100 mt-0.5">
              {stop.location}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">{stop.context}</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-3">Forecast not yet available</p>
      </div>
    );
  }

  const info = weatherCodeInfo(forecast.weatherCode);
  const Icon = ICONS[info.icon];
  const isHike = stop.dayLabel.startsWith("Hike");
  const isWet = forecast.precipitation > 1 || forecast.precipProbability > 50;

  return (
    <div
      className={`bg-gray-900 border rounded-lg p-4 ${
        isHike && isWet
          ? "border-yellow-500/30"
          : isHike
            ? "border-indigo-500/20"
            : "border-gray-800"
      }`}
    >
      <div className="flex justify-between items-start gap-3">
        <div>
          <div className="flex items-center gap-2">
            <time
              dateTime={stop.dateIso}
              className="text-xs font-medium text-indigo-400"
            >
              {formatTripDateShort(stop.dateIso)}
            </time>
            <span className="text-xs text-gray-600">{stop.dayLabel}</span>
          </div>
          <p className="text-[11px] text-gray-600 mt-0.5">
            {formatTripDateLong(stop.dateIso)}
          </p>
          <h3 className="text-sm font-semibold text-gray-100 mt-0.5">
            {stop.location}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">{stop.context}</p>
        </div>
        <div className="text-right shrink-0">
          <Icon className={`w-8 h-8 ${iconColor(info.icon)}`} aria-hidden="true" />
          <p className="text-xs text-gray-400 mt-1">{info.label}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        <Metric
          label="High / low"
          value={`${Math.round(forecast.tempMax)}° / ${Math.round(forecast.tempMin)}°`}
        />
        <Metric
          label="Rain"
          value={
            forecast.precipitation > 0
              ? `${forecast.precipitation.toFixed(1)} mm`
              : "Dry"
          }
          icon={Droplets}
          warn={forecast.precipitation > 2}
        />
        <Metric
          label="Wind"
          value={formatWind(forecast.windMax)}
          icon={Wind}
          warn={forecast.windMax > 40}
        />
      </div>

      {forecast.precipProbability > 30 && (
        <p className="text-xs text-gray-500 mt-2">
          {forecast.precipProbability}% chance of precipitation
        </p>
      )}
    </div>
  );
}

function Metric({
  label,
  value,
  icon: Icon,
  warn,
}: {
  label: string;
  value: string;
  icon?: typeof Wind;
  warn?: boolean;
}) {
  return (
    <div className="bg-gray-800/50 rounded-md px-2.5 py-2">
      <p className="text-[10px] uppercase tracking-wide text-gray-500">{label}</p>
      <p
        className={`text-sm font-medium mt-0.5 flex items-center gap-1 ${
          warn ? "text-yellow-400" : "text-gray-200"
        }`}
      >
        {Icon && <Icon className="w-3 h-3 opacity-60" aria-hidden="true" />}
        {value}
      </p>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-xl font-semibold text-gray-100 mt-0.5">{value}</p>
      <p className="text-[10px] text-gray-600 mt-0.5">{hint}</p>
    </div>
  );
}

function iconColor(icon: WeatherCodeInfo["icon"]): string {
  switch (icon) {
    case "sun":
      return "text-yellow-400";
    case "thunder":
      return "text-red-400";
    case "rain":
    case "drizzle":
      return "text-blue-400";
    case "snow":
      return "text-cyan-300";
    default:
      return "text-gray-400";
  }
}

function formatTemp(n: number): string {
  if (!Number.isFinite(n)) return "—";
  return `${Math.round(n)}°C`;
}

function formatWind(kmh: number): string {
  if (!Number.isFinite(kmh)) return "—";
  return `${Math.round(kmh)} km/h`;
}

function minTemps(stops: { forecast: DailyForecast | null }[]): number[] {
  return stops
    .map((s) => s.forecast?.tempMin)
    .filter((t): t is number => t !== undefined);
}

function maxWind(stops: { forecast: DailyForecast | null }[]): number {
  return Math.max(
    0,
    ...stops
      .map((s) => s.forecast?.windMax)
      .filter((w): w is number => w !== undefined),
  );
}

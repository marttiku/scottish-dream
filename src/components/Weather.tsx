import { useTripWeatherContext } from "../context/TripWeatherContext";

export function Weather() {
  const { stops, loading, error, fetchedAt, retry } = useTripWeatherContext();

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
            Refresh
          </button>
        )}
      </div>

      {loading && (
        <div className="flex items-center justify-center gap-2 py-16 text-gray-400">
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

          <p className="text-xs text-gray-600 text-center">
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

function formatTemp(n: number): string {
  if (!Number.isFinite(n)) return "—";
  return `${Math.round(n)}°C`;
}

function formatWind(kmh: number): string {
  if (!Number.isFinite(kmh)) return "—";
  return `${Math.round(kmh)} km/h`;
}

function minTemps(stops: { forecast: { tempMin: number } | null }[]): number[] {
  return stops
    .map((s) => s.forecast?.tempMin)
    .filter((t): t is number => t !== undefined);
}

function maxWind(stops: { forecast: { windMax: number } | null }[]): number {
  return Math.max(
    0,
    ...stops
      .map((s) => s.forecast?.windMax)
      .filter((w): w is number => w !== undefined),
  );
}

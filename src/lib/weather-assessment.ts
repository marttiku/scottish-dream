import type { WeatherStop } from "../data/weatherStops";
import {
  fetchForecastsForStops,
  lookupDay,
  weatherCodeInfo,
  type DailyForecast,
} from "./openMeteo";

export interface TripWeatherProfile {
  /** Typical July suitability for this route type (1–10) */
  seasonScore: number;
  seasonLabel: string;
  summary: string;
}

export interface LiveWeatherStats {
  score: number;
  label: string;
  hint: string;
  wetHikingDays: number;
  stormDays: number;
  hikingDays: number;
}

export interface WeatherAssessment {
  seasonScore: number;
  seasonLabel: string;
  summary: string;
  live?: LiveWeatherStats;
  /** Primary value for UI */
  displayValue: string;
  displayHint: string;
  tone: "green" | "yellow" | "orange" | "red";
}

const PROFILES: Record<string, TripWeatherProfile> = {
  scotland: {
    seasonScore: 6,
    seasonLabel: "Atlantic summer",
    summary:
      "July brings long days but Atlantic fronts — expect rain, wind, and midges on coastal legs.",
  },
  tatras: {
    seasonScore: 7,
    seasonLabel: "Alpine summer",
    summary:
      "Prime hut season with warm valleys; afternoon storms on ridges above 2,000 m are the main risk.",
  },
  lapland: {
    seasonScore: 8,
    seasonLabel: "Arctic summer",
    summary:
      "Cool, often dry fells under midnight sun — low thunder risk; pack insulation for night.",
  },
  montblanc: {
    seasonScore: 8,
    seasonLabel: "High alpine",
    summary:
      "Classic TMB window — stable mornings, but afternoon thunder on cols; start early every day.",
  },
};

export function getWeatherProfile(tripId: string): TripWeatherProfile {
  return (
    PROFILES[tripId] ?? {
      seasonScore: 7,
      seasonLabel: "Summer hiking",
      summary: "Check the live forecast before exposed days.",
    }
  );
}

function scoreForecastDay(forecast: DailyForecast): number {
  let dayScore = 100;

  if (forecast.precipitation > 8) dayScore -= 28;
  else if (forecast.precipitation > 3) dayScore -= 18;
  else if (forecast.precipitation > 1) dayScore -= 10;
  else if (forecast.precipitation > 0.5) dayScore -= 5;

  if (forecast.precipProbability > 70) dayScore -= 8;
  else if (forecast.precipProbability > 50) dayScore -= 4;

  const icon = weatherCodeInfo(forecast.weatherCode).icon;
  if (icon === "thunder") dayScore -= 25;
  if (icon === "snow") dayScore -= 15;

  if (forecast.windMax > 70) dayScore -= 12;
  else if (forecast.windMax > 50) dayScore -= 6;

  if (forecast.tempMin < -2) dayScore -= 12;
  else if (forecast.tempMin < 2) dayScore -= 6;

  return Math.max(0, Math.min(100, dayScore));
}

function liveLabel(score: number): string {
  if (score >= 80) return "Excellent";
  if (score >= 65) return "Good";
  if (score >= 50) return "Mixed";
  if (score >= 35) return "Challenging";
  return "Poor";
}

function liveTone(score: number): WeatherAssessment["tone"] {
  if (score >= 65) return "green";
  if (score >= 50) return "yellow";
  if (score >= 35) return "orange";
  return "red";
}

export function assessLiveWeather(
  hikingStops: WeatherStop[],
  forecasts: Map<string, DailyForecast[]>,
): LiveWeatherStats | null {
  const withForecast = hikingStops
    .map((stop) => ({
      stop,
      forecast: lookupDay(
        forecasts,
        stop.latitude,
        stop.longitude,
        stop.dateIso,
      ),
    }))
    .filter((row): row is { stop: WeatherStop; forecast: DailyForecast } =>
      Boolean(row.forecast),
    );

  if (withForecast.length === 0) return null;

  let wetHikingDays = 0;
  let stormDays = 0;
  let scoreSum = 0;

  for (const { forecast } of withForecast) {
    const dayScore = scoreForecastDay(forecast);
    scoreSum += dayScore;

    if (forecast.precipitation > 0.5 || forecast.precipProbability > 50) {
      wetHikingDays += 1;
    }
    if (weatherCodeInfo(forecast.weatherCode).icon === "thunder") {
      stormDays += 1;
    }
  }

  const score = Math.round(scoreSum / withForecast.length);
  const hikingDays = withForecast.length;

  const hintParts: string[] = [];
  if (wetHikingDays > 0) {
    hintParts.push(
      `${wetHikingDays} wet hike day${wetHikingDays === 1 ? "" : "s"}`,
    );
  }
  if (stormDays > 0) {
    hintParts.push(
      `${stormDays} storm risk day${stormDays === 1 ? "" : "s"}`,
    );
  }
  if (hintParts.length === 0) {
    hintParts.push("Dry outlook on hiking days");
  }

  return {
    score,
    label: liveLabel(score),
    hint: hintParts.join(" · "),
    wetHikingDays,
    stormDays,
    hikingDays,
  };
}

export function assessLiveWeatherFromRows(
  rows: { stop: WeatherStop; forecast: DailyForecast | null }[],
): LiveWeatherStats | null {
  const hiking = rows.filter(
    (row) => row.stop.dayLabel.startsWith("Hike") && row.forecast,
  );

  if (hiking.length === 0) return null;

  let wetHikingDays = 0;
  let stormDays = 0;
  let scoreSum = 0;

  for (const { forecast } of hiking) {
    const day = forecast!;
    scoreSum += scoreForecastDay(day);

    if (day.precipitation > 0.5 || day.precipProbability > 50) {
      wetHikingDays += 1;
    }
    if (weatherCodeInfo(day.weatherCode).icon === "thunder") {
      stormDays += 1;
    }
  }

  const score = Math.round(scoreSum / hiking.length);
  const hintParts: string[] = [];
  if (wetHikingDays > 0) {
    hintParts.push(
      `${wetHikingDays} wet hike day${wetHikingDays === 1 ? "" : "s"}`,
    );
  }
  if (stormDays > 0) {
    hintParts.push(
      `${stormDays} storm risk day${stormDays === 1 ? "" : "s"}`,
    );
  }
  if (hintParts.length === 0) {
    hintParts.push("Dry outlook on hiking days");
  }

  return {
    score,
    label: liveLabel(score),
    hint: hintParts.join(" · "),
    wetHikingDays,
    stormDays,
    hikingDays: hiking.length,
  };
}

export function buildWeatherAssessment(
  tripId: string,
  live?: LiveWeatherStats | null,
): WeatherAssessment {
  const profile = getWeatherProfile(tripId);

  if (live) {
    return {
      seasonScore: profile.seasonScore,
      seasonLabel: profile.seasonLabel,
      summary: profile.summary,
      live,
      displayValue: live.label,
      displayHint: `${live.hint} · ${profile.seasonLabel}`,
      tone: liveTone(live.score),
    };
  }

  return {
    seasonScore: profile.seasonScore,
    seasonLabel: profile.seasonLabel,
    summary: profile.summary,
    displayValue: `${profile.seasonScore}/10`,
    displayHint: profile.seasonLabel,
    tone:
      profile.seasonScore >= 8
        ? "green"
        : profile.seasonScore >= 6
          ? "yellow"
          : "orange",
  };
}

export async function fetchAllTripsLiveWeather(
  trips: { meta: { id: string }; weatherStops: WeatherStop[] }[],
): Promise<Record<string, LiveWeatherStats | null>> {
  const hikingStops = trips.flatMap((trip) =>
    trip.weatherStops.filter((s) => s.dayLabel.startsWith("Hike")),
  );

  if (hikingStops.length === 0) return {};

  const forecasts = await fetchForecastsForStops(hikingStops);
  const out: Record<string, LiveWeatherStats | null> = {};

  for (const trip of trips) {
    const stops = trip.weatherStops.filter((s) => s.dayLabel.startsWith("Hike"));
    out[trip.meta.id] = assessLiveWeather(stops, forecasts);
  }

  return out;
}

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
  Sun,
  Wind,
} from "lucide-react";
import { weatherCodeInfo, type WeatherCodeInfo } from "../lib/openMeteo";
import { useDayForecast } from "../context/TripWeatherContext";

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

export function DayWeatherStrip({
  dateIso,
  dayLabel,
}: {
  dateIso: string;
  dayLabel: string;
}) {
  const { forecast, loading, error } = useDayForecast(dateIso, dayLabel);

  if (loading) {
    return (
      <div className="flex items-center gap-2 mt-3 py-2 px-3 rounded-lg bg-gray-800/40 border border-gray-800 text-xs text-gray-500">
        <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden="true" />
        Loading forecast…
      </div>
    );
  }

  if (error || !forecast) {
    return null;
  }

  const info = weatherCodeInfo(forecast.weatherCode);
  const Icon = ICONS[info.icon];
  const wet = forecast.precipitation > 1 || forecast.precipProbability > 50;

  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 py-2.5 px-3 rounded-lg border text-xs ${
        wet
          ? "bg-yellow-500/10 border-yellow-500/25"
          : "bg-gray-800/40 border-gray-800"
      }`}
    >
      <span className="flex items-center gap-1.5 text-gray-300 font-medium">
        <Icon className={`w-4 h-4 ${iconColor(info.icon)}`} aria-hidden="true" />
        {info.label}
      </span>
      <span className="text-gray-400">
        {Math.round(forecast.tempMax)}° / {Math.round(forecast.tempMin)}°
      </span>
      <span className="flex items-center gap-1 text-gray-400">
        <Droplets className="w-3 h-3" aria-hidden="true" />
        {forecast.precipitation > 0
          ? `${forecast.precipitation.toFixed(1)} mm`
          : "Dry"}
        {forecast.precipProbability > 30 && (
          <span className="text-gray-500">({forecast.precipProbability}%)</span>
        )}
      </span>
      <span className="flex items-center gap-1 text-gray-400">
        <Wind className="w-3 h-3" aria-hidden="true" />
        {Math.round(forecast.windMax)} km/h
      </span>
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
    default:
      return "text-gray-400";
  }
}

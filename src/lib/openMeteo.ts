export interface DailyForecast {
  date: string;
  weatherCode: number;
  tempMax: number;
  tempMin: number;
  precipitation: number;
  precipProbability: number;
  windMax: number;
}

export interface ForecastResponse {
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum: number[];
    precipitation_probability_max: number[];
    wind_speed_10m_max: number[];
  };
}

export interface WeatherCodeInfo {
  label: string;
  icon: "sun" | "partly-cloudy" | "cloud" | "fog" | "drizzle" | "rain" | "snow" | "thunder";
}

const WMO_CODES: Record<number, WeatherCodeInfo> = {
  0: { label: "Clear", icon: "sun" },
  1: { label: "Mainly clear", icon: "partly-cloudy" },
  2: { label: "Partly cloudy", icon: "partly-cloudy" },
  3: { label: "Overcast", icon: "cloud" },
  45: { label: "Fog", icon: "fog" },
  48: { label: "Rime fog", icon: "fog" },
  51: { label: "Light drizzle", icon: "drizzle" },
  53: { label: "Drizzle", icon: "drizzle" },
  55: { label: "Heavy drizzle", icon: "drizzle" },
  56: { label: "Freezing drizzle", icon: "drizzle" },
  57: { label: "Freezing drizzle", icon: "drizzle" },
  61: { label: "Light rain", icon: "rain" },
  63: { label: "Rain", icon: "rain" },
  65: { label: "Heavy rain", icon: "rain" },
  66: { label: "Freezing rain", icon: "rain" },
  67: { label: "Freezing rain", icon: "rain" },
  71: { label: "Light snow", icon: "snow" },
  73: { label: "Snow", icon: "snow" },
  75: { label: "Heavy snow", icon: "snow" },
  77: { label: "Snow grains", icon: "snow" },
  80: { label: "Light showers", icon: "rain" },
  81: { label: "Showers", icon: "rain" },
  82: { label: "Heavy showers", icon: "rain" },
  85: { label: "Snow showers", icon: "snow" },
  86: { label: "Heavy snow showers", icon: "snow" },
  95: { label: "Thunderstorm", icon: "thunder" },
  96: { label: "Thunderstorm & hail", icon: "thunder" },
  99: { label: "Thunderstorm & hail", icon: "thunder" },
};

export function weatherCodeInfo(code: number): WeatherCodeInfo {
  return WMO_CODES[code] ?? { label: "Unknown", icon: "cloud" };
}

function coordKey(lat: number, lon: number): string {
  return `${lat.toFixed(4)},${lon.toFixed(4)}`;
}

export async function fetchForecast(
  latitude: number,
  longitude: number,
): Promise<DailyForecast[]> {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_sum",
      "precipitation_probability_max",
      "wind_speed_10m_max",
    ].join(","),
    timezone: "Europe/London",
    forecast_days: "16",
  });

  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?${params}`,
  );

  if (!res.ok) {
    throw new Error(`Weather service returned ${res.status}`);
  }

  const data = (await res.json()) as ForecastResponse;
  const { daily } = data;

  return daily.time.map((date, i) => ({
    date,
    weatherCode: daily.weather_code[i] ?? 0,
    tempMax: daily.temperature_2m_max[i] ?? 0,
    tempMin: daily.temperature_2m_min[i] ?? 0,
    precipitation: daily.precipitation_sum[i] ?? 0,
    precipProbability: daily.precipitation_probability_max[i] ?? 0,
    windMax: daily.wind_speed_10m_max[i] ?? 0,
  }));
}

export async function fetchForecastsForStops(
  stops: { latitude: number; longitude: number }[],
): Promise<Map<string, DailyForecast[]>> {
  const unique = new Map<string, { lat: number; lon: number }>();

  for (const stop of stops) {
    const key = coordKey(stop.latitude, stop.longitude);
    if (!unique.has(key)) {
      unique.set(key, { lat: stop.latitude, lon: stop.longitude });
    }
  }

  const entries = await Promise.all(
    [...unique.entries()].map(async ([key, { lat, lon }]) => {
      const forecast = await fetchForecast(lat, lon);
      return [key, forecast] as const;
    }),
  );

  return new Map(entries);
}

export function lookupDay(
  forecasts: Map<string, DailyForecast[]>,
  lat: number,
  lon: number,
  date: string,
): DailyForecast | null {
  const days = forecasts.get(coordKey(lat, lon));
  if (!days) return null;
  return days.find((d) => d.date === date) ?? null;
}

export { coordKey };

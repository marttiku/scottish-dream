import type { HikingDay } from "../data/types";
import { getDayPhotos } from "../data/types";
import type { DayPhoto } from "../data/photos";
import { PhotoCarousel } from "./PhotoCarousel";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DIFFICULTY_STYLES = {
  moderate: "bg-green-500/20 text-green-400",
  challenging: "bg-yellow-500/20 text-yellow-400",
  strenuous: "bg-red-500/20 text-red-400",
};

export function HikeDayDetails({
  day,
  dayPhotos,
}: {
  day: HikingDay;
  dayPhotos: Record<string, DayPhoto[]>;
}) {
  return (
    <div className="mt-4 pt-4 border-t border-gray-800">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <p className="text-sm text-gray-500">
          {day.from} → {day.to}
        </p>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${DIFFICULTY_STYLES[day.difficulty]}`}
        >
          {day.difficulty}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Metric label="Distance" value={`${day.distanceKm} km`} />
        <Metric label="Ascent" value={`${day.ascentM} m`} />
        <Metric label="Overnight" value={day.camp} />
      </div>

      <ul className="mt-3 space-y-1.5">
        {day.highlights.map((h, i) => (
          <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
            <span className="text-indigo-500 mt-1">▸</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-4 h-36">
        <p className="text-xs text-gray-500 mb-2">Elevation profile (approx.)</p>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={day.elevationProfile}>
            <defs>
              <linearGradient id={`grad-${day.day}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="km"
              tick={{ fill: "#6b7280", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#6b7280", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              width={35}
              unit="m"
            />
            <Tooltip
              contentStyle={{
                background: "#111827",
                border: "1px solid #374151",
                borderRadius: "6px",
                fontSize: "12px",
              }}
              labelFormatter={(v) => `${v} km`}
              formatter={(v) => [`${v} m`, "Altitude"]}
            />
            <Area
              type="monotone"
              dataKey="alt"
              stroke="#818cf8"
              strokeWidth={2}
              fill={`url(#grad-${day.day})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {getDayPhotos(dayPhotos, day.dateIso, day.dayLabel).length > 0 && (
      <div className="mt-4">
        <PhotoCarousel
          photos={getDayPhotos(dayPhotos, day.dateIso, day.dayLabel)}
          label={`${day.title} photos`}
        />
      </div>
      )}
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-800/50 rounded-lg px-3 py-2">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-medium text-gray-200 mt-0.5">{value}</p>
    </div>
  );
}

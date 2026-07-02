import type { HikingDay } from "../data/trip";
import { getHikePhotos } from "../data/photos";
import { formatTripDateLong, formatTripDateShort } from "../lib/dates";
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

export function HikingSection({
  id,
  title,
  subtitle,
  days,
  accentFrom,
  accentTo,
}: {
  id: string;
  title: string;
  subtitle: string;
  days: HikingDay[];
  accentFrom: string;
  accentTo: string;
}) {
  return (
    <section id={id}>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-100">{title}</h2>
        <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
      </div>
      <div className="grid gap-6">
        {days.map((day) => (
          <DayCard
            key={day.day}
            day={day}
            accentFrom={accentFrom}
            accentTo={accentTo}
          />
        ))}
      </div>
    </section>
  );
}

function DayCard({
  day,
  accentFrom,
  accentTo,
}: {
  day: HikingDay;
  accentFrom: string;
  accentTo: string;
}) {
  return (
    <article className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      <div
        className="h-2"
        style={{
          background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})`,
        }}
        aria-hidden="true"
      />
      <div className="p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <time
                dateTime={day.dateIso}
                className="text-xs font-medium text-indigo-400"
              >
                {formatTripDateShort(day.dateIso)}
              </time>
              <span className="text-xs text-gray-600">· Day {day.day}</span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              {formatTripDateLong(day.dateIso)}
            </p>
            <h3 className="text-lg font-semibold text-gray-100 mt-0.5">
              {day.title}
            </h3>
            <p className="text-sm text-gray-500 mt-0.5">
              {day.from} → {day.to}
            </p>
          </div>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${DIFFICULTY_STYLES[day.difficulty]}`}
          >
            {day.difficulty}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4">
          <Metric label="Distance" value={`${day.distanceKm} km`} />
          <Metric label="Ascent" value={`${day.ascentM} m`} />
          <Metric label="Camp" value={day.camp} />
        </div>

        <ul className="mt-4 space-y-1.5">
          {day.highlights.map((h, i) => (
            <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
              <span className="text-indigo-500 mt-1">▸</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <p className="text-xs text-gray-500 mb-2">Photos</p>
          <PhotoCarousel
            photos={getHikePhotos(day.dateIso, day.dayLabel)}
            label={`${day.title} photos`}
          />
        </div>

        <div className="mt-5 h-36">
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
                label={{
                  value: "km",
                  position: "insideBottomRight",
                  fill: "#6b7280",
                  fontSize: 10,
                }}
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
      </div>
    </article>
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

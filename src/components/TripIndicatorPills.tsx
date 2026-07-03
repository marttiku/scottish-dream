import type { EffortStats } from "../lib/effort";
import { effortTone } from "../lib/effort";
import type { TrailTimeStats } from "../lib/trail-time";
import { trailTimeTone } from "../lib/trail-time";
import type { WeatherAssessment } from "../lib/weather-assessment";
import { Activity, CloudSun, Footprints, Loader2 } from "lucide-react";

const TONE_CLASSES = {
  green: "border-green-500/30 bg-green-500/10 text-green-400",
  yellow: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
  orange: "border-orange-500/30 bg-orange-500/10 text-orange-400",
  red: "border-red-500/30 bg-red-500/10 text-red-400",
  purple: "border-purple-500/30 bg-purple-500/10 text-purple-400",
} as const;

export function TripIndicatorPills({
  trailTime,
  effort,
  weather,
  weatherLoading,
  compact,
  dense,
}: {
  trailTime: TrailTimeStats;
  effort: EffortStats;
  weather: WeatherAssessment;
  weatherLoading?: boolean;
  compact?: boolean;
  /** Tighter layout for horizontal trip cards */
  dense?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-3 gap-1.5 w-full ${compact ? "" : "mt-3"}`}
      aria-label="Trip indicators: trail time, effort, weather"
    >
      <IndicatorPill
        icon={Footprints}
        label="Trail time"
        value={`${trailTime.percent}%`}
        hint={trailTime.hint}
        tone={trailTimeTone(trailTime.percent)}
        dense={dense}
      />
      <IndicatorPill
        icon={Activity}
        label="Effort"
        value={effort.label}
        hint={effort.hint}
        tone={effortTone(effort.label)}
        dense={dense}
      />
      <IndicatorPill
        icon={weatherLoading ? Loader2 : CloudSun}
        label="Weather"
        value={weather.displayValue}
        hint={weather.displayHint}
        tone={weather.tone}
        spinning={weatherLoading}
        dense={dense}
      />
    </div>
  );
}

function IndicatorPill({
  icon: Icon,
  label,
  value,
  hint,
  tone,
  spinning,
  dense,
}: {
  icon: typeof Footprints;
  label: string;
  value: string;
  hint: string;
  tone: keyof typeof TONE_CLASSES;
  spinning?: boolean;
  dense?: boolean;
}) {
  return (
    <div
      className={`min-w-0 rounded-lg border backdrop-blur-sm ${dense ? "px-1.5 py-1.5" : "px-2.5 py-2"} ${TONE_CLASSES[tone]}`}
    >
      <div className="flex items-center gap-0.5 text-[9px] font-medium uppercase tracking-wide opacity-80">
        <Icon
          className={`w-2.5 h-2.5 shrink-0 ${spinning ? "animate-spin motion-reduce:animate-none" : ""}`}
          aria-hidden="true"
        />
        <span className="truncate">{label}</span>
      </div>
      <p
        className={`mt-0.5 font-semibold leading-tight truncate ${dense ? "text-xs" : "text-sm"}`}
        title={value}
      >
        {value}
      </p>
      {!dense && (
        <p className="mt-0.5 text-[10px] leading-snug opacity-75 line-clamp-2">
          {hint}
        </p>
      )}
    </div>
  );
}

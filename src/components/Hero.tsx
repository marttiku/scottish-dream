import { TRIP_META } from "../data/trip";
import { formatTripDateRange, formatTripDateShort } from "../lib/dates";
import { Calendar, Footprints, MapPin, TrendingUp } from "lucide-react";

function daysUntil(dateStr: string): number {
  const target = new Date(dateStr + "T00:00:00");
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

export function Hero() {
  const days = daysUntil(TRIP_META.departureDate);

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
          {TRIP_META.subtitle}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mt-2 tracking-tight">
          {TRIP_META.title}
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl text-lg leading-relaxed">
          {TRIP_META.tagline}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          {formatTripDateRange(TRIP_META.departureDate, TRIP_META.returnDate)}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <StatCard
            icon={Calendar}
            label="Departure"
            value={formatTripDateShort(TRIP_META.departureDate)}
            hint={
              days > 0
                ? `${days} days away`
                : days === 0
                  ? "Today"
                  : "Underway"
            }
          />
          <StatCard icon={Footprints} label="Hiking days" value="5" />
          <StatCard icon={MapPin} label="Trail distance" value={TRIP_META.totalHikingKm + " km"} />
          <StatCard icon={TrendingUp} label="Knoydart" value="3 days" />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="bg-gray-900/60 backdrop-blur border border-gray-800 rounded-lg px-4 py-3 min-w-[130px]">
      <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
        <Icon className="w-3.5 h-3.5" aria-hidden="true" />
        {label}
      </div>
      <p className="text-xl font-semibold text-gray-100">{value}</p>
      {hint && <p className="text-xs text-gray-500 mt-0.5">{hint}</p>}
    </div>
  );
}

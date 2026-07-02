import { Sidebar, MobileNav } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { RouteMap } from "./components/RouteMap";
import { Timeline } from "./components/Timeline";
import { HikingSection } from "./components/HikingSection";
import { Connections } from "./components/Connections";
import { PackingList } from "./components/PackingList";
import { Tips } from "./components/Tips";
import { Weather } from "./components/Weather";
import { KNOYDART_DAYS, MORVERN_DAYS, TRIP_META } from "./data/trip";
import { formatTripDateRangeWithWeekdays, formatTripDateShort } from "./lib/dates";

export default function App() {
  return (
    <div className="h-screen flex bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <MobileNav />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-12 max-w-5xl">
          <Hero />

          <div className="grid lg:grid-cols-2 gap-6">
            <RouteMap />
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col justify-center">
              <h3 className="text-sm font-semibold text-gray-100">Trip shape</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <Row
                  label="Dates"
                  value={formatTripDateRangeWithWeekdays(
                    TRIP_META.departureDate,
                    TRIP_META.returnDate,
                  )}
                />
                <Row label="Knoydart traverse" value="Thu 9 – Sat 11 Jul · ~70 km · no Glenfinnan overnight" />
                <Row label="Loch Shiel crossing" value="Same day as finish · Glenfinnan → Polloch ferry" />
                <Row label="Morvern leg" value="1 hike day + bus & ferries to Oban" />
                <Row label="Total on foot" value="~108 km over 5 days" />
                <Row label="Midges" value="Peak season — net & Smidge essential" />
              </dl>
            </div>
          </div>

          <Timeline />

          <HikingSection
            id="knoydart"
            title="Knoydart · 3 days"
            subtitle={`${formatTripDateShort("2026-07-09")} – ${formatTripDateShort("2026-07-11")} · Inverie → Glenfinnan · Mam Unndal & Glen Dessarry`}
            days={KNOYDART_DAYS}
            accentFrom="#6366f1"
            accentTo="#818cf8"
          />

          <HikingSection
            id="morvern"
            title="Morvern → Oban"
            subtitle={`${formatTripDateShort("2026-07-12")} – ${formatTripDateShort("2026-07-13")} · 1 day on foot, then bus & ferries`}
            days={MORVERN_DAYS}
            accentFrom="#0891b2"
            accentTo="#22d3ee"
          />

          <Connections />
          <PackingList />
          <Weather />
          <Tips />

          <footer className="text-center text-xs text-gray-600 pb-4">
            Scottish Dream · {formatTripDateRangeWithWeekdays(TRIP_META.departureDate, TRIP_META.returnDate)}
          </footer>
        </main>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
      <dt className="text-gray-500">{label}</dt>
      <dd className="text-gray-300 sm:text-right">{value}</dd>
    </div>
  );
}

import { Sidebar, MobileNav } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { RouteMap } from "./components/RouteMap";
import { Timeline } from "./components/Timeline";
import { HikingSection } from "./components/HikingSection";
import { Connections } from "./components/Connections";
import { PackingList } from "./components/PackingList";
import { Tips } from "./components/Tips";
import { KNOYDART_DAYS, MORVERN_DAYS } from "./data/trip";

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
                <Row label="Knoydart traverse" value="3 days · ~70 km · no Glenfinnan overnight" />
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
            subtitle="Inverie → Glenfinnan · Mam Unndal & Glen Dessarry"
            days={KNOYDART_DAYS}
            accentFrom="#6366f1"
            accentTo="#818cf8"
          />

          <HikingSection
            id="morvern"
            title="Morvern → Oban"
            subtitle="1 day on foot, then bus & ferries — skips the long peninsula crossing"
            days={MORVERN_DAYS}
            accentFrom="#0891b2"
            accentTo="#22d3ee"
          />

          <Connections />
          <PackingList />
          <Tips />

          <footer className="text-center text-xs text-gray-600 pb-4">
            Scottish Dream · Knoydart & Morvern · July 2026
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

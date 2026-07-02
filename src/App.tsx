import { Sidebar, MobileNav } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { RouteMap } from "./components/RouteMap";
import { Timeline } from "./components/Timeline";
import { Accommodation } from "./components/Accommodation";
import { Connections } from "./components/Connections";
import { PackingList } from "./components/PackingList";
import { GearShop } from "./components/GearShop";
import { Food } from "./components/Food";
import { Tips } from "./components/Tips";
import { Wildlife } from "./components/Wildlife";
import { Weather } from "./components/Weather";
import { TripWeatherProvider } from "./context/TripWeatherContext";
import { TRIP_META } from "./data/trip";
import { formatTripDateRangeWithWeekdays } from "./lib/dates";

export default function App() {
  return (
    <TripWeatherProvider>
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
                <Row label="Knoydart traverse" value="Thu 9 – Sat 11 Jul · ~70 km · overnight Glenfinnan" />
                <Row label="Loch Shiel crossing" value="Sun 12 Jul morning · Glenfinnan → Polloch ferry" />
                <Row label="Morvern leg" value="1 hike day + bus & ferries to Oban" />
                <Row label="Total on foot" value="~108 km over 5 days" />
                <Row label="Midges" value="Peak season — net & Smidge essential" />
              </dl>
            </div>
          </div>

          <Timeline />

          <Accommodation />

          <Connections />
          <PackingList />
          <GearShop />
          <Food />
          <Weather />
          <Wildlife />
          <Tips />

          <footer className="text-center text-xs text-gray-600 pb-4">
            Scottish Dream · {formatTripDateRangeWithWeekdays(TRIP_META.departureDate, TRIP_META.returnDate)}
          </footer>
        </main>
      </div>
    </div>
    </TripWeatherProvider>
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

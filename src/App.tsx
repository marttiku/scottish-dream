import { TripProvider } from "./context/TripContext";
import { TripWeatherProvider } from "./context/TripWeatherContext";
import { Sidebar, MobileNav } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { TripPicker } from "./components/TripPicker";
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
import { useTrip } from "./context/TripContext";
import { formatTripDateRangeWithWeekdays } from "./lib/dates";

function AppContent() {
  const { trip } = useTrip();
  const { meta } = trip;

  return (
    <div className="h-screen flex bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <MobileNav />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-12 max-w-6xl">
          <TripPicker />
          <Hero />

          <div className="grid lg:grid-cols-2 gap-6">
            <RouteMap />
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col justify-center">
              <h3 className="text-sm font-semibold text-gray-100">Trip shape</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <Row
                  label="Dates"
                  value={formatTripDateRangeWithWeekdays(
                    meta.departureDate,
                    meta.returnDate,
                  )}
                />
                {meta.tripShape.map((row) => (
                  <Row key={row.label} label={row.label} value={row.value} />
                ))}
              </dl>
            </div>
          </div>

          <Timeline />
          <Accommodation />
          <Connections />
          <PackingList />
          {meta.showGearShop && <GearShop />}
          {meta.showFood && <Food />}
          <Weather />
          {meta.showWildlife && <Wildlife />}
          <Tips />

          <footer className="text-center text-xs text-gray-600 pb-4">
            {meta.footerLabel} ·{" "}
            {formatTripDateRangeWithWeekdays(
              meta.departureDate,
              meta.returnDate,
            )}
          </footer>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <TripProvider>
      <TripWeatherProvider>
        <AppContent />
      </TripWeatherProvider>
    </TripProvider>
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

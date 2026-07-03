import { useTrip } from "../context/TripContext";
import { SectionHeader } from "./Timeline";

export function Tips() {
  const { trip, tripId } = useTrip();
  const subtitle =
    tripId === "tatras"
      ? "Trail advice for the Slovak High Tatras"
      : "Trail advice for the Highlands";

  return (
    <section id="tips">
      <SectionHeader title="Weather & tips" subtitle={subtitle} />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {trip.tips.map((tip) => (
          <div
            key={tip.title}
            className="bg-gray-900 border border-gray-800 rounded-lg p-4"
          >
            <h3 className="text-sm font-semibold text-gray-100">{tip.title}</h3>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">{tip.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

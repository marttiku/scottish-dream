import { TIPS } from "../data/trip";
import { SectionHeader } from "./Timeline";

export function Tips() {
  return (
    <section id="tips">
      <SectionHeader title="Weather & tips" subtitle="July in the Highlands" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {TIPS.map((tip) => (
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

import {
  WILDLIFE_SPECIES,
  wildlifeLikelihoodLabel,
  type WildlifeLikelihood,
} from "../data/wildlife";
import { PhotoCarousel } from "./PhotoCarousel";
import { SectionHeader } from "./Timeline";

const LIKELIHOOD_STYLES: Record<WildlifeLikelihood, string> = {
  common: "bg-green-500/20 text-green-400",
  possible: "bg-yellow-500/20 text-yellow-400",
  lucky: "bg-blue-500/20 text-blue-400",
};

export function Wildlife() {
  return (
    <section id="wildlife">
      <SectionHeader
        title="Wildlife"
        subtitle="What to watch for along Inverie → Oban — dawn and dusk are best"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {WILDLIFE_SPECIES.map((species) => (
          <article
            key={species.id}
            className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden flex flex-col"
          >
            <PhotoCarousel
              photos={species.photos}
              label={`${species.name} photos`}
              variant="compact"
            />
            <div className="p-4 flex flex-col flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold text-gray-100">
                    {species.name}
                  </h3>
                  {species.latinName && (
                    <p className="text-xs text-gray-500 italic mt-0.5">
                      {species.latinName}
                    </p>
                  )}
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full shrink-0 ${LIKELIHOOD_STYLES[species.likelihood]}`}
                >
                  {wildlifeLikelihoodLabel(species.likelihood)}
                </span>
              </div>
              <p className="text-xs text-indigo-400/90 mt-2 font-medium">
                {species.route}
              </p>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed flex-1">
                {species.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
      <p className="text-xs text-gray-600 mt-4 text-center">
        Keep distance · never feed wild animals · dogs on lead near livestock &
        ground-nesting birds
      </p>
    </section>
  );
}

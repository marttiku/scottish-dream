import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { DayPhoto } from "../data/photos";
import { photoSrc } from "../lib/assetUrl";

interface PhotoCarouselProps {
  photos: DayPhoto[];
  /** compact = shorter, used in timeline */
  variant?: "default" | "compact";
  label: string;
}

export function PhotoCarousel({
  photos,
  variant = "default",
  label,
}: PhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const count = photos.length;
  const heightClass = variant === "compact" ? "h-44 sm:h-52" : "h-52 sm:h-64";

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      const wrapped = ((next % count) + count) % count;
      setIndex(wrapped);
      const el = scrollRef.current;
      if (!el) return;
      const slide = el.children[wrapped] as HTMLElement | undefined;
      slide?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    },
    [count],
  );

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || count === 0) return;

    const onScroll = () => {
      const slides = [...el.children] as HTMLElement[];
      if (slides.length === 0) return;
      const center = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      slides.forEach((slide, i) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const dist = Math.abs(center - slideCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setIndex(closest);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo(index - 1);
      if (e.key === "ArrowRight") goTo(index + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, index]);

  if (count === 0) {
    return (
      <div
        className={`${heightClass} rounded-lg border border-dashed border-gray-700 bg-gray-800/30 flex items-center justify-center`}
      >
        <p className="text-xs text-gray-500">Photos coming soon</p>
      </div>
    );
  }

  return (
    <div className="relative group/carousel" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={scrollRef}
        className={`flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-none ${heightClass} rounded-lg`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {photos.map((photo, i) => (
          <figure
            key={`${photo.src}-${i}`}
            className="relative shrink-0 snap-center w-full h-full rounded-lg overflow-hidden border border-gray-800"
          >
            <img
              src={photoSrc(photo.src)}
              alt={photo.alt}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"
              aria-hidden="true"
            />
            {photo.caption && (
              <figcaption className="absolute bottom-0 left-0 right-0 px-3 py-2 text-xs text-gray-200">
                {photo.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-gray-950/70 border border-gray-700 text-gray-200 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 hover:bg-gray-900 transition-opacity motion-reduce:transition-none"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-gray-950/70 border border-gray-700 text-gray-200 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 hover:bg-gray-900 transition-opacity motion-reduce:transition-none"
            aria-label="Next photo"
          >
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>

          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5"
            role="tablist"
            aria-label="Photo slides"
          >
            {photos.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Photo ${i + 1} of ${count}`}
                onClick={() => goTo(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors motion-reduce:transition-none ${
                  i === index ? "bg-indigo-400" : "bg-gray-500/60 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

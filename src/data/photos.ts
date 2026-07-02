export interface DayPhoto {
  /** Path under public/photos/ or absolute URL */
  src: string;
  alt: string;
  caption?: string;
}

/** Key: `${dateIso}::${dayLabel}` — one carousel per timeline day */
export const DAY_PHOTOS: Record<string, DayPhoto[]> = {
  "2026-07-07::Day 0": [
    {
      src: "https://images.unsplash.com/photo-1506377585624-bed6fdd9303a?w=1200&q=80",
      alt: "Edinburgh skyline at dusk",
      caption: "Edinburgh — arrival evening",
    },
    {
      src: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=80",
      alt: "Edinburgh old town streets",
      caption: "Old Town near Waverley",
    },
    {
      src: "https://images.unsplash.com/photo-1599571237934-711fb4c8a0e0?w=1200&q=80",
      alt: "Edinburgh castle on the rock",
      caption: "Edinburgh Castle",
    },
  ],
  "2026-07-08::Day 1": [
    {
      src: "https://images.unsplash.com/photo-1587330979470-3585a3f6d8d6?w=1200&q=80",
      alt: "Scottish highland railway through mountains",
      caption: "West Highland Line",
    },
    {
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
      alt: "Steam train crossing Glenfinnan viaduct",
      caption: "Glenfinnan Viaduct — same line you'll ride",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
      alt: "Mountain peaks above clouds in the Highlands",
      caption: "Approaching the west coast",
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
      alt: "Misty loch in the Scottish Highlands",
      caption: "Mallaig & ferry to Knoydart",
    },
  ],
  "2026-07-09::Hike 1": [
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
      alt: "Sunlit forest path",
      caption: "Inverie trailhead — into the woods",
    },
    {
      src: "https://images.unsplash.com/photo-1477466386278-972548284772?w=1200&q=80",
      alt: "Remote Scottish highland loch",
      caption: "Loch Nevis coastal walking",
    },
    {
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
      alt: "Mountain ridge in the Highlands",
      caption: "Knoydart — rough ground ahead",
    },
    {
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
      alt: "Highland peaks at sunset",
      caption: "Wild camp at Sourlies",
    },
  ],
  "2026-07-10::Hike 2": [
    {
      src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=80",
      alt: "Snow-capped mountain range",
      caption: "Sourlies — morning on Loch Nevis",
    },
    {
      src: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80",
      alt: "Mountain pass with dramatic clouds",
      caption: "Mam Unndal pass (~620 m)",
    },
    {
      src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1200&q=80",
      alt: "Deep green glen between mountains",
      caption: "Descending into Glen Dessarry",
    },
    {
      src: "https://images.unsplash.com/photo-1439068793947-89a70344c4c1?w=1200&q=80",
      alt: "Still lake reflecting mountains",
      caption: "Camp near A' Chuil Bothy",
    },
  ],
  "2026-07-11::Hike 3": [
    {
      src: "https://images.unsplash.com/photo-1421789665209-4029fc0e4fc8?w=1200&q=80",
      alt: "Valley track through highland scenery",
      caption: "Glen Dessarry track walking",
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
      alt: "Sun rays over mountain landscape",
      caption: "Bealach an Lagain Duibh",
    },
    {
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
      alt: "Glenfinnan viaduct with train",
      caption: "Glenfinnan Viaduct — finish line",
    },
  ],
  "2026-07-11::Transit": [
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
      alt: "Calm lake at golden hour",
      caption: "Loch Shiel — ferry crossing",
    },
    {
      src: "https://images.unsplash.com/photo-1439068793947-89a70344c4c1?w=1200&q=80",
      alt: "Mountain loch reflections",
      caption: "Glenfinnan → Polloch",
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
      alt: "Misty highland loch",
      caption: "Evening arrival at Polloch",
    },
  ],
  "2026-07-12::Hike 4": [
    {
      src: "https://images.unsplash.com/photo-1448375248136-9eeb8df53c96?w=1200&q=80",
      alt: "Dense green forest trail",
      caption: "Atlantic oak woodland",
    },
    {
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80",
      alt: "Green hills and open sky",
      caption: "Loch Shiel shoreline tracks",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
      alt: "Highland mountain vista",
      caption: "Estate paths toward Strontian",
    },
  ],
  "2026-07-13::Transit": [
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
      alt: "Scottish sea loch and coastline",
      caption: "Bus to Lochaline",
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
      alt: "Calm loch at golden hour",
      caption: "Ferry to Lismore",
    },
    {
      src: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=1200&q=80",
      alt: "Coastal harbour town",
      caption: "Oban harbour — finish of the trail",
    },
  ],
  "2026-07-14::Return": [
    {
      src: "https://images.unsplash.com/photo-1587330979470-3585a3f6d8d6?w=1200&q=80",
      alt: "Train through Scottish mountains",
      caption: "Oban → Glasgow → Edinburgh",
    },
    {
      src: "https://images.unsplash.com/photo-1506377585624-bed6fdd9303a?w=1200&q=80",
      alt: "Edinburgh at sunset",
      caption: "Last evening in Scotland",
    },
    {
      src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80",
      alt: "Airplane wing above clouds",
      caption: "Edinburgh → Tallinn",
    },
  ],
};

export function photoKey(dateIso: string, dayLabel: string): string {
  return `${dateIso}::${dayLabel}`;
}

export function getDayPhotos(dateIso: string, dayLabel: string): DayPhoto[] {
  return DAY_PHOTOS[photoKey(dateIso, dayLabel)] ?? [];
}

/** Hiking day cards use the same keys as timeline events */
export function getHikePhotos(dateIso: string, dayLabel: string): DayPhoto[] {
  return getDayPhotos(dateIso, dayLabel);
}

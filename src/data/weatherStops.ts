export interface WeatherStop {
  dateIso: string;
  dayLabel: string;
  location: string;
  context: string;
  latitude: number;
  longitude: number;
}

/** One forecast row per trip day, matched to where you'll be on the trail. */
export const WEATHER_STOPS: WeatherStop[] = [
  {
    dateIso: "2026-07-07",
    dayLabel: "Day 0",
    location: "Edinburgh",
    context: "Arrival · city stay",
    latitude: 55.9533,
    longitude: -3.1883,
  },
  {
    dateIso: "2026-07-08",
    dayLabel: "Day 1",
    location: "Inverie",
    context: "Train & ferry · trailhead",
    latitude: 57.0325,
    longitude: -5.6814,
  },
  {
    dateIso: "2026-07-09",
    dayLabel: "Hike 1",
    location: "Sourlies",
    context: "Inverie → Sourlies · wild camp",
    latitude: 57.017,
    longitude: -5.752,
  },
  {
    dateIso: "2026-07-10",
    dayLabel: "Hike 2",
    location: "Glen Dessarry",
    context: "Sourlies → A' Chuil · Mam Unndal",
    latitude: 56.958,
    longitude: -5.425,
  },
  {
    dateIso: "2026-07-11",
    dayLabel: "Hike 3",
    location: "Glenfinnan",
    context: "A' Chuil → Glenfinnan · long day",
    latitude: 56.8763,
    longitude: -5.4312,
  },
  {
    dateIso: "2026-07-12",
    dayLabel: "Hike 4",
    location: "Strontian",
    context: "Polloch → Strontian",
    latitude: 56.718,
    longitude: -5.684,
  },
  {
    dateIso: "2026-07-13",
    dayLabel: "Transit",
    location: "Oban",
    context: "Bus & ferries from Strontian",
    latitude: 56.415,
    longitude: -5.472,
  },
  {
    dateIso: "2026-07-14",
    dayLabel: "Return",
    location: "Edinburgh",
    context: "Train & flight home",
    latitude: 55.9533,
    longitude: -3.1883,
  },
];

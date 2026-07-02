export interface WeatherStop {
  dateIso: string;
  dayLabel: string;
  location: string;
  context: string;
  latitude: number;
  longitude: number;
}

/** One forecast row per timeline day — keyed by dateIso + dayLabel */
export const WEATHER_STOPS: WeatherStop[] = [
  {
    dateIso: "2026-07-07",
    dayLabel: "Day 0",
    location: "Edinburgh",
    context: "Flight arrival",
    latitude: 55.9533,
    longitude: -3.1883,
  },
  {
    dateIso: "2026-07-07",
    dayLabel: "Stay",
    location: "Edinburgh",
    context: "Overnight · city centre",
    latitude: 55.9533,
    longitude: -3.1883,
  },
  {
    dateIso: "2026-07-08",
    dayLabel: "Day 1",
    location: "Inverie",
    context: "Train & ferry",
    latitude: 57.0325,
    longitude: -5.6814,
  },
  {
    dateIso: "2026-07-08",
    dayLabel: "Stay",
    location: "Inverie",
    context: "Overnight · Knoydart",
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
    dateIso: "2026-07-11",
    dayLabel: "Stay",
    location: "Glenfinnan",
    context: "Overnight · hostel or campsite",
    latitude: 56.8763,
    longitude: -5.4312,
  },
  {
    dateIso: "2026-07-12",
    dayLabel: "Transit",
    location: "Loch Shiel",
    context: "Morning ferry Glenfinnan → Polloch",
    latitude: 56.89,
    longitude: -5.52,
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
    dateIso: "2026-07-13",
    dayLabel: "Stay",
    location: "Oban",
    context: "Overnight · town accommodation",
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

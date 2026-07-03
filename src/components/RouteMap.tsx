import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { TYPE_COLORS, type MapPoint } from "../data/mapRoute";
import { resolveRouteCoords } from "../data/trips";
import { useTrip } from "../context/TripContext";

function makeMarker(point: MapPoint): L.CircleMarker {
  const color = TYPE_COLORS[point.type];
  const marker = L.circleMarker([point.lat, point.lng], {
    radius: point.type === "city" ? 8 : 7,
    fillColor: color,
    color: "#030712",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.95,
  });

  const popup = [
    `<strong>${point.name}</strong>`,
    point.note ? `<br><span style="opacity:0.75">${point.note}</span>` : "",
  ].join("");

  marker.bindPopup(popup);
  return marker;
}

export function RouteMap() {
  const { trip, tripId } = useTrip();
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    const map = L.map(el, {
      center: trip.mapCenter,
      zoom: 9,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    map.on("click", () => map.scrollWheelZoom.enable());
    map.on("mouseout", () => map.scrollWheelZoom.disable());

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      },
    ).addTo(map);

    for (const segment of trip.mapRoutes) {
      const coords = resolveRouteCoords(trip.mapPoints, segment);
      if (coords.length < 2) continue;

      L.polyline(coords, {
        color: segment.color,
        weight: segment.dashed ? 3 : 4,
        opacity: 0.85,
        dashArray: segment.dashed ? "8 8" : undefined,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map);
    }

    for (const point of trip.mapPoints) {
      makeMarker(point).addTo(map);
    }

    map.fitBounds(trip.mapBounds, { padding: [28, 28] });

    mapRef.current = map;

    const ro = new ResizeObserver(() => {
      map.invalidateSize();
    });
    ro.observe(el);

    return () => {
      ro.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, [trip, tripId]);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-100">Route map</h3>
          <p className="text-xs text-gray-500 mt-0.5">{trip.meta.mapSubtitle}</p>
        </div>
        <a
          href={trip.meta.mapOsmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-indigo-400 hover:text-indigo-300 shrink-0"
        >
          Open in OSM
        </a>
      </div>

      <div
        ref={containerRef}
        className="route-map h-72 sm:h-80 w-full rounded-lg overflow-hidden border border-gray-800 z-0"
        role="application"
        aria-label={trip.meta.mapAriaLabel}
      />

      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-xs text-gray-400">
        {trip.mapRoutes
          .filter((s) => !s.id.includes("return") && !s.id.includes("travel-out"))
          .map((seg) => (
            <div key={seg.id} className="flex items-center gap-1.5">
              <span
                className="w-4 h-0.5 rounded"
                style={{
                  backgroundColor: seg.color,
                  opacity: seg.dashed ? 0.7 : 1,
                  backgroundImage: seg.dashed
                    ? `repeating-linear-gradient(90deg, ${seg.color} 0 4px, transparent 4px 7px)`
                    : undefined,
                }}
              />
              {seg.label}
            </div>
          ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-2 text-[10px] text-gray-500">
        {Object.entries(TYPE_COLORS).map(([type, color]) => (
          <span key={type} className="flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-full border border-gray-950"
              style={{ backgroundColor: color }}
            />
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}

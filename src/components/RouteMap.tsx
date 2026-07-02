import { WAYPOINTS, ROUTE_SEGMENTS } from "../data/trip";

const TYPE_COLORS: Record<string, string> = {
  city: "#a78bfa",
  trail: "#6366f1",
  camp: "#22d3ee",
  transport: "#fbbf24",
};

export function RouteMap() {
  const waypointMap = Object.fromEntries(WAYPOINTS.map((w) => [w.id, w]));

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <h3 className="text-sm font-semibold text-gray-100 mb-3">Route overview</h3>
      <svg
        viewBox="0 0 1000 600"
        className="w-full h-auto"
        role="img"
        aria-label="Map showing trek route from Edinburgh through Knoydart to Oban"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgb(55 65 81 / 0.3)"
              strokeWidth="0.5"
            />
          </pattern>
          <linearGradient id="highland" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#042f2e" />
          </linearGradient>
        </defs>

        <rect width="1000" height="600" fill="url(#highland)" rx="8" />
        <rect width="1000" height="600" fill="url(#grid)" rx="8" />

        {/* Scotland rough outline hint */}
        <path
          d="M 150 200 Q 250 150 400 180 Q 550 200 600 280 Q 650 380 500 520 Q 350 560 200 500 Q 120 400 150 200"
          fill="rgb(99 102 241 / 0.05)"
          stroke="rgb(99 102 241 / 0.15)"
          strokeWidth="2"
        />

        {ROUTE_SEGMENTS.map((seg) => {
          const points = seg.points
            .map((id) => waypointMap[id])
            .filter(Boolean);
          const d = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
          return (
            <g key={seg.id}>
              <path
                d={d}
                fill="none"
                stroke={seg.color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={seg.id === "transport" ? "8 6" : undefined}
                opacity="0.8"
              />
            </g>
          );
        })}

        {WAYPOINTS.filter((w) => w.id !== "tallinn").map((wp) => (
          <g key={wp.id}>
            <circle
              cx={wp.x}
              cy={wp.y}
              r="8"
              fill={TYPE_COLORS[wp.type]}
              stroke="#030712"
              strokeWidth="2"
            />
            <text
              x={wp.x}
              y={wp.y - 14}
              textAnchor="middle"
              fill="#d1d5db"
              fontSize="11"
              fontWeight="500"
            >
              {wp.name}
            </text>
          </g>
        ))}

        {/* Tallinn off-map indicator */}
        <text x="880" y="270" fill="#6b7280" fontSize="10" textAnchor="middle">
          ← Tallinn
        </text>
        <line
          x1="900"
          y1="280"
          x2="700"
          y2="400"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.5"
        />
      </svg>

      <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-400">
        {ROUTE_SEGMENTS.map((seg) => (
          <div key={seg.id} className="flex items-center gap-1.5">
            <span
              className="w-3 h-0.5 rounded"
              style={{ backgroundColor: seg.color }}
            />
            {seg.label}
          </div>
        ))}
      </div>
    </div>
  );
}

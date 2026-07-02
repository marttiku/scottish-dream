import {
  Bus,
  Compass,
  Footprints,
  Map,
  Package,
  Plane,
  Ship,
  Train,
  Mountain,
  Info,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: Mountain },
  { id: "timeline", label: "Timeline", icon: Footprints },
  { id: "knoydart", label: "Knoydart", icon: Map },
  { id: "morvern", label: "Morvern", icon: Map },
  { id: "connections", label: "Connections", icon: Train },
  { id: "packing", label: "Packing", icon: Package },
  { id: "tips", label: "Tips", icon: Info },
] as const;

export function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 bg-gray-900 border-r border-gray-800 h-screen sticky top-0">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-lg font-semibold text-gray-100">Scottish Dream</h1>
        <p className="text-xs text-gray-500 mt-1">Highland Trek · Jul 2026</p>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-gray-400 hover:text-gray-100 hover:bg-gray-800 rounded-md transition-colors"
          >
            <Icon className="w-4 h-4" aria-hidden="true" />
            {label}
          </a>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Plane className="w-3.5 h-3.5" aria-hidden="true" />
          <Train className="w-3.5 h-3.5" aria-hidden="true" />
          <Ship className="w-3.5 h-3.5" aria-hidden="true" />
          <Bus className="w-3.5 h-3.5" aria-hidden="true" />
          <Compass className="w-3.5 h-3.5" aria-hidden="true" />
        </div>
      </div>
    </aside>
  );
}

export function MobileNav() {
  return (
    <nav className="lg:hidden sticky top-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-800 overflow-x-auto">
      <div className="flex gap-1 p-2 min-w-max">
        {NAV_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-gray-100 hover:bg-gray-800 rounded-md whitespace-nowrap transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

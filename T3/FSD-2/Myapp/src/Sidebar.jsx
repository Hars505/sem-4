import React from "react";
import {
  Bell,
  Clock3,
  Compass,
  Flame,
  Home,
  Library,
  PlaySquare,
  Settings,
  Shield,
  ThumbsUp,
} from "lucide-react";

const menuItems = [
  { label: "Home", icon: Home },
  { label: "Explore", icon: Compass },
  { label: "Shorts", icon: Flame },
  { label: "Subscriptions", icon: PlaySquare },
  { label: "Library", icon: Library },
  { label: "Watch Later", icon: Clock3 },
  { label: "Liked Videos", icon: ThumbsUp },
];

function Sidebar({ isOpen = true }) {
  return (
    <aside
      className={`hidden h-[calc(100vh-72px)] border-r border-zinc-800 bg-[#0f0f0f] text-white shadow-[0_0_25px_rgba(0,0,0,0.25)] transition-all duration-300 lg:flex lg:flex-col ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="p-4">
        <div className="mb-4 flex items-center gap-3 rounded-2xl bg-zinc-900 px-3 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg shadow-red-900/30">
            <Shield className="h-5 w-5" />
          </div>
          {isOpen && (
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-red-400">
                YouTube
              </p>
              <h3 className="text-sm font-semibold text-white">Replica View</h3>
            </div>
          )}
        </div>

        <nav className="space-y-1">
          {menuItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-zinc-200 transition hover:bg-zinc-800 hover:text-white ${
                isOpen ? "justify-start" : "justify-center"
              }`}
              type="button"
            >
              <Icon className="h-4 w-4" />
              {isOpen && <span>{label}</span>}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto border-t border-zinc-800 p-4">
        <div className="space-y-2 text-sm text-zinc-300">
          <button
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2 hover:bg-zinc-800"
            type="button"
          >
            <Bell className="h-4 w-4" />
            {isOpen && <span>Notifications</span>}
          </button>
          <button
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2 hover:bg-zinc-800"
            type="button"
          >
            <Settings className="h-4 w-4" />
            {isOpen && <span>Settings</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

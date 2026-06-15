import React, { useState } from "react";
import Navbar from "./Navbar";
import Card from "./VideoCard";
import Sidebar from "./Sidebar";

const sampleVideos = [
  {
    title: "Sunset Drive in the City",
    channelName: "Travel Lens",
    views: "18K",
    uploadedAt: "3 days ago",
    duration: "06:42",
    thumbnail:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=450&q=80",
    channelIcon:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=30&q=80",
    tags: ["Travel", "Vlog"],
  },
  {
    title: "Modern UI Design Tips",
    channelName: "Creative Studio",
    views: "9.4K",
    uploadedAt: "1 week ago",
    duration: "11:08",
    thumbnail:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=450&q=80",
    channelIcon:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=30&q=80",
    tags: ["Design", "UI"],
  },
];

function Youtube() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar toggleSidebar={() => setSidebarOpen((prev) => !prev)} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} />
        <main className="flex-1 px-4 py-6 transition-all duration-300 lg:px-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-red-400">
                Featured
              </p>
              <h2 className="text-2xl font-semibold text-white">
                Recommended videos
              </h2>
              <p className="mt-1 text-sm text-zinc-400">
                A clean YouTube-style feed layout with compact cards.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <span className="rounded-full bg-zinc-800 px-3 py-1">
                Trending
              </span>
              <span className="rounded-full bg-zinc-800 px-3 py-1">Music</span>
              <span className="rounded-full bg-zinc-800 px-3 py-1">Live</span>
            </div>
          </div>
          <section className="flex flex-wrap gap-4">
            {sampleVideos.map((video, index) => (
              <Card key={index} video={video} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default Youtube;

import React from "react";

function VideoCard({ video = {} }) {
  const {
    title = "Mountain View",
    channelName = "Studio Vibes",
    views = "12K",
    uploadedAt = "2 days ago",
    duration = "08:24",
    thumbnail = "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=250&q=80",
    channelIcon = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=30&q=80",
    tags = ["New", "Trending"],
  } = video;

  return (
    <article className="w-[400px] max-w-full rounded-2xl border border-zinc-800 bg-[#171717] p-2 shadow-[0_16px_35px_rgba(0,0,0,0.35)] transition duration-200 hover:-translate-y-1 hover:border-red-500/40">
      <div className="flex gap-3">
        <div className="relative h-[150px] w-[180px] overflow-hidden rounded-xl bg-zinc-900">
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-1 text-[10px] font-semibold text-white">
            {duration}
          </span>
        </div>

        <div className="flex w-52 flex-1 flex-col justify-between text-white">
          <div className="space-y-1">
            <div className="flex flex-wrap gap-1">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded bg-red-500/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-sm font-semibold leading-snug text-white">
              {title}
            </h3>
            <p className="text-xs text-zinc-300">{channelName}</p>
            <p className="text-[11px] text-zinc-400">
              {views} views • {uploadedAt}
            </p>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <img
              src={channelIcon}
              alt={channelName}
              className="h-8 w-8 rounded-full border border-zinc-200 object-cover"
            />
            <span className="text-[11px] text-zinc-400">Compact preview</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default VideoCard;

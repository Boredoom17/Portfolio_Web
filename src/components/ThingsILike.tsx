import React, { useState } from "react";

const likes = [
  {
    emoji: "🏔️",
    label: "Mountains & Nature",
    desc: "Trekking through silence where chaos feels calm.",
  },
  {
    emoji: "🎮",
    label: "Gaming",
    desc: "MLBB, Free Fire, Minecraft, Fortnite and random chaos.",
  },
  {
    emoji: "🌌",
    label: "Observing the World Fold",
    desc: "Watching things move, break, sync, and repeat — and somehow, it makes sense.",
  },
  {
    emoji: "🎸",
    label: "Music",
    desc: "Strumming the guitar or vibing to all songs ever created.",
  },
  {
    emoji: "🛹",
    label: "Skateboarding",
    desc: "Not a pro, but I ride better than I code on Mondays.",
  },
  {
    emoji: "✏️",
    label: "Drawing",
    desc: "Random characters that inspires me and aesthetic scenes.",
  },
  {
    emoji: "🏀",
    label: "Basketball",
    desc: "Mostly street shots and unplanned teamwork.",
  },

  {
    emoji: "💪",
    label: "Working Out",
    desc: "Moving heavy stuff until my mind feels light.",
  },

  {
    emoji: "🧠",
    label: "Trying New Stuff",
    desc: "I test, break, build, repeat. And that’s just a Tuesday.",
  },
];

export default function ThingsILike() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10 w-full max-w-xl mx-auto text-white">
      <button
        onClick={() => setOpen(!open)}
        className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-md font-semibold w-full text-left"
      >
        {open ? "▼ Things I Like" : "▶ Things I Like"}
      </button>

      {open && (
        <div className="mt-4 space-y-4">
          {likes.map(({ emoji, label, desc }, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-4 rounded-md shadow flex items-start space-x-3"
            >
              <div className="text-2xl">{emoji}</div>
              <div>
                <p className="font-semibold">{label}</p>
                <p className="text-gray-300 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

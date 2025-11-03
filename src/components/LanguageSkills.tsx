import React, { useState } from "react";

const languages = [
  { name: "English", level: 90 },
  { name: "Nepali", level: 100 },
  { name: "Hindi", level: 70 },
  { name: "Chinese", level: 30 },
  { name: "Japanese", level: 10 },
];

export default function LanguageSkills() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8 text-white w-full max-w-xl mx-auto">
      <button
        onClick={() => setOpen(!open)}
        className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-md font-semibold transition w-full text-left"
      >
        {open ? "▼ Hide Languages" : "▶ Language Skills"}
      </button>

      {open && (
        <div className="mt-4 space-y-4 transition-all duration-300">
          {languages.map(({ name, level }) => (
            <div key={name}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{name}</span>
                <span className="text-sm text-gray-300">{level}%</span>
              </div>
              <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 transition-all duration-500"
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

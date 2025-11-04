import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import LanguageSkills from "./components/LanguageSkills";
import ThingsILike from "./components/ThingsILike";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const GithubIcon = FaGithub as unknown as React.ElementType;
const LinkedinIcon = FaLinkedin as unknown as React.ElementType;

/* ---------------------- Tiny fade-up reveal animation --------------------- */
function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* -------------------------------- NAVBAR --------------------------------- */
function Navbar() {
  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 border-b border-purple-900/40">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl sm:text-2xl font-bold tracking-wide">
            Boredoom
          </div>
          <ul className="flex space-x-4 sm:space-x-6 text-sm sm:text-base">
            <li>
              <Link to="/" className="hover:text-purple-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-purple-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

/* --------------------------------- HOME ---------------------------------- */
function Home() {
  const navigate = useNavigate();
  const [imgOk, setImgOk] = useState(true);
  const avatarSrc = "/front.jpg"; // ✅ Use /public/root path

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-20 sm:py-24 flex flex-col justify-center items-center text-center">
        <Reveal>
          <div className="w-24 h-24 sm:w-32 sm:h-32 mb-6 rounded-full bg-purple-600 overflow-hidden shadow-lg flex items-center justify-center">
            {imgOk ? (
              <img
                src={avatarSrc}
                alt="Boredoom avatar"
                className="w-full h-full object-cover"
                onError={() => setImgOk(false)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-3xl sm:text-4xl font-bold">
                B
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
            Hi, I go by <span className="text-purple-300">Boredoom</span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="text-sm sm:text-base text-purple-300/90 italic mb-6 max-w-2xl">
            "Jack of all trades, master of none, but oftentimes better than
            master of one."
          </p>
        </Reveal>

        <Reveal delay={200}>
          <button
            onClick={() => navigate("/projects")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md font-semibold shadow-lg hover:shadow-purple-700/30 transition"
          >
            View My Projects
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- PROJECTS ------------------------------- */
function Projects() {
  const projectList = [
    {
      title: "Smart Cooking AI (BIM 6th Sem)",
      description:
        "AI app that scans ingredients and suggests recipes with nutrition info.",
      highlights: [
        "Ingredient recognition using YOLO",
        "Offline-capable recipe generation",
        "Nutritional breakdown & calorie summary",
        "Built for low-resource users",
      ],
      tech: ["React Native (Expo)", "Firebase", "YOLO", "TypeScript"],
    },
    {
      title: "Smart Rooftop Auto-Irrigation (IoT)",
      description:
        "ESP32-based irrigation system that automates rooftop farming with smart soil data.",
      highlights: [
        "Real-time soil moisture telemetry",
        "Auto pump scheduling via Firebase",
        "Manual override and dashboard alerts",
        "Eco-efficient design for small rooftops",
      ],
      tech: ["ESP32", "Firebase", "React", "Tailwind"],
    },
    {
      title: "Flight Tracker Mini",
      description:
        "Lightweight web app to view live flight data with small route maps.",
      highlights: [
        "Search flights by number or route",
        "Mini map route visualization",
        "ETA & aircraft info display",
        "Smooth interface with real-time data",
      ],
      tech: ["React", "Tailwind", "Mapbox"],
    },
  ];

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-16 sm:py-20 min-h-screen">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center">
            My Projects
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map(({ title, description, highlights, tech }) => (
            <div
              key={title}
              className="cursor-default select-none bg-gray-800 p-5 sm:p-6 rounded-lg shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/40 transition-shadow flex flex-col h-full"
            >
              <Reveal>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  {title}
                </h3>
              </Reveal>
              <Reveal delay={60}>
                <p className="mb-4 text-gray-300 text-sm sm:text-base">
                  {description}
                </p>
              </Reveal>
              <Reveal delay={120}>
                <ul className="mb-4 space-y-2 text-xs sm:text-sm text-gray-300">
                  {highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-purple-500/80" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-auto flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="bg-purple-700/70 text-purple-100 text-[10px] sm:text-xs px-2.5 py-1 sm:px-3 sm:py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- ABOUT ---------------------------------- */
function About() {
  const experiences = [
    "Joint Secretary @ IT Club, Oxford College (2024–2025)",
    "Built Smart Cooking AI App (BIM 6th Sem Project)",
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-20 sm:py-24 -translate-y-2">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
          About Me
        </h2>

        <p className="max-w-3xl text-center sm:text-left text-gray-300 mb-6 text-sm sm:text-base mx-auto sm:mx-0">
          I’m the kind of person who dives into everything. From sketching on
          paper to playing guitar, dribbling on the basketball court to writing
          code late at night — I love trying new things. Whether it’s sports,
          art, music, or tech, I enjoy the thrill of learning and figuring
          things out.
        </p>

        <div className="w-full max-w-xl mb-4 mx-auto sm:mx-0">
          <h3 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-2">
            Experience
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
            {experiences.map((exp, i) => (
              <li key={i}>{exp}</li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-xl mx-auto sm:mx-0">
          <LanguageSkills />
          <ThingsILike />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- CONTACT --------------------------------- */
function Contact() {
  return (
    <section className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-20 sm:py-24 flex flex-col items-center text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
            Contact Me
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="max-w-3xl text-gray-300 mb-8 text-sm sm:text-base">
            Feel free to reach out through any of the platforms below.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="flex space-x-8 sm:space-x-10 text-2xl sm:text-3xl">
            <a
              href="https://github.com/Boredoom17"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/aadarsha-chhetri-112580271/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- APP ----------------------------------- */
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

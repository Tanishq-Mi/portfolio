import { useRef, useState } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import ProfileDetails from "../components/ProfileDetails";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const [showProfile, setShowProfile] = useState(false);
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* ✅ GRID 1 (FIXED) */}
        <div
          onClick={() => setShowProfile(true)}
          className="relative grid-default-color grid-1 p-6 flex flex-col justify-end overflow-hidden cursor-pointer group"
        >
          {/* BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: "url('/assets/raj.png')" }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* TEXT */}
          <div className="relative z-10">
            <p className="headtext">Hi, I'm Tanishq Mishra</p>
            <p className="subtext">
              I am a 3rd-year B.Tech student at Lovely Professional University,
              deeply passionate about software development and continuously
              building my skills through hands-on projects.
            </p>
          </div>
        </div>

        {/* MODAL OUTSIDE CLICK AREA (IMPORTANT FIX) */}
        {showProfile && (
          <ProfileDetails close={() => setShowProfile(false)} />
        )}

        {/* GRID 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              BUILD. LEARN. GROW.
            </p>

            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="JavaScript" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="React" containerRef={grid2Container} />
            <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="MERN Stack" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="API Development" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="Problem Solving" containerRef={grid2Container} />

            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/react.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/javascript.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/html5.svg" containerRef={grid2Container} />
          </div>
        </div>

        {/* GRID 3 */}
        <div className="grid-black-color grid-3 relative overflow-hidden">
          <div className="z-10 w-full md:w-[55%] h-full overflow-y-auto pr-4 scrollbar-hide">

            <p className="headtext">Achievements</p>
            <p className="subtext">
              My journey in algorithms, data structures, and problem-solving competitions.
            </p>

            <div className="p-3 mt-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <p className="text-white font-semibold">LeetCode</p>
              <p className="text-sm text-neutral-400 mt-1">Problems Solved: <span className="text-white">300+</span></p>
              <p className="text-sm text-neutral-400">Active Days: <span className="text-white">180</span></p>
              <p className="text-sm text-neutral-400">Contests: <span className="text-white">3</span></p>
            </div>

            <div className="p-3 mt-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <p className="text-white font-semibold">GitHub</p>
              <p className="text-sm text-neutral-400 mt-1">Open Source: <span className="text-white">20+</span></p>
              <p className="text-sm text-neutral-400">Active Days: <span className="text-white">87</span></p>
            </div>

          </div>

          <div className="absolute right-0 top-0 h-full w-[45%] flex items-center justify-center opacity-80 pointer-events-none">
            <Globe />
          </div>
        </div>

        {/* GRID 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <p className="headtext">Do you want to start a project together?</p>

            <div className="flex flex-col gap-2 text-sm text-white">
              <p>📍 Pratapgarh, Uttar Pradesh</p>
              <p>📞 +91 9450164619</p>
              <p>✉️ rajdm1218@gmail.com</p>
            </div>

            <CopyEmailButton />
          </div>
        </div>

        {/* GRID 5 */}
        <div className="grid-default-color grid-5 flex relative overflow-hidden">
          <div className="z-10 w-full md:w-1/2 h-full overflow-y-auto scrollbar-hide pr-3">

            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in modern technologies to build scalable and high-performance applications.
            </p>

            <div className="mt-6 space-y-6">

              {[
                { title: "Frontend", skills: ["HTML", "CSS", "Tailwind", "React", "Next.js", "TypeScript"] },
                { title: "Backend", skills: ["Node.js", "Express", "Prisma"] },
                { title: "Databases & Tools", skills: ["MongoDB", "MySQL", "Git", "Postman", "Vercel", "Render"] },
                { title: "DevOps", skills: ["Docker", "Kubernetes", "Jenkins", "AWS"] },
              ].map((section, i) => (
                <div key={i}>
                  <p className="text-lg font-semibold text-white">{section.title}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {section.skills.map((skill, idx) => (
                      <span key={idx} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </div>

          <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center pointer-events-none">
            <Frameworks />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Experience } from "@/components/site/Experience";
import { Showreel } from "@/components/site/Showreel";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3D Motion Designer — Portfolio" },
      {
        name: "description",
        content:
          "High-end 3D & motion design portfolio. Full-cycle production from concept to final render for tech, fashion and digital brands.",
      },
      { property: "og:title", content: "3D Motion Designer — Portfolio" },
      {
        property: "og:description",
        content: "High-end 3D & motion visuals. Concept → Render.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground grain">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Skills />
      <Showreel />
      <Experience />
      <Contact />
    </main>
  );
}

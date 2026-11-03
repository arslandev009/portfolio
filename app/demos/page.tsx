import Nav from "@/components/Nav";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/content";

const tiers = [
  { name: "Sample data only", text: "The live demos run on bundled sample files. Free AI tiers may log what they receive, so please do not enter real or sensitive data." },
  { name: "Visitor check and daily cap", text: "A Cloudflare Turnstile check (renewed every 30 minutes), a per-session rate limit and a shared daily budget keep the free demos usable for everyone." },
  { name: "Free Gemini tier", text: "The demos call a free-tier Gemini model. The first request after a quiet period can take up to a minute, and when the daily budget is used up the demo says so: try again the next day." },
];

export default function Demos() {
  const llm = projects.filter((p) => p.kind === "cloud");
  const ml = projects.filter((p) => p.kind === "ml");
  return (
    <>
      <Nav />
      <main>
        <Section kicker="Live demos" title="LLM applications">
          <p className="mb-8 max-w-2xl text-zinc-400">
            Each demo is built around one business problem. Try it with the sample data and judge the
            output yourself. Please don&apos;t enter sensitive data.
          </p>
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {tiers.map((t) => (
              <div key={t.name} className="rounded-xl border border-white/10 p-4">
                <h3 className="mb-1 text-sm font-medium text-white">{t.name}</h3>
                <p className="text-sm text-zinc-400">{t.text}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {llm.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </Section>

        <Section kicker="Live demos" title="Machine learning & MLOps">
          <p className="mb-8 max-w-2xl text-zinc-400">
            Trained models with the experiment tracking and monitoring behind them, added here as each one ships. Source and write-ups
            are on GitHub.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ml.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
          <p className="mt-10 text-sm text-zinc-500">
            Local / fine-tuned LLM projects run on my own hardware. Watch their recorded demos in the work section, or book a
            call for a live screen-share.
          </p>
        </Section>
      </main>
    </>
  );
}

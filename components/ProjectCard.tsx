import type { Hue, Project } from "@/lib/content";

const hues: Record<Hue, string> = {
  emerald: "from-emerald-500/25",
  sky: "from-sky-500/25",
  violet: "from-violet-500/25",
  amber: "from-amber-500/25",
  rose: "from-rose-500/25",
};

const statusStyle: Record<Project["status"], string> = {
  built: "bg-emerald-400/10 text-emerald-300",
  "in-progress": "bg-amber-400/10 text-amber-300",
  planned: "bg-zinc-400/10 text-zinc-400",
};

const kindLabel: Record<Project["kind"], string> = {
  cloud: "LLM app · Cloud API",
  local: "Local / fine-tuned LLM",
  ml: "ML & MLOps",
  built: "Shipped",
};

function Btn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-zinc-200 transition hover:border-emerald-400 hover:text-emerald-300"
    >
      {children}
    </a>
  );
}

export default function ProjectCard({ p }: { p: Project }) {
  const hasLinks = p.demoUrl || p.videoUrl || p.repoUrl;
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_10px_40px_-15px_rgba(52,211,153,0.35)]">
      <div className={`bg-linear-to-br ${hues[p.hue]} to-transparent px-5 py-6`}>
        <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
          {p.flow.map((s, i) => (
            <span key={s} className="flex items-center gap-1.5">
              <span className="rounded-md border border-white/15 bg-black/40 px-2 py-1 text-zinc-300">{s}</span>
              {i < p.flow.length - 1 && <span className="text-zinc-500">→</span>}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wide text-zinc-500">{kindLabel[p.kind]}</span>
          <span className={`rounded-full px-2 py-0.5 text-[11px] ${statusStyle[p.status]}`}>{p.status}</span>
        </div>
        <h3 className="mb-2 text-lg font-medium text-white">{p.title}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">{p.problem}</p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="rounded bg-white/5 px-2 py-0.5 text-xs text-zinc-400">
              {s}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {p.demoUrl && <Btn href={p.demoUrl}>Try live demo</Btn>}
          {p.videoUrl && <Btn href={p.videoUrl}>Watch video</Btn>}
          {p.repoUrl && <Btn href={p.repoUrl}>GitHub</Btn>}
          {!hasLinks && <span className="text-xs text-zinc-600">Demo coming soon</span>}
        </div>
      </div>
    </article>
  );
}

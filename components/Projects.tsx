"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/content";

const tabs = [
  { key: "all", label: "All" },
  { key: "cloud", label: "LLM apps" },
  { key: "local", label: "Local & fine-tuned" },
  { key: "ml", label: "ML & MLOps" },
] as const;

type Tab = (typeof tabs)[number]["key"];

export default function Projects({ items }: { items: Project[] }) {
  const [tab, setTab] = useState<Tab>("all");
  const shown = tab === "all" ? items : items.filter((p) => p.kind === tab);
  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              tab === t.key
                ? "border-emerald-400 bg-emerald-400/10 text-emerald-300"
                : "border-white/15 text-zinc-400 hover:border-white/40 hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}

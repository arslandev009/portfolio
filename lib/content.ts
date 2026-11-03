// All site text lives here. Edit this file, not the components.
// BEFORE LAUNCH: remove any skill/project claim you have not actually built.
export type Hue = "emerald" | "sky" | "violet" | "amber" | "rose";
export type Kind = "cloud" | "local" | "ml" | "built";
export type Project = {
  id: string;
  title: string;
  kind: Kind;
  problem: string;
  stack: string[];
  flow: string[]; // mini architecture shown on the card
  hue: Hue;
  status: "planned" | "in-progress" | "built";
  demoUrl?: string;
  videoUrl?: string;
  repoUrl?: string;
};

export const profile = {
  name: "Arslan Rana",
  title: "AI Systems Engineer",
  headA: "I build machine learning models and LLM systems",
  headB: "that are measured, not guessed.",
  sub: "From training and fine-tuning to APIs, evaluation and deployment: cloud-API AI (OpenAI, Claude, Gemini), private local models, and PyTorch-based ML with MLOps.",
  location: "Lahore, Pakistan",
  photo: "/arslan.png",
  about: [
    "I'm Arslan, an AI system engineer based in Lahore. I work across the full stack of modern AI: training and fine-tuning models, building LLM applications on top of them, and deploying everything so it runs reliably.",
    "My focus is retrieval-augmented generation (RAG), tool-calling agents and document-processing pipelines on OpenAI, Claude and Gemini APIs, plus fine-tuning and local deployment of open models when cost or privacy requires it. I define what 'good' means with an evaluation set before I build, then measure accuracy, latency and cost against it.",
    "I also build classical and deep-learning models in PyTorch, with experiment tracking, serving and monitoring, because AI features should be tested, tracked and observable like any other production system.",
    "I work in small, fixed-scope pilots so you see results before committing. You keep your own API keys and accounts, and every system ships with documentation and a way to monitor it.",
  ],
  email: "", // TODO after domain + email
  github: "https://github.com/", // TODO: your profile URL
  linkedin: "https://www.linkedin.com/", // TODO: your profile URL
  booking: "https://cal.com/your-username/intro", // TODO Cal.com link
};

export const strip = [
  "Evals on every build",
  "Models trained, tuned and served",
  "Cloud APIs & private local models",
  "You keep the keys",
];

export const projects: Project[] = [
  // ---------- LLM applications (cloud API) ----------
  { id: "a1", title: "Document Q&A with Evals (RAG)", kind: "cloud", status: "built", hue: "emerald",
    demoUrl: "https://demo-api-kn51.onrender.com/demo/a1/", repoUrl: "https://github.com/arslandev009/a1-rag-docqa",
    flow: ["Docs", "Retrieve", "LLM", "Cited answer", "Eval"],
    problem: "Teams answer the same policy and FAQ questions all day. Answers must be correct and traceable to a source.",
    stack: ["Python", "Postgres + pgvector", "Hybrid search (RRF)", "60-question eval set"] },
  { id: "a3", title: "Booking & Support Agent", kind: "cloud", status: "planned", hue: "sky",
    flow: ["Message", "Agent", "Tools", "Human approval", "Done"],
    problem: "Missed messages cost bookings. An agent with tools and a human-approval step handles the routine ones safely.",
    stack: ["Tool calling", "Human-in-the-loop", "Tracing"] },
  { id: "a2", title: "Document Extraction API", kind: "cloud", status: "built", hue: "violet",
    demoUrl: "https://demo-api-kn51.onrender.com/demo/a2/", repoUrl: "https://github.com/arslandev009/a2-extraction-api",
    flow: ["PDF", "LLM", "JSON schema", "Validate"],
    problem: "Invoices, bills and receipts are re-typed by hand. Extraction that checks its own arithmetic and flags what it is unsure about removes the busywork.",
    stack: ["Python", "FastAPI", "Pydantic", "pdfplumber", "Validators"] },
  { id: "a4", title: "Lead-Gen Engine", kind: "cloud", status: "in-progress", hue: "amber",
    flow: ["Sources", "Enrich", "Score", "Outreach"],
    problem: "Finding businesses that need your service is slow. Sources, enrichment and scoring in one measured pipeline.",
    stack: ["Places API", "Crawler", "LLM scoring", "Streamlit"] },
  { id: "a5", title: "AI Voice Receptionist", kind: "cloud", status: "planned", hue: "rose",
    flow: ["Call", "Voice agent", "Calendar", "Confirmation"],
    problem: "After-hours calls go unanswered. A voice agent answers, qualifies and books appointments.",
    stack: ["VAPI", "n8n", "Webhooks"] },

  // ---------- Local & fine-tuned LLMs ----------
  { id: "b1", title: "Prompting vs Hybrid vs Fine-tuning", kind: "local", status: "in-progress", hue: "violet",
    flow: ["Task", "3 approaches", "Same evals", "Cost / latency / accuracy"],
    problem: "Which approach is actually best for a task, on accuracy, cost and latency? Benchmarked, not assumed.",
    stack: ["llama.cpp", "LoRA", "Evals"] },
  { id: "b2", title: "Fine-tuned Small Model (LoRA to GGUF)", kind: "local", status: "planned", hue: "amber",
    flow: ["Dataset", "LoRA fine-tune", "Evaluate", "GGUF + llama.cpp"],
    problem: "A small model tuned for one narrow task can rival a large API model at a fraction of the cost, and runs privately.",
    stack: ["PEFT / LoRA", "llama.cpp", "Evals"] },
  { id: "b3", title: "Private On-Prem RAG", kind: "local", status: "planned", hue: "sky",
    flow: ["Your server", "Local embeddings", "Local LLM", "No data leaves"],
    problem: "Clinics and legal teams can't send documents to the cloud. Everything runs on local models.",
    stack: ["llama.cpp", "Local embeddings", "Docker"] },

  // ---------- Machine learning & MLOps ----------
  { id: "m1", title: "Experiment Tracking for Fine-tuning", kind: "ml", status: "planned", hue: "violet",
    flow: ["Fine-tune runs", "MLflow", "Compare", "Best model"],
    problem: "Fine-tuning produces dozens of runs. Tracking every setting and metric shows what actually worked.",
    stack: ["PyTorch", "LoRA", "MLflow"] },
  { id: "m2", title: "Job-Market ML Pipeline", kind: "ml", status: "in-progress", hue: "amber",
    flow: ["Scrape", "Features", "Model", "Insights"],
    problem: "Raw job postings turned into skill trends and predictions, with real feature engineering and honest evaluation.",
    stack: ["Python", "scikit-learn", "Docker"] },
  { id: "m3", title: "Neural Network Trained From Scratch", kind: "ml", status: "planned", hue: "rose",
    flow: ["Data", "PyTorch model", "Train", "Evaluate"],
    problem: "A small neural network built and trained end to end, to understand what happens inside the models I deploy.",
    stack: ["PyTorch", "Training loops", "Loss curves"] },
  { id: "m4", title: "Model Serving & Monitoring", kind: "ml", status: "planned", hue: "emerald",
    flow: ["Train", "Registry", "FastAPI + Docker", "Drift check"],
    problem: "A trained model only helps when it is served reliably and watched for drift after release.",
    stack: ["MLflow", "FastAPI", "Docker", "Monitoring"] },
  { id: "m5", title: "Feature Engineering at Scale", kind: "ml", status: "planned", hue: "sky",
    flow: ["Large dataset", "PySpark", "Features", "Model"],
    problem: "Training data often doesn't fit in memory. Distributed processing turns raw data into model-ready features.",
    stack: ["PySpark", "Parquet", "Feature pipelines"] },

  // ---------- Shipped ----------
  { id: "t1", title: "Tools1Hub", kind: "built", status: "built", hue: "emerald",
    flow: ["Next.js", "Cloudflare", "Postgres", "SEO"],
    problem: "A multi-tool SaaS platform shipped end to end: architecture, SEO and hosting.",
    stack: ["Next.js", "Cloudflare", "Postgres"] },
];

export const services = [
  { title: "Business knowledge AI agent", text: "RAG over your documents with citations, evaluation scores and guardrails." },
  { title: "Voice & booking agents", text: "Agents that answer calls and messages, use your calendar/CRM, and ask a human before risky actions." },
  { title: "Document extraction & workflows", text: "PDFs and emails to validated JSON, wired into n8n or your own stack." },
  { title: "Custom ML & private models", text: "Fine-tuned or trained models, served with tracking and monitoring, on your own infrastructure when needed." },
];

export const skills = [
  { group: "RAG & search", items: ["Embeddings", "Hybrid search", "Reranking", "pgvector", "Qdrant"] },
  { group: "Agents", items: ["Tool calling", "LangGraph", "Human-in-the-loop", "Tracing"] },
  { group: "Machine learning", items: ["PyTorch", "scikit-learn", "Feature engineering", "Model evaluation"] },
  { group: "MLOps", items: ["MLflow", "Docker", "FastAPI", "Monitoring"] },
  { group: "Models & fine-tuning", items: ["OpenAI", "Claude", "Gemini", "Groq", "LoRA fine-tuning", "llama.cpp (local)"] },
  { group: "Evaluation & data", items: ["Ragas", "DeepEval", "Guardrails", "Postgres", "PySpark"] },
];

export const process = [
  { n: "01", title: "Discovery", text: "A short call to find the one workflow worth automating." },
  { n: "02", title: "Audit", text: "A small, concrete plan with an eval set that defines 'good'." },
  { n: "03", title: "Pilot", text: "Fixed-scope build, tested against the eval set. You keep the keys." },
  { n: "04", title: "Retainer", text: "Monitoring, prompt tuning and model updates." },
];



export const contact = {
  email: "hello@arslanrana.com", // PLACEHOLDER until domain email is live
  whatsapp: "923258083194", // PLACEHOLDER: country code + number, no "+" or spaces
  youtube: "https://www.youtube.com/@yourchannel", // PLACEHOLDER
  address: ["Office 12, Example Business Center", "Gulberg III, Lahore 54660", "Pakistan"], // PLACEHOLDER
  hours: "Mon-Fri, 10:00-18:00 PKT", // PLACEHOLDER
  formKey: "", // Web3Forms access key (see below)
};
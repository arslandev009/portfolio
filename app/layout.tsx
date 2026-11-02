import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arslan Rana | AI Systems Engineer",
  description:
    "AI systems engineer building LLM applications, fine-tuned models and ML pipelines with evals, guardrails and cost control.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0b] text-zinc-200 antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

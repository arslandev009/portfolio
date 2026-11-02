import { contact } from "@/lib/content";

export default function WhatsAppButton() {
  const text = encodeURIComponent("Hi Arslan, I found your portfolio and would like to discuss a project.");
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-black shadow-lg transition hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M12 3C7 3 3 6.6 3 11c0 2 .8 3.8 2.2 5.2L4 21l4.2-1.7c1.1.4 2.4.7 3.8.7 5 0 9-3.6 9-8s-4-8-9-8z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

import { profile } from "@/lib/content";

export default function Avatar({ size = 64 }: { size?: number }) {
  const initials = profile.name.split(" ").map((w) => w[0]).join("");
  const style = { width: size, height: size };
  return profile.photo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={profile.photo} alt={profile.name} style={style} className="rounded-full object-cover ring-2 ring-emerald-400/40" />
  ) : (
    <div style={style} className="flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 text-lg font-semibold text-black">
      {initials}
    </div>
  );
}

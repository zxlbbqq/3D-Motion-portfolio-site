const items = [
  "Cinema 4D",
  "Redshift",
  "Blender",
  "After Effects",
  "Octane",
  "Houdini",
  "Stable Diffusion",
  "Midjourney",
  "Runway",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface/40 py-6">
      <div className="marquee flex w-max gap-12 whitespace-nowrap">
        {loop.map((t, i) => (
          <div
            key={i}
            className="font-display text-2xl font-medium tracking-tight text-muted-foreground md:text-4xl"
          >
            {t} <span className="ml-12 text-neon">✦</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

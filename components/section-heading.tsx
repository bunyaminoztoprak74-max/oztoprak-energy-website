export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-energy-500">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-steel">{description}</p> : null}
    </div>
  );
}

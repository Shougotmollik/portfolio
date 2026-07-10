interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ label, title, subtitle, light }: SectionHeadingProps) {
  return (
    <div className="mb-16 md:mb-24 max-w-3xl">
      <p className={`text-sm font-medium tracking-wider uppercase mb-5 ${light ? "text-accent" : "text-accent"}`}>
        {label}
      </p>
      <h2
        className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] ${
          light ? "text-text-dark" : "text-text-light"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-6 text-base md:text-lg leading-relaxed max-w-2xl ${
          light ? "text-text-muted" : "text-text-muted"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

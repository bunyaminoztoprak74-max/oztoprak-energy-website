import { Icon, type IconName } from "@/components/Icon";

export function ContactRow({
  icon,
  text,
  href
}: {
  icon: IconName;
  text: string;
  href?: string;
}) {
  const content = href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-[#0F172A] no-underline transition-colors hover:text-[#28860C] dark:text-white dark:hover:text-[#3fb31a]"
    >
      {text}
    </a>
  ) : (
    <span className="text-[#0F172A] dark:text-white">{text}</span>
  );

  return (
    <div className="flex items-start gap-2 py-[3px] text-[12px] leading-[17px]">
      <span className="mt-[1px] flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] bg-[#28860C] text-white">
        <Icon name={icon} className="h-2.5 w-2.5" />
      </span>
      {content}
    </div>
  );
}

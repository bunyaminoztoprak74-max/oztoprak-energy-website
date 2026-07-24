import { Icon, type IconName } from "@/components/Icon";
import styles from "./ContactRow.module.css";

export function ContactRow({
  icon,
  text,
  href
}: {
  icon: IconName;
  text: string;
  href?: string;
}) {
  return (
    <div className={styles.row}>
      <span className={styles.chip}>
        <Icon name={icon} size={11} />
      </span>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={styles.link}
        >
          {text}
        </a>
      ) : (
        <span className={styles.text}>{text}</span>
      )}
    </div>
  );
}

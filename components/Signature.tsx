import { Badge } from "@/components/Badge";
import { ContactRow } from "@/components/ContactRow";
import {
  SIGNATURE_ACTION_LINKS,
  SIGNATURE_BADGES,
  SIGNATURE_PERSON,
  signatureLogoDisplayHeight
} from "@/lib/signature-data";
import styles from "./Signature.module.css";

export function Signature() {
  const p = SIGNATURE_PERSON;

  return (
    <div className={styles.card}>
      <div className={styles.columns}>
        <div className={styles.left}>
          <img
            src="/email/logo.png"
            alt={p.company}
            width={p.logoDisplayWidth}
            height={signatureLogoDisplayHeight}
            className={styles.logo}
          />
          <div className={styles.qrBlock}>
            <img src="/email/qr.png" alt={`QR: ${p.website}`} width={p.qrDisplaySize} height={p.qrDisplaySize} className={styles.qr} />
            <p className={styles.qrCaption}>Web sitemizi ziyaret edin</p>
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.name}>{p.name}</p>
          <p className={styles.roleLine}>
            {p.title} &middot; {p.company}
          </p>
          <p className={styles.legalName}>{p.legalName}</p>

          <div className={styles.contactList}>
            <ContactRow icon="phone" text={p.phone} href={`tel:${p.phoneHref}`} />
            <ContactRow icon="mail" text={p.email} href={`mailto:${p.email}`} />
            <ContactRow icon="globe" text={p.websiteLabel} href={p.website} />
            <ContactRow icon="linkedin" text={p.linkedinLabel} href={p.linkedin} />
            <ContactRow icon="pin" text={p.addressLines.join(", ")} />
          </div>
        </div>
      </div>

      <div className={styles.badges}>
        {SIGNATURE_BADGES.map((label) => (
          <Badge key={label} label={label} />
        ))}
      </div>

      <div className={styles.footer}>
        <p className={styles.tagline}>{p.tagline}</p>
        <div className={styles.actions}>
          {SIGNATURE_ACTION_LINKS.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.actionLink}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

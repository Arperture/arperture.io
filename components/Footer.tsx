import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS_A, FOOTER_LINKS_B, EMAIL, PHONE, PHONE_TEL, SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <Link href="/" className="brand" aria-label="Arperture home">
            <Image src="/assets/arperture-mark.webp" alt="" width={28} height={28} />
            <span className="brand-word">Arperture</span>
          </Link>
          <p>
            Arperture (with an R) is an AI video studio in Leesburg, Virginia. Brand films, ads, music videos and original series,
            written, directed and scored in house.
          </p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <p className="footer-label">Studio</p>
            {FOOTER_LINKS_A.map((f) => (
              <Link key={f.label} href={f.href}>{f.label}</Link>
            ))}
          </div>
          <div className="footer-col">
            <p className="footer-label">More</p>
            {FOOTER_LINKS_B.map((f) => (
              <Link key={f.label} href={f.href}>{f.label}</Link>
            ))}
          </div>
          <div className="footer-col">
            <p className="footer-label">Connect</p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
            {SOCIAL_LINKS.map((soc) => (
              <a key={soc.key} href={soc.url} target="_blank" rel="noopener noreferrer">{soc.label}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© 2026 Arperture Media LLC</p>
        <p>Leesburg, VA · Working worldwide</p>
      </div>
    </footer>
  );
}

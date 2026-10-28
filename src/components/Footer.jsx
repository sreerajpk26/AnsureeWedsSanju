import { WEDDING } from '../config';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="couple-initials">
        {WEDDING.brideShort[0]} &amp; {WEDDING.groomShort[0]}
      </div>
      <div className="tagline">With love &amp; gratitude</div>
      <div className="footer-line">{WEDDING.footerLine}</div>
      <div className="footer-line">With best compliments from {WEDDING.compliments}</div>
    </footer>
  );
}

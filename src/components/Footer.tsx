import { Instagram, Youtube, Linkedin, Music } from "lucide-react";
import logoWhite from "@/assets/js-investor-logo-biele.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground section-padding pb-10">
      <div className="content-width">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          <div>
            <img src={logoWhite} alt="JS Investor" className="h-12 mb-4" />
            <p className="text-primary-foreground/70 leading-relaxed text-sm">
              Komplexné finančné poradenstvo pre náročných klientov. Registrovaní v NBS pod číslom{" "}
              <strong className="text-primary-foreground">282999</strong>.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-4 text-primary-foreground/80">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="tel:+421902519328" className="hover:text-primary-foreground transition-colors">
                  +421 902 519 328
                </a>
              </li>
              <li>
                <a href="mailto:info@ivanjasik.sk" className="hover:text-primary-foreground transition-colors">
                  info@ivanjasik.sk
                </a>
              </li>
              <li>Veľká okružná 17, 010 01 Žilina</li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-4 text-primary-foreground/80">
              Firemné údaje
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Jashik s.r.o.</li>
              <li>IČO: 54253969</li>
              <li>DIČ: 2121623086</li>
              <li>IČ DPH: SK2121623086 (§4, od 1.1.2026)</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-primary-foreground/20 pt-8 gap-6">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Jashik s.r.o. Všetky práva vyhradené.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/js.investor/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@Ivanjasik"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://open.spotify.com/show/3yLIJ0QOSFnJPkR4JT2ZJs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Spotify"
            >
              <Music className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ivan-ja%C5%A1%C3%ADk-7256801a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

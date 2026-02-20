import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/js-investor-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <img src={logo} alt="JS Investor" className="h-10" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#kontakt" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors">
            Kontakt
          </a>
          <a
            href="#kontakt"
            className="btn-primary bg-primary text-primary-foreground font-sans font-semibold text-sm px-6 py-2.5 rounded-full"
          >
            Konzultácia
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border/50 px-6 py-4 space-y-3">
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="block text-sm font-sans text-muted-foreground"
          >
            Kontakt
          </a>
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="btn-primary block bg-primary text-primary-foreground font-sans font-semibold text-sm px-6 py-2.5 rounded-full text-center"
          >
            Konzultácia
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

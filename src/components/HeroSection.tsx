import heroImage from "@/assets/hero-wealth.jpg";
import brandPattern from "@/assets/js-brand-pattern.svg";

const HeroSection = () => {
  return (
    <section className="section-padding min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        {/* Text */}
        <div>
          <p className="hero-animate hero-animate-delay-1 text-sm font-sans font-semibold tracking-widest uppercase text-primary mb-6">
          Majetkové poradenstvo
          </p>
          <h1 className="hero-animate hero-animate-delay-2 text-4xl md:text-5xl lg:text-[52px] font-serif font-bold leading-tight text-foreground mb-6">
            Zarábate nadštandardne, ale váš majetok tomu{" "}
            <span className="text-primary">nezodpovedá?</span>
          </h1>
          <p className="hero-animate hero-animate-delay-3 text-lg font-sans text-muted-foreground leading-relaxed mb-10">
            Prestaňte investovať náhodne. Získajte{" "}
            <strong className="text-foreground">systém pre budovanie majetku</strong>. Komplexný
            systém na mieru pre ľudí s príjmom od 1 500 €, ktorý premení váš vysoký plat na
            skutočný majetok.
          </p>
          <a
            href="#kontakt"
            className="hero-animate hero-animate-delay-4 btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-lg px-10 py-4 rounded-full shadow-lg"
          >
            Získať systém pre svoj majetok
          </a>
        </div>

        {/* Image with brand pattern mask */}
        <div className="hero-animate hero-animate-delay-3 relative">
          <div className="brand-pattern-mask shadow-2xl">
            <img
              src={heroImage}
              alt="Budovanie majetku – finančný rast a investície"
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
          {/* Decorative pattern behind */}
          <img 
            src={brandPattern} 
            alt="" 
            className="absolute -bottom-6 -left-6 w-[110%] h-auto opacity-[0.08] pointer-events-none select-none -z-10"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

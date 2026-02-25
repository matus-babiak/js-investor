import heroImage from "@/assets/hero-wealth.jpg";
import brandPattern from "@/assets/js-brand-pattern.svg";

const HeroSection = () => {
  return (
    <section className="section-padding min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-center relative z-10">
        {/* Text */}
        <div>
          <p className="hero-animate hero-animate-delay-1 text-base font-sans font-semibold tracking-widest uppercase text-primary mb-6">
          Majetkové poradenstvo
          </p>
          <h1 className="hero-animate hero-animate-delay-2 text-4xl md:text-5xl lg:text-[58px] font-serif font-bold  text-foreground mb-8">
            Zarábate nadštandardne, ale váš majetok tomu{" "}
            <span className="text-primary">nezodpovedá?</span>
          </h1>
          <p className="hero-animate hero-animate-delay-3 text-xl font-sans text-muted-foreground  mb-10">
            Prestaňte investovať náhodne. Nechajte si navrhnúť{" "}
            <strong className="text-foreground">JS Wealth System™</strong>, komplexný plán budovania majetku na mieru pre ľudí s príjmom od 1 500 €, ktorý premení váš vysoký plat na skutočnú rentu.
          </p>
          <a
            href="#kontakt"
            className="hero-animate hero-animate-delay-4 btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-xl px-12 py-5 rounded-full shadow-lg"
          >
            Získať môj plán
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
            className="absolute -bottom-6 -right-6 w-[110%] h-auto opacity-[0.08] pointer-events-none select-none -z-10"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

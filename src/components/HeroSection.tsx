import heroImage from "@/assets/hero-wealth.jpg";

const HeroSection = () => {
  return (
    <section className="section-padding min-h-[90vh] flex items-center">
      <div className="max-w-[1100px] mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-sm font-sans font-semibold tracking-widest uppercase text-primary mb-6">
          Majetkové poradenstvo
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-serif font-bold leading-tight text-foreground mb-6">
            Zarábate nadštandardne, ale váš majetok tomu{" "}
            <span className="text-primary">nezodpovedá?</span>
          </h1>
          <p className="text-lg font-sans text-muted-foreground leading-relaxed mb-10">
            Prestaňte investovať náhodne. Získajte{" "}
            <strong className="text-foreground">systém pre budovanie majetku</strong>. Komplexný
            systém na mieru pre ľudí s príjmom od 1 500 €, ktorý premení váš vysoký plat na
            skutočný majetok.
          </p>
          <a
            href="#kontakt"
            className="inline-block bg-primary text-primary-foreground font-sans font-semibold text-lg px-10 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg"
          >
            Získať svoj systém
          </a>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Budovanie majetku – finančný rast a investície"
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/5 rounded-xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const forWhom = [
  "Pre ľudí s príjmom nad 1 500 € / mesačne, ktorí dokážu tvoriť kapitál.",
  "Pre zaneprázdnených profesionálov, ktorí chcú delegovať exekutívu na experta.",
  "Pre tých, ktorí hľadajú dlhodobého a stabilného partnera.",
];

const notFor = [
  "Pre tých, ktorí hľadajú rýchle zbohatnutie, trading a špekulácie s kryptomenami.",
  "Pre ľudí, ktorí si chcú všetko klikať a spravovať výhradne sami.",
  "Pre tých, ktorí zatiaľ nevedia investovať viac ako 50 € mesačne.",
];

const ProofSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div ref={ref} className="content-width text-center">
        <h2 className={`scroll-animate ${isVisible ? 'visible' : ''} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground  mb-8`}>
          Čísla hovoria <span className="text-primary">za nás</span>.
        </h2>

        <div className={`scroll-animate scroll-animate-delay-1 ${isVisible ? 'visible' : ''} flex flex-col sm:flex-row justify-center items-center gap-12 md:gap-16 lg:gap-20 mb-16`}>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">
              3 000 000 €
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mt-2">
              spravovaný majetok
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">
              300+
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mt-2">
              spokojných klientov
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">
              7+
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mt-2 max-w-[200px] mx-auto">
              rokov skúseností práce (Pod dohľadom NBS)
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? 'visible' : ''} card-hover bg-card rounded-2xl p-10`}>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Pre koho je JS Wealth System™ ideálny?
            </h3>
            <ul className="space-y-4">
              {forWhom.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-lg text-muted-foreground ">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="#kontakt"
                className="inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3 rounded-full shadow-md hover:bg-primary/90 transition-colors"
              >
                Chcem JS Wealth System™
              </a>
            </div>
          </div>

          <div className={`scroll-animate scroll-animate-delay-3 ${isVisible ? 'visible' : ''} card-hover-accent bg-card rounded-2xl p-10`}>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Pre koho naša služba NIE JE určená?
            </h3>
            <ul className="space-y-4">
              {notFor.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-lg text-muted-foreground ">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="#kontakt"
                className="inline-block bg-accent text-accent-foreground font-sans font-semibold text-base px-8 py-3 rounded-full shadow-md hover:bg-accent/90 transition-colors"
              >
                Začať so vzdelávaním
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;

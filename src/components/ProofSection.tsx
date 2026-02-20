import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const forWhom = [
  "Pre ľudí s príjmom nad 1 500 € / mesačne, ktorí dokážu tvoriť kapitál.",
  "Pre zaneprázdnených profesionálov, ktorí chcú delegovať starostlivosť o peniaze na experta.",
  "Pre tých, ktorí chcú dlhodobého a stabilného partnera.",
];

const notFor = [
  'Pre tých, ktorí hľadajú rýchle zbohatnutie a „hot tipy" na kryptomeny.',
  "Pre ľudí, ktorí si chcú všetko klikať a spravovať výhradne sami (pre vás sú tu aplikácie).",
  "Pre tých, ktorí zatiaľ nevedia investovať viac ako 50 € mesačne.",
];

const ProofSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div ref={ref} className="content-width text-center">
        <h2 className={`scroll-animate ${isVisible ? 'visible' : ''} text-3xl md:text-4xl lg:text-[44px] font-serif font-bold text-foreground leading-tight mb-6`}>
          Čísla hovoria <span className="text-primary">za nás</span>.
        </h2>

        <div className={`scroll-animate scroll-animate-delay-1 ${isVisible ? 'visible' : ''} flex flex-col sm:flex-row justify-center gap-10 md:gap-16 mb-6`}>
          <div>
            <span className="block text-5xl md:text-6xl font-serif font-bold text-primary">
              3 000 000 €
            </span>
            <span className="text-muted-foreground mt-1 block">spravovaný majetok</span>
          </div>
          <div>
            <span className="block text-5xl md:text-6xl font-serif font-bold text-primary">
              300+
            </span>
            <span className="text-muted-foreground mt-1 block">spokojných klientov</span>
          </div>
        </div>
        <p className="text-muted-foreground mb-16">Pod prísnym dohľadom NBS</p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? 'visible' : ''} card-hover bg-card rounded-2xl p-8`}>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
              Pre koho je JS Wealth System™ ideálny?
            </h3>
            <ul className="space-y-4">
              {forWhom.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`scroll-animate scroll-animate-delay-3 ${isVisible ? 'visible' : ''} card-hover-accent bg-card rounded-2xl p-8`}>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
              Pre koho služba určená nie je?
            </h3>
            <ul className="space-y-4">
              {notFor.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;

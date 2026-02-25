import { Quote, Star, User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import brandPattern from "@/assets/js-brand-pattern.svg";

const testimonials = [
  {
    quote:
      "Ivan je vynikajúci odborník na investovanie. Pomohol mi správne zhodnotiť moje peniaze, keď som začínal pracovať ako lekár vo Švajčiarsku. Jeho vedomosti a rady sú hodnotné a vždy mi rýchlo odpovie na otázky. Vďaka nemu som schopný dlhodobo budovať svoj majetok.",
    name: "MuDr. Martin Vanečko",
    role: "Doktor pôsobiaci vo Švajčiarsku",
  },
  {
    quote:
      "Ivan je skutočný profesionál. Jeho tvorba je jedinečná a ponúka vedomosti, ktoré sú vzácne na Slovensku. Jeho rýchly a ústretový prístup ma očaril. Spolupracujeme už štyri roky a vždy mi pomáha včas a úplne. Poučil ma nielen o financiách a investovaní, ale aj o osobnom rozvoji. Je úžasné vidieť, ako ľudia, ktorých poznáte, dosahujú úspechy a plnia si svoje sny.",
    name: "Šimon Latkoczy",
    role: "Slovenský hokejový reprezentant",
  },
  {
    quote:
      "Ivan je skvelým spoločníkom pre podnikateľov. Jeho rady o investovaní mi pomáhajú zhodnocovať peniaze zo svojho biznisu. Je skúsený a veľmi znalý. Navyše, našiel som s ním aj spoločnú reč a podobné záujmy.",
    name: "Ladislav Papik",
    role: "Konateľ firmy PAPIK ENTERPRISE s.r.o.",
  },
];

const TestimonialSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding section-alt relative overflow-hidden">
      <img
        src={brandPattern}
        alt=""
        className="absolute -left-24 top-1/2 -translate-y-1/2 w-[350px] h-auto opacity-[0.04] pointer-events-none select-none"
        aria-hidden="true"
      />
      <div ref={ref} className="content-width text-center relative z-10">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-14`}>
          Čo hovoria naši <span className="text-primary">klienti</span>?
        </h2>

        <div className="space-y-10 max-w-[800px] mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`scroll-animate scroll-animate-delay-${i + 1} ${isVisible ? "visible" : ""} card-hover bg-card-alt rounded-3xl p-10 md:p-12 shadow-sm relative text-left flex flex-col sm:flex-row gap-6 sm:gap-8 items-start`}
            >
              <Quote className="w-12 h-12 text-primary/20 absolute top-8 right-8" aria-hidden />
              {/* Placeholder pre fotografiu */}
              <div className="relative z-10 flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-muted border-2 border-border flex items-center justify-center">
                <User className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground" aria-hidden />
              </div>
              <div className="relative z-10 flex-1 min-w-0">
                <div className="flex gap-1.5 mb-3" aria-label="Hodnotenie: 5 z 5 hviezd">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-7 h-7 sm:w-8 sm:h-8 fill-amber-400 text-amber-400" aria-hidden />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-foreground italic mb-6">
                  „{t.quote}"
                </blockquote>
                <p className="font-serif font-semibold text-foreground text-xl">{t.name}</p>
                <p className="text-lg text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#kontakt"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-xl px-12 py-5 rounded-full shadow-lg"
          >
            Chcem podobné výsledky
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

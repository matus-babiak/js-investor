import { ShieldCheck, TrendingUp, Brain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Poriadok a kľudný spánok",
    text: "Už žiadne náhodné nakupovanie akcií. Získate jasný a exaktný plán, kam smeruje každé vaše euro.",
  },
  {
    icon: TrendingUp,
    title: "Maximum z vašej bonity",
    text: "Váš vysoký príjem je vašou najväčšou pákou. Presnými kalkuláciami vám ukážeme, kedy a ako kúpiť investičný byt tak, aby sa splácal sám.",
  },
  {
    icon: Brain,
    title: "Koniec strachu z trhových poklesov",
    text: "Keď trhy klesnú, nespanikárite. Sme tu na to, aby sme vaše portfólio strážili a robili racionálne rozhodnutia za vás.",
  },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding section-alt">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? 'visible' : ''} text-3xl md:text-4xl lg:text-[44px] font-serif font-bold text-foreground leading-tight mb-14 text-center`}>
          Čo získate vďaka <span className="text-primary">JS Wealth System™</span>?
        </h2>

        <div className="space-y-8">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`scroll-animate scroll-animate-delay-${i + 1} ${isVisible ? 'visible' : ''} card-hover bg-card-alt rounded-2xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-start gap-6`}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {b.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

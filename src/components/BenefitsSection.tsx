import { ShieldCheck, TrendingUp, Brain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Poriadok a ušetrený čas",
    text: (
      <>
        Už žiadne náhodné nakupovanie akcií a sledovanie grafov. Získate exaktný plán a{" "}
        <strong className="text-foreground">ušetríte desiatky hodín mesačne</strong>, ktoré môžete venovať kariére alebo rodine.
      </>
    ),
  },
  {
    icon: TrendingUp,
    title: "Maximum z vašej bonity",
    text: "Váš vysoký príjem je vašou najväčšou pákou. Spočítame vám presné výnosy (ROI) a ukážeme, ako nehnuteľnosti prinútite splácať sa samé.",
  },
  {
    icon: Brain,
    title: "Koniec strachu z poklesov",
    text: (
      <>
        Získate <strong className="text-foreground">100 % racionálneho partnera</strong>. Keď trhy klesnú, nespanikárite. Sme tu na to, aby sme vaše portfólio strážili a pomáhali vám robiť správne rozhodnutia.
      </>
    ),
  },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding section-alt">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? 'visible' : ''} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground  mb-14 text-center`}>
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
                <h3 className="font-serif text-[26px] font-semibold text-foreground mb-3">
                  {b.title}
                </h3>
                <p className="text-xl text-muted-foreground ">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

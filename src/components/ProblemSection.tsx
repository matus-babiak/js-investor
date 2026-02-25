import { TrendingDown, AlertTriangle, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const problems = [
  {
    icon: TrendingDown,
    title: 'Investujete „naslepo"',
    text: "Máte účet na investičnej platforme alebo v aplikácii, kupujete ETF fondy, ale chýba vám ucelená stratégia a neviete, či to robíte správne.",
  },
  {
    icon: AlertTriangle,
    title: "Strácate na inflácii",
    text: "Na bežnom účte sa vám hromadí hotovosť, no bojíte sa ju investovať, aby ste neurobili chybu pri aktuálnom vývoji trhov.",
  },
  {
    icon: Clock,
    title: "Žijete z mesiaca na mesiac",
    text: "Máte síce skvelý príjem, no cítite, že ak by ste prestali pracovať, váš životný štandard by rýchlo klesol.",
  },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding section-alt">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? 'visible' : ''} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground  mb-6 text-center`}>
          Ste úspešný vo svojej kariére, ale{" "}
          <span className="text-primary">vo financiách máte chaos?</span>
        </h2>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? 'visible' : ''} text-xl text-muted-foreground text-center max-w-[700px] mx-auto mb-14 `}>
          Väčšina úspešných profesionálov, lekárov, manažérov či IT špecialistov robí s peniazmi
          tú istú chybu. Spoznávate sa v niektorom z týchto bodov?
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`scroll-animate scroll-animate-delay-${i + 2} ${isVisible ? 'visible' : ''} card-hover-accent bg-card-alt rounded-2xl p-8 shadow-sm`}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-lg text-muted-foreground ">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

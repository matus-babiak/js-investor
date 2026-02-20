import { TrendingDown, AlertTriangle, Clock } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: 'Investujete „naslepo"',
    text: "Máte účet na XTB alebo Finaxe, kupujete ETF fondy, ale chýba vám ucelená stratégia a neviete, či to robíte správne.",
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
  return (
    <section className="section-padding section-alt">
      <div className="content-width">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif font-bold text-foreground leading-tight mb-4 text-center">
          Ste úspešný v kariére, ale vo financiách máte{" "}
          <span className="text-primary">chaos?</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-[650px] mx-auto mb-14 leading-relaxed">
          Väčšina úspešných profesionálov, lekárov, manažérov či IT špecialistov robí s peniazmi
          tú istú chybu. Spoznávate sa v niektorom z týchto bodov?
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-card-alt rounded-2xl p-8 shadow-sm border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

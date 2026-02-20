import { BarChart3, Building2, Calculator, Wallet } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const pillars = [
  {
    icon: BarChart3,
    num: "01",
    title: "Inteligentné ETF stratégie",
    text: "Žiadne špekulácie. Vaše portfólio postavíme na nízkonákladových globálnych fondoch so stabilným rastom.",
  },
  {
    icon: Building2,
    num: "02",
    title: "Investičné nehnuteľnosti",
    text: "Akcie sú motor rastu, tehla prináša stabilitu. Spočítame vám presné ROI a využijeme bankové peniaze vo váš prospech.",
  },
  {
    icon: Calculator,
    num: "03",
    title: "Daňová optimalizácia",
    text: "Hrubý výnos je len polovičný úspech. Portfólio štruktúrujeme tak, aby ste štátu legálne nenechávali viac, ako je nutné.",
  },
  {
    icon: Wallet,
    num: "04",
    title: "Renta a pravidelný príjem",
    text: "Náš ultimátny cieľ. V správny čas prestavíme aktíva tak, aby generovali stabilný pasívny príjem a kúpili vám časovú slobodu.",
  },
];

const MechanismSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? 'visible' : ''} text-3xl md:text-4xl lg:text-[44px] font-serif font-bold text-foreground leading-tight mb-4 text-center`}>
          Aplikácie vám dajú nástroje.
          <br />
          My vám dáme <span className="text-primary">štruktúru a jasný plán</span>.
        </h2>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? 'visible' : ''} text-lg text-muted-foreground text-center max-w-[680px] mx-auto mb-6 leading-relaxed`}>
          Investovať cez XTB alebo Finax je ako kúpiť si permanentku do fitka. Nástroje máte k
          dispozícii, ale cvičiť musíte sami.
        </p>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? 'visible' : ''} text-lg text-muted-foreground text-center max-w-[680px] mx-auto mb-14 leading-relaxed`}>
          V JS Investor fungujeme ako váš{" "}
          <strong className="text-foreground">osobný finančný tréner</strong>. Navrhneme pre vás{" "}
          <strong className="text-primary">JS Wealth System™</strong> – 4-pilierový systém, vďaka
          ktorému získate absolútnu kontrolu nad svojou budúcnosťou:
        </p>

        <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? 'visible' : ''} grid md:grid-cols-2 gap-6`}>
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className="card-hover bg-card rounded-2xl p-8 flex gap-5"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 icon-pattern-bg flex items-center justify-center">
                  <p.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>
              <div>
                <span className="text-xs font-sans font-bold tracking-widest text-primary uppercase mb-1 block">
                  Pilier {p.num}
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-lg px-10 py-4 rounded-full shadow-lg"
          >
            Rezervovať konzultáciu
          </a>
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;

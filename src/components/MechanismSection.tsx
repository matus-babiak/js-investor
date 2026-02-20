import { BarChart3, Building2, Calculator, Wallet } from "lucide-react";

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
  return (
    <section className="section-padding">
      <div className="content-width">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif font-bold text-foreground leading-tight mb-4 text-center">
          Aplikácie vám dajú nástroje.
          <br />
          My vám dáme <span className="text-primary">štruktúru a jasný plán</span>.
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-[680px] mx-auto mb-6 leading-relaxed">
          Investovať cez XTB alebo Finax je ako kúpiť si permanentku do fitka. Nástroje máte k
          dispozícii, ale cvičiť musíte sami.
        </p>
        <p className="text-lg text-muted-foreground text-center max-w-[680px] mx-auto mb-14 leading-relaxed">
          V JS Investor fungujeme ako váš{" "}
          <strong className="text-foreground">osobný finančný tréner</strong>. Navrhneme pre vás{" "}
          <strong className="text-primary">JS Wealth System™</strong> – 4-pilierový systém, vďaka
          ktorému získate absolútnu kontrolu nad svojou budúcnosťou:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="bg-card rounded-2xl p-8 border border-border/50 flex gap-5"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
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
            className="inline-block bg-primary text-primary-foreground font-sans font-semibold text-lg px-10 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg"
          >
            Rezervovať konzultáciu
          </a>
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;

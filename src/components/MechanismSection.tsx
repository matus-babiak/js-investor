import { BarChart3, Building2, Calculator, Wallet } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const pillars = [
  {
    icon: BarChart3,
    num: "01",
    title: "Inteligentné ETF stratégie",
    lead: "Väčšina investorov nakupuje fondy chaoticky a pri prvom poklese trhu v panike predáva.",
    text: "Vaše portfólio postavíme na nízkonákladových globálnych fondoch. Dostanete od nás nielen prístup k nástrojom, ale presný strategický plán rebalansovania, ktorý vás ochráni pred emočnými chybami v čase krízy. Všetko sledujete prehľadne cez našu aplikáciu UFO.",
  },
  {
    icon: Building2,
    num: "02",
    title: "Investičné nehnuteľnosti",
    lead: "Kúpiť byt \"podľa dojmu alebo pocitu\" vás môže stáť desaťtisíce eur na zlých úrokoch a skrytých poplatkoch.",
    text: "Využijeme váš vysoký príjem ako páku. Vďaka našim unikátnym investičným kalkulačkám vám vopred do eura presne vypočítame vaše ROI, cashflow, a ukážeme vám, v ktorom roku sa vám nehnuteľnosť preklopí do čistého zisku. Toto vám žiadna aplikácia nedá.",
  },
  {
    icon: Calculator,
    num: "03",
    title: "Daňová optimalizácia",
    lead: "Je zbytočné zarobiť na trhu 10 %, ak štátu odovzdáte 30 % na daniach z nevedomosti.",
    text: "Hrubý výnos je len polovičný úspech. Portfólio štruktúrujeme tak, aby bolo vaše bohatstvo chránené a aby ste štátu legálne nenechávali viac, ako je absolútne nutné.",
  },
  {
    icon: Wallet,
    num: "04",
    title: "Renta a pravidelný príjem",
    lead: "Veľa ľudí si buduje portfólio, ale nemajú plán, ako z neho v budúcnosti peniaze čerpať. Ak začnete svoje aktíva na dôchodku vyberať náhodne alebo v čase krízy, hrozí vám, že o svoje peniaze prídete oveľa rýchlejšie, než ste plánovali.",
    text: "V správny čas prestavíme vaše aktíva tak, aby generovali stabilný pasívny príjem (rentu/dividendy) a kúpili vám skutočnú časovú slobodu.",
  },
];

const MechanismSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? 'visible' : ''} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground  mb-6 text-center`}>
          Samostatné investičné účty vám rentu nevybudujú. Potrebujete{" "}
          <span className="text-primary">ucelený systém</span>.
        </h2>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? 'visible' : ''} text-xl text-muted-foreground text-center max-w-[720px] mx-auto mb-6 `}>
          Investovať cez bežné aplikácie bez ucelenej stratégie je ako stavať dom bez nákresu. Materiál, ako napr. ETF fondy, máte síce k dispozícii, no ak ho poskladáte náhodne, výsledok bude nestabilný.
        </p>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? 'visible' : ''} text-xl text-muted-foreground text-center max-w-[720px] mx-auto mb-14 `}>
          V JS Investor fungujeme ako váš{" "}
          <strong className="text-foreground">hlavný finančný architekt</strong>. Nenecháme vás robiť pokusy a omyly. Navrhneme pre vás{" "}
          <strong className="text-primary">JS Wealth System™</strong>. 4-pilierový systém, vďaka ktorému získate absolútnu kontrolu nad svojou budúcnosťou:
        </p>

        <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? 'visible' : ''} grid md:grid-cols-2 gap-6`}>
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className="card-hover bg-card rounded-2xl p-8"
            >
              <div className="w-16 h-16 icon-pattern-bg flex items-center justify-center mb-4">
                <p.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-sm font-sans font-bold tracking-widest text-primary uppercase mb-1 block">
                Pilier {p.num}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                {p.title}
              </h3>
              <p className="text-lg text-foreground font-medium mb-2 ">{p.lead}</p>
              <p className="text-lg text-muted-foreground ">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-xl px-12 py-5 rounded-full shadow-lg"
          >
            Chcem JS Wealth System™
          </a>
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;

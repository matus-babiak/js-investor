import { BarChart3, Building2, Calculator, Wallet } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const pillars = [
  {
    icon: BarChart3,
    num: "01",
    title: "Inteligentné ETF stratégie",
    lead: "Väčšina investorov nakupuje fondy chaoticky a pri prvom poklese trhu v panike predáva.",
    text: (
      <>
        Vaše portfólio postavíme na nízkonákladových globálnych fondoch. Dostanete od nás nielen prístup k nástrojom, ale <strong className="text-foreground">presný strategický plán rebalansovania</strong>, ktorý vás ochráni pred emočnými chybami v čase krízy. Všetko sledujete prehľadne cez našu aplikáciu UFO.
      </>
    ),
  },
  {
    icon: Building2,
    num: "02",
    title: "Investičné nehnuteľnosti",
    lead: "Kúpiť byt \"podľa dojmu alebo pocitu\" vás môže stáť desaťtisíce eur na zlých úrokoch a skrytých poplatkoch.",
    text: (
      <>
        Využijeme váš vysoký príjem ako páku. Vďaka našim <strong className="text-foreground">unikátnym investičným kalkulačkám</strong> vám vopred do eura presne vypočítame vaše ROI, cashflow, a ukážeme vám, v ktorom roku sa vám nehnuteľnosť preklopí do čistého zisku. Toto vám žiadna aplikácia nedá.
      </>
    ),
  },
  {
    icon: Calculator,
    num: "03",
    title: "Daňová optimalizácia",
    lead: "Je zbytočné zarobiť na trhu 10 %, ak štátu odovzdáte 30 % na daniach z nevedomosti.",
    text: (
      <>
        Hrubý výnos je len polovičný úspech. Portfólio štruktúrujeme tak, aby <strong className="text-foreground">bolo vaše bohatstvo chránené</strong> a aby ste <strong className="text-foreground">štátu legálne nenechávali viac</strong>, ako je absolútne nutné.
      </>
    ),
  },
  {
    icon: Wallet,
    num: "04",
    title: "Renta a pravidelný príjem",
    lead: "Veľa ľudí si buduje portfólio, ale nemajú plán, ako z neho v budúcnosti peniaze čerpať. Ak začnete svoje aktíva na dôchodku vyberať náhodne alebo v čase krízy, hrozí vám, že o svoje peniaze prídete oveľa rýchlejšie, než ste plánovali.",
    text: (
      <>
        V správny čas prestavíme vaše aktíva tak, aby <strong className="text-foreground">generovali stabilný pasívny príjem</strong> (rentu/dividendy) a kúpili vám skutočnú časovú slobodu.
      </>
    ),
  },
];

const MechanismSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? 'visible' : ''} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground  mb-6 text-center`}>
          Samotné investičné účty vám <span className="text-primary">majetok nevybudujú</span>.
        </h2>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? 'visible' : ''} text-xl text-muted-foreground text-center max-w-[720px] mx-auto mb-8`}>
          Ste úspešný vo svojej kariére. Či už ako lekár, manažér alebo podnikateľ, váš čas je príliš drahý na to, aby ste po večeroch <strong className="text-foreground">študovali finančné trhy a robili pokusy a omyly</strong> s vlastnými úsporami.
        </p>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? 'visible' : ''} text-xl text-muted-foreground text-center max-w-[720px] mx-auto mb-8`}>
          Keď firma potrebuje rásť a optimalizovať dane, najme si finančného riaditeľa. Ak riešite zložitý právny spor, platíte si špičkového advokáta.
        </p>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? 'visible' : ''} text-xl text-muted-foreground text-center max-w-[720px] mx-auto mb-8`}>
          K <strong className="text-foreground">budovaniu vášho celoživotného majetku</strong> by ste mali pristupovať rovnako. Investovať bez jasného plánu a stratégie je ako sadnúť si za volant bez navigácie. Cesta je len na vás a pri prvej kríze riskujete fatálnu chybu, na ktorú ste úplne sami.
        </p>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? 'visible' : ''} text-xl text-muted-foreground text-center max-w-[720px] mx-auto mb-8`}>
          V JS Investor fungujeme ako váš <strong className="text-foreground">osobný finančný riaditeľ a architekt</strong>. Nenechávame vás „šoférovať" samých. Nenavrhujeme len fondy. <strong className="text-foreground">Vytvárame pre vás jasnú, ucelenú stratégiu,</strong> ktorá vám dá absolútnu istotu, chráni váš kapitál a rastie spolu s vami.
        </p>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? 'visible' : ''} text-xl md:text-2xl text-foreground font-medium text-center max-w-[720px] mx-auto mt-12 mb-14`}>
          Spoznajte náš 4-pilierový <strong className="text-primary">JS Wealth System™</strong>, vďaka ktorému získate absolútnu kontrolu nad svojou budúcnosťou:
        </p>

        <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? 'visible' : ''} grid md:grid-cols-2 gap-6`}>
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className="card-hover bg-card rounded-2xl p-8"
            >
              <div className="w-16 h-16 icon-pattern-bg flex items-center justify-center mb-4">
                <p.icon className="w-8 h-8 text-primary-foreground -translate-x-0.5" />
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
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg"
          >
            Získať JS Wealth System™
          </a>
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;

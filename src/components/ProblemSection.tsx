import { Landmark, Puzzle, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const problems = [
  {
    icon: Landmark,
    title: "Peniaze ležia v banke a každý rok strácajú hodnotu",
    text: (
      <>
        Máte odložené tisíce eur na bežnom alebo sporiacom účte. Cítite, že by mali „niekde pracovať", ale neviete kde, ako a či bezpečne. Tak čakáte ďalej mesiace, roky a medzitým ich <strong className="text-foreground">požiera inflácia</strong>.
      </>
    ),
  },
  {
    icon: Puzzle,
    title: "Niekam už investujete ale bez komplexnej stratégie",
    text: (
      <>
        Máte ETF v nejakej aplikácii a možno fond v banke, ale <strong className="text-foreground">nemáte systém</strong>. Keď trh klesne, neviete, čo máte robiť. Keď príde príležitosť, neviete, ako ju využiť. Váš poradca v banke sa neozval rok.
      </>
    ),
  },
  {
    icon: Briefcase,
    title: "Ak by ste zajtra prestali pracovať, čo vám zostane?",
    text: (
      <>
        Váš príjem závisí výhradne od vás. Váš <strong className="text-foreground">majetok za vás zatiaľ nezarába</strong>. Viete presne, v ktorom roku vám vaše aktíva začnú generovať príjem bez toho, aby ste museli vstávať do práce?
      </>
    ),
  },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding section-alt">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? 'visible' : ''} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground  mb-6 text-center`}>
          Zarábate viac ako 1 500 € mesačne, ale vaše{" "}
          <span className="text-primary">peniaze stále nemajú jasný smer?</span>
        </h2>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? 'visible' : ''} text-xl text-muted-foreground text-center max-w-[700px] mx-auto mb-14`}>
          Ak áno, práve to je dôvod, prečo váš majetok nerastie tak, ako by mal. Mnohí úspešní profesionáli robia so svojimi peniazmi <strong>stále tie isté chyby.</strong> Spoznávate sa v niektorej z nich?
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

import StickyNav from "@/components/StickyNav";
import Footer from "@/components/Footer";
import brandPattern from "@/assets/js-brand-pattern.svg";
import logo from "@/assets/js-investor-logo.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Compass,
  Building2,
  Clock,
  Puzzle,
  BarChart3,
  Calculator,
  Wallet as WalletIcon,
  Quote,
  User,
  Star,
  Check,
  X,
  FileText,
  Sparkles,
  Phone,
  ShieldCheck,
  Users,
  Percent,
  TrendingUp,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyNav />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="pt-6 md:pt-10 section-padding relative overflow-hidden">
          <div className="max-w-[1140px] mx-auto w-full relative z-10">
            {/* Textová časť */}
            <div className="text-center mb-12 md:mb-16">
              <img src={logo} alt="JS Investor" className="hero-animate hero-animate-delay-1 h-[2.2rem] mx-auto mb-6" />
              <p className="hero-animate hero-animate-delay-1 text-base font-sans font-semibold tracking-widest uppercase text-primary mb-6">
                Sprievodca investovaním pre ambicióznych ľudí
              </p>
              <h1 className="hero-animate hero-animate-delay-2 text-4xl md:text-5xl lg:text-[58px] font-serif font-bold text-foreground mb-12">
                Zarábate dobre, ale vaše peniaze strácajú hodnotu, alebo nemajú jasný smer? <em className="text-primary">Dajte im správny systém.</em>
              </h1>
              <blockquote className="hero-animate hero-animate-delay-3 text-xl font-sans text-muted-foreground mb-10 max-w-[720px] mx-auto">
                Nechajte si navrhnúť <strong className="text-foreground">JS Wealth System™</strong>. Vďaka nemu získate pocit absolútneho bezpečia a istotu, že sú vaše financie nastavené správne a je o váš majetok odborne postarané.
              </blockquote>
              <div className="hero-animate hero-animate-delay-4 flex flex-wrap gap-4 items-center justify-center mb-10">
                <a
                  href="/dotaznik"
                  className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg"
                >
                  Navrhnúť JS Wealth System™
                </a>
                <a
                  href="#ako-to-funguje"
                  className="inline-block font-sans font-thin text-base text-foreground hover:text-primary transition-colors"
                >
                  Ako to funguje →
                </a>
              </div>
              <ul className="hero-animate hero-animate-delay-3 flex flex-wrap items-center justify-center gap-8 md:gap-12 text-base font-sans font-medium text-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" aria-hidden />
                  Jasný majetkový <strong>plán na mieru</strong>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" aria-hidden />
                  Prehľadné výsledky <strong>na jednom mieste</strong>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" aria-hidden />
                  Sprievodca kedykoľvek <strong>k dispozícii</strong>
                </li>
              </ul>
            </div>

            {/* Video */}
            <div className="hero-animate hero-animate-delay-4 w-[85%] max-w-[969px] mx-auto rounded-2xl overflow-hidden aspect-video bg-black shadow-[0_8px_32px_-4px_rgba(0,0,0,0.18),0_24px_64px_-12px_rgba(0,0,0,0.28),0_0_0_1px_rgba(0,0,0,0.1)]">
              <iframe
                src="https://player.vimeo.com/video/1145809910?autoplay=0&title=0&portrait=0&byline=0"
                title="Vimeo video"
                allow="autoplay; fullscreen; picture-in-picture"
                className="block w-full h-full align-top"
              />
            </div>
          </div>
          <img
            src={brandPattern}
            alt=""
            className="absolute -bottom-6 -right-6 w-[110%] h-auto opacity-[0.08] pointer-events-none select-none -z-10"
            aria-hidden="true"
          />
        </section>

        {/* Štatistiky - zelené taby */}
        <StatsSection />

        {/* Výsledky klientov */}
        <ClientResultsSection />

        {/* Úspešní ľudia - chaotické financie */}
        <ChaosSection />

        {/* JS Wealth System™ - majetková mapa */}
        <WealthMapSection />

        {/* Pred / Po */}
        <BeforeAfterSection />

        {/* Nie je pre každého */}
        <ForWhomSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Kto stojí za JS Investor */}
        <AboutSection />

        {/* Exkluzívny benefit - skupina */}
        <GroupBenefitSection />

        {/* Naša garancia */}
        <GuaranteeSection />

        {/* Finálna CTA */}
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

function ChaosSection() {
  const { ref, isVisible } = useScrollAnimation();
  const problems = [
    {
      icon: Compass,
      title: "Vo financiách sa cítite stratený",
      content: (
        <>
          Vybudovali ste si skvelý príjem, no na bežnom alebo sporiacom <strong className="text-foreground">účte vám ležia tisícky eur,</strong> ktoré <strong className="text-foreground">potichu požiera inflácia</strong>. Cítite vnútornú frustráciu, pretože viete, že s vaším kapitálom nepracujete efektívne, no <strong className="text-foreground">chýba vám komplexná stratégia a ucelený systém,</strong> čo presne s peniazmi urobiť o rok či o 10 rokov.
        </>
      ),
    },
    {
      icon: Building2,
      title: "Veríte, že vaše peniaze sú v dobrých rukách",
      content: (
        <>
          Svoje úspory ste zverili banke alebo inej spoločnosti, pretože vo vás <strong className="text-foreground">evokovala pocit istoty.</strong> A výsledok? Váš „privátny poradca" vám predal desiatky drahých podielových fondov. <strong className="text-foreground">Platíte zbytočné </strong>vstupné a správcovské<strong className="text-foreground"> poplatky</strong> (často až 2 % ročne). Alebo vás pri <strong className="text-foreground">výbere čakajú vysoké dane.</strong>
        </>
      ),
    },
    {
      icon: Clock,
      title: "Nemáte čas riešiť investície sám",
      content: (
        <>
          Ste skvelý vo svojom obore a po dlhom pracovnom dni naozaj <strong className="text-foreground">nemáte čas ani energiu študovať</strong> akcie firiem, analyzovať trhy či prepočítavať návratnosť z investičných bytov. A možno ste <strong className="text-foreground">uvažovali nad investičnou aplikáciou,</strong> no spravovať v nej desiatky tisíc eur na vlastnú päsť vo vás vyvoláva <strong className="text-foreground">rešpekt a strach z drahej chyby.</strong>
        </>
      ),
    },
    {
      icon: Puzzle,
      title: "Už investujete, ale bez systému",
      content: (
        <>
          Možno už niekde investujete, ale <strong className="text-foreground">vaše rozhodnutia sú náhodné.</strong> Vaše investície do ETF fondov nie sú zosúladené s vašimi nehnuteľnosťami, neriešite daňovú optimalizáciu a <strong className="text-foreground">neviete,</strong> ako si v budúcnosti z tohto majetku <strong className="text-foreground">začnete vyplácať bezpečnú a doživotnú rentu.</strong> Chýba vám niekto, kto vidí celý obraz a spojí všetky piliere do jedného systému.
        </>
      ),
    },
  ];
  return (
    <section id="problem" className="section-padding section-alt">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-10 text-center`}>
          <em className="text-primary">Nie ste v tom sami.</em> Väčšina našich klientov prišla s podobným príbehom.
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground text-center mb-10">
          Mnohí úspešní profesionáli robia so svojimi peniazmi <strong>stále tie isté chyby.</strong> Spoznávate sa v niektorej z nich?
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`scroll-animate scroll-animate-delay-${i + 1} ${isVisible ? "visible" : ""} card-hover-accent bg-card-alt rounded-2xl p-8 shadow-sm`}
            >
              <div className="w-12 h-12 rounded-xl icon-pattern-bg-accent flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-accent -translate-x-0.5" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{p.title}</h3>
              <div className="text-lg text-muted-foreground">{p.content}</div>
            </div>
          ))}
        </div>
        <blockquote className={`scroll-animate scroll-animate-delay-5 ${isVisible ? "visible" : ""} text-lg md:text-xl text-center text-muted-foreground max-w-[720px] mx-auto`}>
          Ak áno, práve to je dôvod, prečo váš majetok nerastie tak, ako by mal. Je to symptóm toho, že <strong className="text-foreground">vaše peniaze nemajú komplexný systém.</strong>
        </blockquote>
        <div className="flex justify-center mt-10">
          <a
            href="/dotaznik"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg"
          >
            Navrhnúť JS Wealth System™
          </a>
        </div>
      </div>
    </section>
  );
}

function WealthMapSection() {
  const { ref, isVisible } = useScrollAnimation();
  const pillars = [
    {
      num: "1",
      icon: TrendingUp,
      title: "Inteligentné ETF stratégie",
      paragraphs: [
        <>Vaše peniaze <strong className="text-primary-foreground">neefektívne ležia v banke</strong> alebo v zbytočne <strong className="text-primary-foreground">drahých podielových fondoch.</strong></>,
        <>Inflácia ich potichu požiera a vy <strong className="text-primary-foreground">prichádzate o obrovské výnosy</strong> kvôli vysokým poplatkom a emočným chybám na trhu.</>,
        <>My vám vybudujeme stabilné globálne portfólio z nízkonákladových fondov. Nastavíme ho <strong className="text-primary-foreground">presne podľa vášho rizika</strong> a cieľa pre <strong className="text-primary-foreground">predvídateľný rast bez zbytočných poplatkov.</strong></>,
      ],
    },
    {
      num: "2",
      icon: Building2,
      title: "Investičné nehnuteľnosti a financovanie",
      paragraphs: [
        <>Investičné nehnuteľnosti nakupujete len na základe <strong className="text-primary-foreground">intuície, emócií</strong> alebo zdanlivo <strong className="text-primary-foreground">„výhodnej ponuky“</strong> na trhu.</>,
        <>Nákup „na základe pocitov“ vás môže dostať do <strong className="text-primary-foreground">nevýhodnej hypotéky</strong> a roky vás <strong className="text-primary-foreground">finančne vyčerpávať</strong> negatívnym cashflowom.</>,
        <>Na stôl vám položíme presnú ROI kalkulačku s optimistickým aj stresovým scenárom. <strong className="text-primary-foreground">Či sa byt oplatí kúpiť, rozhodneme spoločne.</strong> Čisto na základe exaktných čísiel.</>,
      ],
    },
    {
      num: "3",
      icon: Calculator,
      title: "Daňová optimalizácia",
      paragraphs: [
        <>Sústredíte sa len na to, koľko vaše <strong className="text-primary-foreground">investície zarobia v hrubom.</strong></>,
        <>Ignorovanie daní vedie k tomu, že pri výbere ziskov <strong className="text-primary-foreground">necháte štátu tisíce eur z vášho ťažko vybudovaného majetku</strong> úplne zbytočne.</>,
        <>Vaše portfólio od prvého dňa štruktúrujeme maximálne daňovo efektívne tak, aby ste <strong className="text-primary-foreground">legálne a transparentne ochránili svoj čistý výnos.</strong></>,
      ],
    },
    {
      num: "4",
      icon: WalletIcon,
      title: "Renta a skutočná sloboda",
      paragraphs: [
        <>Budujete si majetok, ale <strong className="text-primary-foreground">chýba vám presný systém,</strong> ako a kedy si ho reálne začnete užívať.</>,
        <>Bez bezpečnej „výstupnej stratégie" riskujete, že trhové výkyvy v nesprávny čas <strong className="text-primary-foreground">ohrozia vašu celoživotnú snahu o finančnú nezávislosť.</strong></>,
        <>V správny čas prestavíme vaše aktíva do rentového módu, aby vám <strong className="text-primary-foreground">generovali stabilný pasívny príjem.</strong> V dobrých aj zlých rokoch.</>,
      ],
    },
  ];
  return (
    <section id="ako-to-funguje" className="section-padding">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-16 text-center`}>
          <em className="text-primary">Prevezmite kontrolu</em> nad svojimi peniazmi a dajte im <em className="text-primary">jasný smer.</em>
        </h2>
        <div className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-muted-foreground text-center max-w-[800px] mx-auto mb-14 space-y-12`}>
          <p className="text-xl md:text-2xl">
            <strong className="text-primary font-semibold">JS Wealth System™</strong> nie sú štyri izolované produkty, s ktorými následne ostanete sami. Je to <strong className="text-foreground">jeden prepojený ekosystém</strong> a váš osobný <strong className="text-foreground">systém na budovanie majetku.</strong>
          </p>
          <p className="text-lg md:text-xl">
            Spojíme vaše financie do <strong className="text-foreground">jedného fungujúceho celku,</strong> ktorý má <strong className="text-foreground">jasný smer a konkrétny cieľ:</strong> delegovať zložité finančné rozhodnutia na <strong className="text-foreground">vášho sprievodcu budovaním majetku,</strong> aby ste získali pocit absolútneho bezpečia a istotu, že vaše peniaze systematicky rastú, kým vy <strong className="text-foreground">svoj ušetrený čas</strong> naplno venujete vlastnej <strong className="text-foreground">kariére a rodine.</strong>
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={`scroll-animate scroll-animate-delay-${i + 2} ${isVisible ? "visible" : ""} card-hover bg-primary rounded-2xl p-8 text-primary-foreground`}
            >
              <div className="w-14 h-14 icon-pattern-bg-white flex items-center justify-center mb-4 flex-shrink-0">
                <p.icon className="w-7 h-7 text-primary -translate-x-0.5" aria-hidden />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-3">{p.title}</h3>
              <div className="space-y-3 text-lg text-primary-foreground/90">
                {p.paragraphs.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="/dotaznik"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg"
          >
            Navrhnúť JS Wealth System™
          </a>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  const { ref, isVisible } = useScrollAnimation();
  const pred = [
    "Peniaze strácajú hodnotu: Ležia vám na bežnom účte bez jasného smeru a potichu ich požiera inflácia.",
    "Falošná istota a skryté poplatky: Máte desiatky drahých fondov od bankového poradcu, ktorého ste nevideli celé roky.",
    "Strata času a stres: Každé zložité finančné rozhodnutie pre vás znamená stres a hodiny hľadania informácií na internete.",
    "Chýbajúci prehľad: Vlastníte aktíva, no nemáte exaktný prehľad o tom, o koľko eur ste reálne bohatší.",
    "Zbytočné straty na daniach: Sústredíte sa len na hrubý zisk, no kvôli nevhodnej štruktúre vašich investícií nechávate štátu tisíce eur z vašich výnosov úplne zbytočne.",
    "Ste na to sami: Na dôležité rozhodnutia o vašom veľkom kapitále a jeho správe ste zostali úplne sami.",
  ];
  const po = [
    "Jasná stratégia: Získate jeden prepojený systém, komplexný systém budovania majetku a stabilného dlhodobého partnera.",
    "Všetko pod jednou strechou: Aplikácia UFO – ráno ju otvoríte a na jeden klik vidíte presné číslo rastu vášho čistého majetku.",
    "Priamy prístup k expertovi pri každom dôležitom rozhodnutí: Zavoláte svojmu sprievodcovi budovaním majetku, kedykoľvek to potrebujete. Pri kúpe bytu, mimoriadnom bonuse alebo na zachovanie chladnej hlavy počas trhovej krízy.",
    "Jeden funkčný ekosystém: ETF fondy, investičné byty, daňová optimalizácia a renta – všetko je logicky prepojené a dáva matematický zmysel.",
    "Kľudný spánok a sloboda: Delegovali ste zodpovednosť. Váš kapitál teraz systematicky pracuje za vás, kým vy sa venujete kariére a rodine.",
  ];
  return (
    <section id="pred-po" className="section-padding section-alt">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-16 text-center`}>
          Už na svoje financie nemusíte byť sami. Získajte <em className="text-primary">pocit absolútneho bezpečia.</em>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} card-hover-accent bg-card-alt rounded-2xl p-10`}>
            <h3 className="font-serif text-2xl font-semibold text-red-600 text-center mb-6">PRED <span className="font-normal opacity-90">(Bez jasného systému)</span></h3>
            <ul className="space-y-4">
              {pred.map((item) => {
                const colonIdx = item.indexOf(": ");
                const label = colonIdx >= 0 ? item.slice(0, colonIdx) : item;
                const text = colonIdx >= 0 ? item.slice(colonIdx + 2) : "";
                return (
                  <li key={item} className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-lg text-muted-foreground"><strong className="text-foreground">{label}:</strong> {text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} card-hover bg-card-alt rounded-2xl p-10`}>
            <h3 className="font-serif text-2xl font-semibold text-primary text-center mb-6">PO <span className="font-normal opacity-90">(S JS Wealth System™)</span></h3>
            <ul className="space-y-4">
              {po.map((item) => {
                const colonIdx = item.indexOf(": ");
                const label = colonIdx >= 0 ? item.slice(0, colonIdx) : item;
                const text = colonIdx >= 0 ? item.slice(colonIdx + 2) : "";
                return (
                  <li key={item} className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-lg text-muted-foreground"><strong className="text-foreground">{label}:</strong> {text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForWhomSection() {
  const { ref, isVisible } = useScrollAnimation();
  const preVas = [
    { key: "prev1", content: <>Zarábate 1 500 € a viac, alebo si tvoríte <strong className="text-foreground">stabilné mesačné prebytky</strong> a chcete ich začať efektívne zhodnocovať.</> },
    { key: "prev2", content: <>Chcete <strong className="text-foreground">delegovať správu majetku</strong>, aby ste získali kľudný spánok a nemuseli sa hrať na amatérskeho tradera.</> },
    { key: "prev3", content: <>Hľadáte <strong className="text-foreground">dlhodobého partnera</strong>, ktorý vám je kedykoľvek k dispozícii pri dôležitých finančných a životných zmenách.</> },
    { key: "prev4", content: <>Viete, že <strong className="text-foreground">váš čas má vyššiu hodnotu</strong> ako hodiny strávené hľadaním tých „správnych" fondov po večeroch.</> },
  ];
  const niePreVas = [
    { key: "nie1", content: <>Chcete si portfólio naklikávať sami cez mobilné aplikácie a hľadáte skôr <strong className="text-foreground">adrenalín z rýchleho obchodovania</strong>.</> },
    { key: "nie2", content: <>Váš rozpočet na investovanie je <strong className="text-foreground">nižší ako 200 € mesačne</strong> a hľadáte len základné vzdelávacie riešenia.</> },
    { key: "nie3", content: <>Radšej <strong className="text-foreground">sa spoliehate na vlastný úsudok</strong> a externú radu od odborníka momentálne nevyhľadávate.</> },
    { key: "nie4", content: <>Hľadáte len <strong className="text-foreground">jednorazový nákup</strong> finančného produktu a nemáte záujem o dlhodobé plánovanie vašej budúcej renty.</> },
  ];
  return (
    <section id="pre-koho" className="section-padding">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-10 text-center`}>
          JS Wealth System™ <em className="text-primary">nie je pre každého.</em>
        </h2>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-xl md:text-2xl text-muted-foreground text-center max-w-[720px] mx-auto mb-14`}>
          Pracujeme s <strong className="text-foreground">ľuďmi, pre ktorých je čas najdrahšia komodita</strong> a ich peniaze si zaslúžia sprievodcu budovaním majetku.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} card-hover bg-card rounded-2xl p-10`}>
            <h3 className="font-serif text-2xl font-bold text-primary text-center mb-6">JE PRE VÁS, AK:</h3>
            <ul className="space-y-4">
              {preVas.map((item) => (
                <li key={item.key} className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-lg text-muted-foreground">{item.content}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`scroll-animate scroll-animate-delay-3 ${isVisible ? "visible" : ""} card-hover-accent bg-card rounded-2xl p-10`}>
            <h3 className="font-serif text-2xl font-bold text-red-600 text-center mb-6">NIE JE PRE VÁS, AK:</h3>
            <ul className="space-y-4">
              {niePreVas.map((item) => (
                <li key={item.key} className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-lg text-muted-foreground">{item.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`scroll-animate scroll-animate-delay-4 ${isVisible ? "visible" : ""} w-full mt-12 rounded-2xl p-10 bg-primary/15 text-center border border-primary/20`}>
          <Quote className="w-12 h-12 text-primary/40 mb-4 mx-auto" />
          <blockquote className="text-xl md:text-2xl text-foreground italic mb-6">
            „S Ivanom investujem preto, lebo viem, že moje peniaze sú v bezpečí. A viem, že mu môžem kedykoľvek zavolať."
          </blockquote>
          <p className="font-serif font-semibold text-foreground text-xl">Matej Slovík</p>
          <p className="text-lg text-muted-foreground">Klient JS Wealth System™</p>
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/dotaznik"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg"
          >
            Navrhnúť JS Wealth System™
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const real = [
    {
      quote: "Ivan je vynikajúci odborník na investovanie. Pomohol mi správne zhodnotiť moje peniaze, keď som začínal pracovať ako lekár vo Švajčiarsku. Jeho vedomosti a rady sú hodnotné a vždy mi rýchlo odpovie na otázky. Vďaka nemu som schopný dlhodobo budovať svoj majetok.",
      name: "MuDr. Martin Vanečko",
      role: "Doktor pôsobiaci vo Švajčiarsku",
      image: "https://www.jsinvestor.sk/wp-content/uploads/2024/12/download-3.webp",
    },
    {
      quote: "Ivan je skutočný profesionál. Jeho tvorba je jedinečná a ponúka vedomosti, ktoré sú vzácne na Slovensku. Jeho rýchly a ústretový prístup ma očaril. Spolupracujeme už štyri roky a vždy mi pomáha včas a úplne. Poučil ma nielen o financiách a investovaní, ale aj o osobnom rozvoji. Je úžasné vidieť, ako ľudia, ktorých poznáte, dosahujú úspechy a plnia si svoje sny.",
      name: "Šimon Latkoczy",
      role: "Slovenský hokejový reprezentant",
      image: "https://www.jsinvestor.sk/wp-content/uploads/2024/12/download-2.webp",
    },
    {
      quote: "Ivan je skvelým spoločníkom pre podnikateľov. Jeho rady o investovaní mi pomáhajú zhodnocovať peniaze zo svojho biznisu. Je skúsený a veľmi znalý. Navyše, našiel som s ním aj spoločnú reč a podobné záujmy.",
      name: "Ladislav Papik",
      role: "Konateľ firmy PAPIK ENTERPRISE s.r.o.",
      image: "https://www.jsinvestor.sk/wp-content/uploads/2024/12/papik.webp",
    },
  ];
  return (
    <section id="recenzie" className="section-padding section-alt relative overflow-hidden">
      <img
        src={brandPattern}
        alt=""
        className="absolute -left-24 top-1/2 -translate-y-1/2 w-[350px] h-auto opacity-[0.04] pointer-events-none select-none"
        aria-hidden="true"
      />
      <div ref={ref} className="content-width text-center relative z-10">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-16`}>
          Čo hovoria klienti, <em className="text-primary font-bold">ktorí sa už rozhodli.</em>
        </h2>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto mb-14`}>
          Reálne skúsenosti ľudí, ktorí našli svojho <strong>sprievodcu budovaním majetku a získali pocit absolútneho bezpečia</strong> v každej trhovej situácii.
        </p>
        <div className="space-y-10 max-w-[800px] mx-auto mb-16">
          {real.map((t, i) => (
            <div
              key={t.name}
              className={`scroll-animate scroll-animate-delay-${i + 2} ${isVisible ? "visible" : ""} card-hover bg-card-alt rounded-3xl p-10 md:p-12 shadow-sm relative text-left flex flex-col sm:flex-row gap-6 sm:gap-8 items-start`}
            >
              <Quote className="w-12 h-12 text-primary/20 absolute top-8 right-8" aria-hidden />
              {/* Maska v tvare JS patternu: teraz len svetlý pattern (bg). Keď pridáte do položky real pole "image" s cestou k fotke, fotka sa zobrazí orezaná do tvaru patternu. */}
              <div className="relative z-10 flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 brand-pattern-mask bg-primary/15 overflow-hidden">
                {"image" in t && typeof t.image === "string" && (
                  <img src={t.image} alt="" className="absolute inset-0 w-full h-full object-cover object-[35%_50%] scale-125" />
                )}
              </div>
              <div className="relative z-10 flex-1 min-w-0">
                <div className="flex gap-1.5 mb-3" aria-label="Hodnotenie: 5 z 5 hviezd">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-7 h-7 sm:w-8 sm:h-8 fill-amber-400 text-amber-400" aria-hidden />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-foreground italic mb-6">„{t.quote}"</blockquote>
                <p className="font-serif font-semibold text-foreground text-lg">{t.name}</p>
                <p className="text-base text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CLIENT_RESULTS = [
  { name: "Samuel", role: "Štátny zamestnanec", investment: "Investuje pravidelne | 3 roky", zisk: "18 427 €", pct: "+50,02 %" },
  { name: "Lukáš", role: "živnostník", investment: "Investuje pravidelne | 2 roky", zisk: "1 905 €", pct: "+35,96 %" },
  { name: "Braňo", role: "zamestnanie", investment: "Investuje pravidelne | 7 mesiacov", zisk: "1 248 €", pct: "+13,57 %" },
  { name: "Andrej", role: "podnikateľ", investment: "Investícia: 50 000 € | 2 roky", zisk: "20 743 €", pct: "+43,27 %" },
  { name: "Kristián", role: "zamestnanie", investment: "Investuje mesačne 300 € | 4 roky", zisk: "8 870 €", pct: "+41,26 %" },
  { name: "Peter", role: "podnikateľ", investment: "Za 3 roky postupne vložil 119 000 €", zisk: "59 898 €", pct: "+51,15 %" },
];

function ClientResultsSection() {
  const { ref, isVisible } = useScrollAnimation();
  // Hodnota účtu (výnosy) – čiara mierne nad vkladmi, s vykyvmi
  const chartPaths = [
    "M 0 48 L 25 44 L 50 42 L 58 46 L 75 36 L 90 34 L 105 32 L 118 30 L 135 28 L 145 26 L 160 28 L 175 24 L 200 22",
    "M 0 52 L 20 48 L 40 46 L 55 50 L 70 44 L 82 48 L 100 40 L 115 38 L 130 44 L 145 36 L 160 34 L 180 30 L 200 28",
    "M 0 56 L 30 52 L 60 48 L 90 44 L 120 40 L 150 36 L 180 32 L 200 28",
    "M 0 46 L 25 42 L 50 40 L 65 44 L 85 36 L 105 34 L 125 40 L 145 32 L 165 30 L 185 26 L 200 24",
    "M 0 54 L 35 50 L 70 46 L 95 50 L 110 44 L 130 38 L 150 34 L 165 40 L 185 32 L 200 30",
    "M 0 50 L 30 44 L 60 40 L 85 36 L 105 40 L 130 34 L 155 30 L 178 34 L 200 28",
  ];
  // Čisté vklady – oblasť hneď pod výnosmi (menší rozdiel)
  const areaPaths = [
    "M 0 58 L 50 54 L 100 50 L 150 46 L 200 42 L 200 80 L 0 80 Z",
    "M 0 60 L 50 56 L 100 52 L 150 48 L 200 44 L 200 80 L 0 80 Z",
    "M 0 62 L 70 58 L 140 54 L 200 50 L 200 80 L 0 80 Z",
    "M 0 56 L 50 52 L 100 48 L 150 44 L 200 40 L 200 80 L 0 80 Z",
    "M 0 62 L 65 56 L 130 50 L 200 46 L 200 80 L 0 80 Z",
    "M 0 58 L 60 52 L 120 46 L 200 42 L 200 80 L 0 80 Z",
  ];
  return (
    <section id="vysledky-klientov" className="section-padding bg-muted/30">
      <div ref={ref} className="content-width">
        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-4 text-center">
          <em className="text-primary">Výsledky</em> našich klientov
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-[640px] mx-auto mb-12">
          Reálne príbehy a čísla z praxe.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_RESULTS.map((c, i) => (
            <div
              key={c.name}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 icon-pattern-bg-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary-foreground -translate-x-0.5" aria-hidden />
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground text-lg">{c.name}</p>
                  <p className="text-base text-muted-foreground">{c.role}</p>
                </div>
              </div>
              <p className="text-base text-muted-foreground mb-4 text-center">{c.investment}</p>
              <p className="text-2xl font-serif font-extrabold text-primary text-center mb-4">
                Zisk: {c.zisk} ({c.pct})
              </p>
              <div className="mt-auto h-[100px] w-full rounded-lg overflow-hidden bg-muted/50">
                <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="none" aria-hidden>
                  <defs>
                    <linearGradient id={`area-${i}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={areaPaths[i]} fill={`url(#area-${i})`} />
                  <path d={chartPaths[i]} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="/dotaznik"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          >
            Získať rovnaké výsledky
          </a>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const stats = [
    { value: "3 044 000 €", label: "v starostlivosti", icon: WalletIcon },
    { value: "7+ rokov", label: "skúsenosti", icon: Clock },
    { value: "531", label: "klientov", icon: Users },
    { value: "NBS", label: "Licencovaný subjekt", icon: ShieldCheck },
  ];
  return (
    <section className="py-10 md:py-14 px-6 bg-primary">
      <div ref={ref} className="content-width">
        <div className={`scroll-animate ${isVisible ? "visible" : ""} grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12`}>
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-3"
            >
              <div className="mb-7 w-14 h-14 icon-pattern-bg-white flex items-center justify-center flex-shrink-0">
                <s.icon className="w-7 h-7 text-primary -translate-x-0.5" aria-hidden />
              </div>
              <span className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight text-center">
                {s.value}
              </span>
              <p className="text-base sm:text-lg text-white/95 mt-1 text-center font-sans">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  const photoUrl = "https://www.jsinvestor.sk/wp-content/uploads/2025/12/RENTA-2.png";
  return (
    <section id="o-nas" className="section-padding">
      <div ref={ref} className="content-width">
        <p className={`scroll-animate ${isVisible ? "visible" : ""} text-base font-sans font-semibold tracking-widest uppercase text-primary mb-4 text-center md:text-left`}>
          Kto stojí za JS Investor
        </p>
        <h2 className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-10 text-center md:text-left`}>
          Správa majetku u nás <em className="text-primary">nekončí pri otvorení investičného účtu.</em>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Ľavý stĺpec: text + tlačidlo */}
          <div>
            <p className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} text-[15px] md:text-lg text-muted-foreground mb-10 text-left`}>
              Som tu pre vás, aby ste sa o svoje peniaze <strong className="text-foreground">už nikdy nemuseli báť</strong>. Aby ste získali <strong className="text-foreground">sprievodcu budovaním majetku</strong>, ktorému môžete <strong className="text-foreground">s dôverou kedykoľvek zavolať</strong>. Keď sa vám na účte naakumuluje mimoriadnych 20 000 €, keď budete prepočítavať kúpu investičného bytu, alebo keď trhy klesnú a všade naokolo zavládne panika.
            </p>
            <p className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} text-[15px] md:text-lg text-muted-foreground mb-10 text-left`}>
              <strong className="text-foreground">Toto je moja skutočná práca.</strong> Nepredávať vám finančné produkty. Byť vaším <strong className="text-foreground">stabilným partnerom</strong> pri budovaní majetku <strong className="text-foreground">na nasledujúce desaťročia</strong>.
            </p>
            <div className={`scroll-animate scroll-animate-delay-3 ${isVisible ? "visible" : ""}`}>
              <a
                href="/dotaznik"
                className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg"
              >
                Navrhnúť JS Wealth System™
              </a>
            </div>
          </div>
          {/* Pravý stĺpec: obrázok + meno */}
          <div className={`scroll-animate scroll-animate-delay-3 ${isVisible ? "visible" : ""} flex flex-col items-center`}>
            <img
              src={photoUrl}
              alt="Ivan Jašík - JS Investor"
              className="rounded-2xl shadow-lg w-full max-w-[280px] sm:max-w-[320px] h-auto object-cover mb-6"
            />
            <div className="text-center">
              <p className="font-serif text-xl font-bold text-foreground">Ivan Jašík</p>
              <p className="text-base text-muted-foreground">Váš sprievodca budovaním majetku</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GroupBenefitSection() {
  const { ref, isVisible } = useScrollAnimation();
  const benefits = [
    { icon: FileText, title: "Mesačné trhové reporty", text: <>Pravidelné PDF analýzy toho, čo sa naozaj deje na trhoch. <strong className="text-foreground">Presné dáta a súvislosti</strong> bez mediálneho bulváru a paniky.</> },
    { icon: Sparkles, title: "Exkluzívne príležitosti (FKI)", text: <>Prístup k <strong className="text-foreground">neverejným fondom kvalifikovaných investorov</strong> — absolútne nedostupné pre bežného retailového klienta.</> },
    { icon: Phone, title: "Priamy kontakt v kríze", text: <>Keď trhy klesajú a všade naokolo kričia katastrofy. Dostanete odo mňa <strong className="text-foreground">jasnú správu</strong>: čo presne robiť, čo nerobiť a prečo zachovať chladnú hlavu.</> },
  ];
  return (
    <section id="benefity" className="section-padding section-alt">
      <div ref={ref} className="content-width">
        <p className={`scroll-animate ${isVisible ? "visible" : ""} text-base font-sans font-semibold tracking-widest uppercase text-primary mb-4 text-center`}>
          Exkluzívny benefit
        </p>
        <h2 className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-10 text-center`}>
          Vstúpite do uzavretej skupiny <em className="text-primary">JS Investorov.</em>
        </h2>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-lg md:text-xl text-muted-foreground text-center max-w-[720px] mx-auto mb-10`}>
          Každý klient s JS Wealth System™ automaticky získava prístup do našej <strong className="text-foreground">súkromnej komunity</strong>. Je to priestor, kde pravidelne zdieľame hĺbkové analýzy trhov, PDF reporty a investičné príležitosti, ktoré <strong className="text-foreground">bežný klient banky nikdy neuvidí</strong>.
        </p>
        <div className="flex justify-center mb-10">
          <a
            href="/dotaznik"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg"
          >
            Navrhnúť JS Wealth System™
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`scroll-animate scroll-animate-delay-${i + 2} ${isVisible ? "visible" : ""} card-hover bg-card rounded-2xl p-8`}
            >
              <div className="w-14 h-14 rounded-xl icon-pattern-bg-primary flex items-center justify-center mb-5 -translate-x-1">
                <b.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-lg text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="garancia" className="section-padding">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-10 text-center`}>
          <em className="text-primary">Skutočné partnerstvo</em> namiesto skrytých poplatkov.
        </h2>
        <p className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} text-xl md:text-2xl text-muted-foreground text-center max-w-[800px] mx-auto mb-10`}>
          Namiesto umelých sľubov o garantovaných výnosoch vám ponúkam <strong className="text-foreground">reálne a merateľné záväzky</strong>. Ako váš sprievodca budovaním majetku vám garantujem dva piliere, na ktorých bude pevne stáť naša dlhodobá spolupráca:
        </p>

        {/* Porovnanie poplatkov */}
        <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} mb-14 w-full`}>
          <p className="text-center font-serif text-xl md:text-2xl text-muted-foreground mb-10">
            Koľko reálne platíš za celú dobu investovania?
          </p>
          <div className="overflow-x-auto lg:overflow-x-visible rounded-2xl border border-border bg-card shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_8px_16px_-8px_rgba(0,0,0,0.04)]">
            <table className="w-full min-w-[560px] lg:min-w-0 text-left border-collapse table-fixed">
              <colgroup>
                <col className="w-[22%] lg:w-[22%]" />
                <col className="w-[25%] lg:w-[25%]" />
                <col className="w-[18%] lg:w-[18%]" />
                <col className="w-[17.5%] lg:w-[17.5%]" />
                <col className="w-[17.5%] lg:w-[17.5%]" />
              </colgroup>
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="py-4 px-5 md:py-5 md:px-6 font-sans text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest" aria-label="Typ poplatku"> </th>
                  <th className="py-4 px-5 md:py-5 md:px-6 font-serif font-bold text-primary text-center text-sm md:text-base bg-primary/10 border-l border-border">JS Wealth System™</th>
                  <th className="py-4 px-5 md:py-5 md:px-6 font-sans font-semibold text-foreground text-center text-sm md:text-base whitespace-nowrap">Investičné platformy</th>
                  <th className="py-4 px-5 md:py-5 md:px-6 font-sans font-semibold text-foreground text-center text-sm md:text-base">Banky</th>
                  <th className="py-4 px-5 md:py-5 md:px-6 font-sans font-semibold text-foreground text-center text-sm md:text-base">Poradcovia</th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm md:text-base bg-card">
                <tr className="border-b border-border/60 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-5 md:py-5 md:px-6 text-muted-foreground font-bold">Manažérsky poplatok (ročne)</td>
                  <td className="py-4 px-5 md:py-5 md:px-6 bg-primary/5 text-primary font-semibold text-center border-l border-border/60">
                    <span className="block">do 50 000 € — 0,00 %</span>
                    <span className="block">od 50 000 € — 0,49 %</span>
                  </td>
                  <td className="py-4 px-5 md:py-5 md:px-6 text-muted-foreground text-center">1 %</td>
                  <td className="py-4 px-5 md:py-5 md:px-6 text-muted-foreground text-center">2 %</td>
                  <td className="py-4 px-5 md:py-5 md:px-6 text-muted-foreground text-center">1 %</td>
                </tr>
                <tr className="border-b border-border/60 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-5 md:py-5 md:px-6 text-muted-foreground font-bold">Manažérsky poplatok (v €)</td>
                  <td className="py-4 px-5 md:py-5 md:px-6 bg-primary/5 text-primary font-semibold text-center border-l border-border/60">0 €</td>
                  <td className="py-4 px-5 md:py-5 md:px-6 text-muted-foreground text-center">75 000 €</td>
                  <td className="py-4 px-5 md:py-5 md:px-6 text-muted-foreground text-center">114 000 €</td>
                  <td className="py-4 px-5 md:py-5 md:px-6 text-muted-foreground text-center">62 000 €</td>
                </tr>
                <tr className="border-b border-border/60 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-5 md:py-5 md:px-6 text-muted-foreground font-bold">Dane</td>
                  <td className="py-4 px-5 md:py-5 md:px-6 bg-primary/5 text-primary font-semibold text-center border-l border-border/60">0 €</td>
                  <td className="py-4 px-5 md:py-5 md:px-6 text-muted-foreground text-center">0 €</td>
                  <td className="py-4 px-5 md:py-5 md:px-6 text-muted-foreground text-center">109 000 €</td>
                  <td className="py-4 px-5 md:py-5 md:px-6 text-muted-foreground text-center">0 €</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-5 md:py-5 md:px-6 text-muted-foreground font-bold">Vstupný poplatok</td>
                  <td className="py-4 px-5 md:py-5 md:px-6 bg-primary/5 text-primary font-semibold text-center border-l border-border/60">900 €</td>
                  <td className="py-4 px-5 md:py-5 md:px-6 text-muted-foreground text-center">0 až 1 800 €</td>
                  <td className="py-4 px-5 md:py-5 md:px-6 text-muted-foreground text-center">0 až 1 800 €</td>
                  <td className="py-4 px-5 md:py-5 md:px-6 text-muted-foreground text-center">1 800 € a viac</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-8 max-w-[720px] mx-auto">
          <div className={`scroll-animate scroll-animate-delay-3 ${isVisible ? "visible" : ""} card-hover bg-card rounded-2xl p-8 border border-primary/20`}>
            <div className="w-14 h-14 icon-pattern-bg-primary-light flex items-center justify-center mb-5 -translate-x-2">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Priamy prístup k expertovi pri každom dôležitom rozhodnutí</h3>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>Zavoláte svojmu sprievodcovi budovaním majetku, kedykoľvek to potrebujete. Pri kúpe bytu, mimoriadnom bonuse alebo na zachovanie chladnej hlavy počas trhovej krízy.</p>
              <p>Garantujem vám, že na dôležité finančné rozhodnutia <strong className="text-foreground">už nikdy nebudete sami</strong>. Moja štandardná konzultácia stojí 250 €/hod., no vy ako klient JS Wealth System™ máte moju podporu <strong className="text-foreground">kedykoľvek k dispozícii</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="kontakt" className="section-padding">
      <div ref={ref} className="content-width text-center">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-8`}>
          Vaše peniaze si zaslúžia <em className="text-primary">komplexný systém a vy stabilného partnera.</em>
        </h2>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-xl md:text-2xl text-muted-foreground max-w-[720px] mx-auto mb-10`}>
          Prestaňte na trhu experimentovať. Zarezervujte si <strong className="text-foreground">nezáväzný úvodný hovor</strong>, kde zhodnotíme vašu aktuálnu situáciu a otvorene si povieme, či je náš <strong className="text-foreground">JS Wealth System™</strong> pre vás tým správnym riešením.
        </p>
          <a
            href="/dotaznik"
            className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg`}
          >
            Navrhnúť JS Wealth System™
          </a>
        <p className="text-base text-muted-foreground mt-6 max-w-[560px] mx-auto">
          Úvodný hovor je nezáväzný · Absolútna diskrétnosť · Pod dohľadom NBS
        </p>
      </div>
    </section>
  );
}
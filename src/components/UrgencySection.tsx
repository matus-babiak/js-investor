import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const UrgencySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="kontakt" className="section-padding">
      <div ref={ref} className="content-width text-center">
        <h2 className={`scroll-animate ${isVisible ? 'visible' : ''} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground  mb-8`}>
          Získajte svoj systém pre budovanie majetku{" "}
          <span className="text-primary">ešte dnes</span>.
        </h2>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? 'visible' : ''} text-xl text-muted-foreground max-w-[700px] mx-auto mb-4 `}>
          Aby sme zachovali najvyšší štandard a osobný prístup našej investičnej kancelárie,{" "}
          <strong className="text-foreground">
            mesačne prijímame len 5 nových klientov
          </strong>{" "}
          na vypracovanie JS Wealth System™.
        </p>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? 'visible' : ''} text-xl text-muted-foreground max-w-[700px] mx-auto mb-10 `}>
          Nenechávajte svoje peniaze napospas inflácii a chaosu. Rezervujte si s nami krátky
          úvodný hovor, kde zistíme, či vám vieme pomôcť.
        </p>

        <a
          href="#kontakt"
          className={`scroll-animate scroll-animate-delay-2 ${isVisible ? 'visible' : ''} btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-xl px-14 py-5 rounded-full shadow-xl`}
        >
          Rezervovať konzultáciu
        </a>
        <p className="text-base text-muted-foreground mt-6 max-w-[560px] mx-auto">
          Úvodná konzultácia je nezáväzná. Ak zistíme, že naša služba pre vás aktuálne nie je
          vhodná, radi vás nasmerujeme na iné, pre vás vhodnejšie riešenia.
        </p>
      </div>
    </section>
  );
};

export default UrgencySection;

const UrgencySection = () => {
  return (
    <section id="kontakt" className="section-padding">
      <div className="content-width text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif font-bold text-foreground leading-tight mb-6">
          Získajte svoj systém pre budovanie majetku{" "}
          <span className="text-primary">ešte dnes</span>.
        </h2>
        <p className="text-lg text-muted-foreground max-w-[640px] mx-auto mb-4 leading-relaxed">
          Aby sme zachovali najvyšší štandard a osobný prístup našej investičnej kancelárie,{" "}
          <strong className="text-foreground">
            mesačne prijímame len 5 nových klientov
          </strong>{" "}
          na vypracovanie JS Wealth System™.
        </p>
        <p className="text-lg text-muted-foreground max-w-[640px] mx-auto mb-10 leading-relaxed">
          Nenechávajte svoje peniaze napospas inflácii a chaosu. Rezervujte si s nami krátky
          úvodný hovor, kde zistíme, či vám vieme pomôcť.
        </p>

        <a
          href="#kontakt"
          className="inline-block bg-primary text-primary-foreground font-sans font-semibold text-lg px-12 py-5 rounded-full hover:opacity-90 transition-opacity shadow-xl"
        >
          Rezervovať konzultáciu
        </a>
        <p className="text-sm text-muted-foreground mt-5 max-w-[520px] mx-auto">
          Úvodná konzultácia je nezáväzná. Ak zistíme, že naša služba pre vás aktuálne nie je
          vhodná, radi vás nasmerujeme na iné, pre vás vhodnejšie riešenia.
        </p>
      </div>
    </section>
  );
};

export default UrgencySection;

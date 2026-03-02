import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div ref={ref} className="content-width text-center">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-8`}>
          Čísla, ktoré hovoria <span className="text-primary">za nás</span>
        </h2>

        <div
          className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} flex flex-col gap-6 lg:gap-8`}
        >
          {/* Riadok 1: 300+, 7+ rokov, Pod dohľadom NBS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="flex flex-col items-center justify-center rounded-2xl bg-card/60 border border-border/50 px-6 py-8 min-h-[120px]">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-primary leading-tight">300+</span>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 text-center">
                spokojných klientov
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-card/60 border border-border/50 px-6 py-8 min-h-[120px]">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-primary leading-tight text-center">7+ rokov</span>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 text-center">
                skúseností v oblasti správy majetku
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-card/60 border border-border/50 px-6 py-8 min-h-[120px]">
              <span className="text-xl sm:text-2xl font-serif font-bold text-primary leading-tight text-center whitespace-nowrap">Pod dohľadom NBS</span>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 text-center">
                č. 282999
              </p>
            </div>
          </div>
          {/* Riadok 2: 3 000 000 €, 0 % */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            <div className="flex flex-col items-center justify-center rounded-2xl bg-card/60 border border-border/50 px-6 py-8 min-h-[120px] w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-4rem)/3)]">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-primary leading-tight text-center whitespace-nowrap">3 000 000 €</span>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 text-center">
                spravovaný majetok klientov
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-card/60 border border-border/50 px-6 py-8 min-h-[120px] w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-4rem)/3)]">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-primary leading-tight">0 %</span>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 text-center">
                poplatok za správu do 50 000 €
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

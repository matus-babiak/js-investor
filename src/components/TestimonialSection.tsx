import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="section-padding section-alt">
      <div className="content-width text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif font-bold text-foreground leading-tight mb-14">
          Čo hovoria naši <span className="text-primary">klienti</span>?
        </h2>

        <div className="bg-card-alt rounded-3xl p-10 md:p-14 shadow-sm border border-border/50 max-w-[720px] mx-auto relative">
          <Quote className="w-10 h-10 text-primary/20 absolute top-8 left-8" />
          <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic mb-8 relative z-10">
            „Ivan mi doslova vyriešil chaos vo financiách. Konečne mi niekto nevysvetľoval len to,
            aké ETF si mám kúpiť, ale ukázal mi presné kalkulácie, ako zapojiť do hry investičný
            byt a ako z toho celého o 15 rokov čerpať rentu. To mi XTB ani banka nikdy nedali."
          </blockquote>
          <div>
            <p className="font-serif font-semibold text-foreground text-lg">Tomáš</p>
            <p className="text-muted-foreground">IT Manažér</p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="#kontakt"
            className="inline-block bg-primary text-primary-foreground font-sans font-semibold text-lg px-10 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg"
          >
            Chcem podobné výsledky
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

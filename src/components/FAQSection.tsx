import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqs = [
  {
    question: "Prečo mi nestačí investovať cez investičnú aplikáciu?",
    answer: "Aplikácie sú skvelé nástroje pre základné sporenie. Avšak nedokážu analyzovať vašu úverovú bonitu, neporadia vám, či sa vám oplatí zobrať hypotéku na investičný byt, a nevyriešia vaše dane. My sme architektúrou vášho celého majetku, nielen jedného účtu.",
  },
  {
    question: "Prečo si nespravovať investičný účet sám?",
    answer: "Štatistiky ukazujú, že až 75 % ľudí pri samostatnom obchodovaní prichádza o peniaze. Náš systém vás chráni pred najväčším rizikom na trhu – pred vašimi vlastnými emóciami a zlými rozhodnutiami.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding section-alt">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? 'visible' : ''} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground  mb-12 text-center`}>
          Často kladené otázky
        </h2>

        <div className="space-y-4 max-w-[880px] mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`scroll-animate scroll-animate-delay-${i + 1} ${isVisible ? 'visible' : ''} bg-card rounded-2xl overflow-hidden border-2 border-transparent transition-all duration-300 ${openIndex === i ? 'border-primary' : 'hover:border-primary/30'}`}
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
              >
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-7 h-7 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 md:px-8 pb-6 md:pb-8 text-lg text-muted-foreground ">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

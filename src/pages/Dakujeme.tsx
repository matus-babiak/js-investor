import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const Dakujeme = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-[560px] text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl text-foreground leading-tight mb-4">
          Ďakujeme, že ste sa ozvali
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          Vaša odpoveď nám pomáha pripraviť sa na náš spoločný hovor. Berieme váš záujem o ucelený systém
          seriózne — preto si váš čas neberieme zbytočnými formalitami.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8">
          Ozveme sa vám čo najskôr na zadaný e-mail alebo telefón. Ak máte akútnu otázku, môžete nás
          kedykoľvek kontaktovať priamo. Tešíme sa na rozhovor s vami.
        </p>
        <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Späť na úvodnú stránku
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Dakujeme;

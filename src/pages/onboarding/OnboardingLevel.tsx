import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const levels = [
  {
    id: "beginner",
    title: "Iniciante",
    description: "Estou aprendendo as regras e golpes básicos.",
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "intermediate",
    title: "Intermediário",
    description: "Consigo manter ralis e sacar com consistência.",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "advanced",
    title: "Avançado",
    description: "Jogo competições e tenho controle total do jogo.",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=200&auto=format&fit=crop",
  },
];

export const OnboardingLevel = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState("intermediate");

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-[calc(844px-48px)] bg-card">
        {/* Header */}
        <div className="flex w-full flex-col gap-4 pt-6 px-6">
          <div className="flex w-full flex-row items-center justify-between">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="progress-dot" />
              <div className="progress-dot active" />
              <div className="progress-dot" />
              <div className="progress-dot" />
            </div>
            <button className="flex items-center justify-center w-10 h-10 text-muted-foreground font-medium text-sm">
              Pular
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-6 pt-6 pb-24 overflow-y-auto no-scrollbar">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground mb-3">
              Qual é o seu nível?
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Isso nos ajuda a encontrar os parceiros ideais e jogos equilibrados para você.
            </p>
          </motion.div>

          {/* Selection Cards */}
          <div className="flex flex-col gap-4">
            {levels.map((level, index) => (
              <motion.label
                key={level.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative cursor-pointer"
              >
                <input
                  type="radio"
                  name="level"
                  value={level.id}
                  checked={selectedLevel === level.id}
                  onChange={() => setSelectedLevel(level.id)}
                  className="peer sr-only"
                />
                <div className={`flex items-center gap-4 rounded-xl p-4 transition-all duration-300 border-2 ${
                  selectedLevel === level.id 
                    ? "border-primary bg-primary/5" 
                    : "border-transparent bg-muted/50 hover:bg-muted"
                }`}>
                  <div 
                    className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url("${level.image}")` }}
                  />
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-lg text-foreground">{level.title}</span>
                      {selectedLevel === level.id && (
                        <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {level.description}
                    </p>
                  </div>
                </div>
              </motion.label>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="absolute bottom-0 left-0 w-full bg-card p-6 border-t border-border">
          <button
            onClick={() => navigate("/onboarding/objective")}
            className="tennis-button w-full flex items-center justify-center gap-2 group"
          >
            <span>Continuar</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default OnboardingLevel;

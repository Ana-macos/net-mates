import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { ArrowRight, ArrowLeft, Coffee, Dumbbell, Trophy } from "lucide-react";

const objectives = [
  {
    id: "casual",
    label: "Jogo Casual",
    description: "Quero me divertir e conhecer pessoas",
    icon: Coffee,
  },
  {
    id: "treino",
    label: "Treino",
    description: "Quero melhorar minhas habilidades",
    icon: Dumbbell,
  },
  {
    id: "competitivo",
    label: "Competitivo",
    description: "Busco jogos desafiadores e partidas sérias",
    icon: Trophy,
  },
];

export const OnboardingObjective = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <MobileLayout>
      <div className="flex flex-col h-[calc(100%-48px)] px-6 pb-8">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4 hover:bg-secondary/80 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>

        {/* Progress indicator */}
        <div className="flex gap-2 mb-8">
          <div className="flex-1 h-1 bg-primary rounded-full" />
          <div className="flex-1 h-1 bg-primary rounded-full" />
          <div className="flex-1 h-1 bg-border rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-foreground mb-2">
            O que você procura?
          </h1>
          <p className="text-muted-foreground mb-8">
            Selecione seu objetivo principal
          </p>
        </motion.div>

        <div className="flex-1 space-y-4">
          {objectives.map((objective, index) => {
            const isSelected = selected === objective.id;
            
            return (
              <motion.button
                key={objective.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelected(objective.id)}
                className={`w-full text-left tennis-card p-5 border-2 transition-all duration-300 ${
                  isSelected ? "border-primary scale-[1.02]" : "border-transparent"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected ? "bg-primary/20" : "bg-secondary"
                    }`}
                  >
                    <objective.icon
                      className={`w-6 h-6 transition-colors ${
                        isSelected ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {objective.label}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => selected && navigate("/onboarding/availability")}
          disabled={!selected}
          className={`tennis-button w-full flex items-center justify-center gap-2 ${
            !selected ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Continuar
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </MobileLayout>
  );
};

export default OnboardingObjective;

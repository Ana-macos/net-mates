import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { ArrowRight, Trophy, Target, Zap } from "lucide-react";

const levels = [
  {
    id: "iniciante",
    label: "Iniciante",
    description: "Estou começando a jogar ou pratico há pouco tempo",
    icon: Target,
    color: "emerald",
  },
  {
    id: "intermediario",
    label: "Intermediário",
    description: "Jogo regularmente e domino os fundamentos",
    icon: Zap,
    color: "blue",
  },
  {
    id: "avancado",
    label: "Avançado",
    description: "Tenho experiência competitiva e técnica refinada",
    icon: Trophy,
    color: "purple",
  },
];

export const OnboardingLevel = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const getColorClass = (color: string, isSelected: boolean) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      emerald: {
        bg: isSelected ? "bg-emerald-500/20" : "bg-emerald-500/10",
        text: "text-emerald-400",
        border: isSelected ? "border-emerald-500" : "border-transparent",
      },
      blue: {
        bg: isSelected ? "bg-blue-500/20" : "bg-blue-500/10",
        text: "text-blue-400",
        border: isSelected ? "border-blue-500" : "border-transparent",
      },
      purple: {
        bg: isSelected ? "bg-purple-500/20" : "bg-purple-500/10",
        text: "text-purple-400",
        border: isSelected ? "border-purple-500" : "border-transparent",
      },
    };
    return colors[color];
  };

  return (
    <MobileLayout>
      <div className="flex flex-col h-[calc(100%-48px)] px-6 pb-8">
        {/* Progress indicator */}
        <div className="flex gap-2 mb-8">
          <div className="flex-1 h-1 bg-primary rounded-full" />
          <div className="flex-1 h-1 bg-border rounded-full" />
          <div className="flex-1 h-1 bg-border rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Qual é o seu nível?
          </h1>
          <p className="text-muted-foreground mb-8">
            Isso nos ajuda a encontrar jogadores compatíveis
          </p>
        </motion.div>

        <div className="flex-1 space-y-4">
          {levels.map((level, index) => {
            const isSelected = selected === level.id;
            const colorClass = getColorClass(level.color, isSelected);
            
            return (
              <motion.button
                key={level.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelected(level.id)}
                className={`w-full text-left tennis-card p-5 border-2 transition-all duration-300 ${colorClass.border} ${
                  isSelected ? "scale-[1.02]" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${colorClass.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <level.icon className={`w-6 h-6 ${colorClass.text}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {level.label}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {level.description}
                    </p>
                  </div>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`w-6 h-6 rounded-full ${colorClass.bg} flex items-center justify-center`}
                    >
                      <div className={`w-2 h-2 rounded-full bg-current ${colorClass.text}`} />
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
          onClick={() => selected && navigate("/onboarding/objective")}
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

export default OnboardingLevel;

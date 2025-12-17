import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { ArrowRight, Check, Smile, Dumbbell, Trophy } from "lucide-react";
import { useState } from "react";

const objectives = [
  {
    id: "casual",
    icon: Smile,
    title: "Jogo Casual",
    description: "Diversão sem compromisso.",
    image: "https://images.unsplash.com/photo-1551773188-d3b9f9c5d3a0?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "training",
    icon: Dumbbell,
    title: "Treino",
    description: "Melhore sua técnica.",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "competitive",
    icon: Trophy,
    title: "Competitivo",
    description: "Valendo pontos e ranking.",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=200&auto=format&fit=crop",
  },
];

export const OnboardingObjective = () => {
  const navigate = useNavigate();
  const [selectedObjective, setSelectedObjective] = useState("training");

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-[calc(844px-48px)] bg-background justify-between p-6">
        {/* Top Section */}
        <div className="flex flex-col w-full">
          {/* Progress */}
          <div className="flex w-full flex-row items-center justify-start gap-2 py-6">
            <div className="progress-dot active" />
            <div className="progress-dot" />
            <div className="progress-dot" />
          </div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pb-6"
          >
            <h1 className="text-foreground tracking-tight text-[32px] font-bold leading-tight text-left">
              Defina seu objetivo
            </h1>
            <p className="text-muted-foreground text-lg font-normal leading-normal pt-2">
              O que você procura hoje?
            </p>
          </motion.div>
        </div>

        {/* Option Cards */}
        <div className="flex flex-col gap-4 w-full flex-grow">
          {objectives.map((objective, index) => {
            const IconComponent = objective.icon;
            const isSelected = selectedObjective === objective.id;
            
            return (
              <motion.button
                key={objective.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedObjective(objective.id)}
                className="group relative w-full text-left"
              >
                {isSelected && (
                  <div className="absolute -right-2 -top-2 bg-primary text-primary-foreground rounded-full p-1 shadow-sm z-10">
                    <Check className="w-4 h-4" />
                  </div>
                )}
                <div className={`flex items-center justify-between gap-4 rounded-xl bg-card p-4 transition-all duration-300 border-2 ${
                  isSelected 
                    ? "border-primary shadow-primary" 
                    : "border-transparent hover:border-primary/50"
                }`}>
                  <div className="flex flex-col justify-center gap-1 flex-[2_2_0px]">
                    <div className="flex items-center gap-2 mb-1">
                      <IconComponent className="w-6 h-6 text-primary" />
                      <p className="text-foreground text-lg font-bold leading-tight">{objective.title}</p>
                    </div>
                    <p className="text-muted-foreground text-sm font-normal leading-normal">{objective.description}</p>
                  </div>
                  <div 
                    className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg flex-none shadow-inner"
                    style={{ backgroundImage: `url("${objective.image}")` }}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="pt-8 pb-4 mt-auto"
        >
          <button
            onClick={() => navigate("/onboarding/availability")}
            className="tennis-button w-full flex items-center justify-center gap-3"
          >
            Continuar
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default OnboardingObjective;

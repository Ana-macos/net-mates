import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

const days = [
  { id: "seg", label: "Seg" },
  { id: "ter", label: "Ter" },
  { id: "qua", label: "Qua" },
  { id: "qui", label: "Qui" },
  { id: "sex", label: "Sex" },
  { id: "sab", label: "Sáb" },
  { id: "dom", label: "Dom" },
];

const times = [
  { id: "manha", label: "Manhã", description: "6h - 12h" },
  { id: "tarde", label: "Tarde", description: "12h - 18h" },
  { id: "noite", label: "Noite", description: "18h - 22h" },
];

export const OnboardingAvailability = () => {
  const navigate = useNavigate();
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const toggleTime = (time: string) => {
    setSelectedTimes((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  const canContinue = selectedDays.length > 0 && selectedTimes.length > 0;

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
          <div className="flex-1 h-1 bg-primary rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Quando você pode jogar?
          </h1>
          <p className="text-muted-foreground mb-8">
            Selecione seus dias e horários preferidos
          </p>
        </motion.div>

        <div className="flex-1 space-y-8">
          {/* Days selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              Dias da semana
            </h3>
            <div className="flex gap-2 flex-wrap">
              {days.map((day) => {
                const isSelected = selectedDays.includes(day.id);
                return (
                  <button
                    key={day.id}
                    onClick={() => toggleDay(day.id)}
                    className={`w-12 h-12 rounded-xl font-semibold text-sm transition-all duration-200 ${
                      isSelected
                        ? "bg-primary text-primary-foreground scale-105"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {day.label}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Times selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              Horários
            </h3>
            <div className="space-y-3">
              {times.map((time) => {
                const isSelected = selectedTimes.includes(time.id);
                return (
                  <button
                    key={time.id}
                    onClick={() => toggleTime(time.id)}
                    className={`w-full text-left tennis-card p-4 border-2 transition-all duration-200 ${
                      isSelected ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {time.label}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {time.description}
                        </p>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-primary border-primary"
                            : "border-muted-foreground"
                        }`}
                      >
                        {isSelected && (
                          <Check className="w-4 h-4 text-primary-foreground" />
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => canContinue && navigate("/home")}
          disabled={!canContinue}
          className={`tennis-button w-full flex items-center justify-center gap-2 ${
            !canContinue ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Começar a jogar
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </MobileLayout>
  );
};

export default OnboardingAvailability;

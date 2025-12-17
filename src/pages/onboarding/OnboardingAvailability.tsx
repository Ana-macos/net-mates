import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { ArrowLeft, ArrowRight, Check, Sun, Sunset, Moon } from "lucide-react";
import { useState } from "react";

const days = [
  { id: "mon", label: "S" },
  { id: "tue", label: "T" },
  { id: "wed", label: "Q" },
  { id: "thu", label: "Q" },
  { id: "fri", label: "S" },
  { id: "sat", label: "S" },
  { id: "sun", label: "D" },
];

const timeSlots = [
  { id: "morning", icon: Sunset, title: "Manhã", time: "06:00 - 12:00" },
  { id: "afternoon", icon: Sun, title: "Tarde", time: "12:00 - 18:00" },
  { id: "evening", icon: Moon, title: "Noite", time: "18:00 - 23:00" },
];

export const OnboardingAvailability = () => {
  const navigate = useNavigate();
  const [selectedDays, setSelectedDays] = useState(["mon", "wed", "fri"]);
  const [selectedTimes, setSelectedTimes] = useState(["afternoon", "evening"]);

  const toggleDay = (dayId: string) => {
    setSelectedDays(prev => 
      prev.includes(dayId) 
        ? prev.filter(d => d !== dayId)
        : [...prev, dayId]
    );
  };

  const toggleTime = (timeId: string) => {
    setSelectedTimes(prev => 
      prev.includes(timeId) 
        ? prev.filter(t => t !== timeId)
        : [...prev, timeId]
    );
  };

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-[calc(844px-48px)] bg-background overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-6 sticky top-0 z-10 glass-effect">
          <button 
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border text-foreground transition-transform active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="progress-dot" />
            <div className="progress-dot" />
            <div className="progress-dot active" />
          </div>
          <div className="w-10" />
        </header>

        <main className="flex-1 flex flex-col px-6 pb-24">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 mt-2"
          >
            <h1 className="text-foreground text-4xl font-bold leading-[1.1] tracking-tight mb-3">
              Sua disponibilidade
            </h1>
            <p className="text-muted-foreground text-base font-medium leading-relaxed">
              Selecione os dias e horários em que você geralmente está livre para jogar.
            </p>
          </motion.div>

          {/* Days Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-foreground text-lg font-bold">Dias</h3>
              <button className="text-xs font-semibold text-muted-foreground underline decoration-2 decoration-primary/50 hover:decoration-primary underline-offset-4">
                Selecionar fim de semana
              </button>
            </div>
            <div className="flex justify-between gap-2 py-2">
              {days.map((day) => {
                const isSelected = selectedDays.includes(day.id);
                return (
                  <button
                    key={day.id}
                    onClick={() => toggleDay(day.id)}
                    className={`time-slot relative ${isSelected ? "selected" : ""}`}
                  >
                    <span className="text-xs font-bold uppercase">{day.label}</span>
                    {isSelected && (
                      <div className="absolute bottom-1.5 h-1 w-1 rounded-full bg-current" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Time Slots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-foreground text-lg font-bold">Horário</h3>
            
            {timeSlots.map((slot) => {
              const IconComponent = slot.icon;
              const isSelected = selectedTimes.includes(slot.id);
              
              return (
                <button
                  key={slot.id}
                  onClick={() => toggleTime(slot.id)}
                  className={`time-card group ${isSelected ? "selected" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors ${
                      isSelected 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-base font-bold text-foreground">{slot.title}</p>
                      <p className="text-sm font-medium text-muted-foreground">{slot.time}</p>
                    </div>
                  </div>
                  <div className={`h-6 w-6 rounded-full border-2 transition-colors flex items-center justify-center ${
                    isSelected 
                      ? "bg-primary border-primary" 
                      : "border-border group-hover:border-primary"
                  }`}>
                    {isSelected && <Check className="w-4 h-4 text-primary-foreground" />}
                  </div>
                </button>
              );
            })}
          </motion.div>
        </main>

        {/* Footer CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background to-transparent flex justify-center">
          <button
            onClick={() => navigate("/home")}
            className="tennis-button w-full flex items-center justify-center gap-3 group"
          >
            <span>Encontrar jogos</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default OnboardingAvailability;

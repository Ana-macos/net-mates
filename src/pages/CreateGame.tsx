import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { ArrowLeft, Search, Users, User, Check } from "lucide-react";

const dates = [
  { day: "Hoje", date: 14, active: true },
  { day: "Sáb", date: 15 },
  { day: "Dom", date: 16 },
  { day: "Seg", date: 17 },
  { day: "Ter", date: 18 },
];

const times = ["07:00", "08:00", "09:00", "10:00", "11:00", "14:00", "15:00"];

const levels = [
  { id: "iniciante", label: "Iniciante (1.0 - 2.5)" },
  { id: "intermediario", label: "Intermediário (3.0 - 4.0)" },
  { id: "avancado", label: "Avançado (4.5+)" },
];

export const CreateGame = () => {
  const navigate = useNavigate();
  const [locationType, setLocationType] = useState<"club" | "public">("club");
  const [gameMode, setGameMode] = useState<"single" | "double">("double");
  const [selectedDate, setSelectedDate] = useState(14);
  const [selectedTime, setSelectedTime] = useState("09:00");
  const [selectedLevel, setSelectedLevel] = useState("intermediario");

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-[calc(844px-48px)] pb-24 overflow-x-hidden">
        {/* Header */}
        <header className="sticky top-0 z-10 flex items-center justify-between glass-effect p-4 pb-2">
          <button 
            onClick={() => navigate(-1)}
            className="flex size-10 items-center justify-center rounded-full hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
            Novo Jogo
          </h1>
        </header>

        <main className="flex flex-col gap-6 px-4 pt-2">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold tracking-tight leading-tight">Vamos jogar?</h2>
            <p className="text-muted-foreground text-sm mt-1">Configure sua partida de tênis.</p>
          </motion.div>

          {/* Location Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-lg font-bold leading-tight">Onde será a partida?</h3>
            
            {/* Segmented Control */}
            <div className="segmented-control">
              <button 
                onClick={() => setLocationType("club")}
                className={`segmented-item ${locationType === "club" ? "selected" : ""}`}
              >
                Clube Parceiro
              </button>
              <button 
                onClick={() => setLocationType("public")}
                className={`segmented-item ${locationType === "public" ? "selected" : ""}`}
              >
                Local Público
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="text"
                placeholder="Buscar clube ou quadra"
                className="input-field pl-12"
              />
            </div>
          </motion.section>

          {/* Game Format */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-lg font-bold leading-tight">Modalidade</h3>
            <div className="grid grid-cols-2 gap-3">
              {/* Single */}
              <button 
                onClick={() => setGameMode("single")}
                className={`relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-card border-2 transition-all shadow-sm h-32 ${
                  gameMode === "single" ? "border-primary" : "border-transparent"
                }`}
              >
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary border-2 border-card">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="size-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground border-2 border-card">
                    <User className="w-4 h-4" />
                  </div>
                </div>
                <span className="font-bold text-sm">Simples (2)</span>
                {gameMode === "single" && (
                  <div className="absolute top-2 right-2 text-primary">
                    <Check className="w-5 h-5" />
                  </div>
                )}
              </button>

              {/* Doubles */}
              <button 
                onClick={() => setGameMode("double")}
                className={`relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-card border-2 transition-all shadow-sm h-32 ${
                  gameMode === "double" ? "border-primary" : "border-transparent"
                }`}
              >
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary border-2 border-card z-10">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="size-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground border-2 border-card">
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <span className="font-bold text-sm">Duplas (4)</span>
                {gameMode === "double" && (
                  <div className="absolute top-2 right-2 text-primary">
                    <Check className="w-5 h-5" />
                  </div>
                )}
              </button>
            </div>
          </motion.section>

          {/* Date & Time */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold leading-tight">Quando?</h3>
              <button className="text-sm font-medium text-primary hover:text-primary/80">
                Ver Calendário
              </button>
            </div>

            {/* Date Scroller */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4">
              {dates.map((d) => (
                <button
                  key={d.date}
                  onClick={() => setSelectedDate(d.date)}
                  className={`day-button shrink-0 ${selectedDate === d.date ? "selected" : ""}`}
                >
                  <span className="text-xs font-medium uppercase opacity-70">{d.day}</span>
                  <span className="text-xl font-bold">{d.date}</span>
                </button>
              ))}
            </div>

            {/* Time Scroller */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`chip shrink-0 whitespace-nowrap ${selectedTime === time ? "selected" : ""}`}
                >
                  {time}
                </button>
              ))}
            </div>
          </motion.section>

          {/* Level Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-col gap-3 pb-8"
          >
            <h3 className="text-lg font-bold leading-tight">Nível do jogo</h3>
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`chip-dark ${selectedLevel === level.id ? "selected" : ""}`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </motion.section>
        </main>

        {/* Fixed Footer */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background to-transparent pt-10 pb-6 z-20 max-w-md mx-auto">
          <button 
            onClick={() => navigate("/confirmation")}
            className="tennis-button w-full flex items-center justify-center gap-2"
          >
            <span>Publicar Jogo</span>
            <span>🎾</span>
          </button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default CreateGame;

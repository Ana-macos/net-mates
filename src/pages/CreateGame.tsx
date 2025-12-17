import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  Building2,
  TreePine,
  Check,
} from "lucide-react";

const levels = ["Iniciante", "Intermediário", "Avançado"];
const playerOptions = [2, 4];

export const CreateGame = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [locationType, setLocationType] = useState<"partner" | "public" | null>(
    null
  );
  const [selectedPlayers, setSelectedPlayers] = useState<number | null>(null);

  const canPublish =
    selectedDate &&
    selectedTime &&
    selectedLevel &&
    locationType &&
    selectedPlayers;

  const handlePublish = () => {
    if (canPublish) {
      navigate("/confirmation");
    }
  };

  return (
    <MobileLayout>
      <div className="flex flex-col h-[calc(100%-48px)] pb-8">
        {/* Header */}
        <div className="px-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <h1 className="text-xl font-bold text-foreground">Criar jogo</h1>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 px-6 overflow-y-auto space-y-6">
          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <label className="text-sm font-medium text-muted-foreground mb-3 block">
              Data
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="input-field pl-12"
              />
            </div>
          </motion.div>

          {/* Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <label className="text-sm font-medium text-muted-foreground mb-3 block">
              Horário
            </label>
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="input-field pl-12"
              />
            </div>
          </motion.div>

          {/* Level */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <label className="text-sm font-medium text-muted-foreground mb-3 block">
              Nível do jogo
            </label>
            <div className="flex gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`chip flex-1 ${
                    selectedLevel === level ? "selected" : ""
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Location Type */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <label className="text-sm font-medium text-muted-foreground mb-3 block">
              Tipo de local
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setLocationType("partner")}
                className={`tennis-card p-4 border-2 transition-all ${
                  locationType === "partner"
                    ? "border-primary"
                    : "border-transparent"
                }`}
              >
                <Building2
                  className={`w-6 h-6 mx-auto mb-2 ${
                    locationType === "partner"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                />
                <p className="font-medium text-sm text-foreground">
                  Clube Parceiro
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Quadras verificadas
                </p>
              </button>
              <button
                onClick={() => setLocationType("public")}
                className={`tennis-card p-4 border-2 transition-all ${
                  locationType === "public"
                    ? "border-primary"
                    : "border-transparent"
                }`}
              >
                <TreePine
                  className={`w-6 h-6 mx-auto mb-2 ${
                    locationType === "public"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                />
                <p className="font-medium text-sm text-foreground">
                  Local Público
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Parques e praças
                </p>
              </button>
            </div>
          </motion.div>

          {/* Location Search */}
          {locationType && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <label className="text-sm font-medium text-muted-foreground mb-3 block">
                Local
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar local..."
                  className="input-field pl-12"
                />
              </div>
            </motion.div>
          )}

          {/* Number of Players */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <label className="text-sm font-medium text-muted-foreground mb-3 block">
              Número de jogadores
            </label>
            <div className="flex gap-3">
              {playerOptions.map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedPlayers(num)}
                  className={`flex-1 tennis-card p-4 border-2 transition-all ${
                    selectedPlayers === num
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <Users
                    className={`w-6 h-6 mx-auto mb-2 ${
                      selectedPlayers === num
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                  <p className="font-medium text-foreground">{num} jogadores</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {num === 2 ? "Singles" : "Duplas"}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Publish Button */}
        <div className="px-6 pt-4">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={handlePublish}
            disabled={!canPublish}
            className={`tennis-button w-full flex items-center justify-center gap-2 ${
              !canPublish ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Check className="w-5 h-5" />
            Publicar jogo
          </motion.button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default CreateGame;

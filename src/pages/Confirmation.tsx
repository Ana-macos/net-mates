import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { Calendar, Clock, MapPin, CheckCircle2, Star } from "lucide-react";

export const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-[calc(844px-48px)] px-6 pb-8 items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-8"
        >
          <CheckCircle2 className="w-12 h-12 text-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Você está no jogo!
          </h1>
          <p className="text-muted-foreground">
            Confirme sua presença no dia do jogo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="tennis-card p-6 w-full mb-8"
        >
          <h2 className="font-semibold text-foreground mb-4">
            Tennis Club São Paulo
          </h2>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Hoje, 18 Dez</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span>18:00</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Av. Paulista, 1000 - Bela Vista</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <span className="partner-badge">
              <Star className="w-3 h-3" />
              Clube Parceiro
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full space-y-3"
        >
          <button className="tennis-button w-full">Confirmar presença</button>

          <button
            onClick={() => navigate("/home")}
            className="w-full bg-card text-foreground font-semibold rounded-full py-4 hover:bg-muted transition-colors border border-border"
          >
            Voltar para Home
          </button>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default Confirmation;

import { MapPin, Users, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface GameCardProps {
  id: string;
  date: string;
  time: string;
  level: string;
  location: string;
  players: number;
  maxPlayers: number;
  isPartner?: boolean;
  delay?: number;
}

export const GameCard = ({
  id,
  date,
  time,
  level,
  location,
  players,
  maxPlayers,
  isPartner = false,
  delay = 0,
}: GameCardProps) => {
  const navigate = useNavigate();

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "iniciante":
        return "bg-emerald-500/20 text-emerald-400";
      case "intermediário":
        return "bg-blue-500/20 text-blue-400";
      case "avançado":
        return "bg-purple-500/20 text-purple-400";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/game/${id}`)}
      className="tennis-card p-4 cursor-pointer hover:border-primary/30 transition-all duration-300"
    >
      {isPartner && (
        <div className="mb-3">
          <span className="partner-badge">
            <span className="w-1.5 h-1.5 bg-current rounded-full" />
            Clube Parceiro
          </span>
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground">{date}</p>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Clock className="w-3.5 h-3.5" />
              {time}
            </div>
          </div>
        </div>
        <span className={`level-badge ${getLevelColor(level)}`}>{level}</span>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border/50">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <MapPin className="w-4 h-4" />
          <span className="truncate max-w-[150px]">{location}</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground text-sm">
          <Users className="w-4 h-4" />
          <span>
            {players}/{maxPlayers}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

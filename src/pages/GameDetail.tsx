import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  MessageCircle,
  Share2,
} from "lucide-react";

const mockGame = {
  id: "1",
  date: "Hoje, 18 Dez",
  time: "18:00",
  level: "Intermediário",
  location: "Tennis Club São Paulo",
  address: "Av. Paulista, 1000 - Bela Vista",
  players: [
    { id: "1", name: "Rafael M.", avatar: "RM", isHost: true },
    { id: "2", name: "Ana P.", avatar: "AP", isHost: false },
  ],
  maxPlayers: 4,
  isPartner: true,
  description: "Procurando parceiros para duplas! Nível intermediário.",
};

export const GameDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const availableSpots = mockGame.maxPlayers - mockGame.players.length;

  return (
    <MobileLayout>
      <div className="flex flex-col h-[calc(100%-48px)] pb-8">
        {/* Header */}
        <div className="px-6 mb-4">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <button className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
              <Share2 className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 overflow-y-auto space-y-6">
          {/* Game Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="tennis-card p-5"
          >
            {mockGame.isPartner && (
              <span className="partner-badge mb-4 inline-flex">
                <span className="w-1.5 h-1.5 bg-current rounded-full" />
                Clube Parceiro
              </span>
            )}

            <h1 className="text-xl font-bold text-foreground mb-4">
              {mockGame.location}
            </h1>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{mockGame.date}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>{mockGame.time}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{mockGame.address}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span>
                  {mockGame.players.length}/{mockGame.maxPlayers} jogadores
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <span className="level-badge bg-blue-500/20 text-blue-400">
                {mockGame.level}
              </span>
            </div>
          </motion.div>

          {/* Description */}
          {mockGame.description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="tennis-card p-5"
            >
              <h2 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Descrição
              </h2>
              <p className="text-foreground">{mockGame.description}</p>
            </motion.div>
          )}

          {/* Players */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="tennis-card p-5"
          >
            <h2 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              Jogadores confirmados
            </h2>
            <div className="space-y-3">
              {mockGame.players.map((player) => (
                <div
                  key={player.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                      {player.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {player.name}
                      </p>
                      {player.isHost && (
                        <p className="text-xs text-muted-foreground">
                          Organizador
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Available spots */}
              {Array.from({ length: availableSpots }).map((_, index) => (
                <div
                  key={`empty-${index}`}
                  className="flex items-center gap-3 opacity-50"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center">
                    <Users className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">Vaga disponível</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Actions */}
        <div className="px-6 pt-4 space-y-3">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => navigate(`/chat/${id}`)}
            className="w-full bg-secondary text-foreground font-semibold rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-secondary/80 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Chat do jogo
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            onClick={() => navigate("/confirmation")}
            className="tennis-button w-full"
          >
            Entrar no jogo
          </motion.button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default GameDetail;

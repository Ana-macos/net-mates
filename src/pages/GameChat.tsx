import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { ArrowLeft, Send, Info } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: string;
  avatar: string;
  isSystem?: boolean;
  isOwn?: boolean;
  time: string;
}

const mockMessages: Message[] = [
  {
    id: "1",
    text: "🎾 Jogo agendado para Hoje, 18 Dez às 18:00 no Tennis Club São Paulo",
    sender: "Sistema",
    avatar: "S",
    isSystem: true,
    time: "10:00",
  },
  {
    id: "2",
    text: "E aí pessoal! Animados pro jogo?",
    sender: "Rafael M.",
    avatar: "RM",
    isOwn: true,
    time: "10:15",
  },
  {
    id: "3",
    text: "Com certeza! Trago as bolas novas que comprei",
    sender: "Ana P.",
    avatar: "AP",
    time: "10:18",
  },
  {
    id: "4",
    text: "Perfeito! Eu chego uns 15min antes pra aquecer",
    sender: "Rafael M.",
    avatar: "RM",
    isOwn: true,
    time: "10:20",
  },
];

export const GameChat = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>(mockMessages);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: message,
        sender: "Rafael M.",
        avatar: "RM",
        isOwn: true,
        time: new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <MobileLayout>
      <div className="flex flex-col h-[calc(100%-48px)]">
        {/* Header */}
        <div className="px-6 pb-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </button>
              <div>
                <h1 className="font-semibold text-foreground">Chat do Jogo</h1>
                <p className="text-xs text-muted-foreground">3 participantes</p>
              </div>
            </div>
            <button
              onClick={() => navigate(`/game/${id}`)}
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <Info className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 px-6 py-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
            >
              {msg.isSystem ? (
                <div className="w-full">
                  <div className="bg-primary/10 rounded-xl p-4 text-center">
                    <p className="text-sm text-primary">{msg.text}</p>
                  </div>
                </div>
              ) : (
                <div
                  className={`flex gap-2 max-w-[80%] ${
                    msg.isOwn ? "flex-row-reverse" : ""
                  }`}
                >
                  {!msg.isOwn && (
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-muted-foreground flex-shrink-0">
                      {msg.avatar}
                    </div>
                  )}
                  <div>
                    {!msg.isOwn && (
                      <p className="text-xs text-muted-foreground mb-1 ml-1">
                        {msg.sender}
                      </p>
                    )}
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        msg.isOwn
                          ? "bg-primary text-primary-foreground rounded-br-md"
                          : "bg-secondary text-foreground rounded-bl-md"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                    <p
                      className={`text-xs text-muted-foreground mt-1 ${
                        msg.isOwn ? "text-right mr-1" : "ml-1"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className="px-6 py-4 border-t border-border/50">
          <div className="flex gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Digite sua mensagem..."
              className="input-field flex-1"
            />
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                message.trim()
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default GameChat;

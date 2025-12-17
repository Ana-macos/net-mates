import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { ThumbsUp, ThumbsDown, CheckCircle, XCircle } from "lucide-react";

export const PostGameRating = () => {
  const navigate = useNavigate();
  const [gameHappened, setGameHappened] = useState<boolean | null>(null);
  const [wouldPlayAgain, setWouldPlayAgain] = useState<boolean | null>(null);

  const canSubmit = gameHappened !== null && (gameHappened ? wouldPlayAgain !== null : true);

  const handleSubmit = () => {
    if (canSubmit) {
      navigate("/home");
    }
  };

  return (
    <MobileLayout>
      <div className="flex flex-col h-[calc(100%-48px)] px-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 pt-8"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🎾</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Como foi o jogo?
          </h1>
          <p className="text-muted-foreground">
            Sua avaliação ajuda a comunidade
          </p>
        </motion.div>

        <div className="flex-1 space-y-8">
          {/* Did the game happen? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">
              O jogo aconteceu?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setGameHappened(true)}
                className={`tennis-card p-6 border-2 transition-all ${
                  gameHappened === true
                    ? "border-primary"
                    : "border-transparent"
                }`}
              >
                <CheckCircle
                  className={`w-10 h-10 mx-auto mb-3 ${
                    gameHappened === true
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                />
                <p className="font-semibold text-foreground">Sim</p>
              </button>
              <button
                onClick={() => {
                  setGameHappened(false);
                  setWouldPlayAgain(null);
                }}
                className={`tennis-card p-6 border-2 transition-all ${
                  gameHappened === false
                    ? "border-destructive"
                    : "border-transparent"
                }`}
              >
                <XCircle
                  className={`w-10 h-10 mx-auto mb-3 ${
                    gameHappened === false
                      ? "text-destructive"
                      : "text-muted-foreground"
                  }`}
                />
                <p className="font-semibold text-foreground">Não</p>
              </button>
            </div>
          </motion.div>

          {/* Would play again? */}
          {gameHappened && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Jogaria novamente com essa pessoa?
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setWouldPlayAgain(true)}
                  className={`tennis-card p-6 border-2 transition-all ${
                    wouldPlayAgain === true
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <ThumbsUp
                    className={`w-10 h-10 mx-auto mb-3 ${
                      wouldPlayAgain === true
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                  <p className="font-semibold text-foreground">Sim</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Ótima experiência
                  </p>
                </button>
                <button
                  onClick={() => setWouldPlayAgain(false)}
                  className={`tennis-card p-6 border-2 transition-all ${
                    wouldPlayAgain === false
                      ? "border-destructive"
                      : "border-transparent"
                  }`}
                >
                  <ThumbsDown
                    className={`w-10 h-10 mx-auto mb-3 ${
                      wouldPlayAgain === false
                        ? "text-destructive"
                        : "text-muted-foreground"
                    }`}
                  />
                  <p className="font-semibold text-foreground">Não</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Prefiro não
                  </p>
                </button>
              </div>
            </motion.div>
          )}
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={handleSubmit}
          disabled={!canSubmit}
          className={`tennis-button w-full ${
            !canSubmit ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Enviar avaliação
        </motion.button>
      </div>
    </MobileLayout>
  );
};

export default PostGameRating;

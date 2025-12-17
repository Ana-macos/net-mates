import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout showStatusBar={false}>
      <div className="flex flex-col min-h-[844px] bg-background">
        {/* Hero Image */}
        <div className="relative w-full h-[45vh] min-h-[380px] overflow-hidden rounded-b-[3rem]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
          <div 
            className="w-full h-full bg-center bg-no-repeat bg-cover transform scale-105"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2670&auto=format&fit=crop")'
            }}
          />
          {/* Floating Badge */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
            className="absolute bottom-8 left-0 right-0 z-20 flex justify-center"
          >
            <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
              <span className="text-lg">🎾</span>
              <span className="text-sm font-bold tracking-wide uppercase">Match Point</span>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-6 pt-8 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h1 className="text-foreground text-4xl font-bold leading-tight tracking-tight mb-3">
              Encontre seu<br />
              <span className="text-primary">próximo jogo</span>
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed px-2">
              Conecte-se com jogadores locais, reserve quadras e marque jogos reais em minutos.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4 w-full"
          >
            {/* Email Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-muted-foreground group-focus-within:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Seu e-mail"
                className="input-field pl-11"
              />
            </div>

            {/* Continue Button */}
            <button 
              onClick={() => navigate("/onboarding/level")}
              className="tennis-button flex items-center justify-center gap-2 text-lg"
            >
              <span>Continuar</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Divider */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-border" />
              <span className="flex-shrink-0 mx-4 text-muted-foreground text-sm font-medium">ou entre com</span>
              <div className="flex-grow border-t border-border" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center h-12 px-4 rounded-full bg-card border border-border hover:bg-muted transition-colors">
                <span className="text-foreground font-bold text-lg mr-2"></span>
                <span className="text-foreground font-medium text-sm">Apple</span>
              </button>
              <button className="flex items-center justify-center h-12 px-4 rounded-full bg-card border border-border hover:bg-muted transition-colors">
                <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-foreground font-medium text-sm">Google</span>
              </button>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-auto pt-6 text-center space-y-4"
          >
            <p className="text-sm font-semibold text-foreground">
              Não tem uma conta? <span className="text-primary ml-1">Cadastre-se</span>
            </p>
            <p className="text-xs text-muted-foreground max-w-[280px] mx-auto leading-relaxed">
              Ao continuar, você concorda com nossos{" "}
              <span className="underline">Termos de Serviço</span> e{" "}
              <span className="underline">Política de Privacidade</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Login;

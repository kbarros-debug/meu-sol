import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <Heart className="w-8 h-8 text-pink-200 fill-current animate-pulse mr-2" />
          <h3 className="text-white">Para Sempre Juntos</h3>
          <Heart className="w-8 h-8 text-pink-200 fill-current animate-pulse ml-2" />
        </div>
        
        <p className="text-pink-100 mb-6 text-lg max-w-2xl mx-auto">
          Este site é uma pequena demonstração do amor infinito que sinto por você. 
          Cada seção, cada palavra, cada detalhe foi pensado com carinho especialmente para você.
        </p>
        
        <div className="flex items-center justify-center space-x-4 text-pink-200">
          <span>Feito com</span>
          <Heart className="w-5 h-5 fill-current animate-pulse text-pink-300" />
          <span>para minha namorada</span>
        </div>
        
        <div className="mt-8 pt-8 border-t border-pink-400/30">
          <p className="text-pink-200 text-sm">
            © {new Date().getFullYear()} - Um presente do coração ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
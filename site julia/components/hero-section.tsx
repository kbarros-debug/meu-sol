import { Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1609561026486-f5d4a3c4c660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3NTc0MDk5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Romantic sunset couple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Heart className="w-12 h-12 text-pink-400 fill-current animate-pulse" />
        </div>
        
        <h1 className="text-white mb-6 text-4xl md:text-6xl lg:text-7xl">
          Para Meu Amor
        </h1>
        
        <p className="text-white/90 mb-8 text-lg md:text-xl max-w-2xl mx-auto">
          Este site é uma homenagem ao nosso amor, às nossas memórias e aos momentos especiais que compartilhamos juntos.
        </p>
        
        <div className="flex items-center justify-center space-x-2 text-pink-300">
          <Heart className="w-5 h-5 fill-current" />
          <span className="text-lg">Com todo meu amor</span>
          <Heart className="w-5 h-5 fill-current" />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
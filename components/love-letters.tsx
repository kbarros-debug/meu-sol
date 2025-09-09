import { Card } from "./ui/card";
import { Quote } from "lucide-react";

const loveLetters = [
  {
    id: 1,
    title: "Para Você, Meu Amor",
    content: "Em cada amanhecer, vejo em você a razão do meu sorriso. Seu amor transformou minha vida em algo extraordinário, repleto de cores que eu nem sabia que existiam. Obrigado por ser minha inspiração diária.",
    date: "Com amor infinito"
  },
  {
    id: 2,
    title: "Minha Fonte de Felicidade",
    content: "Você é a melodia mais doce que já ouvi, a poesia mais bela que já li. Em seus braços encontro meu lar, em seu olhar encontro meu futuro. Cada dia ao seu lado é um presente que guardo no coração.",
    date: "Para sempre sua"
  },
  {
    id: 3,
    title: "Nossa História de Amor",
    content: "Se o amor fosse um livro, nossa história seria a mais bela já escrita. Cada página repleta de risos, lágrimas de felicidade, abraços calorosos e beijos apaixonados. Que nossa história continue sendo escrita por muitos e muitos anos.",
    date: "Com todo meu coração"
  }
];

export function LoveLetters() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-rose-600">Cartas de Amor</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Palavras que vêm do coração, escritas com amor e dedicadas especialmente para você.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loveLetters.map((letter) => (
            <Card key={letter.id} className="p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              {/* Decorative quote */}
              <div className="absolute top-4 left-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-16 h-16 text-rose-300" />
              </div>
              
              <div className="relative z-10">
                <h3 className="mb-4 text-rose-700">{letter.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{letter.content}"
                </p>
                
                <div className="text-right">
                  <p className="text-rose-500 font-medium">
                    {letter.date}
                  </p>
                </div>
              </div>
              
              {/* Decorative hearts */}
              <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-rose-300 rounded-full transform rotate-45"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Heart, Calendar, MapPin, Star } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const timelineEvents = [
  {
    id: 1,
    date: "Primeiro Encontro",
    title: "O Início de Tudo",
    description: "O dia em que nossos olhares se cruzaram e soubemos que algo especial estava começando.",
    icon: Heart,
    color: "bg-pink-500"
  },
  {
    id: 2,
    date: "Primeiro Beijo",
    title: "O Momento Mágico",
    description: "Quando os lábios se encontraram pela primeira vez e o mundo parou ao nosso redor.",
    icon: Star,
    color: "bg-purple-500"
  },
  {
    id: 3,
    date: "Primeiro 'Eu Te Amo'",
    title: "Palavras do Coração",
    description: "O momento em que finalmente expressamos em palavras o que já sabíamos no coração.",
    icon: Heart,
    color: "bg-red-500"
  },
  {
    id: 4,
    date: "Nossa Primeira Viagem",
    title: "Aventura a Dois",
    description: "Explorando novos lugares juntos e criando memórias que durarão para sempre.",
    icon: MapPin,
    color: "bg-blue-500"
  },
  {
    id: 5,
    date: "Hoje",
    title: "Nosso Amor Continua",
    description: "A cada dia que passa, nosso amor cresce mais forte e mais profundo.",
    icon: Calendar,
    color: "bg-green-500"
  }
];

export function LoveTimeline() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-rose-600">Nossa Linha do Tempo</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Os momentos mais especiais da nossa jornada juntos, marcados no tempo e no coração.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-purple-300 to-rose-300" />
          
          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              
              return (
                <div key={event.id} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${event.color} shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-rose-600">
                          {event.date}
                        </Badge>
                      </div>
                      
                      <h3 className="mb-2 text-rose-700">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
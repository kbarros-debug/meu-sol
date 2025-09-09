import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const memories = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1727507616256-ccb592501947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwY291cGxlJTIwd2Fsa2luZ3xlbnwxfHx8fDE3NTc0MjcyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Nossos Passeios",
    description: "Cada caminhada juntos é uma nova aventura"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1532302584927-8bd4b6118390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGNhbmRsZXN8ZW58MXx8fHwxNzU3NDI3MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Jantares Românticos",
    description: "Momentos íntimos que ficaram para sempre em nossos corações"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506014299253-3725319c0f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBob2xkaW5nJTIwaGFuZHN8ZW58MXx8fHwxNzU3NDI3MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Unidos Para Sempre",
    description: "Nossas mãos entrelaçadas são o símbolo do nosso amor"
  }
];

export function MemoryGallery() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-rose-600">Nossa Galeria de Memórias</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada foto conta uma história, cada momento é uma lembrança preciosa do nosso amor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory) => (
            <Card key={memory.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="mb-2 text-rose-700">{memory.title}</h3>
                <p className="text-muted-foreground">
                  {memory.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
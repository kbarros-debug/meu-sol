import { Heart, Music, Camera } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import couplePhoto from "figma:asset/4ca0a429e155f3951ec7dbafbb1ff19d13c55d56.png";
import momentosPhoto from "figma:asset/6d3329c95a9308186525e8135b375bc8f72e77bb.png";
import amorPhoto from "figma:asset/0f21a5151d31162c5ac92c19f01643c348e90469.png";

const images = {
  hero: couplePhoto,
  photo1: momentosPhoto,
  photo2: amorPhoto,
};

const siteContent = {
  title: "Para Meu Amor",
  subtitle: "meu sol eu fiz esse site dedicado a nosso amor, me Desculpe ainda ser iniciante e não poder fazer um site mais elaborado, mas fiz com todo amor",
  loveMessage: "amor nunca imaginei que viveria uma vida com alguém que me faz tão bem se Deus me desse a escolha de viver mais mil vidas a seu lado eu pediria que me permitisse viver infinitas vidas com vc, suas mensagens e saber que vc me ama e oq ilumina meu dia e me faz tentar ser mlhr em todos aspectos filho, aluno, estudos e seguidor da palavra, futuramente poderei dizer marido, pai, companheiro, provedor, e temente a Deus. Obrigador por estar cmg",
  memories: [
    { title: "Nossos Momentos", description: "Cada passeio, cada risada, cada abraço..." },
    { title: "Nosso Amor", description: "Unidos para sempre, de mãos dadas rumo ao futuro" }
  ],
  playlist: [
    { title: "Olha", artist: "Maria Bethânia" },
    { title: "Um Amor Puro", artist: "Djavan" },
    { title: "No One Noticed", artist: "The Marias" }
  ]
};

export function SimpleLoveSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={images.hero}
            alt="Casal romântico"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-2xl">
          <Heart className="w-16 h-16 text-pink-300 fill-current mx-auto mb-6 animate-pulse" />
          <h1 className="text-white mb-4 text-4xl md:text-6xl">
            {siteContent.title}
          </h1>
          <p className="text-white/90 text-lg md:text-xl">
            {siteContent.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="p-8 md:p-12 bg-white/80 backdrop-blur-sm">
            <Heart className="w-12 h-12 text-rose-500 fill-current mx-auto mb-6" />
            <p className="text-muted-foreground leading-relaxed text-lg italic">
              "{siteContent.loveMessage}"
            </p>
            <div className="mt-6 text-rose-600">
              Com todo meu amor ❤️
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Camera className="w-8 h-8 text-rose-500 mx-auto mb-4" />
            <h2 className="text-rose-600 mb-2">Nossas Memórias</h2>
            <p className="text-muted-foreground">Momentos especiais que guardamos no coração</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteContent.memories.map((memory, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={index === 0 ? images.photo1 : images.photo2}
                    alt={memory.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-rose-700 mb-2">{memory.title}</h3>
                  <p className="text-muted-foreground">{memory.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Music className="w-8 h-8 text-rose-500 mx-auto mb-4" />
            <h2 className="text-rose-600 mb-2">Nossas Músicas</h2>
            <p className="text-muted-foreground">A trilha sonora do nosso amor</p>
          </div>

          <Card className="p-6">
            <div className="space-y-4">
              {siteContent.playlist.map((song, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-rose-50 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-rose-700">{song.title}</p>
                    <p className="text-muted-foreground text-sm">{song.artist}</p>
                  </div>
                  <Heart className="w-4 h-4 text-pink-400 fill-current" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <Heart className="w-8 h-8 text-pink-200 fill-current mx-auto mb-4 animate-pulse" />
          <p className="text-pink-100 mb-2">Feito com muito amor para você meu solzinho</p>
          <p className="text-pink-200 text-sm">© {new Date().getFullYear()} - Para sempre juntos por toda eternidade ❤️</p>
        </div>
      </footer>
    </div>
  );
}
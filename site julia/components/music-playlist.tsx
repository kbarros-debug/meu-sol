import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Music, Play, Heart } from "lucide-react";

const playlist = [
  {
    id: 1,
    title: "Perfect",
    artist: "Ed Sheeran",
    description: "Nossa música especial, que toca sempre que lembramos do nosso primeiro encontro."
  },
  {
    id: 2,
    title: "All of Me",
    artist: "John Legend",
    description: "Porque você tem tudo de mim, cada parte do meu coração."
  },
  {
    id: 3,
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    description: "Para quando estivermos velhinhos, ainda dançando na cozinha."
  },
  {
    id: 4,
    title: "A Thousand Years",
    artist: "Christina Perri",
    description: "O tempo que eu esperaria por você, sem pestanejar."
  },
  {
    id: 5,
    title: "Make You Feel My Love",
    artist: "Bob Dylan",
    description: "Tudo que eu faria para demonstrar meu amor por você."
  }
];

export function MusicPlaylist() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Music className="w-8 h-8 text-rose-500 mr-2" />
            <h2 className="text-rose-600">Nossa Playlist do Amor</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As músicas que embalam nosso amor e nos fazem lembrar dos momentos mais especiais juntos.
          </p>
        </div>
        
        <div className="space-y-4">
          {playlist.map((song, index) => (
            <Card key={song.id} className="p-6 hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full text-white font-medium">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-rose-700">{song.title}</h3>
                      <Heart className="w-4 h-4 text-pink-400 fill-current" />
                    </div>
                    <p className="text-muted-foreground mb-2">{song.artist}</p>
                    <p className="text-sm text-muted-foreground italic">
                      {song.description}
                    </p>
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                >
                  <Play className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
            <Music className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <h3 className="mb-2 text-rose-600">Nossa Trilha Sonora</h3>
            <p className="text-muted-foreground">
              Cada música desta playlist carrega um pedacinho da nossa história. São as melodias que dançamos, cantamos e que nos fazem sorrir sempre que as ouvimos.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
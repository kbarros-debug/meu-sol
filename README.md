# Site Romântico - Para Meu Amor

Um site simples e romântico feito com HTML, CSS e JavaScript puro.

## 📁 Estrutura dos Arquivos

```
projeto/
├── index.html          # Arquivo principal HTML
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── images/             # Pasta para suas fotos
│   ├── hero-photo.jpg      # Foto principal (hero)
│   ├── momentos-photo.jpg  # Foto dos momentos
│   └── amor-photo.jpg      # Foto do amor
└── README.md          # Este arquivo
```

## 🖼️ Como Adicionar Suas Fotos

1. Crie uma pasta chamada `images` no mesmo local dos arquivos
2. Adicione suas 3 fotos com estes nomes exatos:
   - `hero-photo.jpg` - Foto principal (fundo da primeira seção)
   - `momentos-photo.jpg` - Foto da seção "Nossos Momentos"
   - `amor-photo.jpg` - Foto da seção "Nosso Amor"

## ✨ Funcionalidades

- **Design Responsivo**: Funciona perfeitamente em celular e desktop
- **Animações Suaves**: Elementos aparecem conforme você rola a página
- **Efeito Parallax**: Foto principal se move suavemente
- **Corações Flutuantes**: Efeito especial de corações que sobem na tela
- **Hover Effects**: Animações quando passa o mouse sobre elementos

## 🎨 Personalização

### Alterar Textos
Edite o arquivo `index.html` e procure por:
- **Título principal**: Altere "Para Meu Amor"
- **Mensagem de amor**: Substitua a mensagem longa
- **Títulos das memórias**: "Nossos Momentos" e "Nosso Amor"
- **Músicas**: Altere os títulos e artistas na seção playlist

### Alterar Cores
No arquivo `styles.css`, procure por estas cores principais:
- **Rosa claro**: `#f472b6`
- **Rosa escuro**: `#e11d48`
- **Rosa mais escuro**: `#be185d`

### Adicionar Mais Músicas
No arquivo `index.html`, copie este bloco dentro da `.playlist-card`:

```html
<div class="playlist-item">
    <div class="song-number">4</div>
    <div class="song-info">
        <p class="song-title">Nome da Música</p>
        <p class="song-artist">Nome do Artista</p>
    </div>
    <div class="heart-icon small">❤️</div>
</div>
```

## 🚀 Como Usar no Visual Studio

1. **Abrir no Visual Studio:**
   - File → Open → Folder
   - Selecione a pasta com todos os arquivos

2. **Visualizar o Site:**
   - Clique com botão direito no `index.html`
   - Escolha "Open with Live Server" (se tiver a extensão)
   - Ou simplesmente abra o arquivo no navegador

3. **Extensões Recomendadas:**
   - Live Server (para ver mudanças em tempo real)
   - Prettier (para formatar código)
   - Auto Rename Tag (para editar HTML)

## 📱 Compatibilidade

✅ Chrome, Firefox, Safari, Edge  
✅ Dispositivos móveis (iPhone, Android)  
✅ Tablets  
✅ Desktop

## 🛠️ Hospedagem Gratuita

Para colocar online gratuitamente:

1. **Vercel** (Recomendado):
   - Vá em vercel.com
   - Arraste a pasta do projeto
   - Pronto!

2. **Netlify**:
   - Vá em netlify.com
   - Arraste a pasta do projeto
   - Pronto!

3. **GitHub Pages**:
   - Faça upload no GitHub
   - Ative Pages nas configurações

## 💡 Dicas

- **Fotos**: Use imagens de boa qualidade (pelo menos 1080p)
- **Tamanho**: Comprima as fotos para carregar mais rápido
- **Backup**: Sempre faça backup antes de fazer mudanças
- **Teste**: Sempre teste no celular após fazer mudanças

---

**Feito com ❤️ para eternizar momentos especiais**
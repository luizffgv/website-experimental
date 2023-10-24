import { html } from "Scripts/tags";

/**
 * Project tag.
 */
export type Tag =
  | "Bash"
  | "Biblioteca"
  | "C"
  | "C++"
  | "C++17"
  | "C++20"
  | "C18"
  | "Discord App"
  | "Docker"
  | "Doxygen"
  | "Express.js"
  | "Framework"
  | "GitHub"
  | "GitHub Actions"
  | "HTML"
  | "JavaScript"
  | "Livro"
  | "Lua"
  | "Markdown"
  | "mdBook"
  | "Mod"
  | "Node.js"
  | "Organização"
  | "Pacote NPM"
  | "Python"
  | "Sass"
  | "Site"
  | "Three.js"
  | "TypeScript"
  | "Webpack";

export type License =
  | "MIT License"
  | "Unlicense"
  | "CC BY-SA 4.0"
  | "GNU General Public License v3.0";

/**
 * Raw project obtained from JSON.
 */
export type ProjectRaw = {
  name: string;
  description: string;
  details?: string;
  tags?: Tag[];
  license?: License;
  url?: string;
  repository?: string;
  wip?: boolean;
  "image-override"?: string;
};
const projects: ProjectRaw[] = [
  {
    name: "Blink: Ultimate Teleportation",
    description:
      "Utilizado por mais de 32 mil usuários diferentes, Blink é um mod feito em Lua para o jogo Teardown.",
    details: html`
      <p>
        Blink: Ultimate Teleportation é um mod para
        <a href="https://teardowngame.com/">Teardown</a> que te permite desafiar
        a física e percorrer distâncias em um piscar de olhos.
      </p>
      <p>
        Tipagens via
        <a href="https://github.com/LuaLS/lua-language-server"
          >lua-language-server</a
        >
        foram amplamente utilizadas.<br />
        Embora eu não seja experiente em Lua e não seja fã de suas
        particularidades, o mod rapidamente ficou em alta na Oficina Steam.
      </p>
    `,
    tags: ["GitHub", "Lua", "Mod", "Python"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2875792342",
    repository: "https://github.com/luizffgv/blink-mod-teardown",
    "image-override": "Blink Ultimate Teleportation",
  },
  {
    name: "codinStruct",
    description:
      "Uma organização feita como projeto de faculdade, visando ajudar estudantes a aprender C, JavaScript e Python.  Trabalhei principalmente na organização, no Sass e no conteúdo de C.",
    details: html`
      <p>
        codinStruct é um projeto com o intuito de disponibilizar conteúdo para
        auxiliar no aprendizado de C, JavaScript e Python.
      </p>
      <p>
        Eu escrevi o conteúdo sobre C (2641 linhas no momento em que isso foi
        escrito) e trabalhei nos estilos Sass utilizados nas páginas de
        conteúdo, e parte do HTML e workflows.
      </p>
      <h3>Como funciona o projeto?</h3>
      <p>A organização até o momento possui três repositórios públicos:</p>
      <ul class="raiar-list-text">
        <li>
          <a href="https://github.com/codinStruct/codinStruct"
            ><strong>codinStruct</strong></a
          >&mdash;contém o código para criar uma imagem Docker para servir o
          website.
        </li>
        <li>
          <a href="https://github.com/codinStruct/codinStruct-Content"
            ><strong>codinstruct-Content</strong></a
          >&mdash;contém o conteúdo disponibilizado no website, com a licença CC
          BY-SA 4.0.<br />
          Esse repositório também hospeda o conteúdo diretamente via mdBook e
          GitHub Pages, acessível
          <a href="https://codinStruct.github.io/codinStruct-content/">aqui</a>.
        </li>
        <li>
          <a href="https://github.com/codinStruct/md2html"
            ><strong>md2html</strong></a
          >&mdash;Contém um script Python para converter Markdown para HTML.
        </li>
      </ul>
      <p>
        Todo o conteúdo é escrito em Markdown, que é automaticamente processado
        pelo servidor e se torna HTML que por sua vez é servido e estilizado com
        Sass.
      </p>
    `,
    tags: [
      "Bash",
      "Docker",
      "Express.js",
      "GitHub",
      "GitHub Actions",
      "HTML",
      "JavaScript",
      "Markdown",
      "mdBook",
      "Node.js",
      "Organização",
      "Python",
      "Sass",
      "Site",
      "TypeScript",
      "Webpack",
    ],
    url: "https://github.com/codinStruct",
  },
  {
    name: "ExpTL",
    description:
      "Biblioteca de C++ de uso geral, pretendendo complementar a biblioteca padrão.",
    tags: ["Biblioteca", "C++", "C++20", "Doxygen", "GitHub", "GitHub Actions"],
    license: "MIT License",
    url: "https://exptl.luizf.dev/modules.html",
    repository: "https://github.com/luizffgv/exptl",
  },
  {
    name: "Figment",
    description:
      "Uma classe em C++ que permite controle preciso da vida útil de objetos de qualquer tipo. Semelhante a std::optional, mas não contém informações sobre o objeto contido.",
    tags: [
      "Biblioteca",
      "C++",
      "C++17",
      "C++20",
      "Doxygen",
      "GitHub Actions",
      "GitHub",
    ],
    license: "Unlicense",
    url: "https://figment.luizf.dev",
    repository: "https://github.com/luizffgv/Figment",
  },
  {
    name: "Globe",
    description:
      "Um site com um globo giratório formado por pontos, te permitindo usar suas próprias imagens como texturas.",
    tags: [
      "GitHub Actions",
      "GitHub",
      "HTML",
      "JavaScript",
      "Node.js",
      "Sass",
      "Site",
      "Three.js",
      "TypeScript",
      "Webpack",
    ],
    details: html`
      <p>
        Globe utiliza Three.js para exibir um globo giratório de pontos com
        efeitos de bloom e ondulação.
      </p>
      <p>
        É possível escolher uma imagem para ser exibida no globo, mas ela deve
        seguir um padrão específico.
      </p>
      <p>
        A movimentação de cada ponto no globo é determinada via JavaScript, mas
        é também factível implementar via shaders para melhor desempenho.
      </p>
    `,
    license: "MIT License",
    url: "https://globe.luizf.dev",
    repository: "https://github.com/luizffgv/globe",
  },
  {
    name: "HTilesML",
    description:
      "Jogo experimental utilizando elementos HTML e transformações CSS 3D.",
    details: html`
      <p>
        HTilesML é um pequeno experimento que serve como prova de conceito da
        possibilidade de criar um jogo 3D sem canvas&mdash;utilizando apenas
        elementos HTML.
      </p>
      <p>
        O visual do jogo é feito utilizando ortoedros formados por faces
        posicionadas com transformações CSS 3D.
      </p>
      <p>
        Admitidamente não é um bom jogo sob nenhum padrão e realmente só deve
        ser visto como experimento.
      </p>
    `,
    tags: ["GitHub", "HTML", "JavaScript", "Site"],
    license: "MIT License",
    url: "https://htilesml.luizf.dev",
    repository: "https://github.com/luizffgv/htilesml",
  },
  {
    name: "livro-c",
    description:
      "Livro virtual gratuito que pretende trazer uma fonte moderna, confiável e completa para o aprendizado de C.",
    tags: ["C", "GitHub", "Livro", "mdBook"],
    license: "CC BY-SA 4.0",
    url: "https://luizffgv.github.io/livro-c/",
    repository: "https://github.com/luizffgv/livro-c",
  },
  {
    name: "Modern C Sorting Algorithms",
    description:
      "Coleção de algoritmos de ordenação genéricos utilizando o padrão C18 extensivamente, feita para facilitar meus trabalhos de C na faculdade.",
    details: html`
      <p>Uma coleção de algoritmos de ordenação utilizando o padrão C18.</p>
      <h3>Pontos notáveis</h3>
      <ul class="raiar-list-text">
        <li>
          Uso de macros em definições e implementações de funções, reduzindo
          drasticamente o número de linhas de código.
        </li>
        <li>
          Combinação de <code>_Generic</code> e <code>static_assert</code> para
          asseguração de interfaces.
        </li>
        <li>
          Uso de <code>_Generic</code> para determinar automaticamente qual
          função executar baseado nos tipos dos argumentos.
        </li>
      </ul>
    `,
    tags: ["Biblioteca", "C", "C18", "GitHub"],
    license: "GNU General Public License v3.0",
    repository: "https://github.com/luizffgv/modern-c-sorting-algorithms",
  },
  {
    name: "Raiar",
    description:
      "Um framework web front-end fornecendo web components JS e estilos Sass configuráveis, que por sinal é utilizado nesse site.",
    details: html`
      Raiar é um pequeno framework de Sass e web components JS, criado para meus
      projetos com a intenção de acelerar o desenvolvimento e manter
      consistência entre eles.<br /><br />Raiar não é muito portável pois
      utiliza várias funcionalidades relativamente novas no CSS, portanto não é
      recomendado para todos os tipos de projetos.
      <h3>Funcionalidades</h3>
      <ul class="raiar-list-text">
        <li>
          <strong>
            Raiar utiliza tanto variáveis Sass quanto variáveis CSS</strong
          >, permitindo alterações nos estilos via JavaScript mesmo após a
          compilação.
        </li>
        <li>
          <strong
            >Raiar fornece um equilíbrio entre shadow DOM e light DOM</strong
          >&mdash;web components só são utilizados quando há a necessidade de
          executar JavaScript no funcionamento de um elemento.
        </li>
        <li>
          <strong>Raiar infere o significado dos elementos por contexto</strong
          >&mdash;o uso das pseudo-classes <code>:has</code> e
          <code>:is</code> permite que elementos sejam estilizados corretamente
          sem o uso classes.
        </li>
      </ul>
    `,
    tags: ["GitHub", "HTML", "Framework", "JavaScript", "Sass"],
    license: "MIT License",
    repository: "https://github.com/luizffgv/raiar",
  },
  {
    name: "SoR-pt-BR",
    description:
      "Tradução não oficial para o jogo Streets of Rogue, com melhorias—algumas subjetivas—em relação à versão oficial.",
    tags: ["GitHub", "Python"],
    license: "Unlicense",
    repository: "https://github.com/luizffgv/SoR-pt-BR",
  },
  {
    name: "Spirit Box",
    description:
      "Bot para Discord que gera um diário de anotações do jogo Phasmophobia, para auxiliar na identificação de fantasmas e no compartilhamento de pistas com sua equipe.",
    details: html`
      <p>
        Bot para Discord com o intuito de compartilhar pistas e facilitar a
        identificação de fantasmas no jogo Phasmophobia.
      </p>
      <p>
        Spirit Box utiliza TypeScript extensivamente e possui um
        <a
          href="https://github.com/luizffgv/Spirit-Box/blob/b0734c85de03127fca33b9408b4f2b229366df6d/src/commands/journal.ts#L148-L202"
          >algoritmo</a
        >
        <strong>compacto</strong> e <strong>genérico</strong> para a
        identificação de fantasmas, com um modelo que torna o torna aplicável,
        sem alterações, a todos os fantasmas e dificuldades.
      </p>
      <h3>Passos do algoritmo</h3>
      <ul class="raiar-list-text">
        <li>
          Descartar fantasmas que não possuem alguma das evidências encontradas,
          ignorando evidências falsas.
        </li>
        <li>
          Descartar fantasmas que apresentam mais evidências do que a
          dificuldade permite, ignorando evidências falsas.
        </li>
        <li>
          Descartar fantasmas que possuem mais evidências ausentes do que
          evidências desabilitadas pela dificuldade.
        </li>
        <li>
          Descartar fantasmas cuja evidência garantida está ausente ou
          inobtível.
        </li>
        <li>Descartar fantasmas cuja evidência falsa está ausente.</li>
      </ul>
    `,
    tags: ["Discord App", "GitHub", "JavaScript", "Node.js", "TypeScript"],
    license: "MIT License",
    repository: "https://github.com/luizffgv/spirit-box",
  },
  {
    name: "TS Conversions",
    description:
      "Biblioteca e pacote NPM fornecendo utilitários para realizar conversões seguras ou inseguras e diminuir código boilerplate no TypeScript. Também é utilizada nesse site.",
    tags: [
      "Biblioteca",
      "GitHub Actions",
      "GitHub",
      "JavaScript",
      "Node.js",
      "Pacote NPM",
      "TypeScript",
    ],
    license: "MIT License",
    url: "https://www.npmjs.com/package/@luizffgv/ts-conversions",
    repository: "https://github.com/luizffgv/ts-conversions",
  },
];

export default projects;

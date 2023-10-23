(()=>{"use strict";var e={726:(e,t,o)=>{o.d(t,{Z:()=>n});var a=o(81),i=o.n(a),r=o(645),s=o.n(r)()(i());s.push([e.id,'@keyframes wiggle{0%{rotate:z 0deg}25%{rotate:z -1.25deg}50%{rotate:z 2.5deg}75%{rotate:z -1.25deg}100%{rotate:z 0deg}}@keyframes shake{0%{rotate:z 5deg}50%{rotate:z -5deg}100%{rotate:z 5deg}}@keyframes fade-in{from{opacity:0}to{opacity:1}}@keyframes send{20%{transform:rotateZ(5deg) translate(2px, -4px);opacity:0}80%{transform:translateY(4px);opacity:0}}@keyframes eye-blink{50%{transform:scaleY(0.25)}}@keyframes project-repository-icon-hide{50%{opacity:0}100%{opacity:0;width:0px}}@keyframes project-repository-lt-gt-show{0%{opacity:0;width:0}50%{opacity:0;width:16px}100%{opacity:1;width:16px}}img{border-radius:var(--raiar-border-radius);filter:drop-shadow(var(--raiar-shadow));width:48px}.project{flex-grow:1;transition:var(--raiar-transition) 200ms;transition-property:transform,filter;width:min(512px,100%)}.project:is(#projects:has(.project:hover) .project){transform:scale(98%)}.project:is(#projects:has(.project:hover) .project):hover{transition-delay:unset;filter:unset;transform:scale(102.5%) !important}.project-tags{display:flex;flex-wrap:wrap;gap:var(--raiar-gap);opacity:.5}.project-button-details:is(.project:hover .project-button-details){animation:500ms ease wiggle}.project-button-details:hover span::after{rotate:z 45deg}.project-button-details span{position:relative}.project-button-details span::after{content:"add";inset:0;position:absolute;transition:rotate 250ms ease-in-out}.project-button-view:hover>span{animation:350ms ease 150ms eye-blink}.project-button-repository-icon{width:24px}.project-button-repository:hover{gap:0;transition:gap 500ms}.project-button-repository:hover .project-button-repository-icon{animation:1s ease project-repository-icon-hide forwards}.project-button-repository:hover .project-button-repository-text::before{content:"<"}.project-button-repository:hover .project-button-repository-text::after{content:">"}.project-button-repository:hover .project-button-repository-text::before,.project-button-repository:hover .project-button-repository-text::after{animation:1s ease project-repository-lt-gt-show forwards;display:inline-block;text-align:center}#projects{transform-origin:top}#projects-title-bar{align-items:baseline;position:relative}#projects-title-bar::after{bottom:-100vh;content:"";height:100vh;position:absolute;width:1px}#projects-title-bar:has([open]){align-items:center;animation:500ms ease-in fade-in;display:flex;flex-direction:column;width:100%}#projects-title-bar:not(:has([open]))>*{animation:500ms ease-in fade-in}#projects-title-bar #filters-accordion{border:none;box-shadow:var(--raiar-shadow)}#projects-title-bar #tags{max-width:768px}#whoami{max-width:768px}#whatsapp:is(:hover>#whatsapp){animation:100ms linear shake infinite;scale:1.1;transition:scale var(--raiar-transition)}#email:is(:hover>#email){animation:1000ms ease-in send}',""]);const n=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",a=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),a&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),a&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var n=0;n<this.length;n++){var c=this[n][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&s[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function o(e){for(var o=-1,a=0;a<t.length;a++)if(t[a].identifier===e){o=a;break}return o}function a(e,a){for(var r={},s=[],n=0;n<e.length;n++){var c=e[n],l=a.base?c[0]+a.base:c[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var u=o(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=i(m,a);a.byIndex=n,t.splice(n,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function i(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,i){var r=a(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var n=o(r[s]);t[n].references--}for(var c=a(e,i),l=0;l<r.length;l++){var d=o(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},569:e=>{var t={};e.exports=function(e,o){var a=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var a="";o.supports&&(a+="@supports (".concat(o.supports,") {")),o.media&&(a+="@media ".concat(o.media," {"));var i=void 0!==o.layer;i&&(a+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),a+=o.css,i&&(a+="}"),o.media&&(a+="}"),o.supports&&(a+="}");var r=o.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nc=void 0,(()=>{var e=o(379),t=o.n(e),a=o(795),i=o.n(a),r=o(569),s=o.n(r),n=o(565),c=o.n(n),l=o(216),d=o.n(l),p=o(589),u=o.n(p),m=o(726),h={};function f(e,t){if(e instanceof t)return e;throw TypeError("trySpecify failed, from is not an instance of To")}function g(e){if(null==e)throw TypeError("throwIfNull received null value");return e}function v(e,...t){const o=t.map(String);return o.push(""),e.map(((e,t)=>e+o[t])).reduce(((e,t)=>e+t))}h.styleTagTransform=u(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const b=[{name:"Blink: Ultimate Teleportation",description:"Utilizado por mais de 32 mil usuários diferentes, Blink é um mod feito em Lua para o jogo Teardown.",details:v`
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
    `,tags:["GitHub","Lua","Mod","Python"],url:"https://steamcommunity.com/sharedfiles/filedetails/?id=2875792342",repository:"https://github.com/luizffgv/blink-mod-teardown","image-override":"Blink Ultimate Teleportation"},{name:"codinStruct",description:"Uma organização feita como projeto de faculdade, visando ajudar estudantes a aprender C, JavaScript e Python.  Trabalhei principalmente na organização, no Sass e no conteúdo de C.",details:v`
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
    `,tags:["Bash","Docker","Express.js","GitHub","GitHub Actions","HTML","JavaScript","Markdown","mdBook","Node.js","Organização","Python","Sass","Site","TypeScript","Webpack"],url:"https://github.com/codinStruct"},{name:"ExpTL",description:"Biblioteca de C++ de uso geral, pretendendo complementar a biblioteca padrão.",tags:["Biblioteca","C++","C++20","Doxygen","GitHub","GitHub Actions"],license:"MIT License",url:"https://exptl.luizf.dev/modules.html",repository:"https://github.com/luizffgv/exptl"},{name:"Figment",description:"Uma classe em C++ que permite controle preciso da vida útil de objetos de qualquer tipo. Semelhante a std::optional, mas não contém informações sobre o objeto contido.",tags:["Biblioteca","C++","C++17","C++20","Doxygen","GitHub Actions","GitHub"],license:"Unlicense",url:"https://figment.luizf.dev",repository:"https://github.com/luizffgv/Figment"},{name:"Globe",description:"Um site com um globo giratório formado por pontos, te permitindo usar suas próprias imagens como texturas.",tags:["GitHub Actions","GitHub","HTML","JavaScript","Node.js","Sass","Site","Three.js","TypeScript","Webpack"],details:v` <p>
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
      </p>`,license:"MIT License",url:"https://globe.luizf.dev",repository:"https://github.com/luizffgv/globe"},{name:"HTilesML",description:"Jogo experimental utilizando elementos HTML e transformações CSS 3D.",details:v`
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
    `,tags:["GitHub","HTML","JavaScript","Site"],license:"MIT License",url:"https://htilesml.luizf.dev",repository:"https://github.com/luizffgv/htilesml"},{name:"livro-c",description:"Livro virtual gratuito que pretende trazer uma fonte moderna, confiável e completa para o aprendizado de C.",tags:["C","GitHub","Livro","mdBook"],license:"CC BY-SA 4.0",url:"https://luizffgv.github.io/livro-c/",repository:"https://github.com/luizffgv/livro-c"},{name:"Modern C Sorting Algorithms",description:"Coleção de algoritmos de ordenação genéricos utilizando o padrão C18 extensivamente, feita para facilitar meus trabalhos de C na faculdade.",details:v`
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
    `,tags:["Biblioteca","C","C18","GitHub"],license:"GNU General Public License v3.0",repository:"https://github.com/luizffgv/modern-c-sorting-algorithms"},{name:"Raiar",description:"Um framework web front-end fornecendo web components JS e estilos Sass configuráveis, que por sinal é utilizado nesse site.",details:v`
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
    `,tags:["GitHub","HTML","Framework","JavaScript","Sass"],license:"MIT License",repository:"https://github.com/luizffgv/raiar"},{name:"SoR-pt-BR",description:"Tradução não oficial para o jogo Streets of Rogue, com melhorias—algumas subjetivas—em relação à versão oficial.",tags:["GitHub","Python"],license:"Unlicense",repository:"https://github.com/luizffgv/SoR-pt-BR"},{name:"Spirit Box",description:"Bot para Discord que gera um diário de anotações do jogo Phasmophobia, para auxiliar na identificação de fantasmas e no compartilhamento de pistas com sua equipe.",details:v`
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
    `,tags:["Discord App","GitHub","JavaScript","Node.js","TypeScript"],license:"MIT License",repository:"https://github.com/luizffgv/spirit-box"},{name:"TS Conversions",description:"Biblioteca e pacote NPM fornecendo utilitários para realizar conversões seguras ou inseguras e diminuir código boilerplate no TypeScript. Também é utilizada nesse site.",tags:["Biblioteca","GitHub Actions","GitHub","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://www.npmjs.com/package/@luizffgv/ts-conversions",repository:"https://github.com/luizffgv/ts-conversions"}];function y(e){let t=Number.parseFloat(e);return e.includes("m")||(t*=1e3),t}function w(e,...t){const o=t.map(String);return o.push(""),e.map(((e,t)=>e+o[t])).reduce(((e,t)=>e+t))}function j(e,...t){return w(e,...t)}class x extends(function(e){return class t extends HTMLElement{static#e;static{this.#e=new CSSStyleSheet,this.#e.replaceSync(e.styles??"")}static#t=e.template??"";shadowRoot;constructor(){super(),this.shadowRoot=this.attachShadow({mode:"open",slotAssignment:e.imperativeSlotting?"manual":"named"}),this.shadowRoot.innerHTML=t.#t,this.shadowRoot.adoptedStyleSheets.push(t.#e)}}}({template:w`
    <div id="container">
      <div id="card" role="dialog" aria-modal="true">
        <slot id="slot"></slot>
        <div id="button-close"></div>
      </div>
    </div>
  `,styles:j`
    #container {
      align-items: center;
      backdrop-filter: blur(35px);
      background-color: #0009;
      box-sizing: border-box;
      display: flex;
      height: 100vh;
      justify-content: center;
      left: 0;
      padding: 16px;
      position: fixed;
      top: 0;
      width: 100vw;
    }

    #card {
      align-items: start;
      background-color: var(--raiar-color-bg-close);
      border-radius: var(--raiar-border-radius);
      box-shadow: var(--raiar-shadow);
      box-sizing: border-box;
      display: flex;
      max-height: 100%;
      overflow-y: auto;
      padding: var(--raiar-card-padding);
    }

    #slot {
      display: flex;
      flex-direction: column;
      gap: var(--raiar-gap);
    }

    #button-close {
      -webkit-mask-image: var(--raiar-svg-close);
      -webkit-mask-size: cover;
      aspect-ratio: 1/1;
      background-color: var(--raiar-color-fg);
      content: "";
      cursor: pointer;
      flex-shrink: 0;
      mask-image: var(--raiar-svg-close);
      mask-size: cover;
      transition: background-color var(--raiar-transition);
      width: var(--raiar-close-button-size);

      &:hover {
        background-color: var(--raiar-color-danger);
      }
    }
  `})){#o;get#a(){return this.shadowRoot.getElementById("button-close")}get#i(){return this.shadowRoot.getElementById("container")}set userDismissible(e){this.#a.style.display=e?"block":"none"}get userDismissible(){return"none"!=this.#a.style.display}constructor(){super(),this.#a.addEventListener("click",(()=>{this.dismiss()}));const e=getComputedStyle(document.body);this.#o=new Animation(new KeyframeEffect(this.#i,[{opacity:"0"},{opacity:"1"}],{duration:y(e.getPropertyValue("--raiar-transition-duration")),easing:e.getPropertyValue("--raiar-transition-easing")}))}connectedCallback(){this.#o.play()}dismiss(){this.#o.reverse(),this.#o.addEventListener("finish",(()=>{this.remove()}))}}customElements.define("raiar-modal",x);var S,z,T,C,k=function(e,t,o,a){if("a"===o&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===o?a:"a"===o?a.call(e):a?a.value:t.get(e)},L=function(e,t,o,a,i){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?i.call(e,o):i?i.value=o:t.set(e,o),o};if("loading"==document.readyState)throw new Error("This module requires the document to be loaded.");class M{constructor(e){S.set(this,null),this.name=e.name,this.description=e.description,null!=e.details&&(this.details=e.details),this.tags=e.tags??[],null!=e.license&&(this.license=e.license),null!=e.url&&(this.url=e.url),null!=e.repository&&(this.repository=e.repository),this.wip=e.wip??!1,null!=e["image-override"]&&(this.imageOverride=e["image-override"])}get element(){if(!k(this,S,"f")){let e="";null!=this.url&&(e+=v`<a class="project-button-view button" href=${this.url}>
          <span class="material-symbols-outlined">visibility</span> Visualizar
        </a>`),null!=this.repository&&(e+=v`<a
          class="project-button-repository button"
          href=${this.repository}
        >
          <span class="project-button-repository-icon material-symbols-outlined"
            >code</span
          >
          <span class="project-button-repository-text">Repositório</span>
        </a>`);const t=this.license?v`<small class="project-license">${this.license}</small>`:"";if(L(this,S,document.createElement("li"),"f"),k(this,S,"f").classList.add("project","align-center","raiar-card","raiar-vertical","raiar-gap","justify-between"),this.wip&&k(this,S,"f").classList.add("wip"),k(this,S,"f").innerHTML=v`
        <!-- Here we use a min-height equal to the image height so project
             titles stay at the same height whether or not an image is present
         -->
        <div
          class="raiar-horizontal raiar-gap raiar-wrap align-center justify-center"
          style="min-height: 48px"
        >
          <img
            src="assets/project-images/${this.imageOverride??this.name}.webp"
            onerror="this.style.display = 'none'"
          />
          <div class="raiar-horizontal raiar-gap raiar-wrap align-baseline">
            <h3>${this.name} ${this.wip?"(em progresso)":""}</h3>
            ${t}
          </div>
        </div>
        <p>${this.description}</p>
        <div class="project-buttons raiar-horizontal raiar-gap raiar-wrap">
          ${e}
        </div>
      `,null!=this.details){const e=k(this,S,"f").querySelector(".project-buttons"),t=document.createElement("button");t.classList.add("project-button-details"),t.innerHTML=v`<span class="material-symbols-outlined"
            >add</span
          >
          Detalhes`,t.addEventListener("click",(()=>{const e=new x;e.userDismissible=!0,e.innerHTML=this.details;const t=document.createElement("h2");t.textContent=this.name,e.insertBefore(t,e.firstChild);const o=document.createElement("div");o.classList.add("project-tags"),o.append(...this.tags.map((e=>{const t=document.createElement("span");return t.innerText=`#${e}`,t}))),e.insertBefore(o,t),document.body.appendChild(e)})),e.insertBefore(t,e.firstChild)}}return k(this,S,"f")}}S=new WeakMap;class E{constructor(e){this.projects=e}elements(){return this.projects.map((e=>e.element))}}const H=["best-match","every"];class q{constructor(e){z.set(this,void 0),T.set(this,new Set),C.set(this,"best-match"),L(this,z,e,"f")}withTags(...e){for(const t of e)k(this,T,"f").add(t);return this}withLogic(e){return L(this,C,e,"f"),this}get(){const e=e=>e.tags.filter((e=>k(this,T,"f").has(e))).length;let t=[...k(this,z,"f")].sort(((t,o)=>e(o)-e(t)));return I.size>0&&(t=t.filter(e)),"every"==k(this,C,"f")&&(t=t.filter((e=>{for(const t of k(this,T,"f"))if(!e.tags.includes(t))return!1;return!0}))),new E(t)}}function B(e){const t=document.createElement("input");t.type="checkbox",t.addEventListener("change",(()=>{t.checked?I.add(e):I.delete(e),A()}));const o=document.createElement("label");return o.appendChild(t),o.appendChild(document.createTextNode(e)),o}function A(){const e=new Animation(new KeyframeEffect(G.projects,[{opacity:1},{opacity:0,scale:.95}],{duration:125,easing:"ease",fill:"forwards"})),t=()=>{const o=f(G.filterModes.querySelector(":checked"),HTMLInputElement).value;if(!H.includes(o))throw new Error("Invalid filtering logic received.");const a=new q(P).withTags(...I).withLogic(o).get();0==a.projects.length?G.projects.textContent="Que pena, nenhum projeto se encaixa em todas essas categorias.":G.projects.replaceChildren(...a.elements()),e.removeEventListener("finish",t),e.reverse()};e.addEventListener("finish",t),e.play()}z=new WeakMap,T=new WeakMap,C=new WeakMap;const G={projects:g(document.getElementById("projects")),tags:g(document.getElementById("tags")),filterModes:g(document.getElementById("project-filter-modes"))},P=b.map((e=>new M(e))),D=new Set(P.flatMap((e=>e.tags)).sort((function(e,t){return e.toLocaleLowerCase().localeCompare(t.toLocaleLowerCase())}))),I=new Set;for(const e of G.filterModes.querySelectorAll("input"))e.addEventListener("change",(e=>{f(e.target,HTMLInputElement).matches(":checked")&&A()}));for(const e of D)G.tags.appendChild(B(e));A()})()})();
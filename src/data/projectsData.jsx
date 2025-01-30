import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Gerador de Conselhos",
    description: (
      <>
        <p>
          Por mais que seja um projeto relativamente simples, resolvi fazer minha própria versão com o intuito de
          aprimorar minhas habilidades com APIs. Durante os testes, tive a ideia de adicionar novas funcionalidades,
          como uma função de traduzir os conselhos gerados para o português e uma interface que parecesse minimamente
          agradável considerando o uso de dois idiomas.
        </p>
        <p>
          De modo geral, integrei duas APIs. A principal,{" "}
          <a href="https://api.adviceslip.com/" target="_blank" rel="noopener noreferrer">
            Adviceslip
          </a>
          , que gera conselhos com o inglês como idioma padrão. E uma segunda,{" "}
          <a href="https://mymemory.translated.net/" target="_blank" rel="noopener noreferrer">
            Mymemory
          </a>
          , que usei para traduzir os conselhos gerados para o português, servindo como uma segunda opçao de idioma.
          Para aumentar a interatividade, traduzi os textos da interface diretamente com JavaScript.
        </p>
      </>
    ),
    date: "11 de Novembro, 2023",
    image: "/images/advice.png",
    videoSrc: "/videos/advice_api.mp4",
    videoFit: "cover",
    techIcons: [<FaHtml5 key="html5" />, <FaCss3Alt key="css3" />, <FaJsSquare key="JavaScript" />],
    githubLink: "https://github.com/rick-oss",
  },
  {
    id: 2,
    title: "Pikachu Jump",
    description: (
      <>
        <p>
          Este projeto é baseado no clássico joguinho “dinossauro offline” do google. Implementei toda a lógica usando
          JavaScript, enquanto usei CSS para manipular todos os elementos(gifs e imagens). Utilizei JavaScript para
          controlar o estado do jogo, como colisões, interatividade e a pontuação.
        </p>
        <p>
          Eu desenvolvi muito minhas habilidades nesse projeto, como a criação de animações CSS e o desafio de manipular
          as posições e dimensões de múltiplos elementos sem depender de técnicas como flexbox.
        </p>
      </>
    ),
    date: "12 de Fevereiro, 2024",
    image: "/images/pikachu.png",
    videoSrc: "/videos/pikachu_jump.mp4",
    videoFit: "contain",
    techIcons: [<FaHtml5 key="html5" />, <FaCss3Alt key="css3" />, <FaJsSquare key="javascript" />],
    githubLink: "https://github.com/rick-oss",
  },
  {
    id: 3,
    title: "Lanterna",
    description: (
      <>
        <p>
          Este projeto simula o comportamento de uma lanterna usando uma máscara de recorte dinâmica. A máscara é
          controlada pelas coordenadas do cursor do mouse em relação à página, criando o efeito visual de uma luz
          direcionada.
        </p>
        <p>
          Foi interessante explorar conceitos como manipulação de eventos do mouse e utilização de máscaras CSS para
          criar interatividade. Apesar de ser um projeto simples, ele reforçou meu entendimento sobre como integrar
          lógica JavaScript com estilizações para criar efeitos visuais.
        </p>
      </>
    ),
    date: "4 de Fevereiro, 2024",
    image: "/images/lantern.png",
    videoSrc: "/videos/lantern.mp4",
    videoFit: "cover",
    techIcons: [<FaHtml5 key="html5" />, <FaCss3Alt key="css3" />, <FaJsSquare key="javascript" />],
    githubLink: "https://github.com/rick-oss",
  },
  {
    id: 4,
    title: "Gerenciador de Projetos",
    description: (
      <>
        <p>
          Desenvolvi esse projeto como conclusão do curso de React.js do canal Hora de Codar. Ele simula um gerenciador
          de projetos completo, permitindo operações CRUD (criação, leitura, atualização e exclusão) com dados
          armazenados em um arquivo JSON, que age como um banco de dados local.
        </p>
        <p>
          O desenvolvimento deste projeto reforçou vários conceitos essenciais do React.js que aprendi durante o curso,
          como o uso de hooks (useState, useEffect, etc.), componentização, renderização condicional, passagem e
          manipulação de props, além de boas práticas no gerenciamento de estados e estruturação de aplicações.
        </p>
      </>
    ),
    date: "7 de Novembro, 2024",
    image: "/images/costs.png",
    videoSrc: "/videos/costs.mp4",
    videoFit: "contain",
    techIcons: [
      <FaHtml5 key="html5" />,
      <FaCss3Alt key="css3" />,
      <FaJsSquare key="javascript" />,
      <FaReact key="React.js" />,
    ],
    githubLink: "https://github.com/rick-oss",
  },
];

export default projectsData;

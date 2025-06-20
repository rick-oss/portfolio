import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaReact } from "react-icons/fa";

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
    githubLink: "https://github.com/rick-oss/advice_api",
    deployLink: "https://advice-api-ashy.vercel.app",
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
    githubLink: "https://github.com/rick-oss/pikachu_jump",
    deployLink: "https://pikachu-jump.vercel.app",
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
    githubLink: "https://github.com/rick-oss/lanterna",
    deployLink: "https://lanterna.vercel.app",
  },
  {
    id: 4,
    title: "Formulario login/registro",
    description: (
      <>
        <p>
          Esse foi meu primeiro projeto front-end, onde me propus a replicar uma interface já existente para testar meus
          conhecimentos iniciais. Para os testes, integrei um banco de dados local em MySQL, armazenando e-mails e
          senhas criptografadas com Bcrypt.
        </p>
        <p>
          Além de ter sido minha introdução ao HTML e CSS, esse projeto foi fundamental para eu aprender o básico dessas
          tecnologias e entender melhor o caminho que queria seguir no desenvolvimento. Foi meu divisor de águas na
          programação.
        </p>
      </>
    ),
    date: "22 de Outubro, 2023",
    image: "/images/formulario.png",
    videoSrc: "/videos/formulario.mp4",
    videoFit: "cover",
    techIcons: [<FaHtml5 key="html5" />, <FaCss3Alt key="css3" />, <FaPython key="python" />],
    githubLink: "https://github.com/rick-oss/formulario",
    deployLink: "https://formulario-alpha-six.vercel.app",
  },
];

export default projectsData;

import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Gerador de Conselhos",
    description: (
      <p>
        O projeto de modo geral tem duas APIs integradas. A principal e já citada{" "}
        <a href="https://api.adviceslip.com/" target="_blank" rel="noopener noreferrer">
          Adviceslip
        </a>
        , que gera conselhos com o inglês como idioma padrão. A segunda API é a{" "}
        <a href="https://mymemory.translated.net/" target="_blank" rel="noopener noreferrer">
          Mymemory
        </a>
        . API de traduçao de textos que foi usada para traduzir os conselhos gerados para o português, que serve como
        uma segunda opçao de idioma. As requisiçoes iniciais as APIS foram feitas com python. Enquanto as transiçoes
        entre o conteúdo das duas foram feitos com javascript.
      </p>
    ),
    date: "11 de Novembro, 2023",
    image: "/public/images/conselho.png",
    techIcons: [<FaHtml5 key="html5" />, <FaCss3Alt key="css3" />, <FaJsSquare key="JavaScript" />],
    githubLink: "https://github.com/rick-oss",
  },
  {
    id: 2,
    title: "Vasco da Gama",
    description: (
      <p>
        O projeto de modo geral tem duas APIs integradas. A principal e já citada{" "}
        <a href="https://api.adviceslip.com/" target="_blank" rel="noopener noreferrer">
          Adviceslip
        </a>
        , que gera conselhos com o inglês como idioma padrão. A segunda API é a{" "}
        <a href="https://mymemory.translated.net/" target="_blank" rel="noopener noreferrer">
          Mymemory
        </a>
        . API de traduçao de textos que foi usada para traduzir os conselhos gerados para o português, que serve como
        uma segunda opçao de idioma. As requisiçoes iniciais as APIS foram feitas com python. Enquanto as transiçoes
        entre o conteúdo das duas foram feitos com javascript.
      </p>
    ),
    date: "16 de Novembro, 2023",
    image: "/public/images/conselho.png",
    techIcons: [<FaHtml5 key="html5" />, <FaCss3Alt key="css3" />],
    githubLink: "https://github.com/rick-oss",
  },
];

export default projectsData;

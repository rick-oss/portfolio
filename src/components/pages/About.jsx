import { Element } from "react-scroll";

import Container from "../layout/Container";
import Title from "../layout/Title";

import styles from "./About.module.css";

function About() {
  return (
    <Element name="about">
      <Container>
        <div className={styles.about_content}>
          <Title blueText="Sobre" whiteText="Mim" />
          <div className={styles.text}>
            <p>
              Olá, tenho 20 anos e sou um desenvolvedor web, sempre em busca de inovação e aprendizado. Atualmente faço
              projetos com <span>HTML</span>, <span>CSS</span> e <span>Javascript</span>. Adoro desenhar e aprender
              coisas novas no meu tempo livre, além de apaixonado por tecnologia, historias e jogos. Entrei em contato
              com esse mundo aos 16 anos, com a linguagem <span>Python</span>, onde desenvolvi todas as minhas bases de
              conhecimentos, conceitos e lógica. Desenvolvi alguns pequenos projetos utilizando <span>Flask</span>, e
              nesses projetos criei uma enorme curiosidade com toda a parte do front-end. Desde então, sigo aprendendo e
              aprimorando ainda mais as minhas habilidades nessas tecnologias. Além de seguir estudando e buscando
              aprender mais as tecnologias já citadas, atualmente estou estudando <span>Node.js</span> e a biblioteca{" "}
              <span>React.js</span>. Ademais, estou sempre em busca de novos desafios e oportunidades para aprimorar
              minhas habilidades, por isso, fique à vontade para explorar meus projetos e entrar em contato comigo.
            </p>
          </div>
        </div>
      </Container>
    </Element>
  );
}

export default About;

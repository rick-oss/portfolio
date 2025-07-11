// ─────────────────────────────────────────────────────────────
// Home.jsx
// Seção "Início" do portfólio SPA
//  1. Exibe apresentação pessoal e links sociais
//  2. Contém animação de digitação para destacar a área de atuação
//  3. Renderizada dentro de <ScrollSection name="home" />
// ─────────────────────────────────────────────────────────────

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import ScrollSection from "../layout/ScrollSection";

import styles from "./Home.module.css";
import eu from "../../assets/eu.png";

function Home() {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings: ["Desenvolver Web Frontend"],
      typeSpeed: 120,
      backSpeed: 100,
      backDelay: 1000,
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <ScrollSection name="home" customClass="justify_between">
      <div className={styles.home_content}>
        <p>Olá, Eu sou</p>
        <h1>Erick Nunes</h1>
        <p className={styles.typed_text}>
          E sou <span ref={typedElement}></span>
        </p>
        <nav className={styles.links} aria-label="Links sociais">
          <a
            href="https://github.com/rick-oss"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver perfil no GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nunes-erick/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver perfil no LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:erick.nunes.dev@gmail.com" aria-label="Enviar e-mail" title="Abrirá seu app de e-mail padrão">
            <FaEnvelope />
          </a>
        </nav>
        <a
          href="https://drive.google.com/uc?export=download&id=1IpZeMDyAL4VhxeRodTX6rlahsvd0UrqJ"
          download
          className={styles.btn}
          aria-label="Baixar currículo em PDF"
        >
          Download CV
        </a>
      </div>

      <figure className={styles.image}>
        <img src={eu} alt="Imagem de Erick Nunes" />
      </figure>
    </ScrollSection>
  );
}

export default Home;

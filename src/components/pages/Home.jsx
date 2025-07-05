import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import Typed from "typed.js";

import Container from "../layout/Container";

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
    <Element name="home">
      <Container customClass="justify_between">
        <div className={styles.home_content}>
          <h3>Olá, Eu sou</h3>
          <h1>Erick Nunes</h1>
          <h3 className={styles.typed_text}>
            E sou <span ref={typedElement}></span>
          </h3>
          <div className={styles.links}>
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
          </div>
          <a
            href="https://drive.google.com/uc?export=download&id=1IpZeMDyAL4VhxeRodTX6rlahsvd0UrqJ"
            download
            className={styles.btn}
          >
            Download CV
          </a>
        </div>

        <img src={eu} alt="Eu menó" className={styles.image} />
      </Container>
    </Element>
  );
}

export default Home;

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import Typed from "typed.js";

import Container from "../layout/Container";

import styles from "./Home.module.css";
import eu from "../../assets/eu.jpg";

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
            <a href="https://github.com/rick-oss" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a href="http://www.linkedin.com/in/erick-nunes-3a1274287" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <a
            href="https://drive.google.com/uc?export=download&id=1IM_M_HpweO0n8HHJNzlb9O9z7NElBlIR"
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

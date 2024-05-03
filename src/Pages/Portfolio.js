import { useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import AboutContainer from "../components/AboutContainer";
import Contact from "../components/Contact";
import styles from "../style/Portfolio.module.css";
//import port1 from "../Assets/ellipse-240@2x.png"
import port2 from "../Assets/img-port.jpeg"


const Protfolio = () => {
  const onFrameButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameButton1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

 

  return (
    <div className={styles.protfolio}>
      <div className={styles.lalethTR}>LALETH T R</div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.imLalethTRImAFullStacParent}>
            <div className={styles.imLalethTContainer}>
              <p className={styles.imLalethT}>I’m Laleth T R</p>
              <p className={styles.imLalethT}>
                I’m a Full-Stack Web Developer.
              </p>
            </div>
            <div className={styles.myPassionLies}>
              My passion lies in talent development and employee engagement.
            </div>
          </div>
          <div className={styles.frameContainer}>
            <button
              className={styles.myPortfolioWrapper}
              onClick={onFrameButtonClick}
            >
              <div className={styles.myPortfolio}>My Portfolio</div>
            </button>
            <button
              className={styles.contactMeWrapper}
              onClick={onFrameButton1Click}
            >
              <div className={styles.contactMe}>Contact Me</div>
            </button>
          </div>
        </div>
        <img className={styles.frameChild} alt="" src={port2} />
      </div>
      <FrameComponent1 />
      <AboutContainer />
      <Contact />
      
    </div>
  );
};

export default Protfolio;

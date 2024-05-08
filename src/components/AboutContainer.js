import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Default from "./Property1Default";
import Property1Default1 from "./Property1Default1";
import Property1Default2 from "./Property2Default2";
import Property1Default3 from "./Property3Default3";
import styles from "../style/AboutContainer.module.css";

const AboutContainer = () => {
  const navigate = useNavigate();

  const onPortfolioClick = useCallback(() => {
    window.open("/about");
  }, []);

  const onAboutClick = useCallback(() => {
    navigate("/experience");
  }, [navigate]);

  const onContactClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onResumeClick = useCallback(() => {
    const resumePath = process.env.PUBLIC_URL + 'Resume/LalethTR_Resume.pdf';
    // const link = document.createElement('a');
    // link.href = resumePath;
    // link.download = 'LALETH Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    window.open(resumePath, '_blank');
  }, []);
  
  


  return (
    <div className={styles.portfolioParent}>
      <Property1Default
        property1DefaultWidth="85px"
        property1DefaultHeight="35px"
        property1DefaultBorder="none"
        property1DefaultPadding="0"
        property1DefaultBackgroundColor="transparent"
        property1DefaultPosition="relative"
        onPortfolioClick={onPortfolioClick}
      />
      <Property1Default1
        property1DefaultWidth="129px"
        property1DefaultHeight="35px"
        property1DefaultBorder="none"
        property1DefaultPadding="0"
        property1DefaultBackgroundColor="transparent"
        property1DefaultPosition="relative"
        onAboutClick={onAboutClick}
      />
      <Property1Default2
        property1DefaultWidth="96px"
        property1DefaultBorder="none"
        property1DefaultPadding="0"
        property1DefaultBackgroundColor="transparent"
        property1DefaultPosition="relative"
        onContactClick={onContactClick}
      />
     <Property1Default3
        property1DefaultBorder="none"
        property1DefaultPadding="0"
        property1DefaultBackgroundColor="transparent"
        property1DefaultPosition="relative"
        onResumeClick={onResumeClick}
      />
    </div>
  );
};

export default AboutContainer;

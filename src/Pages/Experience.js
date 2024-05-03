import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import styles from "../style/Experience.module.css";
import pic1 from "../Assets/C programming.png"
import pic2 from "../Assets/javascript-logo-js--png-logo-vector-brand-downloads-svg-eps-1@2x.png"
import pic3 from "../Assets/the-must-read-html-vs-css-infographic---coding-dojo-blog-1@2x.png"
import pic4 from "../Assets/download-1@2x.png"
import pic5 from "../Assets/mixins-considered-harmful--react-blog-1@2x.png";
import pic6 from "../Assets/node-js-logo-png-vector-svg-free-download-1@2x.png"
import pic7 from "../Assets/newsql--the-bridge-between-sql-and-nosql-1@2x.png"
import pic8 from "../Assets/periodic-table-of-devsecops-tools---digital-ai-1@2x.png"
import pic9 from "../Assets/image-34@2x.png"
import pic10 from "../Assets/image-32@2x.png"
import pic11 from "../Assets/image-31@2x.png"
import pic12 from "../Assets/image-29@2x.png"
import pic13 from "../Assets/gitlab---logo-proposal-1@2x.png"
import pic14 from "../Assets/github-logo-free-icons-designed-by-dave-gandy-1@2x.png"
import pic15 from "../Assets/i-created-postwoman---an-online-open-source-api-request-builder---hackernoon-1@2x.png"
import pic16 from "../Assets/image-33@2x.png"
import pic17 from "../Assets/frame-880.svg"

const Experience = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.experience}>
      <div className={styles.aboutParent}>
        <div className={styles.about}>
          <div className={styles.skills}>Experience</div>
        </div>
        <FrameComponent />
        <div className={styles.frameParent}>
          <div className={styles.skillsParent}>
            <div className={styles.skills}>Skills</div>
            <img className={styles.frameChild} alt="" src="/vector-14.svg" />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.languagesWrapper}>
                <div className={styles.languages}>
                  <ul className={styles.languages1}>
                    <li>Languages:</li>
                  </ul>
                </div>
              </div>
              <div className={styles.languages}>
                <ul className={styles.languages1}>
                  <li>Web Technologies:</li>
                </ul>
              </div>
              <div className={styles.languages}>
                <ul className={styles.languages1}>
                  <li>Database:</li>
                </ul>
              </div>
              <div className={styles.languages}>
                <ul className={styles.languages1}>
                  <li>IBM Mainframes:</li>
                </ul>
              </div>
              <div className={styles.languages}>
                <ul className={styles.languages1}>
                  <li>SCM Tools:</li>
                </ul>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper}>
                <div className={styles.theCProgrammingLanguageCParent}>
                  <img
                    className={styles.theCProgrammingLanguageC}
                    alt=""
                    src={pic1}
                  />
                  <img
                    className={styles.javascriptLogoJsPngLog}
                    alt=""
                    src={pic2}
                  />
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.theCProgrammingLanguageCParent}>
                  <img
                    className={styles.theMustReadHtmlVsCssInfo}
                    alt=""
                    src={pic3}
                  />
                  <img
                    className={styles.download1Icon}
                    alt=""
                    src={pic4}
                  />
                  <img
                    className={styles.mixinsConsideredHarmfulRe}
                    alt=""
                    src={pic5}
                  />
                  <img
                    className={styles.nodeJsLogoPngVectorSvg}
                    alt=""
                    src={pic6}
                  />
                </div>
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.newsqlTheBridgeBetweenSqlParent}>
                  <img
                    className={styles.newsqlTheBridgeBetweenSql}
                    alt=""
                    src={pic7}
                  />
                  <img
                    className={styles.periodicTableOfDevsecopsTo}
                    alt=""
                    src={pic8}
                  />
                  <img
                    className={styles.image34Icon}
                    alt=""
                    src={pic9}
                  />
                </div>
              </div>
              <div className={styles.frameWrapper3}>
                <div className={styles.theCProgrammingLanguageCParent}>
                  <img
                    className={styles.image32Icon}
                    alt=""
                    src={pic10}
                  />
                  <img
                    className={styles.image31Icon}
                    alt=""
                    src={pic11}
                  />
                  <img
                    className={styles.image31Icon}
                    alt=""
                    src={pic12}
                  />
                </div>
              </div>
              <div className={styles.about}>
                <div className={styles.theCProgrammingLanguageCParent}>
                  <img
                    className={styles.gitlabLogoProposal1}
                    alt=""
                    src={pic13}
                  />
                  <img
                    className={styles.githubLogoFreeIconsDesigne}
                    alt=""
                    src={pic14}
                  />
                  <img
                    className={styles.githubLogoFreeIconsDesigne}
                    alt=""
                    src={pic15}
                  />
                  <img
                    className={styles.image33Icon}
                    alt=""
                    src={pic16}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.experienceInner} onClick={onFrameContainer1Click}>
        <img
          className={styles.frameItem}
          alt=""
          src={pic17}
          onClick={onFrameIconClick}
        />
      </div>
    </div>
  );
};

export default Experience;

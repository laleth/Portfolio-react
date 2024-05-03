import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/About.module.css";
import Abtpic1 from "../Assets/frame-880.svg"
import Abtpic2 from "../Assets/vector-14.svg"

const About = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.about}>
      <div className={styles.frameParent}>
        <div className={styles.groupWrapper}>
          <img
            className={styles.frameChild}
            alt=""
            src={Abtpic1 }
            onClick={onGroupIconClick}
          />
        </div>
        <div className={styles.aboutParent}>
          <div className={styles.about1}>
            <div className={styles.lalethTR}>{`About `}</div>
          </div>
          <div className={styles.aboutParent}>
            <div className={styles.aboutParent}>
              <div className={styles.lalethTR}>LALETH T R</div>
              <img className={styles.frameItem} alt="" src={Abtpic2} />
            </div>
            {/* <div className={styles.trlalethgmailcom91638364Container}>
              <p className={styles.httpswwwlinkedincominla}>
                trlaleth@gmail.com | +916383649494
              </p>
              <p className={styles.httpswwwlinkedincominla}>
                https://www.linkedin.com/in/LalethTR | https://github.com/laleth
              </p>
              <p className={styles.httpswwwlinkedincominla}>
                385, Kamarajar Road, Athani (PO), Anthiyur (TK), Erode (DT),
              </p>
              <p className={styles.httpswwwlinkedincominla}>
                TamilNadu - 63850.
              </p>
            </div> */}
          </div>
          <div className={styles.aboutParent}>
            <div className={styles.aboutParent}>
              {/* <div className={styles.lalethTR}>Summary</div> */}
              <img className={styles.frameItem} alt="" src="/vector-14.svg" />
            </div>
            <div className={styles.iHaveOverContainer}>
              <span className={styles.iHaveOverContainer1}>
                <p className={styles.httpswwwlinkedincominla}>
                 I am a driven Software Development Engineer with a strong background in delivering exceptional solutions in the software engineering industry. 
                Currently, I am leveraging my expertise at HTC Global Service, where I specialize in providing support for PeopleSoft applications. 
                My enthusiasm for Full-Stack Web Development fuels my continuous growth and learning journey in the tech industry.
                </p>
                {/* <p className={styles.httpswwwlinkedincominla}>
                  to build a career in Full-Stack Web Development.
                </p> */}
              </span>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.educationParent}>
              <div className={styles.lalethTR}>Education</div>
              <img className={styles.frameItem} alt="" src={Abtpic2} />
            </div>
            <div className={styles.bachelorOfEngineeringContainer}>
              <ul className={styles.bachelorOfEngineeringElec}>
                <li className={styles.bachelorOfEngineeringElec1}>
                  <span className={styles.bachelorOfEngineering}>
                    <b className={styles.bachelorOfEngineering1}>
                      Bachelor of Engineering
                    </b>
                  </span>
                  <span>
                    <span
                      className={styles.bachelorOfEngineering}
                    >{` – `}</span>
                    <span>Electronics and Communication Engineering</span>
                  </span>
                </li>
              </ul>
              <p className={styles.httpswwwlinkedincominla}>
                <span>
                  <span>
                    {" "}
                    2019 | Karpagam College of Engineering, Coimbatore
                  </span>
                </span>
              </p>
              <p className={styles.httpswwwlinkedincominla}>
                <span>
                  <span> CGPA : 7.13%</span>
                </span>
              </p>
            </div>
            <div className={styles.hsc2015Container}>
              <ul className={styles.bachelorOfEngineeringElec}>
                <li className={styles.bachelorOfEngineeringElec1}>
                  <span>
                    <b>HSC</b>
                  </span>
                </li>
              </ul>
              <p className={styles.sarathaMatricHigherSecondar}>
                <span>
                  <span>{`     `}</span>
                  <span>
                    2015 | Saratha Matric Higher Secondary School,
                    Gobichettipalayam
                  </span>
                </span>
              </p>
              <p className={styles.httpswwwlinkedincominla}>
                <span>
                  <span> Percentage : 73.5%</span>
                </span>
              </p>
            </div>
            <div className={styles.hsc2015Container}>
              <ul className={styles.bachelorOfEngineeringElec}>
                <li className={styles.bachelorOfEngineeringElec1}>
                  <span>
                    <b>SSLC</b>
                  </span>
                </li>
              </ul>
              <p className={styles.sarathaMatricHigherSecondar}>
                <span>
                  <span>{`      `}</span>
                  <span>
                    2013 | Saratha Matric Higher Secondary School,
                    Gobichettipalayam
                  </span>
                </span>
              </p>
              <p className={styles.httpswwwlinkedincominla}>
                <span>
                  <span> Percentage : 88.2%</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;



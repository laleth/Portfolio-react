import React from "react";
import styles from "../style/Card.module.css";

const Card = ({ rectangle623, project, githubLink, liveLink }) => {
  const handleExplore = () => {
    window.open(githubLink, "_blank");
  };

  const handleGoLive = () => {
    window.open(liveLink, "_blank");
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardChild} />
      <img className={styles.cardItem} alt="" src={rectangle623} />
      <div className={styles.project2}>{project}</div>
      <div className={styles.titleOfThe}>ReactJS|NodeJS|MongoDB</div>
      <div className={styles.buttonsWrapper}>
        <button className={styles.exploreButton} onClick={handleExplore}>
          {`Explore >`}
        </button>
        {liveLink && (
          <button className={styles.goLiveButton} onClick={handleGoLive}>
            {`Go Live >`}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;

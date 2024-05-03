import styles from "../style/Card.module.css";

const Card = ({ rectangle623, project, githubLink }) => {
  const handleExplore = () => {
    window.open(githubLink, "_blank");
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardChild} />
      <img className={styles.cardItem} alt="" src={rectangle623} />
      <div className={styles.project2}>{project}</div>
      <div className={styles.titleOfThe}>ReactJS|NodeJS|MongoDB</div>
      <button className={styles.exploreWrapper} onClick={handleExplore}>
        <div className={styles.explore}>{`Explore >`}</div>
      </button>
    </div>
  );
};

export default Card;

import Card from "./Card.js";
import styles from "../style/FrameComponent1.module.css";
import img1 from "../Assets/vector-141.svg"
// import img2 from "../Assets/rectangle-6231@2x.png"
import img3 from "../Assets/dress.png"
import img4 from "../Assets/food.png"
import img5 from "../Assets/movie.png"
import img6 from "../Assets/store.png"
const FrameComponent1 = () => {
  const githubLinks = [
    "https://github.com/laleth/Daily-DresscolourSuggestion-frontend.git",
    "https://github.com/laleth/Food-order-frontend.git",
    "https://github.com/laleth/Movie-booking-frontend.git",
    "https://github.com/laleth/store-management-Frontend.git",
  ];

  return (
    <div className={styles.frameParent} data-scroll-to="frameContainer">
      <div className={styles.portfolioWrapper}>
        <div className={styles.portfolio}>Portfolio</div>
      </div>
      <img className={styles.frameChild} alt="" src={img1} />
      <div className={styles.carouselParent}>
        <div className={styles.carousel}>
          <Card
            rectangle623={img3}
            project="DressColor Suggestion App"
            githubLink={githubLinks[0]}
          />
          <Card
            rectangle623={img4}
            project="Food Order App"
            githubLink={githubLinks[1]}
          />
        </div>
        <div className={styles.carousel}>
          <Card
            rectangle623={img5}
            project="Movie ticket booking App"
            githubLink={githubLinks[2]}
          />
          <Card
            rectangle623={img6}
            project="Store management App"
            githubLink={githubLinks[3]}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;

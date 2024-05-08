import { useMemo } from "react";
import styles from "../style/Property3Default3.module.css";

const Property1Default3 = ({
  property1DefaultBorder,
  property1DefaultPadding,
  property1DefaultBackgroundColor,
  property1DefaultPosition,
  onResumeClick,
}) => {
  const property1Default3Style = useMemo(() => {
    return {
      border: property1DefaultBorder,
      padding: property1DefaultPadding,
      backgroundColor: property1DefaultBackgroundColor,
      position: property1DefaultPosition,
    };
  }, [
    property1DefaultBorder,
    property1DefaultPadding,
    property1DefaultBackgroundColor,
    property1DefaultPosition,
  ]);

  return (
    <div className={styles.property1default} style={property1Default3Style} onClick={onResumeClick}>
      <div className={styles.resume}>Resume</div>
      {/* <img
        className={styles.property1defaultChild}
        alt=""
        src="https://t3.ftcdn.net/jpg/06/34/05/72/360_F_634057292_y37hUcwPa0vsA8ZMGnnrHbyZtpkSeVuo.jpg"
      /> */}
    </div>
  );
};

export default Property1Default3;

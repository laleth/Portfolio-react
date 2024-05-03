import { useMemo } from "react";
import styles from "../style/Property1Default.module.css";

const Property1Default = ({
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultBorder,
  property1DefaultPadding,
  property1DefaultBackgroundColor,
  property1DefaultPosition,
  onPortfolioClick,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      border: property1DefaultBorder,
      padding: property1DefaultPadding,
      backgroundColor: property1DefaultBackgroundColor,
      position: property1DefaultPosition,
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultBorder,
    property1DefaultPadding,
    property1DefaultBackgroundColor,
    property1DefaultPosition,
  ]);

  return (
    <div
      className={styles.property1default}
      style={property1DefaultStyle}
      onClick={onPortfolioClick}
    >
      <div className={styles.about}>About</div>
    </div>
  );
};

export default Property1Default;

import { useMemo } from "react";
import styles from "../style/Property1Default1.module.css";

const Property1Default1 = ({
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultBorder,
  property1DefaultPadding,
  property1DefaultBackgroundColor,
  property1DefaultPosition,
  onAboutClick,
}) => {
  const property1Default1Style = useMemo(() => {
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
      style={property1Default1Style}
      onClick={onAboutClick}
    >
      <div className={styles.experience}>Experience</div>
    </div>
  );
};

export default Property1Default1;

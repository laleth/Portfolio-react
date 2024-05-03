import { useMemo } from "react";
import styles from "../style/Property2Default2.module.css";

const Property1Default2 = ({
  property1DefaultWidth,
  property1DefaultBorder,
  property1DefaultPadding,
  property1DefaultBackgroundColor,
  property1DefaultPosition,
  onContactClick,
}) => {
  const property1Default2Style = useMemo(() => {
    return {
      width: property1DefaultWidth,
      border: property1DefaultBorder,
      padding: property1DefaultPadding,
      backgroundColor: property1DefaultBackgroundColor,
      position: property1DefaultPosition,
    };
  }, [
    property1DefaultWidth,
    property1DefaultBorder,
    property1DefaultPadding,
    property1DefaultBackgroundColor,
    property1DefaultPosition,
  ]);

  return (
    <div
      className={styles.property1default}
      style={property1Default2Style}
      onClick={onContactClick}
    >
      <div className={styles.contact}>Contact</div>
    </div>
  );
};

export default Property1Default2;

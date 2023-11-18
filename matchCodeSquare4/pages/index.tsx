import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./index.module.css";

const StartScreenBLUE: NextPage = () => {
  const onMatchFrameContainerClick = useCallback(() => {
    // Please sync "Start Screen - BLUE" to the project
  }, []);

  return (
    <div className={styles.startScreenBlue}>
      <div className={styles.poweredByPlaypic}>
        <img
          className={styles.playpicLogoIcon}
          alt=""
          src="/playpic-logo.svg"
        />
        <div className={styles.poweredBy}>powered by</div>
      </div>
      <img className={styles.titleLogoIcon} alt="" src="/title-logo.svg" />
      <div className={styles.matchFrame} onClick={onMatchFrameContainerClick}>
        <div className={styles.a183ozParent}>
          <div className={styles.a183oz}>a183oz</div>
          <div className={styles.matchCode}>Match Code:</div>
        </div>
        <div className={styles.matchFrameChild} />
      </div>
    </div>
  );
};

export default StartScreenBLUE;

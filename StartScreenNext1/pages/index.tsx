import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./index.module.css";

const StartScreenBLUE: NextPage = () => {
  const onCTAContainerClick = useCallback(() => {
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
      <div className={styles.titleLogo}>
        <div className={styles.titleLogo1}>
          <p className={styles.block}>Block</p>
          <p className={styles.block}>Paper</p>
          <p className={styles.block}>Scissors</p>
        </div>
      </div>
      <div className={styles.cta} onClick={onCTAContainerClick}>
        <div className={styles.buttonPlay}>
          <div className={styles.btnBackground} />
          <div className={styles.play}>Play</div>
        </div>
        <div className={styles.dontOverthinkIt}>Don’t overthink it.</div>
      </div>
    </div>
  );
};

export default StartScreenBLUE;

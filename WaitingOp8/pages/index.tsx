import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./index.module.css";

const StartScreenBLUE: NextPage = () => {
  const onStartScreenBLUEClick = useCallback(() => {
    // Please sync "Start Screen - BLUE" to the project
  }, []);

  return (
    <div className={styles.startScreenBlue} onClick={onStartScreenBLUEClick}>
      <div className={styles.poweredByPlaypic}>
        <img
          className={styles.playpicLogoIcon}
          alt=""
          src="/playpic-logo.svg"
        />
        <div className={styles.poweredBy}>powered by</div>
      </div>
      <img className={styles.titleLogoIcon} alt="" src="/title-logo.svg" />
      <div className={styles.startScreenBlueChild} />
      <div className={styles.waitingForOpponentContainer}>
        <p className={styles.waiting}>Waiting</p>
        <p className={styles.waiting}>for</p>
        <p className={styles.waiting}>Opponent</p>
        <p className={styles.waiting}>...</p>
      </div>
      <div className={styles.buttonContinueParent}>
        <div className={styles.buttonContinue}>
          <div className={styles.btnBackground} />
          <div className={styles.ok}>OK</div>
        </div>
        <div className={styles.buttonContinue1}>
          <div className={styles.btnBackground1} />
          <div className={styles.div}>{`>`}</div>
        </div>
        <div className={styles.buttonContinue2}>
          <div className={styles.btnBackground2} />
          <div className={styles.div1}>{`<`}</div>
        </div>
      </div>
    </div>
  );
};

export default StartScreenBLUE;

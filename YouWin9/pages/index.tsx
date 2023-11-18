import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./index.module.css";

const StartScreenBLUE: NextPage = () => {
  const onButtonJoinMatchClick = useCallback(() => {
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
      <div className={styles.startScreenBlueChild} />
      <div className={styles.buttonJoinMatch} onClick={onButtonJoinMatchClick}>
        <div className={styles.btnBackground} />
        <div className={styles.continue}>Continue</div>
      </div>
      <div className={styles.blockBeatsScissorsParent}>
        <div className={styles.blockBeatsScissorsContainer}>
          <p className={styles.block}>Block</p>
          <p className={styles.beats}>beats</p>
          <p className={styles.block}>Scissors</p>
        </div>
        <img className={styles.resultIcon} alt="" src="/result.svg" />
        <div className={styles.youWin}>You win!</div>
      </div>
    </div>
  );
};

export default StartScreenBLUE;

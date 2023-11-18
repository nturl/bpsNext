import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./index.module.css";

const StartScreenBLUE: NextPage = () => {
  const onJoinMatchContainerClick = useCallback(() => {
    // Please sync "Finished Playing" to the project
  }, []);

  const onButtonNewMatchClick = useCallback(() => {
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
      <div className={styles.preGame}>
        <div className={styles.playLobbyActions}>
          <div className={styles.joinMatch} onClick={onJoinMatchContainerClick}>
            <div className={styles.playLobbyActions}>
              <div className={styles.btnBackground} />
              <div className={styles.done}>Done</div>
            </div>
          </div>
          <div
            className={styles.buttonNewMatch}
            onClick={onButtonNewMatchClick}
          >
            <div className={styles.btnBackground1} />
            <div className={styles.playAgain}>Play again</div>
          </div>
        </div>
      </div>
      <div className={styles.youreInTheContainer}>
        <p className={styles.youreIn}>You’re in</p>
        <p className={styles.youreIn}>the lead!</p>
      </div>
      <div className={styles.winlossRatio}>
        <div className={styles.div}>2:1</div>
        <div className={styles.winloss}>Win:Loss</div>
      </div>
    </div>
  );
};

export default StartScreenBLUE;

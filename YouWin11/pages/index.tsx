import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./index.module.css";

const FinishedPlaying: NextPage = () => {
  const onJoinMatchContainerClick = useCallback(() => {
    // Please sync "Start Screen - BLUE" to the project
  }, []);

  return (
    <div className={styles.finishedPlaying}>
      <div className={styles.poweredByPlaypic}>
        <img
          className={styles.playpicLogoIcon}
          alt=""
          src="/playpic-logo.svg"
        />
        <div className={styles.poweredBy}>powered by</div>
      </div>
      <img className={styles.titleLogoIcon} alt="" src="/title-logo.svg" />
      <div className={styles.preGameParent}>
        <div className={styles.preGame}>
          <div className={styles.playLobbyActions}>
            <div
              className={styles.joinMatch}
              onClick={onJoinMatchContainerClick}
            >
              <div className={styles.playLobbyActions}>
                <div className={styles.btnBackground} />
                <div className={styles.continue}>Continue</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.theWinnerHasContainer}>
          <p className={styles.theWinner}>The winner</p>
          <p className={styles.theWinner}>has received</p>
          <p className={styles.theWinner}>an NFT!</p>
        </div>
        <img className={styles.groupChild} alt="" src="/group-8.svg" />
      </div>
    </div>
  );
};

export default FinishedPlaying;

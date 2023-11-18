import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./index.module.css";

const StartScreenBLUE: NextPage = () => {
  const onButtonJoinMatchClick = useCallback(() => {
    // Please sync "Start Screen - BLUE" to the project
  }, []);

  const onInputEmailAddressClick = useCallback(() => {
    // Please sync "Start Screen - BLUE" to the project
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
          <div className={styles.joinMatch}>
            <div
              className={styles.buttonJoinMatch}
              onClick={onButtonJoinMatchClick}
            >
              <div className={styles.btnBackground} />
              <div className={styles.join}>Join</div>
            </div>
            <div
              className={styles.inputEmailAddress}
              onClick={onInputEmailAddressClick}
            >
              <div className={styles.inputEmailAddressChild} />
              <div className={styles.matchCode}>Match Code</div>
            </div>
          </div>
          <div className={styles.playLobbyActionsChild} />
          <div
            className={styles.buttonNewMatch}
            onClick={onButtonNewMatchClick}
          >
            <div className={styles.btnBackground1} />
            <div className={styles.join}>New</div>
          </div>
        </div>
        <div className={styles.playerInfo}>
          <div className={styles.satoshi}>Satoshi</div>
          <div className={styles.player}>Player:</div>
        </div>
      </div>
    </div>
  );
};

export default StartScreenBLUE;

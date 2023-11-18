import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./index.module.css";

const StartScreenBLUE: NextPage = () => {
  const onBtnBackgroundClick = useCallback(() => {
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
      <div className={styles.loginPrompt}>
        <div className={styles.whatsYourNameContainer}>
          <p className={styles.whatsYour}>What’s your</p>
          <p className={styles.whatsYour}>name?</p>
        </div>
        <div className={styles.buttonContinue}>
          <div
            className={styles.btnBackground}
            onClick={onBtnBackgroundClick}
          />
          <div className={styles.ready}>Ready</div>
        </div>
        <div className={styles.inputEmailAddress}>
          <div className={styles.inputEmailAddressChild} />
          <div className={styles.satoshi}>Satoshi</div>
        </div>
      </div>
    </div>
  );
};

export default StartScreenBLUE;

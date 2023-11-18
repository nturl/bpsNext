import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./index.module.css";

const StartScreenBLUE: NextPage = () => {
  const onButtonContinueClick = useCallback(() => {
    // Please sync "Start Screen - BLUE" to the project
  }, []);

  const onButtonContinue1Click = useCallback(() => {
    // Please sync "Start Screen - BLUE" to the project
  }, []);

  const onButtonContinue2Click = useCallback(() => {
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
      <img className={styles.scissorsIcon} alt="" src="/scissors.svg" />
      <div className={styles.scissors}>Scissors</div>
      <div className={styles.buttonContinueParent}>
        <div className={styles.buttonContinue} onClick={onButtonContinueClick}>
          <div className={styles.btnBackground} />
          <div className={styles.ok}>OK</div>
        </div>
        <div
          className={styles.buttonContinue1}
          onClick={onButtonContinue1Click}
        >
          <div className={styles.btnBackground1} />
          <div className={styles.div}>{`>`}</div>
        </div>
        <div
          className={styles.buttonContinue2}
          onClick={onButtonContinue2Click}
        >
          <div className={styles.btnBackground2} />
          <div className={styles.div1}>{`<`}</div>
        </div>
      </div>
    </div>
  );
};

export default StartScreenBLUE;

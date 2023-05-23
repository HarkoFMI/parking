import React from "react";

import { Header } from "components";

import styles from "./styles.module.css";
import appStore from "../../images/buttons/app-store.png";
import googlePlay from "../../images/buttons/googlePlay.png";
import phone from "../../images/phone.png";

export default class Landing extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section className={styles.blueTopSection}>
          <div className={styles.h1AndAppButtons}>
            <h1>Office parking.<br></br>Made.<br></br>Easy.<br></br></h1>
            <div className={styles.appButtons}>
              <img src={appStore} alt="appStore" />
              <img src={googlePlay} alt="googlePlay" />
            </div>
          </div>
          <div className={styles.phones}>
            <img src={phone} alt="phone" />
          </div>
        </section>
        <section className={styles.services}>
          <div className={styles.leftServicesColumn}>
            <p><span>Real-time</span> availability information<br></br>updated every minute</p>
            <p>Takes into account <span>working <br></br> hours</span>, amount of people <br></br>working from the office and other metrics</p>
            <p>Get <span>directions</span> to the best<br></br>available parking spots</p>
            <p>Saves <span>up to 73%</span> more time<br></br>by having easy access to<br></br> reserving office parking spots</p>
          </div>
          <div className={styles.rightServicesColumn}>
            <p>Allows you to see <span>parking availability</span> of all parking spots<br></br>within the office area</p>
            <p>Ability to <span>change</span> and <br></br> <span>remove</span> reservations at any time </p>
            <p>Helps you avoid <span>overstaying</span>,<br></br><span>understaying</span> or not <br></br> being <span>able to park</span></p>
          </div>
        </section>
      </>
    );
  }
}

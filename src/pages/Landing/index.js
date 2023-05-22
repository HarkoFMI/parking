import React from "react";
import * as cx from 'classnames';

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
            <p>Takes into account parking<br></br><span>restriction information</span>, such as<br></br>areas where it is illegal to park</p>
            <p>Get <span>directions</span> to the nearest<br></br>available parking spot, not just<br></br>the street address</p>
            <p>Saves <span>up to 73%</span> of your time<br></br>looking for on-street or<br></br>off-street parking</p>
          </div>
          <div className={styles.rightServicesColumn}>
            <p>Allows you to see <br></br><span>parking availability</span> for every street and<br></br>off-street location within a<br></br>specified area</p>
            <p>Ability to choose between <span>free</span>,<br></br><span>paid</span> and <span>permit</span> on-street and<br></br>off-street parking types</p>
            <p>Helps you avoid <span>overstaying</span>,<br></br><span>overpaying</span> or <span>getting a ticket</span></p>
          </div>
        </section>
      </>
    );
  }
}

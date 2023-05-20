import React from "react";
import * as cx from 'classnames';

import { Header } from "components";

import styles from "./styles.module.css";
import appStore from "../../images/buttons/app-store.png";
import googlePlay from "../../images/buttons/googlePlay.png";
import phones from "../../images/phones.png";
import illustration1 from "../../images/parking-illustration1.png";
import illustration2 from "../../images/parking-illustration2.png";
import illustration3 from "../../images/parking-illustration3.png";
import drone from "../../images/drone.png";

export default class Landing extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section className={styles.blueTopSection}>
          <div className={styles.h1AndAppButtons}>
            <h1>Always searching<br></br>for that free<br></br>parking space?<br></br>Not anymore!</h1>
            <div className={styles.appButtons}>
              <img src={appStore} alt="appStore" />
              <img src={googlePlay} alt="googlePlay" />
            </div>
          </div>
          <div className={styles.phones}>
            <img src={phones} alt="phones" />
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
        <section className={styles.onOffStreetParking}>
          <div className={styles.onStreet}>
            <div className={styles.h2AndP}>
              <h2>On-street parking</h2>
              <p>FMI-Parking’s On-Street Availability API uses<br></br>patented award winning machine<br></br>
                  learning technology to determine streets<br></br>with at least 1 open and legal on-street<br></br>parking space.</p>
            </div>
            <img src={illustration1} alt="illustration1" />
          </div>

          <div className={styles.offStreet}>
            <div className={styles.h2AndP}>
              <h2>Off-street parking</h2>
              <p>ParkIt’s Off-Street Availability API uses<br></br>patented award winning machine<br></br>
                  learning technology to calculate the<br></br>probability of each individual parking<br></br>
                  lot/garage having at least 1 open<br></br>off-street parking space.</p>
            </div>
            <img src={illustration2} alt="illustration2" />
          </div>
        </section>
        <section className={cx(styles.onOffStreetParking, styles.thirdIllustration)}>
          <div className={styles.onStreet}>
            <div className={styles.h2AndP}>
              <h2>Got a parking and<br></br>
                you're not using it<br></br>
                all the time?</h2>
              <p>Do you own a parking space but you don't<br></br>
                use it during the day? Does your company<br></br>
                have a car park which is rarely full? Share<br></br>
                your parking on FMI-Parking! Start earning extra<br></br>
                money by renting out your parking space.<br></br>

                FMI-Parking offers parking place rental platform<br></br>
                that helps you park easily and gain peace<br></br>
                of mind.</p>
            </div>
            <img src={illustration3} alt="illustration3" />
          </div>
        </section>
        <section className={styles.mostPrecise}>
          <div className={styles.textAndDrone}>
            <div className={styles.h2AndText}>
              <h2>The most precise<br></br>parking solution</h2>
              <p>ParkIt uses big data and AI innovation to bring<br></br>the most advanced and accurate parking<br></br>availability.</p>
            </div>
            <img src={drone} alt="drone" />
          </div>
          <div className={styles.h2AndButtons}>
            <h2>ParkIt  processes real-time data from:</h2>
            <div className={styles.whiteButtons}>
              <button>Street cameras</button>
              <button>Drones</button>
              <button>Parking sensors</button>
              <button>Our users</button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

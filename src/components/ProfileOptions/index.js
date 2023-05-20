
import React from 'react';

import { Vehicles } from 'components';

import styles from './styles.module.css';


class ProfileOptions extends React.Component {
  render() {
    return (
      <div className={styles.settings}>
        <div className={styles.settingsDiv}>

          <a className={styles.button} href="#popup1">
            <button className={`${styles.accountSettingsBtn} ${styles.fc1} ${styles.accountDetails}`}>Account details</button>
          </a>
          <div id="popup1" className={styles.overlay}>
            <div className={styles.popup}>
              <h2>Account Details</h2>
              <a className={styles.close} href="#">&times;</a>
              <div className={styles.content}>
                <div className={styles.flexContainerItems}>
                  <p>Registered on: 08/05/2020</p>
                </div>
              </div>
            </div>
          </div>

          <a className={styles.button} href="#popup2">
            <button className={`${styles.accountSettingsBtn} ${styles.fc1} ${styles.vehicles}`}>Vehicles</button>
          </a>
          <div id="popup2" className={styles.overlay}>
            <div className={styles.popup}>
              <a className={styles.close} href="#">&times;</a>
              <div className={styles.content}>
                <Vehicles />
              </div>
            </div>
          </div>

          <button className={`${styles.accountSettingsBtn} ${styles.fc1} ${styles.history}`}>History</button>

          <button className={`${styles.accountSettingsBtn} ${styles.fc1} ${styles.howItworks}`}>How it works?</button>
          <button className={`${styles.accountSettingsBtn} ${styles.fc1} ${styles.support}`}>Support</button>
          <button className={`${styles.accountSettingsBtn} ${styles.fc1} ${styles.settingsIcon}`}>Settings</button>

          <button className={`${styles.accountSettingsBtn} ${styles.fc1} ${styles.logOut}`}>Log out</button>
        </div>
      </div>
    );
  }
}

export default ProfileOptions;

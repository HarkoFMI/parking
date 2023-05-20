import React from 'react';
import { Header} from 'components';
import styles from './styles.module.css';

export default class AddVehicle extends React.Component {

  render() {
    return (
      <div>
      <Header />
        <div className={styles.flexContainer}>
        <a className={styles.backBtnLink} href="/profile">
          <button className={styles.backBtn}></button>
        </a>
          <h1>Add Vehicle</h1>
        </div>
        <div className={styles.flexContainerItems}>
          <p>Select vehicle type</p>
          <div className={styles.vehiclesContainer}>
            <button className={`${styles.filterChoice} ${styles.fc1} ${styles.motorbike}`}></button>
            <button className={`${styles.filterChoice} ${styles.fc1} ${styles.smallCar}`}></button>
            <button className={`${styles.filterChoice} ${styles.fc1} ${styles.longCar}`}></button>
            <button className={`${styles.filterChoice} ${styles.fc1} ${styles.suv}`}></button>
            <button className={`${styles.filterChoice} ${styles.fc1} ${styles.bus}`}></button>
            <button className={`${styles.filterChoice} ${styles.fc1} ${styles.cargoTruck}`}></button>
          </div>
        </div>

        <div className={styles.flexContainerItems}>
          <p>Vehicle model</p>
          <input type="text" className={styles.vehicleModelInput} placeholder="Vehicle model"></input>
        </div>

        <div className={styles.flexContainerItems}>
          <p>Select fuel type</p>
          <div className={styles.fuelContainer}>
            <button className={`${styles.filterChoice} ${styles.fc1} ${styles.petrol}`}>Petrol</button>
            <button className={`${styles.filterChoice} ${styles.fc1} ${styles.diesel}`}>Diesel</button>
            <button className={`${styles.filterChoice} ${styles.fc1} ${styles.gas}`}>Gas</button>
            <button className={`${styles.filterChoice} ${styles.fc1} ${styles.electric}`}>Electric</button>
          </div>
        </div>

        <div className={styles.flexContainerItems}>
          <p>Vehicle plate number</p>
          <input type="text" className={styles.vehicleModelInput} placeholder="Vehicle plate number"></input>
        </div>

        <a className={styles.button} href="/profile#popup2">
          <button className={styles.addVehicle}></button>
        </a>
        {/* TODO? show success message in vehicles window when adding a vehicle */}
      </div>
    );
  }
}

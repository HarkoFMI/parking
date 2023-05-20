
import React from 'react';
import styles from './styles.module.css';


class Vehicles extends React.Component {
render() {
  return (
    <div className={styles.vehicles}>
      <h2 id={styles.title}>My vehicles</h2>
      <p id={styles.subtitle}>Select a vehicle to edit, or add a new one.</p>
      <div className={styles.vehiclesDiv}>
        
        
        <button className={`${styles.vehicleBtn} ${styles.fc1} ${styles.kawasaki}`}>
          <div>
            <p className={styles.fueltype}>Petrol</p>
            <div className={styles.modelAndPlate}>
              <p>Kawasaki Z900</p>
              <p>CA1422BP</p>
            </div>
          </div>
        </button>

        <button className={`${styles.vehicleBtn} ${styles.fc1} ${styles.micra}`}>
          <div>
            <p className={styles.fueltype}>Diesel</p>
            <div className={styles.modelAndPlate}>
              <p>Nissan Micra</p>
              <p>C3737AM</p>
            </div>
          </div>
        </button>

        <button className={`${styles.vehicleBtn} ${styles.fc1} ${styles.toyota}`}>
          <div>
            <p className={styles.fueltype}>Electric</p>
            <div className={styles.modelAndPlate}>
              <p>Toyota Augo</p>
              <p>C7839TT</p>
            </div>
          </div>
        </button>

        <button className={`${styles.vehicleBtn} ${styles.fc1} ${styles.volvo}`}>
          <div>
            <p className={styles.fueltype}>Diesel</p>
            <div className={styles.modelAndPlate}>
              <p>Volvo XC90</p>
              <p>CA1723MT</p>
            </div>
          </div>
        </button>
      </div>

      <a className={styles.button} href="/addvehicle">
        <button className={styles.addVehicle}></button>
      </a>


    </div>
);
}
}

export default Vehicles;

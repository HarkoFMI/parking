import React from "react";
import styles from './styles.module.css';

export const ParkingSpot = ({ location, state }) => {
    return (
        <div className={`${styles.parkingSpot} ${styles[state]}` }>
            <label>{location}</label>
        </div>
    )
}
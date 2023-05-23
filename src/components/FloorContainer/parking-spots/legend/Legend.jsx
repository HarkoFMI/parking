import React from "react";
import styles from "./styles.module.css"
import { ParkingSpotState } from "../const";

export function Legend() {
    return (
        <div className={styles.legend}>
            <h2 className={styles.title}>Legend</h2>
            <StateDescription state={ParkingSpotState.available} description="Currently available parking slot" />
            <StateDescription state={ParkingSpotState.unavailable} description="Currently unavailable parking slot" />
            <StateDescription state={ParkingSpotState.taken} description="Reserved by another person" />
            <StateDescription state={ParkingSpotState.beingTaken} description="Considered by another person" />
            <StateDescription state={ParkingSpotState.reserved} description="Reserved by you" />
        </div>
    )
}

const StateDescription = ({ state, description }) => {
    return (
        <div>
            <div className={`${styles.stateBox} ${styles[state]}`}></div>
            <label className={styles.description}>{description}</label>
        </div>
    );
} 


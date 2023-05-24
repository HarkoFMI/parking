import React from "react";
import { EmptySpot } from "./parking-spots/EmptySpot";
import { ParkingSpot } from "./parking-spots/ParkingSpot";
import { ParkingSpotState } from "./parking-spots/const";

const states = [
    ParkingSpotState.unavailable,
    ParkingSpotState.available,
    ParkingSpotState.taken,
    ParkingSpotState.beingTaken,
    ParkingSpotState.reserved,
]

function getRandomState() {
    return states[Math.floor(Math.random() * states.length)];
}

const createParkingRow = (rowName, spots, additionalProps) => {
    let row = [];
    for (let x = 1; x <= spots; x++) {
        console.log(getRandomState());
        row.push(<ParkingSpot location={rowName + x} state={getRandomState()} {...additionalProps} />)
    }
    return row;
}

const createEmptyRow = (spots) => {
    let row = [];
    for (let x = 1; x <= spots; x++) {
        row.push(<EmptySpot/>)
    }
    return row;
}

export function getRowConfig(additionalProps) {
    return [
        createParkingRow("A", 10, additionalProps),
        createEmptyRow(10),
        [<EmptySpot />, ...createParkingRow("B", 8, additionalProps), <EmptySpot />],
        createEmptyRow(10),
        createParkingRow("C", 10, additionalProps),
    ]
    
    
}

export const rowConfig = [
    createParkingRow("A", 10),
    createEmptyRow(10),
    [<EmptySpot />, ...createParkingRow("B", 8), <EmptySpot />],
    createEmptyRow(10),
    createParkingRow("C", 10),
]


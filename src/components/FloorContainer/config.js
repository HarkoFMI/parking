import React from "react";
import { EmptySpot } from "./parking-spots/EmptySpot";
import { ParkingSpot } from "./parking-spots/ParkingSpot";

const ParkingSpotState = {
    unavailable: "unavailable",
    taken: "taken",
    beingTaken: "beingTaken",
    reserved: "reserved",
    available: "available" 
}

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

const createParkingRow = (rowName, spots) => {
    let row = [];
    for (let x = 1; x <= spots; x++) {
        console.log(getRandomState());
        row.push(<ParkingSpot location={rowName + x} state={getRandomState()}/>)
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

export const rowConfig = [
    createParkingRow("A", 10),
    createEmptyRow(10),
    [<EmptySpot />, ...createParkingRow("B", 8), <EmptySpot />],
    createEmptyRow(10),
    createParkingRow("C", 10),
]


import React from "react"
import styles from "./styles.module.css";
import { getRowConfig } from "./config.js";
import { Legend } from "./parking-spots/legend/Legend"

export function FloorContainer(additionalProps) {
    return (
        <div className={styles.wrapper}>
            <table className={styles.container}>
                <tbody>
                    {getRowConfig(additionalProps).map(rowCallback)}
                </tbody>
            </table>
            <Legend />
        </div>
    )
}

const spotCallback = (spot) => {
    return <td>{spot}</td>
}

const rowCallback = (row) => {
    return <tr>
        {row.map(spotCallback)}
    </tr>;
}


import React from "react"
import styles from "./styles.module.css";
import { rowConfig } from "./config.js";


export function FloorContainer() {
    return (
        <table className={styles.container}>
            <tbody>
                {rowConfig.map(rowCallback)}
            </tbody>
        </table>
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


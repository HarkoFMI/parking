import React, { useState } from "react";
import styles from "./styles.module.css"
import { Menu, Dropdown } from "semantic-ui-react";
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

export function FloorConfig({ from, setFrom, to, setTo }) {
    let [floor, setFloor] = useState("Floor 1");
    
    return <Menu className={styles.config}>
        <Menu.Item className={styles.datetime}>
            <label className={styles.label}>From: </label>
            <DateTimePicker onChange={setFrom} value={from} />
        </Menu.Item>
        <Menu.Item className={styles.datetime}>
            <label className={styles.label}>To: </label>
            <DateTimePicker onChange={setTo} value={to} />
        </Menu.Item>
        <Dropdown item selection text={floor} className={styles.dropdown}>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => setFloor("Floor 1")}>Floor 1</Dropdown.Item>
                <Dropdown.Item onClick={() => setFloor("Floor 2")}>Floor 2</Dropdown.Item>
                <Dropdown.Item onClick={() => setFloor("Floor 3")}>Floor 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Menu>
}
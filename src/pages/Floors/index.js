import React, { useState } from "react";

import { Header } from "components";
import styles from "./styles.module.css";
import { FloorContainer } from "components/FloorContainer";
import { FloorConfig } from "components/FloorConfig";

export default function Floors({ isAdmin }) {
    let [from, setFrom] = useState(new Date());
    let [to, setTo] = useState( new Date(new Date().getTime() + (24 * 60 * 60 * 1000)));
  
    return (
      <div className={styles.wrapper}>
        <Header />
        <FloorConfig from={from} setFrom={setFrom} to={to} setTo={setTo} />
        <FloorContainer isAdmin={isAdmin} from={from} setFrom={setFrom} to={to} setTo={setTo}  />
      </div>
    );

}
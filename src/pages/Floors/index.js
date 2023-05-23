import React from "react";

import { Header } from "components";
import styles from "./styles.module.css";
import { FloorContainer } from "components/FloorContainer";
import { FloorConfig } from "components/FloorConfig";

export default function Floors({ isAdmin }) {
    return (
      <div className={styles.wrapper}>
        <Header />
        <FloorConfig />
        <FloorContainer isAdmin={isAdmin} />
      </div>
    );

}
import React from "react";

import logo from "../../images/logo.png";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./styles.module.css";
import { Icon } from 'semantic-ui-react'

class Header extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className={styles.navigationHeader}
      >
        <Nav className="mr-auto">
          <Navbar.Brand href="/home" className={styles.navTitle}>
            <img src={logo} alt="logo" className={styles.logo} />
            Parking
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={styles.navLinkGroup}
        >
          <Nav className="ml-auto">
            <Nav.Link href="/home" className={styles.navLink}>
              <Icon name="home" size="big"/>
            </Nav.Link>
            <Nav.Link href="/floors" className={styles.navLink}>
              <Icon name="car" size="big"/>
            </Nav.Link>
            <Nav.Link href="/profile" className={styles.navLink}>
              <Icon name="user outline" size="big"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

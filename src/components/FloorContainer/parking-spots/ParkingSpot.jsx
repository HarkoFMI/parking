import React, { useState, useEffect } from "react";
import styles from './styles.module.css';
import { ParkingSpotState } from "./const";
import { UnavailablePopup, AvailablePopup, TakenPopup, BeingTakenPopup, ReservedPopup, AdminPopup } from "./popups";
import { Modal, Button } from "semantic-ui-react";

const getPopup = (state, closeCallback, reserveCallback, additionalProps) => {
    if (additionalProps.isAdmin) {
        return <AdminPopup closeCallback={closeCallback} reserveCallback={reserveCallback} />
    }

    switch (state) {
        case ParkingSpotState.unavailable: return <UnavailablePopup closeCallback={closeCallback} {...additionalProps} />
        case ParkingSpotState.available: return <AvailablePopup closeCallback={closeCallback} reserveCallback={reserveCallback}  {...additionalProps} />
        case ParkingSpotState.taken: return <TakenPopup closeCallback={closeCallback}  {...additionalProps}/>
        case ParkingSpotState.beingTaken: return <BeingTakenPopup closeCallback={closeCallback} reserveCallback={reserveCallback}  {...additionalProps} />
        case ParkingSpotState.reserved: return <ReservedPopup closeCallback={closeCallback}  {...additionalProps} /> 
    }
}

const getModalStyle = (state, isAdmin) => {
    if (isAdmin) {
        return styles.adminModal;
    }

    switch (state) {
        case ParkingSpotState.unavailable: return styles.unavailableModal;
        case ParkingSpotState.available: return styles.availableModal;
        case ParkingSpotState.taken: return styles.takenModal;
        case ParkingSpotState.beingTaken: return styles.beingTakenModal;
        case ParkingSpotState.reserved: return styles.reservedModal;
        
    }
}



export const ParkingSpot = (props) => {
    let { location, state, isAdmin } = props  
    let [open, setOpen] = useState(false);
    let [success, setSuccess] = useState(false);

    useEffect(() => {
        if (success) {
            setTimeout(() => setSuccess(false), 3000)
        }
    }, [success])

    return (
        <>
        <Modal
            className={getModalStyle(state, isAdmin)}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
                <div className={`${styles.parkingSpot} ${styles[state]}`}>
                    <label>{location}</label>
                </div>
            }
      >
            {
                getPopup(state, () => setOpen(false), () => setSuccess(true), props)
            }
        </Modal>
        <Modal
            className={styles.successModal}
            open={success}
            header='Reservation successful'
        >
            <Modal.Header>Reservation successful</Modal.Header>

            <Modal.Actions>
                <Button positive={false} onClick={() => setSuccess(false)}>
                     Close
                </Button>
                <Button positive={true} onClick={() => setSuccess(false)}>
                    Successfully reserved
                </Button>
            </Modal.Actions>
        </Modal>
        </>
    )
}

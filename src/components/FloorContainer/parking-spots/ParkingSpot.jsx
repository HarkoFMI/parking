import React, { useState, useEffect } from "react";
import styles from './styles.module.css';
import { ParkingSpotState } from "./const";
import { UnavailablePopup, AvailablePopup, TakenPopup, BeingTakenPopup, ReservedPopup, AdminPopup } from "./popups";
import { Modal } from "semantic-ui-react";

const getPopup = (state, closeCallback, reserveCallback, isAdmin) => {
    if (isAdmin) {
        return <AdminPopup closeCallback={closeCallback} reserveCallback={reserveCallback} />
    }

    switch (state) {
        case ParkingSpotState.unavailable: return <UnavailablePopup closeCallback={closeCallback} />
        case ParkingSpotState.available: return <AvailablePopup closeCallback={closeCallback} reserveCallback={reserveCallback} />
        case ParkingSpotState.taken: return <TakenPopup closeCallback={closeCallback}/>
        case ParkingSpotState.beingTaken: return <BeingTakenPopup closeCallback={closeCallback} reserveCallback={reserveCallback} />
        case ParkingSpotState.reserved: return <ReservedPopup closeCallback={closeCallback} /> 
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



export const ParkingSpot = ({ location, state, isAdmin }) => {
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
                getPopup(state, () => setOpen(false), () => setSuccess(true), isAdmin)
            }
        </Modal>
        <Modal
            className={styles.successModal}
            open={success}
            header='Reservation successful'
            actions={['Close', { key: 'close', content: 'Successfully reserved', positive: true }]}
        />
        </>
    )
}

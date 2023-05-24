import React, { useState } from "react"
import { Modal, Button } from "semantic-ui-react"
import styles from "./styles.module.css"
import DateTimePicker from "react-datetime-picker"

export const TakenPopup = ({ closeCallback }) => {
    return <>
      <Modal.Header className={styles.modalText}>Unfortunately, this spot is already reserved by another user</Modal.Header>
      <Modal.Content>
        <Modal.Description className={styles.modalDescription}>
          Another user has already reserved this spot for the given timeframe. Perhaps you should try with another one.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions className={styles.actions}>
        <Button color='red' onClick={closeCallback}>
          Close
        </Button>
      </Modal.Actions>
      </>
}

export const UnavailablePopup = ({ closeCallback }) => {
    return <>
    <Modal.Header className={styles.modalText}>Unfortunately, this spot is unavailable for this timeframe</Modal.Header>
    <Modal.Content>
      <Modal.Description className={styles.modalDescription}>
        The spot will be unavailable most likely due to planned maintanence or construction work.
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions className={styles.actions}>
      <Button color='red' onClick={closeCallback}>
        Close
      </Button>
    </Modal.Actions>
    </>
}

export const AvailablePopup = (props) => {
    let { to, from, setTo, setFrom, closeCallback, reserveCallback } = props;  

    return <>
        <Modal.Header className={styles.modalText}>This spot is available for reservation</Modal.Header>
        <Modal.Content>
          <Modal.Description className={styles.modalDescription}>
            You should hurry so you won't miss it.
          </Modal.Description>
        <div className={styles.datetimeSelect}>
            <label className={styles.modalLabel}>From: </label>
            <DateTimePicker onChange={setFrom} value={from} />
        </div>
        <div className={styles.datetimeSelect}>
            <label className={styles.modalLabel}>To: </label>
            <DateTimePicker onChange={setTo} value={to} />
          </div>
        </Modal.Content>
        <Modal.Actions className={styles.actions}>
          <Button color='green' onClick={() => {
            reserveCallback();  
            closeCallback();
          }}>
            Reserve
          </Button>
          <Button color='red' onClick={closeCallback}>
            Close
          </Button>
        </Modal.Actions>
        <Modal.Content>
            <Modal.Description className={styles.modalDescription}>
                The reservation will be available for any of you registered vehicles.
            </Modal.Description>
        </Modal.Content>
    </>
}

export const BeingTakenPopup = (props) => {
    let { to, from, setTo, setFrom, closeCallback, reserveCallback } = props;  

    return <>
        <Modal.Header className={styles.modalText}>Another user is considering reserving this spot</Modal.Header>
        <Modal.Content>
          <Modal.Description className={styles.modalDescription}>
            You should hurry so you won't miss it.
          </Modal.Description>
            <div className={styles.datetimeSelect}>
                <label className={styles.modalLabel}>From: </label>
                <DateTimePicker className={styles.datetime} onChange={setFrom} value={from} />
            </div>
            <div className={styles.datetimeSelect}>   
                <label className={styles.modalLabel}>To: </label>
                <DateTimePicker className={styles.datetime} onChange={setTo} value={to} />
            </div>
        </Modal.Content>
        <Modal.Actions className={styles.actions}>
        <Button color='green' onClick={() => {
            reserveCallback();  
            closeCallback();
          }}>
            Reserve
          </Button>
          <Button color='red' onClick={closeCallback}>
            Close
          </Button>
        </Modal.Actions>
        <Modal.Content>
            <Modal.Description className={styles.modalDescription}>
                The reservation will be available for any of you registered vehicles.
            </Modal.Description>
        </Modal.Content>

    </>
}

export const ReservedPopup = ({ closeCallback }) => {
    return <>
    <Modal.Header className={styles.modalText}>You have already reserved this spot for this timeframe</Modal.Header>
    <Modal.Content>
        <Modal.Description className={styles.modalDescription}>
            If you already know that, probably you want to change or delete your reservation.
        </Modal.Description>
    </Modal.Content>
    <Modal.Actions className={styles.actions}>
        <Button color='blue' onClick={closeCallback}>
            Change
        </Button>
        <Button color='red' onClick={closeCallback}>
            Delete
        </Button>
         <Button positive={false} onClick={closeCallback}>
            Close
         </Button>
    </Modal.Actions>
    </>
}

export const AdminPopup = ({ closeCallback }) => {
    return <>
    <Modal.Header className={styles.modalText}>This spot is reserved by <i>User123</i> for the chosen duration</Modal.Header>
    <Modal.Content>
        <Modal.Description className={styles.modalDescription}>
            If you already know that, probably you want to change or delete this reservation.
        </Modal.Description>
    </Modal.Content>
    <Modal.Actions className={styles.actions}>
        <Button color='blue' onClick={closeCallback}>
            Change
        </Button>
        <Button color='red' onClick={closeCallback}>
            Delete
        </Button>
         <Button positive={false} onClick={closeCallback}>
            Close
         </Button>
    </Modal.Actions>
    </>
}
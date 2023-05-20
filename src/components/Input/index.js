import React from 'react';
import * as cx from 'classnames';
import styles from './styles.module.css'

export const Input = ({ type, placeholder, className }) => {
    return <input className={cx(styles.input, className)} type={type} placeholder={placeholder} />
}

import React from 'react';
import styles from './styles.module.css';
import userPhoto from '../../images/Photo.png';

class UserPhotoAndName extends React.Component {
render() {
  return (
    <div className={styles.flexContainer}>
      <img src={userPhoto} className={styles.image} alt="userPhoto"/>
      <h2>User Name</h2>
    </div>
);
}
}

export default UserPhotoAndName;

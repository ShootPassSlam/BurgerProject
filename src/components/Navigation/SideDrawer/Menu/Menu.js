import React from 'react';

import styles from './Menu.module.css';

const menu = (props) => (
    <div className={styles.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default menu;
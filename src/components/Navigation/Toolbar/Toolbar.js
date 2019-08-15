import React from 'react';

import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import Menu from '../SideDrawer/Menu/Menu';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <Menu clicked={props.open}/>
        <div className={styles.Logo}>
            <Logo/>
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems isAuthenticated = {props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;
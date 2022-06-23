import React from 'react';

import styles from './style.module.css';

const BurgerMenu = () => {
    return (
        <ul className={styles.burgerMenuList}>
            <li>Home</li>
            <li>SOFTWARE DEVELOPMENT</li>
            <li>WEB DESIGN</li>
            <li>IT CONSULTANCY</li>
            <li>CONTACTS</li>
        </ul>
    );
};

export default BurgerMenu;
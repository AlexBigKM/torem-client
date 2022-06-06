import React from 'react';
import toremLogo from '../../assets/icons/logo.svg';
import dropDownArrow from '../../assets/icons/dropdown-arrow.svg';
import ContentContainer from "../ContentContainer/ContentContainer";
import {motion} from "framer-motion";

import styles from './style.scss';

const fadeInDown = {
    initial: {
        y: -160,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
    transition: {
        duration: 1.5,
        delay: 1.5,
        ease: "easeInOut",
    }
}


const NavBar = () => {
    return (
        <ContentContainer containerStyle={styles.navBarContainer}>
            <motion.div className={styles.navbarWrapper} variants={fadeInDown} initial="initial" animate="animate">
                <img className={styles.navbarLogo} src={toremLogo} alt={"Torem"}/>
                <ul className={styles.navbarMenuList}>
                    <li>
                        Home
                    </li>
                    <li>
                        Services
                        <img className={styles.navbarMenuListItemImg} src={dropDownArrow} alt={"Dropdown Arrow"}/>
                    </li>
                    <li>
                        Contacts
                    </li>
                </ul>
            </motion.div>
        </ContentContainer>
    );
};

export default NavBar;
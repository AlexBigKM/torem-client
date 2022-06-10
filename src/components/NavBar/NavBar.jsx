import React, {useEffect, useRef, useState} from 'react';
import toremLogo from '../../assets/icons/logo.svg';
import dropDownArrow from '../../assets/icons/dropdown-arrow.svg';
import ContentContainer from "../ContentContainer/ContentContainer";
import {motion} from "framer-motion";

import styles from './style.module.css';

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

const translateIn = {
    initial: {
        x: '100vw',
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    transition: {
        duration: 3.5,
        delay: 3.5,
        ease: "easeOut",
    }
}


const NavBar = () => {
    const [isShown, setIsShown] = useState(false);
    const refMenu = useRef();

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (e) => {
        if (refMenu.current && !refMenu.current.contains(e.target)) {
            setIsShown(false);
        }
    };

    return (
        <ContentContainer containerStyle={styles.navBarContainer}>
            <motion.div className={styles.navbarWrapper} variants={fadeInDown} initial="initial" animate="animate">
                <img className={styles.navbarLogo} src={toremLogo} alt={"Torem"}/>
                <ul className={styles.navbarMenuList}>
                    <li>
                        Home
                    </li>
                    <li onClick={() => setIsShown(!isShown)}>
                        Services
                        <img className={styles.navbarMenuListItemImg} src={dropDownArrow} alt={"Dropdown Arrow"}/>
                    </li>
                    <li>
                        Contacts
                    </li>
                </ul>
            </motion.div>
            {isShown &&
                <motion.div  className={styles.animateNavBar} ref={refMenu} variants={translateIn} initial="initial" animate="animate">
                    <ul className={styles.navbarAnimateMenuList}>
                        <li>
                            Software development
                        </li>
                        <li>
                            Web design
                        </li>
                        <li>
                            IT Consultancy
                        </li>
                    </ul>
                </motion.div>
            }
        </ContentContainer>
    );
};

export default NavBar;
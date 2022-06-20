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

const NavBar = ({onClickContacts}) => {
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
                    <li onClick={onClickContacts}>
                        Contacts
                    </li>
                </ul>
            </motion.div>
            {isShown &&
                <motion.div
                    className={styles.animateNavBar}
                    ref={refMenu}
                    initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: 0, ease: "easeInOut",}}
                >
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
import React, {useEffect, useRef, useState} from 'react';
import toremLogo from '../../assets/icons/logo.svg';
import dropDownArrow from '../../assets/icons/dropdown-arrow.svg';
import ContentContainer from "../ContentContainer/ContentContainer";
import {BurgerBtn} from "../BurgerBtn/BurgerBtn";
import {motion, useCycle} from "framer-motion";

import styles from './style.module.css';
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const NavBar = ({onClickContacts}) => {
    const [isShown, setIsShown] = useState(false);
    const [isOpen, toggle] = useCycle(false, true);
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
        <>
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className={styles.navbarBtnWrapper}
            >
                <BurgerBtn toggle={() => toggle()} />
            </motion.div>
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{open: {opacity: 1, x: 0}, closed: {opacity: 0, x: "-100%"}}}
                // transition={{duration: 0.5}}
                className={styles.navBurgerOverlay}
            >
                <BurgerMenu />
            </motion.div>
            <ContentContainer containerStyle={styles.navBarContainer}>
                <div className={styles.navbarWrapper}>
                    <motion.div
                        initial={{x: -460, opacity: 0,}}
                        animate={{x: 0, opacity: 1,}}
                        transition={{duration: 0.5, delay: 0.5, ease: "easeInOut",}}
                    >
                        <img className={styles.navbarLogo} src={toremLogo} alt={"Torem"}/>
                    </motion.div>
                    <motion.div
                        initial={{x: 460, opacity: 0,}}
                        animate={{x: 0, opacity: 1,}}
                        transition={{duration: 0.5, delay: 0.5, ease: "easeInOut",}}
                        className={styles.navbarMenuListMotionWrapper}
                    >
                        <ul className={styles.navbarMenuList}>
                            <li>
                                <a className={styles.navbarMenuListLink}>
                                    Home
                                </a>
                            </li>
                            <li onClick={() => setIsShown(!isShown)}>
                                Services
                                <img className={styles.navbarMenuListItemImg} src={dropDownArrow}
                                     alt={"Dropdown Arrow"}/>
                            </li>
                            <li onClick={onClickContacts}>
                                <a className={styles.navbarMenuListLink}>
                                    Contacts
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>
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
        </>
    );
};

export default NavBar;
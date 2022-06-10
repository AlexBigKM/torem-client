import React from 'react';
import classNames from "classnames";
import { motion } from "framer-motion";

import styles from './style.module.css';

const AnimationContainer = ({ motionClassName, children, yPos, xPos }) => {
    const fadeInDown = {
        initial: {
            y: yPos,
            x: xPos,
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

    return (
        <motion.div
            className={classNames(styles.motionWrapper, motionClassName)}
            variants={fadeInDown}
            initial="initial"
            animate="animate"
        >
            {children}
        </motion.div>
    );
};

export default AnimationContainer;
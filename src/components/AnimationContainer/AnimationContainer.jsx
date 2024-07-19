import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import './styles.css';

const AnimationContainer = ({ motionClassName, children, yPos, xPos }) => {
    return (
        <motion.div
            className={classNames('motionWrapper', motionClassName)}
            initial={{ y: yPos, x: xPos, opacity: 0, }}
            animate={{ y: 0, x: 0, opacity: 1, }}
            transition= {{ duration: 0.5, delay: 0.5, ease: "easeInOut", }}
        >
            {children}
        </motion.div>
    );
};

export default AnimationContainer;
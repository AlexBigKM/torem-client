import React, {useEffect} from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

import styles from './style.module.css';

const AnimationInView = ({ children, inViewClassName }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 }
    };

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div className={classNames(styles.inViewWrapper, inViewClassName)} variants={boxVariant} ref={ref} initial="hidden" animate={control}>
            {children}
        </motion.div>
    );
};

export default AnimationInView;
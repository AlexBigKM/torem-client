import React, {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import './styles.css';

const AnimationInView = ({ children, inViewClassName, animDuration = 0.5, posY, startPosY }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: animDuration }, y: posY },
        hidden: { opacity: 0, scale: 0, y: startPosY }
    };

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div className={classNames('inViewWrapper', inViewClassName)} variants={boxVariant} ref={ref} initial="hidden" animate={control}>
            {children}
        </motion.div>
    );
};

export default AnimationInView;
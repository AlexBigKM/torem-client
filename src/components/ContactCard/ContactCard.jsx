import React from 'react';
import classNames from "classnames";
import infoCardBg from "../../assets/images/infocard-bg.jpg";
import pinsIcon from "../../assets/icons/pins.svg";
import location from "../../assets/icons/location.svg";
import aEmail from "../../assets/icons/a-email.svg";
import phone from "../../assets/icons/phone.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";

import styles from "./style.module.css";

const ContactCard = () => {
    return (
        <div
            className={styles.infoCard}
            style={{
                backgroundImage: `url(${infoCardBg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
            }}
        >
            <div className={styles.infoCardImgWrapper}>
                <img className={styles.infoCardImg} src={pinsIcon} alt="Pins" />
            </div>
            <div className={styles.infoCardContentWrapper}>
                <div className={styles.infoCardContent}>
                    <img className={styles.infoCardContentImgLoc} src={location} alt="Location" />
                    <ul className={styles.infoCardContentList}>
                        <li>Torem</li>
                        <li>Kennedyplein 200 5611ZT, Eindhoven</li>
                        <li>The Netherlands</li>
                    </ul>
                </div>
                <div className={classNames(styles.infoCardContent, styles.infoCardContentListAlign)}>
                    <img className={styles.infoCardContentImgEmail} src={aEmail} alt="Email" />
                    <ul className={styles.infoCardContentList}>
                        <li>Torem@gmail.com</li>
                    </ul>
                </div>
                <div className={classNames(styles.infoCardContent, styles.infoCardContentListAlign)}>
                    <img className={styles.infoCardContentImgPhone} src={phone} alt="Phone" />
                    <ul className={styles.infoCardContentList}>
                        <li>+31 34 595 498</li>
                    </ul>
                </div>
            </div>
            <div className={styles.infoCardContentSocialsWrapper} style={{visibility: 'hidden'}}>
                <img className={styles.infoCardContentSocial} src={instagram} alt="Instagram" />
                <img className={styles.infoCardContentSocial} src={facebook} alt="Facebook" />
                <img className={styles.infoCardContentSocial} src={twitter} alt="Twitter" />
            </div>
        </div>
    );
};

export default ContactCard;
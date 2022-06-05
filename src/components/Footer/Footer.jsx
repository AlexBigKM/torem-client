import React from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import logo from '../../assets/icons/footer-logo.svg';

import styles from './style.scss';
import Headers from "../Headers/Headers";

const Footer = () => {

    const renderYear = () => {
        const date = new Date();
        const year = date.getFullYear();
        return year;
    }

    return (
        <div className={styles.footerWrapper}>
            <ContentContainer>
                <div className={styles.footerList}>
                    <div className={styles.footerListColumn}>
                        <div  className={styles.footerListColumnItem}>home</div>
                        <div  className={styles.footerListColumnItem}>services</div>
                        <div  className={styles.footerListColumnItem}>contacts</div>
                    </div>
                    <div className={styles.footerListColumn}>
                        <div  className={styles.footerListColumnItem}>Software Development</div>
                        <div  className={styles.footerListColumnItem}>IT Consultancy</div>
                        <div  className={styles.footerListColumnItem}>web design</div>
                    </div>
                    <div className={styles.footerListColumnLogo}>
                        <img className={styles.footerListLogo} src={logo} alt={'Torem'}/>
                        <Headers headerStyle={styles.footerListLogoName} children={'Torem'} />
                        <Headers headerStyle={styles.footerListLogoDesc} children={'INFORMATION TECHNOLOGY'} />
                    </div>
                </div>
                <div className={styles.footerListRights}>
                    © {renderYear()}, Torem© All rights reserved
                </div>
            </ContentContainer>
        </div>
    );
};

export default Footer;
import React from 'react';
import backgroundImg from '../../assets/images/background.jpg';
import LinkButton from "../../components/LinkButton/LinkButton";
import Headers from "../../components/Headers/Headers";
import styles from './style.scss';

const sectionStyle = {
    height: "100vh",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
};

const HomePage = () => {
    return (
        <div className={styles.homePageWrapper} style={sectionStyle}>
            <Headers headerStyle={styles.homePageSmallHeader} children={'Information technology'} />
            <Headers headerStyle={styles.homePageHeader} children={'Torem'} />
            <LinkButton linkButtonStyle={styles.homePageLinkButton}  />
        </div>
    );
};

export default HomePage;
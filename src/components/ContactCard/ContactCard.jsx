import React from 'react';
import classNames from 'classnames';
import infoCardBg from '../../assets/images/infocard-bg.jpg';
import pinsIcon from '../../assets/icons/pins.svg';
import location from '../../assets/icons/location.svg';
import aEmail from '../../assets/icons/a-email.svg';
import phone from '../../assets/icons/phone.svg';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import './styles.css';

const ContactCard = () => {
    return (
        <div
            className='infoCard'
            style={{
                backgroundImage: `url(${infoCardBg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
            }}
        >
            <div className='infoCardImgWrapper'>
                <img className='infoCardImg' src={pinsIcon} alt="Pins" />
            </div>
            <div className='infoCardContentWrapper'>
                <div className='infoCardContent'>
                    <img className='infoCardContentImgLoc' src={location} alt="Location" />
                    <ul className='infoCardContentList'>
                        <li>Torem</li>
                        <li>Kennedyplein 200 5611ZT, Eindhoven</li>
                        <li>The Netherlands</li>
                    </ul>
                </div>
                <div className={classNames('infoCardContent', 'infoCardContentListAlign')}>
                    <img className='infoCardContentImgEmail' src={aEmail} alt="Email" />
                    <ul className='infoCardContentList'>
                        <li>Torem@gmail.com</li>
                    </ul>
                </div>
                <div className={classNames('infoCardContent', 'infoCardContentListAlign')}>
                    <img className='infoCardContentImgPhone' src={phone} alt="Phone" />
                    <ul className='infoCardContentList'>
                        <li>+31 34 595 498</li>
                    </ul>
                </div>
            </div>
            <div className='infoCardContentSocialsWrapper' style={{visibility: 'hidden'}}>
                <img className='infoCardContentSocial' src={instagram} alt="Instagram" />
                <img className='infoCardContentSocial' src={facebook} alt="Facebook" />
                <img className='infoCardContentSocial' src={twitter} alt="Twitter" />
            </div>
        </div>
    );
};

export default ContactCard;
import React from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import logo from '../../assets/icons/footer-logo.svg';
import Headers from '../Headers/Headers';
import './styles.css';

const Footer = () => {

    const renderYear = () => {
        const date = new Date();
        const year = date.getFullYear();
        return year;
    }

    return (
        <div className='footerWrapper'>
            <ContentContainer>
                <div className='footerList'>
                    <div className='footerListColumn'>
                        <div  className='footerListColumnItem'>home</div>
                        <div  className='footerListColumnItem'>services</div>
                        <div  className='footerListColumnItem'>contacts</div>
                    </div>
                    <div className='footerListColumn'>
                        <div  className='footerListColumnItem'>Software Development</div>
                        <div  className='footerListColumnItem'>IT Consultancy</div>
                        <div  className='footerListColumnItem'>web design</div>
                    </div>
                    <div className='footerListColumnLogo'>
                        <img className='footerListLogo' src={logo} alt={'Torem'}/>
                        <Headers headerStyle={'footerListLogoName'} children={'Torem'} />
                        <Headers headerStyle={'footerListLogoDesc'} children={'INFORMATION TECHNOLOGY'} />
                    </div>
                </div>
                <div className={'footerListRights'}>
                    © {renderYear()}, Torem© All rights reserved
                </div>
            </ContentContainer>
        </div>
    );
};

export default Footer;
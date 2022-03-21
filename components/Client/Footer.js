import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebookF, 
    faTwitter, 
    faGooglePlusG,
    faInstagram,
    faYoutube,
    faSearch
  } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';
import { Container } from '@mui/material';

const Footer = props =>{
    return(
        <footer>
            <Container>
                <div className={styles['footer']}>
                    <div className={styles['footer__left']}>
                        <img className={styles['footer__left-logo']} src='http://localhost:3000/logo.webp' />
                        <div className={styles['footer__left-address']}>
                            <div className={styles['footer__left-title']}>Address</div>
                            <div className={styles['footer__left-address-text']}>HCM</div>
                        </div>
                        <div className={styles['footer__left-help']}>
                        <div className={styles['footer__left-title']}>Need Help?</div>
                            <div className={styles['footer__left-phone-num']}>Call:........</div>
                        </div>
                        <div className={styles['footer__left-icon']}>
                        <a href='#'><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href='#'><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='#'><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>
                    </div>
                    <div className={styles['footer__center']}>
                        <a  className={styles['footer__center-link-insta']} href="">Follow on instagram</a>
                        <div className={styles['footer__center-gird-img']}>
                        <ul className={styles['footer__center-list-img']}>
                            <li className={styles['footer__center-item-img']}>
                                <a href="">
                                    <img src="https://template.hasthemes.com/alula/alula/assets/img/instagram/a1.webp" alt="" style={{width:"80px" ,height:"80px"}}/>
                                </a></li>
                                <li className={styles['footer__center-item-img']}>
                                <a href="">
                                    <img src="https://template.hasthemes.com/alula/alula/assets/img/instagram/a1.webp" alt="" style={{width:"80px" ,height:"80px"}}/>
                                </a></li>
                        </ul>
                        <ul className={styles['footer__center-list-img']}>
                            <li className={styles['footer__center-item-img']}>
                        <a href="">
                            <img src="https://template.hasthemes.com/alula/alula/assets/img/instagram/a1.webp" alt="" style={{width:"80px" ,height:"80px"}}/>
                        </a></li>
                        <li className={styles['footer__center-item-img']}>
                        <a href="">
                            <img src="https://template.hasthemes.com/alula/alula/assets/img/instagram/a1.webp" alt="" style={{width:"80px" ,height:"80px"}}/>
                        </a></li>
                        </ul>
                        <ul className={styles['footer__center-list-img']}>
                            <li className={styles['footer__center-item-img']}>
                        <a href="">
                            <img src="https://template.hasthemes.com/alula/alula/assets/img/instagram/a1.webp" alt="" style={{width:"80px" ,height:"80px"}}/>
                        </a></li>
                        <li className={styles['footer__center-item-img']}>
                        <a href="">
                            <img src="https://template.hasthemes.com/alula/alula/assets/img/instagram/a1.webp" alt="" style={{width:"80px" ,height:"80px"}}/>
                        </a></li>
                        </ul>
                        
                                                </div>
                    </div>
                    <div className={styles['footer__right']}>
                        <div className={styles['footer__right-title']}>Information</div>
                        <div className={styles['footer__right-info']}>
                        <ul className={styles['footer__right-info-list']}>
                            <li className={styles['footer__right-info-item']}><a href="">About Us</a></li>
                            <li className={styles['footer__right-info-item']}><a href="">Contact Us</a></li>
                            <li className={styles['footer__right-info-item']}><a href="">Specials</a></li>
                            <li className={styles['footer__right-info-item']}><a href="">Terms & Conditions</a></li>
                            <li className={styles['footer__right-info-item']}><a href="">Affiliate</a></li>
                        </ul>
                        <ul className={styles['footer__right-list']}>
                            <li className={styles['footer__right-info-item']}><a href="">Privacy Policy</a></li>
                            <li className={styles['footer__right-info-item']}><a href="">Gift Centificates</a></li>
                            <li className={styles['footer__right-info-item']}><a href="">Delivery Information</a></li>
                            <li className={styles['footer__right-info-item']}><a href="">Brands</a></li>
                            <li className={styles['footer__right-info-item']}><a href="">Site Map</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
export default Footer;
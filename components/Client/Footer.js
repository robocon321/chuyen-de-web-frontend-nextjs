
import React, { useContext } from "react";
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
import { AuthContext } from "../../contexts/providers/AuthProvider";

const Footer = props =>{
    const { t } = useContext(AuthContext);
    return(
        <footer>
            <Container>
                <div className={styles['footer']}>
                    <div className={styles['footer__left']}>
                        <img className={styles['footer__left-logo']} src='http://localhost:3000/logo.webp' />
                        <div className={styles['footer__left-address']}>
                            <div className={styles['footer__left-title']}>{t('address')}</div>
                            <div className={styles['footer__left-address-text']}>Lã Xuân Oai, Tân Nhơn Phú A, Quận 9, TP.HCM</div>
                        </div>
                        <div className={styles['footer__left-help']}>
                        <div className={styles['footer__left-title']}>{t('need_help')}</div>
                            <div className={styles['footer__left-phone-num']}>{t('call')}: 0354599999</div>
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
                        <a  className={styles['footer__center-link-insta']} href="">{t('follow_instagram')}</a>
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
                        <div className={styles['footer__right-title']}>{t('information')}</div>
                        <div className={styles['footer__right-info']}>
                        <ul className={styles['footer__right-info-list']}>
                            <li className={styles['footer__right-info-item']}><a href="">{t('about_us')}</a></li>
                            <li className={styles['footer__right-info-item']}><a href="">{t('contact_us')}</a></li>
                            <li className={styles['footer__right-info-item']}><a href="">{t('specials')}</a></li>
                            <li className={styles['footer__right-info-item']}><a href="">{t('terms_conditions')}</a></li>
                            <li className={styles['footer__right-info-item']}><a href="">{t('affiliate')}</a></li>
                        </ul>
                        <ul className={styles['footer__right-list']}>
                            <li className={styles['footer__right-info-item']}><a href="">{t('privacy_policy')}</a></li>
                            <li className={styles['footer__right-info-item']}><a href="">{t('gift_centificates')}</a></li>
                            <li className={styles['footer__right-info-item']}><a href="">{t('delivery_information')}</a></li>
                            <li className={styles['footer__right-info-item']}><a href="">{t('brands')}</a></li>
                            <li className={styles['footer__right-info-item']}><a href="">{t('site_map')}</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
// =======
// import React from 'react';

// const Footer = (props) => {
//   return <div></div>
// }

// >>>>>>> 45126307d1d7707c22a6b25baa9b563460b78a6e
export default Footer;
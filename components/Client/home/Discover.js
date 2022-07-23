import React, { useContext } from "react";
import styles from "./Discover.module.css";
import Image from 'next/image';
import { AuthContext } from "../../../contexts/providers/AuthProvider";

const Discover = props => {
    const { t } = useContext(AuthContext);

    return (
        <div className={styles.discover}>
            <div className={styles['discover-intro']}>
                <h3 className={styles['text-h3']}>{t('garden_store')}</h3>
                <h4 className={styles['text-h4']}>{t('big_saving')}</h4>
                <p className={styles['text-p']}>{t('type_garden_tool')}</p>
                <div className={styles['intro-btn']}><button >{t('discover_now')}</button></div>
                
            </div>
            <div  style={{width: '100%', height: '100%', position: 'relative'}} className={styles['image']}>
                <Image
                    src="/banner-big2.webp"
                    alt="Not found"
                    layout='fill'
                />
            </div>
        </div>
    )
}
export default Discover;
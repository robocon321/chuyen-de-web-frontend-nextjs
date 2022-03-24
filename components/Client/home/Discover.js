import React from "react";
import styles from "./Discover.module.css";
import Image from 'next/image';

const Discover = props => {
    return (
        <div className={styles.discover}>
            <div className={styles['discover-intro']}>
                <h3 className={styles['text-h3']}>Garden Store</h3>
                <h4 className={styles['text-h4']}>big saving on</h4>
                <p className={styles['text-p']}>All type fo garden tools with wide of varieties</p>
                <div className={styles['intro-btn']}><button >Discover Now</button></div>
                
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
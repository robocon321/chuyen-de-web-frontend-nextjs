import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import React from "react";
import styles from './NewProduct.module.css';
import { Swiper, SwiperSlide } from "swiper/react";

const products = [
    {
        id:0,
        title: 'Cillum dolore garden tools',
        numStart: 4,
        newPrice: '100.00',
        oldPrice: '120.00',
        image:'https://template.hasthemes.com/alula/alula/assets/img/products/medium2.webp',
        sale:'10'
    },
    {
        id:1,
        title: 'Cillum dolore garden tools',
        numStart: 4,
        newPrice: '100.00',
        oldPrice: '120.00',
        image:'https://template.hasthemes.com/alula/alula/assets/img/products/medium2.webp',
        sale:'20'
    },
    {
        id:2,
        title: 'Cillum dolore garden tools',
        numStart: 4,
        newPrice: '100.00',
        oldPrice: '120.00',
        image:'https://template.hasthemes.com/alula/alula/assets/img/products/medium2.webp',
        sale:'10'
    },
    {
        id:3,
        title: 'Cillum dolore garden tools',
        numStart: 4,
        newPrice: '100.00',
        oldPrice: '120.00',
        image:'https://template.hasthemes.com/alula/alula/assets/img/products/medium2.webp',
        sale:'20'
    },
    {
        id:4,
        title: 'Cillum dolore garden tools',
        numStart: 4,
        newPrice: '100.00',
        oldPrice: '120.00',
        image:'https://template.hasthemes.com/alula/alula/assets/img/products/medium2.webp',
        sale:'20'
    },
    {
        id:5,
        title: 'Cillum dolore garden tools',
        numStart: 4,
        newPrice: '100.00',
        oldPrice: '120.00',
        image:'https://template.hasthemes.com/alula/alula/assets/img/products/medium2.webp',
        sale:'20'
    }
]

const NewProduct = props => {
    return (
        <div className={styles.newProduct}>
            <div className={styles['newProduct-top']}>
                <div className={styles['newProduct-lable']}>New Propducts</div>
                <div className={styles['newProduct-page-control']}>
                    <a href="" className={styles['newProduct-page-btn']}>
                        <i className="newProduct-page-icon fas fa-chevron-left"></i>

                    </a>
                    <a href="" className={styles['newProduct-page-btn']}>
                        <i className="newProduct-page-icon fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
            <div className={styles['newProduct-list']}>
                <div className={styles['newProduct-list-row']}>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            products.map(item=>(
                            <SwiperSlide key={item.id}>
                                 <div  className={styles['newProduct-item']}>
                                    <Image
                                        className={styles['newProduct-img']}
                                        src="/medium1.webp"
                                        alt="Not found"
                                        width={220}
                                        height={220}
                                    />
                                    <div className={styles['newProduct-info']}>
                                        <div className={styles['newProduct-title']} >
                                            <a href="" >{item.title}</a>
                                        </div>
                                        <div className={styles['newProduct-ratting']}>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className={styles['newProduct-cart']}>
                                            <a href="">
                                            <i className="fas fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                        <div className={styles['newProduct-price']}>
                                            <span className={styles['newProduct-new-price']}>${item.newPrice}</span>
                                            <span className={styles['newProduct-old-price']}>${item.oldPrice}</span>
                                        </div>
                                    </div>
                                    <div className={styles['newPRoduct-sale-off']}>
                                        -{item.sale}%
                                    </div>
                                    <div className={styles['newProduct-option']}>
                                        <a className={styles['icon-eye','icon']}>
                                            <i className="fas fa-eye"></i>
                                        </a>
                                        <a className={styles['icon-heart','icon']}>
                                            <i className="fas fa-heart"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>))
                    
                   
                        }
                    </Swiper>
                </div>
                <div className={styles['newProduct-list-row']}>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            products.map(item=>(
                            <SwiperSlide key={item.id}>
                                 <div  className={styles['newProduct-item']}>
                                    <Image
                                        className={styles['newProduct-img']}
                                        src="/medium6.webp"
                                        alt="Not found"
                                        width={220}
                                        height={220}
                                    />
                                    <div className={styles['newProduct-info']}>
                                        <div className={styles['newProduct-title']} >
                                            <a href="" >{item.title}</a>
                                        </div>
                                        <div className={styles['newProduct-ratting']}>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className={styles['newProduct-cart']}>
                                            <a href="">
                                            <i className="fas fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                        <div className={styles['newProduct-price']}>
                                            <span className={styles['newProduct-new-price']}>${item.newPrice}</span>
                                            <span className={styles['newProduct-old-price']}>${item.oldPrice}</span>
                                        </div>
                                    </div>
                                    <div className={styles['newPRoduct-sale-off']}>
                                        -{item.sale}%
                                    </div>
                                    <div className={styles['newProduct-option']}>
                                        <a className={styles['icon-eye','icon']}>
                                            <i className="fas fa-eye"></i>
                                        </a>
                                        <a className={styles['icon-heart','icon']}>
                                            <i className="fas fa-heart"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>))
                    
                        }
                    </Swiper>
                </div>
            </div>
            
        </div>
    )
}

export default NewProduct;
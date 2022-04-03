import React from "react";
import Image from "next/image";
import styles from './SellerAndRelated.module.css';
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
        id:3,
        title: 'Cillum dolore garden tools',
        numStart: 4,
        newPrice: '100.00',
        oldPrice: '120.00',
        image:'https://template.hasthemes.com/alula/alula/assets/img/products/medium2.webp',
        sale:'20'
    }
]


const SellerAndRelated = props =>{
    return(
        <div className={styles.seller}>
            <div className={styles['top']}>
            <div className={styles['lable']}>Best Sellers</div>
                <div className={styles['page-control']}>
                    <a href="" className={styles['page-btn']}>
                        <i className="page-icon fas fa-chevron-left"></i>

                    </a>
                    <a href="" className={styles['page-btn']}>
                        <i className="page-icon fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
            <div className={styles['list']}>
                <div className={styles['list-row']}>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            products.map(item=>(
                            <SwiperSlide key={item.id}>
                                 <div  className={styles['item']}>
                                <Image
                                className={styles['img']}
                                src="/medium5.webp"
                                alt="Not found"
                                width={300}
                                height={300}
                            />
                            <div className={styles['info']}>
                                <div className={styles['title']} >
                                    <a href="" >{item.title}</a>
                                </div>
                                <div className={styles['ratting']}>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className={styles['cart']}>
                                    <a href="">
                                    <i className="fas fa-shopping-cart"></i>
                                    </a>
                                </div>
                                <div className={styles['price']}>
                                    <span className={styles['new-price']}>${item.newPrice}</span>
                                    <span className={styles['old-price']}>${item.oldPrice}</span>
                                </div>
                            </div>
                            <div className={styles['sale-off']}>
                                -{item.sale}%
                            </div>
                            <div className={styles['option']}>
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
                    {/* {
                    products.map(item =>{
                        return(
                            <div key={item.id} className={styles['item']}>
                                <Image
                                className={styles['img']}
                                src="/medium5.webp"
                                alt="Not found"
                                width={300}
                                height={300}
                            />
                            <div className={styles['info']}>
                                <div className={styles['title']} >
                                    <a href="" >{item.title}</a>
                                </div>
                                <div className={styles['ratting']}>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className={styles['cart']}>
                                    <a href="">
                                    <i className="fas fa-shopping-cart"></i>
                                    </a>
                                </div>
                                <div className={styles['price']}>
                                    <span className={styles['new-price']}>${item.newPrice}</span>
                                    <span className={styles['old-price']}>${item.oldPrice}</span>
                                </div>
                            </div>
                            <div className={styles['sale-off']}>
                                -{item.sale}%
                            </div>
                            <div className={styles['option']}>
                                <a className={styles['icon-eye','icon']}>
                                    <i className="fas fa-eye"></i>
                                </a>
                                <a className={styles['icon-heart','icon']}>
                                    <i className="fas fa-heart"></i>
                                </a>
                            </div>
                            </div>
                        )
                    })
                    } */}
                </div>
            </div>
        </div>
    )
}
export default SellerAndRelated;
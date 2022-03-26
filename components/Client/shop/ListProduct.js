import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import React from "react";
import { Grid } from "swiper";
import styles from './ListProduct.module.css'
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
    
]
const ListProduct = props =>{
    return(
        <div className={styles.listProduct}>
             <div  style={{width: '100%', height: '220px', position: 'relative'}} className={styles['image']}>
            <Image
                src="/shop-banner.webp"
                alt="Not Found"
                layout='fill'
            />
            </div>
            <div className={styles['display-product']}>
                <a href=""><i className="fas fa-th-large"></i></a>
                <a href=""><i className="fas fa-th"></i></a>
                <a href=""><i className="fas fa-list"></i></a>
                <span>Showing 1 to 9 of 15 (2 Pages)</span>

                
            </div>
            <div className={styles['list']}>
                <div className={styles['list-row']}>
                    {
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
                    }
                </div>
                <div className={styles['list-row']}>
                    {
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
                    }
                </div>
                <div className={styles['list-row']}>
                    {
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
                    }
                </div>
            </div>
            <div className={styles['list-num']}>
                <div>
                <span>1</span>
                <span>2</span>
                <span><i className="fa-solid fa-chevron-right"></i></span>
                <span><i className="fa-solid fa-chevron-right">|</i></span>
                </div>
                <div>
                    <span>Showing 1 to 9 of 15 (2 Pages)</span>
                </div>
            </div>
        </div>
    )
}
export default ListProduct;
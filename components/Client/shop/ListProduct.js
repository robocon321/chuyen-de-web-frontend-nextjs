import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import Reac, {useState} from "react";
import { Grid } from '@mui/material';
import styles from './ListProduct.module.css'
const products = [
    {
        id:0,
        title: 'Cillum dolore garden tools',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis autem consequuntur tempora magnam possimus sunt.',
        numStart: 4,
        newPrice: '100.00',
        oldPrice: '120.00',
        image:'https://template.hasthemes.com/alula/alula/assets/img/products/medium2.webp',
        sale:'10',
        available:'Out of stock'
    },
    {
        id:1,
        title: 'Cillum dolore garden tools',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis autem consequuntur tempora magnam possimus sunt.',
        numStart: 4,
        newPrice: '100.00',
        oldPrice: '120.00',
        image:'https://template.hasthemes.com/alula/alula/assets/img/products/medium2.webp',
        sale:'20',
        available:'Out of stock'
    },
    {
        id:2,
        title: 'Cillum dolore garden tools',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis autem consequuntur tempora magnam possimus sunt.',
        numStart: 4,
        newPrice: '100.00',
        oldPrice: '120.00',
        image:'https://template.hasthemes.com/alula/alula/assets/img/products/medium2.webp',
        sale:'10',
        available:'Out of stock'
    },
    {
        id:3,
        title: 'Cillum dolore garden tools',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis autem consequuntur tempora magnam possimus sunt.',
        numStart: 4,
        newPrice: '100.00',
        oldPrice: '120.00',
        image:'https://template.hasthemes.com/alula/alula/assets/img/products/medium2.webp',
        sale:'10',
        available:'Out of stock'
    },
    {
        id:4,
        title: 'Cillum dolore garden tools',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis autem consequuntur tempora magnam possimus sunt.',
        numStart: 4,
        newPrice: '100.00',
        oldPrice: '120.00',
        image:'https://template.hasthemes.com/alula/alula/assets/img/products/medium2.webp',
        sale:'10',
        available:'Out of stock'
    },
    {
        id:5,
        title: 'Cillum dolore garden tools',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis autem consequuntur tempora magnam possimus sunt.',
        numStart: 4,
        newPrice: '100.00',
        oldPrice: '120.00',
        image:'https://template.hasthemes.com/alula/alula/assets/img/products/medium2.webp',
        sale:'10',
        available:'Out of stock'
    },
    {
        id:6,
        title: 'Cillum dolore garden tools',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis autem consequuntur tempora magnam possimus sunt.',
        numStart: 4,
        newPrice: '100.00',
        oldPrice: '120.00',
        image:'https://template.hasthemes.com/alula/alula/assets/img/products/medium2.webp',
        sale:'10',
        available:'Out of stock'
    },
    {
        id:7,
        title: 'Cillum dolore garden tools',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis autem consequuntur tempora magnam possimus sunt.',
        numStart: 4,
        newPrice: '100.00',
        oldPrice: '120.00',
        image:'https://template.hasthemes.com/alula/alula/assets/img/products/medium2.webp',
        sale:'10',
        available:'Out of stock'
    },
    {
        id:8,
        title: 'Cillum dolore garden tools',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis autem consequuntur tempora magnam possimus sunt.',
        numStart: 4,
        newPrice: '100.00',
        oldPrice: '120.00',
        image:'https://template.hasthemes.com/alula/alula/assets/img/products/medium2.webp',
        sale:'10',
        available:'Out of stock'
    },
    
]

const ListProduct = props =>{
    const [numCol, setNumCol] = useState(4);
    
    const changeNum = (num) =>  {
        setNumCol(num);
        var gridDis = num;
        var a,b;
        if(gridDis==0){
            a = document.getElementById('list');
            b = document.getElementById('grid');
            a.style.display='block';
            b.style.display='none';
        } else{
            a = document.getElementById('list');
            b = document.getElementById('grid');
            a.style.display='none';
            b.style.display='block';
        }
    };

    return(
        <div className={styles.display}>
             <div  style={{width: '100%', height: '220px', position: 'relative'}} className={styles['image']}>
            <Image
                src="/shop-banner.webp"
                alt="Not Found"
                layout='fill'
            />
            </div>
            <div className={styles['display-product']}>
                <div className={styles['display-style']}>
                <span className={styles['icon-3']}>
                    <button onClick={(e)=>changeNum(4)} ><i className="fas fa-th-large"></i></button>
                    <div className={styles['dis-3']}>3</div>
                </span>
                <span className={styles['icon-4']}>
                    <button onClick={(e)=>changeNum(3)} ><i className="fas fa-th"></i></button>
                    <div className={styles['dis-4']}>4</div>
                </span>
                <span className={styles['icon-list']}>
                    <button onClick={(e)=>changeNum(0)}><i className="fas fa-list"></i></button>
                    <div className={styles['dis-list']}>List</div>
                </span>
                </div>
                <span>Showing 1 to 9 of 15 (2 Pages)</span>
                <div className={styles['show']}>
                <span>Show:</span>
                <select name="nums" id="nums">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                </select>
                </div>
                <div className={styles['sortby']}>
                <span>Sort by:</span>
                <select name="sort" id="sort">
                    <option value="default">Default</option>
                    <option value="name">Name (A-Z)</option>
                    <option value="price">Price (min-max)</option>
                    <option value="color">Color</option>
                </select>
                </div>
            </div>
            <div className={styles['list']} id="grid">
            <Grid container columns={12}>
                <div className={styles['list-row']}>
                    {
                        products.map(item =>{
                            return(
                                <Grid item key={item.id} xs={numCol}>
                                <div key={item.id} id="item" className={styles['item']}>
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
                            </Grid>
                            )
                        })
                    }
                </div>
                </Grid>
               
            </div>
            <div className={styles['list-product']} id="list">
                {
                    products.map(item=>{
                        return(
                            <Grid key={item.id} container>
                            <div  className={styles['list-item']}>
                                <Grid item xs={3}>
                                <Image
                                        className={styles['item-img']}
                                        src="/medium5.webp"
                                        alt="Not found"
                                        width={350}
                                        height={350}
                                
                                    />
                                    <div className={styles['item-sale-off']}>
                                        -{item.sale}%
                                    </div>
                                    </Grid>
                                    <Grid item xs={9} className={styles['info-tran']}>
                                    <div className={styles['item-info']}>
                                    <div className={styles['item-title']} >
                                        <a href="" >{item.title}</a>
                                    </div>
                                    <div className={styles['item-ratting']}>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <div className={styles['item-description']}>
                                        <span>{item.description}</span>
                                    </div>
                                    
                                    </div>
                                <div className={styles['tran']}>
                                    <div className={styles['available']}>
                                        <span>Available:</span>
                                        <span className={styles['available-text']}>{item.available}</span>
                                    </div>
                                    <div className={styles['item-price']}>
                                        <span className={styles['item-new-price']}>${item.newPrice}</span>
                                        <span className={styles['item-old-price']}>${item.oldPrice}</span>
                                    </div>
                                    <div className={styles['btn-addcart']}>
                                        <button>Add to cart</button>
                                    </div>
                                    <div className={styles['item-option']}>
                                        <a className={styles['icon-eye','icon']}>
                                            <i className="fas fa-eye"></i>
                                        </a>
                                        <a className={styles['icon-heart','icon']}>
                                            <i className="fas fa-heart"></i>
                                        </a>
                                        </div>
                                </div>
                               
                                </Grid>
                            </div>
                            </Grid>
                        )
                    })
                    
                }
            </div>
            <div className={styles['list-num']}>
                <div className={styles['page-num']}>
                <a className={styles['page-btn-choose']}>1</a>
                <a className={styles['page-btn']}>2</a>
                <a className={styles['page-next']}><i className="fa-solid fa-chevron-right"></i></a>
                <a className={styles['page-end']}><i className="fa-solid fa-chevron-right"><span>|</span></i></a>
                </div>
                <div className={styles['page-text']}>
                    <span>Showing 1 to 9 of 15 (2 Pages)</span>
                </div>
            </div>
        </div>
    )
}
export default ListProduct;
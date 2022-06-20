import Image from 'next/image';
import React, {useState, useContext,useEffect } from "react";
import { Grid } from '@mui/material';
import styles from './ListProduct.module.css'
import { ShopContext } from "../../../contexts/providers/ShopProvider";
import Rating from "../../common/Rating";
import Link from 'next/link';
import { useRouter } from 'next/router';

const ListProduct = props =>{
    const{shopState,loadProduct4} = useContext(ShopContext)
    //router
    const router = useRouter();
    const [numCol, setNumCol] = useState(4);
    const shop = shopState.data;
    //load product page
    const currentPage = shopState.infoPages.number;
    const totalPages = shopState.infoPages.totalPages;
    const arrNum = Array.from(Array(totalPages),(_,index)=>index+1)
    const [size,setSize] = useState(12);
    useEffect(() => {
        loadPage(currentPage,size);
    }, []);
    const loadPage=(num,size)=>{
        loadProduct4(num,size)
    }
    // console.log(shop[1].post.id)
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
                    <button onClick={(e)=>changeNum(4)} ><i className="fa-solid fa-grip"></i></button>
                    <div className={styles['dis-3']}>3</div>
                </span>
                <span className={styles['icon-4']}>
                    <button onClick={(e)=>changeNum(3)} ><i className="fas fa-th"></i></button>
                    <div className={styles['dis-4']}>4</div>
                </span>
                <span className={styles['icon-list']}>
                    <button onClick={(e)=>changeNum(0)}><i className="fa-solid fa-bars"></i></button>
                    <div className={styles['dis-list']}>List</div>
                </span>
                </div>
                <span>Showing 1 to {shopState.infoPages.size} of {shopState.infoPages.totalElements} ({totalPages} Pages)</span>
                <div className={styles['show']}>
                <span>Show:</span>
                <select name="nums" id="nums"  onChange={(e)=>{
                    loadPage(currentPage,e.target.value)
                    setSize(e.target.value) 
                    window.scrollTo(0, 0);                
                    }}>
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
                    {shop &&
                        shop.map((item) =>{
                            return(
                                <Grid item key={item.id} xs={5} md={numCol}>
                                <div key={item.id} id="item" className={styles['item']}>
                                    <Image
                                        className=""
                                        src={item.post.thumbnail}
                                        alt="Not found"
                                        width={300}
                                        height={300}
                                
                                    />
                                    <div className={styles["info"]}>
                      <div className={styles["title"]}>
                        <Link href={{ pathname: '/shop/[slug]', query: { slug: item.post.slug}, } }>
                        <a href="">{item.post.title}</a></Link>
                      </div>
                      <Rating rating={item.post.averageRating} />
                      <div className={styles["cart"]}>
                        <a href="">
                          <i className="fas fa-shopping-cart"></i>
                        </a>
                      </div>
                      <div className={styles["price"]}>
                        <span className={styles["new-price"]}>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(item.minPrice)}
                        </span>
                        <span className={styles["old-price"]}>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(item.maxPrice)}
                        </span>
                      </div>
                    </div>
                    {Math.round(
                      ((item.maxPrice - item.minPrice) * 100) / item.maxPrice
                    ) != 0 && (
                      <div className={styles["sale-off"]}>
                        -
                        {Math.round(
                          ((item.maxPrice - item.minPrice) * 100) /
                            item.maxPrice
                        )}
                        %
                      </div>
                    )}
                    <div className={styles["option"]}>
                      <a className={styles[("icon-eye", "icon")]}>
                        <i className="fas fa-eye"></i>
                      </a>
                      <a className={styles[("icon-heart", "icon")]}>
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
                    shop.map(item=>{
                        return(
                            <Grid key={item.id} container>
                            <div  className={styles['list-item']}>
                                <Grid item xs={5} sm={5} md={3} >
                                <Image
                                        className={styles['item-img']}
                                        src={item.post.thumbnail}
                                        alt="Not found"
                                        width={350}
                                        height={350}
                                
                                    />
                                    {Math.round(
                                    ((item.maxPrice - item.minPrice) * 100) / item.maxPrice
                                        ) != 0 && (
                                    <div className={styles["item-sale-off"]}>
                                        -
                                        {Math.round(
                                        ((item.maxPrice - item.minPrice) * 100) /
                                          item.maxPrice
                                       )}
                                       %
                                     </div>
                                    )}
                                    </Grid>
                                    <Grid item xs={7} md={9} className={styles['info-tran']}>
                                    <div className={styles['item-info']}>
                                    <div className={styles['item-title']} >
                                        <a href="" >{item.post.title}</a>
                                    </div>
                                    <Rating rating={item.post.averageRating} />
                                    <div className={styles['item-description']}>
                                        <span>{item.post.description}</span>
                                    </div>
                                    
                                </div>
                                <div className={styles['tran']}>
                                    <div className={styles['available']}>
                                        <span>Available:</span>
                                        <span className={styles['available-text']}></span>
                                    </div>
                                    <div className={styles['item-price']}>
                                        <span className={styles['item-new-price']}>
                                            {new Intl.NumberFormat("vi-VN", {
                                              style: "currency",
                                              currency: "VND",
                                            }).format(item.minPrice)}
                                    </span>
                                        <span className={styles['item-old-price']}>
                                        {new Intl.NumberFormat("vi-VN", {
                                          style: "currency",
                                          currency: "VND",
                                        }).format(item.maxPrice)}
                                        </span>
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
                    {
                        currentPage>0?(<a className={styles['page-prev']} onClick={()=>{currentPage--
                            loadPage(currentPage,size);
                            window.scrollTo(0, 0);
                           
                        }}><i className="fa-solid fa-chevron-left"></i></a>): (<a></a>)
                    }
                    {
                        arrNum.map(item=>{
                            if(item!=(shopState.infoPages.number+1)){
                            return(
                            <a className={styles['page-btn']} key={item} onClick={()=>{loadPage(item-1,size); window.scrollTo(0, 0);}}>{item}</a>
                            )}else{
                                return(<a className={styles['page-btn-choose']} key={item} >{item}</a>)
                            }
                               
                            
                        })
                    }
                    {currentPage!=(totalPages-1)?(<a className={styles['page-next']} onClick={()=>{currentPage++
                    loadPage(currentPage,size);
                    window.scrollTo(0, 0);
                }}><i className="fa-solid fa-chevron-right"></i></a>):(<a></a>)}
                <a className={styles['page-end']}><i className="fa-solid fa-chevron-right" onClick={()=>{loadPage(totalPages-1,size); window.scrollTo(0, 0);}}><span>|</span></i></a>
                </div>
                <div className={styles['page-text']}>
                    <span>Showing 1 to {shopState.infoPages.size} of {shopState.infoPages.totalElements} ({totalPages} Pages)</span>
                </div>
            </div>
        </div>
    )
}
export default ListProduct;
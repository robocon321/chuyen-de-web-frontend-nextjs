import React,{ useState, useContext, useEffect} from 'react';
import Image from 'next/image';
import styles from './ProductDetail.module.css';
import { Grid } from '@mui/material';
import { Swiper,SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import Input from '../../../common/Input';
import { useRouter } from 'next/router';
import { ShopContext } from "../../../../contexts/providers/ShopProvider";
import Rating from "../../../common/Rating";
import Loading from '../../../common/Loading';

const listRatiting = [
    {
        id:0,
        ratting:5,
        nameUser:'Rashed Mahmud',
        content:'Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli'
    },
    {
        id:1,
        ratting:3,
        nameUser:'Rashed Mahmud',
        content:'Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli'
    },
    {
        id:2,
        ratting:4,
        nameUser:'Rashed Mahmud',
        content:'Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli'
    },
    {
        id:3,
        ratting:5,
        nameUser:'Rashed Mahmud',
        content:'Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli'
    },
    {
        id:4,
        ratting:0,
        nameUser:'Rashed Mahmud',
        content:'Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli'
    },
]

const ProductDetail = (props) =>{
    const{shopState,loadProductDetail,loadPostDetail,addCart} = useContext(ShopContext)
    const router = useRouter();
    const {slug} = router.query;
    const product = shopState.productDetail
    const post = shopState.postDetail
    const listImgs = []
    const [imageSelected,setImageSelected]=useState();
    // const[quantity,setQuantity] = useState(1);
  const onChangeMainImage = (image) => {
    setImageSelected(image);
    // console.log(imageSelected)
  }
    // console.log(post.thumbnail)
    
    useEffect(() => {
        if(!router.isReady) return;
        loadDetail(slug)
        }, [router.isReady,post.thumbnail]);
    const loadDetail=(s)=>{
        loadProductDetail(s)
        loadPostDetail(s)
    }
    if(post.thumbnail===undefined){

    }else{
        listImgs= post.galleryImage.split(",")
        //  onChangeMainImage(post.thumbnail);
    }
    // post.thumbnail===undefined?null:(listImgs= post.galleryImage.split(","))
    // console.log(listImgs)
 

   const change =(num)=>{
    const a = document.getElementById('description');
    const b = document.getElementById('review');
    const des = document.getElementById('des-link');
    const rev = document.getElementById('rev-link');
    if(num==0){
        a.style.display='block';
        b.style.display='none';
        des.style.borderBottom = '2px solid var(--primary_color)';
        rev.style.borderBottom = 'none';
        des.style.color = '#000';
        rev.style.color = '#ccc';
    }else{
        a.style.display='none';
        b.style.display='block';
        des.style.borderBottom = 'none';
        rev.style.borderBottom = '2px solid var(--primary_color)';
        des.style.color = '#ccc';
        rev.style.color = '#000';
    }
   }
   
  const numstar = (num)=>{
      return(<span className={styles['numStar']}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <span>({num})</span>
      </span>)
  }
    if(shopState.data.length===0){
        return <Loading isLoading={true}/>
    }
    return(
      <div className={styles.container}> 
        <Grid container spacing={2}>
           <Grid item xs={12} md={6}>
               <div  >
               {post.thumbnail===undefined?null:<Image
               className={styles['image-zoom']}
                src={imageSelected==null?post.thumbnail:imageSelected}
                // src={"/medium1.webp"}
                alt='Not found'
                width={600}
                height={540}
               />}
               
               </div>
                <Swiper
                    className='swiper'
                    spaceBetween={0}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}                    
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        700:{
                            slidesPerView:4,
                            
                        }
                    }}
                >
                    {
                        listImgs.map((item,index)=>{
                            let link_string = item.replace('[','');
                            return <SwiperSlide className={styles['swiper-slide']} key={index}>
                                <div className={'more'} style={{width: '120px', height: '120px', position: 'relative'}} >
                                 <Image
                                        onClick={()=>onChangeMainImage(link_string)}
                                        src={link_string}
                                        alt="Not found"
                                        layout='fill'
                                    />
                                   
                                </div>
                              
                            </SwiperSlide>
                            }
                        )
                    }
                </Swiper>
           </Grid>
           <Grid item xs={12} md={6}>
                    <div className={styles['info-product']}>
                        <div className={styles['tag']}>Tags,Plant,Garden</div>
                        <div className={styles['title']}>{post.title}</div>
                        <div className={styles['ratting']}>
                        <Rating rating={post.averageRating} />
                            <span className={styles['numReview']}>(1 Review)</span>
                            <a href="#">Write A Review</a>
                        </div>
                        <div className={styles['price']}>
                            <span className={styles['new-price']}>
                            {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(product.minPrice)}
                            </span>
                            <span className={styles['old-price']}>
                            {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(product.maxPrice)}
                            </span>
                        </div>
                        <div className={styles['more']}>    
                            <div>Ex Tax: <span className={styles['text-pri']}>$95.00</span></div>
                            <div>Brand: <span className={styles['text-pri']}>Brac</span></div>
                            <div>Product Code: <span className={styles['text-pri']}>abcd</span></div>
                            <div>Availablility: <span className={styles['text-pri']}> In stock</span></div>
                        </div>
                        <hr />
                        <div className={styles['about']}>
                        <p>{post.content}</p>
                        </div>
                        <hr />
                        <div className={styles['quantity']}>
                            {/* <span className={styles['qty-text']}>Qty</span>
                            <div className={styles['inc-dev']}>
                                <input type="text" defaultValue={quantity}/>
                                <button  className={styles['inc-btn']} onClick={()=>setQuantity(quantity+1)}>+</button>
                                <button className={styles['dev-btn']} onClick={()=>quantity!=0?setQuantity(quantity-1):quantity}>-</button>
                            </div> */}
                            <button onClick={()=>addCart(product.id)} className={styles['add-cart']}>+ Add to cart</button>
                        </div>
                        <div className={styles['compare-wish']}>
                            <span className={styles['compare']}><i className="fa-solid fa-sliders"></i>Compare This Product</span>
                            <span className={styles['wish']}><i className="fa fa-heart" aria-hidden="true"></i> Add to Wishlist</span>
                        </div>
                        <hr />
                        <div className={styles['feature']}>
                            <div className={styles['item-feature']}>
                                <Image
                                    className={styles['item-img']}
                                    src='/free-shipping.webp'
                                    alt='Not found'
                                    width={40}
                                    height={30}
                                />
                                <div className={styles['item-text']}>
                                <p>Free Shipping </p>
                                <p>Ships Today</p>
                                </div>
                            </div>
                            <div className={styles['item-feature']}>
                                <Image
                                    src="/return.webp"
                                    alt='Not found'
                                    width={40}
                                    height={30}
                                />
                                <div className={styles['item-text']}>
                                <p>Easy</p>
                                <p>Returns</p>
                                </div>
                            </div>
                            <div className={styles['item-feature']}>
                                <Image
                                    src={"/guarantee.webp"}
                                    alt='Not found'
                                    width={40}
                                    height={30}
                                />
                                <div className={styles['item-text']}>
                                <p>Lowest Price</p>
                                <p>Guarantee</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className={styles['share']}>
                            <h4>SHARE THIS PRODUCT</h4>
                            <div className={styles['list-icon']}>
                                <span className={styles['icon-twi']}><i className="fa-brands fa-twitter"></i></span>
                                <span className={styles['icon-face']}><i className="fa-brands fa-facebook-f"></i></span>
                                <span className={styles['icon-google']}><i className="fa-brands fa-google-plus-g"></i></span>
                            </div>
                        </div>

                    </div>                   
            
           </Grid>
       </Grid>
       <div className={styles['description-review']}>
           <nav>
               <a href="#a"  className={styles['des-link']} id='des-link' onClick={(e)=>change(0)}>Description</a>
               <a href="#a" className={styles['rev-link']} id='rev-link' onClick={(e)=>change(1)}>Review</a>
           </nav>
           <hr />
           <div className={styles['description']} id="description">
           {post.content}
           </div>
           <div className={styles['review']} id="review">
                <div className={styles['ratting']}>
                    <h4>4.5 <span>(Overall)</span></h4>
                    <span>Based on 9 Comments</span><br />
                    {numstar(5)}
                    {numstar(4)}
                    {numstar(2)}
                    {numstar(0)}
                </div>
                <div className={styles['ratting-list']}>
                   {listRatiting.map(item=>(
                       <div className={styles['ratting-item']}  key={item.id}>
                           <span className={styles['user-ratting']}>{item.nameUser}</span>
                           {numstar(item.ratting)}
                           <p className={styles['content-ratting']}>{item.content}</p>
                       </div>
                   ))
                   }
                </div>
                <div className={styles['add-comment']}>
                    <h3>ADD YOUR COMMENTS</h3>
                    <span><b>Ratting:</b></span>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <Grid container columnSpacing={2}>
                        <Grid item xs={12} md={6}>
                            <Input
                            title='Name:'
                            placeholder='Name'
                            name='name'
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Input
                            title='Email:'
                            placeholder='Email'
                            name='email'
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <Input
                            title='Your Review:'
                            placeholder='Write a review'
                            name='review'
                            type='textarea'
                            />
                        </Grid>
                    </Grid>
                    <button>ADD REVIEW</button>
                </div>
           </div>
       </div>
       </div>

    )
}
export default ProductDetail;
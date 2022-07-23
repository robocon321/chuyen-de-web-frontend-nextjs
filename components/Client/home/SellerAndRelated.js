import React, { useContext } from "react";
import Image from "next/image";
import styles from "./SellerAndRelated.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import { HomeContext } from "../../../contexts/providers/HomeProvider";
import Rating from "../../common/Rating";
import { AuthContext } from "../../../contexts/providers/AuthProvider";

const SellerAndRelated = (props) => {
  const {
    homeState,
    addFavorite,
    deleteFavorite,
    includeFavoritePost,
    findFavoriteIdByPostId,
  } = useContext(HomeContext);
  const { t } = useContext(AuthContext);

  return (
    <div className={styles.seller}>
      <div className={styles["top"]}>
        <div className={styles["lable"]}>{t('best_seller')}</div>
        <div className={styles["page-control"]}>
          <a href="" className={styles["page-btn"]}>
            <i className="page-icon fas fa-chevron-left"></i>
          </a>
          <a href="" className={styles["page-btn"]}>
            <i className="page-icon fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div className={styles["list"]}>
        <div className={styles["list-row"]}>
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              1124: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {homeState.bestSellerProducts &&
              homeState.bestSellerProducts.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={styles["item"]}>
                    <Image
                      className={styles["img"]}
                      src={item.post.thumbnail}
                      alt="Not found"
                      width={300}
                      height={300}
                    />
                    <div className={styles["info"]}>
                      <div className={styles["title"]}>
                      <Link href={`/shop/${item.post.slug}`}>
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
                      {includeFavoritePost(item.post.id) ? (
                          <a
                            className={`${styles["active"]} ${styles["icon"]}`}
                            onClick={() => deleteFavorite(findFavoriteIdByPostId(item.post.id))}
                          >
                            <i className="fas fa-heart"></i>
                          </a>
                        ) : (
                          <a
                            className={styles.icon}
                            onClick={() => addFavorite(item.post.id)}
                          >
                            <i className="fas fa-heart"></i>
                          </a>
                        )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
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
  );
};
export default SellerAndRelated;

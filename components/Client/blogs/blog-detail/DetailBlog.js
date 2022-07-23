import React, { useContext } from "react";
import Image from "next/image";
import Moment from "react-moment";

import styles from "./DetailBlog.module.css";
import SuggestBlog from "./SuggestBlog";
import { BlogDetailContext } from "../../../../contexts/providers/BlogDetailProvider";
import { AuthContext } from "../../../../contexts/providers/AuthProvider";

const DetailBlog = (props) => {
  const { blogState, addFavorite, deleteFavorite } =
    useContext(BlogDetailContext);
  const { t } = useContext(AuthContext);

  const includeFavoritePost = (id) => {
    if (blogState.favorites) {
      return (
        blogState.favorites.filter((item) => item.post.id == id).length > 0
      );
    } else {
      return false;
    }
  };

  const findFavoriteIdByPostId = (post_id) => {
    const favorite = blogState.favorites.find(
      (item) => item.post.id == post_id
    );
    if (favorite) {
      return blogState.favorites.find((item) => item.post.id == post_id).id;
    } else {
      return null;
    }
  };

  if (blogState.detailBlog) {
    return (
      <div className={styles["detail-blog"]}>
        <h1>{blogState.detailBlog.title}</h1>
        <div className={styles.info}>
          <span>
            <i className="fa-solid fa-circle-user"></i>
          </span>
          <span>{blogState.detailBlog.modifiedUser.fullname}</span>
          <span> | </span>
          <span>
            <i className="fa-solid fa-calendar-days"></i>
          </span>
          <span>
            <Moment
              date={blogState.detailBlog.modifiedTime}
              format="DD/MM/YYYY"
            />
          </span>
          <span> | </span>
          {includeFavoritePost(blogState.detailBlog.id) ? (
            <span
              className={styles.heart}
              onClick={() => deleteFavorite(findFavoriteIdByPostId(blogState.detailBlog.id))}
            >
              <i className="fa-solid fa-heart"></i>
            </span>
          ) : (
            <span className={styles.heart} onClick={() => addFavorite(blogState.detailBlog.id)}>
              <i className="fa-regular fa-heart"></i>
            </span>
          )}
        </div>
        <div>
          <Image
            src={blogState.detailBlog.thumbnail}
            alt="Not found"
            width={800}
            height={500}
          />
        </div>
        <div>{blogState.detailBlog.content}</div>
        <hr />
        <div className={styles.tags}>
          <span>Tags: </span>
          <span>
            <b>Image, plant</b>
          </span>
        </div>
        <hr />
        <div className={styles.share}>
          <h3>{t('share_post')}</h3>
          <div className={styles.socials}>
            <span>
              <i className="fa-brands fa-twitter"></i>
            </span>
            <span>
              <i className="fa-brands fa-facebook-f"></i>
            </span>
            <span>
              <i className="fa-brands fa-google-plus-g"></i>
            </span>
            <span>
              <i className="fa-brands fa-pinterest"></i>
            </span>
          </div>
        </div>
        <SuggestBlog />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DetailBlog;

import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import Moment from "react-moment";

import styles from "./BlogList.module.css";
import { BlogContext } from "../../../contexts/providers/BlogProvider";

const BlogList = (props) => {
  const { blogState, addFavorite, deleteFavorite } = useContext(BlogContext);

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

  return (
    <div className={styles.blogs}>
      {blogState.lastestBlogs &&
        blogState.lastestBlogs.content.map((item) => (
          <div key={item.id} className={styles.blog}>
            <Grid container spacing={5} columns={2}>
              <Grid item xs={2} sm={1}>
                <Image
                  src={item.thumbnail}
                  alt="Not found"
                  width={600}
                  height={350}
                />
              </Grid>
              <Grid item xs={2} sm={1}>
                <h3>{item.title}</h3>
                <div className={styles.info}>
                  <span>
                    <i className="fa-solid fa-circle-user"></i>
                  </span>
                  <span>{item.modifiedUser.fullname}</span>
                  <span> | </span>
                  <span>
                    <i className="fa-solid fa-calendar-days"></i>
                  </span>
                  <span>
                    <Moment date={item.modifiedTime} format="DD/MM/YYYY" />
                  </span>
                </div>
                <hr />
                <p>{item.content}</p>
                <a href={`/blogs/${item.slug}`}>
                  <button>READ MORE</button>
                </a>
                {includeFavoritePost(item.id) ? (
                  <span
                    className={styles.heart}
                    onClick={() =>
                      deleteFavorite(findFavoriteIdByPostId(item.id))
                    }
                  >
                    <i className="fa-solid fa-heart"></i>
                  </span>
                ) : (
                  <span
                    className={styles.heart}
                    onClick={() => addFavorite(item.id)}
                  >
                    <i className="fa-regular fa-heart"></i>
                  </span>
                )}
              </Grid>
            </Grid>
          </div>
        ))}
    </div>
  );
};

export default BlogList;

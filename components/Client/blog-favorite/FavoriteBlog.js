import { Container, Grid, Link } from "@mui/material";
import React, { useContext } from "react";
import Image from "next/image";

import Breadcrumb from "../../common/Breadcrumb";
import styles from "./FavoriteBlog.module.css";
import { FavoriteBlogContext } from "../../../contexts/providers/FavoriteBlogProvider";

const Index = (props) => {
  const { favoriteBlogState, deleteFavorite } = useContext(FavoriteBlogContext);

  return (
    <>
      <Container>
        <Breadcrumb links={["Home", "Favorite Blog"]} />
      </Container>
      <hr />
      <Container>
        <div className={styles.favorites}>
          {favoriteBlogState.favorites.map((item) => (
            <div className={styles.favorite} key={item.id}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Image
                    src={item.post.thumbnail}
                    alt="Not found"
                    width={600}
                    height={350}
                  />
                </Grid>
                <Grid item xs={6}>
                  <h3>
                    <Link href={`/blogs/${item.post.slug}`}>
                      <a>{item.post.title}</a>
                    </Link>
                  </h3>
                  <p>{item.post.content}</p>
                </Grid>
                <Grid item xs={3}>
                  <div className={styles.heart} onClick={() => deleteFavorite(item.id)}>
                    <span className={styles["btn-heart"]}>
                      <i className="fa-solid fa-heart"></i>
                    </span>
                  </div>
                </Grid>
              </Grid>
            </div>
          ))}
        </div>
      </Container>
      <hr />
    </>
  );
};

export default Index;

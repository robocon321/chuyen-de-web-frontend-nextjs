import { Container, Grid, Link } from "@mui/material";
import React, { useContext } from "react";
import Image from "next/image";

import styles from "./Wishlist.module.css";
import { WishlistContext } from "../../../contexts/providers/WishlistProvider";
import Breadcrumb from "../../common/Breadcrumb";

const Index = (props) => {
  const { favoriteProductState, deleteFavorite } = useContext(WishlistContext);

  return (
    <>
      <Container>
        <Breadcrumb links={["Home", "Wishlist"]} />
      </Container>
      <hr />
      <Container>
        <div className={styles.favorites}>
          {favoriteProductState.favorites.map((item) => (
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
                    <Link href={`/shop/${item.post.slug}`}>
                      <a>{item.post.title}</a>
                    </Link>
                  </h3>
                  <p>{item.post.content}</p>
                </Grid>
                <Grid item xs={3}>
                  <div
                    className={styles.action}
                    onClick={() => deleteFavorite(item.id)}
                  >
                    <span className={`${styles["btn-heart"]} ${styles["btn-action"]}`}>
                      <i className="fa-solid fa-heart"></i>
                    </span>
                    <span className={`${styles["btn-cart"]} ${styles["btn-action"]}`}>
                      <i className="fa-solid fa-cart-plus"></i>
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

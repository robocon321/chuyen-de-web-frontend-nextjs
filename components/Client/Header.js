import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.css";
import { Container } from "@mui/material";
import { AuthContext } from "../../contexts/providers/AuthProvider";

const Header = (props) => {
  const { authState, logout } = useContext(AuthContext);

  return (
    <header>
      <Container>
        <div className={styles["top-header"]}>
          <div className={styles["left-top-header"]}>
            <span>Follow Us: </span>
            <a href="#">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
            <a href="#">
              <i className="fa-brands fa-google-plus-g" />
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
          <div className={styles["right-top-header"]}>
              {authState.user ? (
                <div className={styles.dropdown}>
                  <span>Xin chào, {authState.user.fullname}</span>
                  <div className={styles["dropdown-content"]}>
                    <Link href="/customer/account">
                      <a><i className="fa-solid fa-circle-info"></i> Detail account</a>
                    </Link>
                    <hr />
                    <Link href="/cart">
                      <a><i className="fa-solid fa-cart-shopping"></i> My cart</a>
                    </Link>
                    <hr />
                    <Link href="/wishlist">
                      <a><i className="fa-solid fa-star"></i> My wishlist</a>
                    </Link>
                    <hr />
                    <Link href="/blog-favorite">
                      <a><i className="fa-regular fa-heart"></i> My favorite blog</a>
                    </Link>
                    <hr />
                    <div onClick={logout}>
                      <a href="#"><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.dropdown}>
                  <span>My Account</span>
                  <div className={styles["dropdown-content"]}>
                    <Link href="/auth">
                      <a>Register</a>
                    </Link>
                    <hr />
                    <Link href="/auth">
                      <a>Login</a>
                    </Link>
                  </div>
                </div>
              )}
            <span> | </span>
            <div className={styles.dropdown}>
              <span>English</span>
              <div className={styles["dropdown-content"]}>
                <a href="#">English</a>
                <hr />
                <a href="#">Vietnam</a>
              </div>
            </div>
            <span> | </span>
            <div className={styles.dropdown}>
              <span>USD</span>
              <div className={styles["dropdown-content"]}>
                <a href="#">USD</a>
                <hr />
                <a href="#">Đồng</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className={styles["center-header"]}>
          <div className={styles["left-center-header"]}>
            <div className={styles["logo-header"]}>
              <Image src="/logo.webp" alt="Not found" width={140} height={40} />
            </div>
            <div className={styles["searchbar-header"]}>
              <input placeholder="Search enter store here ..." />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          <div className={styles["right-center-header"]}>
            <div className={styles["contact-header"]}>
              <div className={styles["icon-contact-header"]}>
                <Image
                  src="/contactus.webp"
                  alt="Not found"
                  width={40}
                  height={35}
                />
              </div>
              <div className={styles["info-contact-header"]}>
                <div>Customer Support</div>
                <div>
                  <b>035 4512 411</b>
                </div>
              </div>
            </div>
            <Link href="/cart">
              <a className={styles["cart-header"]}>
                <span>
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span className={styles["total-item-cart-header"]}>1</span>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles["hidden-searchbar-header"]}>
          <input placeholder="Search enter store here ..." />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </Container>
      <div className={styles["wrap-navbar"]}>
        <Container>
          <ul className={styles["navbar"]}>
            <li>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a>SHOP</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <a>BLOG</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>CONTACT</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>ABOUT &nbsp; US</a>
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;

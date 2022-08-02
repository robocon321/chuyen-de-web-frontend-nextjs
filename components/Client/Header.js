import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";
import { Container } from "@mui/material";

import { AuthContext } from "../../contexts/providers/AuthProvider";

const Header = (props) => {
  const { authState, logout, t, changeLang, lang } = useContext(AuthContext);
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const changeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "7b66be8c-eea5-4a81-93db-ed90603c0fa6";
    (function () {
      var d = document;
      var s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);



  return (
    <header>
      <Container>
        <div className={styles["top-header"]}>
          <div className={styles["left-top-header"]}>
            <span>{t('follow_us')}</span>
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
                <span>{t('welcome')}, {authState.user.fullname}</span>
                <div className={styles["dropdown-content"]}>
                  <Link href="/customer/account">
                    <a>
                      <i className="fa-solid fa-circle-info"></i> {t('detail_account')}
                    </a>
                  </Link>
                  <hr />
                  <Link href="/cart">
                    <a>
                      <i className="fa-solid fa-cart-shopping"></i> {t('my_cart')}
                    </a>
                  </Link>
                  <hr />
                  <Link href="/wishlist">
                    <a>
                      <i className="fa-solid fa-star"></i> {t('my_wishlist')}
                    </a>
                  </Link>
                  <hr />
                  <Link href="/blog-favorite">
                    <a>
                      <i className="fa-regular fa-heart"></i> {t('my_favorite')}
                    </a>
                  </Link>
                  <hr />
                  <div onClick={logout}>
                    <a href="#">
                      <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                      {t('logout')}
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.dropdown}>
                <span>{t('my_account')}</span>
                <div className={styles["dropdown-content"]}>
                  <Link href="/auth">
                    <a>{t('register')}</a>
                  </Link>
                  <hr />
                  <Link href="/auth">
                    <a>{t('login')}</a>
                  </Link>
                </div>
              </div>
            )}
            <span> | </span>
            <div className={styles.dropdown}>
              <span>{lang == 'vi' ? t('vietnamese') : t('english')}</span>
              <div className={styles["dropdown-content"]}>
                <div onClick={() => changeLang('en')}><a href="#">{t('english')}</a></div>
                <hr />
                <div onClick={() => changeLang('vi')}><a href="#">{t('vietnamese')}</a></div>
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
              <input
                placeholder={t('search_enter_store_here')}
                onChange={changeKeyword}
              />
              <button onClick={() => router.push(`/shop?search=${keyword}`)}>
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
                <div>{t('customer_support')}</div>
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
               
              </a>
            </Link>
          </div>
        </div>
        <div className={styles["hidden-searchbar-header"]}>
          <input placeholder={t('search_enter_store_here')} />
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
                <a>{t('home')}</a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a>{t('shop')}</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <a>{t('blog')}</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>{t('contact')}</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>{t('about_us')}</a>
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;

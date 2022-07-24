import React, { useState, useContext, useEffect } from "react";
import styles from "./index.module.css";
import { AuthContext } from "../../contexts/providers/AuthProvider";
import { app } from "../../utils/firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import ForgotPasswordModal from "./ForgotPasswordModal";

const clientId =
  "25721093997-t7m5rtq3hjpap509etu23fll02mbu4ej.apps.googleusercontent.com";

const auth = getAuth();
const ggProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

const Auth = (props) => {
  const {
    router,
    loginAccount,
    registerAccount,
    registerSocial,
    loginSocial,
    authState,
    t,
    setForgotPass
  } = useContext(AuthContext);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginAccountForm, setLoginAccountForm] = useState({
    username: "",
    password: "",
  });

  const [registerAccountForm, setRegisterAccountForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    if (authState.user && authState.user.roles.find(i => i.name == "CLIENT")) {
      router.push("/");
    }
    if (
      authState.user &&
      (authState.user.roles.find(i => i.name == "ADMIN") ||
        authState.user.roles.find(i => i.name == "ROOT"))
    ) {
      router.push("/admin");
    }
  }, [authState]);

  useEffect(() => {
    if(router.query && router.query.action == 'login') {
      setIsSignUp(false);
    } else {
      setIsSignUp(true);
    }
  }, [router.query]);

  const signUpWithGmail = () =>
    signInWithPopup(auth, ggProvider)
      .then((result) => {
        const { displayName, email, photoURL, phoneNumber, uid } = result.user;
        const data = {
          key: email,
          type: 1,
          uid,
          user: {
            fullname: displayName,
            email,
            avatar: photoURL,
            phone: phoneNumber,
          },
        };

        registerSocial(data);
      })
      .catch((error) => {
        console.log(error);
      });

  const signUpWithFacebook = () => {
    signInWithPopup(auth, fbProvider)
      .then((result) => {
        console.log(1, result);
      })
      .catch((error) => {
        console.log(2, error);
      });
  };

  const submitFormLogin = (e) => {
    e.preventDefault();
    loginAccount(loginAccountForm);
  };

  const submitFormRegister = (e) => {
    e.preventDefault();
    registerAccount(registerAccountForm);
  };

  const loginWithGmail = () => {
    signInWithPopup(auth, ggProvider)
      .then((result) => {
        const { email, uid } = result.user;
        const data = {
          key: email,
          type: 1,
          uid,
        };

        loginSocial(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeLoginAccountForm = (e) => {
    setLoginAccountForm({
      ...loginAccountForm,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeRegisterAccountForm = (e) => {
    setRegisterAccountForm({
      ...registerAccountForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.center}>
      <ForgotPasswordModal />
      <div
        className={
          (isSignUp ? styles["right-panel-active"] + " " : "") +
          styles.container
        }
        id="container"
      >
        <div
          className={
            styles["form-container"] + " " + styles["sign-up-container"]
          }
        >
          <form onSubmit={submitFormRegister}>
            <h1>{t('create_account')}</h1>
            <div className={styles["social-container"]}>
              <a
                href="#"
                className={styles.social}
                onClick={signUpWithFacebook}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={styles.social} onClick={signUpWithGmail}>
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className={styles.social}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>{t('or_your_email')}</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={onChangeRegisterAccountForm}
            />
            <input
              type="text"
              placeholder={t('username')}
              name="username"
              onChange={onChangeRegisterAccountForm}
            />
            <input
              type="password"
              placeholder={t('password')}
              name="password"
              onChange={onChangeRegisterAccountForm}
            />
            <button>{t('sign_up_btn')}</button>
          </form>
        </div>
        <div
          className={
            styles["form-container"] + " " + styles["sign-in-container"]
          }
        >
          <form onSubmit={submitFormLogin}>
            <h1>{t('sign_in_btn')}</h1>
            <div className={styles["social-container"]}>
              <a href="#" className={styles.social}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={styles.social} onClick={loginWithGmail}>
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className={styles.social}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>{t('or_your_account')}</span>
            <input
              type="text"
              placeholder={t('username')}
              name="username"
              onChange={onChangeLoginAccountForm}
            />
            <input
              type="password"
              placeholder={t('password')}
              name="password"
              onChange={onChangeLoginAccountForm}
            />
            <a onClick={() => setForgotPass({
              ...authState.forgotPass,
              isShow: true   
            })} href="#">{t('forgot_pass')}</a>
            <button>{t('sign_in_btn')}</button>
          </form>
        </div>
        <div className={styles["overlay-container"]}>
          <div className={styles.overlay}>
            <div
              className={styles["overlay-panel"] + " " + styles["overlay-left"]}
            >
              <h1>{t('welcome_back')}</h1>
              <p>
              {t('keep_connected')}
              </p>
              <button
                className={styles.ghost}
                onClick={() => setIsSignUp(false)}
                id="signIn"
              >
                {t('sign_in_btn')}
              </button>
            </div>
            <div
              className={
                styles["overlay-panel"] + " " + styles["overlay-right"]
              }
            >
              <h1>{t('hello_friend')}</h1>
              <p>{t('enter_your_personal')}</p>
              <button
                className={styles.ghost}
                onClick={() => setIsSignUp(true)}
                id="signUp"
              >
                {t('sign_up')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

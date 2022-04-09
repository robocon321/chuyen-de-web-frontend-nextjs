import React, {useState} from 'react';
import styles from './index.module.css';

const Auth = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);
  
  return (
    <div className={styles.center}>
      <div className={(isSignUp ? styles['right-panel-active'] + ' ': '') + styles.container} id="container">
        <div className={styles['form-container'] +' '+ styles['sign-up-container']}>
          <form action="#">
            <h1>Create Account</h1>
            <div className={styles['social-container']}>
              <a href="#" className={styles.social}><i className="fab fa-facebook-f"></i></a>
              <a href="#" className={styles.social}><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className={styles.social}><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className={styles['form-container'] +' '+  styles['sign-in-container']}>
          <form action="#">
            <h1>Sign in</h1>
            <div className={styles['social-container']}>
              <a href="#" className={styles.social}><i className="fab fa-facebook-f"></i></a>
              <a href="#" className={styles.social}><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className={styles.social}><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className={styles['overlay-container']}>
          <div className={styles.overlay}>
            <div className={styles['overlay-panel']  +' '+  styles['overlay-left']}>
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className={styles.ghost} onClick={() => setIsSignUp(false)} id="signIn">Sign In</button>
            </div>
            <div className={styles['overlay-panel']  +' '+  styles['overlay-right']}>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className={styles.ghost}  onClick={() => setIsSignUp(true)} id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
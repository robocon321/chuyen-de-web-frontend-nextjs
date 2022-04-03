import React from 'react';
import { Grid } from '@mui/material';
import styles from './Total.module.css'

const Total = props =>{
    return( 
        <div className={styles['total-ship']}>
        <h3>Cart Total</h3>
        <div className={styles.total}>
           
            <h4>Product <span>Total</span></h4>
            <ul>
                <li>Cillum dolore tortor nisl X 01 <span>$25.00</span></li>
                <li>Auctor gravida pellentesque X 02 <span>$50.00</span></li>
                <li>Condimentum posuere consectetur X 01 <span>$25.00</span></li>
                <li>Habitasse dictumst elementum X 01 <span>$15.00</span></li>
            </ul>
            <hr/>
            <p>Sub Total <span>$150.00</span></p>
            <hr/>
            <p>Shipping Fee <span>$00.00</span></p>
            <h4>Grand Total <span>$150.00</span></h4>
        </div>
        <h3>Shipping Method</h3>
        <div className={styles.ship}>
            
            <form action=''>
            <input type="radio" name="ship"/><label >Check Payment</label><br/>
            <input type="radio" name="ship"/><label >Direct Bank Transfer</label><br/>
            <input type="radio" name="ship"/><label >Cash On Delivery</label><br/>
            <input type="radio" name="ship"/><label >Paypal</label><br/>
            <input type="radio" name="ship"/><label >Payoneer</label><br/>
            <input type="radio" name="ship"/><label >I’ve Read And Accept The Terms & Conditions</label>
            </form>
        </div>
        <button className={styles['btn-order']}>PLACE ORDER</button>
        </div>
    )
}
export default Total;
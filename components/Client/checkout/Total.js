import React, { useContext, useEffect } from 'react';
import { Grid } from '@mui/material';
import styles from './Total.module.css'
import { CartContext } from '../../../contexts/providers/CartProvider';

const Total = ({dataCheckout}) =>{
    const {cartState,loadCart} = useContext(CartContext)
    console.log(cartState)
    useEffect(() => {
        loadCartData(dataCheckout.cartId)
    }, [dataCheckout]);
    const loadCartData=(cartId)=>{
        loadCart(cartId)
      }
    // initState
    const checkoutState = {
      cart:{},
      shippingPrice:0,
      cartPrice:0,
      contact:{},
      paymentMethod:{},
      status:1,
      modifiedTime:''
    }
    return( 
        <div className={styles['total-ship']}>
        <h3>Cart Total</h3>
        <div className={styles.total}>
           
            <h4>Product <span>Total</span></h4>
            <ul>
            {cartState.carts&&
                cartState.carts.map((item)=>(
                <li key={item.id}>{item.product.post.title} x {item.quantity} <span>
                    {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(item.product.minPrice)}  
                    </span></li>
                )) 
            }
            </ul>
            <hr/>
            <p>Sub Total <span>
                {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(dataCheckout.subTotal)} 
                   </span></p>
            <hr/>
            <p>Shipping Fee <span>
                {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(dataCheckout.shipTotal)}  
                  </span></p>
            <h4>Grand Total <span>
                    {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(parseInt(dataCheckout.subTotal)+parseInt(dataCheckout.shipTotal))} 
                </span></h4>
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
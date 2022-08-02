import React, { useContext, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import styles from './Total.module.css'
import { CartContext } from '../../../contexts/providers/CartProvider';
import { CheckoutContext } from '../../../contexts/providers/CheckoutProvider';
import { AuthContext } from '../../../contexts/providers/AuthProvider';
import Link from 'next/link';
import Loading from '../../common/Loading';
import {jsPDF} from 'jspdf';
import autoTable from 'jspdf-autotable';

const Total = ({dataCheckout}) =>{
    // const {cartState,loadCart} = useContext(CartContext)
    const {checkoutState,loadCart,addCheckout,addNewCart} = useContext(CheckoutContext)
    const { authState } = useContext(AuthContext);
    const [checkout,setCheckout] = useState({
        cart:{},
        shippingPrice:0,
        cartPrice:0,
        contact:null,
        paymentMethod:null,
        status:1,
        modifiedTime:''
    })
    const [cartNew,setCartNew] = useState({
        modifiedUser:null,
        status:1,
        modifiedTime:''
    })
    console.log("checkout",checkout)
    useEffect(() => {
        loadCartData(dataCheckout.cartId)
       
    }, [checkout?.cart]);
    useEffect(()=>{
        if(checkoutState.cartByUserId!==null)
        setCheckout(()=>({
            ...checkout,
            cart:checkoutState.cartByUserId,
            shippingPrice:dataCheckout.shipTotal,
            cartPrice:dataCheckout.subTotal,
            contact:checkoutState.address[0]
        }))
        setCartNew(()=>({
            ...cartNew,
            modifiedUser:authState.user
        }))
    },[checkoutState.cartByUserId!==null])
    const loadCartData= async (cartId)=>{
        await loadCart(cartId)
        setCheckout(()=>({
            ...checkout,
            cart:checkoutState.cartByUserId,
            shippingPrice:dataCheckout.shipTotal,
            cartPrice:dataCheckout.subTotal,
            contact:checkoutState.address[0]
        }))
      }
    console.log(cartNew)
    const savePDF = ()=>{
        const doc = new jsPDF();
        doc.setFontSize(22)
        doc.setFillColor('red')
        doc.text("Checkout", 80, 20);
        doc.setFontSize(16);
        doc.text("Full Name: "+checkoutState.address[0]?.fullname,120,40)
        doc.text( "Cart Total: "+dataCheckout.subTotal,20,40)
        doc.text("Ship Total: "+dataCheckout.shipTotal,20,50)
        doc.text("Grand Total: "+(parseInt(dataCheckout.subTotal)+parseInt(dataCheckout.shipTotal)),20,60)
       
        const columns = [
            {title: "Title", dataKey: "title"},
            {title: "Quantity", dataKey: "quantity"}, 
            {title: "Price", dataKey: "price"}, 
        ]
      
        const datas = []
        
        checkoutState.carts&&checkoutState.carts.map((item)=>{
            let data = {title:'',quantity:0,price:0}
            data.title = item.product.post.title
            data.quantity = item.quantity
            data.price = item.product.minPrice
            datas.push(data)
        })

        doc.autoTable(columns, datas, {
            margin: {top: 70},
           
        });

        doc.save("checkout.pdf");
    }
    // const onCheckout = () =>{
    //     setCheckout(()=>({
    //         ...checkout,
    //         cart:checkoutState.cartByUserId,
    //         shippingPrice:dataCheckout.shipTotal,
    //         cartPrice:dataCheckout.subTotal,
        
    //     }))
    // }
    if(checkoutState.carts.length===0)
    return <Loading isLoading={true}/>
    return( 
        <div className={styles['total-ship']}>
        <h3>Cart Total</h3>
        <div className={styles.total}>
           
            <h4>Product <span>Total</span></h4>
            <ul>
            {checkoutState.carts&&
                checkoutState.carts.map((item)=>(
                <li key={item.id}>{item.product.post.title} x {item.quantity} <span>
                    {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(item.product.minPrice*item.quantity)}  
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
        <Link href={'/shop'}>
        <button onClick={()=>{
            // onCheckout()
            savePDF()
            addCheckout(checkout)
            addNewCart(cartNew)
            alert("Thanh toán thành công")
            }} className={styles['btn-order']}>PLACE ORDER</button>
            </Link>
        <button onClick={()=>{
           savePDF();
            }} className={styles['btn-order']}>EXPORT PDF</button>
        </div>
    )
}
export default Total;
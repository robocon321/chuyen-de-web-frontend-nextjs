import React, {useState, useContext,useEffect, useRef } from "react";
import Image from 'next/image';
import { AuthContext } from "../../../contexts/providers/AuthProvider";
import styles from './CartList.module.css';
import { CartContext } from "../../../contexts/providers/CartProvider";
import { ShopContext } from "../../../contexts/providers/ShopProvider";
import Loading from "../../common/Loading";

const products = [
  {
    id: 0,
    name: 'Cilum dolore tortor nisl fermentum',
    price: 29,
    quantity: 1,
    image: 'https://template.hasthemes.com/alula/alula/assets/img/products/small1-1.webp'
  },
  {
    id: 1,
    name: 'Auctor gravida pellentesque',
    price: 30,
    quantity: 2,
    image: 'https://template.hasthemes.com/alula/alula/assets/img/products/small1-2.webp'
  },
  {
    id: 2,
    name: 'Condimentum posuere consectetur',
    price: 24,
    quantity: 1,
    image: 'https://template.hasthemes.com/alula/alula/assets/img/products/small1-3.webp'
  },
  {
    id: 3,
    name: 'Condimentum posuere consectetur',
    price: 11,
    quantity: 3,
    image: 'https://template.hasthemes.com/alula/alula/assets/img/products/small1-4.webp'
  },
]

const CartList = ({subTotal,setSubTotal,cartId,setCartId}) => {
  const { authState } = useContext(AuthContext);
  const {cartState,deleteCartItem,onChangeQuantity} = useContext(CartContext)

 
  useEffect(()=>{
    handleTotalCart()
    setCartId(cartState.cartByUserId?.id)
  },[cartState])
 
  console.log("subtotal list",subTotal)

  //Get total cart
  const handleTotalCart = () =>{
    const total = cartState.carts.reduce((prev,next)=>{
       return  (prev)
    +(next.product.minPrice*next.quantity)
  },0)
  console.log('total function',total)
    setSubTotal(total)
  }
  console.log("CartState",cartState)
  if(cartState.cartByUserId===null)
  return(<Loading isLoading={true}/>)
  if(cartState.carts.length!==0)
  return (
    <div className={styles.cartlist}>
    <table>
      <tbody>
        <tr>
          <th>IMAGE</th>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          {/* <th>TOTAL</th> */}
          <th>REMOVE</th>
        </tr>
        {cartState.carts &&
          cartState.carts.map(item => (
            <tr key={item.id}>
              <td>
                <Image 
                  src={item.product.post.thumbnail}
                  alt='Not found'
                  width={100}
                  height={100}
                />
              </td>
              <td>{item.product.post.title}</td>
              <td>
                {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.product.minPrice)}  
              </td>
              <td>
                <div className={styles['counter']}>
                  <input type='number' onChange={(e)=>{
                    handleTotalCart()
                    onChangeQuantity(e,item,item.id)
                    }} defaultValue={item.quantity}/>
                  {/* <button><i className="fa-solid fa-plus"></i></button>
                  <button><i className="fa-solid fa-minus"></i></button> */}
                </div>
              </td>
              {/* <td>
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.quantity * item.product.minPrice)}  
              </td> */}
              <td><span onClick={()=>deleteCartItem(item.id)}><i className="fa-solid fa-trash-can"></i></span></td>
            </tr>
          ))
        }     
      </tbody>
    </table>

    </div>
  )
  return(<h1>Cart is Empty</h1>)
  
}

export default CartList
import React, {useState, useContext } from "react";
import Image from 'next/image';
import { AuthContext } from "../../../contexts/providers/AuthProvider";
import styles from './CartList.module.css';

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

const CartList = (props) => {
  const { authState } = useContext(AuthContext);
  console.log(authState)
  return (
    <div className={styles.cartlist}>
    <table>
      <tbody>
        <tr>
          <th>IMAGE</th>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          <th>TOTAL</th>
          <th>REMOVE</th>
        </tr>
        {
          products.map(item => (
            <tr key={item.id}>
              <td>
                <Image 
                  src={item.image}
                  alt='Not found'
                  width={100}
                  height={100}
                />
              </td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <div className={styles['counter']}>
                  <input type='text' defaultValue={item.quantity}/>
                  <button><i className="fa-solid fa-plus"></i></button>
                  <button><i className="fa-solid fa-minus"></i></button>
                </div>
              </td>
              <td>${item.quantity * item.price}</td>
              <td><span><i className="fa-solid fa-trash-can"></i></span></td>
            </tr>
          ))
        }     
      </tbody>
    </table>

    </div>
  )
}

export default CartList
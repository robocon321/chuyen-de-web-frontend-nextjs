import React from 'react';
import styles from './Order.module.css';

const orders = [
  {
    id: 0,
    name: 'Order 1',
    date: 'Aug 22, 2019',
    status: 'Pending',
    ship: 5,
    price: 45    
  },
  {
    id: 1,
    name: 'Order 1',
    date: 'Aug 22, 2019',
    status: 'Pending',
    ship: 5,
    price: 45    
  },
  {
    id: 2,
    name: 'Order 1',
    date: 'Aug 22, 2019',
    status: 'Pending',
    ship: 5,
    price: 45    
  },
  {
    id: 3,
    name: 'Order 1',
    date: 'Aug 22, 2019',
    status: 'Approve',
    ship: 15,
    price: 145    
  },
  {
    id: 4,
    name: 'Order 1',
    date: 'Aug 12, 2019',
    status: 'On Hold',
    ship: 10,
    price: 105    
  },
]

const Order = (props) => {
  return (
    <div className={styles.order}>
      <h1>Orders</h1>
      <table>
        <tbody>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Price</th>
            <th>Shipping</th>
            <th>Action</th>
          </tr>
          {
            orders.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>{item.price}</td>
                <td>{item.ship}</td>
                <td><a href='#'>View</a></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Order;
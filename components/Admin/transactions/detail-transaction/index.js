import React from 'react';
import { useRouter } from 'next/router';
import { Button, Grid } from '@mui/material'; 
import {DataGrid} from '@mui/x-data-grid';

import styles from './index.module.css';
import Breadscrum from '../../../common/Breadcrumb';

const columns = [
  {
    field: 'index',
    headerName: 'Index',
    editable: false,
    valueGetter: (params) => {
      return params.row.product_id;
    },
    minWidth: 100,
    flex: 1
  },
  { 
    field: 'product_id', 
    headerName: 'Product ID',
    editable: false,
    minWidth: 100,
    flex: 1
  }, 
  { 
    field: 'product_name', 
    headerName: 'Product Name',
    editable: false,
    minWidth: 300,
    flex: 3
  },
  {
    field: 'user_id',
    headerName: 'Seller',
    editable: false,
    minWidth: 100,
    flex: 1
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    editable: false,
    minWidth: 100,
    flex: 1    
  },
  {
    field: 'price',
    headerName: 'Product Price',
    editable: false,
    minWidth: 200,
    flex: 2
  },
  {
    field: 'total',
    headerName: 'Total',
    editable: false,
    valueGetter: (params) => {
      return '$' + params.row.quantity * params.row.price;
    },
    minWidth: 200,
    flex: 2
  }
]

const rows = [{
  product_id: 88,
  product_name: "Goat - Whole Cut",
  user_id: 51,
  quantity: 46,
  price: 76
}, {
  product_id: 43,
  product_name: "Pumpkin",
  user_id: 10,
  quantity: 26,
  price: 7
}, {
  product_id: 80,
  product_name: "Sausage - Liver",
  user_id: 18,
  quantity: 24,
  price: 11
}, {
  product_id: 42,
  product_name: "Lemonade - Island Tea, 591 Ml",
  user_id: 10,
  quantity: 69,
  price: 81
}, {
  product_id: 26,
  product_name: "Crush - Orange, 355ml",
  user_id: 72,
  quantity: 12,
  price: 60
}]

const getRowId = (params) => {
  return params.product_id;
};

const Transactions = (props) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Breadscrum links={['Home', 'Transactions', router.query.id]} />
      </div>
      <div className={styles.orderer}>
        <h2>Orderer Information</h2>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12}>
            <h3>Username</h3>
            <p>Robocon321</p>
          </Grid>
          <Grid item xs={12}>
            <h3>First name</h3>
            <p>Lê Tấn</p>
          </Grid>
          <Grid item xs={12}>
            <h3>Last name</h3>
            <p>Thanh</p>
          </Grid>
          <Grid item xs={12}>
            <h3>Birthday</h3>
            <p>12/01/2000</p>
          </Grid>
          <Grid item xs={12}>
            <h3>Date to start</h3>
            <p>22/10/2022</p>
          </Grid>
        </Grid>
      </div>
      <div className={styles.products}>
        <h2>Products Information</h2>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} lg={8}>
            <div style={{height: '400px'}}>
              <DataGrid 
                columns={columns}
                rows={rows}
                getRowId={getRowId}
              />
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className={styles['cart-summary']}>
              <h3>Cart Summary</h3>
              <div><span>Sub Total</span><span>100.000 VNĐ</span></div>
              <div><span>Shipping Total</span><span>10.000 VNĐ</span></div>
              <div><span>Discount Total</span><span>0.000 VNĐ</span></div>
              <hr />
              <div className={styles.total}><span>Grand Total</span><span>110.000 VNĐ</span></div>
            </div>
            <div style={{textAlign: 'right'}}>
              <Button className={styles.btnDelete} variant="outlined" color="error">
                <i className="fa-solid fa-trash-can"></i>
              </Button>            
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Transactions;
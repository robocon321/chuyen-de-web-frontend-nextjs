import React from 'react';
import { Grid, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Image from 'next/image';

import styles from './index.module.css';
import Input from '../../common/Input';

const renderImage = (params) => {
  return (
    <Image 
      src={params.value}
      alt='Not found'
      width={100}
      height={100}
    />
  )
};

const renderAction = (params) => {
  return (
    <div className={styles.actions}>
      <Button variant="outlined" color="error">
        Delete
      </Button>
      <span style={{marginRight: 10}}></span>
      <Button variant="contained" color="success">
        Edit
      </Button>
    </div>
  )
}

const renderLink = (params) => {
  return (
    <a className={styles['link-row']} href={`/products/${params.value}`}>{params.value}</a>
  )
}

const columns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    flex: 1,
    minWidth: 50,
    editable: false,
    renderCell: renderLink
  },
  {
    field: 'thumbnail',
    headerName: 'Thumbnail',
    flex: 2,
    minWidth: 150,
    editable: false,
    renderCell: renderImage
  },
  {
    field: 'title',
    headerName: 'Title',
    flex: 4,
    minWidth: 200,
    editable: false,
  },
  {
    field: 'sale_price',
    headerName: 'Sale Price',
    flex: 2,
    minWidth: 100,
    editable: false,
  },
  {
    field: 'total_sales',
    headerName: 'Total Sale',
    flex: 2 ,
    minWidth: 100,
    editable: false,
  },
  {
    field: 'stock_quantity',
    headerName: 'Stock Quantity',
    flex: 2,
    minWidth: 100,
    editable: false,
  },
  {
    headerName: 'Action',
    flex: 2,
    minWidth: 150,
    editable: false,
    sortable: false,
    filterable: false,
    renderCell: renderAction
  }
];

const rows = [{
  id: 1,
  thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  title: "Coconut Milk - Unsweetened",
  sale_price: 749023,
  total_sales: 67,
  stock_quantity: 18
}, {
  id: 2,
  thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
  title: "Appetizer - Mango Chevre",
  sale_price: 444289,
  total_sales: 94,
  stock_quantity: 80
}, {
  id: 3,
  thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  title: "Chicken - Wings, Tip Off",
  sale_price: 999081,
  total_sales: 79,
  stock_quantity: 70
}, {
  id: 4,
  thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  title: "Brandy - Bar",
  sale_price: 5050,
  total_sales: 61,
  stock_quantity: 72
}, {
  id: 5,
  thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  title: "Salad Dressing",
  sale_price: 310381,
  total_sales: 68,
  stock_quantity: 41
}, {
  id: 6,
  thumbnail: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  title: "Versatainer Nc - 9388",
  sale_price: 445125,
  total_sales: 28,
  stock_quantity: 46
}, {
  id: 7,
  thumbnail: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  title: "Sugar - Crumb",
  sale_price: 660989,
  total_sales: 83,
  stock_quantity: 8
}, {
  id: 8,
  thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  title: "Cheese Cloth",
  sale_price: 568630,
  total_sales: 88,
  stock_quantity: 18
}, {
  id: 9,
  thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  title: "Bread Base - Goodhearth",
  sale_price: 597873,
  total_sales: 52,
  stock_quantity: 97
}, {
  id: 10,
  thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  title: "Rice Pilaf, Dry,package",
  sale_price: 593898,
  total_sales: 68,
  stock_quantity: 89
}, {
  id: 11,
  thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  title: "Amaretto",
  sale_price: 951535,
  total_sales: 46,
  stock_quantity: 85
}, {
  id: 12,
  thumbnail: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  title: "Pork - Ham Hocks - Smoked",
  sale_price: 501971,
  total_sales: 14,
  stock_quantity: 1
}, {
  id: 13,
  thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
  title: "Tarragon - Fresh",
  sale_price: 812442,
  total_sales: 54,
  stock_quantity: 99
}, {
  id: 14,
  thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  title: "Beef - Bones, Cut - Up",
  sale_price: 822527,
  total_sales: 55,
  stock_quantity: 80
}, {
  id: 15,
  thumbnail: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  title: "Cookies - Oreo, 4 Pack",
  sale_price: 589750,
  total_sales: 17,
  stock_quantity: 65
}, {
  id: 16,
  thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  title: "Bagel - Sesame Seed Presliced",
  sale_price: 673795,
  total_sales: 96,
  stock_quantity: 71
}, {
  id: 17,
  thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
  title: "Flour - Chickpea",
  sale_price: 449892,
  total_sales: 94,
  stock_quantity: 21
}, {
  id: 18,
  thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  title: "Pesto - Primerba, Paste",
  sale_price: 899562,
  total_sales: 65,
  stock_quantity: 7
}, {
  id: 19,
  thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
  title: "Pasta - Rotini, Colour, Dry",
  sale_price: 707717,
  total_sales: 79,
  stock_quantity: 27
}, {
  id: 20,
  thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
  title: "Turkey - Ground. Lean",
  sale_price: 514885,
  total_sales: 10,
  stock_quantity: 1
}]

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <Grid container columnSpacing={2} columns={12} alignItems='center'>
          <Grid item lg={7} xs={12}>
            <Grid container columnSpacing={2} columns={12} alignItems='center'>
              <Grid item xs={12} md={4}>
                <Grid container columnSpacing={2} columns={12} alignItems='center'>
                  <Grid item xs={9} md={7}>
                    <Input
                      placeholder='Bulk actions'
                      name='select-bulk-action'
                      arrayObj={[
                        {
                          name: 'edit',
                          innerText: 'Edit'
                        },
                        {
                          name: 'delete',
                          innerText: 'Move to trash'
                        }
                      ]}
                      valueObj='name'
                      textInnerObj='innerText'
                      type='select'
                    />
                  </Grid>
                  <Grid item xs={3} md={5}>
                    <button>Apply</button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container columnSpacing={2} columns={12} alignItems='center'>
                  <Grid item xs={5}>
                    <Input 
                        placeholder='Select a category'
                        name='select-category'
                        arrayObj={[
                          {
                            name: 'category_a',
                            innerText: 'Category A'
                          },
                          {
                            name: 'category_b',
                            innerText: 'Category B'
                          }
                        ]}
                        valueObj='name'
                        textInnerObj='innerText'
                        type='select'
                      />
                  </Grid>
                  <Grid item xs={5}>
                    <Input 
                      placeholder='Filter by stock'
                      name='filter-by-stock'
                      arrayObj={[
                        {
                          name: 'instock',
                          innerText: 'Instock'
                        },
                        {
                          name: 'out-of-stock',
                          innerText: 'Out of Stock'
                        }
                      ]}
                      valueObj='name'
                      textInnerObj='innerText'
                      type='select'
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <button>Filter</button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={5} xs={12}>
            <Grid container columnSpacing={2} columns={12} alignItems='center'>
              <Grid item xs={10}>
                <Input name='search' />
              </Grid>
              <Grid item xs={2}>
                <button>Search</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div>
        <DataGrid
          autoHeight
          pageSize={5}
          rowsPerPageOptions={[5]}
          rows={rows}
          columns={columns}
          checkboxSelection
          disableColumnSelector
          getRowHeight={(params) => {
            return 150;
          }}
          components={{ Toolbar: GridToolbar }}            
        />
      </div>
    </div>
  )
}

export default Products;
import React, { useContext,useState } from 'react';
import { Grid, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Image from 'next/image';

import styles from './index.module.css';
import Input from '../../common/Input';
import Breadscrum from '../../common/Breadcrumb';
import { ProductListAdminContext } from '../../../contexts/providers/admin/ProductListAdminProvider';
import Loading from '../../common/Loading';




const Products = () => {
  const { productListAdminState,deleteProducts,updateProductFunc}  = useContext(ProductListAdminContext);
  console.log(productListAdminState)
  const renderImage = (params) => {
    return (
      <Image 
        src={params.value}
        alt='Not found'
        width={100}
        height={100}
      />
    )
  }
  
  const renderAction = (params) => {
    return (
      <div className={styles.actions}>
        <Button onClick={()=>{
            console.log(params)
            deleteProducts([params.id])
          }} variant="outlined" color="error">
          <span ><i className="fa-solid fa-trash-can"></i></span>
        </Button>
        <span style={{marginRight: 10}}></span>
        <Button onClick={()=>{
          // console.log(params.row)
          updateProductFunc(params.row)
        }} variant="contained" color="success">
          <span><i className="fa-solid fa-pen-to-square"></i></span>
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
      editable: true,
    },
    {
      field: 'sale_price',
      headerName: 'Sale Price',
      type:'number',
      flex: 2,
      minWidth: 100,
      editable: true,
    },
    {
      field: 'total_sales',
      headerName: 'Total Sale',
      flex: 2 ,
      type:'number',
      minWidth: 100,
      editable: true,
    },
    {
      field: 'stock_quantity',
      headerName: 'Stock Quantity',
      flex: 2,
      type:'number',
      minWidth: 100,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 2,
      minWidth: 150,
      editable: false,
      sortable: false,
      filterable: false,
      renderCell: renderAction
    }
  ];
  const row = []
  {productListAdminState.products&& productListAdminState.products.map((item)=>{
    let data = {}
    data.id = item.id
    data.thumbnail = item.post.thumbnail
    data.title = item.post.title
    data.sale_price= item.minPrice
    data.total_sales=item.maxPrice
    data.stock_quantity=item.stockQuantity
    // console.log(data)
    // setRow(...row,data)
    row.push(data)
  })}
  console.log(row)
  if(productListAdminState.products?.length===0)
  return <Loading isLoading={true}/>
  return (
    <div className={styles.container}>
      <div className={styles.head}>
      <Breadscrum links={['Home', 'Products']} />
        <Button variant="contained" color="warning">
          <span><i className="fa-solid fa-plus"></i></span>&nbsp;<span>Add New</span>
        </Button>
      </div>
      <div className={styles.controls}>
        <Grid container columnSpacing={2} columns={12} alignItems='center'>
          <Grid item lg={7} xs={12}>
            <Grid container columnSpacing={2} columns={12} alignItems='center'>
              <Grid item xs={12} md={4}>
                <Grid container columnSpacing={2} columns={12} alignItems='center'>
                  {/* <Grid item xs={9} md={7}>
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
                  </Grid> */}
                  {/* <Grid item xs={3} md={5}>
                    <button>Apply</button>
                  </Grid> */}
                </Grid>
              </Grid>
              {/* <Grid item xs={12} md={8}>
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
                    <button><i className="fa-solid fa-filter"></i></button>
                  </Grid>
                </Grid>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item lg={5} xs={12}>
            <Grid container columnSpacing={2} columns={12} alignItems='center'>
              {/* <Grid item xs={10}>
                <Input name='search' />
              </Grid>
              <Grid item xs={2}>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div style={{backgroundColor: 'white'}}>
        <DataGrid
          autoHeight
          pageSize={5}
          rowsPerPageOptions={[5]}
          rows={row}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
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
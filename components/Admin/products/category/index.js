import React from 'react';
import styles from './index.module.css';
import Image from 'next/image'
import Input from '../../../common/Input';
import { Grid } from '@mui/material'
import Breadcrumb from '../../../common/Breadcrumb';
import { DataGrid, GridToolbar }  from '@mui/x-data-grid';

const Index = (props) => {

    const rebderImg = (params)=>{
        return(
            <Image
                src='/woocommerce-placeholder.png'
                alt='Not found'
                width={100}
                height={100}
            />
        )
    }

    const columns=[
        {
            field: 'id', 
            headerName: 'ID', 
            flex: 1,
            minWidth: 50,
            editable: false,
        },
        {
            field: 'image', 
            headerName: 'Image', 
            flex: 2,
            minWidth: 150,
            editable: false,
            renderCell: rebderImg
        },
        {
            field: 'description', 
            headerName: 'Description', 
            flex: 4,
            minWidth: 200,
            editable: false,
        },
        {
            field: 'slug', 
            headerName: 'Slug', 
            flex: 2,
            minWidth: 150,
            editable: false,
        },
        {
            field: 'count', 
            headerName: 'Count', 
            flex: 2,
            minWidth: 150,
            editable: false,
        }
        
    ]
    const rows=[
        {
            id: 1,
            image: "",
            description:'',
            slug:'uncategories',
            count:1
        },
        {
            id: 2,
            image: "",
            description:'',
            slug:'catus',
            count:8
        },
        {
            id: 3,
            image: "",
            description:'',
            slug:'plants',
            count:6
        }
    ]

    return (
        <div className={styles['categories']}>
            <Breadcrumb links={['Home', 'Product', 'Category']} />
            <Grid container spacing={2} columns={12}>
                <Grid item md={4} xs={12}>
                    <h4>Add new category</h4>
                    <Input
                        title='Name'
                        isRequire='false'
                    />
                    <Input
                        title='Slug'
                        isRequire='false'
                    />
                    <Input
                        title='Parent Category'
                        placeholder='None'
                        name='parent-category'
                        arrayObj={
                            [

                                {
                                    name: 'none',
                                    innerText: 'None'
                                },
                                {
                                    name: 'catus',
                                    innerText: 'Catus'
                                },
                                {
                                    name: 'plants',
                                    innerText: 'Plants'
                                },
                                {
                                    name: 'uncategorized',
                                    innerText: 'Uncategorized'
                                }
                            ]
                        }
                        valueObj='name'
                        textInnerObj='innerText'
                        type='select'
                    />
                    <Input
                        title='Description'
                        isRequire='false'
                        type='textarea'
                    />
                    <Input
                        title='Display type'
                        placeholder='Default'
                        arrayObj={
                            [

                                {
                                    name: 'default',
                                    innerText: 'Default'
                                },
                                {
                                    name: 'products',
                                    innerText: 'Products'
                                },
                                {
                                    name: 'subcategories',
                                    innerText: 'Subcategories'
                                },
                                {
                                    name: 'both',
                                    innerText: 'Both'
                                }
                            ]
                        }
                        valueObj='name'
                        textInnerObj='innerText'
                        type='select'
                    />
                    <div className={styles['thumbnail']}>
                        <label htmlFor="">Thumbnail</label>
                        <div className={styles['image']}>
                            <Image
                                src="/woocommerce-placeholder.png"
                                alt='Not found'
                                width={60}
                                height={60}
                            />
                        </div>
                        <button className={'button'}>Upload/Add image</button>
                    </div>
                </Grid>
                <Grid item md={8} xs={12}>
                    <Grid container columnSpacing={2} columns={12} className={styles['search']}>
                        <Grid item xs={12} md={3}>
                            <Input
                                className={styles['input-search']}
                                isRequire='flase'
                                height={100}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <button className={styles['button-search']}>Search Categories</button>
                        </Grid>
                    </Grid>
                    <div style={{backgroundColor:'white'}}>
                        <DataGrid
                            autoHeight
                            rows={rows}
                            columns={columns}
                            checkboxSelection
                            disableColumnSelector
                            getRowHeight={(params) => {
                                return 50;
                              }}
                            components={{ Toolbar: GridToolbar }}     
                        />
                    </div>
                    <button className={styles['button-delete']}>Delete</button>
                </Grid>
            </Grid>
        </div>
    )
}
export default Index;
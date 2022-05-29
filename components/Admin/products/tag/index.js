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
            id: 'tag1',
            image: "",
            description:'',
            slug:'tag1',
            count:1
        },
        {
            id: 'tag2',
            image: "",
            description:'',
            slug:'tag2',
            count:8
        },
        {
            id: 'tag3',
            image: "",
            description:'',
            slug:'tag3',
            count:6
        }
    ]

    return (
        <div className={styles['tag']}>
            <Breadcrumb links={['Home', 'Product', 'Tag']} />
            <Grid container spacing={2} columns={12}>
                <Grid item md={4} xs={12}>
                    <h4>Add new tag</h4>
                    <Input
                        title='Name'
                        isRequire='false'
                    />
                    <Input
                        title='Slug'
                        isRequire='false'
                    />
                    
                    <Input
                        title='Description'
                        isRequire='false'
                        type='textarea'
                    />
                    <button className={'button'}>Add new tag</button>
                   
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
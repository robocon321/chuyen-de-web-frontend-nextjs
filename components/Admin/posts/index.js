import React from 'react';
import { Grid, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Image from 'next/image';

import styles from './index.module.css';
import Input from '../../common/Input';
import Breadscrum from '../../common/Breadcrumb';

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
      <Button variant="outlined" color="error">
        <span><i className="fa-solid fa-trash-can"></i></span>
      </Button>
      <span style={{marginRight: 10}}></span>
      <Button variant="contained" color="success">
        <span><i className="fa-solid fa-pen-to-square"></i></span>
      </Button>
    </div>
  )
}

const renderLink = (params) => {
  return (
    <a className={styles['link-row']} href={`/posts/${params.value}`}>{params.value}</a>
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
    field: 'author',
    headerName: 'Author',
    flex: 2,
    minWidth: 100,
    editable: false,
  },
  {
    field: 'view',
    headerName: 'View',
    flex: 2 ,
    minWidth: 100,
    editable: false,
  },
  {
    field: 'comment_count',
    headerName: 'Comment Count',
    flex: 2,
    minWidth: 100,
    editable: false,
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

const rows = [{
  id: 1,
  thumbnail: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  title: "Poppy Seed",
  author: "arobrose0",
  view: 27,
  comment_count: 27
}, {
  id: 2,
  thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  title: "Soup - Knorr, French Onion",
  author: "cloyd1",
  view: 99,
  comment_count: 59
}, {
  id: 3,
  thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
  title: "Sugar - White Packet",
  author: "hsandeman2",
  view: 5,
  comment_count: 43
}, {
  id: 4,
  thumbnail: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  title: "Lamb Tenderloin Nz Fr",
  author: "abeste3",
  view: 55,
  comment_count: 29
}, {
  id: 5,
  thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  title: "Beets - Golden",
  author: "vmorde4",
  view: 8,
  comment_count: 34
}, {
  id: 6,
  thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
  title: "Bagel - Ched Chs Presliced",
  author: "bkleisle5",
  view: 29,
  comment_count: 38
}, {
  id: 7,
  thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  title: "Compound - Pear",
  author: "lwatton6",
  view: 6,
  comment_count: 20
}, {
  id: 8,
  thumbnail: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  title: "Sugar - Sweet N Low, Individual",
  author: "mattwater7",
  view: 90,
  comment_count: 97
}, {
  id: 9,
  thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  title: "Table Cloth 54x72 Colour",
  author: "souslem8",
  view: 79,
  comment_count: 12
}, {
  id: 10,
  thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  title: "Bread Crumbs - Panko",
  author: "sdepke9",
  view: 38,
  comment_count: 93
}, {
  id: 11,
  thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  title: "Wine - Prosecco Valdobienne",
  author: "lbradleya",
  view: 24,
  comment_count: 92
}, {
  id: 12,
  thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
  title: "Apricots - Halves",
  author: "ldoftyb",
  view: 90,
  comment_count: 24
}, {
  id: 13,
  thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
  title: "Sausage - Blood Pudding",
  author: "rgrellisc",
  view: 78,
  comment_count: 98
}, {
  id: 14,
  thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  title: "Squash - Acorn",
  author: "spitkethlyd",
  view: 59,
  comment_count: 59
}, {
  id: 15,
  thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
  title: "Barramundi",
  author: "hgolborne",
  view: 61,
  comment_count: 26
}, {
  id: 16,
  thumbnail: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  title: "Pastry - Baked Scones - Mini",
  author: "pwigleyf",
  view: 94,
  comment_count: 15
}, {
  id: 17,
  thumbnail: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  title: "Turkey - Breast, Double",
  author: "rjelphsg",
  view: 60,
  comment_count: 12
}, {
  id: 18,
  thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  title: "Pastry - Cheese Baked Scones",
  author: "kmallaboneh",
  view: 91,
  comment_count: 8
}, {
  id: 19,
  thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  title: "Seedlings - Mix, Organic",
  author: "eargilei",
  view: 66,
  comment_count: 53
}, {
  id: 20,
  thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
  title: "Carbonated Water - Peach",
  author: "lernij",
  view: 51,
  comment_count: 45
}]

const Posts = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Breadscrum links={['Home', 'Posts']} />
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
                      placeholder='Choose date'
                      type='date'
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <button><i className="fa-solid fa-filter"></i></button>
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
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div style={{backgroundColor: 'white'}}>
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

export default Posts;
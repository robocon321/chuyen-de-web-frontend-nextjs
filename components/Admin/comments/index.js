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
    field: 'email', 
    headerName: 'Email', 
    flex: 2,
    minWidth: 100,
    editable: false
  },
  {
    field: 'avatar',
    headerName: 'Avatar',
    flex: 2,
    minWidth: 150,
    editable: false,
    renderCell: renderImage
  },
  {
    field: 'content',
    headerName: 'Content',
    flex: 4,
    minWidth: 400,
    editable: false,
  },
  {
    field: 'response_to',
    headerName: 'Response to',
    flex: 3,
    minWidth: 200,
    editable: false,
  },
  {
    field: 'reply_to',
    headerName: 'Reply to',
    flex: 1,
    minWidth: 100,
    editable: false,
  },
  {
    field: 'mod_time',
    headerName: 'Modify time',
    flex: 1,
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
  email: "pambler0@squarespace.com",
  avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
  content: "rutrum nulla nunc purus phasellus in felis",
  type: "Feedback",
  response_to: "Cornflakes",
  reply_to: 17,
  mod_time: "12/13/2021"
}, {
  id: 2,
  email: "bauthers1@dell.com",
  avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
  content: "accumsan odio curabitur convallis duis",
  type: "Product",
  response_to: "Steampan - Lid For Half Size",
  reply_to: 17,
  mod_time: "1/11/2022"
}, {
  id: 3,
  email: "bstpaul2@jiathis.com",
  avatar: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  content: "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris",
  type: "Post",
  response_to: "Thyme - Dried",
  reply_to: 18,
  mod_time: "10/28/2021"
}, {
  id: 4,
  email: "aglowacz3@jugem.jp",
  avatar: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  content: "posuere cubilia curae mauris viverra diam vitae",
  type: "Post",
  response_to: "Soup - Campbells Chili Veg",
  reply_to: 9,
  mod_time: "6/25/2021"
}, {
  id: 5,
  email: "kelsmore4@symantec.com",
  avatar: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  content: "lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id",
  type: "Feedback",
  response_to: "Bread Foccacia Whole",
  reply_to: 4,
  mod_time: "12/21/2021"
}, {
  id: 6,
  email: "smacdonough5@123-reg.co.uk",
  avatar: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  content: "mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed",
  type: "Post",
  response_to: "Carbonated Water - Raspberry",
  reply_to: 18,
  mod_time: "9/4/2021"
}, {
  id: 7,
  email: "hgwioneth6@twitter.com",
  avatar: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  content: "luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse",
  type: "Post",
  response_to: "Carbonated Water - Strawberry",
  reply_to: 20,
  mod_time: "10/30/2021"
}, {
  id: 8,
  email: "jmckiddin7@geocities.jp",
  avatar: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  content: "amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim",
  type: "Product",
  response_to: "Crawfish",
  reply_to: 8,
  mod_time: "4/7/2022"
}, {
  id: 9,
  email: "fcausley8@pinterest.com",
  avatar: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  content: "montes nascetur ridiculus mus etiam vel augue vestibulum",
  type: "Post",
  response_to: "Lemonade - Mandarin, 591 Ml",
  reply_to: 8,
  mod_time: "10/17/2021"
}, {
  id: 10,
  email: "keppson9@arstechnica.com",
  avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
  content: "felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed",
  type: "Post",
  response_to: "Pepsi - 600ml",
  reply_to: 16,
  mod_time: "1/2/2022"
}, {
  id: 11,
  email: "jjennya@goo.ne.jp",
  avatar: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  content: "aliquam sit amet diam in magna",
  type: "Post",
  response_to: "Cherries - Frozen",
  reply_to: 9,
  mod_time: "9/29/2021"
}, {
  id: 12,
  email: "hpontonb@google.fr",
  avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
  content: "consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu",
  type: "Post",
  response_to: "Muffin - Bran Ind Wrpd",
  reply_to: 7,
  mod_time: "10/19/2021"
}, {
  id: 13,
  email: "jshipwayc@shutterfly.com",
  avatar: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  content: "ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia",
  type: "Feedback",
  response_to: "Browning Caramel Glace",
  reply_to: 5,
  mod_time: "10/13/2021"
}, {
  id: 14,
  email: "zgotherd@ning.com",
  avatar: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  content: "diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo",
  type: "Product",
  response_to: "Shiratamako - Rice Flour",
  reply_to: 16,
  mod_time: "9/13/2021"
}, {
  id: 15,
  email: "dsalee@illinois.edu",
  avatar: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  content: "pede venenatis non sodales sed tincidunt eu felis fusce posuere felis",
  type: "Product",
  response_to: "Hinge W Undercut",
  reply_to: 15,
  mod_time: "3/22/2022"
}, {
  id: 16,
  email: "mtretterf@blogs.com",
  avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
  content: "etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum",
  type: "Feedback",
  response_to: "Icecream - Dstk Cml And Fdg",
  reply_to: 7,
  mod_time: "11/16/2021"
}, {
  id: 17,
  email: "fgiovannettig@earthlink.net",
  avatar: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  content: "molestie sed justo pellentesque viverra pede ac diam",
  type: "Product",
  response_to: "Nut - Hazelnut, Whole",
  reply_to: 11,
  mod_time: "8/7/2021"
}, {
  id: 18,
  email: "nphiliph@wunderground.com",
  avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
  content: "duis ac nibh fusce lacus purus aliquet at feugiat non pretium",
  type: "Post",
  response_to: "Appetizer - Spring Roll, Veg",
  reply_to: 20,
  mod_time: "2/10/2022"
}, {
  id: 19,
  email: "gcraisteri@php.net",
  avatar: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  content: "dapibus duis at velit eu est congue elementum",
  type: "Feedback",
  response_to: "Campari",
  reply_to: 5,
  mod_time: "9/22/2021"
}, {
  id: 20,
  email: "rtipperj@blogger.com",
  avatar: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  content: "vulputate justo in blandit ultrices enim lorem ipsum",
  type: "Feedback",
  response_to: "Sauce - Oyster",
  reply_to: 7,
  mod_time: "10/26/2021"
}]

const Comment = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Breadscrum links={['Home', 'Comments']} />
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
                        placeholder='Select a comment type'
                        name='select-type'
                        arrayObj={[
                          {
                            name: 'post',
                            innerText: 'Post'
                          },
                          {
                            name: 'product',
                            innerText: 'Product'
                          },
                          {
                            name: 'feedback',
                            innerText: 'Feedback'
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

export default Comment;
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
    <a className={styles['link-row']} href={`/users/${params.value}`}>{params.value}</a>
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
    field: 'avatar',
    headerName: 'Avatar',
    flex: 2,
    minWidth: 150,
    editable: false,
    renderCell: renderImage
  },
  {
    field: 'uname',
    headerName: 'Username',
    flex: 4,
    minWidth: 200,
    editable: false,
  },
  {
    field: 'fullname',
    headerName: 'Fullname',
    flex: 2,
    minWidth: 100,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 2 ,
    minWidth: 100,
    editable: false,
  },
  {
    field: 'phone',
    headerName: 'Phone',
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
  avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
  uname: "ltullis0",
  fullname: "Lanni Tullis",
  email: "ltullis0@vk.com",
  phone: "877-517-9671"
}, {
  id: 2,
  avatar: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  uname: "kcolcomb1",
  fullname: "Kristos Colcomb",
  email: "kcolcomb1@nhs.uk",
  phone: "956-380-3265"
}, {
  id: 3,
  avatar: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  uname: "ggirardini2",
  fullname: "Gerda Girardini",
  email: "ggirardini2@sphinn.com",
  phone: "265-230-7965"
}, {
  id: 4,
  avatar: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  uname: "ecullity3",
  fullname: "Elvis Cullity",
  email: "ecullity3@mysql.com",
  phone: "645-916-9777"
}, {
  id: 5,
  avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
  uname: "isymmons4",
  fullname: "Isaac Symmons",
  email: "isymmons4@google.com.br",
  phone: "301-897-1344"
}, {
  id: 6,
  avatar: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  uname: "itrumble5",
  fullname: "Indira Trumble",
  email: "itrumble5@java.com",
  phone: "971-975-5950"
}, {
  id: 7,
  avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
  uname: "dosbaldstone6",
  fullname: "Dolly Osbaldstone",
  email: "dosbaldstone6@bing.com",
  phone: "772-868-3673"
}, {
  id: 8,
  avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
  uname: "transom7",
  fullname: "Tatum Ransom",
  email: "transom7@stanford.edu",
  phone: "954-820-5822"
}, {
  id: 9,
  avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
  uname: "lmorgen8",
  fullname: "Lucilia Morgen",
  email: "lmorgen8@people.com.cn",
  phone: "239-541-4236"
}, {
  id: 10,
  avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
  uname: "dmacnally9",
  fullname: "Dalston MacNally",
  email: "dmacnally9@baidu.com",
  phone: "105-172-6247"
}, {
  id: 11,
  avatar: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  uname: "dgimbarta",
  fullname: "Danita Gimbart",
  email: "dgimbarta@reverbnation.com",
  phone: "628-192-9251"
}, {
  id: 12,
  avatar: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  uname: "dfitzsymondsb",
  fullname: "Dennie Fitzsymonds",
  email: "dfitzsymondsb@narod.ru",
  phone: "310-949-3792"
}, {
  id: 13,
  avatar: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  uname: "kthorpec",
  fullname: "Katlin Thorpe",
  email: "kthorpec@yellowpages.com",
  phone: "351-710-3033"
}, {
  id: 14,
  avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
  uname: "nduchenned",
  fullname: "Neville Duchenne",
  email: "nduchenned@networksolutions.com",
  phone: "207-247-9154"
}, {
  id: 15,
  avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
  uname: "cclawe",
  fullname: "Colly Claw",
  email: "cclawe@netlog.com",
  phone: "175-961-5429"
}, {
  id: 16,
  avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
  uname: "pbruyetf",
  fullname: "Porty Bruyet",
  email: "pbruyetf@sfgate.com",
  phone: "641-122-7018"
}, {
  id: 17,
  avatar: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  uname: "ljakubovitsg",
  fullname: "Lennard Jakubovits",
  email: "ljakubovitsg@amazonaws.com",
  phone: "229-970-9423"
}, {
  id: 18,
  avatar: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  uname: "rmcphilemyh",
  fullname: "Reyna McPhilemy",
  email: "rmcphilemyh@woothemes.com",
  phone: "569-959-5333"
}, {
  id: 19,
  avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
  uname: "tgautreyi",
  fullname: "Tracie Gautrey",
  email: "tgautreyi@sciencedirect.com",
  phone: "988-698-9335"
}, {
  id: 20,
  avatar: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  uname: "mbelchj",
  fullname: "Mae Belch",
  email: "mbelchj@linkedin.com",
  phone: "112-694-0774"
}]

const ListUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>List User</h1>
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
                        placeholder='Select a role'
                        name='select-role'
                        arrayObj={[
                          {
                            name: 'role_a',
                            innerText: 'Role A'
                          },
                          {
                            name: 'role_b',
                            innerText: 'Role B'
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

export default ListUser;
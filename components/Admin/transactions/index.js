import React, {useState} from 'react';
import { Grid, Button, Slider } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import styles from './index.module.css';
import Input from '../../common/Input';
import Breadscrum from '../../common/Breadcrumb';

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
    field: 'date',
    headerName: 'Date',
    flex: 2,
    minWidth: 150,
    editable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 2,
    minWidth: 200,
    editable: false,
  },
  {
    field: 'total',
    headerName: 'Total',
    flex: 2,
    minWidth: 100,
    editable: false,
  },
  {
    field: 'order',
    headerName: 'Order',
    flex: 2 ,
    minWidth: 100,
    editable: false,
    renderCell: renderLink
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 4,
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
  "id": 1,
  "date": "12/10/2021",
  "status": "Complete",
  "total": 8,
  "order": "scomplete0",
  "email": "gcomplete0@unblog.fr"
}, {
  "id": 2,
  "date": "3/22/2022",
  "status": "Order",
  "total": 87,
  "order": "lorder1",
  "email": "jorder1@51.la"
}, {
  "id": 3,
  "date": "7/2/2021",
  "status": "Received",
  "total": 45,
  "order": "breceived2",
  "email": "ireceived2@msn.com"
}, {
  "id": 4,
  "date": "5/16/2021",
  "status": "Order",
  "total": 3,
  "order": "jorder3",
  "email": "jorder3@aboutads.info"
}, {
  "id": 5,
  "date": "1/30/2022",
  "status": "Received",
  "total": 94,
  "order": "freceived4",
  "email": "areceived4@networkadvertising.org"
}, {
  "id": 6,
  "date": "7/16/2021",
  "status": "Received",
  "total": 14,
  "order": "dreceived5",
  "email": "kreceived5@ibm.com"
}, {
  "id": 7,
  "date": "11/29/2021",
  "status": "Order",
  "total": 59,
  "order": "morder6",
  "email": "lorder6@wunderground.com"
}, {
  "id": 8,
  "date": "4/9/2022",
  "status": "Received",
  "total": 83,
  "order": "jreceived7",
  "email": "preceived7@alexa.com"
}, {
  "id": 9,
  "date": "9/30/2021",
  "status": "Order",
  "total": 30,
  "order": "dorder8",
  "email": "korder8@reference.com"
}, {
  "id": 10,
  "date": "2/10/2022",
  "status": "Shipping",
  "total": 60,
  "order": "gshipping9",
  "email": "ashipping9@cpanel.net"
}, {
  "id": 11,
  "date": "1/28/2022",
  "status": "Shipping",
  "total": 88,
  "order": "tshippinga",
  "email": "nshippinga@hostgator.com"
}, {
  "id": 12,
  "date": "11/18/2021",
  "status": "Shipping",
  "total": 93,
  "order": "ashippingb",
  "email": "dshippingb@google.com"
}, {
  "id": 13,
  "date": "11/26/2021",
  "status": "Received",
  "total": 81,
  "order": "preceivedc",
  "email": "dreceivedc@ihg.com"
}, {
  "id": 14,
  "date": "11/30/2021",
  "status": "Complete",
  "total": 99,
  "order": "lcompleted",
  "email": "lcompleted@istockphoto.com"
}, {
  "id": 15,
  "date": "5/23/2021",
  "status": "Complete",
  "total": 15,
  "order": "gcompletee",
  "email": "tcompletee@va.gov"
}, {
  "id": 16,
  "date": "8/24/2021",
  "status": "Shipping",
  "total": 72,
  "order": "mshippingf",
  "email": "jshippingf@topsy.com"
}, {
  "id": 17,
  "date": "7/6/2021",
  "status": "Shipping",
  "total": 28,
  "order": "mshippingg",
  "email": "ashippingg@spiegel.de"
}, {
  "id": 18,
  "date": "4/10/2021",
  "status": "Shipping",
  "total": 36,
  "order": "fshippingh",
  "email": "ashippingh@wikipedia.org"
}, {
  "id": 19,
  "date": "5/24/2021",
  "status": "Order",
  "total": 34,
  "order": "gorderi",
  "email": "borderi@cloudflare.com"
}, {
  "id": 20,
  "date": "6/24/2021",
  "status": "Complete",
  "total": 83,
  "order": "jcompletej",
  "email": "tcompletej@icq.com"
}]

const Transactions = (props) => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Breadscrum links={['Home', 'Transactions']} />
      </div>
      <div className={styles.controls}>
        <Grid container columnSpacing={2} columns={12} alignItems='center'>
          <Grid item lg={7} xs={12}>
            <Grid container columnSpacing={2} columns={12} alignItems='center'>
              <Grid item xs={12} md={8}>
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
              <Grid item xs={12} md={2}>
                <button>Apply</button>
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
          <Grid item lg={6} xs={10}>
            <Grid container columnSpacing={2} columns={12} alignItems='center'>
            <Grid item xs={1}>
                <div style={{textAlign: 'center'}}>From</div>
              </Grid>
              <Grid item xs={5}>
                <Input 
                  placeholder='Choose date'
                  type='date'
                />
              </Grid>
              <Grid item xs={1}>
                <div style={{textAlign: 'center'}}>To</div>
              </Grid>
              <Grid item xs={5}>
                <Input 
                  placeholder='Choose date'
                  type='date'
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={1} xs={2} style={{textAlign: 'center'}}>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />            
          </Grid>
          <Grid item lg={6} xs={10}>
            <span>Price</span>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
            />
          </Grid>
          <Grid item lg={1} xs={2} style={{textAlign: 'center'}}>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />            
          </Grid>
          <Grid item lg={6} xs={12}>
            <button><i className="fa-solid fa-filter"></i></button>
          </Grid>
        </Grid>
      </div>
      <div style={{backgroundColor: 'white', marginTop: '20px'}}>
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

export default Transactions;
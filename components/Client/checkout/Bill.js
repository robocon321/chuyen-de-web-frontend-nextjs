import React from 'react';
import styles from './Bill.module.css'
import Input from '../../common/Input';
import { Grid } from '@mui/material';

function funCheck(){
    var checkBox = document.getElementById("myCheck");

    var ship = document.getElementById("ship-add");

    if(checkBox.checked == true){
        ship.style.display = "block";
    }else{
        ship.style.display = "none"
    }
}

const Bill = props =>{
    return(
        <div className={styles.bill}>
            <div className={styles['bill-add']}>
            <h3>Billing Address</h3>
            <Grid  container columnSpacing={6}>
                <Grid item xs={6} >
                    <Input
                    title='First Name'
                    require={true}
                    name='firstname'
                    placeholder='First Name'
                    /> 
                </Grid>
                <Grid  item  xs={6}>
                    <Input
                    title='Last Name'
                    require={true}
                    name='lastname'
                    placeholder='Last Name'
                    />
                </Grid>
                <Grid item  xs={6}>
                    <Input
                    title='Email Address'
                    require={true}
                    name='email'
                    placeholder='Email Address'
                    />
                </Grid>
                <Grid item  xs={6}>
                    <Input
                    title='Phone No'
                    require={true}
                    name='phone'
                    placeholder='Phone Number'
                    />
                </Grid>
                <Grid item  xs={12}>
                    <Input
                    title='Company Name'
                    require={false}
                    name='company'
                    placeholder='Company Name'
                    />
                </Grid>
                <Grid item  xs={12}>
                    <Input
                    title='Address'
                    require={true}
                    name='address'
                    placeholder='Address line 1'
                    />
                     <Input
                    title=''
                    require={false}
                    name='address'
                    placeholder='Address line 1'
                    />
                </Grid>
                <Grid item  xs={6}>
                    <Input
                    title='Country'
                    require={true}
                    name='country'
                    />
                </Grid>
                <Grid item  xs={6}>
                    <Input
                    title='Town/City'
                    require={true}
                    name='town'
                    placeholder='Town/City'
                    />
                </Grid>
                <Grid item  xs={6}>
                    <Input
                    title='State'
                    require={true}
                    name='state'
                    placeholder='State'
                    />
                </Grid>
                <Grid item  xs={6}>
                    <Input
                    title='Zip Code'
                    require={true}
                    name='zipcode'
                    placeholder='Zip Code'
                    />
                </Grid>
            </Grid>
            </div>
            <div className={styles['morechoose']}>
                <input type="checkbox" /> <label>Create An Acount?</label>
                <input type="checkbox" id="myCheck" onClick={funCheck} /> <label>Ship To Different Address</label>
            </div>
            <div className={styles['ship-add']} id="ship-add">
            <h3>Shipping Address</h3>
            <Grid  container columnSpacing={6}>
            <Grid item xs={6} >
                    <Input
                    title='First Name'
                    require={true}
                    name='firstname'
                    placeholder='First Name'
                    /> 
                </Grid>
                <Grid  item  xs={6}>
                    <Input
                    title='Last Name'
                    require={true}
                    name='lastname'
                    placeholder='Last Name'
                    />
                </Grid>
                <Grid item  xs={6}>
                    <Input
                    title='Email Address'
                    require={true}
                    name='email'
                    placeholder='Email Address'
                    />
                </Grid>
                <Grid item  xs={6}>
                    <Input
                    title='Phone No'
                    require={true}
                    name='phone'
                    placeholder='Phone Number'
                    />
                </Grid>
                <Grid item  xs={12}>
                    <Input
                    title='Company Name'
                    require={false}
                    name='company'
                    placeholder='Company Name'
                    />
                </Grid>
                <Grid item  xs={12}>
                    <Input
                    title='Address'
                    require={true}
                    name='address'
                    placeholder='Address line 1'
                    />
                     <Input
                    title=''
                    require={false}
                    name='address'
                    placeholder='Address line 1'
                    />
                </Grid>
                <Grid item  xs={6}>
                    <Input
                    title='Country'
                    require={true}
                    name='country'
                    />
                </Grid>
                <Grid item  xs={6}>
                    <Input
                    title='Town/City'
                    require={true}
                    name='town'
                    placeholder='Town/City'
                    />
                </Grid>
                <Grid item  xs={6}>
                    <Input
                    title='State'
                    require={true}
                    name='state'
                    placeholder='State'
                    />
                </Grid>
                <Grid item  xs={6}>
                    <Input
                    title='Zip Code'
                    require={true}
                    name='zipcode'
                    placeholder='Zip Code'
                    />
                </Grid>
            </Grid>
            </div>
        </div>
    )
}
export default Bill;
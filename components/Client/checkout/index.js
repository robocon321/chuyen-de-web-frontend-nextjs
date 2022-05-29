import { Container, Grid } from '@mui/material';
import React from 'react';
import Bill from './Bill';

import Breadcrumb from '../../common/Breadcrumb';
import Total from './Total';

const Checkout = props =>{
    return(
        <>
        <Container>
            <Breadcrumb links={['Home','Checkout']}/>
        </Container>
        <hr/>
        <Container>
            <Grid container columns={12} spacing={2}>
                <Grid item sm={12} md={7}>
                    <Bill/>
                </Grid>
                <Grid item sm={12} md={5}>
                    <Total/>
                </Grid>
            </Grid>
        </Container>
        </>

    )
}
export default Checkout;
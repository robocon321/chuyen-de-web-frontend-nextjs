import { Container, Grid } from '@mui/material';
import React from 'react';
import Bill from './Bill';

import Breadcrumb from '../../common/Breadcrumb';
import Total from './Total';
import { useRouter } from 'next/router';

const Checkout = props =>{
    const router = useRouter()
    const data = router.query
    console.log(data)
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
                    <Total dataCheckout={data}/>
                </Grid>
            </Grid>
        </Container>
        </>

    )
}
export default Checkout;
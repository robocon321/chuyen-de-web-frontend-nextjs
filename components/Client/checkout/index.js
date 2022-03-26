import { Container, Grid } from '@mui/material';
import React from 'react';

import Breadcrumb from '../../common/Breadcrumb';

const Index = props =>{
    return(
        <>
        <Container>
            <Breadcrumb links={['Home','Checkout']}/>
        </Container>
        <hr/>
        <Container>
            <Grid container columns={12} spacing={2}>
                <Grid item xs={8}>

                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
        </Container>
        </>

    )
}
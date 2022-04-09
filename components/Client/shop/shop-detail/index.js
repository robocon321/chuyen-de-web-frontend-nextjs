import React from 'react';
import { Container, Grid } from '@mui/material'
import Breadcrumb from '../../../common/Breadcrumb';
import ProductDetail from './ProductDetail';
const Index = props =>{
    return(
        <>
        <Container>
            <Breadcrumb links={['Home','Product','Product Detail']}/>
        </Container>
        <hr/>
        <Container>
            <ProductDetail/>
        </Container>
        </>
    )
}
export default Index;
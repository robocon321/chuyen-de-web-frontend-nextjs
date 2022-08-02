import React, { useReducer, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import ProductListAdminReducer from '../../reducers/admin/ProductListAdminReducer'
import {ACTIONS, 
    loadProductsAction,
    deleteProductAction,
    udpateProductAction} from '../../actions/admin/ProductListAdminAction'
import { async } from "@firebase/util";

export const ProductListAdminContext = createContext()

const initState = {
    isLoading: true,
    message: '',
    success: false,
    error:null,
    products:[]
}
const ProductListAdminProvider = (props)=>{
    const router = useRouter()
    const [productListAdminState,dispatch] = useReducer(ProductListAdminReducer,initState)

    useEffect(()=>{
        loadData()
    },[])

    const updateProductFunc = (params) =>{
        console.log("params",params)
        if(productListAdminState.products?.length!==0){
            let productOld = productListAdminState.products.filter((product) => {
                return product.id === params.id
            })
            
            productOld[0].post.title = params.title
            productOld[0].stock_quantity = params.stock_quantity
            productOld[0].minPrice = params.sale_price
            productOld[0].maxPrice = params.total_sales
            console.log("product old",productOld[0])
            updateProduct(productOld[0])
            
        }
    }

    const loadData = async()=>{
        await loadProducts()
    }
    const loadProducts = async () =>{
        await loadProductsAction()(dispatch)
    }
    const deleteProducts = async (selected) =>{
        await deleteProductAction(selected)(dispatch)
        router.reload();
    }
    const updateProduct = async (product)=>{
        udpateProductAction(product)(dispatch)
    }
    const value = {
        productListAdminState,
        deleteProducts,
        updateProductFunc
        

    }
    return <ProductListAdminContext.Provider value={value}>
        {props.children}
    </ProductListAdminContext.Provider>
}
export default ProductListAdminProvider
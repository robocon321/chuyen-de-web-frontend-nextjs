import axios from "axios";
import { handleError } from '../../../utils/fn';

const backendUrl = process.env.BACKEND_URL;

const ACTIONS={
    SET_LOADING: 'SET_LOADING',
    SET_MESSAGE: 'SET_MESSAGE',
    SET_ERROR: 'SET_ERROR',
    SET_LOADPRODUCTS: 'SET_LOADPRODUCTS',
    SET_DELETEPRODUCT:'SET_DELETEPRODUCT',
    SET_UPDATEPRODUCT:'SET_UPDATEPRODUCT'
}
const loadProductsAction = () =>async(dispatch) =>{
    await axios({
        method:'GET',
        url:`${backendUrl}/products/getAll`,
    }).then((response)=>{
        dispatch({
            type:ACTIONS.SET_LOADPRODUCTS,
            payload:{
                data:response.data.data,
                message:response.data.message,
                success:response.data.success
            }
        })
    }).catch((error)=>{
        handleError(error,dispatch,ACTIONS.SET_ERROR)
    })
}
const deleteProductAction = (selected)=>async(dispatch)=>{
    await axios({
        method: 'DELETE',
        url: `${backendUrl}/products`,
        data: selected
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        handleError(error, dispatch, ACTIONS.SET_ERROR);
      });
}
const udpateProductAction = (product) =>async(dispatch)=>{
    // product.post.type = 'product';
    await axios({
      method: 'PUT',
      url: `${backendUrl}/products`,
      data: [product]  
    }).then((response) => {
    //   setPostAction(response.data[0])(dispatch);
    dispatch({
        type:ACTIONS.SET_UPDATEPRODUCT,
        payload:{
            data:response.data.data
        }
    })
    }).catch((error) => {
      handleError(error, dispatch, ACTIONS.SET_ERROR);
    })
}
export {
    ACTIONS,
    loadProductsAction,
    deleteProductAction,
    udpateProductAction
}
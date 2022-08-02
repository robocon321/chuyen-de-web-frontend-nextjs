import axios from "axios";
import { handleError } from '../../../utils/fn';

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
    SET_LOADING: 'SET_LOADING',
    SET_MESSAGE: 'SET_MESSAGE',
    SET_ERROR: 'SET_ERROR',
    SET_LOADCHECKOUT: 'SET_LOADCHECKOUT',
}
const loadCheckoutAction = () =>async(dispatch) =>{
    await axios({
        method:'GET',
        url:`${backendUrl}/checkouts/getAll`,
    }).then((response)=>{
        dispatch({
            type:ACTIONS.SET_LOADCHECKOUT,
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
export {
    ACTIONS,
    loadCheckoutAction
}
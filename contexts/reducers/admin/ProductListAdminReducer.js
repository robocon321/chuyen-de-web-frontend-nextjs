import {ACTIONS} from '../../actions/admin/ProductListAdminAction'

const initState = {
    isLoading: true,
    message: '',
    success: false,
    error:null,
    products:[]
}
const reducer = (state=initState,{type,payload})=>{
    switch(type){
        case ACTIONS.SET_LOADING:
            state={
                ...state,
                isLoading:payload,
            }
            break;
        case ACTIONS.SET_LOADPRODUCTS:
            state={
                ...state,
                success:payload.success,
                message:payload.message,
                products:payload.data
            }
            break;
        default:
            break;
        }
        return state;
}
export default reducer;
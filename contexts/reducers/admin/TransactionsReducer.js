import { ACTIONS } from "../../actions/admin/TransactionsAction";

const initState = {
    isLoading: true,
    message: '',
    success: false,
    error:null,
    checkouts:[]
}
const reducer = (state=initState,{type,payload})=>{
    switch(type){
        case ACTIONS.SET_LOADING:
            state={
                ...state,
                isLoading:payload,
            }
            break;
        case ACTIONS.SET_LOADCHECKOUT:
            state={
                ...state,
                success:payload.success,
                message:payload.message,
                checkouts:payload.data
            }
            break;
        default:
            break;
        }
        return state;
}
export default reducer;
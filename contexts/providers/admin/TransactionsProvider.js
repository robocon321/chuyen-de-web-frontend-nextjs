import { useSelect } from '@mui/base'
import React,{useReducer, createContext, useEffect, useContext}  from 'react'
import {ACTIONS,loadCheckoutAction} from '../../actions/admin/TransactionsAction'
import TransactionsReducer from '../../reducers/admin/TransactionsReducer'

export const TransactionsContext = createContext()

const initState = {
    isLoading: true,
    message: '',
    success: false,
    error:null,
    checkouts:[]
}
function TransactionsProvider(props) {
    const [transactionState,dispatch] = useReducer(TransactionsReducer)
  
    useEffect(()=>{
      loadData()
  },[])

  const loadData = async()=>{
      await loadCheckouts()
  }
  const loadCheckouts = async () =>{
      await loadCheckoutAction()(dispatch)
  }
  const value = {
    transactionState,

}
    return (
    <TransactionsContext.Provider value={value}>
      {props.children}
    </TransactionsContext.Provider>
  )
}

export default TransactionsProvider
import axios from "axios";
import { handleError } from '../../utils/fn';

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
    // SET_PRODUCTS3: 'SET_PRODUCTS3',
    SET_PRODUCTS4: 'SET_PRODUCTS4',
    SET_PRODUCTDETAIL: 'SET_PRODUCTDETAIL',
    SET_POSTDETAIL:'SET_POSTDETAIL',
    SET_CATEGORIES: 'SET_CATEGORIES',
    SET_LOADING: 'SET_LOADING',
    SET_MESSAGE: 'SET_MESSAGE',
    SET_ERROR: 'SET_ERROR'
}

const loadPRODUCTS4Action =(numPage,size)=> async (dispatch)=>{
    dispatch({
        type: ACTIONS.SET_LOADING,
        playload:true
    })
    await axios({
        method:'GET',
        url:`${backendUrl}/products?size=${size}&page=${numPage}`,
    }).then((response)=>{
        dispatch({
            type: ACTIONS.SET_PRODUCTS4,
            payload: {
              data: response.data.data.content,
              message: response.data.message,
              success: response.data.success,
              infoPages: response.data.data
        }
    });
    }).catch((error)=>{
        handleError(error, dispatch, ACTIONS.SET_ERROR);
    })
    
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: false
  })
}
const loadProductDetailAction =(slug)=> async (dispatch)=>{
    console.log(slug)
    dispatch({
        type: ACTIONS.SET_LOADING,
        playload:true
    })
    await axios({
        method:'GET',
        url:`${backendUrl}/products/${slug}`,
    }).then((response)=>{
        dispatch({
            type: ACTIONS.SET_PRODUCTDETAIL,
            payload: {
                data: response.data
        }
    });
    
    }).catch((error)=>{
        handleError(error, dispatch, ACTIONS.SET_ERROR);
    })
    console.log(slug)
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: false
  })
}
const loadPostDetailAction =(slug)=> async (dispatch)=>{
    console.log(slug)
    dispatch({
        type: ACTIONS.SET_LOADING,
        playload:true
    })
    await axios({
        method:'GET',
        url:`${backendUrl}/posts/${slug}`,
    }).then((response)=>{
        dispatch({
            type: ACTIONS.SET_POSTDETAIL,
            payload: {
                data: response.data.data
        }
    });
    
    }).catch((error)=>{
        handleError(error, dispatch, ACTIONS.SET_ERROR);
    })
    console.log(slug)
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: false
  })
}
const loadCategoriesAction = () => async (dispatch) => {
    dispatch({
      type: ACTIONS.SET_LOADING,
      payload: true
    });
  
    await axios({
      method: 'GET',
      url: `${backendUrl}/taxomonies?OR_type=post`
    }).then((response) => {
      dispatch({
        type: ACTIONS.SET_CATEGORIES,
        payload: {
          data: response.data.data,
          message: response.data.message,
          success: response.data.success
        }
      });
    }).catch((error) => {
      handleError(error, dispatch, ACTIONS.SET_ERROR);
    });
  
    dispatch({
      type: ACTIONS.SET_LOADING,
      payload: false
    })
  }

export{
    ACTIONS,
    // loadPRODUCTS3Action,
    loadPRODUCTS4Action,
    loadProductDetailAction,
    loadPostDetailAction,
    loadCategoriesAction
    
}
import { ACTIONS } from "../actions/AddressesAction";

const initState = {
  isLoading: true,
  addresses: null,
  error: null,
  addressModal: {},
  visibleModal: false
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_LOADING:
      state = {
        ...state,
        isLoading: payload
      };
      break;
    case ACTIONS.SET_ERROR:
      state = {
        ...state,
        error: payload
      };
      break;
    case ACTIONS.SET_ADDRESSES:
      state = {
        ...state,
        addresses: payload
      };
      break;
    case ACTIONS.SET_VISIBLE_MODAL:
      state = {
        ...state,
        visibleModal: payload
      };
      break;
    case ACTIONS.SET_ADDRESS_MODAL:
      state = {
        ...state,
        addressModal: payload
      };
      break;
    default:
      break;
  }
  return state;
};

export default reducer;

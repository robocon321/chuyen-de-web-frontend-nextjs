import axios from "axios";
import { handleError } from "../../utils/fn";

const backendUrl = process.env.BACKEND_URL;
const SHIPPING_TOKEN = process.env.SHIPPING_TOKEN;

const ACTIONS = {
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  SET_ADDRESSES: "SET_ADDRESSES",
  SET_VISIBLE_MODAL: "SET_VISIBLE_MODAL",
  SET_ADDRESS_MODAL: "SET_ADDRESS_MODAL"
};

const loadAddressesAction = () => async (dispatch) => {
  await axios({
    method: "GET",
    url: `${backendUrl}/contacts/byUser`,
    params: {
      sort: "priority__DESC"
    }
  })
    .then(async (response) => {
      // set url data

      axios.defaults.baseURL = "https://online-gateway.ghn.vn/shiip/public-api";
      axios.defaults.headers.common["token"] = SHIPPING_TOKEN;

      // each item in address info

      const { data } = response.data;

      for (var i = 0; i < data.length; i++) {
        // set province name
        await axios
          .get("/master-data/province")
          .then(function (response) {
            const provinceName = response.data.data.find(
              (item) => item.ProvinceID == data[i].province
            ).ProvinceName;
            data[i].province_name = provinceName;
          })
          .catch(function (error) {
            console.error(error);
          });

        // set district name
        await axios
          .get("/master-data/district", {
            params: {
              province_id: data[i].province,
            },
          })
          .then(function (response) {
            const districtName = response.data.data.find(
              (item) => item.DistrictID == data[i].district
            ).DistrictName;
            data[i].district_name = districtName;
          })
          .catch(function (error) {
            console.error(error);
          });

        // set ward name
        await axios
          .get("/master-data/ward", {
            params: {
              district_id: data[i].district,
            },
          })
          .then(function (response) {
            const wardName = response.data.data.find(
              (item) => item.WardCode == data[i].ward
            ).WardName;
            data[i].ward_name = wardName;
          })
          .catch(function (error) {
            console.error(error);
          });
      }
      dispatch({
        type: ACTIONS.SET_ADDRESSES,
        payload: data,
      });
    })
    .catch((error) => {
      handleError(error, dispatch, ACTIONS.SET_ERROR);
    });
};

const setLoadingAction = (isLoading) => async (dispatch) => {
  await dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading,
  });
};

const addAddressAction = (address) => async (dispatch) => {
  console.log("Add", address);
  await axios({
    method: 'POST',
    data: [address],
    url: `${backendUrl}/contacts`
  }).then((response) => {
    console.log(response.data);
    // dispatch({
    //   type: ACTIONS.SET_ADDRESSES,
    //   payload: {
    //     data: response.data.data,
    //     message: response.data.message,
    //     success: response.data.success
    //   }
    // });
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });
};

const updateAddressAction = (address) => async (dispatch) => {
  await axios({
    method: 'PUT',
    data: [address],
    url: `${backendUrl}/contacts`
  }).then((response) => {
    console.log(response.data);
    // dispatch({
    //   type: ACTIONS.SET_ADDRESSES,
    //   payload: {
    //     data: response.data.data,
    //     message: response.data.message,
    //     success: response.data.success
    //   }
    // });
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });
};

const setVisibleModalAction = (visible) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_VISIBLE_MODAL,
    payload: visible
  });
};

const setAddressModalAction = (addressModal) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_ADDRESS_MODAL,
    payload: addressModal
  })
};

const setErrorAction = (error) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_ERROR,
    payload: error
  })
}

export {
  ACTIONS,
  loadAddressesAction,
  setLoadingAction,
  addAddressAction,
  updateAddressAction,
  setVisibleModalAction,
  setAddressModalAction,
  setErrorAction
};

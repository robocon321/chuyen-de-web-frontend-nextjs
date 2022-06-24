import axios from "axios";
import { handleError } from "../../utils/fn";

const backendUrl = process.env.BACKEND_URL;
const SHIPPING_TOKEN = process.env.SHIPPING_TOKEN;

const ACTIONS = {
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  SET_SELECTED: "SET_SELECTED",
  SET_ADDRESSES: "SET_ADDRESSES",
  SET_VISIBLE_MODAL: "SET_VISIBLE_MODAL",
};

const loadAddressesAction = () => async (dispatch) => {
  await axios({
    method: "GET",
    url: `${backendUrl}/contacts`,
  })
    .then(async (response) => {
      // set url data

      axios.defaults.baseURL = "https://online-gateway.ghn.vn/shiip/public-api";
      axios.defaults.headers.common["token"] = SHIPPING_TOKEN;

      // each item in address info

      const { data } = response.data;

      await data.forEach(async (row) => {
        // set province name
        await axios
          .get("/master-data/province")
          .then(function (response) {
            const provinceName = response.data.data.find(item => item.ProvinceID == row.province).ProvinceName;
            row.province_name = provinceName;
          })
          .catch(function (error) {
            console.error(error);
          });

        // set district name
        await axios
          .get("/master-data/district", {
            params: {
              province_id: row.province
            },
          })
          .then(function (response) {
            const districtName = response.data.data.find(item => item.DistrictID == row.district).DistrictName;
            row.district_name = districtName;
          })
          .catch(function (error) {
            console.error(error);
          });

        // set ward name
        await axios
          .get("/master-data/ward", {
            params: {
              district_id: row.district
            },
          })
          .then(function (response) {
            const wardName = response.data.data.find(item => item.WardCode == row.ward).WardName;
            row.ward_name = wardName;
          })
          .catch(function (error) {
            console.error(error);
          });
      });

      dispatch({
        type: ACTIONS.SET_ADDRESSES,
        payload: data
      });
    })
    .catch((error) => {
      handleError(error, dispatch, ACTIONS.SET_ERROR);
    });
};

const setSelectedAction = (index) => async (dispatch) => {
  await dispatch({
    type: ACTIONS.SET_SELECTED,
    payload: index,
  });
};

const setLoadingAction = (isLoading) => async (dispatch) => {
  await dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading,
  });
};

const addAddressAction = (address) => async (dispatch) => {
  // Do something
};

const updateAddressAction = (address) => async (dispatch) => {
  // Do something
};

const setVisibleModalAction = (visible) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_VISIBLE_MODAL,
    payload: visible,
  });
};

export {
  ACTIONS,
  loadAddressesAction,
  setSelectedAction,
  setLoadingAction,
  addAddressAction,
  updateAddressAction,
  setVisibleModalAction,
};

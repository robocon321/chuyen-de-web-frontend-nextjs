import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import styles from "./ModalAddress.module.css";
import Input from "../../../common/Input";
import { AddressesContext } from "../../../../contexts/providers/AddressesProvider";
import { Box, Modal } from "@mui/material";
import { AuthContext } from "../../../../contexts/providers/AuthProvider";

const SHIPPING_TOKEN = process.env.SHIPPING_TOKEN;

axios.defaults.baseURL = "https://online-gateway.ghn.vn/shiip/public-api";
axios.defaults.headers.common["token"] = SHIPPING_TOKEN;

const ModelAddress = (props) => {
  const { setVisibleModal, addressesState, setAddressModal, submitForm } =
    useContext(AddressesContext);
  const { t } = useContext(AuthContext);

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    getProvinces();
    if (Object.keys(addressesState.addressModal).length != 0) {
      if(addressesState.addressModal.province) {
        getDistricts(addressesState.addressModal.province);
      }
      if(addressesState.addressModal.district) {
        getWards(addressesState.addressModal.district);
      }
    }
  }, [addressesState.addressModal]);

  const getProvinces = () => {
    axios
      .get("/master-data/province")
      .then(function (response) {
        setProvinces(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getDistricts = (province_id) => {
    axios
      .get("/master-data/district", {
        params: {
          province_id,
        },
      })
      .then((response) => {
        setDistricts(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getWards = (district_id) => {
    axios
      .get("/master-data/ward", {
        params: {
          district_id,
        },
      })
      .then(async (response) => {
        setWards(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const onChange = (e) => {
    const { name } = e.target;
    if(name == "priority") {
      const isChecked = e.target.checked;
      if(isChecked && addressesState.addresses.length > 0) {
        setAddressModal({
          ...addressesState.addressModal,
          priority: addressesState.addresses[0].priority + 1
        });
      }
    } else {
      const { value } = e.target;
      if (name == null || value == null) return;
      if (name == "province") {
        getDistricts(value);
        setWards([]);
        setAddressModal({
          ...addressesState.addressModal,
          [name]: value,
          district: '',
          ward: ''
        });
      }
      else if (name == "district") {
        getWards(value);
        setAddressModal({
          ...addressesState.addressModal,
          [name]: value,
          ward: ''
        });
      } else {
        setAddressModal({
          ...addressesState.addressModal,
          [name]: value,
        });  
      }  
    }
  };

  return (
    <Modal
      open={addressesState.visibleModal}
      onClose={() => {
        setVisibleModal(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles["model-address"]}>
        <Input
          id="fullname"
          title={t('fullname_modal')}
          name="fullname"
          placeholder={t('fullname_modal_placeholder')}
          isRequire="true"
          defaultValue={addressesState.addressModal.fullname}
          onChange={onChange}
        />
        <Input
          id="province"
          title={t('province_modal')}
          placeholder={t('province_modal_placeholder')}
          type="select"
          name="province"
          arrayObj={provinces}
          valueObj="ProvinceID"
          textInnerObj="ProvinceName"
          defaultValue={addressesState.addressModal.province}
          isRequire="true"
          onChange={onChange}
        />
        <Input
          id="district"
          title={t('district_modal')}
          placeholder={t('district_modal_placeholder')}
          type="select"
          name="district"
          arrayObj={districts}
          valueObj="DistrictID"
          textInnerObj="DistrictName"
          defaultValue={addressesState.addressModal.district}
          isRequire="true"
          onChange={onChange}
        />
        <Input
          id="ward"
          title={t('ward_modal')}
          placeholder={t('ward_modal_placeholder')}
          type="select"
          name="ward"
          arrayObj={wards}
          valueObj="WardCode"
          textInnerObj="WardName"
          defaultValue={addressesState.addressModal.ward}
          isRequire="true"
          onChange={onChange}
        />
        <Input
          id="detailAddress"
          title={t('detail_address_modal')}
          placeholder={t('detail_address_modal_placeholder')}
          type="textarea"
          name="detailAddress"
          defaultValue={addressesState.addressModal.detailAddress}
          isRequire="true"
          onChange={onChange}
        />
        <Input
          id="phone"
          title={t('phone_modal')}
          placeholder={t('phone_modal_placeholder')}
          isRequire="true"
          name="phone"
          defaultValue={addressesState.addressModal.phone}
          onChange={onChange}
        />
        <input id="priority" name="priority" type="checkbox" onChange={onChange} /> <label>{t('default_address_modal')}</label>
        <div className={styles["wrap-btn"]}>
          <button className={styles["btn-submit"]} onClick={submitForm}>
          {t('submit_modal')}
          </button>
          <button
            className={styles["btn-cancel"]}
            onClick={() => {
              setVisibleModal(false);
            }}
          >
            {t('cancel_modal')}
          </button>
        </div>
        <div
          onClick={() => {
            setVisibleModal(false);
          }}
          className={styles.close}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </Modal>
  );
};

export default ModelAddress;

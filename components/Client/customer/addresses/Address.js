import React, { useContext } from "react";
import axios from "axios";

import { AddressesContext } from "../../../../contexts/providers/AddressesProvider";
import styles from "./Address.module.css";
import { AuthContext } from "../../../../contexts/providers/AuthProvider";

const SHIPPING_TOKEN = process.env.SHIPPING_TOKEN;

axios.defaults.baseURL = 'https://online-gateway.ghn.vn/shiip/public-api';
axios.defaults.headers.common['token'] = SHIPPING_TOKEN;

const Address = (props) => {
  const { setVisibleModal, setSelected, addressesState } = useContext(AddressesContext);
  const { t } = useContext(AuthContext);

  return (
    <div className={styles["container-address"]}>
      <div className={styles.row}>
        <h1>{t('list_address')}</h1>
        <button onClick={
          () => {
            setSelected(-1);
            setVisibleModal(true);
        }
        }>{t('add_new_address')}</button>
      </div>
      <div className={styles.addresses}>
        {addressesState.addresses&&addressesState.addresses.map((item, index) => (
          <div className={styles.address} key={item.id}>
            <div className={styles.row}>
              <p>
                <b>{item.fullname}</b>{" "}
                {index == 0 && (
                  <span>
                    <i className="fa-regular fa-circle-check"></i> {t('default_address')}
                  </span>
                )}
              </p>
              <a
                onClick={() => {
                  setSelected(index);
                  setVisibleModal(true);
                }}
                href="#"
              >
                {t('edit')}
              </a>
            </div>
            <div>
              <span>{t('address')}: </span>
              <span>{item.detailAddress}, {item.ward_name}, {item.district_name}, {item.province_name}</span>
            </div>
            <div>
              <span>{t('phone')}: </span>
              <span>{item.phone}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;

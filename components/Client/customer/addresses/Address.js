import React, { useContext } from "react";

import { AddressesContext } from "../../../../contexts/providers/AddressesProvider";
import styles from "./Address.module.css";

const Address = (props) => {
  const { setVisibleModal, setSelected, addressesState } = useContext(AddressesContext);

  return (
    <div className={styles["container-address"]}>
      <div className={styles.row}>
        <h1>Sổ địa chỉ</h1>
        <button onClick={setVisibleModal}>Thêm địa chỉ</button>
      </div>
      <div className={styles.addresses}>
        {addressesState.addresses.map((item, index) => (
          <div className={styles.address} key={item.id}>
            <div className={styles.row}>
              <p>
                <b>{item.fullName}</b>{" "}
                {item.status && (
                  <span>
                    <i className="fa-regular fa-circle-check"></i> Địa chỉ mặc
                    định
                  </span>
                )}
              </p>
              <a
                onClick={() => {
                  setSelected(index);
                  setVisibleModal();
                }}
                href="#"
              >
                Chỉnh sửa
              </a>
            </div>
            <div>
              <span>Địa chỉ: </span>
              <span>{item.detailAddress}</span>
            </div>
            <div>
              <span>Điện thoại: </span>
              <span>{item.phone}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;

import React from 'react';
import styles from './Address.module.css';

const Address = (props) => {
  const addresses = [
    {
      id: 0,
      fullName: 'PHẠM SHIN',
      status: true,
      address: 'số nhà 74, ấp Thới Hòa, Xã Thới Sơn, Thành phố Mỹ Tho, Tiền Giang',
      phone: '0788814025'
    },
    {
      id: 1,
      fullName: 'PHẠM SHIN',
      status: false,
      address: 'số nhà 74, ấp Thới Hòa, Xã Thới Sơn, Thành phố Mỹ Tho, Tiền Giang',
      phone: '0788814025'
    },
    {
      id: 2,
      fullName: 'PHẠM SHIN',
      status: false,
      address: 'số nhà 74, ấp Thới Hòa, Xã Thới Sơn, Thành phố Mỹ Tho, Tiền Giang',
      phone: '0788814025'
    },
    {
      id: 3,
      fullName: 'PHẠM SHIN',
      status: false,
      address: 'số nhà 74, ấp Thới Hòa, Xã Thới Sơn, Thành phố Mỹ Tho, Tiền Giang',
      phone: '0788814025'
    }
  ]

  const ItemAddress = ({item}) => {
    return (
      <div className={styles.address}>
        <div className={styles.row}>
          <p><b>{item.fullName}</b> {item.status && <span><i className="fa-regular fa-circle-check"></i> Địa chỉ mặc định</span>}</p>
          <a onClick={props.toggleModel} href='#'>Chỉnh sửa</a>
        </div>
        <div><span>Địa chỉ: </span><span>{item.address}</span></div>
        <div><span>Điện thoại: </span><span>{item.phone}</span></div>
      </div>
    )
  }

  return (
    <div className={styles['container-address']}>
      <div className={styles.row}>
        <h1>Sổ địa chỉ</h1>
        <button onClick={props.toggleModel}>Thêm địa chỉ</button>
      </div>
      <div className={styles.addresses}>
        {
          addresses.map(item => (
            <ItemAddress key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default Address;
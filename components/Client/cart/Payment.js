import React, {useState, useEffect} from 'react';
import axios from 'axios';


import styles from './Payment.module.css';

import {SHIPPING_TOKEN} from '../../../constant/env' 
axios.defaults.baseURL = 'https://online-gateway.ghn.vn/shiip/public-api';
axios.defaults.headers.common['token'] = SHIPPING_TOKEN;

const Payment = (props) => {
  const [shipping, setShipping] = useState({
    service_type_id: 2,
    insurance_value: 50000,
    coupon: '',
    from_district_id: 3695,
    to_district_id: -1,
    to_ward_code: -1,
    height: 10,
    width: 10,
    length: 15,
    weight: 1000,
  });

  const [cost, setCost] = useState({
    price: 0,
    ship: 0
  });

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    getProvinces();
  }, []);

  const getProvinces = () => {
    axios.get('/master-data/province')
    .then(function (response) {
      setProvinces(response.data.data);
    })
    .catch(function (error) {
      console.error(error);
    })
  }

  const getDistricts = (province_id) => {
    axios.get('/master-data/district', {
      params: {
        province_id
      }
    })
    .then(function (response) {
      setDistricts(response.data.data);
    })
    .catch(function (error) {
      console.error(error);
    })
  }

  const getWards = (district_id) => {
    setShipping({
      ...shipping,
      to_district_id: district_id
    })
    axios.get('/master-data/ward', {
      params: {
        district_id
      }
    })
    .then(function (response) {
      setWards(response.data.data);
    })
    .catch(function (error) {
      console.error(error);
    })
  }

  const onChange = (e) => {
    const {name, value} = e.target;
    if(!name || !value) return ;
    if(name == 'province') 
      getDistricts(value);
    else if(name == 'district')
      getWards(value);
    else 
      setShipping({
        ...shipping,
        to_ward_code: value
      })    
  }

  const onEstimate = () => {
    if(!shipping.from_district_id || 
      !shipping.to_district_id || 
      !shipping.insurance_value || 
      !shipping.height || 
      !shipping.width || 
      !shipping.length ||
      !shipping.to_ward_code) return ;

    axios.get('/v2/shipping-order/fee', {
      params: shipping
    })
    .then(function (response) {
      setCost({
        price: shipping.insurance_value,
        ship: response.data.data.total
      });
    })
    .catch(function (error) {
      console.error(error);
    })
  }

  return (
    <div className={styles.payment}>
      <div className={styles.calculate}>
        <h3>Calculate Shipping</h3>
        <select id="province" name="province" onChange={onChange}>
          <option value="" selected disabled hidden>Chọn Tỉnh/Thành Phố</option>
          {
            provinces.map((item, index) => (
              <option key={index} value={item.ProvinceID}>{item.ProvinceName}</option>              
            ))
          }
        </select>
        <select id="district" name="district" onChange={onChange}>
          <option value="" selected disabled hidden>Chọn Quận/Huyện</option>
          {
            districts.map((item, index) => (
              <option key={index} value={item.DistrictID}>{item.DistrictName}</option>              
            ))
          }
        </select>
        <select id="ward" name="ward" onChange={onChange}>
          <option value="" selected disabled hidden>Chọn Phường/Xã</option>
          {
            wards.map((item, index) => (
              <option key={index} value={item.WardCode}>{item.WardName}</option>              
            ))
          }
        </select>
        <button onClick={onEstimate}>ESTIMATE</button>
        <h3>Discount Coupon Code</h3>
        <input type='text' placeholder='Coupon code'/>
        <button>APPLY CODE</button>        
      </div>
      <div className={styles.checkout}>
        <div className={styles['cart-summary']}>
          <h3>Cart Summary</h3>
          <div><span>Sub Total</span><span>{cost.price} VNĐ</span></div>
          <div><span>Shipping Total</span><span>{cost.ship} VNĐ</span></div>
          <hr />
          <div className={styles.total}><span>Grand Total</span><span>{cost.price + cost.ship} VNĐ</span></div>
        </div>
        <div className={styles['btn-checkout']}>
          <button>Update Cart</button>
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Payment
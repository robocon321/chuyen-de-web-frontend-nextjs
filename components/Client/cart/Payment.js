import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';


import styles from './Payment.module.css';
import Link from "next/link";
import { CartContext } from '../../../contexts/providers/CartProvider';

axios.defaults.baseURL = 'https://online-gateway.ghn.vn/shiip/public-api';
axios.defaults.headers.common['token'] = process.env.SHIPPING_TOKEN;

const Payment = ({subTotal,cartId}) => {
  const {cartState} = useContext(CartContext)
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
  const [address,setAddress] = useState({
    cityId:0,
    districtsId:0,
    wardId:0
  })

  useEffect(() => {
    getProvinces();
    
  }, [address]);
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
  // const address ={
  //   cityId:0,
  //   districts:0,
  //   wardId:0
  // }
  const onChange = (e) => {
    const {name, value} = e.target;
    if(!name || !value) return ;
    if(name == 'province'){
      setAddress({
        ...address,
        cityId : value})
      getDistricts(value);
    }
    else if(name == 'district'){
      // address.districts = value
      setAddress({
        ...address,
        districtsId: value})
      getWards(value);
    }
    else {  setAddress({
      ...address,
      wardId : value})
      setShipping({
        ...shipping,
        to_ward_code: value
      })}
  }
  console.log("address",address)
  console.log("cart ship",cartState.address[0])
  // console.log(provinces.filter((item)=>item.ProvinceID==address.cityId))

  const onEstimate = () => {
    if(shipping.to_district_id===-1){
    setShipping({
      ...shipping,
      to_district_id:parseInt(cartState.address[0]?.district),
      to_ward_code:parseInt(cartState.address[0]?.ward),
    })
    setAddress({
      ...address,
      cityId:parseInt(cartState.address[0]?.province),
      districtsId:parseInt(cartState.address[0]?.district),
      wardId:parseInt(cartState.address[0]?.ward)
    })
  }
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
  const data = {cartId:cartId,
                subTotal:subTotal,
                shipTotal:cost.ship,
                city:'',
                district:'',
                ward:''
  }
  const getDataAddress = () =>{
    data.city = provinces.filter((item)=>item.ProvinceID==address.cityId)[0]?.ProvinceName
    data.district = districts.filter((item)=>item.DistrictID==address.districtsId)[0]?.DistrictName
    data.ward = wards.filter((item)=>item.WardCode==address.wardId)[0]?.WardName
  }
  console.log('data send',data)
  return (
    <div className={styles.payment}>
      <div className={styles.calculate}>
        <h3>Calculate Shipping</h3>
        <select id="province" name="province" onChange={onChange}>
          <option defaultValue={parseInt(cartState.address[0]?.province)} selected disabled hidden>{cartState.address[0]?.province_name}</option>
          {
            provinces.map((item, index) => {getDataAddress()
              return(
              <option key={index} value={item.ProvinceID}>{item.ProvinceName}</option>              
            )})
          }
        </select>
        <select id="district" name="district" onChange={onChange}>
          <option defaultValue={parseInt(cartState.address[0]?.district)} selected disabled hidden>{cartState.address[0]?.district_name}</option>
          {
            districts.map((item, index) => {getDataAddress()
              return(
              <option onClick={()=>data.district = item.DistrictName} key={index} value={item.DistrictID}>{item.DistrictName}</option>              
            )})
          }
        </select>
        <select id="ward" name="ward" onChange={onChange}>
          <option defaultValue={parseInt(cartState.address[0]?.ward)} selected disabled hidden>{cartState.address[0]?.ward_name}</option>
          {
            wards.map((item, index) => {getDataAddress()
              return(
              <option  key={index} value={item.WardCode}>{item.WardName}</option>              
            )})
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
          <div><span>Sub Total</span><span>{subTotal} VNĐ</span></div>
          <div><span>Shipping Total</span><span>{cost.ship} VNĐ</span></div>
          <hr />
          <div className={styles.total}><span>Grand Total</span><span>{subTotal + cost.ship} VNĐ</span></div>
        </div>
        <div className={styles['btn-checkout']}>
          <button>Update Cart</button>
          <Link 
            href={{
              pathname:'/checkout',
              query:data,
              }}>
            <button>CHECKOUT</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Payment
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import styles from './ModalAddress.module.css';
import Input from '../../../common/Input';

const SHIPPING_TOKEN = process.env.SHIPPING_TOKEN;

axios.defaults.baseURL = 'https://online-gateway.ghn.vn/shiip/public-api';
axios.defaults.headers.common['token'] = SHIPPING_TOKEN;


const ModelAddress = (props) => {
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
    else return;
  }

  return (
    <div className={styles['container-model']}>
      <div className={styles['model-address']}>
        <Input 
          title='Họ và tên'
          placeholder='Nhập họ và tên'
          isRequire='true'
        />
        <Input 
          title='Công ty'
          placeholder='Nhập tên công ty'
        />
        <Input 
          title='Tỉnh/Thành '
          placeholder='Chọn tỉnh thành'
          type='select'
          name='province'
          arrayObj={provinces}
          valueObj='ProvinceID'
          textInnerObj='ProvinceName'
          onChange={onChange}
        />
        <Input 
          title='Quận huyện '
          placeholder='Chọn quận huyện'
          type='select'
          name='district'
          arrayObj={districts}
          valueObj='DistrictID'
          textInnerObj='DistrictName'
          onChange={onChange}
        />
        <Input 
          title='Phường xã '
          placeholder='Chọn phường xã'
          type='select'
          name='ward'
          arrayObj={wards}
          valueObj='WardCode'
          textInnerObj='WardName'
          onChange={onChange}
        />
        <Input 
          title='Địa chỉ'
          placeholder='Nhập địa chỉ'
          type='textarea'      
        />
        <Input 
          title='Công ty'
          placeholder='Nhập tên công ty'
        />
        <Input 
          title='Số điện thoại'
          placeholder='Nhập số điện thoại'
          isRequire='true'
        />
        <div onClick={props.toggleModel} className={styles.close}><i className="fa-solid fa-xmark"></i></div>
      </div>
    </div>
  )
}

export default ModelAddress;
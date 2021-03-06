import { Slider } from '@mui/material';
import React, {useState,useContext,useEffect} from 'react';
import Image from 'next/image';
import Moment from 'react-moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Sidebar.module.css';
import { ShopContext } from "../../../contexts/providers/ShopProvider";

// const categories = [
//   {
//     id: 0,
//     title: 'Bonsai',
//     count: 3,
//     parent: -1,
//   },
//   {
//     id: 1,
//     title: 'House Plants',
//     count: 6,
//     parent: -1,
//   },
//   {
//     id: 2,
//     title: 'Indoor Living',
//     count: 9,
//     parent: -1,
//   },
//   {
//     id: 3,
//     title: 'Outdoor Living',
//     count: 15,
//     parent: -1,
//   },
//   {
//     id: 4,
//     title: 'Perennial',
//     count: 5,
//     parent: -1,
//   },
//   {
//     id: 5,
//     title: 'Plant For Gift',
//     count: 5,
//     parent: -1
//   },
//   {
//     id: 6,
//     title: 'Garden Tools',
//     count: 5,
//     parent: -1
//   },
//   {
//     id: 7,
//     title: 'Saws',
//     count: 0,
//     parent: 6
//   },
//   {
//     id: 8,
//     title: 'Concrete Tools',
//     count: 6,
//     parent: 6
//   },
//   {
//     id: 9,
//     title: 'Drills',
//     count: 2,
//     parent: 6
//   },
//   {
//     id: 10,
//     title: 'Sandders',
//     count: 1,
//     parent: 6
//   },
//   {
//     id: 11,
//     title: 'Tools',
//     count: 15,
//     parent: -1
//   }
// ];

const manufacturers = [
  {
    id: 0,
    name: 'Christian Dior',
    count: 5
  },
  {
    id: 1,
    name: 'Diesel',
    count: 15
  },
  {
    id: 2,
    name: 'Ferragamo',
    count: 4
  },
  {
    id: 3,
    name: 'Hermes',
    count: 20
  },
  {
    id: 4,
    name: 'Louis Vuiton',
    count: 35
  }
]

const minDistance = 10;


const Sidebar = props => {
  const {shopState,router} = useContext(ShopContext)
  const [rangePrice, setRangePrice] = useState([0, 1000]);
  const [search, setSearch] = useState('');
  // const router = useRouter();
  // useEffect(() => {
  //   if(!router.isReady) return;
  //   loadCategoriesPage()
    
  // }, [router.isReady]);
  // const loadCategoriesPage = ()=>{
  //   loadCategories()
  // }
  // console.log(shopState.categories)
  const findChildrenElement = (id) => {
    // if(shopState.categories){
    const children = shopState.categories.filter(item => item.parent === id);
    return children.map(item => (
      <li key={item.id}>
        <a href='#'>{item.name} ({item.totalProduct})</a>
        {
          blogState.categories.filter(i => i.parent != null && i.parent.id === item.id).length > 0 && (
          <ul key={item.id} className={styles['children-categories']}>
            {findChildrenElement(item.id)}
          </ul>
        )}
      </li>
    ))
  // }
  }
  // const onSearch = () => {
  //   router.push("/blogs?search="+search);
  // }
  const createQuery = (search, page, AND_taxomony) => {
    const query = {};
    if(search != null && search.length != 0) {
      query['search'] = search;
    }
    if(page != null) {
      query['page'] = page;      
    }
    if(AND_taxomony != null) {
      query['AND_taxomony'] = AND_taxomony;
    }
    return query;
  }

  const onChangeRangePrice = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setRangePrice([Math.min(newValue[0], rangePrice[1] - minDistance), rangePrice[1]]);
    } else {
      setRangePrice([rangePrice[0], Math.max(newValue[1], rangePrice[0] + minDistance)]);
    }
  }

  return (
    <>
    <div className={styles.sidebar}>
      <div className={styles.category}>
        <h2>CATEGORIES</h2>
        <ul className={styles['parent-categories']}>
        {shopState.categories===null?null:
          shopState.categories.map(item => (
            <li className={styles['item-slidebar']} key={item.id}>
            <Link href={
              {
                pathname: '/shop',
                query: createQuery(router.query.search, 0, item.id)
              }
            }><a >{item.name} ({item.totalPost})</a></Link>
            {
              shopState.categories.filter(i => i.parent != null && i.parent.id === item.id).length > 0 && (
              <ul key={item.id} className={styles['children-categories']}>
                {findChildrenElement(item.id)}
              </ul>
            )}
          </li>
        ))
        }
        </ul>
      </div>
      <hr />
      <div className={styles['filter-price']}>
        <h2>FILTER BY PRICE</h2>
        <Slider
          onChange={onChangeRangePrice}
          value={rangePrice}
          valueLabelDisplay="auto"
          disableSwap
          color='success'
        />
        <div><span>${rangePrice[0]}</span> - <span>${rangePrice[1]}</span></div>
      </div>
      <hr />
      <div className={styles['manufacturer']}>
        <h2>MANUFACTURER</h2>
        <ul>
          {
            manufacturers.map((item) => (
              <li key={item.id}>
                <input type='checkbox' id={item.id} value={item.id} />
                <label htmlFor={item.id}>
                  <span>{item.name}</span>
                  <span>{item.count}</span>
                </label>
              </li>
              
            ))
          }
        </ul>
      </div>
    </div>
    <div className={styles.banner}>
      <Image 
        src={'https://template.hasthemes.com/alula/alula/assets/img/banners/banner-sidebar.webp'}
        alt='Not found'
        width={300}
        height={500}
      />
    </div>
    </>
  )
}

export default Sidebar;
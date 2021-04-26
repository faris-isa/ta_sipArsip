import React, { useState, useEffect } from 'react';
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';
import {
  CCard,
  CCardBody,
} from '@coreui/react';

import axiosConfig from "../../axios";

import CardHeader from '../.components/CardHeader';
import TableOffers from './components/TableOffers';

const Offers = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);



  const getOffers = async () => {
    try {
      const offers = await axiosConfig.get('/offers')
      const temp = offers.data;
      // const accept = temp.reduce((filter, value) => {
      //   if (value.status === "not decided") {
      //     const filtered = value;
      //     filter.push(filtered);
      //   }
      //   return filter;
      // }, []);
      // setData(accept);
      setData(temp);
      setLoad(false);
    } catch(error) {

    }
  }

  useEffect(() => {
    getOffers();
  }, [setData]);

  return (
    <>
      <CCard>
          <CardHeader title="Daftar Penawaran" type="tambah" link="/penawaran/tambah"/>
          {/* <CardHeader title="Penawaran"/> */}
        <CCardBody>
          <TableOffers offers={data} load={load}/>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Offers;

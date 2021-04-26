import React, { useState, useEffect } from 'react';
import {
  CCard,
  CCardBody,
} from '@coreui/react';

import axiosConfig from "../../axios";

import CardHeader from '../.components/CardHeader';
import TableOffers from './components/ListTable';

const Purchases = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);



  const getPurchases = async () => {
    try {
      const purchase = await axiosConfig.get('/purchases')
      const temp = purchase.data;
      setData(temp);
      setLoad(false);
    } catch(error) {

    }
  }

  // console.log(data)

  useEffect(() => {
    getPurchases();
  }, [setData]);

  return (
    <>
      <CCard>
          <CardHeader title="Daftar Pembelian"/>
        <CCardBody>
          <TableOffers data={data} load={load}/>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Purchases;

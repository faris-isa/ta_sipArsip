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

import TablePurch from './components/RegTable';
import Header from '../.components/CardHeader';

const ListRegPurchases = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);



  const getPur = async () => {
    try {
      const offpurs = await axiosConfig.get('/purchases')
      const temp = offpurs.data;
      const belum = temp.reduce((filter, value) => {
        if (value.status === "belum") {
          const filtered = value;
          filter.push(filtered);
        }
        return filter;
      }, []);
      setData(belum);
      // setData(temp);
      setLoad(false);
    } catch(error) {

    }
  }

  useEffect(() => {
    getPur();
  }, [setData]);

  return (
    <>
      <CCard>
          <Header title="Daftar Pembelian"/>
        <CCardBody>
          <TablePurch data={data} load={load} />
        </CCardBody>
      </CCard>
    </>
  )
}

export default ListRegPurchases;

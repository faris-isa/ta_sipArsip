import React, {useState} from 'react';
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';
import {
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react';

import TableOffers from './components/Table';
// import Header from './components/Header';

const Customers = () => {

  return (
    <>
      <CCard>
        <CCardHeader>
          <Header title="Pelanggan"/>
        </CCardHeader>
        <CCardBody>
          <TableOffers />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Customers;

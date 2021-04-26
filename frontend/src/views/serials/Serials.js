import React, { useState, useEffect } from 'react';
import {
  CCard,
  CCardBody,
} from '@coreui/react';

import axiosConfig from "../../axios";

import CardHeader from '../.components/CardHeader';
import Table from './component/Table';
// import TableProducts from './components/table/TableProducts';
// import OngoingTable from './components/table/GoingTable';
// import DepracatedTable from './components/table/DepracateTable';

// import Swal from 'sweetalert2'

const Serials = () => {
  const [serials, setSerials] = useState([{
      tanggal_beli: "",
      tanggal_selesai:""
  }]);
  const [load, setLoad] = useState(true);

  const getSerials = async () => {
    try {
      const serials = await axiosConfig.get('/serials');

      setSerials(serials.data)
      setLoad(false);

    } catch(error) {

    }
  }

  useEffect(() => {
    getSerials();
    // getGoingProducts();
    // getDepProducts();
  }, []);

  return (
    <>
        <CCard>
          <CardHeader title="Serial Number"/>
          <CCardBody>
            <Table laod={load} serials={serials}/>
          </CCardBody>
        </CCard>
    </>
  )
}

export default Serials;

import React, { useState, useEffect } from 'react';
import axiosConfig from "../../axios";
import {
  CCard,
  CCardBody,
} from '@coreui/react';

import Header from '../.components/CardHeader';
import Detail from './components/PurchaseDetail';
import Loadwait from '../.components/Loading';


const Purchase = ({match}) => {

  const id = match.params.id;
  const [ purchasedata, setPurchasedata ] = useState({
    status: "",
    tawaran: [{
      nama_pembeli: "",
      harga_total: ""
    }],
    detail: [{
      model_produk: "",
      type_products: "",
      pivot: {
        serial_number: "",
        tanggal_beli: "",
        lokasi: "",
        masa_garansi: ""
      }
    }],
    not_products: [{
      model_produk: "",
      pivot: {
        serial_number: "",
        tanggal_beli: "",
        lokasi: "",
        masa_garansi: ""
      }
    }]
  });
  const [isload, setIsload] = useState(true)

  const getPurchase = async () => {
    try {
      const purchases = await axiosConfig.get(`/purchases/${id}`);
      setPurchasedata(purchases.data);
      setIsload(false)
    } catch(error) {

    }
  }

  useEffect(() => {
    getPurchase()
  });

  // const offerDetails = offerdata ? Object.entries(offerdata) :
  // [['id', (<span> Loading ....</span>)]]


  return (
    <>
      <CCard>
        <Header title="Pembelian Detail" type="kembali" link="/pembelian"/>
        <CCardBody>
        { (isload === true) ? <Loadwait /> :
          <Detail data={purchasedata}/>
        }
        </CCardBody>
      </CCard>
    </>
  )
}

export default Purchase;

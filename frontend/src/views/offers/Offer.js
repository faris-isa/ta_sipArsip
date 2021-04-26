import React, { useState, useEffect } from 'react';
import axiosConfig from "../../axios";
import {
  CCard,
  CCardBody,
} from '@coreui/react';

import Header from '../.components/CardHeader';
import Detail from './components/OfferDetail';
import Loadwait from '../.components/Loading';


const Offer = ({match}) => {

  const id = match.params.id;
  const [ offerdata, setOfferdata ] = useState([{
    nama_pembeli: "",
    harga_total: "",
    status: ""
  }]);
  const [isload, setIsload] = useState(true)

  const getOffer = async () => {
    try {
      const offer = await axiosConfig.get(`/offers/${id}`);
      const data = offer.data;
      setOfferdata(data);
      setIsload(false);
    } catch(error) {

    }
  }

  useEffect(() => {
    // if (load == true){
      getOffer();
      // }
  });

  return (
    <>
      <CCard>
        <Header title="Produk Detail" type="kembali" link="/penawaran"/>
        <CCardBody>
        { (isload === true) ? <Loadwait /> :
          <Detail data={offerdata}/>
        }
        </CCardBody>
      </CCard>
    </>
  )
}

export default Offer;

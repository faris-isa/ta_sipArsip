import React, { useState, useEffect } from 'react';

import axiosConfig from "../../axios";

import { CCard, CCardBody } from '@coreui/react';

import Header from '../.components/CardHeader';
import NvrDetail from './components/detail/NvrDetail';
import IpcamDetail from './components/detail/IpcamDetail';
import SwitchDetail from './components/detail/SwitchDetail';

import Loadwait from '../.components/Loading';


const Product = ({match}) => {

  const id = match.params.id;
  const [isload, setIsload] = useState(true)
  const [ productdata, setProductdata ] = useState({
    type_products: ''
  });

  const getProduct = async () => {
    try {
      const product = await axiosConfig.get(`/products/${id}`);
      setProductdata(product.data);
      setIsload(false);
    } catch(error) {

    }
  }

  useEffect(() => {
    getProduct();
  });


  return (
    <>
      <CCard>
        <Header title="Produk Detail" type="kembali" link="/produk"/>
    { (isload === true) ? <Loadwait /> :
        <CCardBody>
          { (productdata.type_products === "nvr") ? <NvrDetail data={productdata} /> :
          ( productdata.type_products === "ipcam") ? <IpcamDetail data={productdata}/> :
          <SwitchDetail data={productdata} />
          }
        </CCardBody>
    }
      </CCard>
    </>
  )
}

export default Product;

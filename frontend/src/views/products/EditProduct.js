import React, { useState, useEffect } from 'react';
import { CCard } from '@coreui/react'

import axiosConfig from "../../axios";

import FormEditProducts from './components/FormEditProducts';
import Header from '../.components/CardHeader';
import Loadwait from '../.components/Loading';


const EditProduct = ({match}) => {

  const id = match.params.id;
  const [productdata, setProductdata] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const getProduct = async () => {
    try {
      const product = await axiosConfig.get(`/products/${id}`);
      const res = product.data;
      if (res.type_products === "nvr"){
        const lens = res.network_int;
        const splitted = lens.split(' - ');
        const dec = res.channel_dicoding;
        const splitted1 = dec.split(' - ');
        const nvrVal = {...res,
          net_port: splitted[0],
          net_lenght: splitted[1],
          dec_ch: splitted1[0],
          dec_pix: splitted1[1],
        };
        setProductdata(nvrVal);
        setIsloading(false)
      } else if(res.type_products === "ipcam"){
        const lens = res.lens;
        const splitted = lens.split(' - ');
        const size = splitted[0];
        const arraySize = size.split(', ')
        const ipVal = {...res,
          lens_size: arraySize,
          lens_cam: splitted[1],
        };
        setProductdata(ipVal);
        setIsloading(false)
      } else {
        setProductdata(res);
        setIsloading(false)

      }
    } catch(error) {

    }
  }

  // if (productdata.type_products === "nvr"){
  //   const lens = productdata.network_int;
  //   const splitted = lens.split(' - ');
  //   const temp = {...productdata, dec_ch: splitted[0]};
  //   setProductdata(temp);
  //   const temp1 = {...productdata, dec_pix: splitted[1]};
  //   setProductdata(temp1);

  // }

  useEffect(() => {
    getProduct()
  });


    return (
        <>
        <CCard>
          <Header title="Edit Produk" type="kembali" link="/produk"/>
          {
            (isloading === true) ? <Loadwait /> : <FormEditProducts data={productdata} id={id}/>
          }
        </CCard>
        </>
    )
}

export default EditProduct;

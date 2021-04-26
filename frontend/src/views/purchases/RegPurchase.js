import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axiosConfig from "../../axios";
import { CCard, CCardBody } from '@coreui/react';
import Swal from 'sweetalert2';

import Form from './components/PurchForm';
import Header from '../.components/CardHeader';
import Loadawait from '../.components/Loading';


const RegPurchase = ({match}) => {

  const id = match.params.id;
  const history = useHistory();
  const [ purchdata, setPurchdata ] = useState({
    nama_pembeli: "",
    harga_total: "",
    detail: [],
    purchase: [{
      status: ""
    }]
  });
  const [addserial, setAddserial] = useState(true);
  const [form, setForm] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const getPurchase = async () => {
      try {
        const purchase = await axiosConfig.get(`/offers/${id}`);
        setAddserial(false);
        setIsloading(false);
        setPurchdata(purchase.data);
      } catch(error) {

      }
    }

    getPurchase()
  }, [setPurchdata]);


  const handleAdd = (value) => {
    setAddserial(value);
  }

  const addForm = (value) => {
    setForm(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);

    const strdetail = JSON.stringify(form)
    // console.log(form);

    const addPurchase = {purchase_id: purchdata.purchase[0].id, purchase_detail: strdetail}

    console.log(addPurchase);

    try {
      await axiosConfig.post('/purchases', addPurchase)
      .then(res => {
        const data = res.data;
        if (data.status === 201){
          setIsloading(false);
          Swal.fire({
            title: 'Sukses',
            text: 'Data berhasil ditambahkan!',
            icon: 'success',
            timer: 1500,
          });
          history.push('/pembelian')
        } else if (data.status === 400){
          setIsloading(false);
          Swal.fire({
            title: 'Gagal',
            text: 'Data sudah pernah ditambahkan!',
            icon: 'error',
            timer: 1500,
          });
        } else if (data.status === 500){
          setIsloading(false);
          Swal.fire({
            title: 'Gagal',
            text: 'Periksa kembali kolom form !',
            icon: 'warning',
            timer: 1500,
          });
        } else {
          setIsloading(false);
          Swal.fire({
            title: 'Gagal',
            text: 'Not found !',
            icon: 'error',
            timer: 1500,
          });
        }
      })

    } catch {

    }

  }


  return (
    <>
      <CCard>
        <Header title="Pendaftaran Pembelian" type="kembali" link="/pembelian/daftar"/>
        <CCardBody>
        {(isloading === true)  ? <Loadawait /> :
          <Form data={purchdata} serialadd={addserial} form={addForm} handleradd={handleAdd} handlersubmit={handleSubmit}/>
        }
        </CCardBody>
      </CCard>
    </>
  )
}

export default RegPurchase;

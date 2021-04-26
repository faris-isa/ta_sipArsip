import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  CButton,
  CCardBody,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalFooter,
  CDataTable,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import LabelForm from '../../.components/form/LabelForm';
import Swal from 'sweetalert2';
import axiosConfig from '../../../axios';
import Loadawait from '../../.components/Loading';
import update from 'immutability-helper';

const FormOffer = (props) => {

  const { data_product } = props;

  const [addprod, setAddprod] = useState(false);
  const [nama, setNama] = useState("");
  const [hargatotal, setHargatotal] = useState(0);
  const qty = {qty: 1};
  const [detail, setDetail] = useState([]);
  const history = useHistory();
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    sumSubTotal()
  });

  const handlerAdd = () => {
      setAddprod(!addprod);
  };

  const handleCheckboxProductChange = id => {
    // event.preventDefault();

    // const value = event.target.value;

    //filter
    let prodData = data_product.find(obj => {
      return obj.id === id;
    });

    let sub_total = {subtotal: prodData.harga_satuan}

    //gabung qty
    let setprod1 = {...qty, ...sub_total, ...prodData};
    let mixtemp = [...detail, setprod1];
    setDetail(mixtemp);
    // let mixtemp = {...formval, detail_produk: [...formval.detail_produk, setprod1]};
    // setFormval(mixtemp);
    // console.log(formval.harga_total);

    // let harga = formval.harga_total + prodData.harga_satuan;
    // const temp = {...formval, harga_total: harga};
    // setFormval(temp)
    // setHargatotal(harga);

    let harga = hargatotal + prodData.harga_satuan;
    setHargatotal(harga);

    // console.log(hargatotal)

    handlerAdd();
    // setProdsval([...prodsval, setprod1]);
    // setTemp({...temp.detail_produk, detail_produk : setprod1});

  }

  const fields = [
    {key: 'option', _style: {width: '20%'}, filter: false },
    { key: 'model_produk', _style: { width: '40%'} },
    'harga_satuan',
    'type_products'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    const strdetail = JSON.stringify(detail)

    const addOffer = {nama_pembeli: nama, harga_total: hargatotal, detail_produk: strdetail}
    try {
      await axiosConfig.post('/offers', addOffer)
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
          history.push('/penawaran/status')
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
        } else if (data.status === 404){
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

  const handleDis = (id) => {
    let filtered = detail.reduce((filter, data, index) => {
    // let filtered = detail.reduce((filter, data) => {
      if (index !== id)filter.push(data)
      return filter;
    }, []);
    setDetail(filtered);
  }

  const handleQty = id => event => {
    let target = event.target;
    let value = target.value;
    let intVal = parseInt(value);

    let pengali = detail.reduce((filter, data, index) => {
        if (index === id)filter.push(data)
        return filter;
      }, []);
    // let newQty = update(detail, {[id]: {qty: {$set: intVal }}});
    // setDetail(newQty);
    let harga = intVal * pengali[0].harga_satuan;
    let newSub = update(detail, {[id]: {qty: {$set: intVal}, subtotal: {$set: harga} }});
    setDetail(newSub);
    //set harga satuan
    // setHargatotal(arrayDetail);
  }

  const handleReset = () => {
    setNama("");
    setHargatotal(0);
    setDetail([])
  }

  const sumSubTotal =() => {
    let sum = 0;
    for (var i = 0; i < detail.length; i++) {
      sum += detail[i].subtotal
    }
    // console.log(sum);
    setHargatotal(sum);
  }

  const detailOffer = detail ? Object(detail) : []

  return (
        <CCardBody>
          {(isloading === true)  ? <Loadawait /> :
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={e =>{handleSubmit(e)}}>
              <CFormGroup row>
                <LabelForm md="3" htmlfor="nama_pelanggan" name="Nama Pelanggan" />
                <CCol xs="12" md="9">
                  <CInput id="nama_pelanggan" name="nama_pelanggan" placeholder="Masukkan Nama Pelanggan" onChange={ e =>  setNama(e.target.value)} value={nama} />
                  <CFormText>Isian nama pelanggan</CFormText>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <LabelForm md="3" htmlfor="text-input" name="Produk" />
                <CCol xs="12" md="9">
                  <CButton block color="dark" onClick={handlerAdd} >Tambah Produk</CButton>
                  <CModal size="xl" show={addprod} onClose={handlerAdd}>
                    <CModalHeader>Pilih Produk .....</CModalHeader>
                    <CModalBody>
                      <CDataTable
                          items={data_product}
                          fields={fields}
                          striped
                          columnFilter
                          itemsPerPage={5}
                          pagination={{align:"end"}}
                          scopedSlots = {{
                              'option' :
                              (item) => (
                                  <td>
                                    <CButton color="primary" value={item.id} onClick={(e) => handleCheckboxProductChange(item.id)}>Pilih Produk !</CButton>
                                  </td>
                              ),
                          }}
                      />
                    </CModalBody>
                    <CModalFooter>
                      <CButton
                        color="secondary"
                        onClick={handlerAdd}
                      >Cancel</CButton>
                    </CModalFooter>
                  </CModal>
                </CCol>
              </CFormGroup>

              {/* <CDataTable
              items={detail}
              fields={fields_offer}
              striped
              itemsPerPage={10}
              pagination={{align:"end"}}
            /> */}

            {/* <FormDetail data={detail}  /> */}
            <CFormGroup row>
                <LabelForm md="12" htmlfor="detail_pelanggan" name="Detail Produk" />
              </CFormGroup>

              <CFormGroup row>
            <CCol xs="12" md="2">
              <LabelForm md="12" htmlfor="detail_pelanggan" name="Qty." />
            </CCol>
            <CCol xs="12" md="3">
              <LabelForm md="12" htmlfor="detail_pelanggan" name="Model Produk" />
            </CCol>
            <CCol xs="12" md="3">
              <LabelForm md="12" htmlfor="detail_pelanggan" name="Harga Satuan" />
            </CCol>
            <CCol xs="12" md="3">
              <LabelForm md="12" htmlfor="detail_pelanggan" name="SubTotal" />
            </CCol>
            <CCol xs="12" md="1">
              <LabelForm md="12" htmlfor="detail_pelanggan" name="" />
            </CCol>
          </CFormGroup>
        {
         detailOffer.map((item, index) => (
          <CFormGroup row key={ Math.random().toString(36).substr(2, 9) }>
            <CCol xs="12" md="2">
              <CFormGroup>
                <CInput id="qty" type="number" min="1" value={item.qty} onChange={handleQty(index)} />
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="3">
            <CFormGroup>
                <CInput id="model_produk" value={item.model_produk} readOnly={true} disabled/>
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="3">
            <CFormGroup>
            <CInput id="harga_satuan" value={item.harga_satuan} readOnly={true} disabled />
            </CFormGroup>
          </CCol>
            <CCol xs="12" md="3">
            <CFormGroup>
            <CInput id="harga_satuan" value={item.subtotal} readOnly={true} disabled/>
            </CFormGroup>
          </CCol>
            <CCol xs="12 " md="1">
            <CFormGroup>
            <CButton onClick={(e) => handleDis(index)} size="sm" color="primary"><CIcon name="cil-x" /></CButton>
            </CFormGroup>
          </CCol>
          </CFormGroup>
          ))
        }

              <CFormGroup row>
                <LabelForm md="3" htmlfor="harga_total" name="Harga Total" />
                <CCol xs="12" md="9">
                  <CInput id="harga_total" name="harga_total"  value={hargatotal} disabled/>
                </CCol>
              </CFormGroup>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" />Submit</CButton>
            <CButton type="reset" size="sm" color="danger" onClick={handleReset}><CIcon name="cil-ban" /> Reset</CButton>
            </CForm>
            }
        </CCardBody>
  )
}

export default FormOffer;

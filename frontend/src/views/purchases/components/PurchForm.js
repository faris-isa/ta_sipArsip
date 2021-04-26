import React, { useState, useEffect } from 'react';
import {
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CForm,
  CFormGroup,
  CSelect,
  CInput,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import LabelForm from '../../.components/form/LabelForm';
import update from 'immutability-helper';

const PurchForm = (props) => {

  const { data, serialadd, form, handleradd, handlersubmit } = props;

  const detailnya = data.detail;
  // const [adddetail, setAdddetail] = useState(serialadd);

  let filtered = detailnya.map(v => {
    v.serial = "";
    v.tanggal = "";
    v.lokasi = "";
    v.masa_garansi = "";
    return v;
  });

  const [detailoff, setDetailoff] = useState();
  const [addtemp, setAddtemp] = useState();

  useEffect(() => {
    handleradd(addtemp);
    form(detailoff);
  });

  // data.detail.map((item, index) => {
  //   const add = {...data.detail[index], serial: ""};
  //   setDetailprod(add);
  //   // console.log(detailnya[index])
  // });

  // setSerials(result);

  const handleChange = index => event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;

    if (name === "serial"){
      let newSerial = update(detailoff, {[index]: {serial: {$set: value }}});
      setDetailoff(newSerial);
    } else if (name === "tanggal"){
      let newSerial = update(detailoff, {[index]: {tanggal: {$set: value }}});
      setDetailoff(newSerial);
    } else if (name === "lokasi") {
      let newSerial = update(detailoff, {[index]: {lokasi: {$set: value }}});
      setDetailoff(newSerial);
    } else if (name === "masa") {
      let newSerial = update(detailoff, {[index]: {masa_garansi: {$set: value }}});
      setDetailoff(newSerial);
    }
  }

const handleAddSerial = (e) => {
  e.preventDefault();
  let arrayDetail = [];

  filtered.forEach((value, key) => {
      for (let i=1;i<=value.pivot.qty;i++){
        arrayDetail.push(value);
      // let lol = {...detailoff, value};
    }
  })
  setAddtemp(true)
  setDetailoff(arrayDetail);
}

  const serialDetail = detailoff ? Object(detailoff) : []

  return (
    <>
    <CForm id="formpurch" action="" method="" onSubmit={e => {handlersubmit(e)}}>
      <CFormGroup row>
        <LabelForm md="2" xs="2" name="Nama Pembeli"/>
        <CCol xs="10" md="10">
            <CInput name="nama_pembeli" value={data.nama_pembeli} disabled />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <LabelForm md="2" xs="2" name="Harga Total"/>
        <CCol xs="10" md="10">
            <CInput name="harga_total" value={data.harga_total} disabled />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <LabelForm md="2" xs="2" name="Status Terbayar"/>
        <CCol xs="10" md="10">
            <CInput name="status" value={data.purchase[0].status} disabled />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <LabelForm md="2" xs="2" name="Detail Produk"/>
        <CCol xs="10" md="10">
        <CButton color="primary" onClick={e => {handleAddSerial(e)}} disabled={serialadd} >
            <CIcon name="cil-note-add"/> Daftarkan Serial Number, Tempat dan Tanggal Pembelian
        </CButton>
        </CCol>
      </CFormGroup>

      { (serialadd === true) ?
         serialDetail.map((item, index) => (
        <CCard key={ Math.random().toString(36).substr(2, 9) }>
           <CCardHeader>
             <b>Item ke-{index+1}</b>
             {/* <b>Item ke-{item.pivot.qty}</b> */}
           </CCardHeader>
           <CCardBody>
          <CFormGroup row>
            <CCol xs="12" md="6">
              <CFormGroup>
                <CInput id="model_produk" value={detailoff[index].model_produk} onChange={handleChange(index)} disabled/>
              </CFormGroup>
            </CCol>
            {/* <CCol xs="2" md="2">
              <CFormGroup>
                <CInput id="model_produk" value={item.type_products} onChange={handleChange(index)} disabled/>
              </CFormGroup>
            </CCol> */}
            <CCol xs="12" md="6">
              <CFormGroup>
                <CInput id="serial_number" name="serial" placeholder="S/N" value={detailoff[index].serial} onChange={handleChange(index)}/>
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="4">
            <CFormGroup>
              <CInput type="date" id="tanggal" name="tanggal" placeholder="tanggal_beli" value={item.tanggal} onChange={handleChange(index)}/>
            </CFormGroup>
          </CCol>
            <CCol xs="12 " md="4">
            <CFormGroup>
            <CInput type="number" id="masa_garansi" name="masa" placeholder="Masa Garansi (tahun)" value={item.masa_garansi} onChange={handleChange(index)}/>
            </CFormGroup>
          </CCol>
          <CCol xs="12" md="4">
            <CFormGroup>
              <CSelect custom name="lokasi" id="lokasi" value={item.lokasi} onChange={handleChange(index)}>
                <option value="Gudang Ancol">Gudang Ancol</option>
                <option value="Gudang Miami">Gudang Miami</option>
                <option value="Gudang Mangga Dua">Gudang Mangga Dua</option>
              </CSelect>
            </CFormGroup>
          </CCol>
          </CFormGroup>
          </CCardBody>
        </CCard>
          )) : <></>
        }

        <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
      </CForm>
    </>
  )
}

export default PurchForm;

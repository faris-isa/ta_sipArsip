import React, { useState, useEffect } from 'react';
import {
  CCol,
  CFormGroup,
  CFormText,
  CTextarea,
  CInput,
  CInputFile,
  CLabel,
} from '@coreui/react'
import LabelForm from '../../../.components/form/LabelForm';

const FormPoe = (props) => {
  const { form, temp } = props;

  const [val, setVal] = useState(
    { model_produk:  temp.model_produk,
      type_products: temp.type_products,
    deskripsi_produk: temp.deskripsi_produk,
    foto_produk: "",
    harga_satuan: temp.harga_satuan,
  });

  // send data child -> parent
  useEffect(() => {
    form(val);
  });

const handleChange = (e) => {
  let target = e.target;
  let name = target.name;
  let value = target.value;
  if (name === "harga_satuan"){
    const temp = {...val, harga_satuan: value};
    setVal(temp);
  } else if (name === "model_produk"){
    const temp = {...val, model_produk: value};
    setVal(temp);
  } else if (name === "deskripsi_produk"){
    const temp = {...val, deskripsi_produk: value};
    setVal(temp);
  } else if (name === "foto_produk"){
    let images = target.files;
    const temp = {...val, foto_produk: images[0]};
    setVal(temp);
  }
}


  return (
    <>
            <CFormGroup row>

            <LabelForm md="3" htmlfor="model_produk" name="Model Produk" />

            <CCol xs="12" md="9">
                <CInput id="text-input" name="model_produk" placeholder="Masukkan Model Produk" onChange={handleChange} value={val.model_produk}/>
                <CFormText>Isian model produk</CFormText>
            </CCol>
        </CFormGroup>

        <CFormGroup row>

            <LabelForm md="3" htmlfor="deskripsi_produk" name="Deskripsi Produk" />

            <CCol xs="12" md="9">
            <CTextarea
                name="deskripsi_produk"
                id="textarea-input"
                rows="9"
                placeholder="Deskripsi produk..."
                onChange={handleChange}
                value={val.deskripsi_produk}
            />
            </CCol>
        </CFormGroup>
        <CFormGroup row>
          <LabelForm md="3" htmlfor="foto_produk" name="Gambar Produk"/>
          <CCol xs="12" md="9">
          <CInputFile id="foto_produk" name="foto_produk" onChange={handleChange}/>
          </CCol>
        </CFormGroup>

        <CFormGroup row>

            <LabelForm md="3" htmlfor="harga_satuan" name="Harga (Satuan)"/>

            <CCol xs="12" md="9">
            <CInput type="number" id="harga_satuan" name="harga_satuan" placeholder="Masukkan Harga" onChange={handleChange} value={val.harga_satuan}/>
            <CFormText>Isian harga (satuan ribu)</CFormText>
            </CCol>
        </CFormGroup>
    </>
  )
}

export default FormPoe;

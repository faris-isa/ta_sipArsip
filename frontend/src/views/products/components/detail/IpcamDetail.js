import React from 'react';
import {
  CCol,
  CRow,
} from '@coreui/react'

const IpcamDetail = (props) => {

  const { data } = props;

  const detail = {
    "Model Produk": data.model_produk,
    "Type Products": "IP Camera",
    "Harga": data.harga_satuan,
    "Max. Resolution": data.max_resolution,
    "Lens": data.lens,
    "WDR": data.wdr,
    "Form Factor": data.form_factor,
    "Protection": data.protection,
    "Deskripsi Produk": data.deskripsi_produk
  }

  const prodDetails = detail ? Object.entries(detail) :
  [['id', (<span> Loading ....</span>)]]

  return (
    <>
    <CRow>
      <CCol className="text-center mb-3">
      <img src={data.foto_produk} alt={data.model_produk} width="320px"/>
      </CCol>
    </CRow>
    {
      prodDetails.map(([key, value], index) => {
        return (
          <div key={index.toString()}>
            <CRow>
              <CCol md="2">
                {`${key}`}
              </CCol>
              <CCol md="10">
                :    <strong>{value}</strong>
              </CCol>
            </CRow>
          </div>
        )
      })
    }
    </>
  )
}

export default IpcamDetail;

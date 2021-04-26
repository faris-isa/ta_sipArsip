import React from 'react';
import {
  CCol,
  CRow,
} from '@coreui/react'

const NvrDetail = (props) => {

  const { data } = props;

  const detail = {
    "Model Produk": data.model_produk,
    "Type Products": "NVR",
    "Harga": data.harga_satuan,
    "Input Bandwidth": data.in_bandwidth,
    "Output Bandwidth": data.out_bandwidth,
    "Channel Dicoding": data.channel_dicoding,
    "Support 4K": data.four_k_support,
    "SATA Interface": data.sata_int,
    "Network Interface": data.network_int,
    "HDMI Output": data.hdmi_out,
    "e-SATA": data.e_sata,
    "POE Ports": data.poe_ports,
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

export default NvrDetail;

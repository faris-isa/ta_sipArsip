import React from 'react';
import {
  CDataTable,
} from '@coreui/react'

const OfferDetail = (props) => {

  const { data } = props;


  const fields = [
    {key: 'qty', _style: {width: '5%'} },
    { key: 'model_produk', _style: { width: '50%'} },
    { key: 'harga', _style: { width: '50%'} },
    //'registered',
    //{ key: 'role', _style: { width: '20%'} },
];

  // const prodDetails = detail ? Object.entries(detail) :
  // [['id', (<span> Loading ....</span>)]]


  return (
    <>
    <div className="bd-example">
      <dl className="row">
        <dt className="col-sm-3">Nama Pembeli</dt>
        <dd className="col-sm-9">{data.nama_pembeli}</dd>

        <dt className="col-sm-3">Harga Total</dt>
        <dd className="col-sm-9">{data.harga_total}</dd>

        <dt className="col-sm-3">Status</dt>
        <dd className="col-sm-9">{data.status}</dd>

        <dt className="col-sm-3">Detail Produk : </dt>
        <CDataTable
            items={data.detail}
            fields={fields}
            striped
            itemsPerPage={10}
            pagination={{align:"end"}}
            scopedSlots = {{
                'qty'   :
                (item) =>(
                    <td>
                        {item.pivot.qty}
                    </td>
                ),
                'harga'   :
                (item) =>(
                    <td>
                        {item.pivot.harga}
                    </td>
                ),
            }}
        />
      </dl>
    </div>
    {/* {
      prodDetails.map(([key, value], index) => {
        return (
          <div key={index.toString()}>
            <CRow>
              <CCol md="2">
                {`${key}`}
              </CCol>
              <CCol md="8">
                : <strong>{value}</strong>
              </CCol>
            </CRow>
          </div>
        )
      })
    } */}
    </>
  )
}

export default OfferDetail;

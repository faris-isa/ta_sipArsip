import React from 'react';
import {
  CDataTable,
} from '@coreui/react'

const PurchaseDetail = (props) => {

  const { data } = props;


  const fields = [
    // {key: 'qty', _style: {width: '5%'} },
    { key: 'model_produk', _style: { width: '30%'} },
    { key: 'serial_number', _style: { width: '30%'} },
    { key: 'tanggal_beli', _style: { width: '10%'} },
    { key: 'masa_garansi', _style: { width: '10%'} },
    { key: 'tanggal_selesai', label: 'Garansi Sampai', _style: { width: '10%'} },
    //'registered',
    //{ key: 'role', _style: { width: '20%'} },
  ];

  return (
    <>
    <div className="bd-example">
      <dl className="row">
        <dt className="col-sm-3">Nama Pembeli</dt>
        <dd className="col-sm-9">{data.tawaran[0].nama_pembeli}</dd>

        <dt className="col-sm-3">Harga Total</dt>
        <dd className="col-sm-9">{data.tawaran[0].harga_total}</dd>

        <dt className="col-sm-3">Status Terbeli</dt>
        <dd className="col-sm-9">{data.status}</dd>

        <dt className="col-sm-3">Detail Produk : </dt>
          {
          (data.status === "terbeli") ?
            <CDataTable
                    items={data.detail}
                    fields={fields}
                    striped
                    itemsPerPage={10}
                    pagination={{align:"end"}}
                    scopedSlots = {{
                        'serial_number'   :
                        (item) =>(
                            <td>
                                {item.pivot.serial_number}
                            </td>
                        ),
                        'tanggal_beli'   :
                        (item) =>(
                            <td>
                                {item.pivot.tanggal_beli}
                            </td>
                        ),
                        'masa_garansi'   :
                        (item) =>(
                            <td>
                                {item.pivot.masa_garansi} tahun
                            </td>
                        ),
                          'tanggal_selesai'   :
                          (item) =>(
                              <td>
                                  {item.pivot.tanggal_selesai }
                              </td>
                          ),
                    }}
                />
          :
            <CDataTable
                    items={data.not_products}
                    fields={fields}
                    striped
                    itemsPerPage={10}
                    pagination={{align:"end"}}
                    scopedSlots = {{
                        'serial_number'   :
                        (item) =>(
                            <td>
                                belum didaftarkan
                            </td>
                        ),
                        'tanggal_beli'   :
                        (item) =>(
                            <td>
                                belum didaftarkan
                            </td>
                        ),
                        'masa_garansi'   :
                        (item) =>(
                            <td>
                                belum didaftarkan
                            </td>
                        ),
                    }}
                />
        }
        {/* <CDataTable
            items={data.detail}
            fields={fields}
            striped
            itemsPerPage={10}
            pagination={{align:"end"}}
            scopedSlots = {{
                'serial_number'   :
                (item) =>(
                    <td>
                        {item.pivot.serial_number}
                    </td>
                ),
                'tanggal_beli'   :
                (item) =>(
                    <td>
                        {item.pivot.tanggal_beli}
                    </td>
                ),
                'masa_garansi'   :
                (item) =>(
                    <td>
                        {item.pivot.masa_garansi} tahun
                    </td>
                ),
            }}
        /> */}
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

export default PurchaseDetail;

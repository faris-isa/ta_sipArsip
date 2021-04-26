import React from 'react';
import {
  CDataTable,
} from '@coreui/react';

const fields = [
    // {key: 'id', _style: {width: '5%'} },
    { key: 'serial_number', _style: { width: '40%'} },
    // { key: 'status', _style: { width: '10%'} },
    { key: 'tanggal_beli', _style: { width: '15%'}, label: "Tanggal Pembelian", filter: false },
    { key: 'tanggal_selesai', _style: { width: '20%'}, filter: false },
    // { key: 'sisa', _style: { width: '20%'}, filter: false },
    { key: 'lokasi', _style: { width: '15%'}, label: "Lokasi Pembelian", filter: false },
];


const Table = (props) => {
  const {serials, load} = props;

  // const getNumberOfDays = (tanggal1, tanggal2) => {
  //   const date1 = new Date(tanggal1);
  //   const date2 = new Date(tanggal2);

  //   // One day in milliseconds
  //   const oneDay = 1000 * 60 * 60 * 24;

  //   // Calculating the time difference between two dates
  //   const diffInTime = date2.getTime() - date1.getTime();

  //   // Calculating the no. of days between two dates
  //   const diffInDays = Math.round(diffInTime / oneDay);

  //   return (diffInDays);
  // }

  return (
        <CDataTable
            items={serials}
            fields={fields}
            striped
            columnFilter
            loading = {load}
            itemsPerPage={10}
            pagination={{align:"end"}}
            scopedSlots = {{
                'harga_satuan'   :
                (item) =>(
                    <td>
                        {/* Rp. {item.harga_satuan},00 */}
                    </td>
                ),
                // 'sisa':
                //     (item)=>(
                // <td>
                //     {getNumberOfDays(item.tanggal_beli, item.tanggal_selesai)}hari
                // </td>
                // ),


            }}
        />
  )
}

export default Table;

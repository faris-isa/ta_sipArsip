import React from 'react';
import {
  CButton,
  CDataTable,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

const fields = [
    { key: 'nama_pembeli', _style: { width: '50%'} },
    //'registered',
    //{ key: 'role', _style: { width: '20%'} },
    'action',
];


const TableStat = (props) => {
  const { acc, dec, data, load, download } = props;

  return (
        <CDataTable
            items={data}
            fields={fields}
            striped
            loading={load}
            itemsPerPage={10}
            pagination={{align:"end"}}
            scopedSlots = {{
            'action':
                (item)=>(
                <td>
                    <CButton color="info" className="mr-1" size="sm"
                    onClick={(event) => download(item.id, item.nama_pembeli)}
                    >
                        <CIcon name="cil-arrow-thick-to-bottom"/>
                        <h6>Download Penawaran</h6>
                    </CButton>

                    <CButton color="success" className="mr-1" size="sm"
                    onClick={(event) => acc(item.id)}>
                        <CIcon name="cil-check-circle"/>
                        <h6>Disetujui</h6>
                        {/* {item.id} */}
                    </CButton>
                    <CButton color="danger" className="mr-1" size="sm"
                    onClick={(event) => dec(item.id)}
                    >
                        <CIcon name="cil-x-circle"/>
                        <h6>Ditolak</h6>
                        {/* {item.id} */}
                    </CButton>

                </td>
                )

            }}
        />
  )
}

export default TableStat;

import React from 'react';
import { Link } from 'react-router-dom';
import { CButton, CDataTable } from '@coreui/react';
import CIcon from '@coreui/icons-react';

const fields = [
    { key: 'nama_pembeli', _style: { width: '50%'} },
    'action',
];


const ListTable = (props) => {

  const { data, load } = props;

  return (
        <CDataTable
            items={data}
            fields={fields}
            loading={load}
            striped
            itemsPerPage={10}
            pagination={{align:"end"}}
            scopedSlots = {{
                'nama_pembeli':
                (item) =>(
                    <td>
                        {item.offers[0].nama_pembeli}
                    </td>
                ),
            'action':
                (item)=>(
                <td>
                  <Link to={`/pembelian/show/${item.id}`}>
                    <CButton color="info" className="mr-1" size="sm">
                        <CIcon name="cil-info"/>
                        <h6>info</h6>
                    </CButton>
                  </Link>
                </td>
                )

            }}
        />
  )
}

export default ListTable;

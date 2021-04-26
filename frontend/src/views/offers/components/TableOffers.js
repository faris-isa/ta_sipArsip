import React from 'react';
import { Link } from 'react-router-dom';
import {
  CButton,
  CDataTable,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

const fields = [
    // {key: '#', _style: {width: '5%'} },
    { key: 'nama_pembeli', _style: { width: '50%'}, sorter: true },
    { key: 'status', _style: { width: '30 %'} },
    {key: 'action', sorter: false},
];


const TableOffers = (props) => {
  const { offers, load } = props;

  return (
        <CDataTable
            items={offers}
            fields={fields}
            loading={load}
            striped
            sorter
            itemsPerPage={10}
            pagination={{align:"end"}}
            scopedSlots = {{
                // '#'   :
                // (item) =>(
                //     <td>
                //         {item.id}
                //     </td>
                // ),
            'action':
                (item)=>(
                <td>
                    <Link to={`/penawaran/show/${item.id}`}>
                      <CButton color="info" className="mr-1" size="sm">
                          <CIcon name="cil-info"/>
                          <h6>info</h6>
                          {/* {item.id} */}
                      </CButton>
                    </Link>
                </td>
                )

            }}
        />
  )
}

export default TableOffers;

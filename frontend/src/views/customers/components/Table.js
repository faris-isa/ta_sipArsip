import React from 'react';
import {
  CButton,
  CDataTable,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

import usersData from '../../users/UsersData'

const fields = [
    {key: '#', _style: {width: '5%'} },
    { key: 'name', _style: { width: '50%'} },
    //'registered',
    //{ key: 'role', _style: { width: '20%'} },
    'action',
];


const Table = () => {

  return (
        <CDataTable
            items={usersData}
            fields={fields}
            striped
            itemsPerPage={10}
            pagination={{align:"end"}}
            scopedSlots = {{
                '#'   :
                (item) =>(
                    <td>
                        {item.id+1}
                    </td>
                ),
            'action':
                (item)=>(
                <td>
                    <CButton color="info" className="mr-1" size="sm">
                        <CIcon name="cil-info"/>
                        <h6>info</h6>
                        {/* {item.id} */}
                    </CButton>
                </td>
                )

            }}
        />
  )
}

export default Table;

import React from 'react';
import { Link } from 'react-router-dom'
import {
  CDataTable,
  CButton
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

const TableUsers = (props) => {
  const {users, load, del} = props;

  return (
      <>
        <CDataTable
        items={users}
        fields={[
        { key: 'name', _classes: 'font-weight-bold' },
        'username', 'role', 'action'
        ]}
        hover
        striped
        loading = {load}
        itemsPerPage={5}
        pagination={{align:"end"}}
        scopedSlots = {{
        'action':
            (item)=>(
            <td>
              <Link to={`/pengguna/show/${item.id}`}>
                <CButton color="info" className="mr-1" size="sm">
                    <CIcon name="cil-info"/>
                    <h6>info</h6>
                </CButton>
              </Link>
              <Link to={`/pengguna/edit/${item.id}`}>
                <CButton color="warning" className="mr-1" size="sm">
                    <CIcon name="cil-pencil"/>
                    <h6>edit</h6>
                    {/* {item.id} */}
                </CButton>
              </Link>
              {/* <Link to={`/pengguna/delete/${item.id}`}> */}
                <CButton color="danger" className="" size="sm"
                onClick={(e) => del(item.id)}
                >
                    <CIcon name="cil-trash"/>
                    <h6>delete</h6>
                </CButton>
              {/* </Link> */}
            </td>
            ),
        }}
    />
  </>
  )
}

export default TableUsers;

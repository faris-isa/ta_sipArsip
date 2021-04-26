import React from 'react'
import { Link } from 'react-router-dom';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import FormEdit from './components/EditForm';


const EditUser = ({match}) => {

  const id = match.params.id;

  // const user = usersData.find( user => user.id.toString() === match.params.id)
  // const userDetails = user ? Object.entries(user) :
  //   [['id', (<span><CIcon className="text-muted" name="cil-reload" /> Loading ....</span>)]]

  return (
    <>
    <CCard>
    <CCardHeader>
        <CRow>
            <CCol sm="8">
                <h2 id="traffic" className="card-title mb-0">Edit Pengguna</h2>
            </CCol>
            <CCol sm="4" className="d-none d-md-block">
                <Link to="/pengguna">
                    <CButton color="primary" className="float-right">
                        <CIcon name="cil-arrow-thick-left"/> Kembali
                    </CButton>
                </Link>
            </CCol>
        </CRow>
    </CCardHeader>
    <CCardBody>
        <FormEdit id={id}/>
    </CCardBody>
    </CCard>
    </>
                  // {
                  //   userDetails.map(([key, value], index) => {
                  //     return (
                  //       <tr key={index.toString()}>
                  //         <td>{`${key}:`}</td>
                  //         <td><strong>{value}</strong></td>
                  //       </tr>
                  //     )
                  //   })
                  // }
  )
}

export default EditUser;

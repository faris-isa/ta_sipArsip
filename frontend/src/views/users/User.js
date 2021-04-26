import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axiosConfig from '../../axios';

const User = ({match}) => {

  const id = match.params.id;
  const [user, setUser] = useState();

  useEffect(() => {
    axiosConfig.get(`/users/${id}`).then((res) => {
        const data = res.data;
        setUser(data);
    })
}, [setUser]);

  // const user = usersData.find( user => user.id.toString() === match.params.id)
  const userDetails = user ? Object.entries(user) :
    [['id', (<span><CIcon className="text-muted" name="cil-reload" /> Loading ....</span>)]]

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            <CRow>
              <CCol sm="8">
                  <h2 id="traffic" className="card-title mb-0">User id: {id}</h2>
              </CCol>
              <CCol sm="4" className="d-none d-md-block">
                  <Link to="/pengguna">
                      <CButton color="primary" className="float-right">
                          <CIcon name="cil-arrow-thick-left"/> Kembali
                      </CButton>
                  </Link>
                      {/* <CButton color="link" className="float-right" disabled>
                          <CIcon name="cil-cloud-upload"/> Import
                      </CButton> */}
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                  {
                    userDetails.map(([key, value], index) => {
                      return (
                        <tr key={index.toString()}>
                          <td>{`${key}:`}</td>
                          <td><strong>{value}</strong></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default User

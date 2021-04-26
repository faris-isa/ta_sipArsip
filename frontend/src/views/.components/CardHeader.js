import React from 'react';
import { Link } from 'react-router-dom';
import { CButton, CCardHeader, CCol, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';

const CardHeader = (props) => {
  const { title, type, link } = props;

return (
  <CCardHeader>
    <CRow>
        <CCol md="8">
            <h2 id="traffic" className="card-title mb-0">{title}</h2>
        </CCol>
        <CCol md="4">
          { (type === "tambah") ?
            <Link to={link}>
                <CButton color="primary" className="float-right">
                    <CIcon name="cil-plus"/> Tambah
                </CButton>
            </Link>
            : (type === "kembali") ?
            <Link to={link}>
              <CButton color="primary" className="float-right">
                <CIcon name="cil-arrow-thick-left"/> Kembali
              </CButton>
            </Link>
            :
            <></>
          }
                {/* <CButton color="link" className="float-right" disabled>
                    <CIcon name="cil-cloud-upload"/> Import
                </CButton> */}
        </CCol>
    </CRow>
  </CCardHeader>
)}


export default CardHeader;

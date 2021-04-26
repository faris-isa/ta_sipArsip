import React, {
    // useState
} from 'react';
import {
  CCol,
  CRow
} from '@coreui/react';


const Header = (props) => {

return (
    <CRow>
        <CCol sm="8">
            <h2 id="traffic" className="card-title mb-0">Daftar {props.title}</h2>
        </CCol>
    </CRow>
)}


export default Header;

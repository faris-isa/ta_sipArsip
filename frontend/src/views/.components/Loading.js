import React from 'react';
import ReactLoading from 'react-loading';
import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CRow
} from '@coreui/react';

const Loading = (props) => {
  const { title, type, link } = props;

return (
  <CContainer>
    <CRow className="justify-content-center">
      <CCol md="2">
          <ReactLoading type={"spin"} color={"#000000"} height={'100%'} width={'100%'} />
      </CCol>
    </CRow>
  </CContainer>



)}


export default Loading;

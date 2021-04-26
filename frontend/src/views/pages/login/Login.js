import React, { useState } from 'react';
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import axiosConfig from "../../../axios";
import ReactLoading from 'react-loading';
import Swal from 'sweetalert2'

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [akun, setAkun] = useState("");

  const onSignInHandler = async () => {
    setLoading(true);

    let fd = {username, password};

    try {
      await axiosConfig.post('/user-login', fd)
      .then(res => {
        const data = res.data;
        if (data.status === 200){
          setLoading(false);
          sessionStorage.setItem("isLoggedIn", true);
          // localStorage.setItem("isLoggedIn", true);
          sessionStorage.setItem("userData", JSON.stringify(data.data));
          console.log(data.data)
          Swal.fire({
            title: 'Login Sukses',
            text: 'Anda akan dialihkan dalam beberapa detik !',
            icon: 'success',
            timer: 1500,
          });
          window.location = '/';
        } else if (data.status === 404){
          setLoading(false);
          Swal.fire({
            title: 'Login Gagal',
            text: "Periksa username/password !",
            icon: 'error',
            timer: 1500,
          });
        } else if (data.status === 400){
          setLoading(false);
          Swal.fire({
            title: 'Login Gagal',
            text: 'Masukkan kolom isian terlebih dahulu !',
            icon: 'error',
            timer: 1500,
          });

        }
        setLoading(false);
      })
    } catch (error) {
      console.error(error);
    }
  };

  const divStyle = {
    // backgroundColor: 'blue',
    backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkintronics.com%2Fwp-content%2Fuploads%2F2014%2F09%2Fip-camera-surveillance-system.jpg&f=1&nofb=1)',
    // backgroundImage: 'url(https://cdn.hipwallpaper.com/i/54/49/CKShQ1.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    // opacity: '0.5'
  };

  return (

    <div className="c-app c-default-layout flex-row align-items-center" style={divStyle}>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="4">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody className="text-center">

                {(loading === true) ?  <ReactLoading type={"spin"} color={"#000000"} height={'100%'} width={'100%'} /> :
                  <CForm>
                    <CAlert color="primary">username/password super_admin/12345678 admin/12345678</CAlert>
                    <h1>Masuk</h1>
                    {/* <p className="text-muted">Masukkan isian akun !</p> */}
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username. admin/lower" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password. admin/lower" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </CInputGroup>
                    {/* <CRow> */}
                        <CButton color="primary" className="px-4" onClick={onSignInHandler}>Login</CButton>
                    {/* </CRow> */}
                  </CForm>
                }

                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

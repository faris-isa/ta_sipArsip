import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  CCol,
  CButton,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import LabelForm from '../../.components/form/LabelForm';
import axiosConfig from '../../../axios';
import Loadwait from '../../.components/Loading';


const Form = () => {
  // deklarasi state tiap form
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const history = useHistory();
  const [isloading, setIsloading] = useState(false);

  const options = [
    { label: "Masukkan Role User", value: 0},
    { label: "Super Admin", value: "super" },
    { label: "Admin", value: "admin" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    const addUserVal = {name, username, password, role};
    try {
      await axiosConfig.post('/users', addUserVal)
      .then(res => {
        const data = res.data;
        if (data.status === 201){
          setIsloading(false);
          Swal.fire({
            title: 'Sukses',
            text: 'Data berhasil ditambahkan!',
            icon: 'success',
            timer: 1500,
          });
          history.push('/pengguna')
        } else if (data.status === 400){
          setIsloading(false);
          Swal.fire({
            title: 'Gagal',
            text: 'Data sudah pernah ditambahkan!',
            icon: 'error',
            timer: 1500,
          });
        } else if (data.status === 500){
          setIsloading(false);
          Swal.fire({
            title: 'Gagal',
            text: 'Periksa kembali kolom form !',
            icon: 'warning',
            timer: 1500,
          });
        }
      })

    } catch {

    }
    }

  const handleReset = (e) => {
    //setState reset
    setName('');
    setUsername('');
    setPassword('');
    setRole('');
    document.getElementById("formuser").reset();
  }

  return (
    (isloading === true) ? <Loadwait /> :
    <CForm id="formuser" action="" method="post" onSubmit={e => {handleSubmit(e)}}>
      <CFormGroup row>
        <LabelForm md="3" htmlfor="name" name="Nama Identitas" />
        <CCol xs="12" md="9">
            <CInput name="name" placeholder="Masukkan Nama" onChange={e => setName(e.target.value)} value={name}/>
            <CFormText></CFormText>
        </CCol>
      </CFormGroup>

      <CFormGroup row>
        <LabelForm md="3" htmlfor="username" name="Username" />
        <CCol xs="12" md="9">
            <CInput name="username" placeholder="Masukkan Username" onChange={e => setUsername(e.target.value)} value={username}/>
            <CFormText></CFormText>
        </CCol>
      </CFormGroup>

      <CFormGroup row>
        <LabelForm md="3" htmlfor="password" name="Password" />
        <CCol xs="12" md="9">
            <CInput type="password" name="password" placeholder="Masukkan Password" onChange={e => setPassword(e.target.value)} value={password}/>
            <CFormText></CFormText>
        </CCol>
      </CFormGroup>

      {/* <CFormGroup row>
        <LabelForm md="3" htmlfor="passwordconf" name="Konfirmasi Password" />
        <CCol xs="12" md="9">
            <CInput type="password" name="passwordconf" placeholder="Konfirmasi Password" />
            <CFormText></CFormText>
        </CCol>
      </CFormGroup> */}

      <CFormGroup row>
        <LabelForm md="3" htmlfor="select" name="Type"/>
        <CCol xs="12" md="9">
        <CSelect custom name="role" id="type_products" onChange={e => setRole(e.target.value)} value={role}>
            {
              options.map((o, i) =>
              <option key={i} value={o.value}>{o.label}</option> )
            }
        </CSelect>
        </CCol>
      </CFormGroup>
        <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
        <CButton type="reset" size="sm" color="danger" onClick={handleReset}><CIcon name="cil-ban" /> Reset</CButton>
    </CForm>
  )
}

export default Form;

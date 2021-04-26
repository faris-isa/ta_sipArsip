import React, { useState, useEffect } from 'react';
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


const EditForm = (props) => {
  const id = props.id;
  const history = useHistory();
  // deklarasi state tiap form
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [isloading, setIsloading] = useState(false);


  useEffect(() => {
    axiosConfig.get(`/users/${id}`).then((res) => {
        const data = res.data;
        setName(data.name);
        // setPassword(data.password);
        setRole(data.role);
        setUsername(data.username);
    })
}, [setName]);

  const options = [
    { label: "Masukkan Role User", value: 0},
    { label: "Super Admin", value: "super" },
    { label: "Admin", value: "admin" },
  ];

  const handleSubmit = async (e) => {
    const addUserVal = {name, username, role};
    e.preventDefault();
    setIsloading(true);
    try {
      await axiosConfig.patch(`/users/${id}`, addUserVal)
      .then(res =>{
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
        } else if (data.status === 404){
          setIsloading(false);
          Swal.fire({
            title: 'Gagal',
            text: 'User gagal diperbarui !',
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
        {/* <CButton type="reset" size="sm" color="danger" onClick={handleReset}><CIcon name="cil-ban" /> Reset</CButton> */}
    </CForm>
  )
}

export default EditForm;

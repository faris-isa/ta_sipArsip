import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';
import TableUsers from './components/TableUsers';
import axiosConfig from "../../axios";
import CardHeader from '../.components/CardHeader';
import Swal from 'sweetalert2';


const Users = () => {
  const [usersdata, setUsersdata] = useState([]);
  const [load, setLoad] = useState(true);

  const getUsers = async () => {
    try {
      const users = await axiosConfig.get('/users')
      setUsersdata(users.data)
      setLoad(false);
    } catch(error) {

    }
  }

  const handleDelete = (id) => {
    const getAlert = () => {
      Swal.fire({
            title: 'Yakin menghapus pengguna ini ?',
            text: "Perubahan yang terjadi tidak dapat diubah kembali",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, ini dihapus.'
          }).then((result) => {
            if (result.isConfirmed) {
              try {
                setLoad(true);
                axiosConfig.delete(`/users/${id}`)
                .then(res => {
                  if (res.status === 200){
                    Swal.fire({
                      title: 'Sukses',
                      text: 'Data berhasil dihapus!',
                      icon: 'success',
                      timer: 2000,
                    });
                    let filtered = usersdata.reduce((filter,data) =>
                    ( data.id !== id && filter.push(data) ,filter ),[]);
                    setUsersdata(filtered);
                    setLoad(false)
                  }
                })
              } catch(error) {
                console.log(error)
              }
            }
          }
          )
      };
          // setModal(true)
          // getOffers();
      getAlert();

  }

  useEffect(() => {
    getUsers()
  }, []);


  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CardHeader title="Daftar Pengguna" type="tambah" link="/pengguna/tambah"/>
          <CCardBody>
          <TableUsers users={usersdata} load={load} del={handleDelete}/>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Users

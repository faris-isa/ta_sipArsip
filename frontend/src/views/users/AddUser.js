import React from 'react';
import {
    CCard,
    CCardBody,
  } from '@coreui/react';
import FormUser from './components/Form';
import CardHeader from '../.components/CardHeader';

const AddUser = () => {

    return (
        <>
        <CCard>
        <CardHeader title="Menambahkan Pengguna" type="kembali" link="/pengguna"/>
        <CCardBody>
            <FormUser />
        </CCardBody>
        </CCard>
        </>
    )
}

export default AddUser;

import React, { useState } from 'react';
import {
  CCol,
  CLabel,
} from '@coreui/react'

const LabelForm = (props) => {
    return (
        <CCol md={props.md} xs={props.xs}>
            <CLabel htmlFor={props.htmlfor}><b>{props.name}</b></CLabel>
        </CCol>
    )
}

export default LabelForm;

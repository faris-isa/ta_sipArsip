import React from 'react';
import {
    CButton,
    CInput,
    CForm,
    CFormGroup,
  } from '@coreui/react';
import useQuantity from "./UseQuantity";
import CIcon from '@coreui/icons-react';

const QuantityInput = (props) => {
    const quantity = useQuantity(); // Use quantity here, do not need to pass from props

    const decrement = () => {
       quantity.setValue(quantity.value - 1);
    };

    const increment = () => {
      quantity.setValue(quantity.value + 1);
    };

    return (
      <>
          <CButton color="danger" onClick={decrement} disabled={quantity.value === 1} >
            <CIcon name="cil-minus"/>
          </CButton>
          <CInput {...quantity} value={quantity.value} onChange={props.onChange} readOnly={true}/>
          <CButton color="success" onClick={increment}>
            <CIcon name="cil-plus"/>
          </CButton>
      </>
    );
  };

export default QuantityInput;

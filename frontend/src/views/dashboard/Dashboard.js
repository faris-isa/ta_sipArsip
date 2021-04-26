import React, { useState, useEffect, lazy } from 'react'
import {
  // CBadge,
  CButton,
  // CButtonGroup,
  CCard,
  CCardBody,
  // CCardFooter,
  // CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import ChartBar from '../charts/MainChartExample'
import axiosConfig from "../../axios";

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Dashboard = () => {
  const FileDownload = require('js-file-download');
  const [countdata, setCountdata] = useState([]);
  const [tanggalan, setTanggalan] = useState([]);




  // var d = new Date();
  // let year = d.getFullYear()

  var d = new Date();
  let year = d.getFullYear()
  let month = d.getMonth();

  const getBulan = () => {
    var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let bulan = months[month];
    return bulan;
  }

  useEffect(() => {
    let tanggal = [];
    const getDate = () => {
      var isLeap = ((year % 4) === 0 && ((year % 100) !== 0 || (year % 400) === 0));
      let limit = [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];

      for (let i = 1;i <= limit;i++){
       tanggal.push(i)
      }
      setTanggalan(tanggal);
    }

    const getCount = async () => {
      const setDate = {tanggal: tanggal, bulan: month+1, tahun: year};
      try {
        const count = await axiosConfig.post('/monthly', setDate)
        const temp = count.data;
        setCountdata(temp)
      } catch(error) {

      }
    }
    // send data child -> parent
    getDate();
    getCount();
  }, [setCountdata, setTanggalan]);

  const handleDownload = (event) => {
    try {
      let headers = {responseType: 'blob' };
      axiosConfig.get(`/graphs/export`, headers)
      .then((res) => {
        FileDownload(res.data, `grafik.docx` );
      });
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Total Penjualan</h4>
              <div className="small text-muted">Bulan {getBulan() + " " +year}</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right" onClick={(event) => handleDownload(event)} >
                <CIcon name="cil-cloud-download"/> Export
              </CButton>
              {/* <CButtonGroup className="float-right mr-3">
                {
                  [
                    // 'Day',
                    'Month',
                    // 'Year'
                  ].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup> */}
            </CCol>
          </CRow>
          <ChartBar style={{height: '300px', marginTop: '40px'}} countdata={countdata} tanggalan={tanggalan}/>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard

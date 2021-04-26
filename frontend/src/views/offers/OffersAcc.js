import React, { useState, useEffect } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
} from '@coreui/react';

import Swal from 'sweetalert2';
import axiosConfig from '../../axios';
import TableStat from './components/TableStat';

const OffersAcc = () => {
  const FileDownload = require('js-file-download');
  const [dataoff, setDataoff] = useState([]);
  const [load, setLoad] = useState(true)

  const getOffers = async () => {
    try {
      const offers = await axiosConfig.get('/offers');
      const temp = offers.data;
      const not = temp.reduce((filter, value) => {
        if (value.status === "not decided"){
          const filtered =  value;
          filter.push(filtered);
        }
        return filter
      }, []);
      setDataoff(not);
      setLoad(false);
    } catch(error) {

    }
  }

    useEffect(() => {
      // if (load == true){
        getOffers();
      // }
    }, [setDataoff]);

  const handleAcc = (id) => {
    const getAlert = () => {
      Swal.fire({
            title: 'Penawaran ini disetujui ?',
            text: "Perubahan yang terjadi tidak dapat diubah kembali",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, ini disetujui.'
          }).then((result) => {
            if (result.isConfirmed) {
              setLoad(true);
              try {
                const fd = {status: "accept", status_offpur:"pembelian"};
                axiosConfig.patch(`/offers/status/${id}`, fd)
                .then(res => {
                  const data = res.data;
                  if (data.status === 201){
                    Swal.fire({
                      title: 'Sukses',
                      text: 'Data berhasil diubah!',
                      icon: 'success',
                      timer: 1500,
                    });
                    let filtered = dataoff.reduce((filter, data) => {
                      if (data.id !== id)filter.push(data)
                      return filter;
                    }, []);
                    setDataoff(filtered);
                    setLoad(false)
                  } else {
                    Swal.fire({
                      title: 'Error',
                      text: 'Error !',
                      icon: 'error',
                      timer: 1500,
                    });
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
      getAlert();
    //   event.preventDefault();
    }

    const handleDec = (id) => {
      const getAlert = () => {
        Swal.fire({
              title: 'Penawaran ini ditolak ?',
              text: "Perubahan yang terjadi tidak dapat diubah kembali",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Ya, ini ditolak.'
            }).then((result) => {
              if (result.isConfirmed) {
              try {
                setLoad(true);
                const fd = {status: "decline", status_offpur: "selesai"};
                axiosConfig.patch(`/offers/status/${id}`, fd)
                .then(res => {
                  const data = res.data;
                  if (data.status === 201){
                    Swal.fire({
                      title: 'Sukses',
                      text: 'Data berhasil diubah!',
                      icon: 'success',
                      timer: 1500,
                    });
                    let filtered = dataoff.reduce((filter, data) => {
                      if (data.id !== id)filter.push(data)
                      return filter;
                    }, []);
                    setDataoff(filtered);
                    setLoad(false)
                    } else {
                      Swal.fire({
                        title: 'Error',
                        text: 'Error !',
                        icon: 'error',
                        timer: 1500,
                      });
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
        getAlert();
      }

      const handleDownload = (id, nama_pembeli) => {
          try {
            let headers = {responseType: 'blob' };
            axiosConfig.get(`/offers/export/${id}`, headers)
            .then((res) => {
              FileDownload(res.data, `${nama_pembeli}.docx` );
            });
          } catch(error) {
            console.log(error)
          }
        }

  return (
    <>
      <CCard>
        <CCardHeader>
          <CRow>
            <CCol sm="8">
                <h2 id="traffic" className="card-title mb-0">Persetujuan Penawaran</h2>
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody>
          <TableStat acc={handleAcc} dec={handleDec} data={dataoff} load={load} download={handleDownload}/>
        </CCardBody>
      </CCard>
    </>
  )
}

export default OffersAcc;

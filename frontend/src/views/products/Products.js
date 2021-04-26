import React, { useState, useEffect } from 'react';
import {
  CCard,
  CCardBody,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
} from '@coreui/react';

import axiosConfig from "../../axios";

import CardHeader from '../.components/CardHeader';
import TableProducts from './components/table/TableProducts';
import OngoingTable from './components/table/GoingTable';
import DepracatedTable from './components/table/DepracateTable';

import Swal from 'sweetalert2'

const Products = () => {
  const [allprod, setAllprod] = useState([]);
  const [ongoingprod, setOngoingprod] = useState([]);
  const [depracatedprod, setDepracatedprod] = useState([]);
  const [load, setLoad] = useState(true);

  const getProducts = async () => {
    try {
      const products = await axiosConfig.get('/products');
      const data = products.data;
      //filter ongoing
      const ongoing = data.reduce((filter, value) => {
        if (value.status === "ongoing") {
          const filtered = value;
          filter.push(filtered);
        }
        return filter;
      }, []);
      //filter depracated
      const depracated = data.reduce((filter, value) => {
        if (value.status === "deprecated") {
          const filtered = value;
          filter.push(filtered);
        }
        return filter;
      }, []);

      // set state
      setAllprod(data);
      setOngoingprod(ongoing);
      setDepracatedprod(depracated);
      setLoad(false);

    } catch(error) {

    }
  }

  useEffect(() => {
    getProducts();
    // getGoingProducts();
    // getDepProducts();
  }, [setAllprod]);

  const handleDep = (id) => {
    const getAlert = () => {
      Swal.fire({
            title: 'Apa kamu yakin ?',
            text: "Ini akan mengubah status produk menjadi 'usang'",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, saya yakin.'
          }).then((result) => {
            if (result.isConfirmed) {
              try {
                setLoad(true);
                const fd = {"status": "deprecated"};
                axiosConfig.patch(`/products/status/${id}`, fd)
                .then(res => {
                  const data = res.data;
                  if (data.status === 201){
                    Swal.fire({
                      title: 'Sukses',
                      text: 'Data berhasil diubah!',
                      icon: 'success',
                      timer: 1500,
                    });
                    let filtered = ongoingprod.reduce((filter, data) => {
                      if (data.id !== id)filter.push(data)
                      return filter;
                    }, []);
                    setOngoingprod(filtered);
                    let filtered2 = ongoingprod.reduce((filter, data) => {
                      if(data.id === id)filter.push(data)
                      return filter;
                    }, []);
                    filtered2.map((index) =>
                    setDepracatedprod([...depracatedprod, index]));
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

  const handleGoing = (id) => {
    const getAlert = () => {
      Swal.fire({
        title: 'Apa kamu yakin ?',
        text: "Ini akan mengubah status produk menjadi 'baru'",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, saya yakin.'
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            setLoad(true);
            const fd = {"status": "ongoing"};
            axiosConfig.patch(`/products/status/${id}`, fd)
            .then(res => {
              const data = res.data;
              if (data.status === 201){
                Swal.fire({
                  title: 'Sukses',
                  text: 'Data berhasil diubah!',
                  icon: 'success',
                  timer: 1500,
                });
                let filtered = depracatedprod.reduce((filter,data) => {
                  if (data.id !== id)filter.push(data)
                  return filter;
                }, []);
                setDepracatedprod(filtered);
                let filtered2 = depracatedprod.reduce((filter,data) => {
                  if (data.id !== id)filter.push(data)
                  return filter;
                }, []);
                filtered2.map((index) =>
                setOngoingprod([...ongoingprod, index])
                );
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

  return (
    <>
        <CCard>
          <CardHeader title="Daftar Produk" type="tambah" link="/produk/tambah"/>
          <CCardBody>
            <CTabs activeTab="all">
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink data-tab="all">
                    Semua
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="ongoing">
                    Berjalan
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="depracated">
                    Usang
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane data-tab="all">
                  <TableProducts products={allprod} load={load} />
                </CTabPane>
                <CTabPane data-tab="ongoing">
                  <OngoingTable products={ongoingprod} load={load} handle={handleDep}/>
                </CTabPane>
                <CTabPane data-tab="depracated">
                  <DepracatedTable products={depracatedprod} load={load} handle={handleGoing}/>
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
    </>
  )
}

export default Products;

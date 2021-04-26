import React from 'react';


import FormProducts from './components/FormProducts';

const AddProduct = () => {
  let data = {
    model_produk: "",
    deskripsi_produk: "",
    harga_satuan: "",
    status: "",
    foto_produk: "",

    //nvr
    in_bandwidth: "",
    out_bandwidth: "",
    channel_dicoding: "",
    four_k_support: "",
    sata_int: "",
    net_port: "",
    net_lenght: "",
    dec_ch: "",
    dec_pix: "",
    e_sata: "",
    poe_ports: "",
    hdmi_out: "",

    //ipcam
    max_resolution: "",
    form_factor: "",
    protection: "",
    lens_size: "",
    lens_cam: "",
    wdr: "120db",


  }
    return (
        <>
            <FormProducts data={data}/>
        </>
    )
}

export default AddProduct;

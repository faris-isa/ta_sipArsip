import React, { useState, useEffect } from 'react';
import {
  CCol,
  CFormGroup,
  CFormText,
  CTextarea,
  CInput,
  CInputFile,
  CInputRadio,
  CLabel,
  CSelect,
} from '@coreui/react'
import LabelForm from '../../../.components/form/LabelForm';

const FormNvr = (props) => {
  const { form, temp } = props;

    const [val, setVal] = useState(
        { model_produk: temp.model_produk,
          type_products: temp.type_products,
        deskripsi_produk: temp.deskripsi_produk,
        foto_produk: "",
        harga_satuan: temp.harga_satuan,
        in_bandwidth: temp.in_bandwidth,
        out_bandwidth: temp.out_bandwidth,
        channel_dicoding: temp.channel_dicoding,
        four_k_support: temp.four_k_support,
        sata_int: temp.sata_int,
        // network
        net_port: temp.net_port,
        net_lenght: temp.net_lenght,
        //channel decoding
        dec_ch: temp.dec_ch,
        dec_pix: temp.dec_pix,
        //esata
        e_sata: temp.e_sata,
        poe_ports: temp.poe_ports,
        hdmi_out: temp.hdmi_out
        }
    );

useEffect(() => {
  // send data child -> parent
  form(val);
});

const handleChange = (e) => {
  let target = e.target;
  let name = target.name;
  let value = target.value;
  if (name === "harga_satuan"){
    const temp = {...val, harga_satuan: value};
    setVal(temp);
  } else if (name === "model_produk"){
    const temp = {...val, model_produk: value};
    setVal(temp);
  } else if (name === "deskripsi_produk"){
    const temp = {...val, deskripsi_produk: value};
    setVal(temp);
  } else if (name === "foto_produk" ){
    let images = target.files;
    const temp = {...val, foto_produk: images[0]};
    setVal(temp);
  } else if (name === "in_band"){
    const temp = {...val, in_bandwidth: value};
    setVal(temp);
  } else if (name === "out_band"){
    const temp = {...val, out_bandwidth: value};
    setVal(temp);
  } else if (name === "sata_int"){
    const temp = {...val, sata_int: value};
    setVal(temp);
  } else if (name === "net_port"){
    const temp = {...val, net_port: value}
    setVal(temp);
  } else if (name === "net_lenght"){
    const temp = {...val, net_lenght: value}
    setVal(temp);
  } else if (name === "poe_ports"){
    const temp = {...val, poe_ports: value}
    setVal(temp);
  } else if (name === "dec_ch"){
    const temp = {...val, dec_ch: value}
    setVal(temp);
  } else if (name === "dec_pix"){
    const temp = {...val, dec_pix: value}
    setVal(temp);
  } else if (name === "hdmi_out"){
    const temp = {...val, hdmi_out: value}
    setVal(temp);
  } else if (name === "four_k_support"){
    const temp = {...val, four_k_support: value}
    setVal(temp);
  } else if (name === "e_sata"){
    const temp = {...val, e_sata: value}
    setVal(temp);
  }
}


  return (
    <>
        <CFormGroup row>

            <LabelForm md="3" htmlfor="text-input" name="Model Produk" />

            <CCol xs="12" md="9">
                <CInput id="model_produk" name="model_produk" placeholder="Masukkan Model Produk" onChange={handleChange} value={val.model_produk}/>
                <CFormText>Isian model produk</CFormText>
            </CCol>
        </CFormGroup>

        <CFormGroup row>

            <LabelForm md="3" htmlfor="text-input" name="Input Bandwidth" />

            <CCol xs="12" md="9">
                <CInput type="number" id="in_band" name="in_band" placeholder="Input Bandwidth Produk" onChange={handleChange} value={val.in_bandwidth}/>
                <CFormText>Isian input bandwidth (satuan Mbps)</CFormText>
            </CCol>
        </CFormGroup>

        <CFormGroup row>

            <LabelForm md="3" htmlfor="text-input" name="Output Bandwidth" />

            <CCol xs="12" md="9">
                <CInput type="number" id="out_band" name="out_band" placeholder="Output Bandwidth Produk" onChange={handleChange} value={val.out_bandwidth}/>
                <CFormText>Isian output bandwidth (satuan Mbps)</CFormText>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="SATA Interface"/>
            <CCol md="9">
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="sata_int1" name="sata_int" value="1" onChange={handleChange} checked={(val.sata_int === "1") ? true : false}/>
                <CLabel variant="custom-checkbox" htmlFor="sata_int1">1</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="sata_int2" name="sata_int" value="2" onChange={handleChange} checked={(val.sata_int === "2") ? true : false}/>
                <CLabel variant="custom-checkbox" htmlFor="sata_int2">2</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="sata_int3" name="sata_int" value="4" onChange={handleChange} checked={(val.sata_int === "4") ? true : false}/>
                <CLabel variant="custom-checkbox" htmlFor="sata_int3">4</CLabel>
            </CFormGroup>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="Network Interface"/>
            <CCol xs="3" md="3">
                <CSelect custom name="net_port" id="net_port" value={val.net_port} onChange={handleChange}>
                    <option value="0">Berapa banyak port RJ45 ?</option>
                    <option value="1RJ45">1</option>
                    <option value="2RJ45">2</option>
                </CSelect>
            </CCol>
            <CCol xs="1">
                <p className="form-control-static">RJ45</p>
            </CCol>
            <CCol xs="3" md="3">
                <CSelect custom name="net_lenght" id="net_lenght" value={val.net_lenght} onChange={handleChange}>
                    <option value="0">Max. Bandwidth</option>
                    <option value="100M">100</option>
                    <option value="1000M">1000</option>
                </CSelect>
            </CCol>
            <CCol xs="1">
                <p className="form-control-static">M</p>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="PoE Ports"/>
            <CCol md="9">
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="poe_ports" name="poe_ports" value="0" onChange={handleChange} checked={(val.poe_ports === "0") ? true : false} />
                <CLabel variant="custom-checkbox" htmlFor="poe_ports">N/A</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="poe_ports1" name="poe_ports" value="4" onChange={handleChange} checked={(val.poe_ports === "4") ? true : false} />
                <CLabel variant="custom-checkbox" htmlFor="poe_ports1">4</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="poe_ports2" name="poe_ports" value="8" onChange={handleChange} checked={(val.poe_ports === "8") ? true : false} />
                <CLabel variant="custom-checkbox" htmlFor="poe_ports2">8</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="poe_ports3" name="poe_ports" value="16" onChange={handleChange} checked={(val.poe_ports === "16") ? true : false} />
                <CLabel variant="custom-checkbox" htmlFor="poe_ports3">16</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="poe_ports4" name="poe_ports" value="24" onChange={handleChange} checked={(val.poe_ports === "24") ? true : false} />
                <CLabel variant="custom-checkbox" htmlFor="poe_ports4">24</CLabel>
            </CFormGroup>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="Decoding Capability"/>
            <CCol xs="4" md="4">
                <CSelect custom name="dec_ch" id="dec_ch" value={val.dec_ch} onChange={handleChange}>
                    <option value="0">Channel support decoding</option>
                    <option value="2CH">2</option>
                    <option value="3CH">3</option>
                    <option value="4CH">4</option>
                    <option value="6CH">6</option>
                    <option value="8CH">8</option>
                    <option value="12CH">12</option>
                    <option value="16CH">16</option>
                </CSelect>
            </CCol>
            <CCol xs="1">
                <p className="form-control-static">-ch</p>
            </CCol>
            <CCol xs="3" md="3">
                <CSelect custom name="dec_pix" id="dec_pix" value={val.dec_pix} onChange={handleChange}>
                    <option value="0">Max. Pixels</option>
                    <option value="720P">720</option>
                    <option value="1080P">1080</option>
                </CSelect>
            </CCol>
            <CCol xs="1">
                <p className="form-control-static">P</p>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm  md="3" name="HDMI Output"/>
            <CCol md="9">
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="hdmi1" name="hdmi_out" value="1" onChange={handleChange} checked={(val.hdmi_out === "1") ? true : false}/>
                <CLabel variant="custom-checkbox" htmlFor="hdmi1">1</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="hdmi2" name="hdmi_out" value="2" onChange={handleChange} checked={(val.hdmi_out === "2") ? true : false}/>
                <CLabel variant="custom-checkbox" htmlFor="hdmi2">2</CLabel>
            </CFormGroup>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="Mendukung 4K "/>
            <CCol md="9">
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="support4k_ya" name="four_k_support" value="ya" onChange={handleChange} checked={(val.four_k_support === "ya") ? true : false} />
                <CLabel variant="custom-checkbox" htmlFor="support4k_ya">Ya</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="support4k_tidak" name="four_k_support" value="tidak" onChange={handleChange} checked={(val.four_k_support === "tidak") ? true : false} />
                <CLabel variant="custom-checkbox" htmlFor="support4k_tidak">Tidak</CLabel>
            </CFormGroup>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="eSATA"/>
            <CCol md="9">
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="e_sata" name="e_sata" value="0"
                onChange={handleChange}
                checked={(val.e_sata === "0") ? true : false}
                />
                <CLabel variant="custom-checkbox" htmlFor="e_sata">N/A</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="e_sata2" name="e_sata" value="opt"
                onChange={handleChange}
                checked={(val.e_sata === "opt") ? true : false}
                />
                <CLabel variant="custom-checkbox" htmlFor="e_sata2">Opsional</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="e_sata3" name="e_sata" value="1"
                onChange={handleChange}
                checked={(val.e_sata === "1") ? true : false}
                />
                <CLabel variant="custom-checkbox" htmlFor="e_sata3">1</CLabel>
            </CFormGroup>
            </CCol>
        </CFormGroup>

        <CFormGroup row>

            <LabelForm md="3" htmlfor="textarea-input" name="Deskripsi Produk" />

            <CCol xs="12" md="9">
            <CTextarea
                name="deskripsi_produk"
                id="textarea-input"
                rows="9"
                placeholder="Deskripsi produk..."
                onChange={handleChange}
                value={val.deskripsi_produk}
            />
            </CCol>
        </CFormGroup>
        <CFormGroup row>
          <LabelForm md="3" htmlfor="foto_produk" name="Gambar Produk"/>
          <CCol xs="12" md="9">
          <CInputFile id="foto_produk" name="foto_produk" onChange={handleChange}/>
          </CCol>
        </CFormGroup>

        <CFormGroup row>

            <LabelForm md="3" htmlfor="price-input" name="Harga (Satuan)"/>

            <CCol xs="12" md="9">
            <CInput type="number" id="harga_satuan" name="harga_satuan" placeholder="Masukkan Harga" value={val.harga_satuan} onChange={handleChange}/>
            <CFormText>Isian harga (satuan ribu)</CFormText>
            </CCol>
        </CFormGroup>
    </>
  )
}

export default FormNvr;

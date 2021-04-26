import React, { useState, useEffect } from 'react';
import {
  CCol,
  CFormGroup,
  CFormText,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CLabel,
  CSelect,
} from '@coreui/react'
import LabelForm from '../../../.components/form/LabelForm';

const FormIpCam = (props) => {
  const { form, temp } = props;

    const formFactor = [
        { label: "EXIR Mini Bullet", value: "minibullet"},
        { label: "EXIR Mini Dome", value: "minidome"},
        { label: "EXIR Dome", value: "dome" },
        { label: "EXIR Turret", value: "turret" },
        { label: "EXIR Cube", value: "cube" },
        { label: "EXIR VF Bullet", value: "vfbullet" },
        { label: "EXIR VF Dome", value: "vfdome" },
        { label: "EXIR VF Turret", value: "vfturret" },
        { label: "IR Panoramic", value: "panoramic" },
        { label: "Warm LED Bullet", value: "ledbullet" },
      ];

    const [val, setVal] = useState(
    { model_produk: temp.model_produk,
      type_products: temp.type_products,
      deskripsi_produk: temp.deskripsi_produk,
      foto_produk: "",
      harga_satuan: temp.harga_satuan,
      max_resolution: temp.max_resolution,
      form_factor: temp.form_factor,
      protection: temp.protection,
      lens_size: temp.lens_size,
      lens_cam: temp.lens_cam,
      wdr: temp.wdr,
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
        } else if ( name === "form_factor"){
          const temp = {...val, form_factor: value};
          setVal(temp);
        } else if (name === "max_resolution"){
          const temp = {...val, max_resolution: value};
          setVal(temp);
        } else if (name === "protection"){
          const temp = {...val, protection: value};
          setVal(temp);
        } else if (name === "lens_size"){
          let arrVal = [...val.lens_size, value];
          if (val.lens_size.includes(value)) {
            arrVal = arrVal.filter(val => val !== value);
          }
          let temp = {...val, lens_size: arrVal};
          setVal(temp);
        } else if (name === "lens_cam"){
          const temp = {...val, lens_cam: value};
          setVal(temp);
        }
        // else if (name == "wdr"){ }
      }

  return (
    <>
        <CFormGroup row>

            <LabelForm md="3" htmlfor="text-input" name="Model Produk" />

            <CCol xs="12" md="9">
                <CInput id="text-input" name="model_produk" placeholder="Masukkan Model Produk" onChange={handleChange} value={val.model_produk} />
                <CFormText>Isian model produk</CFormText>
            </CCol>
        </CFormGroup>


        <CFormGroup row>
            <LabelForm md="3" name="Max. Resolution"/>
            <CCol md="9">
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="max_resolution1" name="max_resolution" value="2MP" onChange={handleChange} checked={(val.max_resolution === "2MP") ? true : false} />
                <CLabel variant="custom-checkbox" htmlFor="max_resolution1">2</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="max_resolution2" name="max_resolution" value="4MP" onChange={handleChange} checked={(val.max_resolution === "4MP") ? true : false} />
                <CLabel variant="custom-checkbox" htmlFor="max_resolution2">4</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="max_resolution3" name="max_resolution" value="6MP" onChange={handleChange} checked={(val.max_resolution === "6MP") ? true : false} />
                <CLabel variant="custom-checkbox" htmlFor="max_resolution3">6</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="max_resolution4" name="max_resolution" value="8MP" onChange={handleChange} checked={(val.max_resolution === "8MP") ? true : false} />
                <CLabel variant="custom-checkbox" htmlFor="max_resolution4">8</CLabel>
            </CFormGroup>
            MP </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="Form Factor"/>
            <CCol xs="12" md="9">
                <CSelect custom name="form_factor" id="select" value={val.form_factor} onChange={handleChange}>
                    <option value="0">Pilih Form Factor</option>
                    {
                    formFactor.map((f, i) =>
                    <option key={i} value={f.value}>{f.label}</option> )
                    }
                </CSelect>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="Protection"/>
            <CCol md="9">
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="protection1" name="protection" value="IP67" onChange={handleChange} checked={(val.protection === "IP67") ? true : false}/>
                <CLabel variant="custom-checkbox" htmlFor="protection1">IP67</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="protection2" name="protection" value="Indoor" onChange={handleChange} checked={(val.protection === "Indoor") ? true : false} />
                <CLabel variant="custom-checkbox" htmlFor="protection2">Indoor</CLabel>
            </CFormGroup>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="Lens"/>
            <CCol md="4">
                <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="lens2.8" name="lens_size" value="2.8mm" onChange={handleChange} checked={(val.lens_size.includes("2.8mm")) ? true : false} />
                    <CLabel variant="custom-checkbox" htmlFor="lens2.8">2.8</CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="lens4" name="lens_size" value="4mm" onChange={handleChange} checked={(val.lens_size.includes("4mm")) ? true : false} />
                    <CLabel variant="custom-checkbox" htmlFor="lens4">4</CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="lens6" name="lens_size" value="6mm" onChange={handleChange} checked={(val.lens_size.includes("6mm")) ? true : false} />
                    <CLabel variant="custom-checkbox" htmlFor="lens6">6</CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox custom id="lens2.8-12" name="lens_size" value="2.8-12mm" onChange={handleChange} checked={(val.lens_size.includes("2.8-12mm")) ? true : false} />
                    <CLabel variant="custom-checkbox" htmlFor="lens2.8-12">2.8 ~ 12</CLabel>
                </CFormGroup>
                mm
            </CCol>
            <CCol md="5">
                <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="lensnone" name="lens_cam" value="none" onChange={handleChange} checked={(val.lens_cam === "none") ? true : false} />
                    <CLabel variant="custom-checkbox" htmlFor="lensnone">None</CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="lensfixed" name="lens_cam" value="fixed" onChange={handleChange} checked={(val.lens_cam === "fixed") ? true : false} />
                    <CLabel variant="custom-checkbox" htmlFor="lensfixed">Fixed Lens</CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="lensmotor" name="lens_cam" value="motorized" onChange={handleChange} checked={(val.lens_cam === "motorized") ? true : false} />
                    <CLabel variant="custom-checkbox" htmlFor="lensmotor">Motorized VF Lens</CLabel>
                </CFormGroup>
            </CCol>
        </CFormGroup>

        <CFormGroup row>

            <LabelForm md="3" htmlfor="wdr" name="WDR" />

            <CCol md="7">
                <CInput id="wdr" name="wdr" value={val.wdr} disabled/>
                <CFormText>Isian WDR (default 120dB)</CFormText>
            </CCol>
            <CCol md="2">
                <p className="form-control-static">WDR</p>
            </CCol>
        </CFormGroup>

        <CFormGroup row>

            <LabelForm md="3" htmlfor="textarea-input" name="Deskripsi Produk" onChange={handleChange}/>

            <CCol xs="12" md="9">
            <CTextarea
                name="deskripsi_produk"
                id="deskripsi_produk"
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
            <CInput type="number" id="harga_satuan" name="harga_satuan" value={val.harga_satuan} placeholder="Masukkan Harga" onChange={handleChange}/>
            <CFormText>Isian harga (satuan ribu)</CFormText>
            </CCol>
        </CFormGroup>
    </>
  )
}

export default FormIpCam;

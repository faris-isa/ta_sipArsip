import React from 'react';
import { Link } from 'react-router-dom';
import {
  CButton,
  CDataTable,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

const fields = [
    // {key: 'id', _style: {width: '5%'} },
    { key: 'model_produk', _style: { width: '40%'} },
    // { key: 'status', _style: { width: '10%'} },
    { key: 'type_products', _style: { width: '15%'}, label: "Tipe Produk" },
    { key: 'harga_satuan', _style: { width: '20%'}, label:"Harga" },
    {key:'action', sorter: false },
];


const GoingTable = (props) => {

  const {products, load, handle} = props;

  return (
        <CDataTable
            items={products}
            fields={fields}
            striped
            sorter
            loading = {load}
            itemsPerPage={10}
            pagination={{align:"end"}}
            scopedSlots = {{
                'harga_satuan'   :
                (item) =>(
                    <td>
                        Rp. {item.harga_satuan},00
                    </td>
                ),
                'action':
                    (item)=>(
                    <td>
                        <Link to={`/produk/show/${item.id}`}>
                        <CButton color="info" className="mr-1" size="sm">
                            <CIcon name="cil-info"/>
                            <h6>info</h6>
                        </CButton>
                        </Link>
                        <Link to={`/produk/edit/${item.id}`}>
                        <CButton color="warning" className="mr-1" size="sm">
                            <CIcon name="cil-pencil"/>
                            <h6>edit</h6>
                        </CButton>
                        </Link>
                        <CButton color="danger" className="" size="sm"
                        onClick={(event) => handle(item.id)}
                        >
                            <CIcon name="cil-transfer"/>
                            <h6>Depracated</h6>
                        </CButton>
                    </td>
                ),


            }}
        />
  )
}

export default GoingTable;

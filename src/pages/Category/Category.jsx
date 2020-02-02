import React, { useState } from 'react';

import { deleted } from '../../assets/images';
import Deletemodal from '../../components/deletemodal/Deletemodal';
import ProductTable from '../../components/table/ProductTable';


const Category = () => {
    const [visible, setVisible] = useState(false);

    const handleClickOpen = () => {
        setVisible(true)
    }

    const handleOk = e => {
        console.log(e);
        setVisible(false);
      };
    
      const handleCancel = e => {
        console.log(e);
        setVisible(false);
      };

    return (
        <>
            <img src={deleted} alt="" style={{width: '100px'}} onClick={handleClickOpen} />
            <Deletemodal visible={visible} handleOk={handleOk} handleCancel={handleCancel} />
            <ProductTable />
        </>
    )
}

export default Category;
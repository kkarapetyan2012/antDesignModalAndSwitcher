import React from 'react';

import { Modal, } from 'antd';

const Deletemodal = ({visible, handleOk, handleCancel}) => {
 
    return (
      
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          
        </Modal>
      
    );
  
}

export default Deletemodal;
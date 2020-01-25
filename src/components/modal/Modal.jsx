import React, { useState } from 'react';
import { Modal } from 'antd';

function CustomModal({ handleClose, show, children }) {
  return (
    <div className='modal'>
      <Modal title='' visible={show} onCancel={handleClose}>
        {children}
        {/* <div className='comment-section'>hdhvh</div> */}
      </Modal>
    </div>
  );
}

export default CustomModal;

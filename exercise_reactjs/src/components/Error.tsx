import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';

const Error = () => {
  return ReactDOM.createPortal(
    (<div className="modal">
      <p>Không thể kết nối tới máy chủ</p>
    </div>)
    ,
    document.getElementById('modal-root')
  )
  
}

export default Error;

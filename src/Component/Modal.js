import React from 'react'
import '../Css/ModalStyle.css';

const Modal = ({show}) => {
  
    if(!show){
        return null;
      }
    return (
    <div>
    <div className="modalWrapper">
        <div className="modal">
            <button className='btn-close' id='btnclose'>Close</button>
            <h3>working</h3>
        </div>
    </div>
    </div>
  )
}

export default Modal

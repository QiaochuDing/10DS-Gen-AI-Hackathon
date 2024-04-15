import { Page, H1, Button } from 'govuk-react'  
import { DynamicForm } from './FormBuilder'

import { Navbar } from './Navbar'
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export function ModalWrapper(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);




  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: '50%',
      height: '50%',
      borderRadius: '0px',
      border: '4px solid #0b0c0c',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


  useEffect(() => {
    if (props.modalOpenStatus == true) {
      openModal();
    } else {
        setIsOpen(false);
    }
  });

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    props.modalCloseCallback(true)
  }


  return (
    <>
        {props.children}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        

        <H1>
    Result
  </H1>
    <div>
      {props.htmlContent}
    </div>


    <Button onClick={closeModal}>Close</Button>

      </Modal>
    </>
  );
}
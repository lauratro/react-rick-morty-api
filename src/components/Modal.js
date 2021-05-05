import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ElemModal from '../styles/style.js';
import "../styles/Home.css"


function ModalCreator(props) {

    let dataFetch = props.myData;
    const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] =useState(true)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  function showText() {
    if (isVisible) {
      return {opacity: "0"}
    }
    else {
      return{opacity:"1"}
    }
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Show more
      </Button>
          <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                  <Modal.Title className="text-center">{props.myData.name}</Modal.Title>
                  </Modal.Header>
              <Modal.Body><img className="img-modal" src={props.myData.image} alt="picture" />
                  <p className="text-center mt-3 font-weight-bold">{dataFetch.gender}</p>
                  <p className="text-center font-weight-bold">{dataFetch.species }</p>
              </Modal.Body>
                  <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                          Close
          </Button>
       
                  </Modal.Footer>
              </Modal>

    </>
  );
   
}


export default ModalCreator;
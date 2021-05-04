import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ModalCreator(props) {

    let dataFetch = props.myData;
    const [show, setShow] = useState(false);
   

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Show more
      </Button>
          <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                  <Modal.Title>{props.myData.name}</Modal.Title>
                  </Modal.Header>
              <Modal.Body><img src={props.myData.image} alt="picture" />
                  <p>{dataFetch.gender}</p>
                  <p>{dataFetch.species }</p>
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
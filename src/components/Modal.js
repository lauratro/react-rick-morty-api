import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalTitle from './ModalTitle';

function ModalCreator(props) {
    let dataFetch = props.myData;
   
      
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

            return (
      
                <>
           
                    <Button variant="primary" onClick={handleShow}>
                        See more
      </Button>
         {props.myData.length ? (
          props.myData.map((character) => {
            return (
                    <Modal show={show} onHide={handleClose}>
                      
                
               
          
                        <Modal.Header closeButton>
                           
                                <Modal.Title>
                                    {character.name}
                                </Modal.Title>
                             
                        </Modal.Header>
                              
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        
                        <Modal.Footer>
                         
                            <Button variant="secondary" onClick={handleClose}>
                                    Close
          </Button>
       
                        </Modal.Footer>
        
                    </Modal>
              );
          })
        ) : (
          <p>Loading</p>
        )}
                </>
 
       
        
    )
                
        
}


export default ModalCreator;
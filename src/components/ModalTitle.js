import React from "react";
import Modal from "react-bootstrap/Modal";

function ModalTitle(props) {
  return (
    <div>
      <Modal.Header closeButton>
        {props.myData.length ? (
          props.myData.map((character) => {
            return (
              <Modal.Title>
                <p>{character.name}</p>
              </Modal.Title>
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </Modal.Header>
    </div>
  );
}
export default ModalTitle;

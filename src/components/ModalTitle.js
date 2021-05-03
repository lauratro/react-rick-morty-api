import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function ModalTitle(props) {
  let data = props.myData;
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

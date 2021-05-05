import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function isLoading() {
    return
      <Container className="loading-container">
                    <Row><Col xs={12}><div className="loader"></div></Col></Row>
                    
                </Container>
}

export default isLoading;
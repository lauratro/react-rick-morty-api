import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function SearchBar() {
    return (
        <div>
        
            <Container>
                <Row className="mt-5">
                    <Col xs={12} md={6}>
  <h4>Rick and Morty Api</h4>
  
 </Col>
   <Col xs={6} md={6}>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2 " />
      <Button variant="outline-dark">Search</Button>
                        </Form>
                        </Col>
               </Row>  
                </Container>
</div>
    )
}

export default SearchBar;
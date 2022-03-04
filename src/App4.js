import React, {useState} from 'react'
import { Button, Row , Container, Navbar,
   Alert, Col, Badge, Nav, Pagination,
    Card, Modal, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import App from './App'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'

function App4() {



  const [show,setShow]= useState(false);

  const handleShow = () => setShow(true);








  return (
    <div>
        <header>
        
  
 
  <Navbar bg="dark" variant="dark">
    
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://avatars.githubusercontent.com/u/6853419?s=200&v=4"
          width="30"
          height="30"
          
          className="d-inline-block align-top"
        />{' '}
        TableMaker.io
      </Navbar.Brand>

    <Nav className='ml-auto' >
        <Nav.Link href="Home"  style={{ color:"white" }} > Home  </Nav.Link>
        <Nav.Link href="Profile"  style={{ color:"white" }} > Profile  </Nav.Link>
    </Nav>


    
  </Navbar>
        </header>
        <br>
        </br>
        <br></br>
        <div className='badge-sec'>
            <h1>
              Welcome Back <Badge bg="secondary">Iyed</Badge>
            </h1>
        </div>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <div>
            <Container>
                <Row>
                    
                <Col>
               <Button variant="outline-primary" onClick={handleShow} >
                    Add new Table
                </Button>
                <Modal  show={show} >
                <Modal.Header closeButton > 
                  <Modal.Title> Complete with the blanks </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Car Brand</Form.Label>
                      <Form.Control type="text" placeholder="Enter Car Brand" />
                      <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                      </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Car model</Form.Label>
                      <Form.Control type="text" placeholder="Enter Car model" />
                      </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                   <Form.Check type="checkbox" label="Sort asc" />
                   <Form.Check type="checkbox" label="Sort dsc" />
                  </Form.Group>
  <Button variant="primary" type="submit">
    Add Table
  </Button>
</Form>
                  </>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" > Close modal </Button>
                </Modal.Footer>
          </Modal>


                </Col>
                <Col>
                <Button>
                    Check Table List
                </Button>

                </Col>
                <Col>
                <Button>
                    Export Table List 
                </Button>
                </Col>
           
                </Row>
            </Container>
            <br>
            </br>
            <br>
            </br>
            <Container>
              <Row>

              <Col>
            
              </Col>
             
              <Col>
              </Col>
              <Col>
             
              </Col>
              </Row>
              
            </Container>

            <br>
            </br>
            <br>
            </br>
            <Container>
              <Card  >
              <Card.Body>
              <Card.Title></Card.Title>
                <App />
                <Card.Text>
     
                </Card.Text>
                <Button variant="primary"> Pignation </Button>
              </Card.Body>

              </Card>
              
            </Container>

            <br>
            </br>
            <br>
            </br>

           
            

        </div>

        <footer>

        </footer>

    </div>
  )
}

export default App4;
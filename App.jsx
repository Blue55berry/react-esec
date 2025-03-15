import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Image from 'react-bootstrap/Image';
import { Navbar, Container, Nav, NavDropdown, Carousel } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Action from './components/Action';
import mission from './assets/VM4-1.webp'
import reactcomponents from './assets/about_banner.webp'



function App() {
  const [content, setContent] = useState('carousel');

  const handleSelect = (eventKey) => {
    setContent(eventKey);
  };

  return (
    <>
      {/* <!-- Navbar --> */}
      <div className="container-md-fluid mt-2 rounded">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12">
            <Navbar expand="lg" className="bg-body-secondary p-4">
              <Container>
                <Navbar.Brand href="#home" className='navbar-brand'>ESEC</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="About Us" id="basic-nav-dropdown" onSelect={handleSelect}>
                      <NavDropdown.Item eventKey="vission">Vission & Mission</NavDropdown.Item>
                      <NavDropdown.Item eventKey="quality">Quality Policy</NavDropdown.Item>
                      <NavDropdown.Item eventKey="management">Management Profile</NavDropdown.Item>
                      <NavDropdown.Item eventKey="prinicipal">Prinicipal Message</NavDropdown.Item>
                      <NavDropdown.Item eventKey="organization">OrganizationChart</NavDropdown.Item>
                      <NavDropdown.Item eventKey="Statutory Body & Committees">Statutory Body & Committees</NavDropdown.Item>
                      <NavDropdown.Item eventKey="Founder Profile">Founder Profile</NavDropdown.Item>
                      <NavDropdown.Item eventKey="Governing Council">Governing Council</NavDropdown.Item>
                      <NavDropdown.Item eventKey="Location">Location</NavDropdown.Item>
                      <NavDropdown.Item eventKey="Maintenance_Policy">Maintenance_Policy</NavDropdown.Item>
                      <NavDropdown.Item eventKey="IT Policy">IT Policy</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Departments" id="basic-nav-dropdown" onSelect={handleSelect}>
                      <NavDropdown.Item eventKey="vission">Vission & Mission</NavDropdown.Item>
                      <NavDropdown.Item eventKey="quality">Quality Policy</NavDropdown.Item>
                      <NavDropdown.Item eventKey="management">Management Profile</NavDropdown.Item>
                      <NavDropdown.Item eventKey="prinicipal">Prinicipal Message</NavDropdown.Item>
                      <NavDropdown.Item eventKey="organization">OrganizationChart</NavDropdown.Item>
                      <NavDropdown.Item eventKey="Statutory Body & Committees">Statutory Body & Committees</NavDropdown.Item>
                      <NavDropdown.Item eventKey="Founder Profile">Founder Profile</NavDropdown.Item>
                      <NavDropdown.Item eventKey="Governing Council">Governing Council</NavDropdown.Item>
                      <NavDropdown.Item eventKey="Location">Location</NavDropdown.Item>
                      <NavDropdown.Item eventKey="Maintenance_Policy">Maintenance_Policy</NavDropdown.Item>
                      <NavDropdown.Item eventKey="IT Policy">IT Policy</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>

      {/* <!-- Dynamic Content --> */}
      <div className="demo">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12 col-lg-12">
              {content === 'vission' && (
                <>
                <div className="vission row">
                  <div className="col-md-12 col-lg-12 col-sm-12">
                  <Image src={reactcomponents} className='img' />
                  </div>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-lg-end ">
                    <Image src={mission}/>
                  </div>

                  <div className="title col-md-12 d-flex justify-content-lg-start">
                    <h1 className='text'>Our Vission</h1>
                    <p className='para'>Vision of Erode Sengunthar Engineering College is to become a World Class Technical Institution and Scientific Research Centre for the Benefit of the Society.</p>
                  </div>
                </>
              )}





              {content === 'quality' && (
                <Carousel fade>
                  <Carousel.Item>
                    <Image className="d-block w-100" src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image className="d-block w-100" src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image className="d-block w-100" src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              )}

             
              {content === 'gallery' && (
                <div className="gallery">
                  <Image className="d-block w-100" src='https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' />
                  <Image className="d-block w-100" src='https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' />
                  <Image className="d-block w-100" src='https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' />
                </div>
              )}
            </div>
            <div className="col-md-12 col-lg-12 d-flex justify-content-lg-center align-items-center ">
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 mt-3 mx-3">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
      
      </div>
    </>
  );
}

export default App;

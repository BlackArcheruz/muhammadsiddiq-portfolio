import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Navbar1 = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark" style={{backgroundColor: "rgba(0,0,0,0.7)"}}>
              <div className="container">
              <Navbar.Brand href="/">Muhammad Siddiq</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <LinkContainer to="/">
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
      <Nav.Link>
        About
      </Nav.Link>
      </LinkContainer>
      <LinkContainer to="/portfolio">
      <Nav.Link>Portfolio</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
      <Nav.Link style={{marginRight: "2.5rem"}}>Contact</Nav.Link>
      </LinkContainer>
    </Nav>
            </Navbar.Collapse>
            </div>
            </Navbar>
        </div>
    )
}

export default Navbar1

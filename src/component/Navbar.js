import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';




function ColorSchemesExample() {
  return (
    <>
 
    
      <Navbar style={{background:"#088f8f"}} data-bs-theme="dark" class="border shadow">
      <Navbar.Brand href="#home">
        <ShoppingCartCheckoutIcon style={{fontSize:"45px", marginLeft:"85px"}}/>Shoffy
 
      </Navbar.Brand>
      
        <Container>
          
          <Nav className="me-auto d-flex justify-content-center">
            <Nav.Link href="/"style={{fontSize:"20px",color:"white",fontWeight:"600"}}>Home</Nav.Link>
            <Nav.Link href="/about"style={{fontSize:"20px",color:"white",fontWeight:"600",marginLeft:"20px"}}>About</Nav.Link>
            <Nav.Link href="/contact"style={{fontSize:"20px",color:"white",fontWeight:"600",marginLeft:"20px"}}>Service</Nav.Link>
            <Nav.Link href="/contact"style={{fontSize:"20px",color:"white",fontWeight:"600",marginLeft:"20px"}}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

  
    </>
  );
}

export default ColorSchemesExample;
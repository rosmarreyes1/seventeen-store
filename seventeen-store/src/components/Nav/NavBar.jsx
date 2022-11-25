import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget/CartWidget"


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Seventeen</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#woman">Woman</Nav.Link>
                    <Nav.Link href="#men">Men</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#FAQs">FAQ's</Nav.Link>
                    <Nav.Link href="#cart"><CartWidget/></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
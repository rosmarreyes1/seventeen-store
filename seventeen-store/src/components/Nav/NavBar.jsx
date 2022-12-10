import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget/CartWidget"


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Seventeen</Navbar.Brand>
                <Nav className="me-auto">
                <Link to={"/"}>Home</Link>
                <Link to={"category/woman"}>Woman</Link>
                <Link to={"category/men"}>Men</Link>
                <Link to={"contact"}>Contact</Link>
                <Link to={"faqs"}>FAQ's</Link>
                <CartWidget/>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget"
import styles from "./Navbar.module.css"

export const NavBar = () => {
	
	return (<>
		<header className={styles.header}>
			<Navbar expand="lg">
				<Container>
				<Navbar.Brand className={styles.logo}>
						<h1><Link to="/">Seventeen Store</Link></h1>
					</Navbar.Brand>
					<Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav"/>					
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className={styles.menu}>
							<Link to={'/'}>Todos</Link>
							<Link to={'/category/Extra fuerte'}>Extra fuerte</Link>
							<Link to={"/category/Alta"}>Alta</Link>
							<Link to={"/category/Media"}>Media</Link>
						</Nav>
					</Navbar.Collapse>
							<div className={styles.containerCartWidget}>
								<CartWidget/> 
							</div>
				</Container>
			</Navbar>
		</header>
	</>
	)
};

export default NavBar

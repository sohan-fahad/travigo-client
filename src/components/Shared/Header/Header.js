import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'
import { HashLink } from "react-router-hash-link";
import logo from "../../../images/logo-WHITE.png"
import useAuth from "../../Hooks/useAuth";

const Header = () => {
    const { setUser, user } = useAuth()
    console.log(user)
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="navBar">
            <Container>
                <Navbar.Brand as={HashLink} to="/">
                    <img src={logo} alt="Patient Health Care" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">My Orders</Nav.Link>
                    <Nav.Link as={HashLink} to="/addservice">Add Service</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Manage Orders</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                    {
                        user?.displayName ? <Nav.Link as={Link} className="btn-light text-dark me-2" to="/login"
                        onClick={()=> setUser({})}>Log Out</Nav.Link> :
                            <Nav.Link as={Link} className="btn-light text-dark me-2" to="/login">Login</Nav.Link>
                    }
                    {/* <Navbar.Text>
                        {(user.email || user.displayName) && (user.displayName || displayName)}
                    </Navbar.Text> */}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
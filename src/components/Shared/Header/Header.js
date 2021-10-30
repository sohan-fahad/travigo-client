import {
    Container, Nav, Navbar, Dropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'
import { HashLink } from "react-router-hash-link";
import logo from "../../../images/logo-WHITE.png"
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
    const { setUser, user } = useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="navBar">
            <Container>
                <Navbar.Brand as={HashLink} to="/">
                    <img src={logo} alt="Patient Health Care" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#packages">Packages</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                    {
                        user?.email &&
                        <Dropdown className="mx-3 my-3">
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                USER PANEL
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={HashLink} to="/mybooking#mybooking" className="text-dark text-center">My Booking</Dropdown.Item>
                                <Dropdown.Item as={HashLink} to="/manage#manage" className="text-dark text-center">Manage Booking</Dropdown.Item>
                                <Dropdown.Item as={HashLink} to="/addpackages#addpackages" className="text-dark text-center">Add Service</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    }

                    {/* {user?.email && <Nav.Link as={HashLink} to={`/mybooking`}>My Booking</Nav.Link>}
                    {user?.email && <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>}
                    {user?.email&& <Nav.Link as={Link} to="/manage">Manage Booking</Nav.Link>} */}
                    {
                        user?.displayName ? <Nav.Link as={HashLink} className="btn-light text-dark me-2" to="/login#login"
                            onClick={() => setUser({})}>Log Out</Nav.Link> :
                            <Nav.Link as={Link} className="btn-light text-dark me-2" to="/login">Login</Nav.Link>
                    }
                    <Navbar.Text>
                        {user.displayName && user.displayName}
                    </Navbar.Text>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
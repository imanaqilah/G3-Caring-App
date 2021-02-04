import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import ModalForm from "../components/Modal.js";
import { toast } from 'react-toastify'

const NaviBar = ({ loggedIn, setLoggedIn }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [isLogin, setIsLogin] = useState(true);

    const history = useHistory()

    const toggle = () => setIsOpen(!isOpen);

    const [nameInput, setNameInput] = useState("");

    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const toggleIsLogin = () => {
        console.log(isLogin);
        setIsLogin(!isLogin)
    }

    const handleLogout = () => {
        localStorage.removeItem('jwt')
        setLoggedIn(false)
        toast.info("You are logged out", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        history.push("/")
    }

    return (
        <div>
            <Navbar dark expand="lg" style={{ cursor: "pointer", padding: "1em", backgroundColor: "#131313" }}>
                <NavbarBrand onClick={() => { history.push("/") }}>Brand Logo</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar style={{ fontWeight: "700", fontSize: "1em" }}>
                        {/* <NavItem>
                            <NavLink onClick={() => { history.push("/profile") }}>User Homepage</NavLink>
                        </NavItem> */}
                        {
                            loggedIn ?
                                <NavItem>
                                    <NavLink style={{ cursor: "pointer" }} onClick={() => { history.push("/profile") }}>My Profile</NavLink>
                                </NavItem>
                                :
                                <NavItem>
                                    <NavLink onClick={() => { toggleModal(); setIsLogin(false) }}>Sign Up</NavLink>
                                </NavItem>
                        }
                        <NavItem>
                            {/* LOGIN MODAL */}
                            {/* <ModalForm isLogin={isLogin} setIsLogin={setIsLogin}>Sign In</ModalForm> */}
                            {
                                loggedIn ?
                                    <NavLink style={{ cursor: "pointer" }} onClick={() => handleLogout()}>Sign Out</NavLink>
                                    :
                                    <NavLink style={{ cursor: "pointer" }} onClick={() => { toggleModal(); setIsLogin(true) }} >Sign In</NavLink>

                            }
                        </NavItem>

                        {/* <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                    </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown> */}
                    </Nav>
                </Collapse>
            </Navbar>

            <ModalForm
                isOpen={showModal}
                toggle={toggleModal}
                toggleIsLogin={toggleIsLogin}
                setLoggedIn={setLoggedIn}
                isLogin={isLogin}
            />
        </div>


    );
}

export default NaviBar;
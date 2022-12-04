import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./svg/Logo";
import SearchIcon from "./svg/SearchIcon";
import ToggleIcon from "./svg/ToggleIcon";
import style from "./common.module.css";
export const HeaderMobile = (props) => {
    return (
        <>
            <Navbar bg="white" expand={"md"} className={style.header}>
                <Container fluid>
                    <Navbar.Brand href="#">
                        <Logo />
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Link to="/">
                            <SearchIcon color="black" />
                        </Link>
                    </Nav>
                    <Navbar.Toggle className={style.toggle}>
                        <ToggleIcon fill="black" />
                    </Navbar.Toggle>
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1" className="d-flex">
                                    <span className="material-icons align-self-center me-2">send</span>공지사항
                                </Nav.Link>
                                <Nav.Link href="#action2" className="d-flex">
                                    <span className="material-icons me-2">help_outline</span>&#9;FAQ
                                </Nav.Link>
                                <Nav.Link href="#action3" className="d-flex">
                                    <span className="material-icons me-2">wifi_calling_3</span>&#9;고객센터
                                </Nav.Link>
                                <Nav.Link href="#action4" className="d-flex">
                                    <span className="material-icons me-2">shield</span>&#9;개인정보처리방침
                                </Nav.Link>
                                <Nav.Link href="#action5" className="d-flex">
                                    <span className="material-icons me-2">edit</span>&#9;이용약관
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export const HeaderPC = (props) => {
    return (
        <Navbar>
            <Container fluid>
                <Navbar.Brand href="#">Logo</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";

export const HeaderMobile = (props) => {
    return (
        <Navbar bg="light" expand={"md"} className="mb-3">
            <Container fluid>
                <Navbar.Brand href="#">Logo</Navbar.Brand>
                <Navbar.Toggle />
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

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function TestBottom() {
    const [clickList, setClickList] = useState([
        {
            id: 1,
            text: "home",
            clicked: true,
        },
        {
            id: 2,
            text: "search",
            clicked: false,
        },
        {
            id: 3,
            text: "perm_identity",
            clicked: false,
        },
        {
            id: 4,
            text: "notifications_none",
            clicked: false,
        },
    ]);
    const clickHandler = (id) => {
        setClickList(clickList.map((data) => (data.id === id ? { ...data, clicked: true } : { ...data, clicked: false })));
        id === 3 && handleShow();
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="light" className="fixed-bottom p-0">
                {clickList.map((data) => (
                    <span
                        className={data.clicked ? "material-icons p-3 w-100 text-center clicked-border" : "material-icons p-3 w-100 text-center"}
                        key={data.id}
                        onClick={() => {
                            clickHandler(data.id);
                        }}
                    >
                        {data.text}
                    </span>
                ))}
            </Navbar>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default TestBottom;

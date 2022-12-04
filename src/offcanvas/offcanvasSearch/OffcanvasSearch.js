import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasHeader from "./OffcanvasHeader";
import OffcanvasBody from "./OffcanvasBody";

const OffcanvasSearch = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <OffcanvasHeader />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <OffcanvasBody />{" "}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default OffcanvasSearch;
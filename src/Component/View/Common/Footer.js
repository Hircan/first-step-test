import { useEffect, useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
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
    const navigate = useNavigate();
    const clickHandler = (id) => {
        setClickList(clickList.map((data) => (data.id === id ? { ...data, clicked: true } : { ...data, clicked: false })));
        id === 2 && handleShow();
        id === 4 && navigate("/MyPage", { replace: true });
        id === 1 && navigate("/", { replace: true });
    };
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

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
            <SearchPage close={handleClose} show={show} />
        </>
    );
}

const HotTopic = () => {
    const [hotTopics, setHotTopics] = useState(["BTS", "???????????????", "????????? ?????????", "REACT", "??????", "?????????", "????????? ??????", "?????????????????????"]);

    return (
        <>
            <section>
                <h6>???????????????</h6>
                {hotTopics.map((topic) => (
                    <div className="d-inline-block border rounded-2 py-1 px-2 m-1  me-2">
                        <span>{topic}</span>
                    </div>
                ))}
            </section>
            <hr />
        </>
    );
};

const SearchPage = ({ show, close }) => {
    const [keywords, setKeywords] = useState(JSON.parse(localStorage.getItem("keywords") || "[]"));
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        localStorage.setItem("keywords", JSON.stringify(keywords));
    });

    //????????? ??????
    const handleAddKeyword = (text) => {
        console.log("text", text);
        const newKeyword = {
            id: Date.now(),
            text: text,
        };
        setKeywords([newKeyword, ...keywords]);
        console.log(keywords);
    };

    //????????? ??????
    const handleRemoveKeyword = (id) => {
        const nextKeyword = keywords.filter((thisKeyword) => {
            return thisKeyword.id !== id;
        });
        setKeywords(nextKeyword);
    };

    //????????? ?????? ??????
    const handelClearKeywords = () => {
        setKeywords([]);
    };

    const handleEnter = (e) => {
        if (keyword && e.keyCode === 13) {
            handleAddKeyword(keyword);
            setKeyword("");
        }
    };

    const handleKeyword = (e) => {
        setKeyword(e.target.value);
    };
    return (
        <>
            <Offcanvas show={show} onHide={close} placement="bottom" className="vh-100">
                <Offcanvas.Header closeButton>
                    <input placeholder="??????????????????." className="w-100" onKeyDown={handleEnter} value={keyword} onChange={handleKeyword}></input>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <HotTopic />
                    <History keywords={keywords} onClearKeywords={handelClearKeywords} onRemoveKeyword={handleRemoveKeyword} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

const History = ({ keywords, onRemoveKeyword, onClearKeywords }) => {
    console.log("keyword", keywords);
    if (keywords.length === 0) {
        return <div>?????? ????????? ????????? ????????????.</div>;
    }
    return (
        <>
            <h6>?????? ?????? ??????</h6>
            {keywords.map(({ id, text }) => (
                <div className="d-inline-block border rounded-2 py-1 px-2 m-1  me-2" key={id}>
                    <span>{text}</span>
                    <button
                        //???????????? ?????????????????? arrow function??? ???????????? ??????
                        //?????? ?????? ????????? ?????????????????? ?????? ?????????
                        onClick={() => {
                            onRemoveKeyword(id);
                        }}
                    >
                        ??????
                    </button>
                </div>
            ))}
        </>
    );
};

export default Footer;

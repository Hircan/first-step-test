import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { H4, Span } from "../../Common/Typography";
const SignUp = ({ children, ...props }) => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const onClickBtn = () => {
        navigate(`/SMSAuth?phone=${phone}`);
    };
    const onChangePhone = (e) => {
        setPhone(e.target.value);
    };
    return (
        <Container className="justify-content-center text-center" style={{ paddingTop: "90px" }}>
            <H4>회원가입</H4>
            <div className="d-flex flex-column mb-2">
                <label for="name" className="text-start">
                    이름
                </label>
                <input type="tel" id="name" placeholder="이름을 입력해주세요."></input>
            </div>
            <div className="d-flex flex-column mb-2">
                <label for="phone" className="text-start">
                    전화번호
                </label>
                <input id="phone" placeholder="전화번호를 입력해주세요." onChange={onChangePhone}></input>
            </div>
            <Button className="d-flex mx-auto" onClick={onClickBtn}>
                <Span>다음</Span>
                <span className="material-icons">chevron_right</span>
            </Button>
        </Container>
    );
};

export default SignUp;

import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { H4, Span } from "../../Common/Typography";
import style from "./SignUp.module.css";
const SignUpAdd1 = ({ children, ...props }) => {
    const [text, setText] = useState({
        name: "",
        password: "",
        password_confirm: "",
    });
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const onClickBtn = () => {
        navigate(`/SMSAuth?phone=${phone}`);
    };
    const onChangeEvent = (e) => {
        setText({ ...text, [e.target.name]: e.target.value });
        console.log(text);
    };
    const onMouseDownPasswordView = (e) => {
        const password = document.getElementById("password");
        console.log(password);
        password.setAttribute("type", "text");
    };
    const onMouseUpPasswordView = (e) => {
        const password = document.getElementById("password");
        console.log(password);
        password.setAttribute("type", "password");
    };
    const inputPassword = useRef(null);

    return (
        <Container className="justify-content-center text-center" style={{ paddingTop: "90px" }}>
            <H4>회원가입</H4>
            <div className="d-flex flex-column mb-2">
                <label for="name" className="text-start">
                    이메일
                </label>
                <input type="tel" id="name" name="name" placeholder="이메일을 입력해주세요." onChange={onChangeEvent}></input>
            </div>
            <div className="d-flex flex-column mb-2">
                <label for="password" className="text-start">
                    비밀번호
                </label>
                <div className="d-flex align-items-center position-relative">
                    <input id="password" type="password" name="password" placeholder="비밀번호를 입력해주세요." onChange={onChangeEvent} className="w-100"></input>
                    <span className={`${style.passwordView} material-icons`} onMouseDown={onMouseDownPasswordView} onMouseUp={onMouseUpPasswordView} name="password">
                        visibility
                    </span>
                </div>
            </div>
            <div className="d-flex flex-column mb-2">
                <label for="password_confirm" className="text-start">
                    비밀번호 확인
                </label>
                <input type="password" name="password_confirm" placeholder="비밀번호를 다시입력해주세요." onChange={onChangeEvent}></input>
                <span class="material-icons">visibility</span>
            </div>
            <Button className="d-flex mx-auto" onClick={onClickBtn}>
                <Span>다음</Span>
                <span className="material-icons">chevron_right</span>
            </Button>
        </Container>
    );
};

export default SignUpAdd1;

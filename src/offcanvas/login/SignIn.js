import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { H4, Span } from "../../Common/Typography";

const SignIn = ({ children, ...props }) => {
    const [text, setText] = useState({
        name: "",
        phone: "",
    });

    const { name, phone } = text;

    const onChangeEvent = (e) => {
        setText({ ...text, [e.target.name]: e.target.value });
        console.log(text);
    };

    return (
        <Container className="justify-content-center text-center" style={{ paddingTop: "90px" }}>
            <H4>로그인</H4>
            <div className="d-flex flex-column mb-2">
                <label for="name" className="text-start">
                    이름
                </label>
                <input type="tel" id="name" name="name" placeholder="이름을 입력해주세요." onChange={onChangeEvent}></input>
            </div>
            <div className="d-flex flex-column mb-2">
                <label for="phone" className="text-start">
                    전화번호
                </label>
                <input id="phone" name="phone" placeholder="전화번호를 입력해주세요." onChange={onChangeEvent}></input>
            </div>
            <Button className="d-flex mx-auto">
                <Span>다음</Span>
                <span className="material-icons">chevron_right</span>
            </Button>
        </Container>
    );
};

export default SignIn;

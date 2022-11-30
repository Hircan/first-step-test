import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { H4, Span } from "../../Common/Typography";
const SMSAuth = (authNum) => {
    const [count, setCount] = useState("3:00");
    const navigate = useNavigate();
    const onClickBtn = () => {
        navigate(`/signupadd1`);
    };
    return (
        <Container className="justify-content-center text-center" style={{ paddingTop: "90px" }}>
            <Button className="border-none">
                <span className="material-icons">chevron_left</span>
            </Button>
            <H4>인증하기</H4>

            <div className="d-flex flex-column mb-2">
                <label for="name" className="text-start">
                    문자로 전송한 코드를 입력하세요.
                </label>
                <input id="name"></input>
            </div>
            <Span>코드를 받지 못하셨나요? {count}</Span>
            <Link to="/SMSAuth" className="d-block text-start">
                <strong>다시 보내기</strong>
            </Link>
            <Button className="d-flex mx-auto" onClick={onClickBtn}>
                <Span>다음</Span>
                <span className="material-icons">chevron_right</span>
            </Button>
        </Container>
    );
};

export default SMSAuth;

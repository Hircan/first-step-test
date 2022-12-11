import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./MyPage.module.css";
export const MyPageContent = () => {
    const [isLogin, setIsLogin] = useState("false");

    return (
        <Container style={{ paddingTop: "90px" }}>
            <h3>프로필</h3>
            <span>
                지금 당장 꿈을 향한 <strong>첫걸음</strong>을 내딛어보세요.
            </span>
            <hr />
            <Link to="/signin" className={style.linkStyleNone}>
                <button className="d-flex">
                    <span className="material-icons">favorite</span>
                    <span className="mx-1">로그인</span>
                    <span className="material-icons">chevron_right</span>
                </button>
            </Link>
            <p className="mt-2">
                첫걸음 계정이 없나요?
                <Link to="/signup">
                    <strong>회원가입</strong>
                </Link>
            </p>
        </Container>
    );
};

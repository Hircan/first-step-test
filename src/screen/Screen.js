import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "../Domain/Home/Home";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
// import { MyPage } from "../Domain/MyPage/MyPage";
// import SignUp from "../Domain/Login/SignUp";
// import SMSAuth from "../Domain/Login/SMSAuth";
// import SignIn from "../Domain/Login/SignIn";
// import SignUpAdd1 from "../Domain/Login/SignUpAdd1";
import Components from "./componentTest/Components";
import Home from "./home/Home";

function Screen() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = debounce(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        console.log("브라우저 화면 사이즈", windowSize.width, windowSize.height);
    });
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <Routes>
                {/* {window.innerWidth >= 768 && (
                    <>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/MyPage" element={<MyPage />} />
                    </>
                )}
                {window.innerWidth < 768 && (
                    <>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/MyPage" element={<MyPage />} />
                    </>
                )} */}
                {/* <Route exact path="/signin" element={<SignIn />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/SMSAuth" element={<SMSAuth />} />
                <Route exact path="/signupadd1" element={<SignUpAdd1 />} /> */}
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Components" element={<Components />} />
            </Routes>
        </>
    );
}

export default Screen;

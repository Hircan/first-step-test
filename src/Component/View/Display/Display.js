import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Domain/Home/Home";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { MyPage } from "../Domain/MyPage/MyPage";

function Display() {
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
                {window.innerWidth >= 768 && (
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
                )}
            </Routes>
        </>
    );
}

export default Display;

import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeMobile from "../Domain/Mobile/Home/Home";
import HomePC from "../Domain/PC/Home/Home";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

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
                        <Route exact path="/" element={<HomePC />} />
                    </>
                )}
                {window.innerWidth < 768 && (
                    <>
                        <Route exact path="/" element={<HomeMobile />} />
                    </>
                )}
            </Routes>
        </>
    );
}

export default Display;

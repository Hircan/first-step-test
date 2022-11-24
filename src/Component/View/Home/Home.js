import { HeaderMobile, HeaderPC } from "../Common/Header";
import Footer from "../Common/Footer";
import HomeContent from "./HomeContent";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

const Home = () => {
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
            {window.innerWidth >= 768 && (
                <>
                    <HeaderPC />
                    <HomeContent />
                    <Footer />
                </>
            )}
            {window.innerWidth < 768 && (
                <>
                    <HeaderMobile />
                    <HomeContent />
                    <Footer />
                </>
            )}
        </>
    );
};

export default Home;

import { HeaderMobile } from "../../Common/Header";
import Footer from "../../Common/Footer";
import HomeContent from "../../Home/HomeContent";
import Certification from "../../../../Util/Certification";

const HomeMobile = () => {
    return (
        <>
            <div>
                <HeaderMobile />
                <HomeContent />
                <Footer />
                <Certification />
            </div>
        </>
    );
};

export default HomeMobile;

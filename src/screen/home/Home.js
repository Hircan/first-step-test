import { HeaderMobile } from "Component/Header";
import OffcanvasSearch from "offcanvas/offcanvasSearch/OffcanvasSearch";
import HomeContent from "./HomeContent";
const Home = () => {
    return (
        <>
            <HeaderMobile />
            <HomeContent />
            <OffcanvasSearch name="테스트" />
        </>
    );
};

export default Home;

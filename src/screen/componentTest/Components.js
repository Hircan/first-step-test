import { Container } from "react-bootstrap";
import ButtonAddMobile from "../../Component/buttons/ButtonAddMobile";
import ButtonAddPC from "../../Component/buttons/ButtonAddPC";
import ButtonAddTablet from "../../Component/buttons/ButtonAddTablet";
import ButtonMobile from "../../Component/buttons/ButtonMobile";
import ButtonPC from "../../Component/buttons/ButtonPC";
import ButtonSearchMobile from "../../Component/buttons/ButtonSearchMobile";
import ButtonSearchPC from "../../Component/buttons/ButtonSearchPC";
import ButtonTablet from "../../Component/buttons/ButtonTablet";
import ButtonToggleMobile from "../../Component/buttons/ButtonToggleMobile";
import ButtonTogglePC from "../../Component/buttons/ButtonTogglePC";
import CloseMobile from "../../Component/buttons/CloseMobile";
import ClosePC from "../../Component/buttons/ClosePC";
import CloseTablet from "../../Component/buttons/CloseTablet";
import Floatting from "../../Component/buttons/Floatting";
import Logo from "../../Component/svg/Logo";
const Components = () => {
    return (
        <>
            <ul>
                <li>
                    <ButtonMobile>안녕하세요</ButtonMobile>
                </li>
                <li>
                    <ButtonTablet>안녕하세요</ButtonTablet>
                </li>
                <li>
                    <ButtonPC>안녕하세요</ButtonPC>
                </li>
                <li>
                    <CloseMobile />
                </li>
                <li>
                    <CloseTablet />
                </li>
                <li>
                    <ClosePC />
                </li>
                <li>
                    <ButtonAddMobile>Button</ButtonAddMobile>
                </li>
                <li>
                    <ButtonAddTablet>Button</ButtonAddTablet>
                </li>
                <li>
                    <ButtonAddPC>Button</ButtonAddPC>
                </li>
                <li>
                    <ButtonToggleMobile />
                </li>
                <li>
                    <ButtonTogglePC />
                </li>
                <li>
                    <Floatting color={"blue"} />
                </li>
                <li>
                    <ButtonSearchMobile />
                </li>
                <li>
                    <ButtonSearchPC />
                </li>
                <li>
                    <Logo color={"blue"} />
                </li>
            </ul>
        </>
    );
};

export default Components;

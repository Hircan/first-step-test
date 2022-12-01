import { Container } from "react-bootstrap";
import ButtonAddMobile from "../../Common/Buttons/ButtonAddMobile";
import ButtonAddPC from "../../Common/Buttons/ButtonAddPC";
import ButtonAddTablet from "../../Common/Buttons/ButtonAddTablet";
import ButtonMobile from "../../Common/Buttons/ButtonMobile";
import ButtonPC from "../../Common/Buttons/ButtonPC";
import ButtonSearchMobile from "../../Common/Buttons/ButtonSearchMobile";
import ButtonSearchPC from "../../Common/Buttons/ButtonSearchPC";
import ButtonTablet from "../../Common/Buttons/ButtonTablet";
import ButtonToggleMobile from "../../Common/Buttons/ButtonToggleMobile";
import ButtonTogglePC from "../../Common/Buttons/ButtonTogglePC";
import CloseMobile from "../../Common/Buttons/CloseMobile";
import ClosePC from "../../Common/Buttons/ClosePC";
import CloseTablet from "../../Common/Buttons/CloseTablet";
import Floatting from "../../Common/Buttons/Floatting";
import Logo from "../../Common/SVG/Logo";

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

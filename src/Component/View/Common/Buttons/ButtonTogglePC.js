import styled from "styled-components";
import palettes from "../../../../lib/styles/palettes";
import ToggleIcon from "../SVG/ToggleIcon";

const StyleBtn = styled.button`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    border: none;
    align-items: center;
    border-radius: 10px;
    padding: 17px 14px;
    width: ${(props) => props.width || ""};
    color: ${(props) => props.color || "#FFFFFF"};
    background: ${(props) => props.background || palettes.black[0]};
`;

const ButtonTogglePC = (props) => {
    console.log(`props 목록 : ${JSON.stringify(props)}`);
    console.log(`children 목록 : ${props.children}`);
    return (
        <StyleBtn {...props}>
            <ToggleIcon width={"28"} height={"22"} />
            {props.children}
        </StyleBtn>
    );
};

export default ButtonTogglePC;

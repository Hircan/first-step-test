import styled from "styled-components";
import ToggleIcon from "../svg/ToggleIcon";

const StyleBtn = styled.button`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    border: none;
    align-items: center;
    border-radius: 10px;
    padding: 14.5px 12px;
    width: ${(props) => props.width || ""};
    color: ${(props) => props.color || "#FFFFFF"};
    background: ${(props) => props.background || "222222"};
`;

const ButtonToggleMobile = (props) => {
    console.log(`props 목록 : ${JSON.stringify(props)}`);
    console.log(`children 목록 : ${props.children}`);
    return (
        <StyleBtn {...props}>
            <ToggleIcon />
            {props.children}
        </StyleBtn>
    );
};

export default ButtonToggleMobile;

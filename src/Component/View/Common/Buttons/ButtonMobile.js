import styled from "styled-components";
import palettes from "../../../../lib/styles/palettes";

const StyleBtn = styled.button`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    padding: 10px 16px;
    width: ${(props) => props.width || ""};
    color: ${(props) => props.color || "#FFFFFF"};
    background: ${(props) => props.background || palettes.black[0]};
`;

const ButtonMobile = (props) => {
    console.log(`props 목록 : ${JSON.stringify(props)}`);
    console.log(`children 목록 : ${props.children}`);
    return <StyleBtn {...props}>{props.children}</StyleBtn>;
};

export default ButtonMobile;

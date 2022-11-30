import styled from "styled-components";
import palettes from "../../../../lib/styles/palettes";

const StyleBtn = styled.button`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
    border: none;
    border-radius: 10px;
    width: ${(props) => props.width || ""};
    color: ${(props) => props.color || "gray"};
    background: ${(props) => props.background || palettes.first[3]};
`;

const ButtonSmall = (props) => {
    console.log(`props 목록 : ${JSON.stringify(props)}`);
    console.log(`children 목록 : ${props.children}`);
    return <StyleBtn {...props}>{props.children}</StyleBtn>;
};

export default ButtonSmall;

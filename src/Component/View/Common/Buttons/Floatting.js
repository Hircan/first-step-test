import styled from "styled-components";
import palettes from "../../../../lib/styles/palettes";
import ChatIcon from "../SVG/ChatIcon";

const StyleBtn = styled.button`
    border: none;
    border-radius: 100px;
    padding: 12px;
    position: fixed;
    right: 30px;
    bottom: 70px;
    z-index: 9999;
    color: ${(props) => props.color || "#FFFFFF"};
    background: ${(props) => props.background || palettes.black[0]};
`;

const Floatting = (props) => {
    console.log(`props 목록 : ${JSON.stringify(props)}`);
    console.log(`children 목록 : ${props.children}`);
    return (
        <StyleBtn {...props}>
            <ChatIcon color={props.color} />
        </StyleBtn>
    );
};

export default Floatting;

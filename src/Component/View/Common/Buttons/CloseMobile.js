import styled from "styled-components";
import CloseIcon from "../SVG/CloseIcon";
import palettes from "../../../../lib/styles/palettes";

const StyleBtn = styled.button`
    border: none;
    border-radius: 10px;
    padding: 8px;
    color: ${(props) => props.color || "#FFFFFF"};
    background: ${(props) => props.background || palettes.black[0]};
`;

const CloseMobile = (props) => {
    console.log(`props 목록 : ${JSON.stringify(props)}`);
    console.log(`children 목록 : ${props.children}`);
    return (
        <StyleBtn {...props}>
            <CloseIcon width={"16"} height={"16"} fill={props.color || "white"} />
        </StyleBtn>
    );
};

export default CloseMobile;

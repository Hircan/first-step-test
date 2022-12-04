import styled from "styled-components";
import CloseIcon from "../svg/CloseIcon";

const StyleBtn = styled.button`
    border: none;
    border-radius: 10px;
    padding: 14px;
    color: ${(props) => props.color || "#FFFFFF"};
    background: ${(props) => props.background || "222222"};
`;

const ClosePC = (props) => {
    console.log(`props 목록 : ${JSON.stringify(props)}`);
    console.log(`children 목록 : ${props.children}`);
    return (
        <StyleBtn {...props}>
            <CloseIcon width={"24"} height={"24"} fill={props.color || "white"} />
        </StyleBtn>
    );
};

export default ClosePC;

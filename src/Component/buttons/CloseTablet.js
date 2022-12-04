import styled from "styled-components";
import CloseIcon from "../svg/CloseIcon";

const StyleBtn = styled.button`
    border: none;
    border-radius: 10px;
    padding: 12px;
    color: ${(props) => props.color || "#FFFFFF"};
    background: ${(props) => props.background || "222222"};
`;

const CloseTablet = (props) => {
    console.log(`props 목록 : ${JSON.stringify(props)}`);
    console.log(`children 목록 : ${props.children}`);
    return (
        <StyleBtn {...props}>
            <CloseIcon width={"20"} height={"20"} fill={props.color || "white"} />
        </StyleBtn>
    );
};

export default CloseTablet;

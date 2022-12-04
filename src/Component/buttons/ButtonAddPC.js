import styled from "styled-components";
import PlusIcon from "../svg/PlusIcon";

const StyleBtn = styled.button`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    border: none;
    align-items: center;
    border-radius: 10px;
    padding: 10px 32px 10px 24px;
    width: ${(props) => props.width || ""};
    color: ${(props) => props.color || "#FFFFFF"};
    background: ${(props) => props.background || "222222"};
`;

const ButtonAddPC = (props) => {
    console.log(`props 목록 : ${JSON.stringify(props)}`);
    console.log(`children 목록 : ${props.children}`);
    return (
        <StyleBtn {...props}>
            <PlusIcon width={"24"} height={"24"} style={{ marginRight: "8px" }} />
            {props.children}
        </StyleBtn>
    );
};

export default ButtonAddPC;

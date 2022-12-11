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
    padding: 10px 24px 10px 20px;
    width: ${(props) => props.width || ""};
    color: ${(props) => props.color || "#FFFFFF"};
    background: ${(props) => props.background || "222222"};
`;

const ButtonAddTablet = (props) => {
    console.log(`props 목록 : ${JSON.stringify(props)}`);
    console.log(`children 목록 : ${props.children}`);
    return (
        <StyleBtn {...props}>
            <PlusIcon width={"20"} height={"20"} style={{ marginRight: "8px" }} />
            {props.children}
        </StyleBtn>
    );
};

export default ButtonAddTablet;

import styled from "styled-components";
import SearchIcon from "../svg/SearchIcon";

const StyleBtn = styled.button`
    border: none;
    border-radius: 10px;
    padding: 12px;
    width: ${(props) => props.width || ""};
    background: ${(props) => props.background || "222222"};
`;

const ButtonSearchMobile = (props) => {
    console.log(`props 목록 : ${JSON.stringify(props)}`);
    console.log(`children 목록 : ${props.children}`);
    return (
        <StyleBtn {...props}>
            <SearchIcon color={props.color} />
        </StyleBtn>
    );
};

export default ButtonSearchMobile;

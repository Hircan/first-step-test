import styled from "styled-components";
import palettes from "../../../../lib/styles/palettes";
import SearchIcon from "../SVG/SearchIcon";

const StyleBtn = styled.button`
    border: none;
    border-radius: 10px;
    padding: 12px;
    width: ${(props) => props.width || ""};
    background: ${(props) => props.background || palettes.black[0]};
`;

const ButtonSearchPC = (props) => {
    console.log(`props 목록 : ${JSON.stringify(props)}`);
    console.log(`children 목록 : ${props.children}`);
    return (
        <StyleBtn {...props}>
            <SearchIcon width={"24"} height={"24"} color={props.color} />
        </StyleBtn>
    );
};

export default ButtonSearchPC;

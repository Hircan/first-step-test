import styled from "styled-components";

const StyleP = styled.p``;

const P = (props) => {
    return <StyleP {...props}>{props.children}</StyleP>;
};

export default P;

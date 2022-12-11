import styled from "styled-components";

const StyleH6 = styled.h6``;

const H6 = (props) => {
    return <StyleH6 {...props}>{props.children}</StyleH6>;
};

export default H6;

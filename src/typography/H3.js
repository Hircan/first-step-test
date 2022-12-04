import styled from "styled-components";

const StyleH3 = styled.h3``;

const H3 = (props) => {
    return <StyleH3 {...props}>{props.children}</StyleH3>;
};

export default H3;

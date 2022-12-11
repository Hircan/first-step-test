import styled from "styled-components";

const StyleH4 = styled.h4``;

const H4 = (props) => {
    return <StyleH4 {...props}>{props.children}</StyleH4>;
};

export default H4;

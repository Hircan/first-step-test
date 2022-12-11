import styled from "styled-components";

const StyleH2 = styled.h2``;

const H2 = (props) => {
    return <StyleH2 {...props}>{props.children}</StyleH2>;
};

export default H2;

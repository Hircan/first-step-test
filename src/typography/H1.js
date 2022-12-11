import styled from "styled-components";

const StyleH1 = styled.h1``;

const H1 = (props) => {
    return <StyleH1 {...props}>{props.children}</StyleH1>;
};

export default H1;

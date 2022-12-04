import styled from "styled-components";

const StyleSpan = styled.span``;

const Span = (props) => {
    return <StyleSpan {...props}>{props.children}</StyleSpan>;
};

export default Span;

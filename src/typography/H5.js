import styled from "styled-components";

const StyleH5 = styled.h5``;

const H5 = (props) => {
    return <StyleH5 {...props}>{props.children}</StyleH5>;
};

export default H5;

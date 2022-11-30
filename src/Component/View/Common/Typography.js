import styled from "styled-components";

const StyleSpan = styled.span`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
`;
const StyleH1 = styled.h1`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
`;
const StyleH2 = styled.h2`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
`;
const StyleH3 = styled.h3`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
`;
const StyleH4 = styled.h4`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
`;
const StyleH5 = styled.h5`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
`;
const StyleH6 = styled.h6`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
`;

export const Span = ({ children }) => {
    return <StyleSpan>{children}</StyleSpan>;
};

export const H1 = ({ children }) => {
    return <StyleH1>{children}</StyleH1>;
};

export const H2 = ({ children }) => {
    return <StyleH2>{children}</StyleH2>;
};

export const H3 = ({ children }) => {
    return <StyleH3>{children}</StyleH3>;
};

export const H4 = ({ children }) => {
    return <StyleH4>{children}</StyleH4>;
};

export const H5 = ({ children }) => {
    return <StyleH5>{children}</StyleH5>;
};

export const H6 = ({ children }) => {
    return <StyleH6>{children}</StyleH6>;
};

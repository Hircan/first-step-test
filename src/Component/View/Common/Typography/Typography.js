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

export const Span = (props) => {
    return <StyleSpan {...props}>{props.children}</StyleSpan>;
};

export const H1 = (props) => {
    return <StyleH1 {...props}>{props.children}</StyleH1>;
};

export const H2 = (props) => {
    return <StyleH2 {...props}>{props.children}</StyleH2>;
};

export const H3 = (props) => {
    return <StyleH3 {...props}>{props.children}</StyleH3>;
};

export const H4 = (props) => {
    return (
        <StyleH4 {...props} className="red">
            {props.children}
        </StyleH4>
    );
};

export const H5 = (props) => {
    return <StyleH5 {...props}>{props.children}</StyleH5>;
};

export const H6 = (props) => {
    return <StyleH6 {...props}>{props.children}</StyleH6>;
};

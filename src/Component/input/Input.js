import React from "react";
import styled from "styled-components";

const StyleInputText = styled.input`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
    border-radius: 10px;
    width: ${(props) => props.width || ""};
    color: ${(props) => props.color || "gray"};
    background: ${(props) => props.background || "white"};
`;

function Input({ width, color, background, placeholder }) {
    return <StyleInputText width={width} color={color} background={background} placeholder={placeholder} />;
}

export { Input };

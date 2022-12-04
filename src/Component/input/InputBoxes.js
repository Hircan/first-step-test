import styled from "styled-components";
import { useState } from "react";
import { InputProvider } from "./useInputContext";
import { Input } from "./Input";

const StyleInputText = styled.input`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
    border-radius: 10px;
    width: ${(props) => props.width || ""};
    color: ${(props) => props.color || "gray"};
    background: ${(props) => props.background || "white"};
`;

const StyleInputCheckBox = styled.input`
    appearance: none;
    width: 1rem;
    height: 1rem;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7JPEQY4fhRacaHa82QZyb5DUy8WS81Xzyxb5FUXWaARmGS6zLyJrKdwHTiqdtgEq18Y&usqp=CAU");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    &:checked {
        border-color: transparent;
        background-image: url("http://www.urbanbrush.net/web/wp-content/uploads/edd/2018/01/web-20180101142045553930.png");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
    }
`;
const StyleLabel = styled.label`
    display: flex;
    align-items: center;
    user-select: none;
`;

const InputText = ({ children, placeHolder, background, width, color, className }) => {
    const [value, setValue] = useState("");
    const onChange = (e) => {
        console.log("변경중", value);
        setValue(e.target.value);
    };
    return <InputProvider className={className}>{children}</InputProvider>;
};
InputText.Label = StyleLabel;
InputText.Input = Input;

const InputCheckBox = ({ children }) => {
    return (
        <>
            <StyleLabel for="img_checkbox">
                <StyleInputCheckBox type="checkbox" id="img_checkbox" />
                {children}
            </StyleLabel>
        </>
    );
};

export { InputText, InputCheckBox };

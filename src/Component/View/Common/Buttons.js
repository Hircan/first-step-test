import styled from "styled-components";

const StyleBtnSmall = styled.button`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
    border: none;
    border-radius: 10px;
    width: ${(props) => props.width || ""};
    color: ${(props) => props.color || "gray"};
    background: ${(props) => props.background || "white"};
`;

const StyleBtnMedium = styled.button`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
    border: none;
    border-radius: 10px;
    padding: 1rem;
    color: ${(props) => props.color || "gray"};
    background: ${(props) => props.background || "white"};
`;

const StyleBtnBig = styled.button`
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
    border: none;
    border-radius: 10px;
    padding: 1.5rem;
    color: ${(props) => props.color || "gray"};
    background: ${(props) => props.background || "white"};
`;

const ButtonSmall = ({ children, color, background, width, onClick }) => {
    return (
        <>
            <StyleBtnSmall color={color} background={background} width={width} onClick={onClick}>
                {children}
            </StyleBtnSmall>
        </>
    );
};

const ButtonMedium = ({ children, color, background }) => {
    return (
        <>
            <StyleBtnMedium color={color} background={background}>
                {children}
            </StyleBtnMedium>
        </>
    );
};

const ButtonBig = ({ children, color, background }) => {
    return (
        <>
            <StyleBtnBig color={color} background={background}>
                {children}
            </StyleBtnBig>
        </>
    );
};
export { ButtonSmall, ButtonMedium, ButtonBig };

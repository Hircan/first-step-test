import React from "react";

const InputContext = React.createContext(undefined);

function InputProvider({ children }) {
    return <InputContext.Provider>{children}</InputContext.Provider>;
}

function useInputContext() {
    const context = React.useContext(InputContext);
    if (context === undefined) {
        throw new Error("useInputContext must be used within a InputContext");
    }
    return context;
}

export { InputProvider, useInputContext };

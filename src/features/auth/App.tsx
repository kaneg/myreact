import React, {useState} from 'react';
import AuthRequired from "./AuthRequired";
import Nav from "../nav/Nav";
import {FluentProvider, teamsLightTheme} from "@fluentui/react-components";

export const AuthApp = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    function abc() {
        return currentDate.toTimeString();
    }

    return (
        <div>
            <FluentProvider theme={teamsLightTheme}>
            <Nav/>
            <AuthRequired>Hello, Kane</AuthRequired>
            </FluentProvider>
        </div>
    );
};

export default AuthApp;

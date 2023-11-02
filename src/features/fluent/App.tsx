import {FluentProvider, teamsLightTheme} from '@fluentui/react-components';
import {Button} from '@fluentui/react-components';
import Nav from "../nav/Nav";
import React from "react";
import MyCard from './components/MyCard'
import AuthRequired from "../auth/AuthRequired";

export const FluentApp = () => {
    return (
        <AuthRequired>
            <FluentProvider theme={teamsLightTheme}>
                <Nav/>
                <Button appearance="primary">Get started</Button>
                <MyCard/>
            </FluentProvider>
        </AuthRequired>
    )
}
export default FluentApp
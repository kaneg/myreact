import {FluentProvider, teamsLightTheme} from '@fluentui/react-components';
import {Button} from '@fluentui/react-components';
import Nav from "../nav/Nav";
import React from "react";

export const FluentApp = () => {
    return (
        <FluentProvider theme={teamsLightTheme}>
            <Nav/>
            <Button appearance="primary">Get started</Button>
        </FluentProvider>
    )
}
export default FluentApp
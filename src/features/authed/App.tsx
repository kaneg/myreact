import React, {useEffect} from 'react';

export const AuthedApp = () => {
    const sendEvent = () => {
        console.log('Post message')
        let targetWindow = window.opener
        targetWindow.postMessage('ok', "*")
        window.close()
    }
    window.setTimeout(sendEvent, 3000)
    return (
        <div>
            Login...
        </div>
    );
};

export default AuthedApp;

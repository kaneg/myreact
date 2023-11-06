import React, {useEffect, useState} from "react";
import {Button, Spinner} from "@fluentui/react-components";
import './AuthRequired.css'

let isLoginInProgress = false

const popupCenter = (url: string, title: string, w: number, h: number) => {
    // Fixes dual-screen position                             Most browsers      Firefox
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft
    const top = (height - h) / 2 / systemZoom + dualScreenTop
    const newWindow = window.open(url, title,
        `
      scrollbars=yes,
      width=${w / systemZoom}, 
      height=${h / systemZoom}, 
      top=${top}, 
      left=${left}
      `
    )

    if (newWindow && window.focus !== undefined) {
        newWindow.focus();
    }
}

const AuthRequired = ({children}: { children: any }) => {
    const [authed, setAuthed] = useState<boolean>(false);
    const [failed, setFailed] = useState<boolean>(false);

    const login = () => {
        if (isLoginInProgress) {
            return;
        }
        isLoginInProgress = true
        console.log("Login ...")
        fetch('https://httpbin.org/delay/0', {mode: 'no-cors', cache: "no-cache"})
            .then((rsp) => rsp.text())
            .then((data: any) => {
                let searchParams = new URLSearchParams(document.location.search);
                if (searchParams.has('authed')) {
                    console.log("authed")
                    setAuthed(true)
                    isLoginInProgress = false
                } else {
                    setFailed(true)
                }

            }).catch(() => {

        });
    };

    const listen = () => {
        window.addEventListener("message", (event) => {
            setAuthed(true)
            isLoginInProgress = false
            console.log(event)
        });
    }

    const showLogin = () => {
        listen()
        const url = document.location.href.replace(document.location.hash, '#authed')

        popupCenter(url, "login", 600, 320)
    }

    useEffect(login, []);

    return (
        authed ?
            <div>{children}</div>
            : (
                failed ?
                    <div>
                        <div className="Login">
                            <Button onClick={showLogin}>You need to login first</Button>
                        </div>
                    </div> :
                    <div className="Login">
                        <Spinner labelPosition={"after"}/>
                    </div>
            )
    )
}

export default AuthRequired
import React, {useEffect, useState} from "react";
import {Spinner} from "@fluentui/react-components";

let isLoginInProgress = false
const AuthRequired = ({children}: { children: any }) => {
    const [authed, setAuthed] = useState<boolean>(false);

    const login = () => {
        if (isLoginInProgress) {
            return;
        }
        isLoginInProgress = true
        console.log("Login ...")
        fetch('http://localhost:8000/auth.txt', {mode: 'no-cors', cache: "no-cache"})
            .then((rsp) => rsp.text())
            .then((data: any) => {
                console.log("authed")
                setAuthed(true)
                isLoginInProgress = false
            }).catch(() => {
            showLogin()
        });
    };

    const listen = () => {
        window.addEventListener("message", (event) => {
            console.log(event)
        });
    }

    const showLogin = () => {
        listen()
        const windowFeatures = "left=100,top=100,width=320,height=320";
        const url = document.location.href.replace(document.location.hash, '#authed')
        const handle = window.open(
            url,
            "mozillaWindow",
            windowFeatures,
        );
        console.log("handle:", handle)
        if (handle != null) {
            handle.onbeforeunload = function () {
                console.log("Logged in")
                setAuthed(true)
                isLoginInProgress = false
            }
        }
    }
    useEffect(login, []);

    return (
        authed ?
            <div>{children}</div>
            :
            <div>
                {/*<button onClick={login}>Login</button>*/}
                Loading...
                <Spinner delay={1}/>
            </div>
    )
}

export default AuthRequired
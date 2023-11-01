import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyRoutes from "./features/routes";

let searchParams = new URLSearchParams(document.location.search);
console.log(searchParams)
let app;
if (searchParams.has("oauth")) {
    console.log('oauth')
    app = <div>Oauth</div>
} else {
    app = <MyRoutes/>
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        {app}
    </React.StrictMode>
);
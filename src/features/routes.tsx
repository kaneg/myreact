import {HashRouter, Route} from "react-router-dom";
import Nav from "./nav/Nav";
import React from "react";
import {Routes} from "react-router";

const MyApp = React.lazy(() => import('./my/App'));
const FluentApp = React.lazy(() => import('./fluent/App'));
const DefaultApp = React.lazy(() => import('./default/App'));
const AuthApp = React.lazy(() => import('./auth/App'));
const AuthedApp = React.lazy(() => import('./authed/App'));

const MyRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Nav/>} index/>
                <Route element={<React.Suspense fallback={<>...</>}>
                    <DefaultApp/>
                </React.Suspense>} path="default"/>
                <Route element={<React.Suspense fallback={<>...</>}>
                    <MyApp/>
                </React.Suspense>} path="my"/>
                <Route element={<React.Suspense fallback={<>...</>}>
                    <FluentApp/>
                </React.Suspense>} path="fluent"/>
                <Route element={<React.Suspense fallback={<>...</>}>
                    <AuthApp/>
                </React.Suspense>} path="auth"/>
                <Route element={<React.Suspense fallback={<>...</>}>
                    <AuthedApp/>
                </React.Suspense>} path="authed"/>
            </Routes>
        </HashRouter>
    )
}
export default MyRoutes
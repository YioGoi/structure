import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"

// Styles
import 'primeicons/primeicons.css'

export default function ApmRoutingCenter({
    routes,
    from,
    to,
}) {
    return (
        <div id='main-content-container'>
            <Suspense
                fallback={
                    <i className="pi pi-spin pi-spinner" style={{'fontSize': '2em'}}></i>
                }>
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    <route.component {...props} />
                                )}
                            />
                        ) : null
                    })}
                    <Redirect from={from} to={to} />
                </Switch>
            </Suspense>
        </div>
    )
}

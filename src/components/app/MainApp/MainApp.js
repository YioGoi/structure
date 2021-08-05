import React, { useEffect } from 'react'

// Router
import { Route, Switch } from "react-router-dom"

// Redux store for socket messages or business data
// import store from "@redux/store"
// import { useSelector } from 'react-redux'

// Redux business data store for ui components
// import {
//   setLastPath
// } from '@redux'

// history
import history from "../../../history"

// Components
import Layout from '../../layout/Layout/Layout'

export default function MainApp({
    path
}) {
    // Global State
    // const lastPath = useSelector((state) => state.authorization.lastPath)

    useEffect(() => {
        history.listen(nextLocation => {
            // Set the last location to redux
            // store.dispatch(setLastPath(nextLocation.pathname))
        })
    }, [])

    useEffect(() => {
        // check if there is a specific module to route
        if (path) {
            history.push(path)
        }
    }, [path])

    return (
        <Switch>
            <Route path='/' component={Layout} />
        </Switch>
    )
}

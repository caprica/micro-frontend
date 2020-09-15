import React from 'react'
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom'

import MicroFrontend from './MicroFrontend'

const { REACT_APP_APP1_HOST: application1Host } = process.env
const { REACT_APP_APP2_HOST: application2Host } = process.env

const Application1 = ({ history }) => (
    <MicroFrontend
        history={history}
        host={application1Host}
        name="application1"
    />
)

const Application2 = ({ history }) => (
    <MicroFrontend
        history={history}
        host={application2Host}
        name="application2"
    />
)

const Home = () => (
    <>
        <p style={{border: '1px dashed black', padding: '1em'}}>
            This part is the routed "Home" page content in the host application.
        </p>
    </>
)

const App = props => {
    return (
        <BrowserRouter>
            <h1>
                This is the main content of the host application.
            </h1>
            <p>
                In the links below, Home is a routed component included with this host application. The other links are routed to
                dynamically loaded independent content applications. Routing and history works across all applications.
            </p>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/app1">
                        Micro Frontend: Application 1
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/app2">
                        Micro Frontend: Application 2
                    </NavLink>
                </li>
            </ul>

            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/app1" render={() => <Application1/>}/>
                <Route path="/app2" render={() => <Application2/>}/>
            </Switch>

        </BrowserRouter>
    )
}

export default App

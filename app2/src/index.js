import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App'

import * as serviceWorker from './serviceWorker'

// This render function is referenced by name from the MicroFrontend.js file in the container project
window["render-application2"] = (containerId, history) => {
    ReactDOM.render(
        <App history={history}/>,
        document.getElementById(containerId)
    )
    serviceWorker.unregister()
}

// This unmount function is referenced by name from the MicroFrontend.js file in the container project
window["unmount-application2"] = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
}

// The element ID referenced here is created by the host/container project, if this element does not exist it therefore means
// this application is running outside of the container - in that case render the application at the root of the document
if (!document.getElementById('application2-container')) {
    ReactDOM.render(<App/>, document.getElementById('root'))
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

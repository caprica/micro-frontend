import React, { useEffect } from 'react'

/**
 * The "name" parameter is used to refer by convention to elements in the index.js of each content application:
 *
 *  window['render-{name}']
 *  window['unmount{name}']
 *  '${name}-container'
 *
 * References and original implementation:
 *
 *  https://github.com/JenniferFuBook/app-container/tree/chunkOptimization
 *  https://github.com/micro-frontends-demo/container/blob/master/src/MicroFrontend.js
 */
const MicroFrontend = ({ name, host, history }) => {

    useEffect(() => {

        const scriptId = `micro-frontend-script-${name}`

        const renderMicroFrontend = () => {
            window[`render-${name}`] && window[`render-${name}`](`${name}-container`, history)
        }

        if (document.getElementById(scriptId)) {
            renderMicroFrontend()
            return
        }

        fetch(`${host}/asset-manifest.json`)
            .then(res => res.json())
            .then(manifest => {
                const promises = Object.keys(manifest['files'])
                    .filter(key => key.endsWith('.js'))
                    .reduce((sum, key) => {
                        sum.push(
                            new Promise(resolve => {
                                const path = `${host}${manifest['files'][key]}`
                                const script = document.createElement('script')
                                if (key === 'main.js') {
                                    script.id = scriptId
                                }
                                script.onload = () => {
                                    resolve()
                                }
                                script.src = path
                                document.head.appendChild(script)
                                // OR
                                //document.body.after(script)
                            })
                        )
                        return sum
                    }, [])

                    Promise.allSettled(promises).then(() => {
                        renderMicroFrontend()
                    })
                }
            )

        return () => {
            window[`unmount-${name}`] && window[`unmount-${name}`](`${name}-container`)
        }

    }, [name, host, history])

    return <main id={`${name}-container`} />
}

export default MicroFrontend

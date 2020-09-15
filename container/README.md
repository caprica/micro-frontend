# Microfrontend Container

This conatiner application was created with `create-react-app` but has some specific changes made so it can act as a
"host" for the the various "content" applications.

This application runs on port 3000.

The `.env` file in this project contains URLs to use for loading and accessing the content applications:

```
REACT_APP_APP1_HOST=http://localhost:3001
REACT_APP_APP2_HOST=http://localhost:3002
```

## Running it all

This command will start the container/host application, and two content applications. Each application runs on its own port.

```
npm run start-all
```

When starting like this, three browser windows/tabs will be opened - one for each application. The tab opened at port 3000 is the
one to use for the container/host application.

Individual applications can still be run as normal if needed.

## Hot reload

Note that hot reload of changed pages does not work across the hosted applications from within this container, only this
container application itself will support hot reloading.

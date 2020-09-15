# Micro-frontend application

This project presents an example of a ReactJS micro-frontend application.

There are three sub-projects:

 1. container
 2. app1
 3. app2

The "container" application is a full-blown react application that as well as having its own content, can dynamically load and
host other react applications.

The "app1" and "app2" are independent full-blown react applications that are dynamically loaded and routed to by the host
application.

Obviously you can have as many of these applications as you need.

Start with the README in the "container" sub-project.

## References

[This project](https://github.com/JenniferFuBook/app-container/tree/chunkOptimization) was very useful.

[This](https://github.com/micro-frontends-demo/container/blob/master/src/MicroFrontend.js) was the original source.

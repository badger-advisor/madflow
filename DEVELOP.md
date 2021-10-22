# To get started (From the root directory)


## Install all dependencies
```shell
> npm run dev-install
```
This will install dependencies for both the server and the client


## Serve app
```shell
> npm run dev
```
This will serve both the server on `http://localhost:8080` and the frontend on `http://localhost:3000`


### Only serve frontend
```shell
> npm run client
```
or if in `client/` already
```shell
npm start
```


### Only serve backend
```shell
> npm run server
```
This will start up nodemon, and all changes made will be updated in the server immediately, no need to restart the server each time.

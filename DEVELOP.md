# Development Guide


## VScode

Instead of setting up prettier and eslint as dev dependencies, we'll just use VScode extensions and custimized settings.

### Must

- [Prettier Now](https://marketplace.visualstudio.com/items?itemName=remimarsal.prettier-now)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)


### Recommendations

- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [npm Intelliscense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
- [path Intelliscense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

---
## To get started
First clone this repo
```shell
> git clone https://github.com/badger-advisor/madflow.git
```

Next, from the root directory

### Install all dependencies
```shell
> npm run dev-install
```
This will install dependencies for both the server and the client


### Serve app
```shell
> npm run dev
```
This will serve both the server on `http://localhost:8080` and the frontend on `http://localhost:3000`


#### Only serve frontend
```shell
> npm run client
```
or if in `client/` already
```shell
npm start
```

#### Only serve backend
```shell
> npm run server
```
This will start up nodemon, and all changes made will be updated in the server immediately, no need to restart the server each time.
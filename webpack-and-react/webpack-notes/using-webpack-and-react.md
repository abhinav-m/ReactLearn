# Creating react apps using webpack 


##About webpack:

Webpack is a **module bundler** for modern JavaScript applications.

 When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those ** modules**  into a small number of ** bundles**  - often only one - to be loaded by the browser.

Webpack is based on **Four core concepts**:

* Entry
* Output
* Loaders
* Plugins


### Entry

Webpack creates a graph of all of your application's dependencies.

 The starting point of this graph is known as an **entry point**.
 
  The entry point tells webpack where to start and follows the graph of dependencies to know what to bundle. 
  You can think of your application's entry point as the **contextual root or the first file** to kick off your app.
  
`./node_modules/.bin/webpack src/client/app/index.jsx src/dist/bundle.js`

*Here the first argument to the command of webpack is the entry point. ie **index.jsx*** 

We can also declare the same by making our *webpack.config.js* file and making it export an object with **entry** property

```
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```
Now we can run the same command above, along with providing the necessary config file for it to take the properties from:
`./node_modules/.bin/webpack --config webpack.config.js `

**NOTE: If a webpack.config.js is present, the webpack command picks it up by default. We use the `--config` option here only to show that you can pass a config of any name. This will come in useful for more complex configurations that need to be split into multiple files.**

### Output

Once you've bundled all of your assets together, you still need to tell webpack **where** to bundle your application. The webpack `output` property tells webpack  **how to treat bundled code. **

`./node_modules/.bin/webpack src/client/app/index.jsx src/dist/bundle.js` 

*In the above command the second argument is **the output path and file name ie, bundle.js***

Or, if we want to use a configuration file **webpack.config.js**,
```
const path = require('path');

module.exports = {

entry: './src/client/app/index.jsx',
output: {
filename: 'bundle.js',
path: path.resolve(__dirname,'dist')
}

};

```

n the example above, we use the `output.filename` and the `output.path` properties to tell webpack the name of our bundle and where we want it to be emitted to.

### Loaders

The goal is to have all of the **assets in your project be webpack's concern** and not the browser's (though, to be clear, this doesn't mean that they all have to be bundled together). 

**webpack treats every file (.css, .html, .scss, .jpg, etc.) as a module.**

 However, webpack itself **only understands JavaScript.**

 **Loaders in webpack *transform these files into modules* as they are added to your dependency graph. **

At a high level, loaders have two purposes in your webpack config. They work to:

1 Identify which file or files should be transformed by a certain Loader. (`test` property)
2 Transform those files so that they can be added to your dependency graph (and eventually your bundle). (`use` property)
webpack.config.js

```
const path = require('path');
const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;
```
The configuration above has defined a` rules` property for a single module with two required properties: `test` and `use`. This tells webpack's compiler the following:

>"Hey webpack compiler, when you come across a path that resolves to a '.txt' file inside of a require()/import statement, use the raw-loader to transform it before you add it to the bundle."
It is important to remember that when defining rules in your webpack config, you are defining them under module.rules and not rules. For your benefit, webpack will 'yell at you' if this is done incorrectly.

### Plugins

While `Loaders` only execute transforms on a per-file basis, plugins are most commonly used to perform actions and custom functionality on "compilations" or "chunks" of your bundled modules (and so much more!). The webpack Plugin system is extremely powerful and customizable.

In order to use a plugin, you just need to `require()` it and add it to the **plugins array**.

 Most plugins are customizable via options. 
 
 *Since you can use a plugin multiple times in a config for different purposes, you need to **create an instance** of it by calling it with `new`.*

```javascript
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//Load the plugin here, note it must be installed using npm.

var BUILD_DIR = path.resolve(__dirname,'src/client/app');
var APP_DIR = path.resolve(__dirname,'src/dist/');

module.exports = {

entry:  BUILD_DIR + '/index.jsx',
output: {
filename: 'bundle.js',
path: APP_DIR
},
module: {
loaders: [
{test: /\.jsx?/,
include:BUILD_DIR,
loader:'babel-loader'} 
]
},
plugins : [
new webpack.optimize.UglifyJsPlugin(), //bundled with webpack no need to explicitly install, still create instance.
new HtmlWebpackPlugin() //Create instance, this creates html file for you.
]
};
```

There are many plugins that webpack provides out of the box! 






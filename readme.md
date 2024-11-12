## 使用






### 打包使用方式
ES 模块（ESM）是 JavaScript 的一种模块化规范，它使用 import 和 export 关键字来导入和导出模块。ESM 可以在现代浏览器和 Node.js 中使用，它是未来 JavaScript 模块化的主流方案。

UMD（Universal Module Definition）是一种兼容 CommonJS 和 AMD 规范的通用模块格式。UMD 可以在浏览器中以全局变量的形式使用，也可以在 Node.js 中使用。

CommonJS（CJS）是 Node.js 使用的模块化规范，它使用 require 和 module.exports 来导入和导出模块。CJS 可以在 Node.js 中使用，但不能在浏览器中使用，因为浏览器不支持 require 和 module.exports。


#### es
我们可以通过 import 语句在现代浏览器和 Node.js 中使用 math.js 文件中的 sum 函数

```js
import { sum } from './math.js';

console.log(sum(1, 2)); // 输出 3


```
####  UMD
我们可以通过 <script> 标签在浏览器中使用 math.js 文件中的 sum 函数
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>UMD Example</title>
  </head>
  <body>
    <script src="path/to/math.js"></script>
    <script>
      console.log(math.sum(1, 2)); // 输出 3
    </script>
  </body>
</html>

```



#### cjs
我们可以通过 require 语句在 Node.js 中使用 math.js 文件中的 sum 函数

```js
const math = require('./math.js');

console.log(math.sum(1, 2)); // 输出 3


```

### 安装依赖

```
 npm install -g browserify 

```

### 打包

开发完app.js, 打包一次

```
npm run build
```

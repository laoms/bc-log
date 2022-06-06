
#### 简介
将运行node文件打印输出的内容，在浏览器控制台里显示出来，方便调试查看。

#### 安装依赖
```
npm install bc-log -g
```

#### 使用
```javascript
const log = require('bc-log')
const obj = {}
log(obj)
// 等待浏览器启动后，手动打开F12控制台
```
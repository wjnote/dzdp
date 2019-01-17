# dzdp_react
react模拟大众点评

 [TOC]

### 使用
- 在根目录 yarn install 下载依赖
- 运行 yarn run mock 启动koa服务
- 运行 yarn run dev 开启开发模式

### 使用环境
- node 6.11


### 记录
- 如果在webpack引入了 html-webpack-plugin 插件的时候则可以设置默认的模版文件，不用在本地硬件中存在，存在内存中也可以启动
- 项目中使用的koa 版本1，版本2需要修改使用代码

- this.props.params  可以访问路由中的参数值
- 项目采用了根节点 font-size 的方式，但是有些页面（例如城市选择页面公共的头部）不需要自适应高度的可以直接写定值
- 项目中使用了根节点 font-size 的时候，在使用 icon 的时候要显示设置 font-size 否则会以根节点大小设置，页面的样式就会发生不可测试的bug
- 项目中如果需要使用具有HTML结构的代码，需要使用 dangerouslySetInnerHTML={{__html:data.desc}} 的方式，但是要注意安全性

### 存在的问题
- 在搜索页面输入框输入几次不同的值，点击返回按钮的时候，URL路由改变了，但是输入框的值没变？？？
- 页面中实现了加载更多，怎么删除某一个选项 ？？？


## 2018.7.23
- 更新了用 yarn 来替代 npm 的方式，增加了一个依赖树文件
- 更新了webpack-dev-server的包，因为在3.1.11之前的webpack-dev-server中的lib / Server.js中发现了一个问题。 攻击者能够窃取开发人员的代码，因为WebSocket服务器不会检查请求的来源，而WebSocket服务器用于HMR（热模块替换）
- 更新了wbepack 4的版本，相应的需要更新 `html-webpack-plugin`;`extract-text-webpack-plugin`
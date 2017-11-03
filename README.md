# dzdp_react
react模拟大众点评

## &sect;使用
- 在根目录 npm install 下载依赖
- 运行 npm dev 

## &sect;技术栈 
- webpack 3.5
- node 6.11


##记录
- 如果在webpack引入了 html-webpack-plugin 插件的时候则可以设置默认的模版文件，不用在本地硬件中存在，存在内存中也可以启动
- 项目中使用的koa 版本1，版本2需要修改使用代码

##
- this.props.params  可以访问路由中的参数值
- 项目采用了根节点 font-size 的方式，但是有些页面（例如城市选择页面公共的头部）不需要自适应高度的可以直接写定值
- 项目中使用了根节点 font-size 的时候，在使用 icon 的时候要显示设置 font-size 否则会以根节点大小设置
- 在搜索页面输入框输入几次不同的值，点击返回按钮的时候，URL路由改变了，但是输入框的值没变？？？

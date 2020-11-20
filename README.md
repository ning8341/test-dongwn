# test-dongwn
### 生成文档的命令,全局安装好apidoc
apidoc -i app/ -o apidoc/
开启了egg框架封装好的定时任务，简单demo
在路径/app/schdule/schdule.js自行参考

### 文档查看地址
eg: file:///E:/node-workspace/test-dongwn/apidoc/index.html


## QuickStart

<!-- add docs here for user -->

git clone https://github.com/ning8341/test-dongwn
或者直接下载zip包

## 线上地址

<!-- add docs here for user -->

[线上地址](http://www.dongwn.icu)

看情况，可能开个人blog也可能展示这个node调用的第三方聊天的小程序
请原谅我的服务器性能，跑一个java程序，再跑这个node的机器人跑不动了

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
```
test-dongwn
├─ .autod.conf.js
├─ .eslintignore
├─ .eslintrc
├─ .github
│  └─ workflows
│     └─ nodejs.yml
├─ .gitignore
├─ .travis.yml
├─ app
│  ├─ controller
│  │  └─ user.js
│  ├─ model
│  │  └─ user.js
│  ├─ public
│  ├─ router
│  │  └─ dongwn.js
│  └─ router.js
├─ appveyor.yml
├─ config
│  ├─ config.default.js
│  └─ plugin.js
├─ jsconfig.json
├─ package.json
├─ README.md
├─ test
│  └─ app
│     └─ controller
│        └─ home.test.js
└─ test-dongwn
   ├─ .autod.conf.js
   ├─ .eslintignore
   ├─ .eslintrc
   ├─ .gitignore
   ├─ app
   │  ├─ controller
   │  │  └─ home.js
   │  └─ router.js
   ├─ config
   │  ├─ config.default.js
   │  └─ plugin.js
   ├─ package.json
   ├─ README.md
   └─ test
      └─ app
         └─ controller
            └─ home.test.js

```

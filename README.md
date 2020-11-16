# test-dongwn
### 生成文档的命令,全局安装好apidoc
apidoc -i app/ -o apidoc/

### 文档查看地址
file:///E:/node-workspace/test-dongwn/apidoc/index.html


## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

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
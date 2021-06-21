## 用 Lerna 搭建的 Monorepo 例子

其中 `mono-subA` 和 `mono-subB` 对应两个 Github 子仓库，`module-a` 和 `module-b` 对应了两个 npm 包。

- 提取了子项目的公共依赖项
- npm 包之间的互相依赖通过软链接引入

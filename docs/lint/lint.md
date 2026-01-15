# 代码风格配置React+vite+prettier+stylelint

```cmd
https://juejin.cn/post/7451239168661438504?searchId=20250509100617B48930ED3EAB6AAB41F1
```

#### 1.使用 Vite 脚手架搭建项目

```cmd
pnpm create vite 项目名 --template react-ts
```

#### 2.在根目录下创建.vscode文件夹

> - `extensions.json` - 用于放vscode扩展插件
> - `settings.json` - 用于设置vscode的基本配置（项目配置会覆盖本地）

##### 2.1在.vscode 文件夹下创建extensions.json 文件

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "stylelint.vscode-stylelint"
  ]
}
```

##### 2.2在.vscode 文件夹下创建 settings.json 文件

```json
{
  "editor.formatOnSave": true, // 保存时自动格式化
  "editor.defaultFormatter": "esbenp.prettier-vscode", // 默认格式化工具为 Prettier
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.fixAll.stylelint": "explicit"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "stylelint.vscode-stylelint"
  },
  "[scss]": {
    "editor.defaultFormatter": "stylelint.vscode-stylelint"
  },
  "[less]": {
    "editor.defaultFormatter": "stylelint.vscode-stylelint"
  }
}
```

#### 3.Eslint

>  eslint 文件命名为`eslint.config.js`

`package.json`中

```json
"scripts": {
    // ...
    "lint": "eslint .", // 检测eslint
    "lint:fix": "eslint . --fix" // 根据eslint规则修复
}
```

- `pnpm lint`检查规则
- `pnpm lint:fix`修复规则

#### 4.Prettier

##### 安装依赖

```cmd
pnpm add prettier eslint-config-prettier eslint-plugin-prettier -D
```

##### 4.1根目录下创建.prettierrc.cjs文件

```cjs
module.exports = {
  requirePragma: false, // 不需要在文件开头添加 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  proseWrap: "preserve", // 保留原始的换行格式
  printWidth: 90, // 每行最多 90 个字符
  tabWidth: 2, // 缩进宽度为 2 个空格
  useTabs: false, // 使用空格而不是制表符
  semi: true, // 在语句末尾添加分号
  singleQuote: false, // 使用双引号
  quoteProps: "as-needed", // 仅在需要时添加引号
  jsxSingleQuote: false, // 在 JSX 中使用双引号
  trailingComma: "es5", // 在多行对象或数组末尾添加尾随逗号
  bracketSpacing: false, // 在对象字面量中括号内不添加空格
  jsxBracketSameLine: false, // JSX 标签的反尖括号不与代码行在同一行
  arrowParens: "always", // 在箭头函数参数周围添加括号
  rangeStart: 0, // 格式化从第 0 个字符开始
  rangeEnd: Infinity, // 格式化到文件末尾
  htmlWhitespaceSensitivity: "css", // HTML 文件的空格敏感度设置为 "css"
  vueIndentScriptAndStyle: false, // Vue 文件中的 script 和 style 标签不缩进
  endOfLine: "auto", // 根据操作系统自动选择换行符
};
```

##### 4.2eslint.config.js文件中

```js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  {ignores: ["dist"]},
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", {allowConstantExport: true}],
      "import/order": [
        "error",
        {
          // 对导入模块进行分组，分组排序规则如下
          groups: [
            "builtin", // 内置模块
            "external", // 外部模块
            "parent", // 父节点依赖
            "sibling", // 兄弟依赖
            "internal", // 内部引用
            "index", // index文件
            "type", //类型文件
            "unknown", // 未知依赖
          ],
          //通过路径自定义分组
          pathGroups: [
            {
              pattern: "@/**", // 把@开头的应用放在external分组后面
              group: "external",
              position: "after", // 定义组的位置，after、before
            },

            {
              pattern: "react*", // 在规定的组中选其一，index、sibling、parent、internal、external、builtin、object、type、unknown
              group: "builtin",
              position: "before",
            },
          ],
          // 是否开启独特组，用于区分自定义规则分组和其他规则分组
          distinctGroup: true,
          // 每个分组之间换行
          "newlines-between": "always",
          // 相同分组排列规则 按字母升序排序
          alphabetize: {order: "asc", caseInsensitive: true},
        },
      ],
      settings: {
        "import/resolver": {
          // eslint-import-resolver-alias 可以解决绝对路径的问题
          alias: {
            map: [
              ["", "./public"], // <-- this line
              ["@", "./src"], // <-- this line
            ],
            extensions: [".js", ".jsx", ".ts", ".tsx", ".svg"],
          },
        },
      },
    },
  },
  eslintPluginPrettierRecommended
);
```

#### 5.Stylelint

##### 5.1安装依赖

```cmd
pnpm add stylelint stylelint-config-recommended stylelint-config-standard stylelint-order stylelint-config-less -D
```

##### 5.2在根目录新增文件 `.stylelintignore`

```bash
# .stylelintignore
# 旧的不需打包的样式库
*.min.css
 
# 其他类型文件
*.js
*.jpg
*.png
*.eot
*.ttf
*.woff
*.json
 
# 测试和打包目录
/test/
/dist/
/node_modules/
/lib/
```

##### 5.3在根目录新增文件 `.stylelintrc.cjs`

```cjs
module.exports = {
  extends: [
    "stylelint-config-standard", // 使用通用的 stylelint 配置
  ],
  plugins: ["stylelint-order"], // 保留用于规范属性顺序的插件
  rules: {
    "no-irregular-whitespace": true,
    // 指定样式的排序
    "order/properties-order": [
      [
        // 属性排序规则
      ],
      {
        unspecified: "bottom",
        severity: "error",
      },
    ],
  },
};
```

手动配置`.stylelintrc.cjs`

```cjs
module.exports = {

  // 继承的配置文件
  extends: ["stylelint-config-standard", "stylelint-config-order"],

  // 自定义规则
  rules: {
    // @规则之前需要空行，但有一些例外情况
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-blockless", "first-nested"], // 例外：连续的无块 @规则，或第一个嵌套的 @规则
        ignore: ["after-comment", "inside-block"], // 忽略：在注释之后或块内部的 @规则
      },
    ],
    // @规则名称必须是小写
    "at-rule-name-case": "lowercase",
    // @规则名称后必须有一个空格
    "at-rule-name-space-after": "always",
    // 禁止空的代码块
    "block-no-empty": true,
    // 颜色函数的表示法必须是传统的
    "color-function-notation": "legacy",
    // 十六进制颜色值必须是小写
    "color-hex-case": "lowercase",
    // 十六进制颜色值必须是短形式（如 #fff 而不是 #ffffff）
    "color-hex-length": "short",
    // 注释之前需要空行
    "comment-empty-line-before": "always",
    // 注释内部必须有空格
    "comment-whitespace-inside": "always",
    // 自定义属性之前需要空行，但有一些例外情况
    "custom-property-empty-line-before": [
      "always",
      {
        except: ["after-custom-property", "first-nested"], // 例外：在其他自定义属性之后，或第一个嵌套的自定义属性
        ignore: ["after-comment", "inside-single-line-block"], // 忽略：在注释之后或单行块内部
      },
    ],
    // 禁止重复的属性
    "declaration-block-no-duplicate-properties": true,
    // 禁止冗余的长手属性（例如，同时使用 `margin-top` 和 `margin`）
    "declaration-block-no-redundant-longhand-properties": null,
    // 声明块中的分号后必须换行
    "declaration-block-semicolon-newline-after": "always",
    // 声明块中的分号前禁止有空格
    "declaration-block-semicolon-space-before": "never",
    // 声明块的最后一个声明后必须有分号
    "declaration-block-trailing-semicolon": "always",
    // 声明之前需要空行，但有一些例外情况
    "declaration-empty-line-before": [
      "always",
      {
        except: ["after-declaration", "first-nested"], // 例外：在其他声明之后，或第一个嵌套的声明
        ignore: ["after-comment", "inside-single-line-block"], // 忽略：在注释之后或单行块内部
      },
    ],
    // 禁止使用 `!important`
    "declaration-no-important": true,
    // 字体名称必须在推荐的情况下使用引号
    "font-family-name-quotes": "always-where-recommended",
    // 禁止 `calc()` 中的运算符之间没有空格
    "function-calc-no-unspaced-operator": true,
    // 禁止使用非标准的方向值（如 `to top` 而不是 `top`）
    "function-linear-gradient-no-nonstandard-direction": true,
    // 函数名称必须是小写
    "function-name-case": "lowercase",
    // URL 函数中的值必须使用引号
    "function-url-quotes": "always",
    // 缩进必须使用 2 个空格
    indentation: 2,
    // 禁止关键帧声明中使用 `!important`
    "keyframe-declaration-no-important": true,
    // 禁止零值带有单位（如 `0px` 而不是 `0`）
    "length-zero-no-unit": true,
    // 最大空行数为 2
    "max-empty-lines": 2,
    // 媒体特征名称必须是小写
    "media-feature-name-case": "lowercase",
    // 禁止未知的媒体特征名称
    "media-feature-name-no-unknown": true,
    // 媒体特征括号内必须有空格
    "media-feature-parentheses-space-inside": "always",
    // 媒体特征范围运算符后必须有空格
    "media-feature-range-operator-space-after": "always",
    // 媒体特征范围运算符前必须有空格
    "media-feature-range-operator-space-before": "always",
    // 禁止空的源代码
    "no-empty-source": true,
    // 禁止行尾有空白字符
    "no-eol-whitespace": true,
    // 禁止多余的分号
    "no-extra-semicolons": true,
    // 禁止无效的双斜杠注释
    "no-invalid-double-slash-comments": true,
    // 禁止源代码末尾缺少换行符
    "no-missing-end-of-source-newline": true,
    // 禁止未知的动画名称
    "no-unknown-animations": true,
    // 禁止未知的属性
    "no-unknown-properties": true,
    // 数字必须有前导零（如 `0.5` 而不是 `.5`）
    "number-leading-zero": "always",
    // 禁止数字末尾有零（如 `0.5` 而不是 `0.50`）
    "number-no-trailing-zeros": true,
    // 规范代码块的顺序
    "order/order": [
      "custom-properties", // 自定义属性
      "dollar-variables", // LESS 变量
      "declarations", // 声明
      "rules", // 规则
    ],
    // 属性必须按字母顺序排列
    "order/properties-alphabetical-order": true,
    // 属性名称必须是小写
    "property-case": "lowercase",
    // 规则之前需要空行，但有一些例外情况
    "rule-empty-line-before": [
      "always",
      {
        except: ["after-rule", "first-nested"], // 例外：在其他规则之后，或第一个嵌套的规则
        ignore: ["after-comment"], // 忽略：在注释之后
      },
    ],
    // 属性选择器的值必须使用引号
    "selector-attribute-quotes": "always",
    // 类选择器的命名模式必须符合正则表达式
    "selector-class-pattern": "^[a-z][a-z0-9-_]*$",
    // 组合选择器之后必须有空格
    "selector-combinator-space-after": "always",
    // 组合选择器之前必须有空格
    "selector-combinator-space-before": "always",
    // ID 选择器的命名模式必须符合正则表达式
    "selector-id-pattern": "^[a-z][a-z0-9-_]*$",
    // 选择器列表中的逗号后必须换行
    "selector-list-comma-newline-after": "always",
    // 选择器列表中的逗号前禁止有空格
    "selector-list-comma-space-before": "never",
    // 选择器中最大空行数为 1
    "selector-max-empty-lines": 1,
    // 禁止类型选择器的限定（如 `.class` 而不是 `div.class`）
    "selector-no-qualifying-type": true,
    // 禁止使用浏览器前缀
    "selector-no-vendor-prefix": true,
    // 伪类名称必须是小写
    "selector-pseudo-class-case": "lowercase",
    // 禁止未知的伪类名称
    "selector-pseudo-class-no-unknown": true,
    // 伪类括号内必须有空格
    "selector-pseudo-class-parentheses-space-inside": "always",
    // 伪元素名称必须是小写
    "selector-pseudo-element-case": "lowercase",
    // 伪元素必须使用双冒号表示法（如 `::after` 而不是 `:after`）
    "selector-pseudo-element-colon-notation": "double",
    // 类型选择器名称必须是小写
    "selector-type-case": "lowercase",
    // 禁止未知的类型选择器名称
    "selector-type-no-unknown": true,
    // 禁止冗余的简写属性值（如 `background: 0 0` 而不是 `background: none`）
    "shorthand-property-no-redundant-values": true,
    // 字符串必须使用双引号
    "string-quotes": "double",
    // 单位名称必须是小写
    "unit-case": "lowercase",
    // 禁止未知的单位
    "unit-no-unknown": true,
    // 关键字值必须是小写
    "value-keyword-case": "lowercase",
    // 值列表中的逗号后必须换行
    "value-list-comma-newline-after": "always",
    // 值列表中的逗号前禁止有空格
    "value-list-comma-space-before": "never",
    // 值列表中最大空行数为 1
    "value-list-max-empty-lines": 1,
  },
};

```

安装依赖

```cmd
pnpm add stylelint stylelint-config-recommended stylelint-config-standard stylelint-order -D
```



5.4在`package.json`中

```json
"scripts":{
    "stylelint": "stylelint ./**/*.{css,less}",
    "stylelint:fix": "stylelint ./**/*.{css,less} --fix",
}
```



# 检查命令

```cmd
https://blog.csdn.net/weixin_42745647/article/details/131371945
```



> 为什么上面有 vscode 自动 eslint 格式化，还需要命令行: 因为命令行能一次性爆出所有警告问题，便于找到位置修复，这是使用eslint代码检查并修复的命令

#### eslint命令行

```cmd
npx eslint . --fix_	//用npx使用项目里的eslint,没有的话也会去使用全局的eslint_
npx eslint . --fix 	//全部类型文件
npx eslint . --ext .ts,.tsx --fix 	//–ext可以指定文件后缀名s
```

#### prettier命令行

```cmd
npx prettier --write . //使用Prettier格式化所有文件
```

#### stylelint命令行

```cmd
npx stylelint “**/*.css” --fix//格式化所有css,自动修复css
```


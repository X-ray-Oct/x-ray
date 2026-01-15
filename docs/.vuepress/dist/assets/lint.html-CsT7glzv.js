import{_ as n,c as a,a as e,o as l}from"./app-93BvhbxJ.js";const i={};function t(p,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="代码风格配置react-vite-prettier-stylelint" tabindex="-1"><a class="header-anchor" href="#代码风格配置react-vite-prettier-stylelint"><span>代码风格配置React+vite+prettier+stylelint</span></a></h1><div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd"><pre><code><span class="line">https://juejin.cn/post/7451239168661438504?searchId=20250509100617B48930ED3EAB6AAB41F1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_1-使用-vite-脚手架搭建项目" tabindex="-1"><a class="header-anchor" href="#_1-使用-vite-脚手架搭建项目"><span>1.使用 Vite 脚手架搭建项目</span></a></h4><div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd"><pre><code><span class="line">pnpm create vite 项目名 --template react-ts</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_2-在根目录下创建-vscode文件夹" tabindex="-1"><a class="header-anchor" href="#_2-在根目录下创建-vscode文件夹"><span>2.在根目录下创建.vscode文件夹</span></a></h4><blockquote><ul><li><code>extensions.json</code> - 用于放vscode扩展插件</li><li><code>settings.json</code> - 用于设置vscode的基本配置（项目配置会覆盖本地）</li></ul></blockquote><h5 id="_2-1在-vscode-文件夹下创建extensions-json-文件" tabindex="-1"><a class="header-anchor" href="#_2-1在-vscode-文件夹下创建extensions-json-文件"><span>2.1在.vscode 文件夹下创建extensions.json 文件</span></a></h5><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;recommendations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;dbaeumer.vscode-eslint&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;stylelint.vscode-stylelint&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-2在-vscode-文件夹下创建-settings-json-文件" tabindex="-1"><a class="header-anchor" href="#_2-2在-vscode-文件夹下创建-settings-json-文件"><span>2.2在.vscode 文件夹下创建 settings.json 文件</span></a></h5><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 保存时自动格式化</span></span>
<span class="line">  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 默认格式化工具为 Prettier</span></span>
<span class="line">  <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;explicit&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;source.fixAll.stylelint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;explicit&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;[typescript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;[css]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint.vscode-stylelint&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;[scss]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint.vscode-stylelint&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;[less]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint.vscode-stylelint&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-eslint" tabindex="-1"><a class="header-anchor" href="#_3-eslint"><span>3.Eslint</span></a></h4><blockquote><p>eslint 文件命名为<code>eslint.config.js</code></p></blockquote><p><code>package.json</code>中</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code><span class="line"><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">    <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint .&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 检测eslint</span></span>
<span class="line">    <span class="token property">&quot;lint:fix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint . --fix&quot;</span> <span class="token comment">// 根据eslint规则修复</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>pnpm lint</code>检查规则</li><li><code>pnpm lint:fix</code>修复规则</li></ul><h4 id="_4-prettier" tabindex="-1"><a class="header-anchor" href="#_4-prettier"><span>4.Prettier</span></a></h4><h5 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h5><div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd"><pre><code><span class="line">pnpm add prettier eslint-config-prettier eslint-plugin-prettier -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_4-1根目录下创建-prettierrc-cjs文件" tabindex="-1"><a class="header-anchor" href="#_4-1根目录下创建-prettierrc-cjs文件"><span>4.1根目录下创建.prettierrc.cjs文件</span></a></h5><div class="language-cjs line-numbers-mode" data-highlighter="prismjs" data-ext="cjs"><pre><code><span class="line">module.exports = {</span>
<span class="line">  requirePragma: false, // 不需要在文件开头添加 @prettier</span>
<span class="line">  insertPragma: false, // 不需要自动在文件开头插入 @prettier</span>
<span class="line">  proseWrap: &quot;preserve&quot;, // 保留原始的换行格式</span>
<span class="line">  printWidth: 90, // 每行最多 90 个字符</span>
<span class="line">  tabWidth: 2, // 缩进宽度为 2 个空格</span>
<span class="line">  useTabs: false, // 使用空格而不是制表符</span>
<span class="line">  semi: true, // 在语句末尾添加分号</span>
<span class="line">  singleQuote: false, // 使用双引号</span>
<span class="line">  quoteProps: &quot;as-needed&quot;, // 仅在需要时添加引号</span>
<span class="line">  jsxSingleQuote: false, // 在 JSX 中使用双引号</span>
<span class="line">  trailingComma: &quot;es5&quot;, // 在多行对象或数组末尾添加尾随逗号</span>
<span class="line">  bracketSpacing: false, // 在对象字面量中括号内不添加空格</span>
<span class="line">  jsxBracketSameLine: false, // JSX 标签的反尖括号不与代码行在同一行</span>
<span class="line">  arrowParens: &quot;always&quot;, // 在箭头函数参数周围添加括号</span>
<span class="line">  rangeStart: 0, // 格式化从第 0 个字符开始</span>
<span class="line">  rangeEnd: Infinity, // 格式化到文件末尾</span>
<span class="line">  htmlWhitespaceSensitivity: &quot;css&quot;, // HTML 文件的空格敏感度设置为 &quot;css&quot;</span>
<span class="line">  vueIndentScriptAndStyle: false, // Vue 文件中的 script 和 style 标签不缩进</span>
<span class="line">  endOfLine: &quot;auto&quot;, // 根据操作系统自动选择换行符</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-2eslint-config-js文件中" tabindex="-1"><a class="header-anchor" href="#_4-2eslint-config-js文件中"><span>4.2eslint.config.js文件中</span></a></h5><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> js <span class="token keyword">from</span> <span class="token string">&quot;@eslint/js&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> globals <span class="token keyword">from</span> <span class="token string">&quot;globals&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> reactHooks <span class="token keyword">from</span> <span class="token string">&quot;eslint-plugin-react-hooks&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> reactRefresh <span class="token keyword">from</span> <span class="token string">&quot;eslint-plugin-react-refresh&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> tseslint <span class="token keyword">from</span> <span class="token string">&quot;typescript-eslint&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> eslintPluginPrettierRecommended <span class="token keyword">from</span> <span class="token string">&quot;eslint-plugin-prettier/recommended&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> tseslint<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">ignores</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;dist&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>js<span class="token punctuation">.</span>configs<span class="token punctuation">.</span>recommended<span class="token punctuation">,</span> <span class="token operator">...</span>tseslint<span class="token punctuation">.</span>configs<span class="token punctuation">.</span>recommended<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;**/*.{ts,tsx}&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">languageOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2020</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">globals</span><span class="token operator">:</span> globals<span class="token punctuation">.</span>browser<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&quot;react-hooks&quot;</span><span class="token operator">:</span> reactHooks<span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&quot;react-refresh&quot;</span><span class="token operator">:</span> reactRefresh<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token operator">...</span>reactHooks<span class="token punctuation">.</span>configs<span class="token punctuation">.</span>recommended<span class="token punctuation">.</span>rules<span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&quot;react-refresh/only-export-components&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">allowConstantExport</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&quot;import/order&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// 对导入模块进行分组，分组排序规则如下</span></span>
<span class="line">          <span class="token literal-property property">groups</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token string">&quot;builtin&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 内置模块</span></span>
<span class="line">            <span class="token string">&quot;external&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 外部模块</span></span>
<span class="line">            <span class="token string">&quot;parent&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 父节点依赖</span></span>
<span class="line">            <span class="token string">&quot;sibling&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 兄弟依赖</span></span>
<span class="line">            <span class="token string">&quot;internal&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 内部引用</span></span>
<span class="line">            <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span> <span class="token comment">// index文件</span></span>
<span class="line">            <span class="token string">&quot;type&quot;</span><span class="token punctuation">,</span> <span class="token comment">//类型文件</span></span>
<span class="line">            <span class="token string">&quot;unknown&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 未知依赖</span></span>
<span class="line">          <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">//通过路径自定义分组</span></span>
<span class="line">          <span class="token literal-property property">pathGroups</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">pattern</span><span class="token operator">:</span> <span class="token string">&quot;@/**&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 把@开头的应用放在external分组后面</span></span>
<span class="line">              <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token string">&quot;external&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;after&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 定义组的位置，after、before</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">pattern</span><span class="token operator">:</span> <span class="token string">&quot;react*&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 在规定的组中选其一，index、sibling、parent、internal、external、builtin、object、type、unknown</span></span>
<span class="line">              <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token string">&quot;builtin&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;before&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 是否开启独特组，用于区分自定义规则分组和其他规则分组</span></span>
<span class="line">          <span class="token literal-property property">distinctGroup</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 每个分组之间换行</span></span>
<span class="line">          <span class="token string-property property">&quot;newlines-between&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 相同分组排列规则 按字母升序排序</span></span>
<span class="line">          <span class="token literal-property property">alphabetize</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token string">&quot;asc&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">caseInsensitive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">settings</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;import/resolver&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// eslint-import-resolver-alias 可以解决绝对路径的问题</span></span>
<span class="line">          <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">              <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./public&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// &lt;-- this line</span></span>
<span class="line">              <span class="token punctuation">[</span><span class="token string">&quot;@&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./src&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// &lt;-- this line</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.jsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.tsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.svg&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  eslintPluginPrettierRecommended</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-stylelint" tabindex="-1"><a class="header-anchor" href="#_5-stylelint"><span>5.Stylelint</span></a></h4><h5 id="_5-1安装依赖" tabindex="-1"><a class="header-anchor" href="#_5-1安装依赖"><span>5.1安装依赖</span></a></h5><div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd"><pre><code><span class="line">pnpm add stylelint stylelint-config-recommended stylelint-config-standard stylelint-order stylelint-config-less -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_5-2在根目录新增文件-stylelintignore" tabindex="-1"><a class="header-anchor" href="#_5-2在根目录新增文件-stylelintignore"><span>5.2在根目录新增文件 <code>.stylelintignore</code></span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># .stylelintignore</span></span>
<span class="line"><span class="token comment"># 旧的不需打包的样式库</span></span>
<span class="line">*.min.css</span>
<span class="line"> </span>
<span class="line"><span class="token comment"># 其他类型文件</span></span>
<span class="line">*.js</span>
<span class="line">*.jpg</span>
<span class="line">*.png</span>
<span class="line">*.eot</span>
<span class="line">*.ttf</span>
<span class="line">*.woff</span>
<span class="line">*.json</span>
<span class="line"> </span>
<span class="line"><span class="token comment"># 测试和打包目录</span></span>
<span class="line">/test/</span>
<span class="line">/dist/</span>
<span class="line">/node_modules/</span>
<span class="line">/lib/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-3在根目录新增文件-stylelintrc-cjs" tabindex="-1"><a class="header-anchor" href="#_5-3在根目录新增文件-stylelintrc-cjs"><span>5.3在根目录新增文件 <code>.stylelintrc.cjs</code></span></a></h5><div class="language-cjs line-numbers-mode" data-highlighter="prismjs" data-ext="cjs"><pre><code><span class="line">module.exports = {</span>
<span class="line">  extends: [</span>
<span class="line">    &quot;stylelint-config-standard&quot;, // 使用通用的 stylelint 配置</span>
<span class="line">  ],</span>
<span class="line">  plugins: [&quot;stylelint-order&quot;], // 保留用于规范属性顺序的插件</span>
<span class="line">  rules: {</span>
<span class="line">    &quot;no-irregular-whitespace&quot;: true,</span>
<span class="line">    // 指定样式的排序</span>
<span class="line">    &quot;order/properties-order&quot;: [</span>
<span class="line">      [</span>
<span class="line">        // 属性排序规则</span>
<span class="line">      ],</span>
<span class="line">      {</span>
<span class="line">        unspecified: &quot;bottom&quot;,</span>
<span class="line">        severity: &quot;error&quot;,</span>
<span class="line">      },</span>
<span class="line">    ],</span>
<span class="line">  },</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手动配置<code>.stylelintrc.cjs</code></p><div class="language-cjs line-numbers-mode" data-highlighter="prismjs" data-ext="cjs"><pre><code><span class="line">module.exports = {</span>
<span class="line"></span>
<span class="line">  // 继承的配置文件</span>
<span class="line">  extends: [&quot;stylelint-config-standard&quot;, &quot;stylelint-config-order&quot;],</span>
<span class="line"></span>
<span class="line">  // 自定义规则</span>
<span class="line">  rules: {</span>
<span class="line">    // @规则之前需要空行，但有一些例外情况</span>
<span class="line">    &quot;at-rule-empty-line-before&quot;: [</span>
<span class="line">      &quot;always&quot;,</span>
<span class="line">      {</span>
<span class="line">        except: [&quot;blockless-after-blockless&quot;, &quot;first-nested&quot;], // 例外：连续的无块 @规则，或第一个嵌套的 @规则</span>
<span class="line">        ignore: [&quot;after-comment&quot;, &quot;inside-block&quot;], // 忽略：在注释之后或块内部的 @规则</span>
<span class="line">      },</span>
<span class="line">    ],</span>
<span class="line">    // @规则名称必须是小写</span>
<span class="line">    &quot;at-rule-name-case&quot;: &quot;lowercase&quot;,</span>
<span class="line">    // @规则名称后必须有一个空格</span>
<span class="line">    &quot;at-rule-name-space-after&quot;: &quot;always&quot;,</span>
<span class="line">    // 禁止空的代码块</span>
<span class="line">    &quot;block-no-empty&quot;: true,</span>
<span class="line">    // 颜色函数的表示法必须是传统的</span>
<span class="line">    &quot;color-function-notation&quot;: &quot;legacy&quot;,</span>
<span class="line">    // 十六进制颜色值必须是小写</span>
<span class="line">    &quot;color-hex-case&quot;: &quot;lowercase&quot;,</span>
<span class="line">    // 十六进制颜色值必须是短形式（如 #fff 而不是 #ffffff）</span>
<span class="line">    &quot;color-hex-length&quot;: &quot;short&quot;,</span>
<span class="line">    // 注释之前需要空行</span>
<span class="line">    &quot;comment-empty-line-before&quot;: &quot;always&quot;,</span>
<span class="line">    // 注释内部必须有空格</span>
<span class="line">    &quot;comment-whitespace-inside&quot;: &quot;always&quot;,</span>
<span class="line">    // 自定义属性之前需要空行，但有一些例外情况</span>
<span class="line">    &quot;custom-property-empty-line-before&quot;: [</span>
<span class="line">      &quot;always&quot;,</span>
<span class="line">      {</span>
<span class="line">        except: [&quot;after-custom-property&quot;, &quot;first-nested&quot;], // 例外：在其他自定义属性之后，或第一个嵌套的自定义属性</span>
<span class="line">        ignore: [&quot;after-comment&quot;, &quot;inside-single-line-block&quot;], // 忽略：在注释之后或单行块内部</span>
<span class="line">      },</span>
<span class="line">    ],</span>
<span class="line">    // 禁止重复的属性</span>
<span class="line">    &quot;declaration-block-no-duplicate-properties&quot;: true,</span>
<span class="line">    // 禁止冗余的长手属性（例如，同时使用 \`margin-top\` 和 \`margin\`）</span>
<span class="line">    &quot;declaration-block-no-redundant-longhand-properties&quot;: null,</span>
<span class="line">    // 声明块中的分号后必须换行</span>
<span class="line">    &quot;declaration-block-semicolon-newline-after&quot;: &quot;always&quot;,</span>
<span class="line">    // 声明块中的分号前禁止有空格</span>
<span class="line">    &quot;declaration-block-semicolon-space-before&quot;: &quot;never&quot;,</span>
<span class="line">    // 声明块的最后一个声明后必须有分号</span>
<span class="line">    &quot;declaration-block-trailing-semicolon&quot;: &quot;always&quot;,</span>
<span class="line">    // 声明之前需要空行，但有一些例外情况</span>
<span class="line">    &quot;declaration-empty-line-before&quot;: [</span>
<span class="line">      &quot;always&quot;,</span>
<span class="line">      {</span>
<span class="line">        except: [&quot;after-declaration&quot;, &quot;first-nested&quot;], // 例外：在其他声明之后，或第一个嵌套的声明</span>
<span class="line">        ignore: [&quot;after-comment&quot;, &quot;inside-single-line-block&quot;], // 忽略：在注释之后或单行块内部</span>
<span class="line">      },</span>
<span class="line">    ],</span>
<span class="line">    // 禁止使用 \`!important\`</span>
<span class="line">    &quot;declaration-no-important&quot;: true,</span>
<span class="line">    // 字体名称必须在推荐的情况下使用引号</span>
<span class="line">    &quot;font-family-name-quotes&quot;: &quot;always-where-recommended&quot;,</span>
<span class="line">    // 禁止 \`calc()\` 中的运算符之间没有空格</span>
<span class="line">    &quot;function-calc-no-unspaced-operator&quot;: true,</span>
<span class="line">    // 禁止使用非标准的方向值（如 \`to top\` 而不是 \`top\`）</span>
<span class="line">    &quot;function-linear-gradient-no-nonstandard-direction&quot;: true,</span>
<span class="line">    // 函数名称必须是小写</span>
<span class="line">    &quot;function-name-case&quot;: &quot;lowercase&quot;,</span>
<span class="line">    // URL 函数中的值必须使用引号</span>
<span class="line">    &quot;function-url-quotes&quot;: &quot;always&quot;,</span>
<span class="line">    // 缩进必须使用 2 个空格</span>
<span class="line">    indentation: 2,</span>
<span class="line">    // 禁止关键帧声明中使用 \`!important\`</span>
<span class="line">    &quot;keyframe-declaration-no-important&quot;: true,</span>
<span class="line">    // 禁止零值带有单位（如 \`0px\` 而不是 \`0\`）</span>
<span class="line">    &quot;length-zero-no-unit&quot;: true,</span>
<span class="line">    // 最大空行数为 2</span>
<span class="line">    &quot;max-empty-lines&quot;: 2,</span>
<span class="line">    // 媒体特征名称必须是小写</span>
<span class="line">    &quot;media-feature-name-case&quot;: &quot;lowercase&quot;,</span>
<span class="line">    // 禁止未知的媒体特征名称</span>
<span class="line">    &quot;media-feature-name-no-unknown&quot;: true,</span>
<span class="line">    // 媒体特征括号内必须有空格</span>
<span class="line">    &quot;media-feature-parentheses-space-inside&quot;: &quot;always&quot;,</span>
<span class="line">    // 媒体特征范围运算符后必须有空格</span>
<span class="line">    &quot;media-feature-range-operator-space-after&quot;: &quot;always&quot;,</span>
<span class="line">    // 媒体特征范围运算符前必须有空格</span>
<span class="line">    &quot;media-feature-range-operator-space-before&quot;: &quot;always&quot;,</span>
<span class="line">    // 禁止空的源代码</span>
<span class="line">    &quot;no-empty-source&quot;: true,</span>
<span class="line">    // 禁止行尾有空白字符</span>
<span class="line">    &quot;no-eol-whitespace&quot;: true,</span>
<span class="line">    // 禁止多余的分号</span>
<span class="line">    &quot;no-extra-semicolons&quot;: true,</span>
<span class="line">    // 禁止无效的双斜杠注释</span>
<span class="line">    &quot;no-invalid-double-slash-comments&quot;: true,</span>
<span class="line">    // 禁止源代码末尾缺少换行符</span>
<span class="line">    &quot;no-missing-end-of-source-newline&quot;: true,</span>
<span class="line">    // 禁止未知的动画名称</span>
<span class="line">    &quot;no-unknown-animations&quot;: true,</span>
<span class="line">    // 禁止未知的属性</span>
<span class="line">    &quot;no-unknown-properties&quot;: true,</span>
<span class="line">    // 数字必须有前导零（如 \`0.5\` 而不是 \`.5\`）</span>
<span class="line">    &quot;number-leading-zero&quot;: &quot;always&quot;,</span>
<span class="line">    // 禁止数字末尾有零（如 \`0.5\` 而不是 \`0.50\`）</span>
<span class="line">    &quot;number-no-trailing-zeros&quot;: true,</span>
<span class="line">    // 规范代码块的顺序</span>
<span class="line">    &quot;order/order&quot;: [</span>
<span class="line">      &quot;custom-properties&quot;, // 自定义属性</span>
<span class="line">      &quot;dollar-variables&quot;, // LESS 变量</span>
<span class="line">      &quot;declarations&quot;, // 声明</span>
<span class="line">      &quot;rules&quot;, // 规则</span>
<span class="line">    ],</span>
<span class="line">    // 属性必须按字母顺序排列</span>
<span class="line">    &quot;order/properties-alphabetical-order&quot;: true,</span>
<span class="line">    // 属性名称必须是小写</span>
<span class="line">    &quot;property-case&quot;: &quot;lowercase&quot;,</span>
<span class="line">    // 规则之前需要空行，但有一些例外情况</span>
<span class="line">    &quot;rule-empty-line-before&quot;: [</span>
<span class="line">      &quot;always&quot;,</span>
<span class="line">      {</span>
<span class="line">        except: [&quot;after-rule&quot;, &quot;first-nested&quot;], // 例外：在其他规则之后，或第一个嵌套的规则</span>
<span class="line">        ignore: [&quot;after-comment&quot;], // 忽略：在注释之后</span>
<span class="line">      },</span>
<span class="line">    ],</span>
<span class="line">    // 属性选择器的值必须使用引号</span>
<span class="line">    &quot;selector-attribute-quotes&quot;: &quot;always&quot;,</span>
<span class="line">    // 类选择器的命名模式必须符合正则表达式</span>
<span class="line">    &quot;selector-class-pattern&quot;: &quot;^[a-z][a-z0-9-_]*$&quot;,</span>
<span class="line">    // 组合选择器之后必须有空格</span>
<span class="line">    &quot;selector-combinator-space-after&quot;: &quot;always&quot;,</span>
<span class="line">    // 组合选择器之前必须有空格</span>
<span class="line">    &quot;selector-combinator-space-before&quot;: &quot;always&quot;,</span>
<span class="line">    // ID 选择器的命名模式必须符合正则表达式</span>
<span class="line">    &quot;selector-id-pattern&quot;: &quot;^[a-z][a-z0-9-_]*$&quot;,</span>
<span class="line">    // 选择器列表中的逗号后必须换行</span>
<span class="line">    &quot;selector-list-comma-newline-after&quot;: &quot;always&quot;,</span>
<span class="line">    // 选择器列表中的逗号前禁止有空格</span>
<span class="line">    &quot;selector-list-comma-space-before&quot;: &quot;never&quot;,</span>
<span class="line">    // 选择器中最大空行数为 1</span>
<span class="line">    &quot;selector-max-empty-lines&quot;: 1,</span>
<span class="line">    // 禁止类型选择器的限定（如 \`.class\` 而不是 \`div.class\`）</span>
<span class="line">    &quot;selector-no-qualifying-type&quot;: true,</span>
<span class="line">    // 禁止使用浏览器前缀</span>
<span class="line">    &quot;selector-no-vendor-prefix&quot;: true,</span>
<span class="line">    // 伪类名称必须是小写</span>
<span class="line">    &quot;selector-pseudo-class-case&quot;: &quot;lowercase&quot;,</span>
<span class="line">    // 禁止未知的伪类名称</span>
<span class="line">    &quot;selector-pseudo-class-no-unknown&quot;: true,</span>
<span class="line">    // 伪类括号内必须有空格</span>
<span class="line">    &quot;selector-pseudo-class-parentheses-space-inside&quot;: &quot;always&quot;,</span>
<span class="line">    // 伪元素名称必须是小写</span>
<span class="line">    &quot;selector-pseudo-element-case&quot;: &quot;lowercase&quot;,</span>
<span class="line">    // 伪元素必须使用双冒号表示法（如 \`::after\` 而不是 \`:after\`）</span>
<span class="line">    &quot;selector-pseudo-element-colon-notation&quot;: &quot;double&quot;,</span>
<span class="line">    // 类型选择器名称必须是小写</span>
<span class="line">    &quot;selector-type-case&quot;: &quot;lowercase&quot;,</span>
<span class="line">    // 禁止未知的类型选择器名称</span>
<span class="line">    &quot;selector-type-no-unknown&quot;: true,</span>
<span class="line">    // 禁止冗余的简写属性值（如 \`background: 0 0\` 而不是 \`background: none\`）</span>
<span class="line">    &quot;shorthand-property-no-redundant-values&quot;: true,</span>
<span class="line">    // 字符串必须使用双引号</span>
<span class="line">    &quot;string-quotes&quot;: &quot;double&quot;,</span>
<span class="line">    // 单位名称必须是小写</span>
<span class="line">    &quot;unit-case&quot;: &quot;lowercase&quot;,</span>
<span class="line">    // 禁止未知的单位</span>
<span class="line">    &quot;unit-no-unknown&quot;: true,</span>
<span class="line">    // 关键字值必须是小写</span>
<span class="line">    &quot;value-keyword-case&quot;: &quot;lowercase&quot;,</span>
<span class="line">    // 值列表中的逗号后必须换行</span>
<span class="line">    &quot;value-list-comma-newline-after&quot;: &quot;always&quot;,</span>
<span class="line">    // 值列表中的逗号前禁止有空格</span>
<span class="line">    &quot;value-list-comma-space-before&quot;: &quot;never&quot;,</span>
<span class="line">    // 值列表中最大空行数为 1</span>
<span class="line">    &quot;value-list-max-empty-lines&quot;: 1,</span>
<span class="line">  },</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装依赖</p><div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd"><pre><code><span class="line">pnpm add stylelint stylelint-config-recommended stylelint-config-standard stylelint-order -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>5.4在<code>package.json</code>中</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code><span class="line"><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;stylelint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint ./**/*.{css,less}&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;stylelint:fix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint ./**/*.{css,less} --fix&quot;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="检查命令" tabindex="-1"><a class="header-anchor" href="#检查命令"><span>检查命令</span></a></h1><div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd"><pre><code><span class="line">https://blog.csdn.net/weixin_42745647/article/details/131371945</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>为什么上面有 vscode 自动 eslint 格式化，还需要命令行: 因为命令行能一次性爆出所有警告问题，便于找到位置修复，这是使用eslint代码检查并修复的命令</p></blockquote><h4 id="eslint命令行" tabindex="-1"><a class="header-anchor" href="#eslint命令行"><span>eslint命令行</span></a></h4><div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd"><pre><code><span class="line">npx eslint . --fix_	//用npx使用项目里的eslint,没有的话也会去使用全局的eslint_</span>
<span class="line">npx eslint . --fix 	//全部类型文件</span>
<span class="line">npx eslint . --ext .ts,.tsx --fix 	//–ext可以指定文件后缀名s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="prettier命令行" tabindex="-1"><a class="header-anchor" href="#prettier命令行"><span>prettier命令行</span></a></h4><div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd"><pre><code><span class="line">npx prettier --write . //使用Prettier格式化所有文件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="stylelint命令行" tabindex="-1"><a class="header-anchor" href="#stylelint命令行"><span>stylelint命令行</span></a></h4><div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd"><pre><code><span class="line">npx stylelint “**/*.css” --fix//格式化所有css,自动修复css</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,44)])])}const o=n(i,[["render",t]]),r=JSON.parse('{"path":"/lint/lint.html","title":"代码风格配置React+vite+prettier+stylelint","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1768461749000,"contributors":[{"name":"danbao.xdd","username":"","email":"xiadandan@come-future.com","commits":1}],"changelog":[{"hash":"a739e7ee121396631c5d183b634713b8095232c6","time":1768461749000,"email":"xiadandan@come-future.com","author":"danbao.xdd","message":"first commit"}]},"filePathRelative":"lint/lint.md","excerpt":"\\n<div class=\\"language-cmd line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"cmd\\"><pre><code><span class=\\"line\\">https://juejin.cn/post/7451239168661438504?searchId=20250509100617B48930ED3EAB6AAB41F1</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{o as comp,r as data};

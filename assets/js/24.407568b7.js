(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{499:function(s,t,e){"use strict";e.r(t);var a=e(30),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"项目推送到-github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目推送到-github"}},[s._v("#")]),s._v(" 项目推送到 Github")]),s._v(" "),e("p",[s._v("一般的推送流程：")]),s._v(" "),e("blockquote",[e("p",[s._v("在 Github 中新建一个仓库 -> 将仓库克隆到本地 -> 在本地编写文件 -> 提交到本地仓库 -> 添加文件注释 -> 将项目从本地仓库推送到 Github 远程仓库")])]),s._v(" "),e("p",[s._v("关于仓库的创建可以参考这几个网站"),e("a",{attrs:{href:"https://notes.youngkbt.cn/about/website/deploy/",target:"_blank",rel:"noopener noreferrer"}},[s._v("youngkbt博客"),e("OutboundLink")],1),s._v("、"),e("a",{attrs:{href:"https://book.hliedu.com/guide/notes/vuepress.html#%E6%8E%A8%E9%80%81%E5%88%B0gitee%E4%BB%93%E5%BA%93",target:"_blank",rel:"noopener noreferrer"}},[s._v("君哥的学习笔记"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"提交项目源码到仓库里的master"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交项目源码到仓库里的master"}},[s._v("#")]),s._v(" 提交项目源码到仓库里的"),e("code",[s._v("master")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone xxx "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# xxx：表示Github仓库的地址")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将项目克隆到本地，然后添加文件。")]),s._v(" "),e("p",[s._v("添加完文件后使用 "),e("code",[s._v("git")]),s._v(" 进入项目的根目录（如："),e("code",[s._v("blog/gyf11069.github.io/")]),s._v("）")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 把项目的所有文件添加到本地仓库 也可以使用 "git add -A"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"此处输入提交的注释内容"')]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 双引号里是对于添加文件的描述")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 将本地仓库提交到远程仓库，也就是你的 GitHub 仓库，地址默认为".git"文件夹中的 config 文件的 url')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以使用 git push URL     # URL就是你的仓库地址,默认提交到master分支")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("若有 URL 的问题参考"),e("RouterLink",{attrs:{to:"/pages/548b44/"}},[s._v("远程推送代码")])],1),s._v(" "),e("h3",{attrs:{id:"进入项目的根目录-打包项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入项目的根目录-打包项目"}},[s._v("#")]),s._v(" 进入项目的根目录，打包项目")]),s._v(" "),e("p",[s._v("1、输入下面的命令将项目打包编译成静态文件，即"),e("code",[s._v("html")]),s._v("文件。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("vuepress build docs\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("打包完成后静态文件会生成在"),e("code",[s._v(".vuepress")]),s._v(" 目录下的 "),e("code",[s._v("dist")]),s._v(" 文件夹中。")]),s._v(" "),e("p",[s._v("2、上传打包项目到仓库的 "),e("code",[s._v("gh-pages")]),s._v(" 分支")]),s._v(" "),e("p",[s._v("(1)使用 "),e("code",[s._v("git")]),s._v(" 进入项目的"),e("code",[s._v("dist")]),s._v(" 文件夹中（如："),e("code",[s._v("blog/gyf11069.github.io/docs/.vuepress/dist")]),s._v("）")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将 dist 文件夹初始化为本地仓库")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把项目的所有文件添加到本地仓库")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"此处输入提交的注释内容"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 双引号里是对于添加文件的描述")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f URL master:gh-pages "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# URL 就是你的仓库地址,推送到 github gh-pages 分支")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -f 是必须的，表示覆盖原来的内容")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("如果可以在仓库的 "),e("code",[s._v("main")]),s._v("（或者 "),e("code",[s._v("master")]),s._v("） 分支下看到项目的源码，"),e("code",[s._v("gh-pages")]),s._v(" 分支下看到打包后的文件就代表推送成功了。")])])}),[],!1,null,null,null);t.default=n.exports}}]);
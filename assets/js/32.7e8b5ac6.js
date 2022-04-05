(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{510:function(s,t,a){"use strict";a.r(t);var e=a(30),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"navicat-for-mysql-链接时报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navicat-for-mysql-链接时报错"}},[s._v("#")]),s._v(" navicat for mysql 链接时报错")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://my.oschina.net/u/3295928/blog/1811804",target:"_blank",rel:"noopener noreferrer"}},[s._v("navicat for mysql 链接时报错"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("问题描述：客户端使用 "),a("code",[s._v("navicat for mysql")]),s._v("。本地安装了"),a("code",[s._v("mysql 8.0")]),s._v("。但是在链接的时候提示："),a("code",[s._v("Client does not support authentication protocol requested by server")])]),s._v(" "),a("p",[s._v("主要原因是"),a("code",[s._v("mysql")]),s._v("服务器要求的认证（身份验证）插件版本与客户端不一致造成的。")]),s._v(" "),a("p",[s._v("打开"),a("code",[s._v("mysql")]),s._v("命令行输入如下命令查看，系统用户对应的认证插件：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("plugin "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可以看到"),a("code",[s._v("root")]),s._v("用户使用的"),a("code",[s._v("plugin")]),s._v("是"),a("code",[s._v("caching_sha2_password")]),s._v("，"),a("code",[s._v("mysql")]),s._v("官方网站有如下说明：")]),s._v(" "),a("blockquote",[a("p",[s._v("Important\nThe caching_sha2_ password authentication plugin on the server requires new versions of connectors and clients, which add support for the new MySQL 8.0 default authentication.")]),s._v(" "),a("p",[s._v("服务器上的 caching_sha2_password 身份验证插件需要新版本的连接器和客户端，这增加了对新 MySQL 8.0 默认身份验证的支持。")])]),s._v(" "),a("p",[s._v("意思是说"),a("code",[s._v("caching_sha2_password")]),s._v("是"),a("code",[s._v("MySQL 8.0")]),s._v("默认的认证插件，必须使用支持此插件的客户端版本。")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("MySQL 8.0")]),s._v("中使用新的加密算法"),a("code",[s._v("caching_sha2_password")]),s._v("对用户密码进行加密，即使是相同的密码，也不会生成相同的加密结构的特点，因此更安全。")]),s._v(" "),a("p",[a("code",[s._v("plugin")]),s._v("的作用之一就是处理后的密码格式和长度是不一样的，类似于使用"),a("code",[s._v("MD5")]),s._v("加密和使用"),a("code",[s._v("base64")]),s._v("加密一样对于同一个密码处理后的格式是不一样的。")]),s._v(" "),a("p",[s._v("解决方法：")]),s._v(" "),a("p",[s._v("我不希望更新本地的客户端版本，想直接使用原来的环境来链接。解决方法是将"),a("code",[s._v("root")]),s._v("的"),a("code",[s._v("plugin")]),s._v("改成"),a("code",[s._v("mysql_native_password")]),s._v("，相当于降了一级。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这行代码有两层含义，第一:修改root的密码为'root'，摒弃原来的旧密码。第二：使用mysql_native_password对新密码进行编码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" identified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" mysql_native_password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户密码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新MySQL的系统权限相关表")]),s._v("\nflush "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
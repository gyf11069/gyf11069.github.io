// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/frontend/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [
          { text: 'HTML', link: '/pages/7bed67/' },
          { text: 'CSS', link: '/pages/2c6c57/' },
          { text: 'JavaScript', link: '' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: 'JavaScript学习笔记', link: '/note/javascript/' },
          { text: 'ES6 学习笔记', link: '/note/es6/' },
          { text: 'Vue学习笔记', link: '/note/vue/' },
        
          {
            text: 'Git学习笔记',
            link: '/pages/8292d8/',
          },
        
        ],
      },
    ],
  },
  {
    text: '后端',
    link: '/backend/',
    items: [
      { text: 'Java', link: '/pages/537d4b/' },
      { text: 'MySQL', link: '/pages/b1d69c/' },
      { text:'JavaWeb',link:'/pages/ebb0e7/'}, 
    ],
  },
  {
    text: '四大内功',
    link: '/basepower/',
    items: [
      { text: '数据结构', link: '/pages/9a7ee40fc232253e/' },
      { text: '计算机网络', link: '/pages/4c778760be26d8b3/' },
      { text: '操作系统', link: '/pages/117708e0af7f0bd9/' },
      { text: '计算机组成原理', link: '/pages/41f87d890d0a02af/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '学习', link: '/pages/f2a556/' },
      { text: '面试', link: '/pages/aea6571b7a8bae86/' },
      { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
      { text: '实用技巧', link: '/pages/baaa02/' },
      { text: '友情链接', link: '/friends/' },
    ],
  },

  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '时间轴', link: '/archives/' },
    ],
  },

  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },

  { text: '关于', link: '/about/' },
  
  
]

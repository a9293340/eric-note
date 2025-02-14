import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Eric's Note",
  description: "隨筆",
  base: '/eric-note/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'AWS', link: '/AWS/home', activeMatch: '/AWS/' },
      { text: 'C#', link: '/CSharp/home', activeMatch: '/CSharp/' }
    ],

    sidebar: {
      '/AWS/':[
        {
          text: 'AWS',
          items: [
            { text: 'VPC', link: '/AWS/VPC' },
            { text: 'EC2', link: '/AWS/EC2' },
          ],
          
        },
      ],
      '/CSharp/':[
        {
          text: 'CSharp Method',
          collapsed: true,
          items:[
            { text: '方法基礎', link: '/CSharp/method/method_basic' },
            { text: '參數', link: '/CSharp/method/arguments' },
            { text: '參數修飾', link: '/CSharp/method/prarmeter_modifiers' },
            { text: '局部函數', link: '/CSharp/method/local_function' },
            { text: '靜態方法', link: '/CSharp/method/static_methods' },
            { text: '封裝', link: '/CSharp/method/encapsulation' },
            { text: 'this', link: '/CSharp/method/this' },
            { text: '方法多載', link: '/CSharp/method/method_overload' },
            { text: '遞歸', link: '/CSharp/method/recursion' },
            { text: 'ref return', link: '/CSharp/method/ref_return' },
            { text: '將引用變量作為參數傳遞', link: '/CSharp/method/object_reference_as_arguments' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Eric's Note",
  description: '隨筆',
  base: '/eric-note/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'AWS', link: '/AWS/home', activeMatch: '/AWS/' },
      { text: 'C#', link: '/CSharp/home', activeMatch: '/CSharp/' },
    ],

    sidebar: {
      '/AWS/': [
        {
          text: 'AWS',
          items: [
            { text: 'VPC', link: '/AWS/VPC' },
            { text: 'EC2', link: '/AWS/EC2' },
            { text: 'S3', link: '/AWS/s3' },
            { text: 'RDS', link: '/AWS/rds' },
            { text: 'IAM', link: '/AWS/iam' },
          ],
        },
      ],
      '/CSharp/': [
        {
          text: 'CSharp Method',
          collapsed: true,
          items: [
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
            {
              text: '將引用變量作為參數傳遞',
              link: '/CSharp/method/object_reference_as_arguments',
            },
          ],
        },
        {
          text: 'C# Type Conversion',
          collapsed: true,
          items: [
            { text: 'What is Type Conversion', link: '/CSharp/type-conversion/index' },
            { text: 'Casting', link: '/CSharp/type-conversion/casting' },
            { text: 'Parse', link: '/CSharp/type-conversion/parse' },
            { text: 'Conversion Methods', link: '/CSharp/type-conversion/conversionMethods' },
          ],
        },
        {
          text: 'C# Constructor',
          collapsed: true,
          items: [
            { text: 'Instance Constructor', link: '/CSharp/constructor/instance-constructor' },
            { text: 'Static Constructor', link: '/CSharp/constructor/static-constructor' },
            { text: 'Type of Constructor', link: '/CSharp/constructor/type-of-constructor' },
            {
              text: 'Constructor Overloading',
              link: '/CSharp/constructor/constructor-overloading',
            },
            {
              text: 'Constructor Initializer',
              link: '/CSharp/constructor/constructor-initializer',
            },
          ],
        },
        {
          text: 'C# Properties',
          collapsed: true,
          items: [
            { text: 'Property Basic', link: '/CSharp/properties/creating-properties' },
            { text: 'Read-Only & Write-Only', link: '/CSharp/properties/readonly-writeonly' },
            {
              text: 'Auto-Properties with Accessor Accessibility',
              link: '/CSharp/properties/auto-properties-with-accessor-accessibility',
            },
            {
              text: 'Auto-Implemented Property',
              link: '/CSharp/properties/auto-implemented-properties-initializers',
            },
          ],
        },
        {
          text: 'C# Inheritance',
          collapsed: true,
          items: [
            { text: 'Inheritance Basic', link: '/CSharp/Inheritance/index' },
            { text: 'Inheritance Types', link: '/CSharp/Inheritance/type' },
            { text: 'Base Keyword', link: '/CSharp/Inheritance/base-keyword' },
            { text: 'Constructor Chaining', link: '/CSharp/Inheritance/constructor-chaining' },
            { text: 'Method Hiding', link: '/CSharp/Inheritance/method-hiding' },
            { text: 'Method Override', link: '/CSharp/Inheritance/method-override' },
            { text: 'Sealed Class', link: '/CSharp/Inheritance/sealed-class' },
            { text: 'Sealed Method', link: '/CSharp/Inheritance/sealed-method' },
          ],
        },
        {
          text: 'C# abstract',
          collapsed: true,
          items: [
            { text: 'C# 抽象（Abstract）概念', link: '/CSharp/abstract/abstract' },
            { text: 'C# 抽象類別重點', link: '/CSharp/abstract/abstract_key_points' },
            { text: 'C# 抽象方法', link: '/CSharp/abstract/abstract_methods' },
            { text: 'C# 介面 (Interface)', link: '/CSharp/abstract/interface' },
            { text: 'C# 多態性', link: '/CSharp/abstract/polymorphism' },
            { text: 'C# 多重繼承', link: '/CSharp/abstract/multiple_inheritance' },
            { text: 'C# 接口繼承', link: '/CSharp/abstract/interface_inheritance' },
            { text: 'C# 顯式接口實現', link: '/CSharp/abstract/explicit_interface' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});

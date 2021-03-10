(window.webpackJsonp=window.webpackJsonp||[]).push([[835],{2205:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},2206:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},2207:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(t),f=r,m=b["".concat(c,".").concat(f)]||b[f]||s[f]||o;return t?a.a.createElement(m,i(i({ref:n},u),{},{components:t})):a.a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},901:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2205),a=t(2206),o=(t(0),t(2207)),c={title:"\u5f02\u6b65\u7f16\u7a0b"},i={unversionedId:"async-await",id:"async-await",isDocsHomePage:!1,title:"\u5f02\u6b65\u7f16\u7a0b",description:"Taro 2.x \u7248\u672c\u4e2d\u4f7f\u7528 async-await \u4e0d\u518d\u9700\u8981 @tarojs/async-await\u3002",source:"@site/docs/async-await.md",slug:"/async-await",permalink:"/taro/docs/next/async-await",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/async-await.md",version:"current"},l=[],u={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Taro 2.x \u7248\u672c\u4e2d\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"async-await")," \u4e0d\u518d\u9700\u8981 ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/async-await"),"\u3002")),Object(o.b)("p",null,"Taro \u652f\u6301\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"async functions")," \u6765\u8ba9\u5f00\u53d1\u8005\u83b7\u5f97\u4e0d\u9519\u7684\u5f02\u6b65\u7f16\u7a0b\u4f53\u9a8c\uff0c\u5f00\u542f ",Object(o.b)("inlineCode",{parentName:"p"},"async functions")," \u652f\u6301\u9700\u8981\u5b89\u88c5\u5305 ",Object(o.b)("inlineCode",{parentName:"p"},"babel-plugin-transform-runtime")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"babel-runtime"),"\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ yarn add babel-plugin-transform-runtime --dev\n$ yarn add babel-runtime\n")),Object(o.b)("p",null,"\u968f\u540e\u4fee\u6539\u9879\u76ee ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/taro/docs/next/config-detail#babel"}),Object(o.b)("inlineCode",{parentName:"a"},"babel")," \u914d\u7f6e"),"\uff0c\u589e\u52a0\u63d2\u4ef6 ",Object(o.b)("inlineCode",{parentName:"p"},"babel-plugin-transform-runtime"),"\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"babel: {\n  sourceMap: true,\n  presets: [\n    [\n      'env',\n      {\n        modules: false\n      }\n    ]\n  ],\n  plugins: [\n    'transform-decorators-legacy',\n    'transform-class-properties',\n    'transform-object-rest-spread',\n    ['transform-runtime', {\n      \"helpers\": false,\n      \"polyfill\": false,\n      \"regenerator\": true,\n      \"moduleName\": 'babel-runtime'\n    }]\n  ]\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u503c\u5f97\u6ce8\u610f\u7684\u4e8b\uff0c\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"async functions")," \u4e00\u5b9a\u8981\u8bb0\u5f97\u6309\u7167",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/taro/docs/next/before-dev-remind"}),"\u5f00\u53d1\u524d\u6ce8\u610f"),"\u4e2d\u63d0\u793a\u7684\u5185\u5bb9\u8fdb\u884c\u64cd\u4f5c\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u62a5\u9519")))}p.isMDXComponent=!0}}]);
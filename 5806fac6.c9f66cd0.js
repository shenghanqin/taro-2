(window.webpackJsonp=window.webpackJsonp||[]).push([[746],{2205:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},2206:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},2207:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return t?a.a.createElement(f,i(i({ref:n},u),{},{components:t})):a.a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2208:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},2209:function(e,n,t){"use strict";var r=t(0),a=t(2210);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2210:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},2211:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(2209),c=t(2208),i=t(51),l=t.n(i),u=37,s=39;n.a=function(e){var n=e.lazy,t=e.block,i=e.children,p=e.defaultValue,b=e.values,m=e.groupId,f=e.className,d=Object(o.a)(),O=d.tabGroupChoices,v=d.setTabGroupChoices,j=Object(r.useState)(p),y=j[0],h=j[1];if(null!=m){var g=O[m];null!=g&&g!==y&&b.some((function(e){return e.value===g}))&&h(g)}var x=function(e){h(e),null!=m&&v(m,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},f)},b.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===n,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e)},onFocus:function(){return x(n)},onClick:function(){x(n)}},t)}))),n?Object(r.cloneElement)(i.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},i.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},2212:function(e,n,t){"use strict";var r=t(2205),a=t(0),o=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:a}),n)}},812:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var r=t(2205),a=t(2206),o=(t(0),t(2207)),c=t(2211),i=t(2212),l={title:"\u7ec4\u4ef6\u5e93\u8bf4\u660e"},u={unversionedId:"components-desc",id:"version-3.x/components-desc",isDocsHomePage:!1,title:"\u7ec4\u4ef6\u5e93\u8bf4\u660e",description:"Taro \u4ee5 \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u5e93 \u4e3a\u6807\u51c6\uff0c\u7ed3\u5408 jsx \u8bed\u6cd5\u89c4\u8303\uff0c\u5b9a\u5236\u4e86\u4e00\u5957\u81ea\u5df1\u7684\u7ec4\u4ef6\u5e93\u89c4\u8303\u3002",source:"@site/versioned_docs/version-3.x/components-desc.md",slug:"/components-desc",permalink:"/taro/docs/components-desc",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components-desc.md",version:"3.x",sidebar:"version-3.x/components",next:{title:"View",permalink:"/taro/docs/components/viewContainer/view"}},s=[{value:"\u6ce8\u610f",id:"\u6ce8\u610f",children:[{value:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d",id:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d",children:[]},{value:"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5 on \u5f00\u5934",id:"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5-on-\u5f00\u5934",children:[]}]}],p={rightToc:s};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Taro \u4ee5 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u5e93")," \u4e3a\u6807\u51c6\uff0c\u7ed3\u5408 ",Object(o.b)("inlineCode",{parentName:"p"},"jsx")," \u8bed\u6cd5\u89c4\u8303\uff0c\u5b9a\u5236\u4e86\u4e00\u5957\u81ea\u5df1\u7684\u7ec4\u4ef6\u5e93\u89c4\u8303\u3002"),Object(o.b)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u539f\u5219\uff0c\u5728\u5c0f\u7a0b\u5e8f\u7aef\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6240\u6709\u7684\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\uff0c\u800c\u5728\u5176\u4ed6\u7aef\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684\u7ec4\u4ef6\u5e93\u5b9e\u73b0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"H5 \u7aef\uff0c",Object(o.b)("inlineCode",{parentName:"li"},"@tarojs/components"),"\uff0c\u540c\u65f6\u4e5f\u662f\u9700\u8981\u5f15\u5165\u7684\u9ed8\u8ba4\u6807\u51c6\u7ec4\u4ef6\u5e93")),Object(o.b)("p",null,"\u5728\u4f7f\u7528\u65f6\uff0cReact \u4e2d\u6211\u4eec\u9700\u8981\u5148\u4ece Taro \u6807\u51c6\u7ec4\u4ef6\u5e93 ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/components")," \u5f15\u7528\u7ec4\u4ef6\uff0c\u518d\u8fdb\u884c\u4f7f\u7528\uff0c\u4f8b\u5982\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"<View />"),"\u3001 ",Object(o.b)("inlineCode",{parentName:"p"},"<Text />")," \u7ec4\u4ef6\uff0c\u800c Vue \u6211\u4eec\u5219\u65e0\u9700\u5f15\u5165"),Object(o.b)(c.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"React",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport { View, Text } from '@tarojs/components'\n\nexport default class C extends Component {\n  render () {\n    return (\n      <View className='c'>\n        <Text>c component</Text>\n      </View>\n    )\n  }\n}\n"))),Object(o.b)(i.a,{value:"Vue",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="c">\n    <text>c component</text>\n  </view>\n</template>\n')))),Object(o.b)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),Object(o.b)("p",null,"\u5728\u7ec4\u4ef6\u7684\u8be6\u7ec6\u6587\u6863\u4e2d\u5217\u51fa\u4e86\u7ec4\u4ef6\u5728\u4e0d\u540c\u7aef\u7684\u652f\u6301\u7a0b\u5ea6\uff0c\u4ee5\u53ca\u57fa\u672c\u7684\u4f7f\u7528\u793a\u4f8b\u3002 \u90e8\u5206\u672a\u5217\u51fa\u793a\u4f8b\u7684\uff0c\u6807\u660e\u4ec5\u5728\u5c0f\u7a0b\u5e8f\u7aef\u652f\u6301\u7684\u7ec4\u4ef6\u7684\u7528\u6cd5\u53ef\u4ee5\u76f4\u63a5\u53c2\u8003",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/"}),"\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u6587\u6863"),"\u3002"),Object(o.b)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u4ecd\u9700\u9075\u5faa Taro \u7684\u5f00\u53d1\u89c4\u8303\uff1a"),Object(o.b)("h3",{id:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d"},"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d"),Object(o.b)("p",null,"\u4f8b\u5982\uff0c\u4f7f\u7528 H5 \u7aef\u5c1a\u672a\u652f\u6301\u7684 map \u7ec4\u4ef6"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport Taro from '@tarojs/taro'\n// \u5f15\u5165 map \u7ec4\u4ef6\nimport { Map } from '@tarojs/components'\n\nclass App extends Components {\n  onTap () {}\n  render () {\n    return (\n      <Map onClick={this.onTap} />\n    )\n  }\n}\n")),Object(o.b)("h3",{id:"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5-on-\u5f00\u5934"},"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5 on \u5f00\u5934"),Object(o.b)("p",null,"\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d bind \u5f00\u5934\u8fd9\u6837\u7684\u7528\u6cd5\uff0c\u90fd\u9700\u8981\u8f6c\u6210\u4ee5 on \u5f00\u5934\u7684\u5f62\u5f0f\u3002"))}b.isMDXComponent=!0}}]);
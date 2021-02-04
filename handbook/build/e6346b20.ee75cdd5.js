(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{182:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(198)),s={id:"dbcontext-add",title:"9.5 \u65b0\u589e\u64cd\u4f5c",sidebar_label:"9.5 \u65b0\u589e\u64cd\u4f5c"},c={unversionedId:"dbcontext-add",id:"dbcontext-add",isDocsHomePage:!1,title:"9.5 \u65b0\u589e\u64cd\u4f5c",description:"Furion \u6846\u67b6\u63d0\u4f9b\u975e\u5e38\u591a\u7684\u8bed\u6cd5\u7cd6\u8fdb\u884c\u6570\u636e\u5e93\u64cd\u4f5c\u3002",source:"@site/docs\\dbcontext-add.mdx",slug:"/dbcontext-add",permalink:"/furion/docs/dbcontext-add",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/dbcontext-add.mdx",version:"current",lastUpdatedBy:"\u767e\u5c0f\u50e7",lastUpdatedAt:1612020493,sidebar_label:"9.5 \u65b0\u589e\u64cd\u4f5c",sidebar:"docs",previous:{title:"9.4 \u4ed3\u50a8\u6a21\u5f0f",permalink:"/furion/docs/dbcontext-repository"},next:{title:"9.6 \u66f4\u65b0\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-update"}},i=[{value:"9.5.1 \u65b0\u589e\u4e00\u6761\uff0c\u65e0\u8fd4\u56de\u503c",id:"951-\u65b0\u589e\u4e00\u6761\uff0c\u65e0\u8fd4\u56de\u503c",children:[]},{value:"9.5.2 \u65b0\u589e\u4e00\u6761\uff0c\u8fd4\u56de\u6700\u65b0\u6570\u636e",id:"952-\u65b0\u589e\u4e00\u6761\uff0c\u8fd4\u56de\u6700\u65b0\u6570\u636e",children:[]},{value:"9.5.3 \u65b0\u589e\u591a\u6761\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"953-\u65b0\u589e\u591a\u6761\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.5.4 \u65b0\u589e\u591a\u6761\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"954-\u65b0\u589e\u591a\u6761\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.5.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"955-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],d={toc:i};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u975e\u5e38\u591a\u7684\u8bed\u6cd5\u7cd6\u8fdb\u884c\u6570\u636e\u5e93\u64cd\u4f5c\u3002"),Object(o.b)("h2",{id:"951-\u65b0\u589e\u4e00\u6761\uff0c\u65e0\u8fd4\u56de\u503c"},"9.5.1 \u65b0\u589e\u4e00\u6761\uff0c\u65e0\u8fd4\u56de\u503c"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),'var user = new User { Name = "\u767e\u5c0f\u50e7", Age = 27 };\n\n// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.Insert(user);\n\n// \u793a\u4f8b\u4e8c\nuser.Insert();\n\n// \u793a\u4f8b\u4e09\nrepository.Entities.Add(user);\n\n// \u793a\u4f8b\u56db\nrepository.ChangeEntityState(user, EntityState.Added);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.InsertAsync();\n\n// \u793a\u4f8b\u4e09\nawait repository.Entities.AddAsync(user);\n\n')),Object(o.b)("h2",{id:"952-\u65b0\u589e\u4e00\u6761\uff0c\u8fd4\u56de\u6700\u65b0\u6570\u636e"},"9.5.2 \u65b0\u589e\u4e00\u6761\uff0c\u8fd4\u56de\u6700\u65b0\u6570\u636e"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar newEntity = repository.InsertNow(user);\n\n// \u793a\u4f8b\u4e09\nvar newEntity = user.InsertNow();\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e8c\nvar newEntity = await repository.InsertNowAsync(user); // \u6709\u4e09\u4e2a\u91cd\u8f7d\n\n// \u793a\u4f8b\u56db\nvar newEntity = await user.InsertNowAsync();  // \u6709\u4e09\u4e2a\u91cd\u8f7d\n")),Object(o.b)("h2",{id:"953-\u65b0\u589e\u591a\u6761\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"9.5.3 \u65b0\u589e\u591a\u6761\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.Insert(user, user2);\n\n// \u793a\u4f8b\u4e8c\nrepository.Insert(new List<User> { user, user2 });\n\n// \u793a\u4f8b\u4e09\nrepository.Insert(new[] {user, user2 });\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertAsync(user, user2);\n\n// \u793a\u4f8b\u4e8c\nawait repository.InsertAsync(new List<User> { user, user2 });\n\n// \u793a\u4f8b\u4e09\nawait repository.InsertAsync(new[] {user, user2 });\n")),Object(o.b)("h2",{id:"954-\u65b0\u589e\u591a\u6761\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"9.5.4 \u65b0\u589e\u591a\u6761\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.InsertNow(user, user2);\n\n// \u793a\u4f8b\u4e8c\nrepository.InsertNow(new List<User> { user, user2 });\n\n// \u793a\u4f8b\u4e09\nrepository.InsertNow(new[] {user, user2 });\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertNowAsync(user, user2);\n\n// \u793a\u4f8b\u4e8c\nawait repository.InsertNowAsync(new List<User> { user, user2 });\n\n// \u793a\u4f8b\u4e09\nawait repository.InsertNowAsync(new[] {user, user2 });\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u77e5\u8bc6")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u6240\u6709\u5e26 ",Object(o.b)("inlineCode",{parentName:"p"},"Now")," \u7ed3\u5c3e\u7684\u8868\u793a\u7acb\u5373\u63d0\u4ea4\u5230\u6570\u636e\u5e93\uff0c\u4e5f\u5c31\u662f\u7acb\u5373\u8c03\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"SaveChanges")," \u6216 ",Object(o.b)("inlineCode",{parentName:"p"},"SaveChangesAsync"),"\u3002"))),Object(o.b)("h2",{id:"955-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.5.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))))}p.isMDXComponent=!0},198:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),p=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},l=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),l=r,m=u["".concat(s,".").concat(l)]||u[l]||b[l]||o;return t?a.a.createElement(m,c(c({ref:n},d),{},{components:t})):a.a.createElement(m,c({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=l;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var d=2;d<o;d++)s[d]=t[d];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);
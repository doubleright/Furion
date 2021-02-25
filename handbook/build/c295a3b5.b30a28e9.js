(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(199)),c=(n(17),{slug:"httpcontext",title:"2. HttpContext \u5e94\u7528",author:"dotNET China",author_title:"\u4e3a\u4e2d\u56fd .NET \u5f00\u53d1\u8005\u63d0\u4f9b\u4f18\u8d28\u7684\u8d44\u8baf\u548c\u6280\u672f\u5206\u4eab\u3002",author_url:"https://www.chinadot.net",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5","httpcontext"]}),p={permalink:"/furion/blog/httpcontext",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/blog/2021-02-01-httpcontext.mdx",source:"@site/blog\\2021-02-01-httpcontext.mdx",description:"HttpContext \u91cd\u5927\u8c03\u6574",date:"2021-02-01T00:00:00.000Z",tags:[{label:"furion",permalink:"/furion/blog/tags/furion"},{label:"furos",permalink:"/furion/blog/tags/furos"},{label:".net",permalink:"/furion/blog/tags/net"},{label:".netcore",permalink:"/furion/blog/tags/netcore"},{label:".net5",permalink:"/furion/blog/tags/net-5"},{label:"httpcontext",permalink:"/furion/blog/tags/httpcontext"}],title:"2. HttpContext \u5e94\u7528",readingTime:.775,truncated:!0,prevItem:{title:"3. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",permalink:"/furion/blog/fileupload-download"},nextItem:{title:"1. Furion \u4ecb\u7ecd",permalink:"/furion/blog/welcome"}},i=[{value:"HttpContext \u91cd\u5927\u8c03\u6574",id:"httpcontext-\u91cd\u5927\u8c03\u6574",children:[]},{value:"HttpContext \u591a\u79cd\u83b7\u53d6\u65b9\u5f0f",id:"httpcontext-\u591a\u79cd\u83b7\u53d6\u65b9\u5f0f",children:[{value:"\u5728 <code>ControllerBase</code> \u6d3e\u751f\u7c7b\u4e2d",id:"\u5728-controllerbase-\u6d3e\u751f\u7c7b\u4e2d",children:[]},{value:"\u901a\u8fc7\u6ce8\u5165 <code>IHttpContextAccessor</code>",id:"\u901a\u8fc7\u6ce8\u5165-ihttpcontextaccessor",children:[]},{value:"\u901a\u8fc7 <code>HttpContextLocal</code> \u9759\u6001\u7c7b",id:"\u901a\u8fc7-httpcontextlocal-\u9759\u6001\u7c7b",children:[]},{value:"\u901a\u8fc7 <code>App.HttpContext</code>",id:"\u901a\u8fc7-apphttpcontext",children:[]}]},{value:"<code>HttpContext</code> \u62d3\u5c55\u65b9\u6cd5",id:"httpcontext-\u62d3\u5c55\u65b9\u6cd5",children:[{value:"\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027",id:"\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027",children:[]},{value:"\u8bbe\u7f6e <code>Swagger</code> \u81ea\u52a8\u6388\u6743",id:"\u8bbe\u7f6e-swagger-\u81ea\u52a8\u6388\u6743",children:[]},{value:"\u9000\u51fa <code>Swagger</code> \u6388\u6743",id:"\u9000\u51fa-swagger-\u6388\u6743",children:[]},{value:"\u83b7\u53d6\u672c\u5730 IP \u5730\u5740",id:"\u83b7\u53d6\u672c\u5730-ip-\u5730\u5740",children:[]},{value:"\u83b7\u53d6\u5ba2\u6237\u7aef IP \u5730\u5740",id:"\u83b7\u53d6\u5ba2\u6237\u7aef-ip-\u5730\u5740",children:[]},{value:"\u5224\u65ad\u662f\u5426\u662f <code>Ajax</code> \u8bf7\u6c42",id:"\u5224\u65ad\u662f\u5426\u662f-ajax-\u8bf7\u6c42",children:[]}]}],l={toc:i};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"httpcontext-\u91cd\u5927\u8c03\u6574"},"HttpContext \u91cd\u5927\u8c03\u6574"),Object(a.b)("p",null,"\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"ASP.NET")," \u7684\u65f6\u4ee3\uff0c\u6211\u4eec\u901a\u5e38\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"HttpContext")," \u5168\u5c40\u9759\u6001\u7c7b\u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587\uff0c\u4f46\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u4e2d\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"HttpContext")," \u662f\u4e00\u4e2a\u975e\u9759\u6001\u7684\u62bd\u8c61\u7c7b\uff0c\u65e0\u6cd5\u624b\u52a8\u521b\u5efa\uff0c\u4e5f\u65e0\u6cd5\u901a\u8fc7\u9759\u6001\u83b7\u53d6\u3002"),Object(a.b)("p",null,"\u867d\u7136\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u4e2d\u65e0\u6cd5\u76f4\u63a5\u83b7\u53d6 ",Object(a.b)("inlineCode",{parentName:"p"},"HttpContext")," \u5bf9\u8c61\u3002\u4f46\u662f\u5fae\u8f6f\u4e5f\u63d0\u4f9b\u4e86\u6ce8\u5165 ",Object(a.b)("inlineCode",{parentName:"p"},"IHttpContextAccessor")," \u65b9\u5f0f\u83b7\u53d6\u3002"),Object(a.b)("h2",{id:"httpcontext-\u591a\u79cd\u83b7\u53d6\u65b9\u5f0f"},"HttpContext \u591a\u79cd\u83b7\u53d6\u65b9\u5f0f"),Object(a.b)("h3",{id:"\u5728-controllerbase-\u6d3e\u751f\u7c7b\u4e2d"},"\u5728 ",Object(a.b)("inlineCode",{parentName:"h3"},"ControllerBase")," \u6d3e\u751f\u7c7b\u4e2d"),Object(a.b)("p",null,"\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"ControllerBase")," \u6d3e\u751f\u7c7b\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"HttpContext")," \u5c5e\u6027\u83b7\u53d6 ",Object(a.b)("inlineCode",{parentName:"p"},"HttpContext")," \u5bf9\u8c61\u3002"),Object(a.b)("h3",{id:"\u901a\u8fc7\u6ce8\u5165-ihttpcontextaccessor"},"\u901a\u8fc7\u6ce8\u5165 ",Object(a.b)("inlineCode",{parentName:"h3"},"IHttpContextAccessor")),Object(a.b)("p",null,"\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u9ed8\u8ba4\u5df2\u7ecf\u6ce8\u518c\u4e86 ",Object(a.b)("inlineCode",{parentName:"p"},"IHttpContextAccessor")," \u670d\u52a1\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165\u8be5\u5bf9\u8c61\u83b7\u53d6\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:"{3,5}","{3,5}":!0}),"public class AppService\n{\n    public AppService(IHttpContextAccessor httpContextAccessor)\n    {\n        var httpContext = httpContextAccessor.HttpContext;\n    }\n}\n")),Object(a.b)("h3",{id:"\u901a\u8fc7-httpcontextlocal-\u9759\u6001\u7c7b"},"\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"h3"},"HttpContextLocal")," \u9759\u6001\u7c7b"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86 ",Object(a.b)("inlineCode",{parentName:"p"},"HttpContextLocal")," \u9759\u6001\u7c7b\u65b9\u5f0f\u83b7\u53d6 ",Object(a.b)("inlineCode",{parentName:"p"},"HttpContext"),"\uff0c\u5982\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var HttpContext = HttpContextLocal.Current();\n")),Object(a.b)("h3",{id:"\u901a\u8fc7-apphttpcontext"},"\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"h3"},"App.HttpContext")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"App")," \u9759\u6001\u7c7b\u4e5f\u63d0\u4f9b\u4e86 ",Object(a.b)("inlineCode",{parentName:"p"},"App.HttpContext")," \u83b7\u53d6 ",Object(a.b)("inlineCode",{parentName:"p"},"HttpContext")," \u5bf9\u8c61\u3002"),Object(a.b)("h2",{id:"httpcontext-\u62d3\u5c55\u65b9\u6cd5"},Object(a.b)("inlineCode",{parentName:"h2"},"HttpContext")," \u62d3\u5c55\u65b9\u6cd5"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"HttpContext")," \u62d3\u5c55\u65b9\u6cd5"),Object(a.b)("h3",{id:"\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027"},"\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var attribute = httpContext.GetMetadata<SomeAttribute>();\n")),Object(a.b)("h3",{id:"\u8bbe\u7f6e-swagger-\u81ea\u52a8\u6388\u6743"},"\u8bbe\u7f6e ",Object(a.b)("inlineCode",{parentName:"h3"},"Swagger")," \u81ea\u52a8\u6388\u6743"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),'httpContext.SigninToSwagger("\u4f60\u7684token");\n')),Object(a.b)("h3",{id:"\u9000\u51fa-swagger-\u6388\u6743"},"\u9000\u51fa ",Object(a.b)("inlineCode",{parentName:"h3"},"Swagger")," \u6388\u6743"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"httpContext.SignoutToSwagger();\n")),Object(a.b)("h3",{id:"\u83b7\u53d6\u672c\u5730-ip-\u5730\u5740"},"\u83b7\u53d6\u672c\u5730 IP \u5730\u5740"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var ipv4 = httpContext.GetLocalIpAddressToIPv4();\nvar ipv6 = httpContext.GetLocalIpAddressToIPv6();\n")),Object(a.b)("h3",{id:"\u83b7\u53d6\u5ba2\u6237\u7aef-ip-\u5730\u5740"},"\u83b7\u53d6\u5ba2\u6237\u7aef IP \u5730\u5740"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var ipv4 = httpContext.GetRemoteIpAddressToIPv4();\nvar ipv6 = httpContext.GetRemoteIpAddressToIPv6();\n")),Object(a.b)("h3",{id:"\u5224\u65ad\u662f\u5426\u662f-ajax-\u8bf7\u6c42"},"\u5224\u65ad\u662f\u5426\u662f ",Object(a.b)("inlineCode",{parentName:"h3"},"Ajax")," \u8bf7\u6c42"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var isAjaxRequest = httpContext.IsAjaxRequest();\n")))}b.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=b(n),s=r,O=d["".concat(c,".").concat(s)]||d[s]||u[s]||a;return n?o.a.createElement(O,p(p({ref:t},l),{},{components:n})):o.a.createElement(O,p({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);
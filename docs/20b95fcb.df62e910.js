(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{198:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return g}));var n=a(0),r=a.n(n);function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},b=Object.keys(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var O=r.a.createContext({}),j=function(t){var e=r.a.useContext(O),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=j(t.components);return r.a.createElement(O.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,b=t.originalType,c=t.parentName,O=l(t,["components","mdxType","originalType","parentName"]),p=j(a),m=n,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||b;return a?r.a.createElement(g,i(i({ref:e},O),{},{components:a})):r.a.createElement(g,i({ref:e},O))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var b=a.length,c=new Array(b);c[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:n,c[1]=i;for(var O=2;O<b;O++)c[O]=a[O];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return l})),a.d(e,"toc",(function(){return O})),a.d(e,"default",(function(){return p}));var n=a(3),r=a(7),b=(a(0),a(198)),c=a(17),i={id:"benchmark",title:"29.3 \u57fa\u51c6\u6d4b\u8bd5",sidebar_label:"29.3 \u57fa\u51c6\u6d4b\u8bd5"},l={unversionedId:"benchmark",id:"benchmark",isDocsHomePage:!1,title:"29.3 \u57fa\u51c6\u6d4b\u8bd5",description:"29.3.1 \u57fa\u51c6\u6d4b\u8bd5",source:"@site/docs\\benchmark.mdx",slug:"/benchmark",permalink:"/docs/benchmark",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/benchmark.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1612234434,sidebar_label:"29.3 \u57fa\u51c6\u6d4b\u8bd5",sidebar:"docs",previous:{title:"29.2 \u6027\u80fd\u6d4b\u8bd5",permalink:"/docs/performance"},next:{title:"30. \u8d21\u732e\u6307\u5357",permalink:"/docs/contribute"}},O=[{value:"29.3.1 \u57fa\u51c6\u6d4b\u8bd5",id:"2931-\u57fa\u51c6\u6d4b\u8bd5",children:[]},{value:"29.3.2 \u57fa\u51c6\u6d4b\u8bd5\u7279\u8d28\u53ca\u610f\u4e49",id:"2932-\u57fa\u51c6\u6d4b\u8bd5\u7279\u8d28\u53ca\u610f\u4e49",children:[{value:"29.3.2.1 \u7279\u8d28",id:"29321-\u7279\u8d28",children:[]},{value:"29.3.2.2 \u610f\u4e49",id:"29322-\u610f\u4e49",children:[]}]},{value:"29.3.3 <code>BenchmarkDotNet</code>",id:"2933-benchmarkdotnet",children:[{value:"29.3.3.1 \u5982\u4f55\u4f7f\u7528",id:"29331-\u5982\u4f55\u4f7f\u7528",children:[]},{value:"29.3.3.2 \u67e5\u770b\u7ed3\u679c",id:"29332-\u67e5\u770b\u7ed3\u679c",children:[]},{value:"29.3.3.3 \u5bfc\u51fa\u62a5\u8868",id:"29333-\u5bfc\u51fa\u62a5\u8868",children:[]}]},{value:"29.3.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"2934-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],j={toc:O};function p(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(b.b)("wrapper",Object(n.a)({},j,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"2931-\u57fa\u51c6\u6d4b\u8bd5"},"29.3.1 \u57fa\u51c6\u6d4b\u8bd5"),Object(b.b)("p",null,"\u57fa\u51c6\u6d4b\u8bd5\uff08benchmarking\uff09\u662f\u4e00\u79cd\u6d4b\u91cf\u548c\u8bc4\u4f30\u8f6f\u4ef6\u6027\u80fd\u6307\u6807\u7684\u6d3b\u52a8\u3002\u4f60\u53ef\u4ee5\u5728\u67d0\u4e2a\u65f6\u5019\u901a\u8fc7\u57fa\u51c6\u6d4b\u8bd5\u5efa\u7acb\u4e00\u4e2a\u5df2\u77e5\u7684\u6027\u80fd\u6c34\u5e73\uff08\u79f0\u4e3a\u57fa\u51c6\u7ebf\uff09\uff0c\u5f53\u7cfb\u7edf\u7684\u8f6f\u786c\u4ef6\u73af\u5883\u53d1\u751f\u53d8\u5316\u4e4b\u540e\u518d\u8fdb\u884c\u4e00\u6b21\u57fa\u51c6\u6d4b\u8bd5\u4ee5\u786e\u5b9a\u90a3\u4e9b\u53d8\u5316\u5bf9\u6027\u80fd\u7684\u5f71\u54cd\u3002\u8fd9\u662f\u57fa\u51c6\u6d4b\u8bd5\u6700\u5e38\u89c1\u7684\u7528\u9014\u3002\u5176\u4ed6\u7528\u9014\u5305\u62ec\u6d4b\u5b9a\u67d0\u79cd\u8d1f\u8f7d\u6c34\u5e73\u4e0b\u7684\u6027\u80fd\u6781\u9650\u3001\u7ba1\u7406\u7cfb\u7edf\u6216\u73af\u5883\u7684\u53d8\u5316\u3001\u53d1\u73b0\u53ef\u80fd\u5bfc\u81f4\u6027\u80fd\u95ee\u9898\u7684\u6761\u4ef6\uff0c\u7b49\u7b49\u3002"),Object(b.b)("h2",{id:"2932-\u57fa\u51c6\u6d4b\u8bd5\u7279\u8d28\u53ca\u610f\u4e49"},"29.3.2 \u57fa\u51c6\u6d4b\u8bd5\u7279\u8d28\u53ca\u610f\u4e49"),Object(b.b)("h3",{id:"29321-\u7279\u8d28"},"29.3.2.1 \u7279\u8d28"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u53ef\u91cd\u590d\u6027"),"\uff1a\u53ef\u8fdb\u884c\u91cd\u590d\u6027\u7684\u6d4b\u8bd5\uff0c\u8fd9\u6837\u505a\u6709\u5229\u4e8e\u6bd4\u8f83\u6bcf\u6b21\u7684\u6d4b\u8bd5\u7ed3\u679c\uff0c\u5f97\u5230\u6027\u80fd\u7ed3\u679c\u7684\u957f\u671f\u53d8\u5316\u8d8b\u52bf\uff0c\u4e3a\u7cfb\u7edf\u8c03\u4f18\u548c\u4e0a\u7ebf\u524d\u7684\u5bb9\u91cf\u89c4\u5212\u505a\u53c2\u8003\u3002"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u53ef\u89c2\u6d4b\u6027"),"\uff1a\u901a\u8fc7\u5168\u65b9\u4f4d\u7684\u76d1\u63a7\uff08\u5305\u62ec\u6d4b\u8bd5\u5f00\u59cb\u5230\u7ed3\u675f\uff0c\u6267\u884c\u673a\u3001\u670d\u52a1\u5668\u3001\u6570\u636e\u5e93\uff09\uff0c\u53ca\u65f6\u4e86\u89e3\u548c\u5206\u6790\u6d4b\u8bd5\u8fc7\u7a0b\u53d1\u751f\u4e86\u4ec0\u4e48\u3002"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u53ef\u5c55\u793a\u6027"),"\uff1a\u76f8\u5173\u4eba\u5458\u53ef\u4ee5\u76f4\u89c2\u660e\u4e86\u7684\u4e86\u89e3\u6d4b\u8bd5\u7ed3\u679c\uff08web \u754c\u9762\u3001\u4eea\u8868\u76d8\u3001\u6298\u7ebf\u56fe\u6811\u72b6\u56fe\u7b49\u5f62\u5f0f\uff09\u3002"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u771f\u5b9e\u6027"),"\uff1a\u6d4b\u8bd5\u7684\u7ed3\u679c\u53cd\u6620\u4e86\u5ba2\u6237\u4f53\u9a8c\u5230\u7684\u771f\u5b9e\u7684\u60c5\u51b5\uff08\u771f\u5b9e\u51c6\u786e\u7684\u4e1a\u52a1\u573a\u666f+\u4e0e\u751f\u4ea7\u4e00\u81f4\u7684\u914d\u7f6e+\u5408\u7406\u6b63\u786e\u7684\u6d4b\u8bd5\u65b9\u6cd5\uff09\u3002"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u53ef\u6267\u884c\u6027"),"\uff1a\u76f8\u5173\u4eba\u5458\u53ef\u4ee5\u5feb\u901f\u7684\u8fdb\u884c\u6d4b\u8bd5\u9a8c\u8bc1\u4fee\u6539\u8c03\u4f18\uff08\u53ef\u5b9a\u4f4d\u53ef\u5206\u6790\uff09\u3002")),Object(b.b)("h3",{id:"29322-\u610f\u4e49"},"29.3.2.2 \u610f\u4e49"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4e3a\u5bb9\u91cf\u89c4\u5212\u786e\u5b9a\u7cfb\u7edf\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u6781\u9650\uff1b"),Object(b.b)("li",{parentName:"ul"},"\u4e3a\u914d\u7f6e\u6d4b\u8bd5\u7684\u53c2\u6570\u548c\u914d\u7f6e\u9009\u9879\u63d0\u4f9b\u53c2\u8003\u4f9d\u636e\uff1b"),Object(b.b)("li",{parentName:"ul"},"\u4e3a\u9a8c\u6536\u6d4b\u8bd5\u786e\u5b9a\u7cfb\u7edf\u662f\u5426\u5177\u5907\u81ea\u5df1\u6240\u5ba3\u79f0\u7684\u80fd\u529b\uff1b"),Object(b.b)("li",{parentName:"ul"},"\u4e3a\u6027\u80fd\u57fa\u7ebf\u7684\u5efa\u7acb\u63d0\u4f9b\u957f\u671f\u7684\u6570\u636e\u7edf\u8ba1\u6765\u6e90\u4ee5\u53ca\u6bd4\u8f83\u57fa\u51c6\uff1b")),Object(b.b)("h2",{id:"2933-benchmarkdotnet"},"29.3.3 ",Object(b.b)("inlineCode",{parentName:"h2"},"BenchmarkDotNet")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"BenchmarkDotNet")," \u662f ",Object(b.b)("inlineCode",{parentName:"p"},".NET")," \u5e73\u53f0\u63d0\u4f9b\u7684\u57fa\u51c6\u6d4b\u8bd5\u5de5\u5177\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"BenchmarkDotNet")," \u53ef\u5e2e\u52a9\u60a8\u5c06\u65b9\u6cd5\u8f6c\u6362\u4e3a\u57fa\u51c6\uff0c\u8ddf\u8e2a\u5176\u6027\u80fd\uff0c\u5e76\u5171\u4eab\u53ef\u91cd\u590d\u7684\u6d4b\u91cf\u5b9e\u9a8c\u3002",Object(b.b)("inlineCode",{parentName:"p"},"BenchmarkDotNet")," \u53ef\u4fdd\u62a4\u60a8\u514d\u53d7\u6d41\u884c\u7684\u57fa\u51c6\u6d4b\u8bd5\u9519\u8bef\uff0c\u5e76\u5728\u57fa\u51c6\u8bbe\u8ba1\u6216\u83b7\u5f97\u7684\u6d4b\u91cf\u4e2d\u51fa\u73b0\u95ee\u9898\u65f6\u8b66\u544a\u60a8\u3002\u7ed3\u679c\u4ee5\u7528\u6237\u53cb\u597d\u7684\u5f62\u5f0f\u5448\u73b0\uff0c\u7a81\u51fa\u663e\u793a\u4e86\u6709\u5173\u5b9e\u9a8c\u7684\u6240\u6709\u91cd\u8981\u4e8b\u5b9e\u3002"),Object(b.b)("h3",{id:"29331-\u5982\u4f55\u4f7f\u7528"},"29.3.3.1 \u5982\u4f55\u4f7f\u7528"),Object(b.b)("p",null,"\u521b\u5efa\u4e00\u4e2a ",Object(b.b)("inlineCode",{parentName:"p"},"\u63a7\u5236\u53f0")," \u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u901a\u8fc7 ",Object(b.b)("inlineCode",{parentName:"p"},"Nuget")," \u6309\u7167 ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.nuget.org/packages/BenchmarkDotNet/"}),"BenchmarkDotNet")," \u62d3\u5c55\u5305\u3002\u7f16\u5199\u6d4b\u8bd5\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cs",metastring:"{3-4,22,25,33}","{3-4,22,25,33}":!0}),"using System;\nusing System.Security.Cryptography;\nusing BenchmarkDotNet.Attributes;\nusing BenchmarkDotNet.Running;\n\nnamespace MyBenchmarks\n{\n    public class Md5VsSha256\n    {\n        private const int N = 10000;\n        private readonly byte[] data;\n\n        private readonly SHA256 sha256 = SHA256.Create();\n        private readonly MD5 md5 = MD5.Create();\n\n        public Md5VsSha256()\n        {\n            data = new byte[N];\n            new Random(42).NextBytes(data);\n        }\n\n        [Benchmark]\n        public byte[] Sha256() => sha256.ComputeHash(data);\n\n        [Benchmark]\n        public byte[] Md5() => md5.ComputeHash(data);\n    }\n\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            var summary = BenchmarkRunner.Run<Md5VsSha256>();\n        }\n    }\n}\n")),Object(b.b)("h3",{id:"29332-\u67e5\u770b\u7ed3\u679c"},"29.3.3.2 \u67e5\u770b\u7ed3\u679c"),Object(b.b)("p",null,"\u8fd0\u884c\u63a7\u5236\u5668\u7a0b\u5e8f\uff0c\u5c06\u5f97\u5230\u4ee5\u4e0b\u7ed3\u679c"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"BenchmarkDotNet=v0.12.0, OS=Windows 10.0.17763.805 (1809/October2018Update/Redstone5)\nIntel Core i7-7700K CPU 4.20GHz (Kaby Lake), 1 CPU, 8 logical and 4 physical cores\n  [Host]       : .NET Framework 4.7.2 (4.7.3468.0), X64 RyuJIT\n  Net472       : .NET Framework 4.7.2 (4.7.3468.0), X64 RyuJIT\n  NetCoreApp30 : .NET Core 3.0.0 (CoreCLR 4.700.19.46205, CoreFX 4.700.19.46214), X64 RyuJIT\n  CoreRt30     : .NET CoreRT 1.0.28231.02 @Commit: 741d61493c560ba96e8151f9e56876d4d3828489, X64 AOT\n  Mono         : Mono 6.4.0 (Visual Studio), X64\n")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Runtime"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"N"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Mean"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Error"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"StdDev"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Ratio"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sha256"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),".NET 4.7.2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"7.735 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.1913 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.4034 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1.00")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sha256"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),".NET Core 3.0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"3.989 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.0796 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.0745 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.50")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sha256"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CoreRt 3.0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"4.091 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.0811 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.1562 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.53")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sha256"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mono"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"13.117 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.2485 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.5019 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1.70")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Md5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),".NET 4.7.2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"2.872 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.0552 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.0737 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1.00")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Md5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),".NET Core 3.0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1.848 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.0348 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.0326 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.64")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Md5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CoreRt 3.0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1.817 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.0359 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.0427 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.63")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Md5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mono"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"3.574 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.0678 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.0753 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1.24")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sha256"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),".NET 4.7.2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"74.509 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1.5787 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"4.6052 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1.00")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sha256"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),".NET Core 3.0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"36.049 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.7151 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1.0025 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.49")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sha256"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CoreRt 3.0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"36.253 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.7076 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.7571 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.49")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sha256"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mono"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"116.350 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"2.2555 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"3.0110 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1.58")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Md5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),".NET 4.7.2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"17.308 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.3361 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.4250 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1.00")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Md5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),".NET Core 3.0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"15.726 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.2064 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.1930 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.90")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Md5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CoreRt 3.0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"15.627 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.2631 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.2461 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.89")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Md5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mono"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"30.205 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.5868 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"0.6522 us"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1.74")))),Object(b.b)("h3",{id:"29333-\u5bfc\u51fa\u62a5\u8868"},"29.3.3.3 \u5bfc\u51fa\u62a5\u8868"),Object(b.b)("p",null,"\u4e5f\u53ef\u4ee5\u5bfc\u51fa\u5404\u79cd\u56fe\u8868"),Object(b.b)("img",{src:Object(c.a)("img/bm1.png")}),Object(b.b)("h2",{id:"2934-\u53cd\u9988\u4e0e\u5efa\u8bae"},"29.3.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))),Object(b.b)("hr",null),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e86\u89e3\u66f4\u591a")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",Object(b.b)("inlineCode",{parentName:"p"},"BenchmarkDotNet")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://benchmarkdotnet.org/"}),"BenchmarkDotNet \u5b98\u7f51"),"\u3002"))))}p.isMDXComponent=!0}}]);
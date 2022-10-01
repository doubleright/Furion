"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7245],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||a;return t?i.createElement(k,o(o({ref:n},u),{},{components:t})):i.createElement(k,o({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1444:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var i=t(3117),r=t(102),a=(t(7294),t(3905)),o=t(4996),l=["components"],p={id:"serverun",title:"2.0 \u5165\u95e8\u6307\u5357",sidebar_label:"2.0 \u5165\u95e8\u6307\u5357"},s=void 0,u={unversionedId:"serverun",id:"serverun",title:"2.0 \u5165\u95e8\u6307\u5357",description:"",source:"@site/docs/serverun.mdx",sourceDirName:".",slug:"/serverun",permalink:"/docs/serverun",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/serverun.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1663293204,formattedLastUpdatedAt:"Sep 16, 2022",frontMatter:{id:"serverun",title:"2.0 \u5165\u95e8\u6307\u5357",sidebar_label:"2.0 \u5165\u95e8\u6307\u5357"},sidebar:"docs",previous:{title:"1.9 \u5173\u4e8e\u6846\u67b6\u5b9a\u4f4d",permalink:"/docs/position"},next:{title:"2.1 ASP.NET 5 \u96c6\u6210",permalink:"/docs/get-start"}},m={},d=[{value:"2.0.1 \u5386\u53f2\u80cc\u666f",id:"201-\u5386\u53f2\u80cc\u666f",level:2},{value:"2.0.2 \u521b\u5efa <code>\u63a7\u5236\u53f0</code> \u9879\u76ee",id:"202-\u521b\u5efa-\u63a7\u5236\u53f0-\u9879\u76ee",level:2},{value:"2.0.3 \u6dfb\u52a0 <code>Furion</code> \u4f9d\u8d56\u5305",id:"203-\u6dfb\u52a0-furion-\u4f9d\u8d56\u5305",level:2},{value:"2.0.4 \u4e00\u53e5\u8bdd\u641e\u5b9a",id:"204-\u4e00\u53e5\u8bdd\u641e\u5b9a",level:2},{value:"2.0.5 \u542f\u52a8\u6d4f\u89c8\u5668",id:"205-\u542f\u52a8\u6d4f\u89c8\u5668",level:2},{value:"2.0.6 \u7f16\u5199\u7b2c\u4e00\u4e2a <code>API</code>",id:"206-\u7f16\u5199\u7b2c\u4e00\u4e2a-api",level:2},{value:"2.0.7 <code>Serve.Run()</code> \u66f4\u591a\u914d\u7f6e",id:"207-serverun-\u66f4\u591a\u914d\u7f6e",level:2},{value:"2.0.7.1 \u914d\u7f6e\u9ed8\u8ba4\u7aef\u53e3",id:"2071-\u914d\u7f6e\u9ed8\u8ba4\u7aef\u53e3",level:3},{value:"2.0.7.2 \u81ea\u5b9a\u4e49\u914d\u7f6e",id:"2072-\u81ea\u5b9a\u4e49\u914d\u7f6e",level:3},{value:"2.0.7.3 <code>Serve.Run</code> \u548c <code>Startup</code> \u6700\u4f73\u7ec4\u5408",id:"2073-serverun-\u548c-startup-\u6700\u4f73\u7ec4\u5408",level:3},{value:"2.0.7.4 \u66f4\u591a\u914d\u7f6e",id:"2074-\u66f4\u591a\u914d\u7f6e",level:3},{value:"2.0.8 \u652f\u6301 <code>Furion</code> \u6240\u6709\u529f\u80fd",id:"208-\u652f\u6301-furion-\u6240\u6709\u529f\u80fd",level:2},{value:"2.0.8.1 \u6dfb\u52a0 <code>appsettings.json</code>",id:"2081-\u6dfb\u52a0-appsettingsjson",level:3},{value:"2.0.8.2 \u6dfb\u52a0\u81ea\u5b9a\u4e49 <code>Startup</code>",id:"2082-\u6dfb\u52a0\u81ea\u5b9a\u4e49-startup",level:3},{value:"2.0.8.3 \u5c06\u63a7\u5236\u53f0\u9879\u76ee\u53d8\u6210 <code>Web</code> \u9879\u76ee",id:"2083-\u5c06\u63a7\u5236\u53f0\u9879\u76ee\u53d8\u6210-web-\u9879\u76ee",level:3},{value:"2.0.8.4 \u6dfb\u52a0 <code>args</code> \u542f\u52a8\u53c2\u6570",id:"2084-\u6dfb\u52a0-args-\u542f\u52a8\u53c2\u6570",level:3},{value:"2.0.8.5 \u8fd8\u6ca1\u770b\u591f\uff1f",id:"2085-\u8fd8\u6ca1\u770b\u591f",level:3},{value:"2.0.9 <code>RunOptions</code>\uff0c<code>LegacyRunOptions</code> \u548c <code>GenericRunOptions</code>",id:"209-runoptionslegacyrunoptions-\u548c-genericrunoptions",level:2},{value:"2.0.10 \u5728 <code>Winform/WPF</code> \u684c\u9762\u4e2d\u4f7f\u7528",id:"2010-\u5728-winformwpf-\u684c\u9762\u4e2d\u4f7f\u7528",level:2},{value:"2.0.10.1 \u6dfb\u52a0\u66f4\u591a\u670d\u52a1",id:"20101-\u6dfb\u52a0\u66f4\u591a\u670d\u52a1",level:3},{value:"2.0.11 \u9759\u9ed8\u542f\u52a8",id:"2011-\u9759\u9ed8\u542f\u52a8",level:2},{value:"2.0.12 <code>.NET5</code> \u6a21\u5f0f\u627e\u4e0d\u5230 <code>Views</code> \u89c6\u56fe\u8def\u5f84",id:"2012-net5-\u6a21\u5f0f\u627e\u4e0d\u5230-views-\u89c6\u56fe\u8def\u5f84",level:2},{value:"2.0.13 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"2013-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],c={toc:d};function k(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion 3.6.3 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,a.kt)("admonition",{title:"\u63a8\u8350\u4f7f\u7528\u811a\u624b\u67b6",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u5b98\u65b9\u63d0\u4f9b\u4e86\u975e\u5e38\u7075\u6d3b\u65b9\u4fbf\u7684\u811a\u624b\u67b6\uff0c\u53ef\u4ee5\u5feb\u901f\u7684\u521b\u5efa\u591a\u5c42\u67b6\u6784\u9879\u76ee\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u63a8\u8350\u4f7f\u7528 \u300a",(0,a.kt)("a",{parentName:"p",href:"/docs/template"},"2.2 \u5b98\u65b9\u811a\u624b\u67b6"),"\u300b\u4ee3\u66ff\u672c\u7ae0\u8282\u529f\u80fd\u3002")),(0,a.kt)("h2",{id:"201-\u5386\u53f2\u80cc\u666f"},"2.0.1 \u5386\u53f2\u80cc\u666f"),(0,a.kt)("p",null,"\u76f8\u4fe1\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"ASP.NET 5")," \u5347\u7ea7\u81f3 ",(0,a.kt)("inlineCode",{parentName:"p"},"ASP.NET 6")," \u7684\u5f00\u53d1\u8005\u90fd\u7ecf\u5386\u8fc7\u8fd9\u6837\u53d8\u66f4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"ASP.NET 5")," \u4e2d\uff0c\u6211\u4eec\u8fd9\u6837\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"Web \u4e3b\u673a"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers {1} title="Program.cs"',showLineNumbers:!0,"{1}":!0,title:'"Program.cs"'},"Host.CreateDefaultBuilder(args)\n    .ConfigureWebHostDefaults(webBuilder =>\n    {\n        webBuilder.UseStartup<Startup>();\n    });\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"ASP.NET 6")," \u4e2d\uff0c \u6211\u4eec\u8fd9\u6837\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"Web \u4e3b\u673a"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers {1} title="Program.cs"',showLineNumbers:!0,"{1}":!0,title:'"Program.cs"'},"var builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\n")),(0,a.kt)("p",null,"\u8bd5\u95ee\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ASP.NET 7"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ASP.NET 8")," ... ",(0,a.kt)("inlineCode",{parentName:"p"},"ASP.NET N")," \u5462\uff1f\u4f1a\u4e0d\u4f1a\u6bcf\u4e00\u4e2a\u7248\u672c\u90fd\u6709\u4e0d\u540c\u7684\u521b\u5efa\u65b9\u5f0f\uff0c\u90a3\u540e\u7eed\u9879\u76ee\u5982\u4f55\u65e0\u7f1d\u5347\u7ea7\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6240\u4ee5\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u4e00\u81f4\u7684\u4ee3\u7801\u4f53\u9a8c\u548c\u540e\u7eed\u65e0\u7f1d\u5347\u7ea7\uff0c\u521b\u9020\u51fa\u4e86 ",(0,a.kt)("inlineCode",{parentName:"strong"},"Serve.Run()"),"\uff0c\u5373\u4f7f\u672a\u6765\u521b\u5efa\u65b9\u5f0f\u53d8\u4e86\uff0c\u4e5f\u4e0d\u7528\u62c5\u5fc3\uff0c\u4ea4\u7ed9\u6846\u67b6\u5373\u53ef\u3002")),(0,a.kt)("h2",{id:"202-\u521b\u5efa-\u63a7\u5236\u53f0-\u9879\u76ee"},"2.0.2 \u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"h2"},"\u63a7\u5236\u53f0")," \u9879\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"li"},"Visual Studio 2022")," \u5e76\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"\u63a7\u5236\u53f0")," \u9879\u76ee")),(0,a.kt)("img",{src:(0,o.Z)("img/01.png")}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u9879\u76ee\u540d\u79f0")),(0,a.kt)("img",{src:(0,o.Z)("img/02.png")}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"li"},".NET6"))),(0,a.kt)("img",{src:(0,o.Z)("img/03.png")}),(0,a.kt)("admonition",{title:"\u4f7f\u7528\u547d\u4ee4\u884c\u65b9\u5f0f",type:"tip"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"// \u521b\u5efa\u63a7\u5236\u53f0\u9879\u76ee\ndotnet new console -n HelloFurion\n"))),(0,a.kt)("h2",{id:"203-\u6dfb\u52a0-furion-\u4f9d\u8d56\u5305"},"2.0.3 \u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Furion")," \u4f9d\u8d56\u5305"),(0,a.kt)("img",{src:(0,o.Z)("img/04.png")}),(0,a.kt)("admonition",{title:"\u4f7f\u7528\u547d\u4ee4\u884c\u65b9\u5f0f",type:"tip"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"// \u8fdb\u5165\u521b\u5efa\u7684\u76ee\u5f55\ncd HelloFurion\n// \u6dfb\u52a0\u5305\ndotnet add package Furion\n"))),(0,a.kt)("h2",{id:"204-\u4e00\u53e5\u8bdd\u641e\u5b9a"},"2.0.4 \u4e00\u53e5\u8bdd\u641e\u5b9a"),(0,a.kt)("p",null,"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs")," \u4ee3\u7801\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers title="Program.cs"',showLineNumbers:!0,title:'"Program.cs"'},"Serve.Run();\n")),(0,a.kt)("p",null,"\u5bf9\uff0c\u4f60\u6ca1\u770b\u9519\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u5df2\u7ecf\u914d\u7f6e\u597d\u4e86\uff01"),(0,a.kt)("admonition",{title:"\u529f\u80fd\u8bf4\u660e",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Serve.Run()")," \u5df2\u7ecf\u5305\u542b\u4e86\u57fa\u672c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAPI")," \u529f\u80fd\uff0c\u5305\u542b\u52a8\u6001 ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAPI"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"\u8de8\u57df")," \u7b49\u7b49\uff0c\u5982\u9700\u5b8c\u5168\u81ea\u5b9a\u4e49\u914d\u7f6e\u53ef\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Serve.Run(RunOptions.Default)"),"\uff0c\u4e4b\u540e ",(0,a.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u6d3e\u751f\u7c7b\u81ea\u884c\u914d\u7f6e\u3002")),(0,a.kt)("h2",{id:"205-\u542f\u52a8\u6d4f\u89c8\u5668"},"2.0.5 \u542f\u52a8\u6d4f\u89c8\u5668"),(0,a.kt)("p",null,"\u542f\u52a8\u6d4f\u89c8\u5668\u67e5\u770b\u6548\u679c"),(0,a.kt)("img",{src:(0,o.Z)("img/05.png")}),(0,a.kt)("img",{src:(0,o.Z)("img/06.png")}),(0,a.kt)("p",null,"\u662f\u4e0d\u662f\u8d85\u7ea7\u8d85\u7ea7\u7b80\u5355\uff01\uff01\uff01"),(0,a.kt)("h2",{id:"206-\u7f16\u5199\u7b2c\u4e00\u4e2a-api"},"2.0.6 \u7f16\u5199\u7b2c\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"h2"},"API")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers title="Program.cs" {3,6}',showLineNumbers:!0,title:'"Program.cs"',"{3,6}":!0},'Serve.Run();\n\n[DynamicApiController]\npublic class HelloService\n{\n    public string Say()\n    {\n        return "Hello, Furion";\n    }\n}\n')),(0,a.kt)("p",null,"\u542f\u52a8\u6d4f\u89c8\u5668\u67e5\u770b\u6548\u679c"),(0,a.kt)("img",{src:(0,o.Z)("img/07.png")}),(0,a.kt)("h2",{id:"207-serverun-\u66f4\u591a\u914d\u7f6e"},"2.0.7 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Serve.Run()")," \u66f4\u591a\u914d\u7f6e"),(0,a.kt)("h3",{id:"2071-\u914d\u7f6e\u9ed8\u8ba4\u7aef\u53e3"},"2.0.7.1 \u914d\u7f6e\u9ed8\u8ba4\u7aef\u53e3"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u521b\u5efa\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Web")," \u4e3b\u673a\u7aef\u53e3\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"5000/5001")," \u7aef\u53e3\uff0c\u5982\u9700\u81ea\u5b9a\u4e49\u914d\u7f6e\uff0c\u53ef\u901a\u8fc7\u7b2c\u4e00\u4e2a\u53c2\u6570\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'Serve.Run("https://localhost:8080");\n')),(0,a.kt)("p",null,"\u540c\u65f6\u4e5f\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet run")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet watch run")," \u6307\u5b9a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"dotnet run --urls https://localhost:8080\n\n# watch \u65b9\u5f0f\ndotnet watch run --urls https://localhost:8080\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigureBuilder")," \u65b9\u5f0f\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {}",showLineNumbers:!0,"{}":!0},'Serve.Run(RunOptions.Default.ConfigureBuilder(builder =>\n{\n    builder.WebHost.UseUrls("https://localhost:8080");  // \u4e5f\u53ef\u4ee5\u901a\u8fc7 builder.Configuration \u8bfb\u53d6 urls \u914d\u7f6e\n}));\n')),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u5173\u4e8e ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"localhost")," \u548c\u591a\u7aef\u53e3"),(0,a.kt)("p",{parentName:"admonition"},"\u5efa\u8bae\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," \u4ee3\u66ff ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),"\uff0c\u8fd9\u6837\u53ef\u4ee5\u81ea\u9002\u5e94\u4e3b\u673a\u5730\u5740\uff0c\u591a\u4e2a\u7aef\u53e3\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},";")," \u5206\u5272\uff0c\u7ed3\u5c3e\u65e0\u9700 ",(0,a.kt)("inlineCode",{parentName:"p"},";"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"json")," \u65b9\u5f0f\u914d\u7f6e"),(0,a.kt)("p",{parentName:"admonition"},"\u5982\u9700\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u7aef\u53e3\uff0c\u9700\u4e24\u4e2a\u8be5\u6b65\u9aa4\uff1a"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"\u7f16\u8f91\u63a7\u5236\u53f0\u542f\u52a8\u9879\u76ee ",(0,a.kt)("inlineCode",{parentName:"li"},".csproj")," \u6587\u4ef6\uff0c\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"li"},"Project")," \u8282\u70b9\u4e3a\uff1a")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:"showLineNumbers",showLineNumbers:!0},'<Project Sdk="Microsoft.NET.Sdk.Web">\n')),(0,a.kt)("p",{parentName:"admonition"},"\u4e5f\u5c31\u662f\u5728\u539f\u6765\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Sdk")," \u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},".Web")," \u5373\u53ef\u3002"),(0,a.kt)("ol",{parentName:"admonition",start:2},(0,a.kt)("li",{parentName:"ol"},"\u5728\u63a7\u5236\u53f0\u542f\u52a8\u9879\u76ee\u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"Properties")," \u6587\u4ef6\u5939\u5e76\u5728\u6b64\u6587\u4ef6\u5939\u4e2d\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"launchSettings.json")," \u6587\u4ef6\uff0c\u540c\u65f6\u5199\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'showLineNumbers {4,8} title="launchSettings.json"',showLineNumbers:!0,"{4,8}":!0,title:'"launchSettings.json"'},'{\n  "$schema": "http://json.schemastore.org/launchsettings.json",\n  "profiles": {\n    "\u542f\u52a8\u9879\u76ee\u540d\u79f0": {\n      "commandName": "Project",\n      "launchBrowser": true,\n      "launchUrl": "",\n      "applicationUrl": "https://localhost:8080;http://localhost:8081",\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development"\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",{parentName:"admonition"},"\u9664\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"launchsettings.json")," \u7684\u65b9\u5f0f\uff0c\u8fd8\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"appsettings.json")," \u7b80\u5355\u914d\u7f6e"),(0,a.kt)("hr",{parentName:"admonition"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'showLineNumbers {2} title="appsettings.json"',showLineNumbers:!0,"{2}":!0,title:'"appsettings.json"'},'{\n  "Urls": "http://localhost:8081"\n}\n'))),(0,a.kt)("h3",{id:"2072-\u81ea\u5b9a\u4e49\u914d\u7f6e"},"2.0.7.2 \u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,a.kt)("p",null,"\u4f20\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"RunOptions")," \u5bf9\u8c61\u76f8\u5f53\u4e8e\u81ea\u7531\u5b9a\u4e49\u548c\u63a7\u5236\uff0c\u4e5f\u5c31\u662f\u9664\u4e86\u9ed8\u8ba4\u96c6\u6210\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u4ee5\u5916\uff0c\u6ca1\u6709\u6ce8\u518c\u4efb\u4f55\u529f\u80fd\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ec5\u96c6\u6210 ",(0,a.kt)("inlineCode",{parentName:"li"},"Furion")," \u7684\u9ed8\u8ba4\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"Serve.Run(RunOptions.Default);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u66f4\u591a\u670d\u52a1/\u4e2d\u95f4\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1,2,7}",showLineNumbers:!0,"{1,2,7}":!0},"Serve.Run(RunOptions.Default\n    .ConfigureBuilder(builder =>\n    {\n        builder.Services.AddControllers()\n                        .AddInject();\n    })\n    .Configure(app =>\n    {\n        app.UseRouting();\n        app.UseInject(string.Empty);\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapControllers();\n        });\n    }));\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WebComponent")," \u65b9\u5f0f")),(0,a.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion 4.3.5 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {2,4,6}",showLineNumbers:!0,"{2,4,6}":!0},"Serve.Run(RunOptions.Default\n     .AddWebComponent<XXXWebComponent>());\n\npublic class XXXWebComponent : IWebComponent\n{\n    public void Load(WebApplicationBuilder builder, ComponentContext componentContext)\n    {\n        // ....\n    }\n}\n")),(0,a.kt)("h3",{id:"2073-serverun-\u548c-startup-\u6700\u4f73\u7ec4\u5408"},"2.0.7.3 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Serve.Run")," \u548c ",(0,a.kt)("inlineCode",{parentName:"h3"},"Startup")," \u6700\u4f73\u7ec4\u5408"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"Serve.Run()")," \u5185\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8de8\u57df"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"\u63a7\u5236\u5668"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"\u8def\u7531"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"\u89c4\u8303\u5316\u7ed3\u679c"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u9759\u6001\u6587\u4ef6")," \u670d\u52a1/\u4e2d\u95f4\u4ef6\u3002\u9002\u5408\u5feb\u901f\u5f00\u59cb\u9879\u76ee\u548c\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f46\u4e0d\u80fd\u5bf9\u8fd9\u4e9b\u5df2\u6ce8\u518c\u670d\u52a1/\u4e2d\u95f4\u4ef6\u8fdb\u884c\u81ea\u5b9a\u4e49\u914d\u7f6e"),"\uff0c\u8fd9\u65f6\u53ea\u9700\u8981\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"RunOptions")," \u5c5e\u6027/\u65b9\u6cd5\u5373\u53ef\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers title="Program.cs"',showLineNumbers:!0,title:'"Program.cs"'},"Serve.Run(RunOptions.Default\n    .ConfigureBuilder(...)\n    .Configure(..));\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f46\u628a\u6240\u6709\u670d\u52a1/\u4e2d\u95f4\u4ef6\u90fd\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"strong"},"Program.cs")," \u4e2d\u597d\u5417\uff1f"),"\u7b54\u6848\u662f\u4e0d\u597d\u7684\uff0c\u56e0\u4e3a\u4f1a\u5bfc\u81f4\u540e\u7eed\u8fc1\u79fb\u4ee3\u7801\u7ef4\u62a4\u4ee3\u7801\u9020\u6210\u4e86\u4e00\u4e9b\u56f0\u6270\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u63a8\u8350\u4e0b\u9762\u66f4\u52a0\u7075\u6d3b\u4e14\u6613\u7ef4\u62a4\u7684\u65b9\u5f0f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs")," \u53ea\u9700\u4e00\u53e5\u8bdd\u5373\u53ef\uff1a"),(0,a.kt)("admonition",{title:"\u63a8\u8350\u4f7f\u7528\u7ec4\u4ef6\u542f\u52a8",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Furion 3.7.3+")," \u5b98\u65b9\u63d0\u4f9b\u4e86\u975e\u5e38\u7075\u6d3b\u65b9\u4fbf\u7684\u7ec4\u4ef6\u5316\u542f\u52a8\u914d\u7f6e\u670d\u52a1\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u63a8\u8350\u4f7f\u7528 \u300a",(0,a.kt)("a",{parentName:"p",href:"./component"},"3.1 \u7ec4\u4ef6\u5316\u542f\u52a8"),"\u300b\u4ee3\u66ff ",(0,a.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u65b9\u5f0f\u529f\u80fd\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers title="Program.cs"',showLineNumbers:!0,title:'"Program.cs"'},"Serve.Run(RunOptions.Default);\n")),(0,a.kt)("p",null,"\u7136\u540e\u6dfb\u52a0\u81ea\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u6587\u4ef6\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers {8,10,15} title="Startup.cs"',showLineNumbers:!0,"{8,10,15}":!0,title:'"Startup.cs"'},"using Furion;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace HelloFurion;\n\npublic class Startup : AppStartup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        // ....\n    }\n\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        // ....\n    }\n}\n")),(0,a.kt)("admonition",{title:"\u5c0f\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u81ea\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u6587\u4ef6\u5e94\u8be5\u653e\u5728\u72ec\u7acb\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"YourProject.Web.Core")," \u5c42\u6216\u5176\u4ed6\u5c42\u3002")),(0,a.kt)("h3",{id:"2074-\u66f4\u591a\u914d\u7f6e"},"2.0.7.4 \u66f4\u591a\u914d\u7f6e"),(0,a.kt)("p",null,"\u5982\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"WebHost"),"..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"Serve.Run(RunOptions.Default\n    .ConfigureBuilder(builder => {\n        builder.WebHost.....\n    }));\n")),(0,a.kt)("h2",{id:"208-\u652f\u6301-furion-\u6240\u6709\u529f\u80fd"},"2.0.8 \u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Furion")," \u6240\u6709\u529f\u80fd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Serve.Run()")," \u770b\u4f3c\u975e\u5e38\u7b80\u5355\uff0c\u5b9e\u5219\u975e\u5e38\u7075\u6d3b\uff0c\u800c\u4e14\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},".NET")," \u6240\u6709\u529f\u80fd\u3002"),(0,a.kt)("h3",{id:"2081-\u6dfb\u52a0-appsettingsjson"},"2.0.8.1 \u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"h3"},"appsettings.json")),(0,a.kt)("p",null,"\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"appsettings.json")," \u6587\u4ef6\uff0c\u5e76\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5c5e\u6027")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5982\u679c\u8f83\u65b0\u5219\u590d\u5236")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5185\u5bb9"),"\uff08\u751f\u6210\u64cd\u4f5c\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft": "Warning",\n      "Microsoft.Hosting.Lifetime": "Information",\n      "Microsoft.EntityFrameworkCore": "Information"\n    }\n  },\n  "AllowedHosts": "*"\n}\n')),(0,a.kt)("p",null,"\u5728\u4ee3\u7801\u4e2d\u8bfb\u53d6\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {10}",showLineNumbers:!0,"{10}":!0},'using Furion;\n\nServe.Run();\n\n[DynamicApiController]\npublic class HelloService\n{\n    public string Say()\n    {\n        return "Hello, Furion " + App.Configuration["Logging:LogLevel:Default"];\n    }\n}\n')),(0,a.kt)("img",{src:(0,o.Z)("img/08.png")}),(0,a.kt)("h3",{id:"2082-\u6dfb\u52a0\u81ea\u5b9a\u4e49-startup"},"2.0.8.2 \u6dfb\u52a0\u81ea\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Startup")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u4e2d\u53ef\u4ee5\u6d3e\u751f\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u53ef\u4ee5\u5b9e\u73b0\u66f4\u591a\u914d\u7f6e\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers title="Program.cs"',showLineNumbers:!0,title:'"Program.cs"'},"Serve.Run();\n")),(0,a.kt)("admonition",{title:"\u7279\u522b\u6ce8\u610f",type:"important"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u60f3\u81ea\u5df1\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"Web")," \u9879\u76ee\u670d\u52a1\uff0c\u53ef\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Serve.Run(RunOptions.Default);")," \u65b9\u5f0f\uff0c\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Serve.Run()")," \u5df2\u7ecf\u5305\u542b\u4e86\u5e38\u7528\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Web")," \u53ef\u80fd\u4f1a\u63d0\u793a\u91cd\u590d\u6ce8\u518c\u9519\u8bef\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers {8,10,12,15,17} title="MyStartup.cs"',showLineNumbers:!0,"{8,10,12,15,17}":!0,title:'"MyStartup.cs"'},'using Furion;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace HelloFurion;\n\npublic class MyStartup : AppStartup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        Console.WriteLine("\u8c03\u7528\u670d\u52a1\u6ce8\u518c\u5566~~");\n    }\n\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        Console.WriteLine("\u8c03\u7528\u4e2d\u95f4\u4ef6\u6ce8\u518c\u5566");\n    }\n}\n')),(0,a.kt)("img",{src:(0,o.Z)("img/09.png")}),(0,a.kt)("h3",{id:"2083-\u5c06\u63a7\u5236\u53f0\u9879\u76ee\u53d8\u6210-web-\u9879\u76ee"},"2.0.8.3 \u5c06\u63a7\u5236\u53f0\u9879\u76ee\u53d8\u6210 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Web")," \u9879\u76ee"),(0,a.kt)("p",null,"\u53ea\u9700\u8981\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," \u6587\u4ef6\uff0c\u5c06\u7b2c\u4e00\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"Project")," \u8282\u70b9\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Sdk")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:"showLineNumbers",showLineNumbers:!0},'<Project Sdk="Microsoft.NET.Sdk">\n')),(0,a.kt)("p",null,"\u4fee\u6539\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:"showLineNumbers",showLineNumbers:!0},'<Project Sdk="Microsoft.NET.Sdk.Web">\n')),(0,a.kt)("p",null,"\u5373\u53ef\u5b8c\u6210\u8f6c\u6362\uff0c\u5b9e\u9645\u4e0a\u53ea\u662f\u8ffd\u52a0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},".Web"),"\u3002"),(0,a.kt)("h3",{id:"2084-\u6dfb\u52a0-args-\u542f\u52a8\u53c2\u6570"},"2.0.8.4 \u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"h3"},"args")," \u542f\u52a8\u53c2\u6570"),(0,a.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion 4.2.4 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1,3,5}",showLineNumbers:!0,"{1,3,5}":!0},"Serve.Run(args: args);\n\nServe.Run(RunOptions.Default.WithArgs(args));\n\nServe.Run(RunOptions.Main(args));\n")),(0,a.kt)("h3",{id:"2085-\u8fd8\u6ca1\u770b\u591f"},"2.0.8.5 \u8fd8\u6ca1\u770b\u591f\uff1f"),(0,a.kt)("p",null,"\u662f\u4e0d\u662f\u975e\u5e38\u5f3a\u5927\u554a\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Serve.Run()")," \u867d\u7136\u7b80\u5355\uff0c\u4f46\u662f 100% \u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},".NET")," \u6240\u6709\u529f\u80fd\u3002\u5c3d\u60c5\u53bb\u4f53\u9a8c\u5427\uff01"),(0,a.kt)("h2",{id:"209-runoptionslegacyrunoptions-\u548c-genericrunoptions"},"2.0.9 ",(0,a.kt)("inlineCode",{parentName:"h2"},"RunOptions"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"h2"},"LegacyRunOptions")," \u548c ",(0,a.kt)("inlineCode",{parentName:"h2"},"GenericRunOptions")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Serve.Run")," \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"RunOptions"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"LegacyRunOptions")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"GenericRunOptions")," \u91cd\u8f7d\u53c2\u6570\u7c7b\u578b\uff0c\u4ed6\u4eec\u7684\u4e3b\u8981\u533a\u522b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RunOptions"),"\uff1a\u4f7f\u7528\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"WebApplication")," \u65b9\u5f0f\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"strong"},"Web")," \u4e3b\u673a\u4f18\u5148\u63a8\u8350\u65b9\u5f0f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LegacyRunOptions"),"\uff1a\u4f7f\u7528\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"Host")," \u65b9\u5f0f\uff0c\u4f46\u9ed8\u8ba4\u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"Web")," \u4e3b\u673a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GenericRunOptions"),"\uff1a\u4f7f\u7528\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"Host")," \u65b9\u5f0f\uff0c\u901a\u7528\u7c7b\u578b\u4e3b\u673a\uff0c\u53ef\u7528\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"WorkerService"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LegacyRunOptions")," \u914d\u7f6e\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {5-6,15-16}",showLineNumbers:!0,"{5-6,15-16}":!0},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.DependencyInjection;\n\nServe.Run(LegacyRunOptions.Default\n    // \u914d\u7f6e Web \u4e3b\u673a\n    .ConfigureWebDefaults(builder => builder.ConfigureServices(services =>\n        {\n            // ...\n        })\n        .Configure(app =>\n        {\n            // ...\n        });\n    })\n    // \u914d\u7f6e Host \u4e3b\u673a\n    .ConfigureBuilder(builder => builder....));\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GenericRunOptions")," \u914d\u7f6e\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {2-3}",showLineNumbers:!0,"{2-3}":!0},"Serve.Run(GenericRunOptions.Default\n    // \u914d\u7f6e Host \u4e3b\u673a\n    .ConfigureBuilder(hostBuilder => hostBuilder....);\n")),(0,a.kt)("p",null,"\u66f4\u591a\u53d1\u5e03\u547d\u4ee4\u8bf4\u660e\u53ef\u67e5\u9605\u5fae\u8f6f\u5b98\u65b9\u6587\u6863 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-publish"},"https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-publish")),(0,a.kt)("h2",{id:"2010-\u5728-winformwpf-\u684c\u9762\u4e2d\u4f7f\u7528"},"2.0.10 \u5728 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Winform/WPF")," \u684c\u9762\u4e2d\u4f7f\u7528"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Winform")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"WPF")," \u4e2d\u4f7f\u7528\uff0c\u8bf7\u786e\u4fdd ",(0,a.kt)("inlineCode",{parentName:"p"},"Serve.Run()")," \u5728\u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u4e4b\u524d\u521d\u59cb\u5316\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Winform"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {3,8,10-11}",showLineNumbers:!0,"{3,8,10-11}":!0},"namespace WinFormsApp2\n{\n    internal static class Program\n    {\n        [STAThread]\n        static void Main()\n        {\n            Serve.Run(silence: true);   // \u9759\u9ed8\u542f\u52a8\n\n            ApplicationConfiguration.Initialize();\n            Application.Run(new Form1());\n        }\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"WPF"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {6,8,10}",showLineNumbers:!0,"{6,8,10}":!0},"using System;\nusing System.Windows;\n\nnamespace WpfApp1\n{\n    public partial class App : Application\n    {\n        public App()\n        {\n            Serve.Run(silence: true);   // \u9759\u9ed8\u542f\u52a8\n        }\n    }\n}\n")),(0,a.kt)("h3",{id:"20101-\u6dfb\u52a0\u66f4\u591a\u670d\u52a1"},"2.0.10.1 \u6dfb\u52a0\u66f4\u591a\u670d\u52a1"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u6ce8\u518c\u670d\u52a1\uff0c\u53ef\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"YourStartup")," \u6d3e\u751f\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u5373\u53ef\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers {6,8,10} title="YourStartup.cs"',showLineNumbers:!0,"{6,8,10}":!0,title:'"YourStartup.cs"'},"using Furion;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace YourProject;\n\npublic class YourStartup : AppStartup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddRemoteRequest();\n    }\n}\n")),(0,a.kt)("h2",{id:"2011-\u9759\u9ed8\u542f\u52a8"},"2.0.11 \u9759\u9ed8\u542f\u52a8"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Serve.Run()")," \u4f7f\u7528\u963b\u585e\u7ebf\u7a0b\u65b9\u5f0f\u542f\u52a8\uff0c\u4f46\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u4e0d\u5e0c\u671b\u963b\u585e\u73b0\u6709\u7684\u4ee3\u7801\uff0c\u53ef\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u9759\u9ed8\u542f\u52a8"),"\u7684\u65b9\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1}",showLineNumbers:!0,"{1}":!0},'Serve.Run(silence: true);\n\nConsole.WriteLine("Hello, World!");\nConsole.ReadKey();\n')),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"RunOptions"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"LegacyRunOptions")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"GenericRunOptions")," \u65b9\u5f0f\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {2,5,8}",showLineNumbers:!0,"{2,5,8}":!0},"// RunOptions \u65b9\u5f0f\nServe.Run(RunOptions.DefaultSilence);\n\n// LegacyRunOptions \u65b9\u5f0f\nServe.Run(LegacyRunOptions.DefaultSilence);\n\n// GenericRunOptions \u65b9\u5f0f\nServe.Run(GenericRunOptions.DefaultSilence);\n")),(0,a.kt)("h2",{id:"2012-net5-\u6a21\u5f0f\u627e\u4e0d\u5230-views-\u89c6\u56fe\u8def\u5f84"},"2.0.12 ",(0,a.kt)("inlineCode",{parentName:"h2"},".NET5")," \u6a21\u5f0f\u627e\u4e0d\u5230 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Views")," \u89c6\u56fe\u8def\u5f84"),(0,a.kt)("p",null,"\u7531\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},".NET5")," \u5fc5\u987b\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".UseStartup<>")," \u914d\u7f6e\u542f\u52a8\u9879\uff0c\u6240\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"Serve.Run()")," \u6a21\u5f0f\u4f1a\u63d0\u793a\u627e\u4e0d\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"Views")," \u89c6\u56fe\u8def\u5f84\uff0c\u8fd9\u65f6\u5019\u53ea\u9700\u8981\u5728\u542f\u52a8\u76ee\u5f55\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u6587\u4ef6\u5e76\u901a\u8fc7\u6cdb\u578b\u65b9\u5f0f\u6307\u5b9a\u5373\u53ef\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers title="Startup.cs"',showLineNumbers:!0,title:'"Startup.cs"'},"using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace YourProject.Web.Entity\n{\n    public class Startup\n    {\n        public void ConfigureServices(IServiceCollection _)\n        {\n        }\n\n        public void Configure(IApplicationBuilder _)\n        {\n        }\n    }\n}\n")),(0,a.kt)("p",null,"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup")," \u7c7b\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Serve.Run")," \u6cdb\u578b\u6307\u5b9a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"Serve.Run<Startup>(LegacyRunOptions.Default);\n")),(0,a.kt)("h2",{id:"2013-\u53cd\u9988\u4e0e\u5efa\u8bae"},"2.0.13 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,a.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}k.isMDXComponent=!0}}]);
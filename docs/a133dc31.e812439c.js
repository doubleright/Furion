(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),c=n(7),r=(n(0),n(198)),b=n(17),l={id:"dbcontext-function",title:"9.14 \u51fd\u6570\u64cd\u4f5c",sidebar_label:"9.14 \u51fd\u6570\u64cd\u4f5c"},i={unversionedId:"dbcontext-function",id:"dbcontext-function",isDocsHomePage:!1,title:"9.14 \u51fd\u6570\u64cd\u4f5c",description:"\u63a8\u8350\u4f7f\u7528 \u300a9.17 Sql \u9ad8\u7ea7\u4ee3\u7406\u300b\u4ee3\u66ff\u672c\u7ae0\u8282\u529f\u80fd\u3002Sql \u9ad8\u7ea7\u4ee3\u7406 \u80fd\u591f\u63d0\u4f9b\u66f4\u5bb9\u6613\u4e14\u66f4\u6613\u7ef4\u62a4\u7684\u65b9\u5f0f\u3002",source:"@site/docs\\dbcontext-function.mdx",slug:"/dbcontext-function",permalink:"/docs/dbcontext-function",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/dbcontext-function.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1612330918,sidebar_label:"9.14 \u51fd\u6570\u64cd\u4f5c",sidebar:"docs",previous:{title:"9.13 \u5b58\u50a8\u8fc7\u7a0b\u64cd\u4f5c",permalink:"/docs/dbcontext-proc"},next:{title:"9.15 Sql \u64cd\u4f5c",permalink:"/docs/dbcontext-sql"}},o=[{value:"9.14.1 \u6570\u636e\u5e93\u51fd\u6570",id:"9141-\u6570\u636e\u5e93\u51fd\u6570",children:[{value:"9.14.1.1 \u652f\u6301\u6807\u91cf\u51fd\u6570\u7684\u6570\u636e\u5e93",id:"91411-\u652f\u6301\u6807\u91cf\u51fd\u6570\u7684\u6570\u636e\u5e93",children:[]},{value:"9.14.1.2 \u652f\u6301\u8868\u503c\u51fd\u6570\u7684\u6570\u636e\u5e93",id:"91412-\u652f\u6301\u8868\u503c\u51fd\u6570\u7684\u6570\u636e\u5e93",children:[]}]},{value:"9.14.2 \u6570\u636e\u5e93\u51fd\u6570\u7c7b\u578b",id:"9142-\u6570\u636e\u5e93\u51fd\u6570\u7c7b\u578b",children:[]},{value:"9.14.3 \u51fd\u6570\u7684\u4f7f\u7528",id:"9143-\u51fd\u6570\u7684\u4f7f\u7528",children:[{value:"9.14.3.1 \u6807\u91cf\u51fd\u6570\u8fd4\u56de <code>object</code>",id:"91431-\u6807\u91cf\u51fd\u6570\u8fd4\u56de-object",children:[]},{value:"9.14.3.2 \u6807\u91cf\u51fd\u6570\u8fd4\u56de <code>T</code>",id:"91432-\u6807\u91cf\u51fd\u6570\u8fd4\u56de-t",children:[]},{value:"9.14.3.3 \u8868\u503c\u51fd\u6570\u8fd4\u56de <code>DataTable</code>",id:"91433-\u8868\u503c\u51fd\u6570\u8fd4\u56de-datatable",children:[]},{value:"9.14.3.4 \u8868\u503c\u51fd\u6570\u8fd4\u56de <code>List&lt;T&gt;</code>",id:"91434-\u8868\u503c\u51fd\u6570\u8fd4\u56de-listt",children:[]}]},{value:"9.14.4 \u5728 <code>Linq</code> \u4e2d\u4f7f\u7528 <code>\u6807\u91cf\u51fd\u6570</code>",id:"9144-\u5728-linq-\u4e2d\u4f7f\u7528-\u6807\u91cf\u51fd\u6570",children:[{value:"9.14.4.1 \u521b\u5efa\u6807\u91cf\u51fd\u6570",id:"91441-\u521b\u5efa\u6807\u91cf\u51fd\u6570",children:[]},{value:"9.14.4.2 \u521b\u5efa\u9759\u6001\u7c7b\u548c\u9759\u6001\u65b9\u6cd5",id:"91442-\u521b\u5efa\u9759\u6001\u7c7b\u548c\u9759\u6001\u65b9\u6cd5",children:[]},{value:"9.14.4.3 \u5728 <code>Linq</code> \u4e2d\u4f7f\u7528",id:"91443-\u5728-linq-\u4e2d\u4f7f\u7528",children:[]}]},{value:"9.14.5 \u5728 <code>Linq</code> \u4e2d\u4f7f\u7528 <code>\u8868\u503c\u51fd\u6570</code>",id:"9145-\u5728-linq-\u4e2d\u4f7f\u7528-\u8868\u503c\u51fd\u6570",children:[{value:"9.14.5.1 \u521b\u5efa\u8868\u503c\u51fd\u6570",id:"91451-\u521b\u5efa\u8868\u503c\u51fd\u6570",children:[]},{value:"9.14.5.2 \u521b\u5efa\u8868\u503c\u51fd\u6570\u6a21\u578b",id:"91452-\u521b\u5efa\u8868\u503c\u51fd\u6570\u6a21\u578b",children:[]},{value:"9.14.5.3 \u8868\u503c\u51fd\u6570\u914d\u7f6e",id:"91453-\u8868\u503c\u51fd\u6570\u914d\u7f6e",children:[]},{value:"9.14.5.4 \u5728 <code>Linq</code> \u4e2d\u4f7f\u7528",id:"91454-\u5728-linq-\u4e2d\u4f7f\u7528",children:[]}]},{value:"9.14.6 \u5728 <code>EF Core</code> \u5185\u7f6e\u51fd\u6570",id:"9146-\u5728-ef-core-\u5185\u7f6e\u51fd\u6570",children:[]},{value:"9.14.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9147-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],d={toc:o};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u6e29\u99a8\u63d0\u793a")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u63a8\u8350\u4f7f\u7528 \u300a",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/dbcontext-sql-proxy"}),"9.17 Sql \u9ad8\u7ea7\u4ee3\u7406"),"\u300b\u4ee3\u66ff\u672c\u7ae0\u8282\u529f\u80fd\u3002",Object(r.b)("inlineCode",{parentName:"p"},"Sql \u9ad8\u7ea7\u4ee3\u7406")," \u80fd\u591f\u63d0\u4f9b\u66f4\u5bb9\u6613\u4e14\u66f4\u6613\u7ef4\u62a4\u7684\u65b9\u5f0f\u3002"))),Object(r.b)("h2",{id:"9141-\u6570\u636e\u5e93\u51fd\u6570"},"9.14.1 \u6570\u636e\u5e93\u51fd\u6570"),Object(r.b)("p",null,"\u5f15\u7528\u767e\u5ea6\u767e\u79d1\uff1a"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u6570\u636e\u5e93\u51fd\u6570\u662f\u6307\u5f53\u9700\u8981\u5206\u6790\u6570\u636e\u6e05\u5355\u4e2d\u7684\u6570\u503c\u662f\u5426\u7b26\u5408\u7279\u5b9a\u6761\u4ef6\u65f6\uff0c\u4f7f\u7528\u6570\u636e\u5e93\u5de5\u4f5c\u8868\u51fd\u6570\u3002")),Object(r.b)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u6570\u636e\u5e93\u51fd\u6570\u5c31\u662f\u7528\u4e8e\u5b50\u8ba1\u7b97\u7684\u51fd\u6570\u3002\u5176\u8ba1\u7b97\u7684\u7ed3\u679c\u53ef\u4ee5\u7528\u4e8e\u6784\u5efa ",Object(r.b)("inlineCode",{parentName:"p"},"sql")," \u8bed\u53e5\u3002"),Object(r.b)("h3",{id:"91411-\u652f\u6301\u6807\u91cf\u51fd\u6570\u7684\u6570\u636e\u5e93"},"9.14.1.1 \u652f\u6301\u6807\u91cf\u51fd\u6570\u7684\u6570\u636e\u5e93"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"SqlServer"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Sqlite"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Cosmos"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"InMemoryDatabase"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"MySql"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"PostgreSQL"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Oracle"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Firebird"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Dm"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(r.b)("h3",{id:"91412-\u652f\u6301\u8868\u503c\u51fd\u6570\u7684\u6570\u636e\u5e93"},"9.14.1.2 \u652f\u6301\u8868\u503c\u51fd\u6570\u7684\u6570\u636e\u5e93"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"SqlServer"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Sqlite"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Cosmos"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"InMemoryDatabase"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"MySql"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"PostgreSQL"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Oracle"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Firebird"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Dm"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(r.b)("h2",{id:"9142-\u6570\u636e\u5e93\u51fd\u6570\u7c7b\u578b"},"9.14.2 \u6570\u636e\u5e93\u51fd\u6570\u7c7b\u578b"),Object(r.b)("p",null,"\u5728\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\uff0c\u6570\u636e\u5e93\u51fd\u6570\u6709\u8fd9\u4e24\u79cd\u7c7b\u578b\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u6807\u91cf\u51fd\u6570"),"\uff1a\u53ea\u80fd\u8fd4\u56de\u5355\u4e2a\u503c"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u8868\u503c\u51fd\u6570"),"\uff1a\u53ea\u80fd\u8fd4\u56de\u4e00\u4e2a\u7ed3\u679c\u96c6")),Object(r.b)("h2",{id:"9143-\u51fd\u6570\u7684\u4f7f\u7528"},"9.14.3 \u51fd\u6570\u7684\u4f7f\u7528"),Object(r.b)("h3",{id:"91431-\u6807\u91cf\u51fd\u6570\u8fd4\u56de-object"},"9.14.3.1 \u6807\u91cf\u51fd\u6570\u8fd4\u56de ",Object(r.b)("inlineCode",{parentName:"h3"},"object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// ISqlRepository \u65b9\u6cd5\nvar value = _sqlRepository.SqlFunctionScalar("func_GetValue");\n\n// ISqlDispatchProxy \u65b9\u5f0f\nvar value = _sqlExecuteProxy.GetValue();  // \u63a8\u8350\u65b9\u5f0f\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\nvar value = _personRepository.SqlFunctionScalar("func_GetValue");\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\nvar value = _repository.Sql().SqlFunctionScalar("func_GetValue");\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u51fd\u6570\u540d\u6267\u884c\nvar value = "func_GetValue".SqlFunctionScalar();\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u5173\u4e8e\u5f02\u6b65")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u652f\u6301\u5f02\u6b65\u65b9\u5f0f\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u5c31\u4e0d\u5217\u4e3e\u5f02\u6b65\u65b9\u5f0f\u4e86\u3002"))),Object(r.b)("h3",{id:"91432-\u6807\u91cf\u51fd\u6570\u8fd4\u56de-t"},"9.14.3.2 \u6807\u91cf\u51fd\u6570\u8fd4\u56de ",Object(r.b)("inlineCode",{parentName:"h3"},"T")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// ISqlRepository \u65b9\u6cd5\nvar value = _sqlRepository.SqlFunctionScalar<string>("func_GetValue");\n\n// ISqlDispatchProxy \u65b9\u5f0f\nvar value = _sqlExecuteProxy.GetValue();  // \u63a8\u8350\u65b9\u5f0f\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\nvar value = _personRepository.SqlFunctionScalar<string>("func_GetValue");\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\nvar value = _repository.Sql().SqlFunctionScalar<string>("func_GetValue");\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u51fd\u6570\u540d\u6267\u884c\nvar value = "func_GetValue".SqlFunctionScalar<string>();\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u5173\u4e8e\u5f02\u6b65")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u652f\u6301\u5f02\u6b65\u65b9\u5f0f\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u5c31\u4e0d\u5217\u4e3e\u5f02\u6b65\u65b9\u5f0f\u4e86\u3002"))),Object(r.b)("h3",{id:"91433-\u8868\u503c\u51fd\u6570\u8fd4\u56de-datatable"},"9.14.3.3 \u8868\u503c\u51fd\u6570\u8fd4\u56de ",Object(r.b)("inlineCode",{parentName:"h3"},"DataTable")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// ISqlRepository \u65b9\u6cd5\nvar value = _sqlRepository.SqlFunctionQuery("func_GetTable");\n\n// ISqlDispatchProxy \u65b9\u5f0f\nvar value = _sqlExecuteProxy.GetTable();  // \u63a8\u8350\u65b9\u5f0f\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\nvar value = _personRepository.SqlFunctionQuery("func_GetTable");\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\nvar value = _repository.Sql().SqlFunctionQuery("func_GetTable");\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u51fd\u6570\u540d\u6267\u884c\nvar value = "func_GetTable".SqlFunctionQuery();\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u5173\u4e8e\u5f02\u6b65")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u652f\u6301\u5f02\u6b65\u65b9\u5f0f\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u5c31\u4e0d\u5217\u4e3e\u5f02\u6b65\u65b9\u5f0f\u4e86\u3002"))),Object(r.b)("h3",{id:"91434-\u8868\u503c\u51fd\u6570\u8fd4\u56de-listt"},"9.14.3.4 \u8868\u503c\u51fd\u6570\u8fd4\u56de ",Object(r.b)("inlineCode",{parentName:"h3"},"List<T>")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// ISqlRepository \u65b9\u6cd5\nvar value = _sqlRepository.SqlFunctionQuery<Person>("func_GetTable");\n\n// ISqlDispatchProxy \u65b9\u5f0f\nvar value = _sqlExecuteProxy.GetTable();  // \u63a8\u8350\u65b9\u5f0f\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\nvar value = _personRepository.SqlFunctionQuery<Person>("func_GetTable");\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\nvar value = _repository.Sql().SqlFunctionQuery<Person>("func_GetTable");\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u51fd\u6570\u540d\u6267\u884c\nvar value = "func_GetTable".SqlFunctionQuery<Person>();\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u5173\u4e8e\u5f02\u6b65")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u652f\u6301\u5f02\u6b65\u65b9\u5f0f\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u5c31\u4e0d\u5217\u4e3e\u5f02\u6b65\u65b9\u5f0f\u4e86\u3002"))),Object(r.b)("h2",{id:"9144-\u5728-linq-\u4e2d\u4f7f\u7528-\u6807\u91cf\u51fd\u6570"},"9.14.4 \u5728 ",Object(r.b)("inlineCode",{parentName:"h2"},"Linq")," \u4e2d\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"h2"},"\u6807\u91cf\u51fd\u6570")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u975e\u5e38\u7075\u6d3b\u7684\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"Linq")," \u4e2d\u4f7f\u7528\u6807\u91cf\u51fd\u6570\u7684\u65b9\u6cd5\u3002\u5982\u679c\u50cf\u4f7f\u7528\u8fd9\u6837\u7684\u65b9\u5f0f\uff0c\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u4e24\u4e2a\u6761\u4ef6\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6807\u91cf\u51fd\u6570\u5fc5\u987b\u5b9a\u4e49\u5728",Object(r.b)("strong",{parentName:"li"},"\u516c\u5f00\u9759\u6001\u7c7b"),"\u4e2d\uff0c\u4e14\u81ea\u5df1\u4e5f\u662f",Object(r.b)("strong",{parentName:"li"},"\u516c\u5f00\u9759\u6001\u65b9\u6cd5")),Object(r.b)("li",{parentName:"ul"},"\u8be5",Object(r.b)("strong",{parentName:"li"},"\u516c\u5f00\u9759\u6001\u65b9\u6cd5"),"\u5fc5\u987b\u8d34\u6709 ",Object(r.b)("inlineCode",{parentName:"li"},"[QueryableFunction]")," \u7279\u6027")),Object(r.b)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(r.b)("h3",{id:"91441-\u521b\u5efa\u6807\u91cf\u51fd\u6570"},"9.14.4.1 \u521b\u5efa\u6807\u91cf\u51fd\u6570"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE FUNCTION FN_GetId\n(\n    @id INT\n)\nRETURNS INT\nAS\nBEGIN\n    RETURN @id + 1;\nEND;\n")),Object(r.b)("h3",{id:"91442-\u521b\u5efa\u9759\u6001\u7c7b\u548c\u9759\u6001\u65b9\u6cd5"},"9.14.4.2 \u521b\u5efa\u9759\u6001\u7c7b\u548c\u9759\u6001\u65b9\u6cd5"),Object(r.b)("p",null,"\u521b\u5efa\u9759\u6001\u7c7b\uff0c\u5982 ",Object(r.b)("inlineCode",{parentName:"p"},"QueryFunctions"),"\uff0c\u5c06\u8be5 ",Object(r.b)("inlineCode",{parentName:"p"},"\u6807\u91cf\u51fd\u6570")," \u653e\u5728\u9759\u6001\u7c7b\u4e2d\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{1, 7, 10-11}","{1,":!0,"7,":!0,"10-11}":!0}),'using Furion.DatabaseAccessor;\nusing System;\n\nnamespace Furion.Application\n{\n    // \u5fc5\u987b\u662f\u516c\u5f00\u9759\u6001\u7684\n    public static class QueryFunctions\n    {\n        // \u5fc5\u987b\u662f\u9759\u6001\u65b9\u6cd5\n        [QueryableFunction("FN_GetId", "dbo")]  // \u914d\u7f6e\u6807\u91cf\u51fd\u6570\n        public static int GetId(int id) => throw new NotSupportedException();\n    }\n}\n')),Object(r.b)("h3",{id:"91443-\u5728-linq-\u4e2d\u4f7f\u7528"},"9.14.4.3 \u5728 ",Object(r.b)("inlineCode",{parentName:"h3"},"Linq")," \u4e2d\u4f7f\u7528"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"_personRepository.Where(u => u.Id > QueryFunctions.GetId(1)).ToList();\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT [p].[Id], [p].[Address], [p].[Age], [p].[CreatedTime], [p].[IsDeleted], [p].[Name], [p].[UpdatedTime]\nFROM [Person] AS [p]\nWHERE [p].[Id] > [dbo].[FN_GetId](1)    // \ud83d\udca5 \u6ce8\u610f\u8fd9\u91cc\n")),Object(r.b)("img",{src:Object(b.a)("img/fn1.png")}),Object(r.b)("h2",{id:"9145-\u5728-linq-\u4e2d\u4f7f\u7528-\u8868\u503c\u51fd\u6570"},"9.14.5 \u5728 ",Object(r.b)("inlineCode",{parentName:"h2"},"Linq")," \u4e2d\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"h2"},"\u8868\u503c\u51fd\u6570")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"EF Core 5.0")," \u7248\u672c\u652f\u6301\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"Linq")," \u4e2d\u64cd\u4f5c ",Object(r.b)("inlineCode",{parentName:"p"},"\u8868\u503c\u51fd\u6570"),"\uff0c\u64cd\u4f5c\u6709\u70b9\u7c7b\u4f3c ",Object(r.b)("inlineCode",{parentName:"p"},"\u89c6\u56fe\u64cd\u4f5c")),Object(r.b)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(r.b)("h3",{id:"91451-\u521b\u5efa\u8868\u503c\u51fd\u6570"},"9.14.5.1 \u521b\u5efa\u8868\u503c\u51fd\u6570"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE FUNCTION dbo.GetPersons\n(\n    @id INT\n)\nRETURNS TABLE\nAS\nRETURN\n(\n    SELECT Id,\n           Name,\n           Age,\n           Address\n    FROM dbo.Person\n    WHERE Id > @id\n);\n")),Object(r.b)("h3",{id:"91452-\u521b\u5efa\u8868\u503c\u51fd\u6570\u6a21\u578b"},"9.14.5.2 \u521b\u5efa\u8868\u503c\u51fd\u6570\u6a21\u578b"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"namespace Furion.Core\n{\n    public class F_Person\n    {\n        /// <summary>\n        /// \u4e3b\u952eId\n        /// </summary>\n        public int Id { get; set; }\n\n        /// <summary>\n        /// \u59d3\u540d\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n\n        /// <summary>\n        /// \u4f4f\u5740\n        /// </summary>\n        public string Address { get; set; }\n    }\n}\n")),Object(r.b)("h3",{id:"91453-\u8868\u503c\u51fd\u6570\u914d\u7f6e"},"9.14.5.3 \u8868\u503c\u51fd\u6570\u914d\u7f6e"),Object(r.b)("p",null,"\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"DbContext")," \u7c7b\u4e2d\u5b9a\u4e49\u65b9\u6cd5\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{3,10,20-21}","{3,10,20-21}":!0}),'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing System.Linq;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppDbContext("Sqlite3ConnectionString")]\n    public class FurionDbContext : AppDbContext<FurionDbContext>\n    {\n        public IQueryable<F_Person> GetPersons(int id) => FromExpression(() => GetPersons(id));\n\n        public FurionDbContext(DbContextOptions<FurionDbContext> options) : base(options)\n        {\n        }\n\n        protected override void OnModelCreating(ModelBuilder modelBuilder)\n        {\n            base.OnModelCreating(modelBuilder);\n\n            modelBuilder.Entity(typeof(F_Person)).HasNoKey();\n            modelBuilder.HasDbFunction(() => GetPersons(default));\n        }\n    }\n}\n')),Object(r.b)("h3",{id:"91454-\u5728-linq-\u4e2d\u4f7f\u7528"},"9.14.5.4 \u5728 ",Object(r.b)("inlineCode",{parentName:"h3"},"Linq")," \u4e2d\u4f7f\u7528"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'IQueryable<F_Person> query = _repository.DynamicDbContext.GetPersons(1);\nvar result = query.Where(u => u.Name.Equals("Furion")).ToList();\n')),Object(r.b)("p",null,"\u6700\u7ec8\u751f\u6210 ",Object(r.b)("inlineCode",{parentName:"p"},"Sql")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT [g].Id, [g].Name, [g].Age, [g].Address\nFROM dbo.GetPersons(1) AS [g]\nWHERE [g].Name == N'Furion';\n")),Object(r.b)("h2",{id:"9146-\u5728-ef-core-\u5185\u7f6e\u51fd\u6570"},"9.14.6 \u5728 ",Object(r.b)("inlineCode",{parentName:"h2"},"EF Core")," \u5185\u7f6e\u51fd\u6570"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"EF Core")," \u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u5f88\u591a\u5e38\u7528\u7684\u5185\u7f6e\u51fd\u6570\uff0c\u53ef\u4ee5\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"Lambda")," \u6761\u4ef6\u4e2d\u4f7f\u7528\uff0c\u4e3b\u8981\u662f\u901a\u8fc7 EF.Functions \u8c03\u7528\uff0c\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"_repository.Where(u => EF.Functions.DateDiffHour(u.CreatedDt, DateTime.Now) > 8).FirstOrDefault();\n")),Object(r.b)("p",null,"\u8fd9\u4e2a\u8bed\u53e5\u4f7f\u7528\u4e86 EF.Functions.DateDiffHour \u6700\u7ec8\u751f\u6210\u7684 Sql \u5982\u4e0b\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT TOP(1) [a].*\nFROM [dbo].[TEST] AS [a]\nWHERE DATEDIFF(HOUR, [a].[CREATED_DT], GETDATE()) > 8\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"EF Core")," \u5185\u7f6e\u51fd\u6570\u5c31\u4e0d\u4e00\u4e00\u5217\u51fa\u4e86\uff0c\u53ef\u4ee5\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"EF.Functions")," \u67e5\u770b\u66f4\u591a\uff0c\u5982\u679c\u4e0d\u80fd\u6ee1\u8db3\u81ea\u5df1\u7684\u9700\u6c42\uff0c\u90a3\u4e48\u53ef\u4ee5\u81ea\u5b9a\u4e49 ",Object(r.b)("inlineCode",{parentName:"p"},"Linq")," \u6807\u91cf\u51fd\u6570"),Object(r.b)("h2",{id:"9147-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.14.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))))}p.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),d=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,O=p["".concat(b,".").concat(u)]||p[u]||s[u]||r;return n?c.a.createElement(O,l(l({ref:t},o),{},{components:n})):c.a.createElement(O,l({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,b=new Array(r);b[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var o=2;o<r;o++)b[o]=n[o];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
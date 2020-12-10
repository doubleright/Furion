(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,O=p["".concat(i,".").concat(d)]||p[d]||u[d]||c;return n?r.a.createElement(O,o(o({ref:t},b),{},{components:n})):r.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),c=(n(0),n(155)),i={id:"sqlsugar",title:"10. SqlSugar \u96c6\u6210",sidebar_label:"10. SqlSugar \u96c6\u6210"},o={unversionedId:"sqlsugar",id:"sqlsugar",isDocsHomePage:!1,title:"10. SqlSugar \u96c6\u6210",description:"10.1 \u5173\u4e8e SqlSugar",source:"@site/docs\\sqlsugar.mdx",slug:"/sqlsugar",permalink:"/docs/sqlsugar",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/sqlsugar.mdx",version:"current",sidebar_label:"10. SqlSugar \u96c6\u6210",sidebar:"docs",previous:{title:"9.28 \u5206\u8868\u5206\u5e93",permalink:"/docs/split-db"},next:{title:"11. SaaS \u591a\u79df\u6237",permalink:"/docs/saas"}},l=[{value:"10.1 \u5173\u4e8e SqlSugar",id:"101-\u5173\u4e8e-sqlsugar",children:[]},{value:"10.2 \u5982\u4f55\u96c6\u6210",id:"102-\u5982\u4f55\u96c6\u6210",children:[{value:"10.2.1 \u6ce8\u518c <code>SqlSugar</code> \u670d\u52a1",id:"1021-\u6ce8\u518c-sqlsugar-\u670d\u52a1",children:[]}]},{value:"10.3 \u57fa\u672c\u4f7f\u7528",id:"103-\u57fa\u672c\u4f7f\u7528",children:[{value:"10.3.1 \u65b0\u589e\u64cd\u4f5c",id:"1031-\u65b0\u589e\u64cd\u4f5c",children:[]},{value:"10.3.2 \u66f4\u65b0\u64cd\u4f5c",id:"1032-\u66f4\u65b0\u64cd\u4f5c",children:[]},{value:"10.3.3 \u5220\u9664\u64cd\u4f5c",id:"1033-\u5220\u9664\u64cd\u4f5c",children:[]},{value:"10.3.4 \u67e5\u8be2\u64cd\u4f5c",id:"1034-\u67e5\u8be2\u64cd\u4f5c",children:[]},{value:"10.3.5 \u5206\u9875\u67e5\u8be2",id:"1035-\u5206\u9875\u67e5\u8be2",children:[]}]},{value:"10.4 \u9ad8\u7ea7\u4f7f\u7528",id:"104-\u9ad8\u7ea7\u4f7f\u7528",children:[{value:"10.4.1 <code>ISqlSugarClient</code> \u5bf9\u8c61",id:"1041-isqlsugarclient-\u5bf9\u8c61",children:[]},{value:"10.4.2 <code>IAdo</code> \u5bf9\u8c61",id:"1042-iado-\u5bf9\u8c61",children:[]}]},{value:"10.5 \u5173\u4e8e\u4ed3\u50a8",id:"105-\u5173\u4e8e\u4ed3\u50a8",children:[{value:"10.5.1 \u9009\u7528\u539f\u5219",id:"1051-\u9009\u7528\u539f\u5219",children:[]}]},{value:"10.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"106-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"101-\u5173\u4e8e-sqlsugar"},"10.1 \u5173\u4e8e SqlSugar"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"SqlSugar")," \u662f .NET/C# \u5e73\u53f0\u975e\u5e38\u4f18\u79c0\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"ORM")," \u6846\u67b6\uff0c\u76ee\u524d ",Object(c.b)("inlineCode",{parentName:"p"},"Nuget")," \u603b\u4e0b\u8f7d\u7a81\u7834 700K\uff0cGithub \u5173\u6ce8\u91cf\u4e5f\u641e\u8fbe 3.2K\uff0c\u662f\u76ee\u524d\u5f53\u4e4b\u65e0\u6127\u7684\u56fd\u4ea7\u4f18\u79c0 ORM \u6846\u67b6\u4e4b\u4e00\u3002"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"SqlSugar")," \u5b98\u65b9\u5730\u5740\uff1a",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.codeisbug.com/"}),"http://www.codeisbug.com/")),Object(c.b)("h2",{id:"102-\u5982\u4f55\u96c6\u6210"},"10.2 \u5982\u4f55\u96c6\u6210"),Object(c.b)("p",null,"\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u5df2\u7ecf\u63a8\u51fa ",Object(c.b)("inlineCode",{parentName:"p"},"SqlSugar")," \u62d3\u5c55\u5305 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.nuget.org/packages/Furion.Extras.DatabaseAccessor.SqlSugar"}),"Furion.Extras.DatabaseAccessor.SqlSugar"),"\u3002"),Object(c.b)("h3",{id:"1021-\u6ce8\u518c-sqlsugar-\u670d\u52a1"},"10.2.1 \u6ce8\u518c ",Object(c.b)("inlineCode",{parentName:"h3"},"SqlSugar")," \u670d\u52a1"),Object(c.b)("p",null,"\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u6dfb\u52a0 ",Object(c.b)("inlineCode",{parentName:"p"},"services.AddSqlSugar(config)")," \u5373\u53ef\u3002\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'services.AddSqlSugar(new ConnectionConfig\n{\n    ConnectionString = "Server=.xxxxx",//\u8fde\u63a5\u7b26\u5b57\u4e32\n    DbType = DbType.SqlServer,\n    IsAutoCloseConnection = true,\n    InitKeyType = InitKeyType.Attribute//\u4ece\u7279\u6027\u8bfb\u53d6\u4e3b\u952e\u81ea\u589e\u4fe1\u606f\n});\n')),Object(c.b)("p",null,"\u540c\u65f6\u4e5f\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u914d\u7f6e\uff0c\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'services.AddSqlSugar(new ConnectionConfig\n{\n    ConnectionString = "Server=.xxxxx",//\u8fde\u63a5\u7b26\u5b57\u4e32\n    DbType = DbType.SqlServer,\n    IsAutoCloseConnection = true,\n    InitKeyType = InitKeyType.Attribute//\u4ece\u7279\u6027\u8bfb\u53d6\u4e3b\u952e\u81ea\u589e\u4fe1\u606f\n}, db =>\n{\n    db.Aop.OnLogExecuting = (sql, pars) =>\n    {\n        Console.WriteLine(sql + "\\r\\n" + db.Utilities.SerializeObject(pars.ToDictionary(it => it.ParameterName, it => it.Value)));\n        Console.WriteLine();\n    };\n});\n')),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u5b89\u88c5\u62d3\u5c55\u5305\u4f4d\u7f6e")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u63a8\u8350\u5c06\u62d3\u5c55\u5305 ",Object(c.b)("inlineCode",{parentName:"p"},"Furion.Extras.DatabaseAccessor.SqlSugar")," \u5b89\u88c5\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"Furion.Core")," \u5c42\u4e2d\u3002"))),Object(c.b)("h2",{id:"103-\u57fa\u672c\u4f7f\u7528"},"10.3 \u57fa\u672c\u4f7f\u7528"),Object(c.b)("p",null,"\u5728\u4f7f\u7528\u4e4b\u524d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165 ",Object(c.b)("inlineCode",{parentName:"p"},"ISqlSugarRepository<TEntity>")," \u63a5\u53e3\uff0c\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"private readonly ISqlSugarRepository<Person> _sqlSugarRepository;\npublic PersonService(ISqlSugarRepository<Person> sqlSugarRepository)\n{\n    _sqlSugarRepository = sqlSugarRepository;\n}\n")),Object(c.b)("h3",{id:"1031-\u65b0\u589e\u64cd\u4f5c"},"10.3.1 \u65b0\u589e\u64cd\u4f5c"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'_sqlSugarRepository.Insert(new Person(){ Name = "Furion" });\n')),Object(c.b)("h3",{id:"1032-\u66f4\u65b0\u64cd\u4f5c"},"10.3.2 \u66f4\u65b0\u64cd\u4f5c"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'_sqlSugarRepository.Update(new Person(){ Id = 1, Name = "Furion/Fur" });\n')),Object(c.b)("h3",{id:"1033-\u5220\u9664\u64cd\u4f5c"},"10.3.3 \u5220\u9664\u64cd\u4f5c"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"_sqlSugarRepository.Delete(1);\n")),Object(c.b)("h3",{id:"1034-\u67e5\u8be2\u64cd\u4f5c"},"10.3.4 \u67e5\u8be2\u64cd\u4f5c"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"var data = _sqlSugarRepository.Where(u => u.Id > 10).ToList();\n\nvar data  = _sqlSugarRepository.Where(!string.IsNullOrEmpty(name), u => u.Name.Contains(name)).ToList();\n")),Object(c.b)("h3",{id:"1035-\u5206\u9875\u67e5\u8be2"},"10.3.5 \u5206\u9875\u67e5\u8be2"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"int totalCount = 0;\nvar data = _sqlSugarRepository.Where(u => u.Id > 10).ToPageList(1, 10, ref totalCount);\n")),Object(c.b)("h2",{id:"104-\u9ad8\u7ea7\u4f7f\u7528"},"10.4 \u9ad8\u7ea7\u4f7f\u7528"),Object(c.b)("h3",{id:"1041-isqlsugarclient-\u5bf9\u8c61"},"10.4.1 ",Object(c.b)("inlineCode",{parentName:"h3"},"ISqlSugarClient")," \u5bf9\u8c61"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"var sqlsugarClient = _sqlSugarRepository.Context;\n")),Object(c.b)("p",null,"\u62ff\u5230\u8fd9\u4e2a\u5bf9\u8c61\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"SqlSugar")," \u5b8c\u6574\u7684\u529f\u80fd\uff0c\u6bd4\u5982\u64cd\u4f5c\u94fe\u8868\u67e5\u8be2"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"var data = sqlsugarClient.Queryable<Order, OrderItem, Custom>((o, i, c) => o.Id == i.OrderId&&c.Id == o.CustomId)\n                         .Select<ViewOrder>((o,i,c)=> new ViewOrder\n                         {\n                             Id=SqlFunc.GetSelfAndAutoFill(o.Id),// o.*\n                             CustomName=c.Name   //[c].[Name] AS [CustomName]\n                         })\n                         .ToList();\n")),Object(c.b)("h3",{id:"1042-iado-\u5bf9\u8c61"},"10.4.2 ",Object(c.b)("inlineCode",{parentName:"h3"},"IAdo")," \u5bf9\u8c61"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"var ado = _sqlSugarRepository.Ado;\n")),Object(c.b)("p",null,"\u62ff\u5230\u8be5\u5bf9\u8c61\u5c31\u53ef\u4ee5\u64cd\u4f5c\u539f\u751f ",Object(c.b)("inlineCode",{parentName:"p"},"sql"),"\uff0c\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'var dt = ado.GetDataTable("select * from table where id=@id and name=@name",new{id=1,name=2});\n')),Object(c.b)("h2",{id:"105-\u5173\u4e8e\u4ed3\u50a8"},"10.5 \u5173\u4e8e\u4ed3\u50a8"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"SqlSugar")," \u63d0\u4f9b\u4e86\u4e24\u4e2a\u4ed3\u50a8\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ISqlSugarRepository"),"\uff1a\u975e\u6cdb\u578b\u4ed3\u50a8\uff0c\u53ef\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"li"},".Change<TEntity>")," \u65b9\u6cd5\u5207\u6362\u5230\u4efb\u4f55\u5b9e\u4f53\u4ed3\u50a8"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ISqlSugarRepository<TEntity>"),"\uff1a\u5b9e\u4f53\u6cdb\u578b\u4ed3\u50a8")),Object(c.b)("h3",{id:"1051-\u9009\u7528\u539f\u5219"},"10.5.1 \u9009\u7528\u539f\u5219"),Object(c.b)("p",null,"\u61d2\u4eba\u53ef\u4ee5\u5728\u6784\u9020\u51fd\u6570\u4e2d\u6ce8\u5165 ",Object(c.b)("inlineCode",{parentName:"p"},"ISqlSugarRepository")," \u4ed3\u50a8\uff0c\u4e0d\u5e26\u6cdb\u578b\u7684\u7248\u672c\uff0c\u8fd9\u6837\u6784\u9020\u51fd\u6570\u53ea\u4f1a\u6709\u4e00\u4e2a\u4ed3\u50a8\u793a\u4f8b\uff0c\u4e4b\u540e\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},".Change<TEntity>")," \u65b9\u6cd5\u5207\u6362\uff0c\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// \u5207\u6362 Persion \u4ed3\u50a8\nvar personRep = _sqlSugarRepository.Change<Persion>();\npersonRep.Insert(person);\n\n// \u5207\u6362\u5176\u4ed6\u4ed3\u50a8\nvar otherRep = _sqlSugarRepository.Change<Other>();\notherRep.Update(other);\n\n// \u4e5f\u53ef\u4ee5\u901a\u8fc7\u6cdb\u578b\u4ed3\u50a8\u5207\u6362\nvar studentRep = personRep.Change<Student>();\n")),Object(c.b)("h2",{id:"106-\u53cd\u9988\u4e0e\u5efa\u8bae"},"10.6 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))),Object(c.b)("hr",null),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e86\u89e3\u66f4\u591a")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",Object(c.b)("inlineCode",{parentName:"p"},"SqlSugar")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://codeisbug.com/"}),"SqlSugar \u5b98\u7f51"),"\u3002"))))}s.isMDXComponent=!0}}]);
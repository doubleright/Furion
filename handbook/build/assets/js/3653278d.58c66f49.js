"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7132],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,y=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(y,a(a({ref:n},c),{},{components:t})):r.createElement(y,a({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},364:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],s={id:"dbcontext-view",title:"9.12 \u89c6\u56fe\u64cd\u4f5c",sidebar_label:"9.12 \u89c6\u56fe\u64cd\u4f5c"},l=void 0,u={unversionedId:"dbcontext-view",id:"dbcontext-view",title:"9.12 \u89c6\u56fe\u64cd\u4f5c",description:"9.12.1 \u5173\u4e8e\u89c6\u56fe",source:"@site/docs/dbcontext-view.mdx",sourceDirName:".",slug:"/dbcontext-view",permalink:"/docs/dbcontext-view",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/dbcontext-view.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651894493,formattedLastUpdatedAt:"May 7, 2022",frontMatter:{id:"dbcontext-view",title:"9.12 \u89c6\u56fe\u64cd\u4f5c",sidebar_label:"9.12 \u89c6\u56fe\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",permalink:"/docs/dbcontext-hight-query"},next:{title:"9.13 \u5b58\u50a8\u8fc7\u7a0b\u64cd\u4f5c",permalink:"/docs/dbcontext-proc"}},c={},p=[{value:"9.12.1 \u5173\u4e8e\u89c6\u56fe",id:"9121-\u5173\u4e8e\u89c6\u56fe",level:2},{value:"9.12.2 \u89c6\u56fe\u7684\u4f7f\u7528",id:"9122-\u89c6\u56fe\u7684\u4f7f\u7528",level:2},{value:"9.12.2.1 \u521b\u5efa\u89c6\u56fe <code>SQL</code>",id:"91221-\u521b\u5efa\u89c6\u56fe-sql",level:3},{value:"9.12.2.2 \u89c6\u56fe\u6a21\u578b",id:"91222-\u89c6\u56fe\u6a21\u578b",level:3},{value:"9.12.3 \u89c6\u56fe\u4f7f\u7528",id:"9123-\u89c6\u56fe\u4f7f\u7528",level:2},{value:"9.12.4 \u89c6\u56fe\u6700\u4f73\u8bfb\u53d6\u65b9\u5f0f \u2714",id:"9124-\u89c6\u56fe\u6700\u4f73\u8bfb\u53d6\u65b9\u5f0f-",level:2},{value:"9.12.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9125-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],m={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"9121-\u5173\u4e8e\u89c6\u56fe"},"9.12.1 \u5173\u4e8e\u89c6\u56fe"),(0,i.kt)("p",null,"\u89c6\u56fe\u662f\u6570\u636e\u5e93\u4e2d\u975e\u5e38\u91cd\u8981\u7684\u5bf9\u8c61\uff0c\u662f\u4e00\u5f20\u865a\u62df\u8868\uff0c\u901a\u8fc7\u89c6\u56fe\u6211\u4eec\u53ef\u4ee5\u5bf9\u7ed3\u679c\u8fdb\u884c\u7b5b\u9009\u7f13\u5b58\uff0c\u540c\u65f6\u8fd8\u80fd\u5b9e\u73b0\u9897\u7c92\u5316\u6743\u9650\u63a7\u5236\uff0c\u5982\u63a7\u5236\u6307\u5b9a\u884c\uff0c\u6307\u5b9a\u5217\u3002"),(0,i.kt)("h2",{id:"9122-\u89c6\u56fe\u7684\u4f7f\u7528"},"9.12.2 \u89c6\u56fe\u7684\u4f7f\u7528"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u4e2d\u5b9e\u73b0\u89c6\u56fe\u7684\u64cd\u4f5c\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u521b\u5efa\u89c6\u56fe\u6a21\u578b\uff0c\u5e76\u7ee7\u627f ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityNotKey")," \u57fa\u7c7b\u5373\u53ef\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("h3",{id:"91221-\u521b\u5efa\u89c6\u56fe-sql"},"9.12.2.1 \u521b\u5efa\u89c6\u56fe ",(0,i.kt)("inlineCode",{parentName:"h3"},"SQL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"CREATE VIEW V_Person AS\nSELECT Id,Name,Age,Address FROM person\n")),(0,i.kt)("h3",{id:"91222-\u89c6\u56fe\u6a21\u578b"},"9.12.2.2 \u89c6\u56fe\u6a21\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {5,10}",showLineNumbers:!0,"":!0,"{5,10}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Core\n{\n    public class V_Person : EntityNotKey\n    {\n        /// <summary>\n        /// \u914d\u7f6e\u89c6\u56fe\u540d\n        /// </summary>\n        public V_Person() : base("V_Person")\n        {\n        }\n\n        /// <summary>\n        /// \u4e3b\u952eId\n        /// </summary>\n        public int Id { get; set; }\n\n        /// <summary>\n        /// \u59d3\u540d\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n\n        /// <summary>\n        /// \u4f4f\u5740\n        /// </summary>\n        public string Address { get; set; }\n    }\n}\n')),(0,i.kt)("admonition",{title:"\u89c6\u56fe\u540d\u79f0",type:"important"},(0,i.kt)("p",{parentName:"admonition"},"\u89c6\u56fe\u5b9e\u4f53\u53ea\u9700\u8981\u7ee7\u627f ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityNotKey")," \u57fa\u7c7b\u5e76\u7f16\u5199\u65e0\u53c2\u6784\u9020\u51fd\u6570\u7ee7\u627f ",(0,i.kt)("inlineCode",{parentName:"p"},'base("\u89c6\u56fe\u540d\u79f0")')," \u5373\u53ef\u3002")),(0,i.kt)("h2",{id:"9123-\u89c6\u56fe\u4f7f\u7528"},"9.12.3 \u89c6\u56fe\u4f7f\u7528"),(0,i.kt)("p",null,"\u89c6\u56fe\u9664\u4e86\u4e0d\u80fd\u64cd\u4f5c\uff08\u5199\uff09\u4ee5\u5916\uff0c\u5176\u4ed6\u64cd\u4f5c\u548c\u8868\u64cd\u4f5c\u65e0\u5f02\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var vEntities = v_repository.Where(u => u.Id >10).ToList();\n")),(0,i.kt)("h2",{id:"9124-\u89c6\u56fe\u6700\u4f73\u8bfb\u53d6\u65b9\u5f0f-"},"9.12.4 \u89c6\u56fe\u6700\u4f73\u8bfb\u53d6\u65b9\u5f0f \u2714"),(0,i.kt)("p",null,"\u7531\u4e8e\u89c6\u56fe\u662f\u865a\u62df\u8868\uff0c\u4e0d\u5e94\u8be5\u5bf9\u5176\u8fdb\u884c\u5199\u64cd\u4f5c\uff0c\u6240\u4ee5\u5e94\u8be5\u91c7\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u53ea\u8bfb\u4ed3\u50a8\u521d\u59cb\u5316\u89c6\u56fe"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {11,13,16}",showLineNumbers:!0,"":!0,"{11,13,16}":!0},"using Furion.Core;\nusing Furion.DatabaseAccessor;\nusing Furion.DynamicApiController;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace Furion.Application.Persons\n{\n    public class FurionService : IDynamicApiController\n    {\n        private readonly IReadableRepository<V_Person> _readableRepository;\n\n        public FurionService(IRepository<V_Person> repository)\n        {\n            // \u521d\u59cb\u5316\u53ea\u8bfb\u4ed3\u50a8\n            _readableRepository = repository.Constraint<IReadableRepository<V_Person>>();\n        }\n\n        /// <summary>\n        /// \u8bfb\u53d6\u89c6\u56fe\n        /// </summary>\n        /// <returns></returns>\n        public async Task<List<V_Person>> GetVPerson()\n        {\n            var list = await _readableRepository.AsQueryable().ToListAsync();\n            return list;\n        }\n    }\n}\n")),(0,i.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},".Constraint<TEntity,TDbContextLocator>")," \u65b9\u6cd5\u53ef\u4ee5\u5c06\u4ed3\u50a8\u7ea6\u675f\u4e3a\u7279\u5b9a\u4ed3\u50a8\uff0c\u5982\u53ea\u8bfb\u4ed3\u50a8\uff0c\u53ef\u8bfb\u53ef\u5199\u4ed3\u50a8\uff0c\u53ea\u65b0\u589e\u4ed3\u50a8\u7b49\u3002")),(0,i.kt)("h2",{id:"9125-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.12.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[281],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8021:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={id:"exit",title:"Exit"},s=void 0,u={unversionedId:"datatypes/core/exit",id:"version-1.x/datatypes/core/exit",isDocsHomePage:!1,title:"Exit",description:"An Exit[E, A] value describes how fibers end life. It has two possible values:",source:"@site/versioned_docs/version-1.x/datatypes/core/exit.md",sourceDirName:"datatypes/core",slug:"/datatypes/core/exit",permalink:"/1.x/datatypes/core/exit",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/core/exit.md",tags:[],version:"1.x",frontMatter:{id:"exit",title:"Exit"},sidebar:"datatypes-sidebar",previous:{title:"IO",permalink:"/1.x/datatypes/core/io"},next:{title:"Cause",permalink:"/1.x/datatypes/core/cause"}},l=[],p={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"Exit[E, A]")," value describes how fibers end life. It has two possible values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Exit.Success")," contain a success value of type ",(0,a.kt)("inlineCode",{parentName:"li"},"A"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Exit.Failure")," contains a failure ",(0,a.kt)("a",{parentName:"li",href:"/1.x/datatypes/core/cause"},"Cause")," of type ",(0,a.kt)("inlineCode",{parentName:"li"},"E"),".")),(0,a.kt)("p",null,"We can call ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," on our effect to determine the Success or Failure of our fiber:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.console._\nfor {\n  successExit <- ZIO.succeed(1).run\n  _ <- successExit match {\n    case Exit.Success(value) =>\n      putStrLn(s"exited with success value: ${value}")\n    case Exit.Failure(cause) =>\n      putStrLn(s"exited with failure state: $cause")\n  }\n} yield ()\n')))}f.isMDXComponent=!0}}]);
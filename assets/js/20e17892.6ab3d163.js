"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3649],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2531:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={id:"io",title:"IO"},l=void 0,s={unversionedId:"datatypes/core/io",id:"version-1.x/datatypes/core/io",isDocsHomePage:!1,title:"IO",description:"IO[E, A] is a type alias for ZIO[Any, E, A], which represents an effect that has no requirements, and may fail with an E, or succeed with an A.",source:"@site/versioned_docs/version-1.x/datatypes/core/io.md",sourceDirName:"datatypes/core",slug:"/datatypes/core/io",permalink:"/1.x/datatypes/core/io",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/core/io.md",tags:[],version:"1.x",frontMatter:{id:"io",title:"IO"},sidebar:"datatypes-sidebar",previous:{title:"RIO",permalink:"/1.x/datatypes/core/rio"},next:{title:"Exit",permalink:"/1.x/datatypes/core/exit"}},c=[],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IO[E, A]")," is a type alias for ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO[Any, E, A]"),", which represents an effect that has no requirements, and may fail with an ",(0,o.kt)("inlineCode",{parentName:"p"},"E"),", or succeed with an ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",{parentName:"blockquote"},"In Scala, the ",(0,o.kt)("em",{parentName:"p"},"type alias")," is a way to give a name to another type, to avoid having to repeat the original type again and again. It doesn't affect the type-checking process. It just helps us to have an expressive API design.")),(0,o.kt)("p",null,"Let's see how the ",(0,o.kt)("inlineCode",{parentName:"p"},"IO")," type alias is defined:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"type IO[+E, +A] = ZIO[Any, E, A]\n")),(0,o.kt)("p",null,"So the ",(0,o.kt)("inlineCode",{parentName:"p"},"IO")," just equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," which doesn't need any requirement."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"IO[E, Nothing]")," (where the value type is ",(0,o.kt)("inlineCode",{parentName:"p"},"Nothing"),") are considered ",(0,o.kt)("em",{parentName:"p"},"unproductive"),", because the ",(0,o.kt)("inlineCode",{parentName:"p"},"Nothing")," type is ",(0,o.kt)("em",{parentName:"p"},"uninhabitable"),", i.e. there can be no actual values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Nothing"),". Values of this type may fail with an ",(0,o.kt)("inlineCode",{parentName:"p"},"E"),", but will never produce a value."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("em",{parentName:"p"},"Principle of The Least Power")),(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is the most powerful effect in the ZIO library. It helps us to model various types of workflows. On other hand, the type aliases are a way of subtyping and specializing the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," type, specific for a less powerful workflow. "),(0,o.kt)("p",{parentName:"blockquote"},"Lot of the time, we don't need such a piece of powerful machinery. So as a rule of thumb, whenever we require a less powerful effect, it's better to use the proper specialized type alias."),(0,o.kt)("p",{parentName:"blockquote"},"So there is no need to convert type aliases to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," data type, whenever the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is required, we can use the most precise type alias to fit our workflow requirement.")))}d.isMDXComponent=!0}}]);
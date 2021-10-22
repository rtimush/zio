"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7701],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,v=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5070:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={id:"use-zio-macros",title:"How to use ZIO Macros?"},l=void 0,s={unversionedId:"howto/use-zio-macros",id:"version-1.x/howto/use-zio-macros",isDocsHomePage:!1,title:"How to use ZIO Macros?",description:"Scrapping the boilerplate with macros",source:"@site/versioned_docs/version-1.x/howto/howto-macros.md",sourceDirName:"howto",slug:"/howto/use-zio-macros",permalink:"/1.x/howto/use-zio-macros",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/howto/howto-macros.md",tags:[],version:"1.x",frontMatter:{id:"use-zio-macros",title:"How to use ZIO Macros?"},sidebar:"howto-sidebar",previous:{title:"How to Access System Information?",permalink:"/1.x/howto/access-system-information"},next:{title:"How to Interop with Cats Effect?",permalink:"/1.x/howto/interop/with-cats-effect"}},p=[{value:"Scrapping the boilerplate with macros",id:"scrapping-the-boilerplate-with-macros",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3}],level:2},{value:"Capability accessors",id:"capability-accessors",children:[{value:"Installation",id:"installation",children:[],level:3},{value:"Description",id:"description",children:[],level:3}],level:2},{value:"Capability tags",id:"capability-tags",children:[{value:"Installation",id:"installation-1",children:[],level:3},{value:"Description",id:"description-1",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"scrapping-the-boilerplate-with-macros"},"Scrapping the boilerplate with macros"),(0,a.kt)("p",null,"Many libraries come together with usage best practices and repeatable code, ZIO is no different. Fortunately ZIO provides macros\nto perform these repetitive tasks for you. At the moment these are only available for Scala versions ",(0,a.kt)("inlineCode",{parentName:"p"},"2.x"),", however their equivalents\nfor Dotty are on our roadmap."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To enable macro expansion you need to setup your project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"for Scala ",(0,a.kt)("inlineCode",{parentName:"li"},">= 2.13")," add compiler option")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'scalacOptions += "-Ymacro-annotations"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"for Scala ",(0,a.kt)("inlineCode",{parentName:"li"},"< 2.13")," add macro paradise compiler plugin")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'compilerPlugin(("org.scalamacros" % "paradise"  % "2.1.1") cross CrossVersion.full)\n')),(0,a.kt)("h2",{id:"capability-accessors"},"Capability accessors"),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-macros" % "<zio-version>"\n')),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@accessible")," macro generates ",(0,a.kt)("em",{parentName:"p"},"capability accessors")," into annotated module object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.{ Has, ZIO }\nimport zio.macros.accessible\n\n@accessible\nobject AccountObserver {\n  trait Service {\n    def processEvent(event: AccountEvent): UIO[Unit]\n  }\n\n  // below will be autogenerated\n  def processEvent(event: AccountEvent) =\n    ZIO.accessM[Has[AccountObserver.Service]](_.get[Service].processEvent(event))\n}\n")),(0,a.kt)("p",null,"For normal values, a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"Nothing")," on error channel is generated.\nIf the code is throwing exceptions see ",(0,a.kt)("inlineCode",{parentName:"p"},"@throwing")," below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.{ Has, ZIO }\nimport zio.macros.accessible\n\n@accessible\nobject Module {\n  trait Service {\n    def pureMethod(v: Something): SomethingElse\n  }\n\n  // below will be autogenerated\n  def pureMethod(v: Something): ZIO[Service, Nothing, SomethingElse] =\n    ZIO.access[Has[Module.Service]](_.get[Service].pureMethod(v))\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@throwing")," annotation will mark impure methods.\nUsing this annotation will request ZIO to push the error on the error channel."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.{ Has, ZIO }\nimport zio.macros.accessible\n\n@accessible\nobject Module {\n  trait Service {\n    @throwing\n    def impureMethod(v: Something): SomethingElse\n  }\n\n  // below will be autogenerated\n  def impureMethod(v: Something): ZIO[Service, Throwable, SomethingElse] =\n    ZIO.accessM[Has[Module.Service]](s => ZIO(s.get[Service].impureMethod(v)))\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," the macro can only be applied to objects which contain a trait called ",(0,a.kt)("inlineCode",{parentName:"p"},"Service"),".")),(0,a.kt)("h2",{id:"capability-tags"},"Capability tags"),(0,a.kt)("h3",{id:"installation-1"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-test" % "<zio-version>"\n')),(0,a.kt)("h3",{id:"description-1"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@mockable[A]")," generates ",(0,a.kt)("em",{parentName:"p"},"capability tags")," and ",(0,a.kt)("em",{parentName:"p"},"mock layer")," into annotated object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.test.mock.mockable\n\n@mockable[AccountObserver.Service]\nobject AccountObserverMock\n")),(0,a.kt)("p",null,"Will result in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.{ Has, UIO, URLayer, ZLayer }\nimport zio.test.mock.{ Mock, Proxy }\n\nobject AccountObserverMock extends Mock[Has[AccountObserver.Service]] {\n\n  object ProcessEvent extends Effect[AccountEvent, Nothing, Unit]\n  object RunCommand   extends Effect[Unit, Nothing, Unit]\n\n  val compose: URLayer[Has[Proxy], AccountObserver] =\n    ZLayer.fromServiceM { proxy =>\n      withRuntime.map { rts =>\n        new AccountObserver.Service {\n          def processEvent(event: AccountEvent) = proxy(ProcessEvent, event)\n          def runCommand: UIO[Unit]           = proxy(RunCommand)\n        }\n      }\n    }\n}\n")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5726],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4304:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"with-java",title:"How to Interop with Java?"},p=void 0,u={unversionedId:"howto/interop/with-java",id:"version-1.x/howto/interop/with-java",isDocsHomePage:!1,title:"How to Interop with Java?",description:"ZIO has full interoperability with foreign Java code. Let me show you how it works and then BOOM, tomorrow you can show off your purely functional Java at work.",source:"@site/versioned_docs/version-1.x/howto/interop/with-java.md",sourceDirName:"howto/interop",slug:"/howto/interop/with-java",permalink:"/1.x/howto/interop/with-java",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/howto/interop/with-java.md",tags:[],version:"1.x",frontMatter:{id:"with-java",title:"How to Interop with Java?"},sidebar:"howto-sidebar",previous:{title:"How to Interop with Future?",permalink:"/1.x/howto/interop/with-future"},next:{title:"How to Interop with JavaScript?",permalink:"/1.x/howto/interop/with-javascript"}},c=[{value:"From Java CompletionStage and back",id:"from-java-completionstage-and-back",children:[],level:2},{value:"Java Future",id:"java-future",children:[],level:2},{value:"NIO Completion handler",id:"nio-completion-handler",children:[],level:2}],s={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ZIO has full interoperability with foreign Java code. Let me show you how it works and then ",(0,r.kt)("em",{parentName:"p"},"BOOM"),", tomorrow you can show off your purely functional Java at work."),(0,r.kt)("p",null,"ZIO has built-in conversion between ZIO data types (like ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Fiber"),") and Java concurrent data types like ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletionStage.html"},(0,r.kt)("inlineCode",{parentName:"a"},"CompletionStage")),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Future.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Future"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/channels/CompletionHandler.html"},(0,r.kt)("inlineCode",{parentName:"a"},"CompletionHandler")),"."),(0,r.kt)("h2",{id:"from-java-completionstage-and-back"},"From Java CompletionStage and back"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CompletionStage")," is the interface that comes closest to emulate a functional asynchronous effects API like ZIO's, so we start with it. It's a breeze:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'def loggedStage[A](stage: => CompletionStage[A]): Task[A] =\n    ZIO.fromCompletionStage(UIO {\n        stage.thenApplyAsync { a =>\n            println("Stage completed with " + a)\n            a\n        }\n    })\n')),(0,r.kt)("p",null,"By Jove, you can even turn it into fiber!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def stageToFiber[A](stage: => CompletionStage[A]): Fiber[Throwable, A] = \n  Fiber.fromCompletionStage(future)\n")),(0,r.kt)("p",null,"This API creates a synthetic fiber which doesn't have any notion of identity."),(0,r.kt)("p",null,"Additionally, you may want to go the other way and convert a ZIO value into a ",(0,r.kt)("inlineCode",{parentName:"p"},"CompletionStage"),". Easy as pie:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def taskToStage[A](task: Task[A]): UIO[CompletableFuture[A]] =\n    task.toCompletableFuture\n")),(0,r.kt)("p",null,"As you can see, it commits to a concrete class implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"CompletionStage")," interface, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),". It is worth to point out that any ",(0,r.kt)("inlineCode",{parentName:"p"},"IO[E, A]")," can be turned into a completable future provided you can turn a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," into a ",(0,r.kt)("inlineCode",{parentName:"p"},"Throwable"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def ioToStage[E, A](io: IO[E, A])(toThrowable: E => Throwable): UIO[CompletableFuture[A]] =\n    io.toCompletableFutureWith(toThrowable)\n")),(0,r.kt)("h2",{id:"java-future"},"Java Future"),(0,r.kt)("p",null,"You can embed any ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.concurrent.Future")," in a ZIO computation via ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.fromFutureJava"),". A toy wrapper around Apache Async HTTP client could look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def execute(client: HttpAsyncClient, request: HttpUriRequest): RIO[Blocking, HttpResponse] =\n    ZIO.fromFutureJava(UIO {\n        client.execute(request, null)\n    })\n")),(0,r.kt)("p",null,"That's it. Just a bit of a warning here, mate. As you can see from the requirement on the produced value, ZIO uses the blocking ",(0,r.kt)("inlineCode",{parentName:"p"},"Future#get")," call internally. It is running on the blocking thread pool, of course, but I thought you should know. If possible, use ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.fromCompletionStage")," instead, as detailed above."),(0,r.kt)("p",null,"Should you need it, it is also possible to convert a future into a fiber using ",(0,r.kt)("inlineCode",{parentName:"p"},"Fiber.fromFutureJava"),". Same same, but different:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def execute(client: HttpAsyncClient, request: HttpUriRequest): Fiber[Throwable, HttpResponse] =\n    Fiber.fromFutureJava {\n        client.execute(request, null)\n    }\n")),(0,r.kt)("h2",{id:"nio-completion-handler"},"NIO Completion handler"),(0,r.kt)("p",null,"Java libraries using channels from the NIO API for asynchronous, interruptible I/O can be hooked into by providing completion handlers. As in, reading the contents of a file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def readFile(file: AsynchronousFileChannel): Task[Chunk[Byte]] = for {\n    pos <- Ref.make(0)\n    buf <- ZIO.effectTotal(ByteBuffer.allocate(1024))\n    contents <- Ref.make[Chunk[Byte]](Chunk.empty)\n    def go = pos.get.flatMap { p =>\n        ZIO.effectAsyncWithCompletionHandler[Chunk[Byte]] { handler =>\n            file.read(buf, p, buf, handler)\n        }.flatMap {\n            case -1 => contents.get\n            case n  =>\n                ZIO.effectTotal {\n                    val arr = Array.ofDim[Byte](n)\n                    buf.get(arr, 0, n)\n                    buf.clear()\n                    Chunk.fromArray(arr)\n                }.flatMap { slice =>\n                    contents.update(_ ++ slice)\n                } *> pos.update(_ + n) *> go\n        }\n    }\n    dump <- go\n} yield dump\n")),(0,r.kt)("p",null,"As you can see, ZIO provides a CPS-style API here which is a bit different from the two sections above, but hey still super elegant."))}m.isMDXComponent=!0}}]);
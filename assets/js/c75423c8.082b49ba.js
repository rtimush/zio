"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2786],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=h(a),u=r,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var h=2;h<i;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9112:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return p},default:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"index",title:"Introduction"},l=void 0,h={unversionedId:"datatypes/fiber/index",id:"version-1.x/datatypes/fiber/index",isDocsHomePage:!1,title:"Introduction",description:"Introduction",source:"@site/versioned_docs/version-1.x/datatypes/fiber/index.md",sourceDirName:"datatypes/fiber",slug:"/datatypes/fiber/index",permalink:"/1.x/datatypes/fiber/index",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/fiber/index.md",tags:[],version:"1.x",frontMatter:{id:"index",title:"Introduction"},sidebar:"datatypes-sidebar",previous:{title:"TaskLayer",permalink:"/1.x/datatypes/contextual/tasklayer"},next:{title:"Fiber",permalink:"/1.x/datatypes/fiber/fiber"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Why Fibers?",id:"why-fibers",children:[{value:"Unbounded Size",id:"unbounded-size",children:[],level:3},{value:"Lightweight",id:"lightweight",children:[],level:3},{value:"Asynchronous",id:"asynchronous",children:[],level:3},{value:"Typed and Composable",id:"typed-and-composable",children:[],level:3},{value:"Interrupt Safe",id:"interrupt-safe",children:[],level:3},{value:"Structured Concurrency",id:"structured-concurrency",children:[{value:"Global Lifetime",id:"global-lifetime",children:[],level:4},{value:"Fine-grained Scope",id:"fine-grained-scope",children:[],level:4}],level:3}],level:2},{value:"Fiber Data Types",id:"fiber-data-types",children:[],level:2}],d={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A Fiber can be thought of as a virtual thread. A Fiber is the analog of a Java thread (",(0,i.kt)("inlineCode",{parentName:"p"},"java.lang.thread"),"), but it performs much better. Fibers, on the other hand, are implemented in such a fashion that a single JVM thread will end up executing many fibers. We can think of fibers as unbounded JVM threads."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"Warning"),", if you are not an advanced programmer:")),(0,i.kt)("p",{parentName:"blockquote"},"You should avoid fibers. If you can avoid fibers, then do it. ZIO gives you many concurrent primitives like ",(0,i.kt)("inlineCode",{parentName:"p"},"raceWith"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"zipPar"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"foreachPar"),", and so forth, which allows you to avoid using fibers directly."),(0,i.kt)("p",{parentName:"blockquote"},"Fibers just like threads are low-level constructs. It's not generally recommended for an average programmer to manually use fibers. It is very easy to make lots of mistakes or to introduce performance problems by manually using them.")),(0,i.kt)("h2",{id:"why-fibers"},"Why Fibers?"),(0,i.kt)("p",null,"There are some limitations with JVM threads:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"They are scarce")," \u2014 Threads on the JVM map to the operating system level threads which imposes an upper bound on the number of threads that we can have inside our application.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Expensive on creation")," \u2014 Their creation is expensive in terms of time and memory complexity.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Much Overhead on Context Switching")," \u2014 Switching between the execution of one thread to another thread is not cheap, and it takes a lot of time.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Lack of Composability")," \u2014 Threads are not typed. They don't have a meaningful return type, due to this limitation, we cannot compose threads. Also, it has no type parameters for error and it is assumed if that thread started it might throw some exception of throwable type. In Java when we create a thread, we should provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," function that returns void. It's a void returning method. So threads cannot finish with any specific value.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Synchronous")))),(0,i.kt)("p",null,"In the following sections, we are going to discuss the key features of fibers, and how fibers overcame Java thread drawbacks."),(0,i.kt)("h3",{id:"unbounded-size"},"Unbounded Size"),(0,i.kt)("p",null,"So whereas the mapping from JVM threads to operating system threads is one-to-one, ",(0,i.kt)("strong",{parentName:"p"},"the mapping of fiber to a thread is many-to-one"),". That is to say, any JVM thread will end up executing anywhere from hundreds to thousands even tens of thousands of threads concurrently, by hopping back and forth between them as necessary. They give us virtual threads in which it has the benefits of threads but the scalability way beyond threads. In other words, fibers provide us massive concurrently with ",(0,i.kt)("strong",{parentName:"p"},"lightweight green threading")," on the JVM."),(0,i.kt)("p",null,"As a rough rule of thumb, we can have an application with a thousand real threads. No problem, modern servers can support applications with a thousand threads. However, we cannot have an application with a hundred thousand threads, that application will die. That just won't make any progress. The JVM nor our operating system can physically support a hundred thousand threads. However, it is no problem to have a Scala application with a hundred thousand fibers that application can perform in a very high-performance fashion, and the miracle that enables that to happen is fiber."),(0,i.kt)("h3",{id:"lightweight"},"Lightweight"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"JVM threads are expensive to create in order of time and memory complexity.")," Also it takes a lot of time to switch between one thread of execution to another. Fibers are virtual and, and as they use ",(0,i.kt)("strong",{parentName:"p"},"green threading"),", they are considered to be ",(0,i.kt)("strong",{parentName:"p"},"lightweight cooperative threads"),", this means that fibers always ",(0,i.kt)("em",{parentName:"p"},"yield")," their executions to each other without the overhead of preemptive scheduling."),(0,i.kt)("h3",{id:"asynchronous"},"Asynchronous"),(0,i.kt)("p",null,"Fiber is asynchronous and, a thread is always synchronous. That is why fibers have higher scalability because they are asynchronous. Threads are not, that is why they don't scale as well."),(0,i.kt)("h3",{id:"typed-and-composable"},"Typed and Composable"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fibers have typed error and success values"),". So actually fiber has two type parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," corresponds to the error channel. It indicates the error type with which the fiber can fail.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," corresponds to the success value of the computation. That is the type with which the fiber can succeed. Whereas fibers can finish with the value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),"."))),(0,i.kt)("p",null,"The fact, that fibers are typed allows us to write more type-safe programs. Also, it increases the compositional properties of our programs. Because we can say, we are going to wait on that fiber to finish and when it's done, we are going to get its value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,i.kt)("h3",{id:"interrupt-safe"},"Interrupt Safe"),(0,i.kt)("p",null,"With threads in Java, it is not a safe operation to terminate them, by using the stop method. The stop operation has been ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/1.5.0/docs/guide/misc/threadPrimitiveDeprecation.html"},"deprecated"),". So this is not a safe operation to force kill a thread. Instead, we should try to request an interruption to the thread, but in this case, ",(0,i.kt)("strong",{parentName:"p"},"the thread may not respond to our request, and it may just go forever"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fiber has a safe version of this functionality that works very well"),". Just like we can interrupt a thread, we can interrupt a fiber too, but interruption of fibers is much more reliable. It will always work, and ",(0,i.kt)("strong",{parentName:"p"},"it probably works very fast"),". We don't need to wait around, we can just try to interrupt them, and they will be gone very soon."),(0,i.kt)("h3",{id:"structured-concurrency"},"Structured Concurrency"),(0,i.kt)("p",null,"Until now, we find that ZIO fiber solves a lot of drawbacks of using Java threads. With fibers, we can have hundreds of thousands and even thousands of thousands of fibers are started and working together. We reached a very massive concurrently with fibers. Now how can we manage them? Some of them are top-level fibers and some others are forked and become children of their parents. How can we manage their scopes, how to keep track of all fibers, and prevent them to leak? What happens during the execution of a child fiber, the parent execution interrupted? The child fibers should be scoped to their parent fibers. We need a way to manage these scopes automatically. This is where structured concurrency shines."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"Important"),":")),(0,i.kt)("p",{parentName:"blockquote"},"It's worth mentioning that in the ZIO model, all codes run on the fiber. There is no such thing as code that is executing outside of the fiber. When we create a main function in ZIO that returns an effect, even if we don't explicitly fork a fiber when we execute that effect, that effect will execute on what is called the main fiber. It's a top-level fiber."),(0,i.kt)("p",{parentName:"blockquote"},"It's just like if we have a main function in Java then that main function will execute on the main thread. There is no code in Java that does not execute on a thread. All code executes on a thread even if you didn't create a thread.")),(0,i.kt)("p",null,"ZIO has support for structured concurrency. The way ZIO structured concurrency works is that ",(0,i.kt)("strong",{parentName:"p"},"the child fibers are scoped to their parent fibers")," which means ",(0,i.kt)("strong",{parentName:"p"},"when the parent effect is done running then its child's effects will be automatically interrupted"),". So when we fork, and we get back a fiber, the fiber's lifetime is bound to the parent fiber, that forked it. It is very difficult to leak fibers because child fibers are guaranteed to complete before their parents."),(0,i.kt)("p",null,"The structure concurrency gives us a way to reason about fiber lifespans. We can statically reason about the lifetimes of children fibers just by looking at our code. We don't need to insert complicated logic to keep track of all the child fibers and manually shut them down."),(0,i.kt)("h4",{id:"global-lifetime"},"Global Lifetime"),(0,i.kt)("p",null,"Sometimes we want a child fiber to outlive the scope of the parent. what do you do in that case? well, we have another operator called ",(0,i.kt)("inlineCode",{parentName:"p"},"forkDaemon"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"forkDaemon")," forks the fiber as a daemon fiber. Daemon fibers can outlive their parents. They can live forever. They run in the background doing their work until they end with failure or success. This gives us a way to spawn background jobs that should just keep on going regardless of what happens to the parent."),(0,i.kt)("h4",{id:"fine-grained-scope"},"Fine-grained Scope"),(0,i.kt)("p",null,"If we need a very flexible fine-grained control over the lifetime of a fiber there is another operator called ",(0,i.kt)("inlineCode",{parentName:"p"},"forkin"),". We can fork a fiber inside a specific scope, when that scope is closed then the fiber will be terminated."),(0,i.kt)("h2",{id:"fiber-data-types"},"Fiber Data Types"),(0,i.kt)("p",null,"ZIO fiber contains a few data types that can help us solve complex problems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/1.x/datatypes/fiber/fiber"},"Fiber"))," \u2014 A fiber value models an ",(0,i.kt)("inlineCode",{parentName:"li"},"IO")," value that has started running, and is the moral equivalent of a green thread."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/1.x/datatypes/fiber/fiberref"},"FiberRef"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"FiberRef[A]")," models a mutable reference to a value of type ",(0,i.kt)("inlineCode",{parentName:"li"},"A"),". As opposed to ",(0,i.kt)("inlineCode",{parentName:"li"},"Ref[A]"),", a value is bound to an executing ",(0,i.kt)("inlineCode",{parentName:"li"},"Fiber")," only.  You can think of it as Java's ",(0,i.kt)("inlineCode",{parentName:"li"},"ThreadLocal")," on steroids."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/1.x/datatypes/fiber/fiberstatus"},"Fiber.Status"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"Fiber.Status")," describe the current status of a Fiber."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/1.x/datatypes/fiber/fiberid"},"Fiber.Id"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"Fiber.Id")," describe the unique identity of a Fiber.")))}c.isMDXComponent=!0}}]);
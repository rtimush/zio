"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9406],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4712:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"zio-zmx",title:"ZIO ZMX"},l=void 0,c={unversionedId:"resources/ecosystem/officials/zio-zmx",id:"resources/ecosystem/officials/zio-zmx",isDocsHomePage:!1,title:"ZIO ZMX",description:"ZIO ZMX is a monitoring, metrics, and diagnostics toolkit for ZIO applications.",source:"@site/docs/resources/ecosystem/officials/zio-zmx.md",sourceDirName:"resources/ecosystem/officials",slug:"/resources/ecosystem/officials/zio-zmx",permalink:"/resources/ecosystem/officials/zio-zmx",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/officials/zio-zmx.md",tags:[],version:"current",frontMatter:{id:"zio-zmx",title:"ZIO ZMX"},sidebar:"resources-sidebar",previous:{title:"ZIO Telemetry",permalink:"/resources/ecosystem/officials/zio-telemetry"},next:{title:"Introduction",permalink:"/resources/ecosystem/community/index"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-zmx"},"ZIO ZMX")," is a monitoring, metrics, and diagnostics toolkit for ZIO applications."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"So ZIO ZMX is giving us a straightforward way to understand exactly what is going on in our ZIO application when we deploy that in production."),(0,i.kt)("p",null,"ZIO ZMX key features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Easy Setup")," \u2014 It seamlessly integrates with an existing application. We don't need to change any line of the existing ZIO application, except a few lines of code at the top level."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Diagnostics")," \u2014  To track the activity of fibers in a ZIP application including fiber lifetimes and reason for termination."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Metrics")," \u2014 Tracking of user-defined metrics (Counter, Gauge, Histogram, etc.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Integrations")," \u2014 Support for major metrics collection services including ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("a",{parentName:"em",href:"https://github.com/prometheus/prometheus"},"Prometheus"))," and ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("a",{parentName:"em",href:"https://github.com/statsd/statsd"},"StatsD")),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Zero Dependencies")," - No dependencies other than ZIO itself.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-zmx" % "0.0.6"\n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"To run this example, we also should add the following dependency in our ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "org.polynote" %% "uzhttp" % "0.2.7"\n')),(0,i.kt)("p",null,"In this example, we expose metric information using ",(0,i.kt)("em",{parentName:"p"},"Prometheus")," protocol:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import uzhttp._\nimport uzhttp.server.Server\nimport zio._\nimport zio.blocking.Blocking\nimport zio.clock.Clock\nimport zio.console._\nimport zio.duration.durationInt\nimport zio.zmx.metrics._\nimport zio.zmx.prometheus.PrometheusClient\n\nimport java.io.IOException\nimport java.lang\nimport java.net.InetSocketAddress\n\nobject ZmxSampleApp extends zio.App {\n\n  val myApp: ZIO[Console with Clock with Has[PrometheusClient] with Blocking, IOException, Unit] =\n    for {\n      server <-\n        Server\n          .builder(new InetSocketAddress("localhost", 8080))\n          .handleSome { case request if request.uri.getPath == "/" =>\n            PrometheusClient.snapshot.map(p => Response.plain(p.value))\n          }\n          .serve\n          .use(_.awaitShutdown).fork\n      program <-\n        (for {\n          _ <- (ZIO.sleep(1.seconds) *> request @@ MetricAspect.count("request_counts")).forever.forkDaemon\n          _ <- (ZIO.sleep(3.seconds) *>\n            ZIO.succeed(\n              lang.Runtime.getRuntime.totalMemory() - lang.Runtime.getRuntime.freeMemory()\n            ).map(_ / (1024.0 * 1024.0)) @@ MetricAspect.setGauge("memory_usage")).forever.forkDaemon\n        } yield ()).fork\n      _ <- putStrLn("Press Any Key") *> getStrLn.catchAll(_ => ZIO.none) *> server.interrupt *> program.interrupt\n    } yield ()\n\n  def run(args: List[String]): URIO[ZEnv, ExitCode] =\n    myApp.provideCustomLayer(PrometheusClient.live).exitCode\n\n  private def request: UIO[Unit] = ZIO.unit\n}\n')),(0,i.kt)("p",null,"By calling the following API we can access metric information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET localhost:8080\n")),(0,i.kt)("p",null,"Now we can config the Prometheus server to scrape metric information periodically."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=VM_8ByPuAcI"},"ZIO WORLD - ZIO ZMX - Development Testing, Deployment")," by Adam Fraser (May 2021) \u2014 Adam Fraser went on to present the state of ZMX, showing how metrics Iadded to the runtime system will enable rich real-time analytics out of any ZIO app with zero coding, including fiber lifetimes, fiber failure analysis, fiber counts, & much more (StatsD/Promethus/etc).")))}m.isMDXComponent=!0}}]);
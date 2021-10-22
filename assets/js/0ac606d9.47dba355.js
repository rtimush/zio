"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8360],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,y=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8289:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={id:"zio-amqp",title:"ZIO AMQP"},l=void 0,s={unversionedId:"resources/ecosystem/community/zio-amqp",id:"resources/ecosystem/community/zio-amqp",isDocsHomePage:!1,title:"ZIO AMQP",description:"ZIO AMQP is a ZIO-based AMQP client for Scala.",source:"@site/docs/resources/ecosystem/community/zio-amqp.md",sourceDirName:"resources/ecosystem/community",slug:"/resources/ecosystem/community/zio-amqp",permalink:"/resources/ecosystem/community/zio-amqp",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/community/zio-amqp.md",tags:[],version:"current",frontMatter:{id:"zio-amqp",title:"ZIO AMQP"},sidebar:"resources-sidebar",previous:{title:"TranzactIO",permalink:"/resources/ecosystem/community/tranzactio"},next:{title:"ZIO Arrow",permalink:"/resources/ecosystem/community/zio-arrow"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],p={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/svroonland/zio-amqp"},"ZIO AMQP")," is a ZIO-based AMQP client for Scala."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"ZIO AMQP is a ZIO-based wrapper around the RabbitMQ client. It provides a streaming interface to AMQP queues and helps to prevent us from shooting ourselves in the foot with thread-safety issues."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "nl.vroste" %% "zio-amqp" % "0.2.0"\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"First, let's create an instance of RabbitMQ:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d --name some-rabbit -p 5672:5672 -p 5673:5673 -p 15672:15672 rabbitmq:3-management\n")),(0,a.kt)("p",null,"Then we need to create ",(0,a.kt)("inlineCode",{parentName:"p"},"my_exchange")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"my_queue")," and bind the queue to the exchange via the RabbitMQ management dashboard (",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:15672"),")."),(0,a.kt)("p",null,"Now we can run the example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import nl.vroste.zio.amqp._\nimport zio._\nimport zio.blocking._\nimport zio.clock.Clock\nimport zio.console._\nimport zio.duration.durationInt\nimport zio.random.Random\n\nimport java.net.URI\n\nobject ZIOAMQPExample extends zio.App {\n\n  val channelM: ZManaged[Blocking, Throwable, Channel] = for {\n    connection <- Amqp.connect(URI.create("amqp://localhost:5672"))\n    channel <- Amqp.createChannel(connection)\n  } yield channel\n\n  val myApp: ZIO[Blocking with Console with Clock with Random, Throwable, Unit] =\n    channelM.use { channel =>\n      val producer: ZIO[Blocking with Random with Clock, Throwable, Long] =\n        zio.random.nextUUID\n          .flatMap(uuid =>\n            channel.publish("my_exchange", uuid.toString.getBytes)\n              .map(_ => ())\n          ).schedule(Schedule.spaced(1.seconds))\n\n      val consumer: ZIO[Blocking with Console, Throwable, Unit] = channel\n        .consume(queue = "my_queue", consumerTag = "my_consumer")\n        .mapM { record =>\n          val deliveryTag = record.getEnvelope.getDeliveryTag\n          putStrLn(s"Received $deliveryTag: ${new String(record.getBody)}") *>\n            channel.ack(deliveryTag)\n        }\n        .runDrain\n\n      for {\n        p <- producer.fork\n        c <- consumer.fork\n        _ <- p.zip(c).join\n      } yield ()\n    }\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    myApp.exitCode\n}\n')))}m.isMDXComponent=!0}}]);
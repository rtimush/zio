"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9724],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5667:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],i={id:"usecases_testing",title:"Testing"},l=void 0,p={unversionedId:"usecases/usecases_testing",id:"version-1.x/usecases/usecases_testing",isDocsHomePage:!1,title:"Testing",description:"ZIO Test is a zero dependency testing library that makes it easy to test effectual programs. Begin by adding the required configuration in your SBT settings:",source:"@site/versioned_docs/version-1.x/usecases/testing.md",sourceDirName:"usecases",slug:"/usecases/usecases_testing",permalink:"/1.x/usecases/usecases_testing",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/usecases/testing.md",tags:[],version:"1.x",frontMatter:{id:"usecases_testing",title:"Testing"},sidebar:"usecases-sidebar",previous:{title:"Streaming",permalink:"/1.x/usecases/usecases_streaming"}},u=[],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZIO Test")," is a zero dependency testing library that makes it easy to test effectual programs. Begin by adding the required configuration in your SBT settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "dev.zio" %% "zio-test"          % zioVersion % "test",\n  "dev.zio" %% "zio-test-sbt"      % zioVersion % "test",\n  "dev.zio" %% "zio-test-magnolia" % zioVersion % "test" // optional\n)\ntestFrameworks += new TestFramework("zio.test.sbt.ZTestFramework")\n')),(0,r.kt)("p",null,"From there the fastest way to start writing tests is to extend ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultRunnableSpec"),", which creates a Spec that is also an executable program you can run from within SBT using ",(0,r.kt)("inlineCode",{parentName:"p"},"test:run")," or by using ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," with the SBT test runner."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.console._\nimport zio.test._\nimport zio.test.Assertion._\nimport zio.test.environment._\n\nimport java.io.IOException\n\nimport HelloWorld._\n\nobject HelloWorld {\n  def sayHello: ZIO[Console, IOException, Unit] =\n    console.putStrLn("Hello, World!")\n}\n\nobject HelloWorldSpec extends DefaultRunnableSpec {\n  def spec = suite("HelloWorldSpec")(\n    testM("sayHello correctly displays output") {\n      for {\n        _      <- sayHello\n        output <- TestConsole.output\n      } yield assert(output)(equalTo(Vector("Hello, World!\\n")))\n    }\n  )\n}\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"ZIO Test"),", all tests are immutable values and tests are tightly integrated with ZIO, so testing effectual programs is as natural as testing pure ones. In the example above, our test involved the effect of printing to the console but we didn't have to do anything differently in our test because of this other than use ",(0,r.kt)("inlineCode",{parentName:"p"},"testM")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Test Environment")),(0,r.kt)("p",null,"The library also includes built-in test versions of all the standard ZIO environmental effects (",(0,r.kt)("inlineCode",{parentName:"p"},"Clock"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Console"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"System"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Random"),"), so when we tested our program above the ",(0,r.kt)("inlineCode",{parentName:"p"},"helloWorld"),' method didn\'t actually print a String to the console but instead wrote the String to a buffer that could access for testing purposes. If you ever do need to access the "live" environment just use the ',(0,r.kt)("inlineCode",{parentName:"p"},"live")," method in the ",(0,r.kt)("inlineCode",{parentName:"p"},"mock")," package or specify the live environment in your type signature like ",(0,r.kt)("inlineCode",{parentName:"p"},"Live[Console]"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Property Based Testing")),(0,r.kt)("p",null,"Support for property based testing is included out of the box through the ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," method and its variants and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Gen")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Sample")," classes. For example, here is how we could write a property to test that integer addition is associative."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val associativity =\n  check(Gen.anyInt, Gen.anyInt, Gen.anyInt) { (x, y, z) =>\n    assert((x + y) + z)(equalTo(x + (y + z)))\n  }\n")),(0,r.kt)("p",null,"If a property fails, the failure will be automatically shrunk to the smallest failing cases to make it easier for you to diagnose the problem. And shrinking is integrated with the generation of random variables, so you are guaranteed that any shrunk counterexample will meet the conditions of your original generator."),(0,r.kt)("p",null,"ZIO Test also supports automatic derivation of generators using the ZIO Test Magnolia module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.random.Random\nimport zio.test.magnolia._\n\nfinal case class Point(x: Double, y: Double)\n\nval genPoint: Gen[Random with Sized, Point] = DeriveGen[Point]\n \nsealed trait Color\ncase object Red   extends Color\ncase object Green extends Color\ncase object Blue  extends Color\n \nval genColor: Gen[Random with Sized, Color] = DeriveGen[Color]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Results Reporting")),(0,r.kt)("p",null,"When tests do fail, it is easy to see what went wrong because the test reporter will show you the entire assertion that failed and the specific part of the assertion that failed. To facilitate this, a variety of assertion combinators are included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Assertion")," class."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Test Aspects")),(0,r.kt)("p",null,"Test aspects are powerful tools for modifying behavior of individual tests or even entire suites that you have already written. Convenient syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"@@")," is provided for applying test aspects. So for example you could apply a timeout to a test by using ",(0,r.kt)("inlineCode",{parentName:"p"},"test @@ timeout(60.seconds)")," or only run a test on javascript by using ",(0,r.kt)("inlineCode",{parentName:"p"},"test @@ jsOnly"),". Test aspects are highly composable so you can combine multiple test aspects together or apply them only to certain tests that match a predicate you specify."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Zero Dependencies")),(0,r.kt)("p",null,"As a library with zero third party dependencies, this project is available on the JVM, ScalaJS, Dotty, and will be available on Scala Native in the near future. So you can write your tests once and make sure that your code works correctly across all platforms that you support."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JUnit integration")),(0,r.kt)("p",null,"A custom JUnit runner is provided for running ZIO Test specs under other build tools (like Maven, Gradle, Bazel, etc.) and under IDEs.\nTo get the runner, add the equivalent of following dependency definition under your build tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'    "dev.zio" %% "zio-test-junit"   % zioVersion % "test"\n')),(0,r.kt)("p",null,"To make your spec appear as a JUnit test to build tools and IDEs, convert it to a ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," (JUnit won't run scala objects) and\nannotate it with ",(0,r.kt)("inlineCode",{parentName:"p"},"@RunWith(classOf[zio.test.junit.ZTestJUnitRunner])")," or simply extend ",(0,r.kt)("inlineCode",{parentName:"p"},"zio.test.junit.JUnitRunnableSpec"),".\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio/blob/master/examples/jvm/src/test/scala/zio/examples/test/ExampleSpecWithJUnit.scala"},"ExampleSpecWithJUnit")),(0,r.kt)("p",null,"SBT (and thus Scala.JS) is not supported, as the JUnit Test Framework for SBT doesn't seem to support custom runners."))}d.isMDXComponent=!0}}]);
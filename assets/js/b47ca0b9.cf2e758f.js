"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5321],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,p=u["".concat(c,".").concat(m)]||u[m]||k[m]||a;return n?r.createElement(p,i(i({ref:t},s),{},{components:n})):r.createElement(p,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1488:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"treentrantlock",title:"TReentrantLock"},c=void 0,d={unversionedId:"datatypes/stm/treentrantlock",id:"version-1.x/datatypes/stm/treentrantlock",isDocsHomePage:!1,title:"TReentrantLock",description:"A TReentrantLock allows safe concurrent access to some mutable state efficiently, allowing multiple fibers to read the",source:"@site/versioned_docs/version-1.x/datatypes/stm/treentrantlock.md",sourceDirName:"datatypes/stm",slug:"/datatypes/stm/treentrantlock",permalink:"/1.x/datatypes/stm/treentrantlock",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/stm/treentrantlock.md",tags:[],version:"1.x",frontMatter:{id:"treentrantlock",title:"TReentrantLock"},sidebar:"datatypes-sidebar",previous:{title:"TQueue",permalink:"/1.x/datatypes/stm/tqueue"},next:{title:"TSemaphore",permalink:"/1.x/datatypes/stm/tsemaphore"}},s=[{value:"Semantics",id:"semantics",children:[],level:2},{value:"Creating a reentrant lock",id:"creating-a-reentrant-lock",children:[],level:2},{value:"Acquiring a read lock",id:"acquiring-a-read-lock",children:[],level:2},{value:"Acquiring a write lock",id:"acquiring-a-write-lock",children:[],level:2},{value:"Multiple fibers can hold read locks",id:"multiple-fibers-can-hold-read-locks",children:[],level:2},{value:"Upgrading and downgrading locks",id:"upgrading-and-downgrading-locks",children:[],level:2},{value:"Acquiring a write lock in a contentious scenario",id:"acquiring-a-write-lock-in-a-contentious-scenario",children:[],level:2},{value:"Safer methods  (<code>readLock</code> and <code>writeLock</code>)",id:"safer-methods--readlock-and-writelock",children:[],level:2}],k={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A TReentrantLock allows safe concurrent access to some mutable state efficiently, allowing multiple fibers to read the\nstate (because that is safe to do) but only one fiber to modify the state (to prevent data corruption). Also, even though\nthe TReentrantLock is implemented using STM; reads and writes can be committed, allowing this to be used as a building\nblock for solutions that expose purely ZIO effects and internally allow locking on more than one piece of state in a\nsimple and composable way (thanks to STM)."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"TReentrantLock")," is a ",(0,a.kt)("em",{parentName:"p"},"reentrant")," read/write lock. A reentrant lock is one where a fiber can claim the lock multiple\ntimes without blocking on itself. It's useful in situations where it's not easy to keep track of whether you have already\ngrabbed a lock. If a lock is non re-entrant you could grab the lock, then block when you go to grab it again, effectively\ncausing a deadlock. "),(0,a.kt)("h2",{id:"semantics"},"Semantics"),(0,a.kt)("p",null,"This lock allows both readers and writers to reacquire read or write locks with reentrancy guarantees. Readers are not\nallowed until all write locks held by the writing fiber have been released. Writers are not allowed unless there are no\nother locks or the fiber wanting to hold a write lock already has a read lock and there are no other fibers holding a\nread lock. "),(0,a.kt)("p",null,"This lock also allows upgrading from a read lock to a write lock (automatically) and downgrading\nfrom a write lock to a read lock (automatically provided that you upgraded from a read lock to a write lock)."),(0,a.kt)("h2",{id:"creating-a-reentrant-lock"},"Creating a reentrant lock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.stm._\n\nval reentrantLock = TReentrantLock.make\n")),(0,a.kt)("h2",{id:"acquiring-a-read-lock"},"Acquiring a read lock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.stm._\n\nval program =\n  (for {\n    lock <- TReentrantLock.make\n    _    <- lock.acquireRead\n    rst  <- lock.readLocked  // lock is read-locked once transaction completes\n    wst  <- lock.writeLocked // lock is not write-locked\n  } yield rst && !wst).commit\n")),(0,a.kt)("h2",{id:"acquiring-a-write-lock"},"Acquiring a write lock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval writeLockProgram: UIO[Boolean] =\n  (for {\n    lock <- TReentrantLock.make\n    _    <- lock.acquireWrite\n    wst  <- lock.writeLocked // lock is write-locked once transaction completes\n    rst  <- lock.readLocked  // lock is not read-locked\n  } yield !rst && wst).commit\n")),(0,a.kt)("h2",{id:"multiple-fibers-can-hold-read-locks"},"Multiple fibers can hold read locks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval multipleReadLocksProgram: UIO[(Int, Int)] = for {\n  lock          <- TReentrantLock.make.commit\n  fiber0        <- lock.acquireRead.commit.fork // fiber0 acquires a read-lock\n  currentState1 <- fiber0.join                  // 1 read lock held\n  fiber1        <- lock.acquireRead.commit.fork // fiber1 acquires a read-lock\n  currentState2 <- fiber1.join                  // 2 read locks held \n} yield (currentState1, currentState2)\n")),(0,a.kt)("h2",{id:"upgrading-and-downgrading-locks"},"Upgrading and downgrading locks"),(0,a.kt)("p",null,"If your fiber already has a read lock then it is possible to upgrade the lock to a write lock provided that no other\nreader (other than your fiber) holds a lock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval upgradeDowngradeProgram: UIO[(Boolean, Boolean, Boolean, Boolean)] = for {\n  lock               <- TReentrantLock.make.commit\n  _                  <- lock.acquireRead.commit\n  _                  <- lock.acquireWrite.commit  // upgrade\n  isWriteLocked      <- lock.writeLocked.commit   // now write-locked\n  isReadLocked       <- lock.readLocked.commit    // and read-locked\n  _                  <- lock.releaseWrite.commit  // downgrade\n  isWriteLockedAfter <- lock.writeLocked.commit   // no longer write-locked\n  isReadLockedAfter  <- lock.readLocked.commit    // still read-locked\n} yield (isWriteLocked, isReadLocked, isWriteLockedAfter, isReadLockedAfter)\n")),(0,a.kt)("h2",{id:"acquiring-a-write-lock-in-a-contentious-scenario"},"Acquiring a write lock in a contentious scenario"),(0,a.kt)("p",null,"A write lock can be acquired immediately only if one of the following conditions are satisfied:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"There are no other holders of the lock"),(0,a.kt)("li",{parentName:"ol"},"The current fiber is already holding a read lock and there are no other parties holding a read lock")),(0,a.kt)("p",null,"If either of the above scenarios are untrue then attempting to acquire a write lock will semantically block the fiber.\nHere is an example which demonstrates that a write lock can only be obtained by the fiber once all other readers (except\nthe fiber attempting to acquire the write lock) have released their hold on the (read or write) lock."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.clock._\nimport zio.console._\nimport zio.stm._\nimport zio.duration._\n\nval writeLockDemoProgram: URIO[Console with Clock, Unit] = for {\n  l  <- TReentrantLock.make.commit\n  _  <- putStrLn("Beginning test").orDie\n  f1 <- (l.acquireRead.commit *> ZIO.sleep(5.seconds) *> l.releaseRead.commit).fork\n  f2 <- (l.acquireRead.commit *> putStrLn("read-lock").orDie *> l.acquireWrite.commit *> putStrLn("I have upgraded!").orDie).fork\n  _  <- (f1 zip f2).join\n} yield ()\n')),(0,a.kt)("p",null,"Here fiber ",(0,a.kt)("inlineCode",{parentName:"p"},"f1")," acquires a read lock and sleeps for 5 seconds before releasing it. Fiber ",(0,a.kt)("inlineCode",{parentName:"p"},"f2")," also acquires a read\nlock and immediately tries to acquire a write lock. However, ",(0,a.kt)("inlineCode",{parentName:"p"},"f2")," will have to semantically block for approximately 5\nseconds to obtain a write lock because ",(0,a.kt)("inlineCode",{parentName:"p"},"f1")," will release its hold on the lock and only then can ",(0,a.kt)("inlineCode",{parentName:"p"},"f2")," acquire a hold for\nthe write lock. "),(0,a.kt)("h2",{id:"safer-methods--readlock-and-writelock"},"Safer methods  (",(0,a.kt)("inlineCode",{parentName:"h2"},"readLock")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"writeLock"),")"),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"acquireRead"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"acquireWrite"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"releaseRead")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"releaseWrite")," should be avoided for simple use cases relying on\nmethods like ",(0,a.kt)("inlineCode",{parentName:"p"},"readLock")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"writeLock")," instead. ",(0,a.kt)("inlineCode",{parentName:"p"},"readLock")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"writeLock")," automatically acquire and release the lock\nthanks to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Managed")," construct. The program described below is a safer version of the program above and ensures we\ndon't hold onto any resources once we are done using the reentrant lock."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.clock._\nimport zio.console._\nimport zio.stm._\nimport zio.duration._\n\nval saferProgram: URIO[Console with Clock, Unit] = for {\n  lock <- TReentrantLock.make.commit\n  f1   <- lock.readLock.use_(ZIO.sleep(5.seconds) *> putStrLn("Powering down").orDie).fork\n  f2   <- lock.readLock.use_(lock.writeLock.use_(putStrLn("Huzzah, writes are mine").orDie)).fork\n  _    <- (f1 zip f2).join\n} yield ()\n')))}u.isMDXComponent=!0}}]);
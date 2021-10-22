"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[1379],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5790:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"metriclabel",title:"MetricLabel"},c=void 0,s={unversionedId:"datatypes/metrics/metriclabel",id:"datatypes/metrics/metriclabel",isDocsHomePage:!1,title:"MetricLabel",description:"A MetricLabel metadata represents a key-value pair that allows analyzing metrics at an additional level of granularity. For example, if a metric tracks the response time of a service, labels could be used to create separate versions that track response times for different clients.",source:"@site/docs/datatypes/metrics/metriclabel.md",sourceDirName:"datatypes/metrics",slug:"/datatypes/metrics/metriclabel",permalink:"/datatypes/metrics/metriclabel",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/metrics/metriclabel.md",tags:[],version:"current",frontMatter:{id:"metriclabel",title:"MetricLabel"},sidebar:"datatypes-sidebar",previous:{title:"SetCount",permalink:"/datatypes/metrics/setcount"},next:{title:"Chunk",permalink:"/datatypes/misc/chunk"}},p=[],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"MetricLabel")," metadata represents a key-value pair that allows analyzing metrics at an additional level of granularity. For example, if a metric tracks the response time of a service, labels could be used to create separate versions that track response times for different clients. "),(0,i.kt)("p",null,"ZIO Metrics has a ",(0,i.kt)("em",{parentName:"p"},"label based dimensional")," data model where we have a metric name and just a list of key-value pairs attached to that metric name. So labels are the first-class citizen in ZIO Metrics. In monitoring dashboards, we can find or filter metrics using these labels."),(0,i.kt)("p",null,"For example, we can append following labels (dimensions) to our metric aspects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Endpoint (/api/users, /api/documents)"),(0,i.kt)("li",{parentName:"ul"},"HTTP Method (POST, GET)"),(0,i.kt)("li",{parentName:"ul"},"Deployment Environment (Staging, Production)"),(0,i.kt)("li",{parentName:"ul"},"HTTP Response Code"),(0,i.kt)("li",{parentName:"ul"},"Error code (404, 503)"),(0,i.kt)("li",{parentName:"ul"},"Datacenter Zone (us-east, eu-west)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nval counter = ZIOMetric.count("http_requests",\n  MetricLabel("env", "production")\n  MetricLabel("method", "GET"),\n  MetricLabel("endpoint", "/api/users"),\n  MetricLabel("zone", "ap-northeast"),\n)\n')),(0,i.kt)("p",null,"By labeling metrics, we can query in a more granular way in monitoring dashboards, such as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How many requests have been sent to each endpoint in total?"),(0,i.kt)("li",{parentName:"ul"},"In which zone are we about to violate SLAs?"),(0,i.kt)("li",{parentName:"ul"},"Which endpoint has the most latency?")))}m.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{231:function(t,a,r){"use strict";r.r(a);var e=r(1),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"job分布式任务调度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#job分布式任务调度","aria-hidden":"true"}},[t._v("#")]),t._v(" Job分布式任务调度")]),t._v(" "),r("h2",{attrs:{id:"单节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单节点","aria-hidden":"true"}},[t._v("#")]),t._v(" 单节点")]),t._v(" "),r("p",[t._v("如果是少量数据，即单节点任务执行，直接使用timer、quartz就可以了（单节点job可利用线程池）")]),t._v(" "),r("h2",{attrs:{id:"多节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多节点","aria-hidden":"true"}},[t._v("#")]),t._v(" 多节点")]),t._v(" "),r("p",[t._v("分布式任务调度框架，主要是为了协调多节点处理相同任务的避免数据被重复处理的框架，处理方式主要分为“抢占式”和“协同分配式”，通过集群的节点分担大批量任务的处理，提高批量任务的处理效率。\n“抢占式”：没法把单个任务的数据，让其它节点协同处理，所以一般来说抢占式任务处理方式一般用于处理数据量比较小，任务比较多的场景；\n“协同分配式”：处理可以把单个任务处理的数据均分到多个jvm中进行处理的，提高数据的并行处理能力。")]),t._v(" "),r("h3",{attrs:{id:"常用解决方案："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用解决方案：","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用解决方案：")]),t._v(" "),r("h4",{attrs:{id:"“抢占式”：quartz集群"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#“抢占式”：quartz集群","aria-hidden":"true"}},[t._v("#")]),t._v(" “抢占式”：Quartz集群")]),t._v(" "),r("p",[t._v("Quartz主要以job为单位，默认的job存储使用RAMJobStore作为此存储一旦，此种job存储方式，当把job加载到内存中当jvm挂掉或者容器关闭所有存储的job也随之消失，此种方式依赖单个jvm，存在单点，扩展差，容错差等问题，所以Quartz集群一般使用JobStoreTX通过jdbc把job存储在数据库中。Quartz集群通过访问数据库，以抢占的方式，由唯一节点获取到需要执行job，完成job执行。")]),t._v(" "),r("h4",{attrs:{id:"“协同分配式”：tbschedule"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#“协同分配式”：tbschedule","aria-hidden":"true"}},[t._v("#")]),t._v(" “协同分配式”：TBSchedule")]),t._v(" "),r("p",[t._v("tbschedule的目的是让一种批量任务或者不断变化的任务，能够被动态的分配到多个主机的JVM中，不同的线程组中并行执行。所有的任务能够被不重复，不遗漏的快速处理。这种框架item的分配实现了数据的不重复，又通过架构中lead的选择，存活的自我保证，完成了可用性和伸缩性的保障。")])])}),[],!1,null,null,null);a.default=s.exports}}]);
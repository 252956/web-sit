(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{436:function(t,e,a){},455:function(t,e,a){},456:function(t,e,a){},470:function(t,e,a){"use strict";a(436)},490:function(t,e,a){"use strict";a(455)},491:function(t,e,a){"use strict";a(456)},495:function(t,e,a){"use strict";a.r(e);var n={name:"Home",components:{NavLink:a(434).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},o=(a(470),a(40)),s=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?a("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(e,n){return a("div",{key:n,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),a("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?a("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,i=a(460),r=a(461),c=a(464),l=a(432),u={name:"Layout",components:{Home:s,Page:r.a,Sidebar:c.a,Navbar:i.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(l.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},d=Object(o.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null).exports,h={name:"CarbonAds",watch:{$route:function(t,e){t.path!==e.path&&this.$el.querySelector("#carbonads")&&(this.$el.innerHTML="",this.load())}},mounted:function(){this.load()},methods:{load:function(){var t=document.createElement("script");t.id="_carbonads_js",t.src="//cdn.carbonads.com/carbon.js?serve=CEBDT27Y&placement=vuejsorg",this.$el.appendChild(t)}},render:function(t){return t("div",{class:"carbon-ads"})}},b=(a(490),Object(o.a)(h,void 0,void 0,!1,null,null,null).exports),p="bsa-cpc-script",f={name:"BuySellAds",watch:{$route:function(t,e){t.path!==e.path&&(this.$refs.ads.innerHTML="",this.load())}},mounted:function(){var t=this;if(document.getElementById(p))this.load();else{var e=document.createElement("script");e.id=p,e.src="//m.servedby-buysellads.com/monetization.js",document.head.appendChild(e),e.onload=function(){t.load()}}},methods:{load:function(){"undefined"!=typeof _bsa&&_bsa&&_bsa.init("default","CKYD62QM","placement:vuejsorg",{target:".bsa-cpc",align:"horizontal",disable_css:"true"})}},render:function(t){return t("div",{class:"bsa-cpc-wrapper"},[t("div",{ref:"ads",class:"bsa-cpc"})])}},m=(a(491),{name:"Layout",components:{ParentLayout:d,CarbonAds:b,BuySellAds:Object(o.a)(f,void 0,void 0,!1,null,null,null).exports}}),v=Object(o.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("ParentLayout",{scopedSlots:this._u([{key:"sidebar-top",fn:function(){return[e("CarbonAds")]},proxy:!0},{key:"page-bottom",fn:function(){return[e("BuySellAds")]},proxy:!0}])})}),[],!1,null,null,null);e.default=v.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(t,e,a){},101:function(t,e,a){},102:function(t,e,a){},222:function(t,e,a){"use strict";var i=a(100);a.n(i).a},223:function(t,e,a){"use strict";var i=a(101);a.n(i).a},224:function(t,e,a){"use strict";var i=a(102);a.n(i).a},227:function(t,e,a){"use strict";a.r(e);a(11);var i=a(110),n=a(137),s=a(139),o=a(74);function l(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var r={components:{SidebarButton:s.a,NavLinks:o.a,SearchBox:n.a,AlgoliaSearchBox:i.a},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(l(this.$el,"paddingLeft"))+parseInt(l(this.$el,"paddingRight")),a=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};a(),window.addEventListener("resize",a,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},c=(a(222),a(1)),u=Object(c.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar"},[a("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),a("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?a("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?a("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),a("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?a("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?a("SearchBox"):t._e(),t._v(" "),a("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports,d=a(135),h=a(136),m={components:{PageEdit:d.a,PageNav:h.a},props:["sidebarItems"]},f=(a(223),Object(c.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page"},[t._t("top"),t._v(" "),a("Content",{staticClass:"theme-default-content"}),t._v(" "),a("PageEdit"),t._v(" "),a("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),g={name:"Sidebar",components:{SidebarLinks:a(104).default,NavLinks:o.a},props:["items"]},p=(a(224),{components:{Page:f,Sidebar:Object(c.a)(g,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:u},data:function(){return{}},watch:{},computed:{data:function(){return this.$page.frontmatter}},mounted:function(){},methods:{}}),v=Object(c.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"theme-container no-sidebar"},[e("Navbar"),this._v(" "),e("div",{staticClass:"page"},[e("div",{staticClass:"theme-default-content content__default"},[e("Content")],1)])],1)}),[],!1,null,null,null);e.default=v.exports}}]);
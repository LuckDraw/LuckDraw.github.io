(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{596:function(t,e,n){t.exports=n.p+"assets/img/404.dab4beb6.svg"},862:function(t,e,n){"use strict";n.r(e);var s={data:function(){return{drawer:!1,currItem:{},list:[{title:"通过padding挤出边框",desc:"blocks[ ].padding",component:"block-padding"},{title:"分别设置不同插槽的转速",desc:"slots[ ].speed",component:"slot-speed"}]}},methods:{showCode:function(t){var e=this,n=document.getElementById(t.component);n&&(this.drawer=!0,this.currItem=t,this.$nextTick((function(){n.style.display="block",e.$refs.drawer.appendChild(n)})))},handleClose:function(t){var e=document.querySelector(".content__default"),n=document.getElementById(this.currItem.component);n.style.display="none",e.appendChild(n),t()}}},o=n(47),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"demo-page"},[s("el-row",{attrs:{gutter:20}},t._l(t.list,(function(e){return s("el-col",{key:e.title,attrs:{xs:12,sm:12,md:8,lg:6,xl:6}},[s("el-card",{staticClass:"box-card",style:{cursor:e.component?"pointer":"no-drop"},nativeOn:{click:function(n){return t.showCode(e)}}},[e.component?s("demo-slot-"+e.component,{tag:"component"}):s("img",{staticStyle:{"margin-top":"15%"},attrs:{src:n(596),width:"70%"}})],1),t._v(" "),s("div",{staticClass:"title"},[s("h3",[t._v(t._s(e.title))]),t._v(" "),e.desc?s("p",[t._v(t._s(e.desc))]):t._e()])],1)})),1),t._v(" "),s("el-drawer",{attrs:{size:"450",direction:"btt",title:t.currItem.title,visible:t.drawer,"before-close":t.handleClose},on:{"update:visible":function(e){t.drawer=e}}},[s("div",{ref:"drawer"})])],1)}),[],!1,null,null,null);e.default=r.exports}}]);
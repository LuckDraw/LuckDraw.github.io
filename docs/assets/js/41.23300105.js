(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{597:function(e,t,n){e.exports=n.p+"assets/img/404.dab4beb6.svg"},846:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{drawer:!1,currItem:{},list:[{title:"通过padding挤出边框",desc:"blocks[ ].padding",component:"block-padding"},{title:"设置边框圆角",desc:"blocks[ ].padding",component:"block-borderRadius"},{title:"设置格子圆角",desc:"blocks[ ].padding",component:"prize-borderRadius"},{title:"设置格子背景颜色",desc:"blocks[ ].padding",component:"prize-background"},{title:"设置奖品图片",desc:"blocks[ ].padding",component:"prize-img"},{title:"设置格子的背景图片",desc:"blocks[ ].padding",component:"prize-bgImg"},{title:"分别设置不同插槽的转速",desc:"slots[ ].speed",component:"slot-speed"},{title:"设置5列插槽",desc:"slots[ ]",component:"slot-length"},{title:"设置奖品的行间距",desc:"defaultConfig.rowSpacing",component:"defaultConfig-rowSpacing"},{title:"设置奖品的列间距",desc:"defaultConfig.colSpacing",component:"defaultConfig-colSpacing"},{title:"设置为横向旋转模式",desc:"defaultConfig.mode",component:"defaultConfig-mode"}]}},methods:{showCode:function(e){var t=this,n=document.getElementById(e.component);n&&(this.drawer=!0,this.currItem=e,this.$nextTick((function(){n.style.display="block",t.$refs.drawer.appendChild(n)})))},handleClose:function(e){var t=document.querySelector(".content__default"),n=document.getElementById(this.currItem.component);n.style.display="none",t.appendChild(n),e()}}},i=n(47),c=Object(i.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"demo-page"},[o("el-row",{attrs:{gutter:20}},e._l(e.list,(function(t){return o("el-col",{key:t.title,attrs:{xs:12,sm:12,md:8,lg:6,xl:6}},[o("el-card",{staticClass:"box-card",style:{cursor:t.component?"pointer":"no-drop"},nativeOn:{click:function(n){return e.showCode(t)}}},[t.component?o("demo-slot-"+t.component,{tag:"component"}):o("img",{staticStyle:{"margin-top":"15%"},attrs:{src:n(597),width:"70%"}})],1),e._v(" "),o("div",{staticClass:"title"},[o("h3",[e._v(e._s(t.title))]),e._v(" "),t.desc?o("p",[e._v(e._s(t.desc))]):e._e()])],1)})),1),e._v(" "),o("el-drawer",{attrs:{size:"450",direction:"btt",title:e.currItem.title,visible:e.drawer,"before-close":e.handleClose},on:{"update:visible":function(t){e.drawer=t}}},[o("div",{ref:"drawer"})])],1)}),[],!1,null,null,null);t.default=c.exports}}]);
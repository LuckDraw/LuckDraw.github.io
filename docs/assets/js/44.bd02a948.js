(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{605:function(e,t,o){e.exports=o.p+"assets/img/404.dab4beb6.svg"},858:function(e,t,o){"use strict";o.r(t);var n={data:function(){return{drawer:!1,currItem:{},list:[{title:"通过padding挤出边框",desc:"blocks[ ].padding",component:"block-padding"},{title:"设置边框圆角",desc:"blocks[ ].borderRadius",component:"block-borderRadius"},{title:"使用图片作为背景",desc:"blocks[ ].imgs[ ]",component:"block-img"},{title:"设置格子圆角",desc:"prizes[ ].borderRadius",component:"prize-borderRadius"},{title:"设置格子背景颜色",desc:"prizes[ ].background",component:"prize-background"},{title:"设置奖品文字",desc:"prizes[ ].fonts[]",component:"prize-font"},{title:"设置奖品文字换行",desc:"prizes[ ].fonts[].wordWrap",component:"prize-wordWrap"},{title:"设置奖品文字溢出隐藏",desc:"prizes[ ].fonts[].lineClamp",component:"prize-lineClamp"},{title:"设置奖品图片",desc:"prizes[ ].imgs[]",component:"prize-img"},{title:"设置格子的背景图片",desc:"prizes[ ].imgs[]",component:"prize-bgImg"},{title:"设置不同插槽的转速",desc:"slots[ ].speed",component:"slot-speed"},{title:"设置不同插槽的旋转方向",desc:"slots[ ].direction",component:"slot-direction"},{title:"设置5列插槽",desc:"slots[ ]",component:"slot-length"},{title:"设置奖品的行间距",desc:"defaultConfig.rowSpacing",component:"defaultConfig-rowSpacing"},{title:"设置奖品的列间距",desc:"defaultConfig.colSpacing",component:"defaultConfig-colSpacing"},{title:"设置为横向旋转模式",desc:"defaultConfig.mode",component:"defaultConfig-mode"},{title:"控制游戏的开始和结束",desc:"play() & stop()",component:"demo"}]}},methods:{showCode:function(e){var t=this,o=document.getElementById(e.component);o&&(this.drawer=!0,this.currItem=e,this.$nextTick((function(){o.style.display="block",t.$refs.drawer.appendChild(o)})))},handleClose:function(e){var t=document.querySelector(".content__default"),o=document.getElementById(this.currItem.component);o.style.display="none",t.appendChild(o),e()}}},i=o(49),s=Object(i.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-page"},[n("el-row",{attrs:{gutter:20}},e._l(e.list,(function(t){return n("el-col",{key:t.title,attrs:{xs:12,sm:12,md:8,lg:6,xl:6}},[n("el-card",{staticClass:"box-card",style:{cursor:t.component?"pointer":"no-drop"},nativeOn:{click:function(o){return e.showCode(t)}}},[t.component?n("demo-slot-"+t.component,{tag:"component"}):n("img",{staticStyle:{"margin-top":"15%"},attrs:{src:o(605),width:"70%"}})],1),e._v(" "),n("div",{staticClass:"title"},[n("h3",[e._v(e._s(t.title))]),e._v(" "),t.desc?n("p",[e._v(e._s(t.desc))]):e._e()])],1)})),1),e._v(" "),n("el-drawer",{attrs:{size:"450",direction:"btt",title:e.currItem.title,visible:e.drawer,"before-close":e.handleClose},on:{"update:visible":function(t){e.drawer=t}}},[n("div",{ref:"drawer"})])],1)}),[],!1,null,null,null);t.default=s.exports}}]);
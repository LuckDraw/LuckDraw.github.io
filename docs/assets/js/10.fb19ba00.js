(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{796:function(t,e,n){var o={"./block-border.png":797,"./block-borders.png":798,"./block-img.png":799,"./block-padding.png":800,"./block-rotate.png":801,"./btn-dom.png":802,"./btn-img.png":803,"./btn-pointer.png":804,"./btn-radius.png":805,"./default-gutter.png":806,"./default-speed.png":807,"./default-stopRange.png":808,"./demo.png":809,"./prize-background.png":810,"./prize-font.png":811,"./prize-fonts.png":812,"./prize-img.png":813,"./prize-lineClamp.png":814,"./prize-wordWrap.png":815};function s(t){var e=p(t);return n(e)}function p(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=p,t.exports=s,s.id=796},797:function(t,e,n){t.exports=n.p+"assets/img/block-border.72b83634.png"},798:function(t,e,n){t.exports=n.p+"assets/img/block-borders.a49dc871.png"},799:function(t,e,n){t.exports=n.p+"assets/img/block-img.3dc07323.png"},800:function(t,e,n){t.exports=n.p+"assets/img/block-padding.e027a099.png"},801:function(t,e,n){t.exports=n.p+"assets/img/block-rotate.66d84de5.png"},802:function(t,e,n){t.exports=n.p+"assets/img/btn-dom.a40a1c8b.png"},803:function(t,e,n){t.exports=n.p+"assets/img/btn-img.2bfbc4ab.png"},804:function(t,e,n){t.exports=n.p+"assets/img/btn-pointer.b6aa88e5.png"},805:function(t,e,n){t.exports=n.p+"assets/img/btn-radius.2187851e.png"},806:function(t,e,n){t.exports=n.p+"assets/img/default-gutter.0d87719e.png"},807:function(t,e,n){t.exports=n.p+"assets/img/default-speed.b3b20868.png"},808:function(t,e,n){t.exports=n.p+"assets/img/default-stopRange.51ce4f26.png"},809:function(t,e,n){t.exports=n.p+"assets/img/demo.d83fab69.png"},810:function(t,e,n){t.exports=n.p+"assets/img/prize-background.a0a917b8.png"},811:function(t,e,n){t.exports=n.p+"assets/img/prize-font.29952238.png"},812:function(t,e,n){t.exports=n.p+"assets/img/prize-fonts.fc356135.png"},813:function(t,e,n){t.exports=n.p+"assets/img/prize-img.d1e83545.png"},814:function(t,e,n){t.exports=n.p+"assets/img/prize-lineClamp.5f6f567a.png"},815:function(t,e,n){t.exports=n.p+"assets/img/prize-wordWrap.c776494c.png"},963:function(t,e,n){"use strict";n.r(e);n(328);var o=n(601),s=n(615).wheel,p={data:function(){return{list:[{title:"通过padding挤出边框",desc:"blocks[ ].padding",component:"block-padding"},{title:"使用图片作为背景",desc:"blocks[ ].imgs",component:"block-img"},{title:"使用图片作为边框",desc:"blocks[ ].imgs",component:"block-border"},{title:"设置多个图片作为边框",desc:"blocks[ ].imgs",component:"block-borders"},{title:"设置背景图片跟随旋转",desc:"blocks[ ].imgs[ ].rotate",component:"block-rotate"},{title:"设置扇形区域的背景颜色",desc:"prizes[ ].background",component:"prize-background"},{title:"设置奖品文字",desc:"prizes[ ].fonts",component:"prize-font"},{title:"设置多行奖品文字",desc:"prizes[ ].fonts",component:"prize-fonts"},{title:"设置奖品文字换行",desc:"prizes[ ].fonts[ ].wordWrap",component:"prize-wordWrap"},{title:"设置奖品文字溢出隐藏",desc:"prizes[ ].fonts[ ].lineClamp",component:"prize-lineClamp"},{title:"设置奖品图片",desc:"prizes[ ].imgs",component:"prize-img"},{title:"设置扇形之间的缝隙",desc:"defaultConfig.gutter",component:"default-gutter"},{title:"设置抽奖按钮",desc:"buttons[ ].radius",component:"btn-radius"},{title:"带指针的抽奖按钮",desc:"buttons[ ].pointer",component:"btn-pointer"},{title:"使用图片作为抽奖按钮",desc:"buttons[ ].imgs",component:"btn-img"},{title:"使用Dom作为抽奖按钮",desc:"<div></div>",component:"btn-dom"},{title:"指针在扇形50%区域内随机停止",desc:"defaultConfig.stopRange",component:"default-stopRange"},{title:"设置抽奖的旋转速度",desc:"defaultConfig.speed",component:"default-speed"},{title:"控制游戏的开始和结束",desc:"play() & stop()",component:"demo"}]}},methods:{click:function(t){window.open("".concat(window.location.origin,"/playground.html?code=").concat(Object(o.encode)(s[t.component])))}}},i=n(48),c=Object(i.a)(p,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"demo-page"},[o("el-row",{attrs:{gutter:20}},t._l(t.list,(function(e){return o("el-col",{key:e.title,attrs:{xs:12,sm:12,md:8,lg:6,xl:6}},[o("el-card",{staticClass:"box-card"},[o("img",{attrs:{src:n(796)("./"+e.component+".png"),width:"100%"}})]),t._v(" "),o("div",{staticClass:"title"},[o("h3",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticStyle:{cursor:"pointer"},on:{click:function(n){return t.click(e)}}},[t._v("查看代码")])])],1)})),1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);
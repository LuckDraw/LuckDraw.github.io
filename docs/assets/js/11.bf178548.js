(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{408:function(t,e,i){},409:function(t,e,i){},421:function(t,e,i){"use strict";i(408)},422:function(t,e,i){"use strict";i(409)},423:function(t,e,i){"use strict";i(223),i(49),i(123),i(121),i(413),i(28),i(131),i(404),i(50);var n=i(37),a=i(412),s=i(424);i(35),i(119),i(124),i(122),i(125),i(217),i(120);function l(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}var r=i(410),o=i(82),c={name:"NavLinks",data:function(){return{flag:"",userInfo:{}}},mounted:function(){this.flag=localStorage.getItem("flag")||"",this.userInfo=JSON.parse(localStorage.getItem("userInfo"))||{}},components:{NavLink:r.a,DropdownLink:s.a},watch:{$userInfo:function(t){this.userInfo=t}},computed:Object(a.a)(Object(a.a)({},Object(o.b)(["$userInfo"])),{},{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var i=this.$page.path,a=this.$router.options.routes,s=this.$site.themeConfig.locales||{},l={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(n){var l,r=e[n],o=s[n]&&s[n].label||r.lang;return r.lang===t.$lang?l=i:(l=i.replace(t.$localeConfig.path,n),a.some((function(t){return t.path===l}))||(l=n)),{text:o,link:l}}))};return[].concat(Object(n.a)(this.userNav),[l])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(l(t),{items:(t.items||[]).map(l)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],i=0;i<e.length;i++){var n=e[i];if(new RegExp(n,"i").test(t))return n}return"Source"}}})},u=(i(421),i(27)),d={components:{NavLinks:Object(u.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.userLinks.length||t.repoLink?i("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return i("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?i("DropdownLink",{attrs:{item:t}}):i("NavLink",{attrs:{item:t}})],1)})),t._v(" "),i("div",{staticClass:"nav-item"},[t.userInfo.login?i("div",[i("img",{staticClass:"nav-avatar",attrs:{src:t.userInfo.avatar_url,title:t.userInfo.login}}),t._v(" "),i("span",{staticStyle:{color:"#fff"},attrs:{title:t.userInfo.login}},[t._v(t._s(t.userInfo.name||t.userInfo.login))])]):i("a",{staticClass:"nav-link",attrs:{href:"https://github.com/login/oauth/authorize?client_id=e41e27785100375e0e37"}},[t._v("\n      Github 登录\n    ")])]),t._v("\n   \n  "),t._v(" "),t.repoLink?i("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),i("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports},data:function(){return{activeIndex:"/"}},computed:{navList:function(){return this.$themeConfig.locales[this.$localePath].nav}}},f=(i(422),Object(u.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-page-head"},[e("el-container",{staticClass:"header-box"},[e("div",{staticClass:"mobile mobile-nav"},[this._v("移动端菜单栏未开启")]),this._v(" "),e("router-link",{staticClass:"logo hidden-719",attrs:{to:"/",tag:"div"}},[this._v("\n       lucky-canvas 【大转盘 / 九宫格】抽奖\n    ")]),this._v(" "),e("div",{staticClass:"nav-bar hidden-719"},[e("NavLinks")],1)],1)],1)}),[],!1,null,"56a2cfdc",null));e.a=f.exports},482:function(t,e,i){},483:function(t,e,i){},484:function(t,e,i){},485:function(t,e,i){},486:function(t,e,i){},488:function(t,e,i){},489:function(t,e,i){},520:function(t,e,i){"use strict";i(482)},523:function(t,e,i){"use strict";i(483)},527:function(t,e,i){"use strict";i(484)},528:function(t,e,i){"use strict";i(485)},529:function(t,e,i){"use strict";i(486)},536:function(t,e,i){"use strict";i(488)},537:function(t,e,i){"use strict";i(489)},581:function(t,e,i){"use strict";i.r(e);i(119),i(121),i(120);var n=i(423),a={data:function(){return{}},methods:{}},s=(i(520),i(27)),l=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit-options"},[i("div",{staticClass:"active"},[i("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),i("path",{attrs:{d:"M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",fill:"#43CCF8",stroke:"#FFF","stroke-width":"3","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",fill:"#43CCF8",stroke:"#FFF","stroke-width":"3","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",fill:"#43CCF8",stroke:"#FFF","stroke-width":"3","stroke-linejoin":"round"}})]),t._v(" "),i("div",[t._v("配置项")])]),t._v(" "),i("div",{staticClass:"disabled"},[i("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),i("rect",{attrs:{x:"6",y:"6",width:"36",height:"36",rx:"3",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M32 28L24 20L16 28",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M24 36V20.5",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M16 14H32",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}})]),t._v(" "),i("div",[t._v("保存本地")])]),t._v(" "),i("div",{staticClass:"disabled"},[i("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),i("rect",{attrs:{x:"6",y:"6",width:"36",height:"36",rx:"3",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M32 28L24 36L16 28",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M24 20V35.5",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M16 14H32",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}})]),t._v(" "),i("div",[t._v("读取缓存")])]),t._v(" "),i("div",{staticClass:"disabled"},[i("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",stroke:"#333","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}})]),t._v(" "),i("div",[t._v("复制代码")])]),t._v(" "),i("div",[i("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),i("path",{attrs:{d:"M4 9C4 7.89543 4.89543 7 6 7H19L24 13H42C43.1046 13 44 13.8954 44 15V39C44 40.1046 43.1046 41 42 41H6C4.89543 41 4 40.1046 4 39V9Z",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M31.0277 26.9724L24 34.0001L16.988 26.9881",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M24 20V33.5",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}})]),t._v(" "),i("div",[t._v("导出文件")])]),t._v(" "),i("div",{staticClass:"disabled"},[i("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20 5.91396H28V13.914H43V21.914H5V13.914H20V5.91396Z",stroke:"#333","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M8 40H40V22H8V40Z",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M16 39.8975V33.914",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M24 39.8975V33.8975",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M32 39.8975V33.914",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M12 40H36",stroke:"#333","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}})]),t._v(" "),i("div",[t._v("重置样式")])])])}),[],!1,null,"5127ad2a",null).exports,r=(i(78),i(216),i(412)),o=i(521),c={inject:["luckyData"],data:function(){return{$lucky:null}},mounted:function(){this.init()},watch:{luckyData:{handler:function(){this.$lucky.init({})},deep:!0},"luckyData.width":function(){this.init()},"luckyData.height":function(){this.init()}},methods:{init:function(){var t=this;this.$refs.myLucky.innerHTML="";var e=window.$lucky=this.$lucky=new o.LuckyWheel({divElement:this.$refs.myLucky,width:this.luckyData.width||"300px",height:this.luckyData.height||"300px"},Object(r.a)(Object(r.a)({},this.luckyData),{},{start:function(){var t=this;this.play(),setTimeout((function(){t.stop(100*Math.random()>>0)}),3500)},end:function(e){window.$lucky===this&&t.$message.success(e.name)}}));this.$store.commit("setLucky",e)}}},u=(i(523),Object(s.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"edit-luckdraw"},[e("div",{staticClass:"warn"},[e("el-alert",{attrs:{title:"可视化编辑目前只提供一些常用属性, 如果你需要更详细的配置, 可以浏览文档",type:"success",effect:"dark","show-icon":"",closable:!1}})],1),this._v(" "),e("div",{ref:"myLucky",staticClass:"luckdraw"},[e("canvas")])])}),[],!1,null,"62d874be",null).exports),d=i(82),f={computed:Object(r.a)({},Object(d.b)(["$lucky"]))},h={mixins:[f],inject:["luckyData","setData"],data:function(){return{ruleForm:{radius:""},rules:{radius:[{required:!0,message:"大转盘半径不能为空",trigger:"blur"}]}}},mounted:function(){this.ruleForm.radius=Math.min(this.$lucky.config.width,this.$lucky.config.height)},watch:{ruleForm:{deep:!0,handler:function(t){this.setData({width:t.radius,height:t.radius})}}}},p=Object(s.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",[t._v("属性 - attribute")]),t._v(" "),i("el-form",{ref:"ruleForm",attrs:{"label-width":"150px"}},[i("el-form-item",[i("tips",{attrs:{slot:"label",msg:"修改直径会导致组件初始化<br/>图片闪烁是因为组件在初始时会去异步加载图片资源"},slot:"label"},[t._v("转盘直径")]),t._v(" "),i("input-number",{attrs:{size:"small",min:1},model:{value:t.ruleForm.radius,callback:function(e){t.$set(t.ruleForm,"radius",e)},expression:"ruleForm.radius"}})],1)],1)],1)}),[],!1,null,null,null).exports,m=(i(49),i(438),{mixins:[f],inject:["luckyData","setData"],data:function(){return{currIndex:"0",blocks:[]}},mounted:function(){this.blocks=this.$lucky.blocks},methods:{add:function(){this.blocks.push({padding:"1px",background:"#000"}),this.currIndex=String(this.blocks.length-1),this.$forceUpdate()},remove:function(t){this.blocks.splice(t,1),t>0&&(this.currIndex=String(t-1)),this.$forceUpdate()}},render:function(){var t=this,e=arguments[0];return e("div",[e("h3",["背景 - blocks",e("span",{on:{click:function(e){return t.add()}}},["添加",e("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),e("rect",{attrs:{x:"6",y:"6",width:"36",height:"36",rx:"3",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M24 16V32",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M16 24L32 24",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}})])])]),e("el-tabs",{attrs:{type:"border-card",closable:!0},on:{"tab-remove":function(e){return t.remove(e)}},model:{value:t.currIndex,callback:function(e){t.currIndex=e}}},[this.blocks.length?this.blocks.map((function(i,n){return e("el-tab-pane",{attrs:{label:"背景[".concat(n,"]"),name:"".concat(n)}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:5}},["内边距"]),e("el-col",{attrs:{span:10}},[e("input-number",{model:{value:i.padding,callback:function(e){t.$set(i,"padding",e)}}})]),e("el-col",{attrs:{span:5}},["背景颜色"]),e("el-col",{attrs:{span:4}},[e("el-color-picker",{attrs:{size:"small","show-alpha":!0},model:{value:i.background,callback:function(e){t.$set(i,"background",e)}}})])])])})):e("el-divider",{attrs:{"content-position":"left"}},["暂无背景"])])])}}),g=Object(s.a)(m,void 0,void 0,!1,null,null,null).exports,b=i(37),v={mixins:[f],inject:["luckyData","setData"],data:function(){return{currIndex:"0",prizes:[]}},mounted:function(){this.prizes=this.$lucky.prizes},methods:{add:function(){this.prizes.push({name:"",background:"#fff",fonts:[{text:"",top:"0px"}],imgs:[{src:"",top:"0%",width:"0%"}]}),this.setData({prizes:Object(b.a)(this.prizes)}),this.currIndex=String(this.prizes.length-1),this.$forceUpdate()},remove:function(t){this.prizes.splice(t,1),t>0&&(this.currIndex=String(t-1)),this.$forceUpdate()},addImg:function(){},addFont:function(){}},render:function(){var t=this,e=arguments[0];return e("div",[e("h3",["奖品 - prizes",e("span",{on:{click:function(e){return t.add()}}},["添加",e("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),e("rect",{attrs:{x:"6",y:"6",width:"36",height:"36",rx:"3",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M24 16V32",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M16 24L32 24",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}})])])]),e("el-tabs",{attrs:{type:"border-card",closable:!0},on:{"tab-remove":function(e){return t.remove(e)}},model:{value:t.currIndex,callback:function(e){t.currIndex=e}}},[this.prizes.length?this.prizes.map((function(i,n){return e("el-tab-pane",{attrs:{label:"奖品[".concat(n,"]"),name:"".concat(n)}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:5}},[e("tips",{attrs:{type:"name"}},["name"])]),e("el-col",{attrs:{span:10}},[e("el-input",{attrs:{size:"small",placeholder:"奖品名称"},style:"width: 160px",model:{value:i.name,callback:function(e){t.$set(i,"name",e)}}})]),e("el-col",{attrs:{span:5}},["背景颜色"]),e("el-col",{attrs:{span:4}},[e("el-color-picker",{attrs:{size:"small","show-alpha":!0},model:{value:i.background,callback:function(e){t.$set(i,"background",e)}}})])]),e("el-tabs",{attrs:{type:"border-card","tab-position":"left"},style:"height: 170px;margin-top: 20px; box-shadow: none;"},[i.fonts&&i.fonts.length?i.fonts.map((function(i,n){return e("el-tab-pane",{attrs:{label:"文字[".concat(n,"]")}},[e("el-form",{attrs:{"label-width":"100px"}},[e("el-form-item",{attrs:{label:"文字内容"}},[e("el-input",{attrs:{size:"small"},model:{value:i.text,callback:function(e){t.$set(i,"text",e)}}})]),e("el-form-item",{attrs:{label:"距离顶部"}},[e("input-number",{attrs:{size:"small"},model:{value:i.top,callback:function(e){t.$set(i,"top",e)}}})])])])})):e("el-divider",{attrs:{"content-position":"left"}},["暂无文字"])]),e("el-tabs",{attrs:{type:"border-card","tab-position":"left"},style:"height: 230px;margin-top: 20px; box-shadow: none;"},[i.imgs&&i.imgs.length?i.imgs.map((function(i,n){return e("el-tab-pane",{attrs:{label:"图片[".concat(n,"]")}},[e("el-form",{attrs:{"label-width":"100px"}},[e("el-form-item",[e("tips",{slot:"label",attrs:{type:"src"}},["图片地址"]),e("el-input",{attrs:{type:"textarea",size:"small"},model:{value:i.src,callback:function(e){t.$set(i,"src",e)}}})]),e("el-form-item",{attrs:{label:"距离顶部"}},[e("input-number",{attrs:{size:"small"},model:{value:i.top,callback:function(e){t.$set(i,"top",e)}}})]),e("el-form-item",[e("tips",{slot:"label",attrs:{type:"imgWidth"}},["图片宽度"]),e("input-number",{attrs:{size:"small",unit:"%"},model:{value:i.width,callback:function(e){t.$set(i,"width",e)}}})]),e("el-form-item",[e("tips",{slot:"label",attrs:{type:"imgWidth"}},["图片高度"]),e("input-number",{attrs:{size:"small",placeholder:"auto",unit:"%"},model:{value:i.height,callback:function(e){t.$set(i,"height",e)}}})])])])})):e("el-divider",{attrs:{"content-position":"left"}},["暂无图片"])])])})):e("el-divider",{attrs:{"content-position":"left"}},["暂无奖品"])])])}},k=Object(s.a)(v,void 0,void 0,!1,null,null,null).exports,w={mixins:[f],inject:["luckyData","setData"],data:function(){return{currIndex:"0",buttons:[]}},mounted:function(){this.buttons=this.$lucky.buttons},methods:{add:function(){this.buttons.push({radius:"10px",background:"#000"}),this.currIndex=String(this.buttons.length-1),this.$forceUpdate()},remove:function(t){this.buttons.splice(t,1),t>0&&(this.currIndex=String(t-1)),this.$forceUpdate()}},render:function(){var t=this,e=arguments[0];return e("div",[e("h3",["按钮 - buttons",e("span",{on:{click:function(e){return t.add()}}},["添加",e("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),e("rect",{attrs:{x:"6",y:"6",width:"36",height:"36",rx:"3",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M24 16V32",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M16 24L32 24",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}})])])]),e("el-tabs",{attrs:{type:"border-card",closable:!0},on:{"tab-remove":function(e){return t.remove(e)}},model:{value:t.currIndex,callback:function(e){t.currIndex=e}}},[this.buttons.length?this.buttons.map((function(i,n){return e("el-tab-pane",{attrs:{label:"按钮[".concat(n,"]"),name:"".concat(n)}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:3}},["半径"]),e("el-col",{attrs:{span:8}},[e("input-number",{model:{value:i.radius,callback:function(e){t.$set(i,"radius",e)}}})]),e("el-col",{attrs:{span:3}},["指针"]),e("el-col",{attrs:{span:3}},[e("el-switch",{attrs:{size:"small"},model:{value:i.pointer,callback:function(e){t.$set(i,"pointer",e)}}})]),e("el-col",{attrs:{span:4}},["背景色"]),e("el-col",{attrs:{span:3}},[e("el-color-picker",{attrs:{size:"small","show-alpha":!0},model:{value:i.background,callback:function(e){t.$set(i,"background",e)}}})])])])})):e("el-divider",{attrs:{"content-position":"left"}},["暂无按钮"])])])}},x=Object(s.a)(w,void 0,void 0,!1,null,null,null).exports,_={mixins:[f],inject:["luckyData","setData"],data:function(){return{defaultStyle:{}}},mounted:function(){this.defaultStyle=this.$lucky._defaultStyle,this.$set(this.defaultStyle,"lineHeight",void 0),this.$lucky.defaultStyle=this.defaultStyle},watch:{}},y=Object(s.a)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",[t._v("默认样式 - defaultStyle")]),t._v(" "),i("el-form",{attrs:{"label-width":"150px"}},[i("el-form-item",{attrs:{label:"字体颜色"}},[i("el-color-picker",{attrs:{size:"small","show-alpha":""},model:{value:t.defaultStyle.fontColor,callback:function(e){t.$set(t.defaultStyle,"fontColor",e)},expression:"defaultStyle.fontColor"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"字体大小"}},[i("input-number",{attrs:{size:"small"},model:{value:t.defaultStyle.fontSize,callback:function(e){t.$set(t.defaultStyle,"fontSize",e)},expression:"defaultStyle.fontSize"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"字体样式"}},[i("el-input",{attrs:{size:"small"},model:{value:t.defaultStyle.fontStyle,callback:function(e){t.$set(t.defaultStyle,"fontStyle",e)},expression:"defaultStyle.fontStyle"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"字体粗细"}},[i("el-select",{attrs:{size:"small",placeholder:"默认为400"},model:{value:t.defaultStyle.fontWeight,callback:function(e){t.$set(t.defaultStyle,"fontWeight",e)},expression:"defaultStyle.fontWeight"}},t._l([300,400,500,600,700],(function(t){return i("el-option",{attrs:{value:t}})})),1)],1),t._v(" "),i("el-form-item",[i("tips",{attrs:{slot:"label",type:"lineHeight"},slot:"label"},[t._v("字体行高")]),t._v(" "),i("input-number",{attrs:{size:"small",unit:"px"},model:{value:t.defaultStyle.lineHeight,callback:function(e){t.$set(t.defaultStyle,"lineHeight",e)},expression:"defaultStyle.lineHeight"}})],1),t._v(" "),i("el-form-item",[i("tips",{attrs:{slot:"label",type:"defaultWordWarp"},slot:"label"},[t._v("文字自动换行")]),t._v(" "),i("el-switch",{attrs:{size:"small"},model:{value:t.defaultStyle.wordWrap,callback:function(e){t.$set(t.defaultStyle,"wordWrap",e)},expression:"defaultStyle.wordWrap"}})],1),t._v(" "),i("el-form-item",[i("tips",{attrs:{slot:"label",type:"defaultLengthLimit"},slot:"label"},[t._v("换行宽度限制")]),t._v(" "),i("input-number",{attrs:{size:"small"},model:{value:t.defaultStyle.lengthLimit,callback:function(e){t.$set(t.defaultStyle,"lengthLimit",e)},expression:"defaultStyle.lengthLimit"}})],1)],1)],1)}),[],!1,null,"033ddcbb",null).exports,C=(i(524),{mixins:[f],inject:["luckyData","setData"],data:function(){return{defaultConfig:{}}},mounted:function(){this.defaultConfig=this.$lucky._defaultConfig,this.$lucky.defaultConfig=this.defaultConfig},methods:{formatTooltip:function(t){return(100*t).toFixed(0)+"%"}}}),F={},$={components:{attribute:p,blocks:g,prizes:k,buttons:x,defaultStyle:y,defaultConfig:Object(s.a)(C,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",[t._v("默认配置 - defaultConfig")]),t._v(" "),i("el-form",{attrs:{"label-width":"150px"}},[i("el-form-item",{attrs:{label:"扇形缝隙"}},[i("input-number",{attrs:{size:"small"},model:{value:t.defaultConfig.gutter,callback:function(e){t.$set(t.defaultConfig,"gutter",e)},expression:"defaultConfig.gutter"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"停止范围"}},[i("el-slider",{attrs:{size:"small",min:0,max:1,step:.01,"format-tooltip":t.formatTooltip},model:{value:t.defaultConfig.stopRange,callback:function(e){t.$set(t.defaultConfig,"stopRange",e)},expression:"defaultConfig.stopRange"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"偏移角度"}},[i("el-input-number",{attrs:{size:"small"},model:{value:t.defaultConfig.offsetDegree,callback:function(e){t.$set(t.defaultConfig,"offsetDegree",e)},expression:"defaultConfig.offsetDegree"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"速度"}},[i("el-input-number",{attrs:{size:"small",min:10,max:40},model:{value:t.defaultConfig.speed,callback:function(e){t.$set(t.defaultConfig,"speed",e)},expression:"defaultConfig.speed"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"开始旋转时间"}},[i("el-input-number",{attrs:{size:"small",min:100},model:{value:t.defaultConfig.accelerationTime,callback:function(e){t.$set(t.defaultConfig,"accelerationTime",e)},expression:"defaultConfig.accelerationTime"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"缓慢停止时间"}},[i("el-input-number",{attrs:{size:"small",min:100},model:{value:t.defaultConfig.decelerationTime,callback:function(e){t.$set(t.defaultConfig,"decelerationTime",e)},expression:"defaultConfig.decelerationTime"}})],1)],1)],1)}),[],!1,null,"0c3ece25",null).exports,methods:Object(s.a)(F,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v("回调 & 方法")]),this._v("\n  敬请期待\n")])}],!1,null,null,null).exports},computed:Object(r.a)({},Object(d.b)(["$currSelect"]))},S=(i(527),{components:{Wheel:Object(s.a)($,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("attribute"),t._v(" "),i("hr"),t._v(" "),i("blocks"),t._v(" "),i("hr"),t._v(" "),i("prizes"),t._v(" "),i("hr"),t._v(" "),i("buttons"),t._v(" "),i("hr"),t._v(" "),i("defaultConfig"),t._v(" "),i("hr"),t._v(" "),i("defaultStyle")],1)}),[],!1,null,"1f8b6616",null).exports},data:function(){return{showSetting:!0}}}),j=(i(528),i(529),Object(s.a)(S,(function(){var t=this.$createElement,e=this._self._c||t;return e("el-aside",{staticClass:"edit-setting",style:{left:this.showSetting?"0px":"-500px"}},[e("div",{staticClass:"edit-setting-content"},[e("Wheel")],1)])}),[],!1,null,"37894f5d",null).exports),L=(i(530),i(226),i(40),i(531),i(142),i(11),i(28),i(30),i(50),i(39),i(532),i(141),i(75)),z=i(143),D=i.n(z),O={inject:["luckyData"],data:function(){return{format:{indent:2,string:"1"},ids:[305288242,191120006,302605756,317417981,327783800,317829690],flag:!1,login:!1}},mounted:function(){var t=JSON.parse(localStorage.getItem("userInfo"));if(t&&t.login&&t.id){this.login=!0;var e=localStorage.getItem("Hm_lpvt_ldq5bc73137b15d09b1686fe514b662a");e&&e.slice(0,5)===String(Date.now()).slice(0,5)&&(console.log(222),this.flag=!0),this.checkStar(t.starred_url.slice(0,-15))}},methods:{checkStar:function(t){var e=arguments,i=this;return Object(L.a)(regeneratorRuntime.mark((function n(){var a,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.length>1&&void 0!==e[1]?e[1]:1,n.next=3,D.a.get(t,{params:{per_page:100,page:a}});case 3:if(s=n.sent,!(s.data.findIndex((function(t){return[305288242,191120006,302605756,317417981,327783800,317829690].includes(t.id)}))>-1)){n.next=9;break}return i.flag=!0,localStorage.setItem("Hm_lpvt_ldq5bc73137b15d09b1686fe514b662a",Date.now()),n.abrupt("return");case 9:if(100===s.data.length&&i.checkStar(t,a+1),!(s.data.length<100)){n.next=13;break}return localStorage.setItem("Hm_lpvt_ldq5bc73137b15d09b1686fe514b662a",""),n.abrupt("return",i.flag=!1);case 13:case"end":return n.stop()}}),n)})))()},downloadJSON:function(){if(!this.flag)return!1;var t,e,i,n,a,s,l,r=JSON.stringify(this.luckyData,["name","width","height","rows","cols","blocks","prizes","x","y","row","col","shadow","buttons","defaultConfig","gutter","stopRange","offsetDegree","speed","accelerationTime","decelerationTime","defaultStyle","borderRadius","activeStyle","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","radius","background","pointer","text","src","activeSrc","top","rotate","fontColor","fontSize","fontStyle","fontWeight","lineHeight","wordWrap","lengthLimit","fonts","imgs"],this.format.indent);r=r.replace(/\"(\w+)\"\:/g,(function(t,e){return e+":"})),"1"===this.format.string&&(r=r.replace(/["]/g,"'")),console.log(r),t="100px_data.txt",e=r,a=window.URL||window.webkitURL||window,s=new Blob([e]),(l=document.createElementNS("http://www.w3.org/1999/xhtml","a")).href=a.createObjectURL(s),l.download=t,i=l,(n=document.createEvent("MouseEvents")).initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),i.dispatchEvent(n)}}},I=(i(536),Object(s.a)(O,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-aside",{staticClass:"edit-download"},[i("h3",[t._v("导出格式")]),t._v(" "),i("el-form",{attrs:{"label-width":"80px"}},[i("el-form-item",{attrs:{label:"缩进"}},[i("el-select",{model:{value:t.format.indent,callback:function(e){t.$set(t.format,"indent",e)},expression:"format.indent"}},[i("el-option",{attrs:{label:"2个空格",value:2}}),t._v(" "),i("el-option",{attrs:{label:"4个空格",value:4}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"字符串"}},[i("el-select",{model:{value:t.format.string,callback:function(e){t.$set(t.format,"string",e)},expression:"format.string"}},[i("el-option",{attrs:{label:"单引号",value:"1"}}),t._v(" "),i("el-option",{attrs:{label:"双引号",value:"2"}})],1)],1)],1),t._v(" "),i("hr",{staticStyle:{margin:"25px -20px"}}),t._v(" "),i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:!t.flag,expression:"!flag"}],attrs:{disabled:!t.flag,type:"primary",size:"small"},on:{click:t.downloadJSON}},[t._v("导出 TXT")]),t._v(" "),i("br"),i("br"),t._v(" "),t.flag?t._e():i("div",[t._v("\n    目前导出功能需要"),i("b",[t._v("登录")]),t._v("并给个 star 才可以使用"),i("br"),i("br"),t._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/LuckDraw/lucky-canvas"}},[t._v("地址: lucky-canvas")])]),t._v(" "),i("br"),t._v("\n    开发这么辛苦, 赏个star吧 (✿◡‿◡)\n  ")])],1)}),[],!1,null,"057e57b6",null).exports),M={components:{Header:n.a,Options:l,LuckDraw:u,Setting:j,Download:I},data:function(){return{luckyData:{width:"300px",height:"300px",prizes:[{name:"恭喜你获得1元红包",background:"#f9e3bb",fonts:[{text:"1元红包",top:"18%"}],imgs:[{src:"https://100px.net/assets/img/0.efbe4dff.png",width:"30%",top:"35%"}]},{name:"恭喜你获得100元红包",background:"#f8d384",fonts:[{text:"100元红包",top:"18%"}],imgs:[{src:"https://100px.net/assets/img/1.de299995.png",width:"30%",top:"35%"}]},{name:"恭喜你获得0.5元红包",background:"#f9e3bb",fonts:[{text:"0.5元红包",top:"18%"}],imgs:[{src:"https://100px.net/assets/img/2.8f1949c9.png",width:"30%",top:"35%"}]},{name:"恭喜你获得2元红包",background:"#f8d384",fonts:[{text:"2元红包",top:"18%"}],imgs:[{src:"https://100px.net/assets/img/3.9307595d.png",width:"30%",top:"35%"}]},{name:"恭喜你获得10元红包",background:"#f9e3bb",fonts:[{text:"10元红包",top:"18%"}],imgs:[{src:"https://100px.net/assets/img/4.1349538d.png",width:"30%",top:"35%"}]},{name:"恭喜你获得50元红包",background:"#f8d384",fonts:[{text:"50元红包",top:"18%"}],imgs:[{src:"https://100px.net/assets/img/5.b92ceb2f.png",width:"30%",top:"35%"}]}],defaultStyle:{fontColor:"#d64737",fontSize:"14px"},blocks:[{padding:"13px",background:"#d64737"}],buttons:[{radius:"50px",background:"#d64737"},{radius:"45px",background:"#fff"},{radius:"41px",background:"#f6c66f",pointer:!0},{radius:"35px",background:"#ffdea0"}]}}},provide:function(){return{luckyData:this.luckyData,setData:this.setData}},mounted:function(){},methods:{setData:function(t){var e=this;Object.keys(t).forEach((function(i){e.$set(e.luckyData,i,t[i])}))}}},H=(i(537),Object(s.a)(M,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"visual-edit"},[e("Header"),this._v(" "),e("Options",{staticStyle:{"margin-top":"60px",height:"70px"}}),this._v(" "),e("el-container",{staticStyle:{"max-width":"none",height:"calc(100vh - 60px - 70px)"}},[e("el-main",{staticStyle:{order:"2",padding:"0"}},[e("LuckDraw")],1),this._v(" "),e("Setting",{staticStyle:{order:"3"}}),this._v(" "),e("Download",{staticStyle:{order:"1"}})],1)],1)}),[],!1,null,"07cad3bd",null));e.default=H.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{588:function(t,n,e){},589:function(t,n,e){},591:function(t,n,e){"use strict";e(588)},592:function(t,n,e){"use strict";e(589)},593:function(t,n,e){},594:function(t,n,e){"use strict";var s=e(64),a=e(595),i=(e(201),e(87),e(49),e(88),e(203),e(328),e(590),e(599),e(600),e(604));e(329),e(205),e(199),e(200),e(63),e(202),e(204);function r(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}var o=e(597),c=e(129),u={name:"NavLinks",data:function(){return{flag:"",userInfo:{}}},mounted:function(){this.flag=localStorage.getItem("flag")||"",this.userInfo=JSON.parse(localStorage.getItem("userInfo"))||{}},components:{NavLink:o.a,DropdownLink:i.a},watch:{$userInfo:function(t){this.userInfo=t}},computed:Object(a.a)(Object(a.a)({},Object(c.b)(["$userInfo"])),{},{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,n=this.$site.locales;if(n&&Object.keys(n).length>1){var e=this.$page.path,a=this.$router.options.routes,i=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(n).map((function(s){var r,o=n[s],c=i[s]&&i[s].label||o.lang;return o.lang===t.$lang?r=e:(r=e.replace(t.$localeConfig.path,s),a.some((function(t){return t.path===r}))||(r=s)),{text:c,link:r}}))};return[].concat(Object(s.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(r(t),{items:(t.items||[]).map(r)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],n=["GitHub","GitLab","Bitbucket"],e=0;e<n.length;e++){var s=n[e];if(new RegExp(s,"i").test(t))return s}return"Source"}}})},l=(e(591),e(48)),f={components:{NavLinks:Object(l.a)(u,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t._m(0),t._v(" "),t._v("\n   \n  "),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"nav-item"},[n("a",{attrs:{href:"https://github.com/LuckDraw/lucky-canvas",target:"_black"}},[n("img",{staticClass:"animate-swing",staticStyle:{"margin-top":"5px"},attrs:{src:"https://img.shields.io/github/stars/LuckDraw/lucky-canvas?style=social",height:"22",align:"top"}})])])}],!1,null,null,null).exports},data:function(){return{activeIndex:"/"}},computed:{navList:function(){return this.$themeConfig.locales[this.$localePath].nav}}},h=(e(592),Object(l.a)(f,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"home-page-head"},[n("el-container",{staticClass:"header-box w"},[n("div",{staticClass:"mobile mobile-nav"}),this._v(" "),n("router-link",{staticClass:"logo hidden-719",attrs:{to:"/",tag:"div"}},[this._v("\n       lucky-canvas 抽奖插件\n    ")]),this._v(" "),n("div",{staticClass:"nav-bar hidden-719"},[n("NavLinks"),this._v(" \n    ")],1)],1)],1)}),[],!1,null,"24773ba0",null));n.a=h.exports},596:function(t,n,e){"use strict";e(593)},598:function(t,n,e){"use strict";var s={},a=(e(596),e(48)),i=Object(a.a)(s,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"home-page-foot"},[this._m(0),this._v(" "),n("p",[n("span",[this._v("\n      2019 ~ "+this._s((new Date).getFullYear())+"\n      "),n("a",{attrs:{href:"https://github.com/LuckDraw/lucky-canvas/blob/master/LICENSE",target:"_black"}},[this._v("\n        Apache-2.0 License\n      ")])])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("span",[this._v("\n      本插件完全免费，开源不易，\n      "),n("a",{attrs:{href:"https://github.com/LuckDraw/lucky-canvas",target:"_black"}},[n("b",{staticStyle:{color:"#fff100"}},[this._v("\n          如果您觉得好用可以在 Github 点个 "),n("span",{staticClass:"animate-rubberBand"},[this._v("Star")]),this._v(" 支持一下\n        ")])])])])}],!1,null,"6b5a44b8",null);n.a=i.exports},653:function(t,n,e){},745:function(t,n,e){"use strict";e(653)},954:function(t,n,e){"use strict";e.r(n);var s=e(594),a=e(598),i=e(601),r=e.n(i),o={components:{Header:s.a,Footer:a.a},data:function(){return{value:"1.7.20",log:console.log,show:!1}},mounted:function(){var t=this.$route.query.code||"",n=r.a.decode(t);this.show="ldq"===localStorage.getItem("author"),this.mp=window.mp=new r.a({el:this.$refs.sandbox,files:{"index.html":{defaultValue:n||"<div id=\"my-lucky\"></div>\n\n<script>\n  const myLucky = new LuckyCanvas.LuckyWheel('#my-lucky', {\n    width: '200px',\n    height: '200px',\n    blocks: [{ padding: '10px', background: '#869cfa' }],\n    prizes: [\n      { background: '#e9e8fe', fonts: [{ text: '0' }] },\n      { background: '#b8c5f2', fonts: [{ text: '1' }] },\n      { background: '#e9e8fe', fonts: [{ text: '2' }] },\n      { background: '#b8c5f2', fonts: [{ text: '3' }] },\n      { background: '#e9e8fe', fonts: [{ text: '4' }] },\n      { background: '#b8c5f2', fonts: [{ text: '5' }] },\n    ],\n    buttons: [\n      { radius: '40%', background: '#617df2' },\n      { radius: '35%', background: '#afc8ff' },\n      {\n        radius: '30%', background: '#869cfa',\n        pointer: true,\n        fonts: [{ text: '开始', top: '-10px' }]\n      },\n    ],\n    start: function() {\n      // 开始游戏\n      myLucky.play()\n      // 假设接口的请求速度是1s\n      setTimeout(_ => {\n        // 停止游戏\n        myLucky.stop(0)\n      }, 1000)\n    },\n    end: function(prize) { // 游戏停止时触发\n      alert('恭喜中奖: ' + prize.fonts[0].text)\n    }\n  })\n<\/script>\n",urlField:"code"}},publicResources:{css:"\n          body {\n            padding: 50px 0;\n          }\n          * {\n            margin: 0 auto;\n          }\n        ",jsLibs:["https://cdn.jsdelivr.net/npm/lucky-canvas@1.7.20"]},defaultConfig:{editorRange:"60%"}})}},c=(e(745),e(48)),u=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Header"),t._v(" "),e("div",{staticClass:"sandbox-body"},[e("div",{ref:"sandbox",staticClass:"sandbox-main"})]),t._v(" "),t.show?e("div",{staticClass:"tools"},[e("button",{on:{click:function(n){t.log(t.mp.getValue())}}},[t._v("获取字符串")]),t._v(" "),e("br"),t._v(" "),e("button",{on:{click:function(n){t.log(JSON.stringify(t.mp.getValue()))}}},[t._v("获取 JSON 字符串 (.json)")]),t._v(" "),e("br"),t._v(" "),e("button",{on:{click:function(n){t.log(JSON.stringify(t.mp.getValue()).replace(/<\/script>/g,(function(){return"<\\/script>"})))}}},[t._v("获取 JSON 字符串 (.js)")])]):t._e()],1)}),[],!1,null,"ff66d092",null);n.default=u.exports}}]);
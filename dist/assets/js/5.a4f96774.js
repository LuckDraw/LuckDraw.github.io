(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{589:function(t,s,e){},590:function(t,s,e){},593:function(t,s,e){"use strict";e(589)},594:function(t,s,e){"use strict";e(590)},595:function(t,s,e){"use strict";var n=e(63),a=e(598),i=(e(200),e(86),e(48),e(87),e(202),e(329),e(592),e(601),e(602),e(606));e(328),e(204),e(198),e(199),e(62),e(201),e(203);function r(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}var o=e(600),c=e(128),p={name:"NavLinks",data:function(){return{flag:"",userInfo:{}}},mounted:function(){this.flag=localStorage.getItem("flag")||"",this.userInfo=JSON.parse(localStorage.getItem("userInfo"))||{}},components:{NavLink:o.a,DropdownLink:i.a},watch:{$userInfo:function(t){this.userInfo=t}},computed:Object(a.a)(Object(a.a)({},Object(c.b)(["$userInfo"])),{},{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,s=this.$site.locales;if(s&&Object.keys(s).length>1){var e=this.$page.path,a=this.$router.options.routes,i=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(s).map((function(n){var r,o=s[n],c=i[n]&&i[n].label||o.lang;return o.lang===t.$lang?r=e:(r=e.replace(t.$localeConfig.path,n),a.some((function(t){return t.path===r}))||(r=n)),{text:c,link:r}}))};return[].concat(Object(n.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(r(t),{items:(t.items||[]).map(r)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],s=["GitHub","GitLab","Bitbucket"],e=0;e<s.length;e++){var n=s[e];if(new RegExp(n,"i").test(t))return n}return"Source"}}})},l=(e(593),e(47)),u={components:{NavLinks:Object(l.a)(p,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t._m(0),t._v(" "),t._v("\n   \n  "),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"nav-item"},[s("a",{attrs:{href:"https://github.com/LuckDraw/lucky-canvas",target:"_black"}},[s("img",{staticClass:"animate-swing",staticStyle:{"margin-top":"5px"},attrs:{src:"https://img.shields.io/github/stars/LuckDraw/lucky-canvas?style=social",height:"22",align:"top"}})])])}],!1,null,null,null).exports},data:function(){return{activeIndex:"/"}},computed:{navList:function(){return this.$themeConfig.locales[this.$localePath].nav}}},v=(e(594),Object(l.a)(u,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"home-page-head"},[s("el-container",{staticClass:"header-box w"},[s("div",{staticClass:"mobile mobile-nav"},[this._v("移动端菜单栏未开启")]),this._v(" "),s("router-link",{staticClass:"logo hidden-719",attrs:{to:"/",tag:"div"}},[this._v("\n       lucky-canvas 【大转盘 / 九宫格】抽奖\n    ")]),this._v(" "),s("div",{staticClass:"nav-bar hidden-719"},[s("NavLinks"),this._v(" \n    ")],1)],1)],1)}),[],!1,null,"4323ec0a",null));s.a=v.exports},596:function(t,s,e){},603:function(t,s,e){"use strict";e(596)},604:function(t,s,e){var n=e(1),a=e(127),i=n.TypeError;t.exports=function(t,s){if(a(s,t))return t;throw i("Incorrect invocation")}},607:function(t,s,e){"use strict";var n={},a=(e(603),e(47)),i=Object(a.a)(n,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"home-page-foot"},[this._m(0),this._v(" "),s("p",[s("span",[this._v("\n      2019 ~ "+this._s((new Date).getFullYear())+"\n      "),s("a",{attrs:{href:"https://github.com/LuckDraw/lucky-canvas/blob/master/LICENSE",target:"_black"}},[this._v("\n        Apache-2.0 License\n      ")])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",[this._v("\n      本插件完全免费，开源不易，\n      "),s("a",{attrs:{href:"https://github.com/LuckDraw/lucky-canvas",target:"_black"}},[s("b",{staticStyle:{color:"#fff100"}},[this._v("\n          如果您觉得好用可以在 Github 点个 "),s("span",{staticClass:"animate-rubberBand"},[this._v("Star")]),this._v(" 支持一下\n        ")])])])])}],!1,null,"6b5a44b8",null);s.a=i.exports},616:function(t,s,e){t.exports=e.p+"assets/img/404.fa54d8e5.svg"},619:function(t,s,e){var n=e(49);t.exports=function(t,s,e){for(var a in s)n(t,a,s[a],e);return t}},678:function(t,s,e){t.exports=e.p+"assets/img/Delivery.44d7b9da.svg"},679:function(t,s,e){t.exports=e.p+"assets/img/3.932ebeb5.svg"},680:function(t,s,e){t.exports=e.p+"assets/img/1.23e4196d.svg"},681:function(t,s,e){t.exports=e.p+"assets/img/2.8055de6f.svg"},682:function(t,s,e){t.exports=e.p+"assets/img/Subscribe.ed73e50c.svg"},683:function(t,s,e){t.exports=e.p+"assets/img/core.a22c871e.svg"},684:function(t,s,e){t.exports=e.p+"assets/img/feat.6294fe81.svg"},685:function(t,s,e){t.exports=e.p+"assets/img/base.4da71362.svg"},686:function(t,s,e){t.exports=e.p+"assets/img/bug.b9833849.svg"},687:function(t,s,e){t.exports=e.p+"assets/img/docs.ab807f21.svg"},688:function(t,s,e){t.exports=e.p+"assets/img/demo.645faca5.svg"},689:function(t,s,e){t.exports=e.p+"assets/img/notice.11e41707.svg"},690:function(t,s,e){t.exports=e.p+"assets/img/issues.3fedd75c.svg"},691:function(t,s,e){t.exports=e.p+"assets/img/msg.8d042d62.svg"},692:function(t,s,e){t.exports=e.p+"assets/img/Data.574f82d0.svg"},693:function(t,s,e){t.exports=e.p+"assets/img/Success.09df5e9d.svg"},694:function(t,s,e){var n=e(1),a=e(205),i=e(13),r=e(9),o=e(132),c=e(345),p=e(50),l=e(127),u=e(334),v=e(209),f=e(344),d=n.TypeError,m=function(t,s){this.stopped=t,this.result=s},g=m.prototype;t.exports=function(t,s,e){var n,h,x,b,S,q,k,y=e&&e.that,w=!(!e||!e.AS_ENTRIES),A=!(!e||!e.IS_ITERATOR),N=!(!e||!e.INTERRUPTED),j=a(s,y),K=function(t){return n&&f(n,"normal",t),new m(!0,t)},T=function(t){return w?(r(t),N?j(t[0],t[1],K):j(t[0],t[1])):N?j(t,K):j(t)};if(A)n=t;else{if(!(h=v(t)))throw d(o(t)+" is not iterable");if(c(h)){for(x=0,b=p(t);b>x;x++)if((S=T(t[x]))&&l(g,S))return S;return new m(!1)}n=u(t,h)}for(q=n.next;!(k=i(q,n)).done;){try{S=T(k.value)}catch(t){f(n,"throw",t)}if("object"==typeof S&&S&&l(g,S))return S}return new m(!1)}},695:function(t,s,e){},696:function(t,s,e){},753:function(t,s,e){t.exports=e.p+"assets/img/wx.c2c4e264.png"},754:function(t,s,e){var n={"./1.svg":680,"./2.svg":681,"./3.svg":679,"./404.svg":616,"./Data.svg":692,"./Delivery.svg":678,"./Subscribe.svg":682,"./Success.svg":693,"./base.svg":685,"./bug.svg":686,"./core.svg":683,"./demo.svg":688,"./docs.svg":687,"./feat.svg":684,"./info.svg":755,"./issues.svg":690,"./msg.svg":691,"./notice.svg":689,"./setup.svg":756,"./start.svg":757,"./style.svg":758};function a(t){var s=i(t);return e(s)}function i(t){if(!e.o(n,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=754},755:function(t,s,e){t.exports=e.p+"assets/img/info.4e046c12.svg"},756:function(t,s,e){t.exports=e.p+"assets/img/setup.94ff91a2.svg"},757:function(t,s,e){t.exports=e.p+"assets/img/start.ff8d390e.svg"},758:function(t,s,e){t.exports=e.p+"assets/img/style.b5f5a9cc.svg"},759:function(t,s,e){t.exports=e.p+"assets/img/add.bbb02d28.svg"},760:function(t,s,e){"use strict";e(761)("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),e(762))},761:function(t,s,e){"use strict";var n=e(4),a=e(1),i=e(3),r=e(330),o=e(49),c=e(333),p=e(694),l=e(604),u=e(7),v=e(11),f=e(5),d=e(346),m=e(129),g=e(608);t.exports=function(t,s,e){var h=-1!==t.indexOf("Map"),x=-1!==t.indexOf("Weak"),b=h?"set":"add",S=a[t],q=S&&S.prototype,k=S,y={},w=function(t){var s=i(q[t]);o(q,t,"add"==t?function(t){return s(this,0===t?0:t),this}:"delete"==t?function(t){return!(x&&!v(t))&&s(this,0===t?0:t)}:"get"==t?function(t){return x&&!v(t)?void 0:s(this,0===t?0:t)}:"has"==t?function(t){return!(x&&!v(t))&&s(this,0===t?0:t)}:function(t,e){return s(this,0===t?0:t,e),this})};if(r(t,!u(S)||!(x||q.forEach&&!f((function(){(new S).entries().next()})))))k=e.getConstructor(s,t,h,b),c.enable();else if(r(t,!0)){var A=new k,N=A[b](x?{}:-0,1)!=A,j=f((function(){A.has(1)})),K=d((function(t){new S(t)})),T=!x&&f((function(){for(var t=new S,s=5;s--;)t[b](s,s);return!t.has(-0)}));K||((k=s((function(t,s){l(t,q);var e=g(new S,t,k);return null!=s&&p(s,e[b],{that:e,AS_ENTRIES:h}),e}))).prototype=q,q.constructor=k),(j||T)&&(w("delete"),w("has"),h&&w("get")),(T||N)&&w(b),x&&q.clear&&delete q.clear}return y[t]=k,n({global:!0,forced:k!=S},y),m(k,t),x||e.setStrong(k,t,h),k}},762:function(t,s,e){"use strict";var n=e(17).f,a=e(38),i=e(619),r=e(205),o=e(604),c=e(694),p=e(215),l=e(663),u=e(16),v=e(333).fastKey,f=e(64),d=f.set,m=f.getterFor;t.exports={getConstructor:function(t,s,e,p){var l=t((function(t,n){o(t,f),d(t,{type:s,index:a(null),first:void 0,last:void 0,size:0}),u||(t.size=0),null!=n&&c(n,t[p],{that:t,AS_ENTRIES:e})})),f=l.prototype,g=m(s),h=function(t,s,e){var n,a,i=g(t),r=x(t,s);return r?r.value=e:(i.last=r={index:a=v(s,!0),key:s,value:e,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=r),n&&(n.next=r),u?i.size++:t.size++,"F"!==a&&(i.index[a]=r)),t},x=function(t,s){var e,n=g(t),a=v(s);if("F"!==a)return n.index[a];for(e=n.first;e;e=e.next)if(e.key==s)return e};return i(f,{clear:function(){for(var t=g(this),s=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete s[e.index],e=e.next;t.first=t.last=void 0,u?t.size=0:this.size=0},delete:function(t){var s=g(this),e=x(this,t);if(e){var n=e.next,a=e.previous;delete s.index[e.index],e.removed=!0,a&&(a.next=n),n&&(n.previous=a),s.first==e&&(s.first=n),s.last==e&&(s.last=a),u?s.size--:this.size--}return!!e},forEach:function(t){for(var s,e=g(this),n=r(t,arguments.length>1?arguments[1]:void 0);s=s?s.next:e.first;)for(n(s.value,s.key,this);s&&s.removed;)s=s.previous},has:function(t){return!!x(this,t)}}),i(f,e?{get:function(t){var s=x(this,t);return s&&s.value},set:function(t,s){return h(this,0===t?0:t,s)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),u&&n(f,"size",{get:function(){return g(this).size}}),l},setStrong:function(t,s,e){var n=s+" Iterator",a=m(s),i=m(n);p(t,s,(function(t,s){d(this,{type:n,target:t,state:a(t),kind:s,last:void 0})}),(function(){for(var t=i(this),s=t.kind,e=t.last;e&&e.removed;)e=e.previous;return t.target&&(t.last=e=e?e.next:t.state.first)?"keys"==s?{value:e.key,done:!1}:"values"==s?{value:e.value,done:!1}:{value:[e.key,e.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),e?"entries":"values",!e,!0),l(s)}}},763:function(t,s,e){var n=e(4),a=e(764),i=e(130);n({target:"Array",proto:!0},{fill:a}),i("fill")},764:function(t,s,e){"use strict";var n=e(23),a=e(206),i=e(50);t.exports=function(t){for(var s=n(this),e=i(s),r=arguments.length,o=a(r>1?arguments[1]:void 0,e),c=r>2?arguments[2]:void 0,p=void 0===c?e:a(c,e);p>o;)s[o++]=t;return s}},765:function(t,s,e){var n={"./18729086.jpg":766,"./26322785.jpg":767,"./26900681.jpg":768,"./36689704.jpg":769,"./52775847.jpg":770,"./60590060.jpg":771};function a(t){var s=i(t);return e(s)}function i(t){if(!e.o(n,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=765},766:function(t,s,e){t.exports=e.p+"assets/img/18729086.0bd73406.jpg"},767:function(t,s,e){t.exports=e.p+"assets/img/26322785.789919c6.jpg"},768:function(t,s,e){t.exports=e.p+"assets/img/26900681.68a4d1c1.jpg"},769:function(t,s){t.exports="data:image/jpeg;base64,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"},770:function(t,s,e){t.exports=e.p+"assets/img/52775847.83c15d57.jpg"},771:function(t,s,e){t.exports=e.p+"assets/img/60590060.a6a7c3fb.jpg"},772:function(t,s,e){t.exports=e.p+"assets/img/error.9f51e1eb.svg"},773:function(t,s,e){"use strict";e(695)},774:function(t,s,e){"use strict";e(696)},807:function(t,s,e){"use strict";e.r(s);var n=e(595),a=e(607),i=e(63),r=e(197),o=(e(760),e(19),e(22),e(28),e(198),e(199),e(331),e(336),e(86),e(763),{data:function(){return{stargazers:[],sortData:[[36689704,["core","base","docs"]],[26322785,["feat"]],[24652625,["base"]],[35678187,["base"]],[24731632,["base"]],[27748682,["base"]],[52775847,["bug","demo"]],[1503105,["bug"]],[8966236,["bug"]],[12890610,["bug"]],[70514533,["bug"]],[18543217,["bug"]],[26900681,["docs"]],[32808955,["docs"]],[18729086,["demo"]],[60590060,["demo"]],[23180446,["demo"]]],tittle:{core:"核心开发",base:"基础建设",feat:"需求优化",bug:"修复Bug",docs:"维护文档",demo:"贡献Demo"}}},mounted:function(){var t=this,s=new XMLHttpRequest;s.onreadystatechange=function(){if(4===s.readyState&&200===s.status){var e=JSON.parse(s.responseText);console.log(e);var n=new Map;e.forEach((function(t){return n.set(t.id,t)}));var a=[];t.sortData.forEach((function(t){var s=Object(r.a)(t,2),e=s[0],i=s[1],o=n.get(e);o.icon=i,a.push(o)})),e.forEach((function(s){return!t.sortData.map((function(t){return t[0]})).includes(s.id)&&a.push(s)})),a.push.apply(a,Object(i.a)(new Array(3).fill({}))),t.stargazers=a}},s.open("GET","https://api.github.com/users/luck-draw/following?per_page=100",!0),s.send()},methods:{imgError:function(t,s){var n;try{n=e(765)("./".concat(s,".jpg"))}catch(t){n=e(772)}n&&(t.target.src=n)}}}),c=(e(773),e(47)),p=Object(c.a)(o,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"stargazers"},[n("h1",[t._v("贡献者")]),t._v(" "),n("div",t._l(t.stargazers,(function(s){return n("span",{key:s.id,staticClass:"avatar-box"},[s.id?n("a",{attrs:{href:s.html_url,target:"_black"}},[n("img",{staticClass:"avatar",attrs:{src:s.avatar_url,title:s.login},on:{error:function(e){return t.imgError(e,s.id)}}}),t._v(" "),s.icon&&s.icon.length?n("span",{staticClass:"icon"},t._l(s.icon,(function(s){return n("img",{key:s,attrs:{title:t.tittle[s],src:e(754)("./"+s+".svg"),width:"18px"}})})),0):t._e()]):n("img",{staticClass:"avatar",attrs:{src:e(759)}})])})),0)])}),[],!1,null,"441923b5",null).exports,l={components:{Header:n.a,Footer:a.a,Stargazers:p}},u=(e(774),Object(c.a)(l,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"home-page"},[n("Header"),t._v(" "),n("div",{staticClass:"home-page-banner"},[n("el-container",{staticStyle:{"align-items":"center"}},[n("el-main",[n("div",[n("h1",[t._v("lucky-canvas")]),t._v(" "),n("p",[t._v("\n            (●'◡'●) 一个基于 Js + Canvas 的【大转盘 & 九宫格】抽奖，\n            致力于为 web 前端提供一个"),n("b",{staticClass:"code"},[t._v("功能强大")]),t._v("且"),n("b",{staticClass:"code"},[t._v("专业可靠")]),t._v("的组件，\n            只需要通过"),n("b",{staticClass:"code"},[t._v("简单配置")]),t._v("即可实现"),n("b",{staticClass:"code"},[t._v("自由化定制")]),t._v("，\n            帮助你快速的完成产品需求\n          ")])])]),t._v(" "),n("img",{attrs:{src:e(678),width:"50%"}})],1)],1),t._v(" "),n("div",{staticClass:"home-page-content"},[n("el-container",[n("div",{staticClass:"panel"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:e(679),width:"80%"}})]),t._v(" "),n("h1",[t._v("自由配置")]),t._v(" "),n("p",[t._v("奖品 / 文字 / 图片 / 颜色 / 按钮均可自由配置；支持同步 / 异步抽奖；中奖概率前 / 后端可控")])]),t._v(" "),n("div",{staticClass:"panel"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:e(680),width:"80%"}})]),t._v(" "),n("h1",[t._v("多端适配")]),t._v(" "),n("p",[t._v("支持 JS / TS / JQ / Vue / React / 微信小程序 / UniApp / Taro 等；并且多端使用 / 表现形式完全一致")])]),t._v(" "),n("div",{staticClass:"panel"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:e(681),width:"80%"}})]),t._v(" "),n("h1",[t._v("响应式")]),t._v(" "),n("p",[t._v("自动根据设备 dpr 调整清晰度；并支持使用 百分比 / rem / rpx 属性来适配移动端布局")])])]),t._v(" "),n("el-container",{staticClass:"home-page-wrapper"},[n("div",{staticClass:"img-wrapper",staticStyle:{"max-width":"34rem"}},[n("img",{attrs:{src:e(682),width:"100%"}})]),t._v(" "),n("div",{staticClass:"text-wrapper"},[n("h1",[t._v("加入我们")]),t._v(" "),n("li",{staticClass:"no-list second-indent"},[n("img",{staticStyle:{transform:"translateY(2.5px)"},attrs:{src:e(683),width:"22"}}),t._v(" "),n("b",[t._v("核心开发：")]),t._v("\n          实现了重要的功能 / 核心逻辑 / 提交过多次PR\n        ")]),t._v(" "),n("li",{staticClass:"no-list second-indent"},[n("img",{staticStyle:{transform:"translateY(2.5px)"},attrs:{src:e(684),width:"22"}}),t._v(" "),n("b",[t._v("需求优化：")]),t._v("\n          参与项目的需求开发, 提交PR完成合并\n        ")]),t._v(" "),n("li",{staticClass:"no-list second-indent"},[n("img",{staticStyle:{transform:"translateY(2.5px)"},attrs:{src:e(685),width:"22"}}),t._v(" "),n("b",[t._v("基础建设：")]),t._v("\n          完善项目的打包 / 发布流程, 优化了一些项目构建相关\n        ")]),t._v(" "),n("li",{staticClass:"no-list second-indent"},[n("img",{staticStyle:{transform:"translateY(2.5px)"},attrs:{src:e(686),width:"22"}}),t._v(" "),n("b",[t._v("修复Bug：")]),t._v("\n          修复了某个可能会导致代码运行的逻辑漏洞\n        ")]),t._v(" "),n("li",{staticClass:"no-list second-indent"},[n("img",{staticStyle:{transform:"translateY(2.5px)"},attrs:{src:e(687),width:"22"}}),t._v(" "),n("b",[t._v("维护文档：")]),t._v("\n          参与了文档的开发 / 维护 / 翻译\n        ")]),t._v(" "),n("li",{staticClass:"no-list second-indent"},[n("img",{staticStyle:{transform:"translateY(2.5px)"},attrs:{src:e(688),width:"22"}}),t._v(" "),n("b",[t._v("贡献Demo：")]),t._v("\n          如果你们公司抽奖的UI设计图比较好看，可以发给我审核\n        ")])])]),t._v(" "),n("el-container",{staticClass:"home-page-wrapper",staticStyle:{"margin-top":"-50px"}},[n("Stargazers")],1),t._v(" "),n("el-container",{staticClass:"home-page-wrapper hidden-719"},[n("div",{staticClass:"text-wrapper"},[n("h1",[t._v("问题反馈")]),t._v(" "),n("div",[n("img",{staticStyle:{float:"right",padding:"10px",background:"#fff","border-radius":"10px",transform:"translateX(20px)"},attrs:{src:e(753)}})]),t._v(" "),n("div",{staticStyle:{"padding-top":"5px"}},[n("li",{staticClass:"no-list second-indent"},[n("img",{staticStyle:{transform:"translateY(2.5px)"},attrs:{src:e(689),width:"22"}}),t._v(" "),n("b",{staticClass:"code"},[t._v("有问题先看文档")]),t._v("，如果我的描述跟预期不符，再加我微信，因为我上班不一定能及时回复\n            ")]),t._v(" "),n("li",{staticClass:"no-list second-indent"},[n("img",{staticStyle:{transform:"translateY(2.5px)"},attrs:{src:e(690),width:"22"}}),t._v(" Bug 反馈请直接去 Github 上面提 "),n("a",{attrs:{href:"https://github.com/LuckDraw/lucky-canvas/issues"}},[t._v("Issues")]),t._v("，我会实时收到邮件提醒前去查看\n            ")]),t._v(" "),n("li",{staticClass:"no-list second-indent"},[n("img",{staticStyle:{transform:"translateY(2.5px)"},attrs:{src:e(691),width:"22"}}),t._v(" 非本插件相关的问题请勿咨询, 不予解答!\n            ")])])]),t._v(" "),n("div",{staticClass:"img-wrapper",staticStyle:{"max-width":"34rem"}},[n("img",{attrs:{src:e(692),width:"100%"}})])]),t._v(" "),n("el-container",{staticClass:"home-page-wrapper hidden-719"},[n("div",{staticClass:"img-wrapper",staticStyle:{"max-width":"34rem"}},[n("img",{attrs:{src:e(693),width:"100%"}})]),t._v(" "),n("div",{staticClass:"text-wrapper"},[n("h1",[t._v("npm下载量")]),t._v(" "),n("li",[n("b",[t._v("在 JS / TS 中使用：")]),t._v("\n           "),n("img",{attrs:{src:"https://img.shields.io/npm/dm/lucky-canvas?logo=npm&style=social",alt:"downloads"}})]),t._v(" "),n("li",[n("b",[t._v("在 Vue 中使用：")]),t._v("\n           "),n("img",{attrs:{src:"https://img.shields.io/npm/dm/vue-luck-draw?logo=npm&style=social",alt:"downloads"}})]),t._v(" "),n("li",[n("b",[t._v("在 React 中使用：")]),t._v("\n           "),n("img",{attrs:{src:"https://img.shields.io/npm/dm/react-luck-draw?logo=npm&style=social",alt:"downloads"}})]),t._v(" "),n("li",[n("b",[t._v("在微信小程序中使用：")]),t._v("\n           "),n("img",{attrs:{src:"https://img.shields.io/npm/dm/mini-luck-draw?logo=npm&style=social",alt:"downloads"}})]),t._v(" "),n("li",[n("b",[t._v("在 UniApp 中使用：")]),t._v("\n           "),n("img",{attrs:{src:"https://img.shields.io/npm/dm/uni-luck-draw?logo=npm&style=social",alt:"downloads"}})]),t._v(" "),n("li",[n("b",[t._v("在 Taro 中使用：")]),t._v("\n           "),n("img",{attrs:{src:"https://img.shields.io/npm/dm/taro-luck-draw?logo=npm&style=social",alt:"downloads"}})])])])],1),t._v(" "),n("Footer")],1)}),[],!1,null,"7cc25af4",null));s.default=u.exports}}]);
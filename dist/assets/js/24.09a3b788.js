(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{552:function(t,s,n){},624:function(t,s,n){"use strict";n(552)},668:function(t,s,n){"use strict";n.r(s);n(228);var e={data:function(){return{currStatus:0,blocks:[{padding:"10px",background:"#869cfa"},{padding:"10px",background:"#e9e8fe"}],prizes:[{x:0,y:0,fonts:[{text:"0",top:"25%"}]},{x:1,y:0,fonts:[{text:"1",top:"25%"}]},{x:2,y:0,fonts:[{text:"2",top:"25%"}]},{x:2,y:1,fonts:[{text:"3",top:"25%"}]},{x:2,y:2,fonts:[{text:"4",top:"25%"}]},{x:1,y:2,fonts:[{text:"5",top:"25%"}]},{x:0,y:2,fonts:[{text:"6",top:"25%"}]},{x:0,y:1,fonts:[{text:"7",top:"25%"}]}],buttons:[{x:1,y:1,background:"#7f95d1",fonts:[{text:"开始",top:"25%"}]}],defaultStyle:{background:"#b8c5f2"}}},mounted:function(){this.startCallBack()},methods:{startCallBack:function(){var t=this;this.$refs.LuckyGrid.play(),this.currStatus=1,setTimeout((function(s){t.currStatus=2}),2500),setTimeout((function(s){t.$refs.LuckyGrid.stop(8*Math.random()>>0),t.currStatus=3,setTimeout((function(){return t.setInterval()}),2500)}),5e3)},endCallBack:function(){this.currStatus=0},setInterval:function(){var t=this;setTimeout((function(){t.startCallBack()}),1e3)}}},a=(n(624),n(32)),u=Object(a.a)(e,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("LuckyGrid",{ref:"LuckyGrid",attrs:{width:"200px",height:"200px",blocks:t.blocks,prizes:t.prizes,buttons:t.buttons,defaultStyle:t.defaultStyle},on:{start:t.startCallBack,end:t.endCallBack}}),t._v(" "),n("div",{staticClass:"flex"},[n("span",{class:["list",1===t.currStatus&&"green"]},[t._v("加速")]),t._v(" "),n("span",{class:["list",2===t.currStatus&&"yellow"]},[t._v("匀速")]),t._v(" "),n("span",{class:["list",3===t.currStatus&&"red"]},[t._v("减速")])])],1)}),[],!1,null,"acf1d3ac",null);s.default=u.exports}}]);
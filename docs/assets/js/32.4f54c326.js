(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{680:function(t,s,n){},824:function(t,s,n){"use strict";n(680)},901:function(t,s,n){"use strict";n.r(s);n(326);var a={data:function(){return{currStatus:0,blocks:[{padding:"10px",background:"#869cfa"}],prizes:[{background:"#e9e8fe",fonts:[{text:"0"}]},{background:"#b8c5f2",fonts:[{text:"1"}]},{background:"#e9e8fe",fonts:[{text:"2"}]},{background:"#b8c5f2",fonts:[{text:"3"}]},{background:"#e9e8fe",fonts:[{text:"4"}]},{background:"#b8c5f2",fonts:[{text:"5"}]}],buttons:[{radius:"40%",background:"#617df2"},{radius:"35%",background:"#afc8ff"},{radius:"30%",background:"#869cfa",pointer:!0,fonts:[{text:"开始",top:"-10px"}]}]}},mounted:function(){this.startCallBack()},methods:{startCallBack:function(){var t=this;this.$refs.myLucky.play(),this.currStatus=1,setTimeout((function(s){t.currStatus=2}),2500),setTimeout((function(s){t.$refs.myLucky.stop(8*Math.random()>>0),t.currStatus=3,setTimeout((function(){return t.setInterval()}),2500)}),5e3)},endCallBack:function(){this.currStatus=0},setInterval:function(){var t=this;setTimeout((function(){t.startCallBack()}),1e3)}}},e=(n(824),n(47)),c=Object(e.a)(a,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("LuckyWheel",{ref:"myLucky",attrs:{width:"200px",height:"200px",blocks:t.blocks,prizes:t.prizes,buttons:t.buttons},on:{start:t.startCallBack,end:t.endCallBack}}),t._v(" "),n("div",{staticClass:"flex"},[n("span",{class:["list",1===t.currStatus&&"green"]},[t._v("加速")]),t._v(" "),n("span",{class:["list",2===t.currStatus&&"yellow"]},[t._v("匀速")]),t._v(" "),n("span",{class:["list",3===t.currStatus&&"red"]},[t._v("减速")])])],1)}),[],!1,null,"11952cbc",null);s.default=c.exports}}]);
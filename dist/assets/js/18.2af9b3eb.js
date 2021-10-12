(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{529:function(e,t,n){},607:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}var a=["attrs","props","domProps"],i=["class","style","directives"],l=["on","nativeOn"],d=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}};e.exports=function(e){return e.reduce((function(e,t){for(var n in t)if(e[n])if(-1!==a.indexOf(n))e[n]=r({},e[n],t[n]);else if(-1!==i.indexOf(n)){var s=e[n]instanceof Array?e[n]:[e[n]],c=t[n]instanceof Array?t[n]:[t[n]];e[n]=s.concat(c)}else if(-1!==l.indexOf(n))for(var o in t[n])if(e[n][o]){var u=e[n][o]instanceof Array?e[n][o]:[e[n][o]],p=t[n][o]instanceof Array?t[n][o]:[t[n][o]];e[n][o]=u.concat(p)}else e[n][o]=t[n][o];else if("hook"==n)for(var m in t[n])e[n][m]=e[n][m]?d(e[n][m],t[n][m]):t[n][m];else e[n]=t[n];else e[n]=t[n];return e}),{})}},608:function(e,t,n){"use strict";n(529)},641:function(e,t,n){"use strict";n.r(t);var r=n(607),a=n.n(r),i=(n(134),n(89),n(33),n(229),n(245),n(42)),l=(n(230),n(43),[{name:"width",type:"string | number",isRequire:!0,title:"组件宽度",default:"300px",desc:'可以是 300 / "300px" / "20rem" / "40rpx" / "50vw"<br /><br />注意: 目前只支持 px / rem / rpx / vw 单位, 自定义单位正在测试中'},{name:"height",type:"string | number",isRequire:!0,title:"组件高度",default:"300px",desc:'可以是 300 / "300px" / "20rem" / "40rpx" / "50vw"<br /><br />注意: 目前只支持 px / rem / rpx / vw 单位, 自定义单位正在测试中'}]),d="\n1. 宽高都未设置：则使用图片原大小；（实际大小）<br />\n2. 有宽度无高度：则高度随着宽度等比缩放；（等比缩放）<br />\n3. 有高度无宽度：则宽度随着高度等比缩放；（等比缩放）<br />\n4. 既有宽度也有高度：则图片宽高均等于设置的值；（会被拉伸）\n",s=function(e){return[{name:"text",type:"string",title:"文字内容",isRequire:!0,desc:"当 wordWrap 为 false 时, 可以使用 \\n 换行"},{name:"top",type:"string | number",title:"文字位置",default:"0px",desc:"距离".concat(e,'的距离, 可以是 20 / "20px" / "20%"')},{name:"fontColor",type:"string",title:"字体颜色",default:"黑色 #000",desc:"可继承 defaultStyle 的字体颜色, 可以是 #000 / rgba(0, 0, 0, 0.5)"},{name:"fontSize",type:"string | number",title:"字体大小",default:"22px",desc:'可继承 defaultStyle 的字体大小, 可以是 22 / "22px"'},{name:"fontStyle",type:"string",title:"字体样式",default:"sans-serif",desc:"可继承 defaultStyle 的字体样式; 如果字体样式加载失败, 可能会产生未知的文字渲染Bug"},{name:"fontWeight",type:"string | number",title:"字体粗细",default:"400",desc:"可继承 defaultStyle 的字体粗细; 目前仅支持 300 / 400 / 500 / 600 / 700"},{name:"lineHeight",type:"string | number",title:"字体粗细",default:"字体大小",desc:"可继承 defaultStyle 的字体行高"}]},c=function(e){return[{name:"src",type:"string",title:"图片路径",isRequire:!0,desc:"该属性不可为空!"},{name:"top",type:"string | number",title:"图片位置",default:"0px",desc:"距离".concat(e,'的距离, 可以是 20 / "20px" / "20%"')},{name:"width",type:"string | number",title:"图片宽度",default:"0px",desc:d},{name:"height",type:"string | number",title:"图片高度",default:"0px",desc:d}]},o=[{name:"range",type:"number",title:"中奖概率【测试中】",desc:"概率属性: <br />\n如果3个奖品的 range 分别为 [10, 20, 30], 则中奖几率为 [10/60, 20/60, 30/60]<br />\n如果3个奖品的 range 分别为 [10, 0, 30], 则中奖几率为 [10/40, 0, 30/40]<br />\n如果3个奖品的 range 分别为 [0, null, undefined], 我此时会无视 range 属性<br /><br />\n注意: 使用 range 属性时, stop 方法就不能传递中奖索引了, 否则 stop 传递的索引<br />具有优先级, 我会无视你配置的 range 属性;\n"}],u=[{name:"wordWrap",type:"boolean",title:"文字自动换行",default:"true 开启",desc:"可继承 defaultStyle 的自动换行, 且只有在 false 关闭时, 文字才能使用 \\n换行"}],p=[{name:"lengthLimit",type:"string | number",title:"换行宽度范围",default:"90%",desc:'可继承 defaultStyle 的 lengthLimit 属性, wordWrap 属性开启时才会生效, <br />文字会基于当前扇形的宽度自动换行, 可以是 90 / "90px" / "90%"'}],m=[{name:"init()",title:"初始化",desc:"调用该方法时, 会立刻停止游戏, 回到最初始的状态"},{name:"play()",title:"开始抽奖",desc:"调用该方法时, 游戏才会开始"},{name:"stop(index?: number)",title:"缓慢停止",desc:"调用该方法时, 才会缓慢停止, 参数就是中奖奖品的索引"}],b=[{name:"start",type:"() => void",title:"开始抽奖前",desc:"当点击抽奖按钮时, 触发该回调, 此时你可以决定是否要开始游戏"},{name:"end",type:"(button) => void",title:"结束抽奖后",desc:"当游戏完全结束后, 触发该回调, 你可以在此时弹窗恭喜用户<br />参数则是点击的按钮"}],f={base:Object(i.a)(l),blocks:{name:"blocks",type:"Array<object>",title:"背景区域",desc:"为了使得大转盘始终是一个圆，所以这里不支持`paddingLeft`、<br />`paddingRight`、`paddingTop`、`paddingBottom`等属性",children:[{name:"padding",type:"string | number",title:"内边距",default:0,desc:"为了保证大转盘是一个标准的圆, 所以 padding 只能输入一个值;<br />即便你输入了多个值, 我也只会取第一个"},{name:"background",type:"string",title:"背景颜色",default:"透明色",desc:'可以是 "#000" / "rgba(0, 0, 0, 0.5)"'},{name:"imgs",type:"Array<object>",title:"背景图片",desc:"一般情况下, 我建议你使用&lt;img&gt;标签或css属性来设置背景图片;<br />除非你想让背景图片也跟着转盘一起旋转",children:[].concat(Object(i.a)(c("组件顶部")),[{name:"rotate",type:"boolean",title:"背景图片是否跟随旋转",default:!1,desc:"如果你所有的奖品(图片/文字)都在一整张图片上,<br />或者你就是单纯的想让背景图片跟随转盘一起旋转"}])}]},prizes:{name:"prizes",type:"Array<object>",title:"奖品列表",desc:"转盘会自动根据奖品数量来分配扇形区域, 也就是角度",children:[].concat(Object(i.a)(o),[{name:"background",type:"string",title:"扇形背景颜色",default:"透明色",desc:"可继承 defaultStyle 的背景颜色"},{name:"fonts",type:"Array<object>",title:"奖品文字",children:[].concat(Object(i.a)(s("扇形顶部")),Object(i.a)(u),Object(i.a)(p))},{name:"imgs",type:"Array<object>",title:"奖品图片",children:Object(i.a)(c("扇形顶部"))}])},buttons:{name:"buttons",type:"Array<object>",title:"抽奖按钮",children:[{name:"radius",type:"string | number",title:"按钮半径",isRequire:!0,default:"0px",desc:"点击按钮抽奖时, 我会根据按钮的半径去判断, 点击的坐标是否在圆的范围内, 所以半径是必填项"},{name:"pointer",type:"boolean",title:"是否显示指针",default:!1,desc:"我这里只给你提供一个简陋的指针, 你可以找你家UI要一个好看的图片, 放到下面的 imgs 里面"},{name:"background",type:"string",title:"按钮背景颜色",default:"黑色 #000"},{name:"fonts",type:"Array<object>",title:"奖品文字",children:Object(i.a)(s("圆心"))},{name:"imgs",type:"Array<object>",title:"奖品图片",children:Object(i.a)(c("圆心"))}]},"default-config":{name:"default-config",type:"object",title:"默认配置",children:[{name:"gutter",type:"string | number",title:"缝隙",default:"0px",desc:'扇形和扇形之间的缝隙, 可以是 1 / "1px"'},{name:"stopRange",type:"number",title:"指针在在扇形区域的停止范围",default:"0",desc:"以扇形的中线开始计算一个随机角度范围;<br />1. 如果等于 0 则会停留扇形的中线上<br />2. 如果等于 1 则有可能会停留在扇形的缝隙上<br />建议范围 0 ~ 0.8"},{name:"offsetDegree",type:"number",title:"转盘的偏移角度",default:"0 度",desc:"一般这里只会输入两种值;<br />1. 输入 0 则缝隙朝着正上方<br />2. 假设有 6 个奖品, 输入 (360 / 6 / 2) 则第一个奖品朝着正上方"},{name:"speed",type:"number",title:"旋转速度峰值",default:"20",desc:"建议配置范围 10 ~ 30"},{name:"accelerationTime",type:"number",title:"开始旋转时间",default:"2500 毫秒",desc:"单位为毫秒"},{name:"decelerationTime",type:"number",title:"开始旋转时间",default:"2500 毫秒",desc:"单位为毫秒"}]},"default-style":{name:"default-style",type:"object",title:"默认样式",children:[{name:"background",type:"string",title:"奖品区域背景颜色",default:"透明色"}].concat(Object(i.a)(s().slice(2)),Object(i.a)(u),Object(i.a)(p))},methods:m,callback:b},y=[].concat(Object(i.a)(l),[{name:"rows",type:"string | number",title:"设置布局有几行",default:"3",desc:"你可以搭配该属性实现 m * n 宫格抽奖组件"},{name:"cols",type:"string | number",title:"设置布局有几列",default:"3",desc:"你可以搭配该属性实现 m * n 宫格抽奖组件"}]),g=[{name:"shadow",type:"string",title:"格子阴影",desc:"由 4 个值组成：1.水平位置、2.垂直位置、3.模糊度、4.阴影颜色"}],h=[{name:"background",type:"string",title:"格子背景颜色",default:"透明色",desc:'可继承 defaultStyle 背景色, 可设置为 "#000" / "rgba(0, 0, 0, 0.5)"'}],j=[{name:"x",type:"number",title:"相对坐标 x",isRequire:!0,desc:"如果是标准的 3*3 宫格，那 x 的范围是 0 ~ 2"},{name:"y",type:"number",title:"相对坐标 y",isRequire:!0,desc:"如果是标准的 3*3 宫格，那 x 的范围是 0 ~ 2"},{name:"col",type:"number",title:"横向合并格子",default:"1",desc:""},{name:"row",type:"number",title:"纵向合并格子",default:"1",desc:""}].concat(Object(i.a)(o),[{name:"borderRadius",type:"string | number",title:"格子圆角半径",default:"20px",desc:"可继承 defaultStyle 的圆角半径, 可设置为 0 ~ Infinity"}],g,h,[{name:"fonts",type:"Array<object>",title:"奖品文字",children:[].concat(Object(i.a)(s("格子顶部")),Object(i.a)(u),Object(i.a)(p))}]),x={wheel:f,grid:{base:y,blocks:{name:"blocks",type:"Array<object>",title:"背景区域",desc:"blocks用来绘制矩形（宽度和高度不可配置）<br />第一个矩形的宽高等于 &lt;lucky-grid&gt; 的宽高，<br />但可以通过padding属性挤出边框的样式",children:[{name:"borderRadius",type:"string | number",title:"圆角半径",default:"0px",desc:"设置范围建议 0 ~ Infinity"},{name:"background",type:"string",title:"背景颜色",default:"透明色",desc:'可以是 "#000" / "rgba(0, 0, 0, 0.5)"'},{name:"padding",type:"string | number",title:"内边距",default:"0px",desc:"与 css 中 padding 使用方式一样"},{name:"paddingTop",type:"string | number",title:"上边距",desc:"优先级大于 padding"},{name:"paddingBottom",type:"string | number",title:"下边距",desc:"优先级大于 padding"},{name:"paddingLeft",type:"string | number",title:"左边距",desc:"优先级大于 padding"},{name:"paddingRight",type:"string | number",title:"右边距",desc:"优先级大于 padding"}]},prizes:{name:"prizes",type:"Array<object>",title:"奖品列表",desc:"奖品列表是一个数组，item里面有两个必须的参数：x、y 来控制这个格子的显示坐标",children:[].concat(Object(i.a)(j),[{name:"imgs",type:"Array<object>",title:"奖品图片",children:[].concat(Object(i.a)(c("格子顶部")),[{name:"activeSrc",type:"string",title:"中奖时的图片路径",desc:"当中奖标记处于当前格子时, 将把 src 的图片路径替换为 activeSrc"}])}])},buttons:{name:"buttons",type:"Array<object>",title:"抽奖按钮",desc:"实际上奖品格子的属性与按钮格子的属性相差无几, 唯一的区别就是按钮不需要 activeSrc 属性",children:[].concat(Object(i.a)(j),[{name:"imgs",type:"Array<object>",title:"奖品图片",children:Object(i.a)(c("格子顶部"))}])},"default-config":{name:"default-config",type:"object",title:"默认配置",desc:"defaultConfig 是对抽奖插件进行整体的配置",children:[{name:"gutter",type:"number",title:"格子之间的缝隙",default:"5"},{name:"speed",type:"number",title:"旋转速度峰值",default:"20",desc:"建议配置范围 10 ~ 30"},{name:"accelerationTime",type:"number",title:"开始旋转时间",default:"2500",desc:"单位为毫秒"},{name:"decelerationTime",type:"number",title:"缓慢停止时间",default:"2500",desc:"单位为毫秒"}]},"default-style":{name:"default-style",type:"object",title:"默认样式",desc:"如果你觉得写一堆重复的数据很烦的话，那你可以在这里进行统一的管理，<br />其中包括奖品和抽奖按钮的部分样式，在没有配置的情况下都会继承这里的属性",children:[{name:"borderRadius",type:"string | number",title:"格子圆角",default:"20px",desc:""}].concat(h,[{name:"shadow",type:"string",title:"格子阴影",desc:"由 4 个值组成：1.水平位置、2.垂直位置、3.模糊度、4.阴影颜色"}],Object(i.a)(s().slice(2)),Object(i.a)(u),Object(i.a)(p))},"active-style":{name:"active-style",type:"object",title:"中奖标记样式",children:[].concat(Object(i.a)(s().slice(2,6)),h,g)},methods:m,callback:b}},v={name:"Attributes",props:{index:{type:String,require:!0}},computed:{tree:function(){var e=this.index.split(".").reduce((function(e,t){return e[t]}),x);return Array.isArray(e)?e:[e]}},methods:{renderName:function(e){return(0,this.$createElement)("span",{class:"text key"},[e.name||""])},renderType:function(e){var t=this.$createElement;return e.type?t("span",[t("span",{class:"symbol"},[e.type?e.isRequire?":":"?:":""]),t("span",{class:"type"},[" ",e.type])]):null},renderTitle:function(e){var t=this.$createElement;return e.title?t("span",[" ",e.title]):null},renderInfo:function(e){var t=this.$createElement;return e.desc?t("el-tooltip",{class:"item",attrs:{effect:"dark",placement:"top-start"}},[t("div",{slot:"content",domProps:{innerHTML:e.desc}}),t("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),t("path",{attrs:{d:"M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",fill:"#5e56f6",stroke:"#5e56f6","stroke-width":"3","stroke-linejoin":"round"}}),t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 12.1193 22.6193 11 24 11Z",fill:"#FFF"}}),t("path",{attrs:{d:"M24.5 34V20H23.5H22.5",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),t("path",{attrs:{d:"M21 34H28",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}})])]):""},renderDefault:function(e){var t=this.$createElement,n=String(e.default);return n&&"undefined"!==n?t("span",[" ",t("el-tag",{attrs:{type:"info",size:"mini"}},["默认为: ",n])]):""}},render:function(){var e=this,t=arguments[0];return t("el-tree",a()([{class:"attr-tree",attrs:{data:this.tree,"default-expand-all":!0,"expand-on-click-node":!1}},{scopedSlots:{default:function(n){var r=n.data;return t("div",{class:"attr-line"},[t("code",{class:"old-code"},[e.renderName(r),e.renderType(r)]),e.renderTitle(r),e.renderInfo(r),e.renderDefault(r)])}}}]))}},O=(n(608),n(32)),w=Object(O.a)(v,void 0,void 0,!1,null,"5edb3fd0",null);t.default=w.exports}}]);
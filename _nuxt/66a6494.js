(window.webpackJsonp=window.webpackJsonp||[]).push([[9,7,12,16,25],{400:function(t,n,o){var content=o(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("59265ed2",content,!0,{sourceMap:!1})},401:function(t,n,o){"use strict";o.r(n);o(402);var e=o(18),component=Object(e.a)({},(function(){return(0,this._self._c)("div",{staticClass:"button--content"},[this._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},402:function(t,n,o){"use strict";o(400)},403:function(t,n,o){var e=o(33)((function(i){return i[1]}));e.push([t.i,".button--content{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""]),e.locals={},t.exports=e},404:function(t,n,o){var content=o(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("7bc65f30",content,!0,{sourceMap:!1})},405:function(t,n,o){"use strict";o.r(n);var e={props:{color:{type:String,default:"#fff"}}},l=o(18),component=Object(l.a)(e,(function(){var t=this._self._c;return t("svg",{attrs:{width:"20",height:"20"}},[t("path",{attrs:{d:"M12.131 16.169a.746.746 0 0 1-.057-1.049l4.255-4.7H1.742a.742.742 0 0 1 0-1.484h14.587l-4.255-4.7a.746.746 0 0 1 1.106-1L19 9.681l-5.82 6.433a.744.744 0 0 1-.552.247.735.735 0 0 1-.497-.192z",fill:this.color}})])}),[],!1,null,null,null);n.default=component.exports},406:function(t,n,o){"use strict";o.r(n);o(94);var e={emits:["click"],props:{large:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(t){return["left","right"].includes(t)}},noHover:{type:Boolean,default:!1}},computed:{hasIcon:function(){return!!this.$slots.icon}}},l=(o(409),o(18)),component=Object(l.a)(e,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"button-rounded",class:{"button-rounded--large":t.large,"button-rounded--outline":t.outline,"button-rounded--nohover":t.noHover},on:{click:function(n){return t.$emit("click")}}},[n("ButtonContent",{staticClass:"uppercase font-medium",class:{"text-md-button":!t.large,"text-lg-button":t.large}},[t.hasIcon&&"left"===t.iconPosition?n("div",{staticClass:"mr-2"},[t._t("icon")],2):t._e(),t._v(" "),t._t("default"),t._v(" "),t.hasIcon&&"right"===t.iconPosition?n("div",{staticClass:"ml-2"},[t._t("icon")],2):t._e()],2)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ButtonContent:o(401).default})},407:function(t,n,o){var content=o(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("9595b8e6",content,!0,{sourceMap:!1})},409:function(t,n,o){"use strict";o(404)},410:function(t,n,o){var e=o(33)((function(i){return i[1]}));e.push([t.i,'.button-rounded .button--content{height:20px}.button-rounded.button-rounded--large .button--content{height:25px}.button-rounded{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;z-index:0;display:-ms-inline-flexbox;display:inline-flex;height:40px;padding:16px 25px;border-radius:50px}.button-rounded:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50px;background-color:transparent;z-index:-1;transition:all .2s ease-in-out}.button-rounded:hover:not(.button-rounded--nohover):before{-webkit-transform:scaleX(1.07);transform:scaleX(1.07)}.button-rounded.button--white{color:#333}.button-rounded.button--white:before{background-color:#fff}.button-rounded.button--green{color:#fff}.button-rounded.button--green:before{background-color:#4da169}.button-rounded.button--blue{color:#fff}.button-rounded.button--blue:before{background-color:#12465c}.button-rounded--large{height:50px}.button-rounded--outline{padding:7px 25px}.button-rounded--outline:before{outline:1px solid rgba(51,51,51,.2)}.button-rounded--outline:hover:not(.button-rounded--outline--nohover):before{-webkit-transform:scaleX(1);transform:scaleX(1);outline:1px solid #333}',""]),e.locals={},t.exports=e},411:function(t,n,o){"use strict";o.r(n);var e={},l=(o(414),o(18)),component=Object(l.a)(e,(function(){return(0,this._self._c)("div",{staticClass:"block-container"},[this._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},414:function(t,n,o){"use strict";o(407)},415:function(t,n,o){var e=o(33)((function(i){return i[1]}));e.push([t.i,".block-container{position:relative;width:100%;max-width:1680px;margin:0 auto}",""]),e.locals={},t.exports=e},478:function(t,n,o){var content=o(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("622d04be",content,!0,{sourceMap:!1})},521:function(t,n,o){t.exports=o.p+"img/logo_BC_white.476c07e.png"},522:function(t,n,o){"use strict";o(478)},523:function(t,n,o){var e=o(33),l=o(237),r=o(524),c=e((function(i){return i[1]})),d=l(r);c.push([t.i,".block-financing{background-color:#434634;color:#fff}@media(min-width:1024px){.block-financing{background-image:url("+d+");background-repeat:no-repeat}}.block-financing>.block-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.block-financing>.block-container>*{-ms-flex:1;flex:1}.block-financing--logo{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:auto}@media(min-width:1024px){.block-financing--logo>img{width:240px;height:90px}}.block-financing--content{max-width:600px}",""]),c.locals={},t.exports=c},524:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MjUiIGhlaWdodD0iMTM0NCIgdmlld0JveD0iMCAwIDgyNSAxMzQ0Ij4NCiAgICA8dGV4dCBpZD0iZmluYW5jZV9yZWFsaXR5X2ludmVzdGljZV9oeXBvdMOpa3lfZmluYW5jZV9yZWFsaXR5X2ludmVzdGljZV9oeXBvdMOpa3kiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTY4KSIgZmlsbD0iI2ZmZiIgZm9udC1zaXplPSIxNjAiIGZvbnQtZmFtaWx5PSJQb3BwaW5zLVNlbWlCb2xkLCBQb3BwaW5zIiBmb250LXdlaWdodD0iNjAwIiBvcGFjaXR5PSIwLjAyIj48dHNwYW4geD0iMCIgeT0iMCI+RklOQU5DRTwvdHNwYW4+PHRzcGFuIHg9IjAiIHk9IjE2MCI+UkVBTElUWTwvdHNwYW4+PHRzcGFuIHg9IjAiIHk9IjMyMCI+SU5WRVNUSUNFPC90c3Bhbj48dHNwYW4geD0iMCIgeT0iNDgwIj5IWVBPVMOJS1k8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSI2NDAiPkZJTkFOQ0U8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSI4MDAiPlJFQUxJVFk8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSI5NjAiPklOVkVTVElDRTwvdHNwYW4+PHRzcGFuIHg9IjAiIHk9IjExMjAiPkhZUE9Uw4lLWTwvdHNwYW4+PC90ZXh0Pg0KPC9zdmc+DQogIA=="},589:function(t,n,o){"use strict";o.r(n);var e={},l=(o(522),o(18)),component=Object(l.a)(e,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"block-financing poster-height"},[n("BlockContainer",[n("div",{staticClass:"block-financing--logo"},[n("img",{attrs:{src:o(521),alt:"Broker Consulting"}})]),t._v(" "),n("div",[n("div",{staticClass:"block-financing--content mx-32"},[n("h3",{staticClass:"text-md-title mb-16"},[t._v("Výhodné financování"),n("br"),t._v("od specialistů")]),t._v(" "),n("p",{staticClass:"text-md-paragraph mb-16"},[t._v("Rádi Vám pomůžeme s nastavením výhodného financování vašeho nového bydlení či investičního nákupu. Díky bohatým zkušenostem a pevné vyjednávací pozici vám vyjednáme ty nejlepší podmínky napříč celým bankovním sektorem.")]),t._v(" "),n("NuxtLink",{attrs:{to:{name:"financing"}}},[n("ButtonRounded",{staticClass:"button--white",attrs:{large:"",iconPosition:"right"},scopedSlots:t._u([{key:"icon",fn:function(){return[n("IconArrow",{attrs:{color:"#333"}})]},proxy:!0}])},[t._v("\n                        více o financování\n                        ")])],1)],1)])])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{IconArrow:o(405).default,ButtonRounded:o(406).default,BlockContainer:o(411).default})}}]);
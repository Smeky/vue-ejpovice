(window.webpackJsonp=window.webpackJsonp||[]).push([[59,6,7,9,10,11,12,14,15,16,25,31,32],{400:function(t,e,n){var content=n(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("59265ed2",content,!0,{sourceMap:!1})},401:function(t,e,n){"use strict";n.r(e);n(402);var o=n(18),component=Object(o.a)({},(function(){return(0,this._self._c)("div",{staticClass:"button--content"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},402:function(t,e,n){"use strict";n(400)},403:function(t,e,n){var o=n(33)((function(i){return i[1]}));o.push([t.i,".button--content{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""]),o.locals={},t.exports=o},404:function(t,e,n){var content=n(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("7bc65f30",content,!0,{sourceMap:!1})},405:function(t,e,n){"use strict";n.r(e);var o={props:{color:{type:String,default:"#fff"}}},l=n(18),component=Object(l.a)(o,(function(){var t=this._self._c;return t("svg",{attrs:{width:"20",height:"20"}},[t("path",{attrs:{d:"M12.131 16.169a.746.746 0 0 1-.057-1.049l4.255-4.7H1.742a.742.742 0 0 1 0-1.484h14.587l-4.255-4.7a.746.746 0 0 1 1.106-1L19 9.681l-5.82 6.433a.744.744 0 0 1-.552.247.735.735 0 0 1-.497-.192z",fill:this.color}})])}),[],!1,null,null,null);e.default=component.exports},406:function(t,e,n){"use strict";n.r(e);n(94);var o={emits:["click"],props:{large:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(t){return["left","right"].includes(t)}},noHover:{type:Boolean,default:!1}},computed:{hasIcon:function(){return!!this.$slots.icon}}},l=(n(409),n(18)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"button-rounded",class:{"button-rounded--large":t.large,"button-rounded--outline":t.outline,"button-rounded--nohover":t.noHover},on:{click:function(e){return t.$emit("click")}}},[e("ButtonContent",{staticClass:"uppercase font-medium",class:{"text-md-button":!t.large,"text-lg-button":t.large}},[t.hasIcon&&"left"===t.iconPosition?e("div",{staticClass:"mr-2"},[t._t("icon")],2):t._e(),t._v(" "),t._t("default"),t._v(" "),t.hasIcon&&"right"===t.iconPosition?e("div",{staticClass:"ml-2"},[t._t("icon")],2):t._e()],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonContent:n(401).default})},407:function(t,e,n){var content=n(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("9595b8e6",content,!0,{sourceMap:!1})},408:function(t,e,n){var content=n(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("e991c41c",content,!0,{sourceMap:!1})},409:function(t,e,n){"use strict";n(404)},410:function(t,e,n){var o=n(33)((function(i){return i[1]}));o.push([t.i,'.button-rounded .button--content{height:20px}.button-rounded.button-rounded--large .button--content{height:25px}.button-rounded{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;z-index:0;display:-ms-inline-flexbox;display:inline-flex;height:40px;padding:16px 25px;border-radius:50px}.button-rounded:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50px;background-color:transparent;z-index:-1;transition:all .2s ease-in-out}.button-rounded:hover:not(.button-rounded--nohover):before{-webkit-transform:scaleX(1.07);transform:scaleX(1.07)}.button-rounded.button--white{color:#333}.button-rounded.button--white:before{background-color:#fff}.button-rounded.button--green{color:#fff}.button-rounded.button--green:before{background-color:#4da169}.button-rounded.button--blue{color:#fff}.button-rounded.button--blue:before{background-color:#12465c}.button-rounded--large{height:50px}.button-rounded--outline{padding:7px 25px}.button-rounded--outline:before{outline:1px solid rgba(51,51,51,.2)}.button-rounded--outline:hover:not(.button-rounded--outline--nohover):before{-webkit-transform:scaleX(1);transform:scaleX(1);outline:1px solid #333}',""]),o.locals={},t.exports=o},411:function(t,e,n){"use strict";n.r(e);var o={},l=(n(414),n(18)),component=Object(l.a)(o,(function(){return(0,this._self._c)("div",{staticClass:"block-container"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},412:function(t,e,n){var content=n(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("12403e80",content,!0,{sourceMap:!1})},413:function(t,e,n){"use strict";n.r(e);var o={emits:["click"],props:{dark:{type:Boolean,default:!1}}},l=(n(416),n(18)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"button-leaf",class:{"button-leaf--dark":t.dark},on:{click:function(e){return t.$emit("click")}}},[e("ButtonContent",{staticClass:"font-medium uppercase text-gt-button"},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonContent:n(401).default})},414:function(t,e,n){"use strict";n(407)},415:function(t,e,n){var o=n(33)((function(i){return i[1]}));o.push([t.i,".block-container{position:relative;width:100%;max-width:1680px;margin:0 auto}",""]),o.locals={},t.exports=o},416:function(t,e,n){"use strict";n(408)},417:function(t,e,n){var o=n(33)((function(i){return i[1]}));o.push([t.i,'.button-leaf{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;color:#000;letter-spacing:5px;position:relative;width:300px;height:67px}.button-leaf:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:70px 0;background-color:#b0aa5a;transition:all .3s ease-in-out}@media(min-width:1024px){.button-leaf{width:315px;height:70px}.button-leaf:hover:before{-webkit-transform:scaleX(1.1);transform:scaleX(1.1)}}.button-leaf--dark{color:#fff}.button-leaf--dark:before{background-color:#333}',""]),o.locals={},t.exports=o},418:function(t,e,n){var content=n(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("848296e0",content,!0,{sourceMap:!1})},419:function(t,e,n){t.exports=n.p+"img/Free_spaces.ab4b3cd.png"},420:function(t,e,n){"use strict";n(412)},421:function(t,e,n){var o=n(33)((function(i){return i[1]}));o.push([t.i,'.free-spaces{position:relative}.free-spaces:after{position:absolute;min-width:100vw;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);-o-object-fit:cover;object-fit:cover;z-index:-10;content:"";pointer-events:none;top:inherit;bottom:0;height:50%;background:linear-gradient(0deg,rgba(60,65,35,.9) 0,transparent)}.free-spaces--image{background-color:#3c4123}.free-spaces--image img{width:100%;height:100%;opacity:.7;-o-object-fit:cover;object-fit:cover}.free-spaces--content{position:absolute;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;top:50%}@media(min-width:1024px){.free-spaces--content{top:80%}}',""]),o.locals={},t.exports=o},425:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this._self._c;return t("div",{staticClass:"free-spaces--image block-background"},[t("img",{attrs:{src:n(419)}})])}],l={},r=(n(420),n(18)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"free-spaces poster-height"},[t._m(0),t._v(" "),e("div",{staticClass:"free-spaces--content"},[e("h2",{staticClass:"text-cta-title color-white"},[t._v("26 volných")]),t._v(" "),e("NuxtLink",{attrs:{to:{name:"prices"}}},[e("ButtonLeaf",[t._v("vyberte si")])],1)],1)])}),o,!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonLeaf:n(413).default})},426:function(t,e,n){"use strict";n(418)},427:function(t,e,n){var o=n(33)((function(i){return i[1]}));o.push([t.i,'.button-icon{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;width:40px;height:40px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.button-icon:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50px;background-color:#fff;z-index:-1;transition:all .2s ease-in-out}.button-icon:hover:before{-webkit-transform:scale(1.15);transform:scale(1.15)}',""]),o.locals={},t.exports=o},428:function(t,e,n){"use strict";n.r(e);var o={},l=(n(426),n(18)),component=Object(l.a)(o,(function(){return(0,this._self._c)("div",{staticClass:"button-icon"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},429:function(t,e,n){var content=n(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("4b8413d7",content,!0,{sourceMap:!1})},430:function(t,e,n){var content=n(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("5e07f0cc",content,!0,{sourceMap:!1})},439:function(t,e,n){var content=n(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("39c3b2e4",content,!0,{sourceMap:!1})},448:function(t,e,n){t.exports=n.p+"img/Ejpovice_0004.2f80fd1.jpg"},449:function(t,e,n){"use strict";n(429)},450:function(t,e,n){var o=n(33)((function(i){return i[1]}));o.push([t.i,".block-landing-poster{position:relative;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;background:linear-gradient(0deg,#3c4123,transparent 50%)}.block-landing-poster--background>*{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;-o-object-fit:cover;object-fit:cover}.block-landing-poster--content{position:relative;z-index:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-bottom:110px}@media(min-width:1024px){.block-landing-poster--content{margin-bottom:130px}}",""]),o.locals={},t.exports=o},451:function(t,e,n){"use strict";n(430)},452:function(t,e,n){var o=n(33)((function(i){return i[1]}));o.push([t.i,".card-block-new{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}@media(min-width:1024px){.card-block-new{-ms-flex-direction:row;flex-direction:row}}.card-block-new>div{-ms-flex:1;flex:1}.card-block-new:not(.card-block--flipped) .card-block--content{padding-right:0}.card-block-new.card-block--flipped .card-block--content{padding-left:0}@media(min-width:1024px){.card-block--flipped>div:last-child{-ms-flex-order:-1;order:-1}}.card-block--content>:not(:last-child){margin-bottom:30px}@media(min-width:1024px){.card-block--content>:not(:last-child){margin-bottom:60px}}",""]),o.locals={},t.exports=o},466:function(t,e,n){t.exports=n.p+"img/DJI_0137_v25.55005c2.jpg"},467:function(t,e,n){"use strict";n.r(e);var o={emits:["click"],props:{title:{type:String,default:""}}},l=(n(449),n(18)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"block-landing-poster poster-height"},[e("div",{staticClass:"block-landing-poster--background"},[t._t("default")],2),t._v(" "),e("div",{staticClass:"block-landing-poster--content"},[e("h1",{staticClass:"text-cta-title"},[t._v("\n            "+t._s(t.title)+"\n        ")]),t._v(" "),e("ButtonIcon",{nativeOn:{click:function(e){return t.$emit("click")}}},[e("IconArrow",{staticClass:"rotate-90 scale-75",attrs:{color:"#333"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconArrow:n(405).default,ButtonIcon:n(428).default})},468:function(t,e,n){"use strict";n.r(e);var o={props:{image:{type:String,default:null},title:{type:String,required:!0},text:{type:String,required:!0},flip:{type:Boolean,default:!1}}},l=(n(451),n(18)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-block-new",class:{"card-block--flipped":t.flip}},[t.$slots.image?[t._t("image")]:e("div",{staticClass:"card-block--image"},[e("img",{attrs:{src:t.image}})]),t._v(" "),e("div",{staticClass:"card-block--content p-5 lg:p-28 mb-16 lg:mb-0"},[e("h2",{staticClass:"text-lg-title color-main-green"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"text-lg-paragraph"},[t._v(t._s(t.text))]),t._v(" "),t._t("button")],2)],2)}),[],!1,null,null,null);e.default=component.exports},473:function(t,e,n){var content=n(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("c41ece7c",content,!0,{sourceMap:!1})},474:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgICA8cGF0aCBpZD0iUGF0aF8xNzAyNiIgZGF0YS1uYW1lPSJQYXRoIDE3MDI2IiBkPSJNMTUsMkExMywxMywwLDAsMCw1LjgwOCwyNC4xOTIsMTMsMTMsMCwwLDAsMjQuMTkyLDUuODA4LDEyLjkxNSwxMi45MTUsMCwwLDAsMTUsMm0wLTJBMTUsMTUsMCwxLDEsMCwxNSwxNSwxNSwwLDAsMSwxNSwwWiIgZmlsbD0iIzMzMyIvPg0KICAgIDxwYXRoIGlkPSJQYXRoXzI1IiBkYXRhLW5hbWU9IlBhdGggMjUiIGQ9Ik0tNzcxNi4xOTIsMjQ4NC4zMzdsLTYuMDc2LTUuNDQsMS41OTEtMS40MjUsNC40ODUsNC4wMTYsOS41NTItOC41NTIsMS41OTEsMS40MjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NzI4LjMwMSAtMjQ2My42MjIpIiBmaWxsPSIjMzMzIi8+DQo8L3N2Zz4NCiAg"},475:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iVGltZWxpbmVfSWNvbl9Jbl9Qcm9ncmVzcyIgZGF0YS1uYW1lPSJUaW1lbGluZSBJY29uIEluIFByb2dyZXNzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgICA8cGF0aCBpZD0iRWxsaXBzZV80IiBkYXRhLW5hbWU9IkVsbGlwc2UgNCIgZD0iTTE1LDJBMTMsMTMsMCwwLDAsNS44MDgsMjQuMTkyLDEzLDEzLDAsMCwwLDI0LjE5Miw1LjgwOCwxMi45MTUsMTIuOTE1LDAsMCwwLDE1LDJtMC0yQTE1LDE1LDAsMSwxLDAsMTUsMTUsMTUsMCwwLDEsMTUsMFoiIGZpbGw9IiMzMzMiLz4NCiAgICA8cGF0aCBpZD0iUGF0aF80NDQiIGRhdGEtbmFtZT0iUGF0aCA0NDQiIGQ9Ik0xNzEzMS44NzUsNTQuMjI2YTEuMTI1LDEuMTI1LDAsMCwxLS43NjgtMS45NDhsMy4yNTYtMy4wMzFWNDQuMzc1YTEuMTI1LDEuMTI1LDAsMCwxLDIuMjUsMHY1LjM2MWExLjExOSwxLjExOSwwLDAsMS0uMzU5LjgyM2wtMy42MTEsMy4zNjRBMS4xMjIsMS4xMjIsMCwwLDEsMTcxMzEuODc1LDU0LjIyNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzEyMC4yOTcgLTM0LjU3MikiIGZpbGw9IiMzMzMiLz4NCjwvc3ZnPg0K"},476:function(t,e,n){"use strict";n(439)},477:function(t,e,n){var o=n(33)((function(i){return i[1]}));o.push([t.i,".about-schedule-item{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;-ms-flex:1;flex:1;padding:30px;background-color:#dbe3e7}.about-schedule-item--done{background-color:#4da169}",""]),o.locals={},t.exports=o},478:function(t,e,n){var content=n(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("622d04be",content,!0,{sourceMap:!1})},513:function(t,e,n){"use strict";n.r(e);var o={props:{label:{type:String,required:!0},date:{type:String,required:!0},finished:{type:Boolean,required:!0}}},l=(n(476),n(18)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-schedule-item gap-x-1",class:{"about-schedule-item--done":t.finished}},[e("div",[t.finished?e("img",{attrs:{src:n(474)}}):e("img",{attrs:{src:n(475)}})]),t._v(" "),e("span",{staticClass:"text-md-capital uppercase mt-3 mb-1"},[t._v(t._s(t.label))]),t._v(" "),e("span",{staticClass:"text-sm-title"},[t._v(t._s(t.date))])])}),[],!1,null,null,null);e.default=component.exports},519:function(t,e,n){"use strict";n(473)},520:function(t,e,n){var o=n(33)((function(i){return i[1]}));o.push([t.i,".about-schedule{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.about-schedule--bar{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%;gap:1px;border-radius:80px;overflow:hidden}",""]),o.locals={},t.exports=o},521:function(t,e,n){t.exports=n.p+"img/logo_BC_white.476c07e.png"},522:function(t,e,n){"use strict";n(478)},523:function(t,e,n){var o=n(33),l=n(237),r=n(524),c=o((function(i){return i[1]})),d=l(r);c.push([t.i,".block-financing{background-color:#434634;color:#fff}@media(min-width:1024px){.block-financing{background-image:url("+d+");background-repeat:no-repeat}}.block-financing>.block-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.block-financing>.block-container>*{-ms-flex:1;flex:1}.block-financing--logo{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:auto}@media(min-width:1024px){.block-financing--logo>img{width:240px;height:90px}}.block-financing--content{max-width:600px}",""]),c.locals={},t.exports=c},524:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MjUiIGhlaWdodD0iMTM0NCIgdmlld0JveD0iMCAwIDgyNSAxMzQ0Ij4NCiAgICA8dGV4dCBpZD0iZmluYW5jZV9yZWFsaXR5X2ludmVzdGljZV9oeXBvdMOpa3lfZmluYW5jZV9yZWFsaXR5X2ludmVzdGljZV9oeXBvdMOpa3kiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTY4KSIgZmlsbD0iI2ZmZiIgZm9udC1zaXplPSIxNjAiIGZvbnQtZmFtaWx5PSJQb3BwaW5zLVNlbWlCb2xkLCBQb3BwaW5zIiBmb250LXdlaWdodD0iNjAwIiBvcGFjaXR5PSIwLjAyIj48dHNwYW4geD0iMCIgeT0iMCI+RklOQU5DRTwvdHNwYW4+PHRzcGFuIHg9IjAiIHk9IjE2MCI+UkVBTElUWTwvdHNwYW4+PHRzcGFuIHg9IjAiIHk9IjMyMCI+SU5WRVNUSUNFPC90c3Bhbj48dHNwYW4geD0iMCIgeT0iNDgwIj5IWVBPVMOJS1k8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSI2NDAiPkZJTkFOQ0U8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSI4MDAiPlJFQUxJVFk8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSI5NjAiPklOVkVTVElDRTwvdHNwYW4+PHRzcGFuIHg9IjAiIHk9IjExMjAiPkhZUE9Uw4lLWTwvdHNwYW4+PC90ZXh0Pg0KPC9zdmc+DQogIA=="},577:function(t,e,n){var content=n(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("2eab7124",content,!0,{sourceMap:!1})},588:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{items:[{id:"schedule1",label:"zahájení stavby",date:"04/2022",finished:!0},{id:"schedule2",label:"hrubá stavba",date:"04/2022",finished:!1},{id:"schedule3",label:"omítky",date:"04/2022",finished:!1},{id:"schedule4",label:"kolaudace",date:"04/2022",finished:!1},{id:"schedule5",label:"předání klientům",date:"04/2022",finished:!1}]}}},l=(n(519),n(18)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-schedule"},[e("h3",{staticClass:"text-md-title mb-sm"},[t._v("Harmonogram výstavby")]),t._v(" "),e("div",{staticClass:"about-schedule--bar mb-sm"},t._l(t.items,(function(t){return e("PageAboutScheduleItem",{key:t.id,attrs:{label:t.label,date:t.date,finished:t.finished}})})),1),t._v(" "),e("p",{staticClass:"text-sm-paragraph max-w-[480px] mb-8"},[t._v("\n        V závislosti na stavu výstavby je třeba věnovat pozornost podmínkám financování. Podrobné informace žádejte od našich makléřů prodeje.\n    ")]),t._v(" "),e("div",[e("NuxtLink",{attrs:{to:{name:"financing"}}},[e("ButtonRounded",{attrs:{outline:""}},[t._v("\n                více o financování\n            ")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageAboutScheduleItem:n(513).default,ButtonRounded:n(406).default})},589:function(t,e,n){"use strict";n.r(e);var o={},l=(n(522),n(18)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"block-financing poster-height"},[e("BlockContainer",[e("div",{staticClass:"block-financing--logo"},[e("img",{attrs:{src:n(521),alt:"Broker Consulting"}})]),t._v(" "),e("div",[e("div",{staticClass:"block-financing--content mx-32"},[e("h3",{staticClass:"text-md-title mb-16"},[t._v("Výhodné financování"),e("br"),t._v("od specialistů")]),t._v(" "),e("p",{staticClass:"text-md-paragraph mb-16"},[t._v("Rádi Vám pomůžeme s nastavením výhodného financování vašeho nového bydlení či investičního nákupu. Díky bohatým zkušenostem a pevné vyjednávací pozici vám vyjednáme ty nejlepší podmínky napříč celým bankovním sektorem.")]),t._v(" "),e("NuxtLink",{attrs:{to:{name:"financing"}}},[e("ButtonRounded",{staticClass:"button--white",attrs:{large:"",iconPosition:"right"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconArrow",{attrs:{color:"#333"}})]},proxy:!0}])},[t._v("\n                        více o financování\n                        ")])],1)],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconArrow:n(405).default,ButtonRounded:n(406).default,BlockContainer:n(411).default})},612:function(t,e,n){"use strict";n(577)},613:function(t,e,n){var o=n(33)((function(i){return i[1]}));o.push([t.i,".page-about .block-container{padding-left:20px;padding-right:20px}@media(min-width:1024px){.page-about .block-container{padding-left:120px;padding-right:120px}}",""]),o.locals={},t.exports=o},640:function(t,e,n){"use strict";n.r(e);var o={head:function(){return{title:"O projektu | Ejpovice"}}},l=(n(612),n(18)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-about"},[e("BlockLandingPoster",{attrs:{title:"O projektu"},on:{click:function(e){return t.$scrollTo("#AboutAnchor")}}},[e("img",{attrs:{src:n(448),alt:"Ejpovice. Klidná lokalita v sousedství Plzně."}})]),t._v(" "),e("div",{staticClass:"mt-sm mb-gt",attrs:{id:"AboutAnchor"}},[e("BlockContainer",[e("BlockCardNew",{staticClass:"mb-gt",attrs:{flip:"",title:"12 domů, 4 pozemky",text:"Projekt Domy Ejpovice tvoří celkem 12 pasivních domů rozdělených na 8 bungalovů a 6 moderních kostek s vlastní zahradou, terasou a parkovacím stáním. Architektonicky výrazná novostavba bude citlivě vybudována k již dříve realizované etapě a díky své poloze v neprůjezdné ulici nabídne klidné bydlení, ideální nejen pro rodiny s dětmi.",image:n(466)}}),t._v(" "),e("BlockCardNew",{staticClass:"mb-gt",attrs:{title:"Mimořádně úsporné pasivní domy",text:"Domy v projektu jsou navrženy s důrazem na zdravé a zároveň energeticky soběstačné bydlení. Energetickým úsporám a nízkým nákladům na provoz našich pasivních domů napomáhají okna s izolačními trojskly, nadstandardní zateplení obvodových stěn i systém automatického větrání s rekuperací tepla i chlazením. O tepelnou pohodu se postará elektrické tepelné čerpadlo s rekuperací doplněné o ohřev vody. ",image:n(466)},scopedSlots:t._u([{key:"button",fn:function(){return[e("NuxtLink",{attrs:{to:{name:"passive"}}},[e("ButtonRounded",{staticClass:"button--green",attrs:{large:"",iconPosition:"right"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconArrow",{attrs:{color:"#fff"}})]},proxy:!0}])},[t._v("\n                            více o pasivních domech\n                            ")])],1)]},proxy:!0}])}),t._v(" "),e("BlockCardNew",{staticClass:"mb-gt",attrs:{flip:"",title:"Vysoký standard výstavby",text:"Při stavbě a vybavení našich domů dbáme na nejvyšší kvalitu zpracování i životnost materiálů. Domy budou navíc doplněny o kryté parkovací stání a uzavřený sklad pro zahradnické potřeby a střeženy moderním zabezpečovacím systémem.",image:n(466)},scopedSlots:t._u([{key:"button",fn:function(){return[e("NuxtLink",{attrs:{to:{name:"standards"}}},[e("ButtonRounded",{staticClass:"button--green",attrs:{large:"",iconPosition:"right"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconArrow",{attrs:{color:"#fff"}})]},proxy:!0}])},[t._v("\n                            více o standardech domů\n                            ")])],1)]},proxy:!0}])}),t._v(" "),e("PageAboutSchedule"),t._v(" "),e("BlockCardNew",{staticClass:"my-gt",attrs:{flip:"",title:"Klidná lokalita v sousedství Plzně",text:"Řadu benefitů nabízí také umístění projektu v klidné části Ejpovic u Plzně. Poznejte její bezkonkurenční dostupnost i krásu blízkého okolí.",image:n(466)},scopedSlots:t._u([{key:"button",fn:function(){return[e("NuxtLink",{attrs:{to:{name:"locality"}}},[e("ButtonRounded",{staticClass:"button--green",attrs:{large:"",iconPosition:"right"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconArrow",{attrs:{color:"#fff"}})]},proxy:!0}])},[t._v("\n                            více o lokalitě\n                            ")])],1)]},proxy:!0}])})],1)],1),t._v(" "),e("BlockFinancing"),t._v(" "),e("BlockFreeSpaces")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlockLandingPoster:n(467).default,BlockCardNew:n(468).default,IconArrow:n(405).default,ButtonRounded:n(406).default,PageAboutSchedule:n(588).default,BlockContainer:n(411).default,BlockFinancing:n(589).default,BlockFreeSpaces:n(425).default})}}]);
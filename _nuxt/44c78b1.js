(window.webpackJsonp=window.webpackJsonp||[]).push([[65,7,10,12,14,15,16,26,35,54],{400:function(t,e,o){var content=o(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("59265ed2",content,!0,{sourceMap:!1})},401:function(t,e,o){"use strict";o.r(e);o(402);var n=o(18),component=Object(n.a)({},(function(){return(0,this._self._c)("div",{staticClass:"button--content"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},402:function(t,e,o){"use strict";o(400)},403:function(t,e,o){var n=o(33)((function(i){return i[1]}));n.push([t.i,".button--content{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""]),n.locals={},t.exports=n},404:function(t,e,o){var content=o(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("7bc65f30",content,!0,{sourceMap:!1})},406:function(t,e,o){"use strict";o.r(e);o(94);var n={emits:["click"],props:{large:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(t){return["left","right"].includes(t)}},noHover:{type:Boolean,default:!1}},computed:{hasIcon:function(){return!!this.$slots.icon}}},l=(o(409),o(18)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"button-rounded",class:{"button-rounded--large":t.large,"button-rounded--outline":t.outline,"button-rounded--nohover":t.noHover},on:{click:function(e){return t.$emit("click")}}},[e("ButtonContent",{staticClass:"uppercase font-medium",class:{"text-md-button":!t.large,"text-lg-button":t.large}},[t.hasIcon&&"left"===t.iconPosition?e("div",{staticClass:"mr-2"},[t._t("icon")],2):t._e(),t._v(" "),t._t("default"),t._v(" "),t.hasIcon&&"right"===t.iconPosition?e("div",{staticClass:"ml-2"},[t._t("icon")],2):t._e()],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonContent:o(401).default})},407:function(t,e,o){var content=o(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("9595b8e6",content,!0,{sourceMap:!1})},408:function(t,e,o){var content=o(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("e991c41c",content,!0,{sourceMap:!1})},409:function(t,e,o){"use strict";o(404)},410:function(t,e,o){var n=o(33)((function(i){return i[1]}));n.push([t.i,'.button-rounded .button--content{height:20px}.button-rounded.button-rounded--large .button--content{height:25px}.button-rounded{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;z-index:0;display:-ms-inline-flexbox;display:inline-flex;height:40px;padding:16px 25px;border-radius:50px}.button-rounded:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50px;background-color:transparent;z-index:-1;transition:all .2s ease-in-out}.button-rounded:hover:not(.button-rounded--nohover):before{-webkit-transform:scaleX(1.07);transform:scaleX(1.07)}.button-rounded.button--white{color:#333}.button-rounded.button--white:before{background-color:#fff}.button-rounded.button--green{color:#fff}.button-rounded.button--green:before{background-color:#4da169}.button-rounded.button--blue{color:#fff}.button-rounded.button--blue:before{background-color:#12465c}.button-rounded--large{height:50px}.button-rounded--outline{padding:7px 25px}.button-rounded--outline:before{outline:1px solid rgba(51,51,51,.2)}.button-rounded--outline:hover:not(.button-rounded--outline--nohover):before{-webkit-transform:scaleX(1);transform:scaleX(1);outline:1px solid #333}',""]),n.locals={},t.exports=n},411:function(t,e,o){"use strict";o.r(e);var n={},l=(o(414),o(18)),component=Object(l.a)(n,(function(){return(0,this._self._c)("div",{staticClass:"block-container"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},412:function(t,e,o){var content=o(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("12403e80",content,!0,{sourceMap:!1})},413:function(t,e,o){"use strict";o.r(e);var n={emits:["click"],props:{dark:{type:Boolean,default:!1}}},l=(o(416),o(18)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"button-leaf",class:{"button-leaf--dark":t.dark},on:{click:function(e){return t.$emit("click")}}},[e("ButtonContent",{staticClass:"font-medium uppercase text-gt-button"},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonContent:o(401).default})},414:function(t,e,o){"use strict";o(407)},415:function(t,e,o){var n=o(33)((function(i){return i[1]}));n.push([t.i,".block-container{position:relative;width:100%;max-width:1680px;margin:0 auto}",""]),n.locals={},t.exports=n},416:function(t,e,o){"use strict";o(408)},417:function(t,e,o){var n=o(33)((function(i){return i[1]}));n.push([t.i,'.button-leaf{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;color:#000;letter-spacing:5px;position:relative;width:300px;height:67px}.button-leaf:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:70px 0;background-color:#b0aa5a;transition:all .3s ease-in-out}@media(min-width:1024px){.button-leaf{width:315px;height:70px}.button-leaf:hover:before{-webkit-transform:scaleX(1.1);transform:scaleX(1.1)}}.button-leaf--dark{color:#fff}.button-leaf--dark:before{background-color:#333}',""]),n.locals={},t.exports=n},418:function(t,e,o){var content=o(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("848296e0",content,!0,{sourceMap:!1})},419:function(t,e,o){t.exports=o.p+"img/Free_spaces.ab4b3cd.png"},420:function(t,e,o){"use strict";o(412)},421:function(t,e,o){var n=o(33)((function(i){return i[1]}));n.push([t.i,'.free-spaces{position:relative}.free-spaces:after{position:absolute;min-width:100vw;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);-o-object-fit:cover;object-fit:cover;z-index:-10;content:"";pointer-events:none;top:inherit;bottom:0;height:50%;background:linear-gradient(0deg,rgba(60,65,35,.9) 0,transparent)}.free-spaces--image{background-color:#3c4123}.free-spaces--image img{width:100%;height:100%;opacity:.7;-o-object-fit:cover;object-fit:cover}.free-spaces--content{position:absolute;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;top:50%}@media(min-width:1024px){.free-spaces--content{top:80%}}',""]),n.locals={},t.exports=n},425:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this._self._c;return t("div",{staticClass:"free-spaces--image block-background"},[t("img",{attrs:{src:o(419)}})])}],l={},r=(o(420),o(18)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"free-spaces poster-height"},[t._m(0),t._v(" "),e("div",{staticClass:"free-spaces--content"},[e("h2",{staticClass:"text-cta-title color-white"},[t._v("26 volných")]),t._v(" "),e("NuxtLink",{attrs:{to:{name:"prices"}}},[e("ButtonLeaf",[t._v("vyberte si")])],1)],1)])}),n,!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonLeaf:o(413).default})},426:function(t,e,o){"use strict";o(418)},427:function(t,e,o){var n=o(33)((function(i){return i[1]}));n.push([t.i,'.button-icon{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;width:40px;height:40px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.button-icon:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50px;background-color:#fff;z-index:-1;transition:all .2s ease-in-out}.button-icon:hover:before{-webkit-transform:scale(1.15);transform:scale(1.15)}',""]),n.locals={},t.exports=n},428:function(t,e,o){"use strict";o.r(e);var n={},l=(o(426),o(18)),component=Object(l.a)(n,(function(){return(0,this._self._c)("div",{staticClass:"button-icon"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},440:function(t,e,o){var content=o(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("564abe63",content,!0,{sourceMap:!1})},481:function(t,e,o){"use strict";o(440)},482:function(t,e,o){var n=o(33)((function(i){return i[1]}));n.push([t.i,".toggle-button-group{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.toggle-button-group--item .button-rounded{transition:color .2s ease-in-out}.toggle-button-group--item .button-rounded:before{transition:all .2s ease-in-out}.toggle-button-group--item:not(.toggle-button-group--item--active) .button-rounded{color:rgba(18,70,92,.7);outline:2px solid rgba(18,70,92,.5);transition:all .2s ease-in-out}.toggle-button-group--item:not(.toggle-button-group--item--active) .button-rounded:before{background-color:transparent}.toggle-button-group--item:not(.toggle-button-group--item--active) .button-rounded:hover{color:#12465c;outline-color:#12465c}",""]),n.locals={},t.exports=n},483:function(t,e,o){var content=o(532);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("28c95f22",content,!0,{sourceMap:!1})},514:function(t,e,o){"use strict";o.r(e);var n={emits:["click"],props:{items:{type:Array,required:!0},selected:{type:String,required:!0}}},l=(o(481),o(18)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"toggle-button-group gap-3"},t._l(t.items,(function(o){return e("div",{key:"tbutton-".concat(o.id),staticClass:"toggle-button-group--item",class:{"toggle-button-group--item--active":o.id===t.selected}},[e("ButtonRounded",{staticClass:"button--blue",attrs:{"no-hover":""},on:{click:function(e){return t.$emit("click",o.id)}}},[t._v("\n                "+t._s(o.label)+"\n            ")])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonRounded:o(406).default})},515:function(t,e,o){"use strict";o.r(e);var n={props:{color:{type:String,default:"#fff"}}},l=o(18),component=Object(l.a)(n,(function(){var t=this._self._c;return t("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20"}},[t("g",{attrs:{id:"icon",transform:"translate(-279.752 -450.429)"}},[t("path",{attrs:{id:"Union_12","data-name":"Union 12",d:"M23105.51-1943.086a.744.744,0,0,1-.742-.743.744.744,0,0,1,.742-.743h11.836a.74.74,0,0,1,.738.743.74.74,0,0,1-.738.743Zm-.516-9.214a.722.722,0,0,1-.244-.54.737.737,0,0,1,.191-.493.76.76,0,0,1,1.051-.052l4.693,4.183v-10.646a.733.733,0,0,1,.742-.725.734.734,0,0,1,.744.725v10.646l4.693-4.183a.758.758,0,0,1,1.049.052.717.717,0,0,1-.051,1.033l-6.436,5.726Z",transform:"translate(-22821.678 2412)",fill:this.color}})])])}),[],!1,null,null,null);e.default=component.exports},531:function(t,e,o){"use strict";o(483)},532:function(t,e,o){var n=o(33)((function(i){return i[1]}));n.push([t.i,'.download-page-row{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding:20px 0;border-bottom:1px solid #dbe3e7}.download-page-row:first-child{border-top:1px solid #dbe3e7}.download-page-row:before{content:"";position:absolute;top:0;left:0;width:100%;height:calc(100% + 2px);background-color:#dbe3e7;opacity:0;z-index:-1;margin-top:-1px;transition:all .2s ease-in-out}.download-page-row .button-icon:before{background-color:transparent;outline:1px solid #4da169}.download-page-row:hover:before{opacity:1;-webkit-transform:scaleX(1.05) scaleY(1.1);transform:scaleX(1.05) scaleY(1.1)}.download-page-row:hover .download-page-row--download>span{text-decoration:underline}.download-page-row:hover .download-page-row--download .button-icon:before{-webkit-transform:scale(1.15);transform:scale(1.15);background-color:#4da169}.download-page-row--download{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}',""]),n.locals={},t.exports=n},579:function(t,e,o){var content=o(617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("444f6ff0",content,!0,{sourceMap:!1})},592:function(t,e,o){"use strict";o.r(e);var n={props:{url:{type:String,required:!0}}},l=(o(531),o(18)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"download-page-row",on:{click:function(e){return t.$emit("click")}}},[t._m(0),t._v(" "),e("div",{staticClass:"download-page-row--download"},[e("span",{staticClass:"text-md-button uppercase mr-5"},[t._v("Stáhnout soubor")]),t._v(" "),e("ButtonIcon",[e("IconDownload",{attrs:{color:"#333"}})],1)],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col"},[e("span",{staticClass:"text-md-ui-desc"},[t._v("Rezervační smlouva")]),t._v(" "),e("span",{staticClass:"text-sm-paragraph"},[t._v("(PDF)")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{IconDownload:o(515).default,ButtonIcon:o(428).default})},616:function(t,e,o){"use strict";o(579)},617:function(t,e,o){var n=o(33)((function(i){return i[1]}));n.push([t.i,".download-page .block-container{max-width:1020px;padding:0 20px}.download-page .toggle-button-group{-ms-flex-wrap:wrap;flex-wrap:wrap}.download-page .toggle-button-group .button-rounded{height:36px;line-height:1}.download-page--headline{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:#fff;background-color:#12465c;padding:130px 20px 60px}@media(min-width:1024px){.download-page--headline{padding:190px 120px 120px}}",""]),n.locals={},t.exports=n},642:function(t,e,o){"use strict";o.r(e);var n={name:"DownloadPage",head:function(){return{title:"Ke stažení | Ejpovice"}},data:function(){return{selectedItem:"All",items:[{id:"All",label:"Všechny"},{id:"1",label:"Smlouvy"},{id:"2",label:"Standardy"},{id:"3",label:"Půdorysy"},{id:"4",label:"Stavba"}]}},mounted:function(){this.$store.commit("SET_NAVBAR_STATIC",!0)},beforeDestroy:function(){this.$store.commit("SET_NAVBAR_STATIC",!1)},methods:{onToggleClick:function(t){this.$scrollTo("#dwlAnchor".concat(t),500,{offset:-100})}}},l=(o(616),o(18)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"download-page"},[t._m(0),t._v(" "),e("div",{staticClass:"download-page--content mt-md mb-gt",attrs:{id:"dwlAnchorAll"}},[e("BlockContainer",[e("ToggleButtonGroup",{attrs:{items:t.items,selected:t.selectedItem},on:{click:t.onToggleClick}}),t._v(" "),e("div",{staticClass:"my-sm",attrs:{id:"dwlAnchor1"}},[e("h3",{staticClass:"text-sm-title mb-5"},[t._v("Smlouvy")]),t._v(" "),e("div",[e("PageDownloadRow",{attrs:{url:""}},[t._v("Rezervační smlouva")]),t._v(" "),e("PageDownloadRow",{attrs:{url:""}},[t._v("Rezervační smlouva")])],1)]),t._v(" "),e("div",{staticClass:"my-sm",attrs:{id:"dwlAnchor2"}},[e("h3",{staticClass:"text-sm-title mb-5"},[t._v("Standardy")]),t._v(" "),e("div",[e("PageDownloadRow",{attrs:{url:""}},[t._v("Rezervační smlouva")]),t._v(" "),e("PageDownloadRow",{attrs:{url:""}},[t._v("Rezervační smlouva")])],1)]),t._v(" "),e("div",{staticClass:"my-sm",attrs:{id:"dwlAnchor3"}},[e("h3",{staticClass:"text-sm-title mb-5"},[t._v("Půdorysy")]),t._v(" "),e("div",[e("PageDownloadRow",{attrs:{url:""}},[t._v("Rezervační smlouva")]),t._v(" "),e("PageDownloadRow",{attrs:{url:""}},[t._v("Rezervační smlouva")])],1)]),t._v(" "),e("div",{staticClass:"my-sm",attrs:{id:"dwlAnchor4"}},[e("h3",{staticClass:"text-sm-title mb-5"},[t._v("Stavba")]),t._v(" "),e("div",[e("PageDownloadRow",{attrs:{url:""}},[t._v("Rezervační smlouva")]),t._v(" "),e("PageDownloadRow",{attrs:{url:""}},[t._v("Rezervační smlouva")])],1)])],1)],1),t._v(" "),e("BlockFreeSpaces")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"download-page--headline"},[t("h1",{staticClass:"text-lg-title"},[this._v("Dokumenty ke stažení")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ToggleButtonGroup:o(514).default,PageDownloadRow:o(592).default,BlockContainer:o(411).default,BlockFreeSpaces:o(425).default})}}]);
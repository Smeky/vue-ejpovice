(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{260:function(e,t,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(75).default)("182e0eb0",content,!0,{sourceMap:!1})},266:function(e,t,n){e.exports=n.p+"img/Ejpovice_0006.fa59160.jpg"},267:function(e,t,n){e.exports=n.p+"img/Ejpovice_0005.15b6426.jpg"},268:function(e,t,n){e.exports=n.p+"img/Ejpovice_0004.2f80fd1.jpg"},269:function(e,t,n){"use strict";n(260)},270:function(e,t,n){var o=n(74)((function(i){return i[1]}));o.push([e.i,'.homescreen-slides{z-index:-1;height:70%;overflow:hidden}.homescreen-slides:before{content:"";position:absolute;bottom:0;left:0;width:100%;height:200px;z-index:1;background:linear-gradient(0deg,#0d3242 0,transparent)}@media(min-width:1024px){.homescreen-slides:before{background:none}.homescreen-slides:after{content:"";pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;background-color:rgba(13,50,66,.4)}.homescreen-slides{height:100%}}.homescreen-slides>img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:left;object-position:left}@keyframes fadein-effect{0%{opacity:0}to{opacity:1}}@keyframes zoomout-effect{0%{transform:scale(1.1)}to{transform:scale(1)}}.homescreen-slides .fade-effect-enter-active{animation:zoomout-effect 4s linear,fadein-effect .3s linear}.homescreen-slides .fade-effect-leave-active{animation:fadein-effect .3s linear}',""]),o.locals={},e.exports=o},271:function(e,t,n){"use strict";n.r(t);n(76);var o={data:function(){return{slideIndex:-1,images:[n(266),n(267),n(268)]}},mounted:function(){var e=this;this.interval=setInterval((function(){e.slideIndex=(e.slideIndex+1)%e.images.length}),4e3),this.slideIndex=0},unmounted:function(){clearInterval(this.interval)}},c=(n(269),n(42)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"homescreen-slides w-full h-full"},[t("transition",{attrs:{name:"fade-effect"}},[t("img",{key:"slide-".concat(e.slideIndex),staticClass:"absolute top-0 left-0",attrs:{src:e.images[e.slideIndex]}})])],1)}),[],!1,null,null,null);t.default=component.exports}}]);
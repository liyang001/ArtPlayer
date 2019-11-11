/*!
 * artplayer-plugin-danmuku.js v3.1.18
 * Github: https://github.com/zhw2590582/ArtPlayer#readme
 * (c) 2017-2019 Harvey Zack
 * Released under the MIT License.
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).artplayerPluginDanmuku=e()}(this,function(){"use strict";var a=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t};var r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var t=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t},o={"zh-cn":{"Danmu opacity":"弹幕透明度","Danmu speed":"弹幕速度","Danmu size":"弹幕大小","Danmu text cannot be empty":"弹幕文本不能为空","The length of the danmu does not exceed":"弹幕文本字数不能超过","Danmu speed synchronous playback multiple":"弹幕速度同步播放倍数"},"zh-tw":{"Danmu opacity":"彈幕透明度","Danmu speed":"彈幕速度","Danmu size":"弹幕大小","Danmu text cannot be empty":"彈幕文本不能為空","The length of the danmu does not exceed":"彈幕文本字數不能超過","Danmu speed synchronous playback multiple":"彈幕速度同步播放倍數"}};function u(r){var t=r.i18n,i=r.events.proxy;return{name:"danmuku-opacity",index:10,html:'\n            <div class="art-setting-header">\n                '.concat(t.get("Danmu opacity"),': <span class="art-value">100</span>%\n            </div>\n            <div class="art-setting-range">\n                <input type="range" value="1" min="0.1" max="1" step="0.1">\n            </div>\n        '),mounted:function(t){var e=t.querySelector("input[type=range]"),n=t.querySelector(".art-value");i(e,"change",function(){var t=e.value;n.innerText=100*Number(t),r.plugins.artplayerPluginDanmuku.config({opacity:Number(t)})}),r.on("artplayerPluginDanmuku:config",function(t){e.value!==t.opacity&&(e.value=t.opacity,n.innerText=100*t.opacity)})}}}function s(r){var t=r.i18n,i=r.events.proxy;return{name:"danmuku-size",index:11,html:'\n            <div class="art-setting-header">\n                '.concat(t.get("Danmu size"),': <span class="art-value">25</span>px\n            </div>\n            <div class="art-setting-range">\n                <input type="range" value="25" min="14" max="30" step="1">\n            </div>\n        '),mounted:function(t){var e=t.querySelector("input[type=range]"),n=t.querySelector(".art-value");i(e,"change",function(){var t=e.value;n.innerText=t,r.plugins.artplayerPluginDanmuku.config({fontSize:Number(t)})}),r.on("artplayerPluginDanmuku:config",function(t){e.value!==t.fontSize&&(e.value=t.fontSize,n.innerText=t.fontSize)})}}}function l(r){var t=r.i18n,i=r.events.proxy;return{name:"danmuku-speed",index:12,html:'\n            <div class="art-setting-header">\n                '.concat(t.get("Danmu speed"),': <span class="art-value">5</span>s\n            </div>\n            <div class="art-setting-range">\n                <input type="range" value="5" min="1" max="10" step="1">\n            </div>\n        '),mounted:function(t){var e=t.querySelector("input[type=range]"),n=t.querySelector(".art-value");i(e,"change",function(){var t=e.value;n.innerText=t,r.plugins.artplayerPluginDanmuku.config({speed:Number(t)})}),r.on("artplayerPluginDanmuku:config",function(t){e.value!==t.speed&&(e.value=t.speed,n.innerText=t.speed)})}}}function c(n){var t=n.i18n,r=n.events.proxy;return{name:"danmuku-synchronousPlayback",index:13,html:'\n            <label class="art-setting-checkbox">\n                <input type="checkbox"/>'.concat(t.get("Danmu speed synchronous playback multiple"),"\n            </label>\n        "),mounted:function(t){var e=t.querySelector("input[type=checkbox]");r(e,"change",function(){n.plugins.artplayerPluginDanmuku.config({synchronousPlayback:e.checked})}),n.on("artplayerPluginDanmuku:config",function(t){e.checked!==t.synchronousPlayback&&(e.checked=t.synchronousPlayback)})}}}function n(t,e,n){return t.filter(function(t){return t.$state===e}).map(n)}function p(t,e){var n=t.getBoundingClientRect();return e?n[e]:n}var f=function(t){if(Array.isArray(t))return t};var m=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n}};var h=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")};var x=function(t,e){return f(t)||m(t,e)||h()};function d(t){return fetch(t).then(function(t){return t.text()}).then(function(t){return function(t){if("string"!=typeof t)return[];var e=t.match(/<d([\S ]*?>[\S ]*?)<\/d>/gi);return e.length?e.map(function(t){var e=t.match(/<d p="(.+)">(.+)<\/d>/),n=x(e,3),r=n[1],i=n[2],a=r.split(",");return 8===a.length&&i.trim()?{text:i,time:Number(a[0]),mode:function(t){switch(t){case 1:case 2:case 3:return"scroll";case 4:case 5:return"static";default:return null}}(Number(a[1])),fontSize:Number(a[2]),color:"#".concat(Number(a[3]).toString(16)),timestamp:Number(a[4]),pool:Number(a[5]),userID:a[6],rowID:Number(a[7])}:null}):[]}(t)})}function y(t,e){var n=x(t.option.margin,2),r=n[0],i=n[1],o=p(t.art.template.$player),a=t.queue.filter(function(t){return t.mode===e.mode&&"emit"===t.$state&&t.$ref&&t.$ref.style.fontSize===e.$ref.style.fontSize&&parseFloat(t.$ref.style.top)<=o.height-i}).map(function(t){var e=p(t.$ref),n=e.width,r=e.height,i=e.top-o.top,a=e.left-o.left;return{top:i,left:a,height:r,width:n,right:o.width-a-n}}).sort(function(t,e){return t.top-e.top});return 0===a.length?r:(a.unshift({top:0,left:0,right:0,height:r,width:o.width}),a.push({top:o.height-i,left:0,right:0,height:i,width:o.width}),function(t){for(var e=0,n={},r=0;r<t.length;r+=1){var i=t[r];n[i.top]?n[i.top].push(i):n[i.top]=[i]}for(var a=Object.keys(n),o=0,u=1;u<t.length;u+=1){var s=t[u],l=t[u-1],c=l.top+l.height,p=s.top-c;o<p&&(e=c,o=p)}if(0===e)for(var f=0,m=0;m<a.length;m+=1){for(var h=t[0].width,d=a[m],y=n[d],g=0;g<y.length;g+=1){var v=y[g];v.right<h&&(h=v.right)}if(f<h)f=h,e=x(y,1)[0].top}if(0===e){var b=a.filter(function(t,e){return 0!==e&&e!==a.length-1}).sort(function(t,e){return n[t].length-n[e].length});e=x(b,1)[0]}return e}(a))}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var v=function(){function i(e,t){var n=this;r(this,i),e.i18n.update(o),e.setting.add(u),e.setting.add(s),e.setting.add(l),e.setting.add(c),this.art=e,this.queue=[],this.option={},this.config(t),this.isStop=!1,this.animationFrameTimer=null,this.$danmuku=e.template.$danmuku,e.on("video:play",this.start.bind(this)),e.on("video:playing",this.start.bind(this)),e.on("video:pause",this.stop.bind(this)),e.on("video:waiting",this.stop.bind(this)),e.on("resize",this.resize.bind(this)),e.on("destroy",this.stop.bind(this)),"function"==typeof this.option.danmuku?this.option.danmuku().then(function(t){t.forEach(n.emit.bind(n)),e.emit("artplayerPluginDanmuku:loaded")}):"string"==typeof this.option.danmuku?d(this.option.danmuku).then(function(t){t.forEach(n.emit.bind(n)),e.emit("artplayerPluginDanmuku:loaded")}):(this.option.danmuku.forEach(this.emit.bind(this)),e.emit("artplayerPluginDanmuku:loaded"))}return t(i,[{key:"config",value:function(t){var e=this.art.constructor,n=e.utils.clamp,r=e.validator;this.option=Object.assign({},i.option,this.option,t),r(this.option,i.scheme),this.option.speed=n(this.option.speed,1,10),this.option.maxlength=n(this.option.maxlength,10,100),this.option.margin[0]=n(this.option.margin[0],0,100),this.option.margin[1]=n(this.option.margin[1],0,100),this.option.opacity=n(this.option.opacity,0,1),this.option.fontSize=n(this.option.fontSize,12,30),this.art.emit("artplayerPluginDanmuku:config",this.option)}},{key:"continue",value:function(){n(this.queue,"stop",function(t){switch(t.$state="emit",t.$lastStartTime=Date.now(),t.mode){case"scroll":t.$ref.style.transform="translateX(".concat(-t.$restWidth,"px) translateY(0px) translateZ(0px)"),t.$ref.style.transition="transform ".concat(t.$restTime,"s linear 0s")}})}},{key:"suspend",value:function(){var i=this.art.template.$player;n(this.queue,"emit",function(t){switch(t.$state="stop",t.mode){case"scroll":var e=p(i),n=e.left,r=e.width-(p(t.$ref).left-n)+5;t.$ref.style.transform="translateX(".concat(-r,"px) translateY(0px) translateZ(0px)"),t.$ref.style.transition="transform 0s linear 0s"}})}},{key:"resize",value:function(){var e=p(this.art.template.$player,"width");n(this.queue,"wait",function(t){t.$ref&&(t.$ref.style.border="none",t.$ref.style.left="".concat(e,"px"),t.$ref.style.marginLeft="0px",t.$ref.style.transform="translateX(0px) translateY(0px) translateZ(0px)",t.$ref.style.transition="transform 0s linear 0s")})}},{key:"update",value:function(){var i=this,t=this.art,a=t.player,e=t.template.$player;this.animationFrameTimer=window.requestAnimationFrame(function(){if(a.playing){var r=p(e,"width");n(i.queue,"emit",function(t){t.$restTime-=(Date.now()-t.$lastStartTime)/1e3,t.$lastStartTime=Date.now(),t.$restTime<=0&&(t.$state="wait",t.$ref.style.border="none",t.$ref.style.left="".concat(r,"px"),t.$ref.style.marginLeft="0px",t.$ref.style.transform="translateX(0px) translateY(0px) translateZ(0px)",t.$ref.style.transition="transform 0s linear 0s")}),i.queue.filter(function(t){return a.currentTime+.1>=t.time&&t.time>=a.currentTime-.1&&"wait"===t.$state}).forEach(function(t){t.$ref=function(t){var e=t.find(function(t){return t.$ref&&"wait"===t.$state});if(e){var n=e.$ref;return e.$ref=null,n}var r=document.createElement("div");return r.style.cssText='\n        user-select: none;\n        position: absolute;\n        white-space: pre;\n        pointer-events: none;\n        perspective: 500px;\n        display: inline-block;\n        will-change: transform;\n        font-family: SimHei, "Microsoft JhengHei", Arial, Helvetica, sans-serif;\n        font-weight: normal;\n        line-height: 1.125;\n        text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px;\n    ',r}(i.queue),i.$danmuku.appendChild(t.$ref),t.$ref.style.opacity=i.option.opacity,t.$ref.style.fontSize="".concat(i.option.fontSize,"px"),t.$ref.innerText=t.text,t.$ref.style.color=t.color,t.$ref.style.border=t.border?"1px solid ".concat(t.color):"none",t.$restTime=i.option.synchronousPlayback&&a.playbackRate?i.option.speed/Number(a.playbackRate):i.option.speed,t.$lastStartTime=Date.now();var e=p(t.$ref,"width"),n=y(i,t);switch(t.$state="emit",t.mode){case"scroll":t.$restWidth=r+e+5,t.$ref.style.left="".concat(r,"px"),t.$ref.style.top="".concat(n,"px"),t.$ref.style.transform="translateX(".concat(-t.$restWidth,"px) translateY(0px) translateZ(0px)"),t.$ref.style.transition="transform ".concat(t.$restTime,"s linear 0s");break;case"static":t.$ref.style.top="".concat(n,"px"),t.$ref.style.left="50%",t.$ref.style.marginLeft="-".concat(e/2,"px")}})}i.isStop||i.update()})}},{key:"stop",value:function(){this.isStop=!0,this.suspend(),window.cancelAnimationFrame(this.animationFrameTimer),this.art.emit("artplayerPluginDanmuku:stop")}},{key:"start",value:function(){this.isStop=!1,this.continue(),this.update(),this.art.emit("artplayerPluginDanmuku:start")}},{key:"show",value:function(){this.$danmuku.style="block",this.art.emit("artplayerPluginDanmuku:show")}},{key:"hide",value:function(){this.$danmuku.style="none",this.art.emit("artplayerPluginDanmuku:hide")}},{key:"emit",value:function(t){var e=this.art,n=e.notice,r=e.player,i=e.i18n;t.text.trim()?t.text.length>this.option.maxlength?n.show("".concat(i.get("The length of the danmu does not exceed")," ").concat(this.option.maxlength)):("number"!=typeof t.time&&(t.time=r.currentTime),this.queue.push(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({mode:"scroll"},t,{$state:"wait",$ref:null,$restTime:0,$lastStartTime:0,$restWidth:0}))):n.show(i.get("Danmu text cannot be empty"))}}],[{key:"option",get:function(){return{danmuku:[],speed:5,maxlength:50,margin:[10,100],opacity:1,fontSize:25,synchronousPlayback:!1}}},{key:"scheme",get:function(){return{danmuku:"array|function|string",speed:"number",maxlength:"number",margin:"array",opacity:"number",fontSize:"number",synchronousPlayback:"boolean"}}}]),i}();return function(n){return function(t){var e=new v(t,n);return{name:"artplayerPluginDanmuku",emit:e.emit.bind(e),config:e.config.bind(e),hide:e.hide.bind(e),show:e.show.bind(e)}}}});

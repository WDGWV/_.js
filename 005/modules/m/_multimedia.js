//# sourceMappingURL=_multimedia.js.map
if(window._){var players={},video="video",audio="audio",MMActive="";_.fn.multimedia=function(b){for(var e=this.length;e--;){var a={mp3:"audio",ogg:"ERROR",wav:"audio",mp4:"video",webm:"video"},f={mp3:"audio/mpeg",ogg:"audio/ogg",wav:"audio/wav",webm:"audio/webm"},c={autoplay:!0,controls:!1,visible:!1,default:!0,type:"ERROR"};if("object"==typeof b){if(this.isUndefined(b.file)){console.error("Need a file!");console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_multimedia");break}else"undefined"!=
typeof b.options?(c.type="undefined"!=typeof b.options.type?b.options.type:a[b.file.substr(b.file.indexOf(".")+1)],"undefined"!=typeof b.options.autoplay&&(c.autoplay=b.options.autoplay),"undefined"!=typeof b.options.controls&&(c.controls=b.options.controls),"undefined"!=typeof b.options.visible&&(c.visible=b.options.visible),c["default"]=!1):c.type=a[b.file.substr(b.file.indexOf(".")+1)],"ERROR"==c.type&&(console.error("File extension is .ogg!, we can't detect if it is a audio or a video file. sorry."),
console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_multimedia"));if(!this.isUndefined(b.before))if("object"==typeof b.before)console.error("Not yet supported :("),console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_multimedia");else{a=document.createElement(c.type);c.controls&&a.setAttribute("controls","yes");a.setAttribute("preload","auto");a.setAttribute("id","MMFirst");a.autobuffer=!0;var d=document.createElement("source");d.type=f[b.before.substr(b.before.indexOf(".")+
1)];d.src=b.before;a.appendChild(d);a.load();c.autoplay&&a.play();window.MMActive=a;a.addEventListener("ended",function(){this.pause();document.getElementById("MMMain").play();window.MMActive=document.getElementById("MMMain")});this[e].appendChild(a);window.players=this.merge(window.players,{before:{file:b.before,html:a,options:c}})}a=document.createElement(c.type);c.controls&&a.setAttribute("controls","yes");a.setAttribute("preload","auto");a.setAttribute("id","MMMain");this.isUndefined(b.before)&&
(window.MMActive=a);c.autoplay&&this.isUndefined(b.before)&&a.play();a.autobuffer=!0;d=document.createElement("source");d.type=f[b.file.substr(b.file.indexOf(".")+1)];d.src=b.file;a.appendChild(d);a.load();this.isUndefined(b.after)?a.addEventListener("ended",function(){this.pause()}):a.addEventListener("ended",function(){this.pause();document.getElementById("MMAfter").play();window.MMActive=document.getElementById("MMAfter")});this[e].appendChild(a);window.players=this.merge(window.players,{main:{file:b.file,
html:a,options:c}});this.isUndefined(b.after)||("object"==typeof b.after?(console.error("Not yet supported :("),console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_multimedia")):(a=document.createElement("audio"),c.controls&&a.setAttribute("controls","yes"),a.setAttribute("preload","auto"),a.setAttribute("id","MMAfter"),a.autobuffer=!0,d=document.createElement("source"),d.type=f[b.after.substr(b.after.indexOf(".")+1)],d.src=b.after,a.appendChild(d),a.load(),a.addEventListener("ended",
function(){this.pause()}),this[e].appendChild(a),window.players=this.merge(window.players,{after:{file:b.after,html:a,options:c}})));console.log(window.players)}else console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_multimedia")}};_.fn.mmPlayer_start=function(b){window.MMActive.play()}}else alert("MISSING SOMETHING!");
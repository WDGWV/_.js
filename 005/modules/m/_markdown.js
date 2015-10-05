//# sourceMappingURL=_markdown.js.map
//# sourceMappingURL=_markdown.js.map
window._?(_.fn.md_str_repeat=function(a,d){return Array(d+1).join(a)},_.fn.markdown=function(){var a=document.createElement("script");a.type="text/javascript";a.src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js";document.head.appendChild(a);for(var a="",d=!1,e=!1,c=this[0].innerHTML.split("\n"),b=0;b<c.length;b++)if(c[b].match(/\*\*(.*)\*\*/g)&&(d||(c[b]=c[b].replace(/\*\*(.*)\*\*/g,"<b>$1</b>"))),c[b].match(/\*(.*)\*/g)&&(d||(c[b]=c[b].replace(/\*(.*)\*/g,"<i>$1</i>"))),
c[b].match(/`(.*)`/g)&&(d||(c[b]=c[b].replace(/`(.*)`/g,"<style>pre.prettyprint{border:0 !important;}</style><div style='display:inline-block;word-break:break-all;word-wrap:break-word;white-space:pre;white-space:pre-wrap;background-color:#f5f5f5;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.15);-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;'><pre class=\"prettyprint\">$1</pre></div>"))),c[b].match(/\(\!\[(.*)\]\((.*)\)\)/g)&&(d||(c[b]=c[b].replace(/\(\!\[(.*)\]\((.*)\)\)/g,
"<img src='$2' alt='$1'>"))),c[b].match(/\[(.*)\]\((.*)\)/g)&&(d||(c[b]=c[b].replace(/\[(.*)\]\((.*)\)/g,"<a href='$2'>$1</a>"))),c[b].match(/(?![^<]*>|[^<>]*<\/(?!(?:p|pre)>))((https?:)\/\/[a-z0-9&#=.\/\-?_]+)/gi)&&(d||(c[b]=c[b].replace(/(?![^<]*>|[^<>]*<\/(?!(?:p|pre)>))((https?:)\/\/[a-z0-9&#=.\/\-?_]+)/gi,"<a href='$1'>$1</a>"))),this.isEmpty(c[b]))this.isEmpty(c[b-1])&&(e&&(a+="</ul>",e=!1),d&&(a+="</pre></div>",d=!1)),a+="<br />";else if("#####"==c[b].substr(0,5))e&&(a+="</ul>",e=!1),d&&(a+=
"</pre></div>",d=!1),a+="<h5>"+c[b].substr(5,c[b].length)+"</h5>";else if("####"==c[b].substr(0,4))e&&(a+="</ul>",e=!1),d&&(a+="</pre></div>",d=!1),a+="<h4>"+c[b].substr(4,c[b].length)+"</h4>";else if("###"==c[b].substr(0,3))e&&(a+="</ul>",e=!1),d&&(a+="</pre></div>",d=!1),a+="<h3>"+c[b].substr(3,c[b].length)+"</h3>";else if("##"==c[b].substr(0,2))e&&(a+="</ul>",e=!1),d&&(a+="</pre></div>",d=!1),a+="<h2>"+c[b].substr(2,c[b].length)+"</h2>";else if("#"==c[b].substr(0,1))e&&(a+="</ul>",e=!1),d&&(a+=
"</pre></div>",d=!1),a+="<h1>"+c[b].substr(1,c[b].length)+"</h1>";else if(c[b+1]==this.md_str_repeat("=",c[b].length))e&&(a+="</ul>",e=!1),d&&(a+="</pre></div>",d=!1),a+="<h1>"+c[b]+"</h1>",c[b+1]="";else if(c[b+1]==this.md_str_repeat("-",c[b].length))e&&(a+="</ul>",e=!1),d&&(a+="</pre></div>",d=!1),a+="<h2>"+c[b]+"</h2>",c[b+1]="";else if("* "==c[b].substr(0,2))e||(a+="<ul>",e=!0),a+="<li>"+c[b].substr(2,c[b].length)+"</li>";else if("    "==c[b].substr(0,4))d||(a+="<style>pre.prettyprint{border:0 !important;}</style><div style='display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:20px;word-break:break-all;word-wrap:break-word;white-space:pre;white-space:pre-wrap;background-color:#f5f5f5;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.15);-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;'><pre class=\"prettyprint\">",
d=!0,console.log("["+b+"] Code Opened!!!")),a+="\r\n"+c[b].substr(4,c[b].length);else if("---"==c[b].substr(0,3)||"***"==c[b].substr(0,3)||"___"==c[b].substr(0,3))e&&(a+="</ul>",e=!1),d&&(a+="</pre></div>",d=!1),a+="<hr />";else if("- []"==c[b].substr(0,4))e&&(a+="</ul>",e=!1),d&&(a+="</pre></div>",d=!1),a+="<br />",a+="<input type='checkbox' disabled=''>"+c[b].substr(4,c[b].length);else if("- [ ]"==c[b].substr(0,5))e&&(a+="</ul>",e=!1),d&&(a+="</pre></div>",d=!1),a+="<br />",a+="<input type='checkbox' disabled=''>"+
c[b].substr(5,c[b].length);else if(c[b].match(/\[c\=(.*)\](.*)\[\/c\]/g)){e&&(a+="</ul>",e=!1);d&&(a+="</pre></div>",d=!1);var f=String(c[b]).split("="),f=String(f[1]).split("]")[0],g=String(c[b]).split("]"),g=g[1].split("[")[0],a=a+("<font color='"+f+"'>"+g+"</font>")}else"- [x]"==c[b].substr(0,5)?(e&&(a+="</ul>",e=!1),d&&(a+="</pre></div>",d=!1),a+="<br />",a+="<input type='checkbox' checked='' disabled=''>"+c[b].substr(5,c[b].length)):(e&&(a+="</ul>",e=!1),d&&(a+="</pre></div>",d=!1),a+=c[b]);
this[0].innerHTML=a}):alert("MISSING SOMETHING!");

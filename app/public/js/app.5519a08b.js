(function(t){function e(e){for(var s,o,n=e[0],c=e[1],l=e[2],g=0,u=[];g<n.length;g++)o=n[g],a[o]&&u.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);h&&h(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],s=!0,n=1;n<i.length;n++){var c=i[n];0!==a[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},a={app:0},r=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var h=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"004e":function(t,e,i){"use strict";var s=i("cb72"),a=i.n(s);a.a},"106f":function(t,e,i){},3107:function(t,e,i){t.exports=i.p+"img/robot1.1e381074.png"},"33f0":function(t,e,i){t.exports=i.p+"img/robot0.54d555c8.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t.page.length?i("Progress",{attrs:{percent:parseInt(t.index/t.page.length*100),status:"active"}}):t._e(),t.page.length&&!t.showResult?i("div",[i("div",{staticClass:"title"},[t._v(t._s(t.page[t.index].title))]),t._l(t.page[t.index].list,function(e,s){return i("div",{key:e.id},[i("Question",{attrs:{question:e,last:s==t.page[t.index].list.length-1},on:{addAnswer:t.addAnswer}})],1)}),i("Button",{attrs:{type:"primary",size:"large"},on:{click:t.next}},[t.last?t._e():i("span",[t._v("Next")]),t.last?i("span",[t._v("Submit")]):t._e()])],2):t._e(),t.showResult?i("div",{staticClass:"result"},[t._v("\n    This is your MTurk code: "+t._s(t.answer.userID)+". Thanks :)\n  ")]):t._e(),0==t.page.length?i("Spin",{staticClass:"spin",attrs:{size:"large"}}):t._e(),i("BackTop")],1)},r=[],o=(i("f751"),i("6b54"),i("28a5"),i("ac6a"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"question",class:{noBoderBottom:t.last||0==t.question.q.type||4==t.question.q.type,desc:0==t.question.q.type}},[i("div",{staticClass:"topic"},[t._v(t._s(t.question.q.title))]),1==t.question.q.type?i("div",{staticClass:"options"},t._l(t.question.q.choices,function(e,s){return i("div",{staticClass:"survey-radio",class:{actived:s==t.active},on:{click:function(e){t.setActive(s)}}},[t._v(t._s(e))])})):t._e(),2==t.question.q.type?i("div",{staticClass:"options"},t._l(t.question.q.choices,function(e,s){return i("div",[i("div",{staticClass:"sub-title"},[t._v(t._s(e))]),i("Slider",{on:{"on-change":function(e){t.slideChange(s)}},model:{value:t.slide[s],callback:function(e){t.$set(t.slide,s,e)},expression:"slide[index]"}})],1)})):t._e(),3==t.question.q.type?i("div",{staticClass:"options"},[i("Input",{attrs:{type:"textarea",rows:3,placeholder:"Enter something..."},on:{"on-change":t.input},model:{value:t.question.answer,callback:function(e){t.$set(t.question,"answer",e)},expression:"question.answer"}})],1):t._e(),4==t.question.q.type?i("div",{staticClass:"options"},["prob1"==t.question.q.choices?i("div",[i("Table",{attrs:{border:"",columns:t.prob1.columns,data:t.prob1.data}})],1):t._e(),"prob2"==t.question.q.choices?i("div",[i("Table",{attrs:{border:"",columns:t.prob2.columns,data:t.prob2.data}})],1):t._e(),"general"==t.question.q.images||t.question.q.choices&&"string"!==typeof t.question.q.choices?i("div",[i("Canvas",{attrs:{data:t.question.q,id:t.question.id,type:t.question.q.choices&&t.question.q.choices[0]}})],1):t._e()]):t._e()])}),n=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"canvas-box"},[t.table.show?s("Col",{attrs:{span:"24"}},[s("table",[s("tr",[s("th",[t._v("Barriers")]),s("th",[t._v("Difficulty Levels")])]),s("tr",[s("td",[s("span",{staticClass:"diff"},[t._v("Ⅰ")]),s("span",{staticClass:"level level1"})]),s("td",[t._v("Easy")])]),s("tr",[s("td",[s("span",{staticClass:"diff"},[t._v("Ⅱ")]),s("span",{staticClass:"level level2"})]),s("td",[t._v("Miedium")])]),s("tr",[s("td",[s("span",{staticClass:"diff"},[t._v("Ⅲ")]),s("span",{staticClass:"level level3"},[s("em",{staticClass:"line"})])]),s("td",[t._v("Difficult")])]),s("tr",[s("td",[s("em",{staticClass:"circle"},[t._v("n")])]),s("td",[t._v("Number of people trapped here")])])])]):t._e(),"c"==t.type?s("Col",{staticClass:"roomName",attrs:{span:"24"}},[s("span",{staticClass:"room1"},[t._v("room1")]),s("span",{staticClass:"room2"},[t._v("room2")])]):t._e(),t.repair.show?t._e():s("Col",{staticClass:"canvas-container",class:{hasRoom1:"c"==t.type,room1r:"room1r"==t.type},attrs:{span:"24"}},[s("div",{staticClass:"canvas",attrs:{id:"canvas"+t.id}})]),"general"!==t.type&&"room1r"!==t.type&&"repair"!==t.type?s("Col",{staticClass:"robot",class:{hasRoom1:"c"==t.type},attrs:{span:"24"}},[t.robot?t._e():s("img",{attrs:{src:i("33f0")}}),t.robot?s("img",{attrs:{src:i("3107")}}):t._e()]):t._e(),t.repair.show?s("Col",{staticClass:"repair",attrs:{span:"24"}},[0==t.repair.index?s("img",{attrs:{src:i("afde")}}):t._e(),1==t.repair.index?s("img",{attrs:{src:i("7e8e")}}):t._e()]):t._e()],1)},l=[],h={name:"Canvas",props:{data:Object,id:String,type:String},data:function(){var t={bgColor:["white","yellow","red"],attr:{font:'28px "宋体"',textAlign:"center",lineBreak:"normal"},choose:["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACV0lEQVRoQ+2XvYvUQBjGn3edzd8gx2lnpb1YWIitoo2ix4FybibYia1gZ22pNzN7iIUfrIIoWNkKwoGdjYUgethdpRa3ybwSZSVKPnd35hLIQmAhk3ee3/PMO8kQOv6jjutHD7DfCfYJdD6BOIrWLfMtAlbI2mvCmGc+oRZaQnEYhkykZoIZ+BIodbgTAP+L/y2a+etQ60OtB8gVD4CsXRPGPG41QIHzTEAktNY+xadzNeqBQvHMV4UxD32LbwTQRvG1AdoqvhZAyZpfE1o/2Y9lk52ztAcKxCcErLdBfGkC0zB8AaJzHhz+BuB9ehHR9oHd3dc0mSR15y1MYCol1y2y1HHM2yJJLtHW1qc6ddsH8Ef1d7L2hjBmXAVRBvASwNmqAi7vM/P1QOv7ZXPM08TpW3dpOxCPRqsJ0XFLdD7dHP4Ry/xDWHuUxuPPRRCVb2Kf2+hUylMAHgE4+Fcw81uh9UkCcnuyEiAt5BUiik6D+U3Wcbb2RGDMu7wUagGUQjj4DtqT8gEBV2aCGbgZKHV3IQCfEHEYnmGiVxnBk6FSFxcG8AXBGxsrsRA7mT4oPCjVXkJZ+sKeGAwui83Np4turQxQLKXN1hkqlat1LoDCJICdoVKrnQDIhVjSmdhLAjOXYylHDNwD8JOAkVBq0pkEFhVa9LzXBFxA9AAuXG1Ss0+giVsuxvYJuHC1Sc0+gSZuuRjb+QRSU/ak/EjAkfQ/M38ItD62lPOAC8fzasZSXrDAHQDTAfNtofXzTgHUNWru80DdCVyP6wFcO1xVv0+gyiHX938B5Z5lQFp6XMYAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACDklEQVRYR+2WsWsUQRTGv29ud8UUQhBtxSKNNjY2Bs5DUBREUDhFTlKYzF3wr4iVWNkmu5tLp4LRJoWFRf4AtRAEtQkY2OJMYyk3O/sk5yKau+zurQtncVPOvpnvx/fmvbfEhBcnrI8pQGUOSLN5NJ6d3YKIOCL3GIa9IumtDMB0Olch8npfVIAdV6k6V1ejPIjKAARg3G5vAriVQuy61ta5vv41C6IygIFoo+HEc3MvQd5IRSPH2vksiEoBDoWI4zq73Z1RTlQOMBJCpOdYe5Hd7peDELkAsrBwPPa8MwBqeQ/qr+/G1MR1H5E8n+5/d4ArDIK3f8YdCiCt1jEzM/OE5P2xhDOCRaTvBcGRXABZXDxllNomeboq8UFqkqTvhWE2gKysKBNF70meG4iL9IR8TPITrP1RGMiYGlz3Icj53ylQ6jLX1t5lOhB3OndE5Hlayx9dYy5xY2OvsPCochznERqtt0BeB5A4wFn6/ud/EgciZ5wyNFp/A3lCgA+e7/9KQ8F1sBEJkNsNh6rAaJ2AJEQ23SBoFtQehBmtX4G8maZv11XqQt48GAZotyUVfeH6/u2iAGZpqQGltlPx8sPIlASQ5eWTxto3JPecJGmVHsdlAYo6lduKpwBTB/4HBywAtT8PvCC4W/Z1Fz031Ij6Wj8lcI0iD5wwfFb0orJxuX9EZS8uem4KMHEHfgKeC/ghX1YCPAAAAABJRU5ErkJggg=="],result:["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACzklEQVR4Xu2ZMWjUYBTH/+9aOwlFpeTEawQLTm0OVwdXwcVJcNauiuAkdJO6KTi5qLvOgo6ODi4JKuiYWriAdNKpXp/kakq8610uX773Esx3493le+//+/7v5X0JoeUfarl+OADOAS0n4Eqg5QZwTdCVgCuBlhNwJdByA5jfBXb7K5eG6NwhgHk4fOZ/+vFRE6at+EYlEG+sXCHqvAfR4fXMzIRNP0xeakCI+94tYjzPxyfgci9KPpSNbwRgJ+i+A+HqP8GUIEyIz5JgvF2NBtd0APS7rwHcmAgmDGGq+NSE4Fd+mNxUARAH3joBIYg6WhBmiQd4uPibgrOfB19UAKRBZiZk2QmSsYx6QEZZMjGtGJUASDtBA3BlAFIQNMSnuVsBYBuClnirAGxB0BRvHUBVCNriRQCYQqhDvBiAshDqEi8KYF4IoyTyB5v8KGd5oDpuSrR2F5g2gs6c35nT2xAfneqUxYs7oHCaYwb+nqjrOFmqATi2HBogXhVABgGMF6O6q3nnM8eJ94C8tQu6PfhwS25rPVlSdUCR+CNHKHT+/KaoOGBu8VlmihDEARQOOWk3qLEfiAIoFE/Y/G8HoXnEZ82uzH+nDVym34s4wESQyTWmokWbYBUhVa41hWHVATYE2FijDAxrAGwmbnOtIhhWAEgkLLGmyHFYMlHJta2cBTQSlI5hXALSiZU4RFV6NW8EYKd/5hx4MW7My1HmA8L++V60972o6Y3/bgYg8J6C6O5EMOFDzMzHa8ATPxzcVwEQB94jInpQx2OsaRCYeduPki0VAHsXTi3/PLn0lYi8UUDhnR8XNQ6BmZMlYK0bJb9UAKRBdtdPrx4snNgC6CKBH/fC5E3Z4FX+H29416lD9wD+Rrz/0KT+VZ8IVRErea1RE5RMSHttB0CbeNPiOQc0bUe083EO0CbetHjOAU3bEe18nAO0iTctXusd8AezF5pfILRwLQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADaElEQVR4Xu2YTWsTURSGnztJ1ILWiqJgQVHEgoJtmkxCQVq1rlTErbgQf4DgWt3qXtcuxJWgiIWqWCi1sbROMv0QBP0VUoub0jZXLp1KaCeZycxkOpNMlsn9ep/znnNPrqDDP6LD9ZMASBzQ4QSSFOhwAyRFMEmBJAU6nECSAh1ugOQWSFIgSYE2JKCXGahK8vNFXjjJa7sUyBr0p2EKwSHgQaXAs0YQ2gqAJb6EoHtLtJQ8NYs8qgehbQDkTAZFlUkBPdvFSskTs8hjOwhtAcAu8v/FSn5LjRFT50dbAsga5NMwWWt7t+LVuFg7QIlPwZQQ7N8RXYfIb42PLYAgxMfWAUGJjyWAIMXHDkDBYKgKE35yfnutiE0NUOLlZrXv8lrwYnsNNhIv4Q+Ci/Xu+dj/F3Ah/rKps+gkNJatsF5mBMknO9tbkfclPtJFUImX8FnA3h29/abtfYuPLICwxEcSQJjiXQMYWKRnKcuy10Ljdt6gwZUUfECwz8b2y1JjdD7Pgtv13Ixz7AOGZulaTzMtJT/NInfdLOpljF7hqpSMtzrnm2qEciYZUWVCwCU1UUpetQKCJf6jgEwrC15zjZBE0yuMATdqJwYNYTfFN6wBeYPnQnC/jp1fVgrc82L12jk5g+uaYNxuHQktyXnXKZD9xrm0YMZ6XbVpv3ltFrjtFUK+wjUk73fD9rVnblgEFYSUxrSAI3Wi5AmCEi+qjCFIh53zrh2wNbBgcFaCemo+FgSEKIl33QcUDE5JmPMLIWriXQNQAy0IXxH0enFCFMU3BUANzpmc0DaYbRZCzuCWBm+ikPNN14DtExQEsUFJCE66cYIl/i2C1G4XvOYaoQb3W3aB46k1ZhtC0LmTK3NTg8iKbzoFapn0L9GbWeWLEJypw6oEDNv+JllZh9HFIqbXPiKoeY5/hhptdOE7R/esMifgtNsDBfWS43Y/p3G+AKjFLQglAX1Om0VNvK8UqBVbMDgsBdPA+XoQoig+MABqIfVoklljxg6ClPxFY9jP662Tu7z+7jsFaje2IEwpHlvfW+JHTZ2y10O2cl6gANRB+35xoHsFdQMMRF18oClQG6WcyUFtg3fVFA/n8xitjKDftQN3gN8DhT0/ARA28ajtlzggahEJ+zyJA8ImHrX9EgdELSJhn+cfMHVbUBK2C1UAAAAASUVORK5CYII="],dom:{},table:{show:!1},room1:{draw:!1,coefficient:1/3,items:[{type:"text",attr:{border:[2,"#363636"],borderRadius:"16",textAlign:"center",width:28,height:42},value:""},{type:"textures",attr:{border:[4,"white"],textures:["data:image/png;base64,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"]},value:""}]},room2:{coefficient:1,draw:!1,items:[{type:"text",value:"A",attr:{}},{type:"text",value:"",attr:{},show:!1},{type:"text",value:"B",attr:{}},{type:"comp",value:[{type:"box",level:0,attr:{border:[4,"black"]}},{type:"text",attr:{},value:""},{type:"textures",attr:{anchor:[-.6,-.7],scale:[.5,.7],textures:[]}}],attr:{}},{attr:{anchor:[-.3,-.7],scale:[.45,.75],textures:[]},type:"textures"},{type:"comp",value:[{type:"box",level:1,attr:{border:[4,"black"],borderLeft:[0]}},{type:"text",attr:{},value:""},{type:"textures",attr:{anchor:[-.5,-.75],scale:[.5,.7],textures:[]}}],attr:{}},{attr:{}},{type:"textures",value:"",attr:{anchor:[-.8,-1.1],scale:[.4,.5],textures:["data:image/png;base64,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"]}}]},robot:0,repair:{show:!1,index:0}};return t},watch:{},mounted:function(){this.formatData(),this.getDom()},methods:{getDom:function(){var t=this,e="canvas"+this.id,i=document.getElementById(e);i?(this.dom={height:i.clientHeight,width:i.clientWidth},this.initCanvas()):requestAnimationFrame(function(){t.getDom()})},formatData:function(){var t=this.data,e=t.images||t.choices[0];switch(e){case"general":this.room2.draw=!0,this.table.show=!0,this.room2.items[3].value[1].value="n1",this.room2.items[5].value[1].value="n2";break;case"room1r":this.room1.draw=!0,this.room1.coefficient=1;var i=t.choices[1];this.room1.items[0].value=i.toString();var s={type:"textures",value:"room1r",attr:{textures:["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADaElEQVR4Xu2YTWsTURSGnztJ1ILWiqJgQVHEgoJtmkxCQVq1rlTErbgQf4DgWt3qXtcuxJWgiIWqWCi1sbROMv0QBP0VUoub0jZXLp1KaCeZycxkOpNMlsn9ep/znnNPrqDDP6LD9ZMASBzQ4QSSFOhwAyRFMEmBJAU6nECSAh1ugOQWSFIgSYE2JKCXGahK8vNFXjjJa7sUyBr0p2EKwSHgQaXAs0YQ2gqAJb6EoHtLtJQ8NYs8qgehbQDkTAZFlUkBPdvFSskTs8hjOwhtAcAu8v/FSn5LjRFT50dbAsga5NMwWWt7t+LVuFg7QIlPwZQQ7N8RXYfIb42PLYAgxMfWAUGJjyWAIMXHDkDBYKgKE35yfnutiE0NUOLlZrXv8lrwYnsNNhIv4Q+Ci/Xu+dj/F3Ah/rKps+gkNJatsF5mBMknO9tbkfclPtJFUImX8FnA3h29/abtfYuPLICwxEcSQJjiXQMYWKRnKcuy10Ljdt6gwZUUfECwz8b2y1JjdD7Pgtv13Ixz7AOGZulaTzMtJT/NInfdLOpljF7hqpSMtzrnm2qEciYZUWVCwCU1UUpetQKCJf6jgEwrC15zjZBE0yuMATdqJwYNYTfFN6wBeYPnQnC/jp1fVgrc82L12jk5g+uaYNxuHQktyXnXKZD9xrm0YMZ6XbVpv3ltFrjtFUK+wjUk73fD9rVnblgEFYSUxrSAI3Wi5AmCEi+qjCFIh53zrh2wNbBgcFaCemo+FgSEKIl33QcUDE5JmPMLIWriXQNQAy0IXxH0enFCFMU3BUANzpmc0DaYbRZCzuCWBm+ikPNN14DtExQEsUFJCE66cYIl/i2C1G4XvOYaoQb3W3aB46k1ZhtC0LmTK3NTg8iKbzoFapn0L9GbWeWLEJypw6oEDNv+JllZh9HFIqbXPiKoeY5/hhptdOE7R/esMifgtNsDBfWS43Y/p3G+AKjFLQglAX1Om0VNvK8UqBVbMDgsBdPA+XoQoig+MABqIfVoklljxg6ClPxFY9jP662Tu7z+7jsFaje2IEwpHlvfW+JHTZ2y10O2cl6gANRB+35xoHsFdQMMRF18oClQG6WcyUFtg3fVFA/n8xitjKDftQN3gN8DhT0/ARA28ajtlzggahEJ+zyJA8ImHrX9EgdELSJhn+cfMHVbUBK2C1UAAAAASUVORK5CYII="]}};this.room1.items.push(s);break;case"s":this.room2.draw=!0,this.table.show=!0;var a=t.choices[2];this.room2.items[3].value[0].level=a[0][0].toString(),this.room2.items[3].value[1].value=a[0][1].toString(),this.room2.items[5].value[0].level=a[1][0].toString(),this.room2.items[5].value[1].value=a[1][1].toString(),this.robot=+t.choices[1];break;case"r":this.room2.draw=!0,this.table.show=!0;var r=t.choices[2];this.room2.items[3].value[0].level=r[0][0].toString(),this.room2.items[3].value[1].value=r[0][1].toString(),this.room2.items[5].value[0].level=r[1][0].toString(),this.room2.items[5].value[1].value=r[1][1].toString();var o=t.choices[3][0];this.room2.items[4].attr.textures=[this.choose[o]],1==o&&(this.room2.items[4].attr.anchor=[-.9,-.7]);var n=t.choices[3][1],c=[3,5],l=c[o];this.room2.items[l].value[2].attr.textures=[this.result[n]],0==n&&(this.room2.items[l].value[2].attr.ancor=[-.5,-.75]),this.robot=t.choices[1];break;case"c":this.room1.draw=!0,this.room2.draw=!0,this.room2.coefficient=7/12,this.table.show=!0;var h=t.choices[3];this.room2.items[3].value[0].level=h[0][0].toString(),this.room2.items[3].value[1].value=h[0][1].toString(),this.room2.items[5].value[0].level=h[1][0].toString(),this.room2.items[5].value[1].value=h[1][1].toString();var g=t.choices[1];this.room1.items[0].value=g.toString(),this.robot=t.choices[2];break;case"repair":this.repair.show=!0,this.repair.index=t.choices[1];break}},initCanvas:function(){var t=spritejs,e=t.Scene,i=(t.Sprite,t.Label,t.Path,"canvas"+this.id),s=new e("#"+i,{viewport:[this.dom.width,this.dom.height]}),a=s.layer();this.room1.draw&&this.drawRoom1(a),this.room2.draw&&this.drawRoom2(a)},drawRoom1:function(t){var e=this,i=spritejs,s=(i.Scene,i.Sprite),a=(i.Label,i.Path,i.Group,1*this.dom.height),r=this.dom.width*this.room1.coefficient,o=new s({size:[r,a],pos:[0,0],border:[2,"black"],boxSizing:"border-box",overflow:"hidden",zIndex:100});t.append(o);var n=this.room1.items;n.forEach(function(i,s){var o=i.type;"text"==o&&(i.attr.lineHeight=42,i.attr.pos=[(r-28)/2,2*a/6],e.drawLabel(i,t)),"textures"==o&&("room1r"==i.value?(i.attr.lineHeight=42,i.attr.scale=[1.05,1],i.attr.pos=[(r-50)/2,2*a/6+20]):(i.attr.pos=[3*r/8,5*a/6],i.attr.size=[r/4,a/6]),e.drawImage(i,t))})},drawRoom2:function(t){var e=this,i=spritejs,s=(i.Scene,i.Sprite),a=(i.Label,i.Path,this.dom.width*this.room2.coefficient),r=1*this.dom.height,o=this.dom.width-a,n=new s({size:[a,r],pos:[o+0,0],border:[2,"#000"],boxSizing:"border-box",overflow:"hidden",zIndex:100});t.append(n);var c=this.room2.items;c.forEach(function(i,s){var n=i.type,c=s%3,l=Math.floor(s/3);if(i.attr.pos=[o+a/3*c,r/3*l],i.attr.size=[a/3,r/3],"text"==n&&(i.attr.lineHeight=r/3,i.attr=Object.assign({},e.attr,i.attr),e.drawLabel(i,t)),"box"==n&&e.drawBox(i,t),"comp"==n&&i.value.forEach(function(s,n){if(i.attr=Object.assign({},e.attr,i.attr),s.attr=Object.assign({},i.attr,s.attr),"text"==s.type&&(s.attr.lineHeight=r/3,s.attr.zIndex=10,e.drawLabel(s,t)),"box"==s.type)for(var h=s.level,g=Math.max(a/400*24,14),u=h;u>-1;u--)s.attr.pos=[o+a/3*c-u*g/2,r/3*l-u*g/2],s.attr.zIndex=3-u,s.attr.bgcolor=e.bgColor[h],0==u&&(s.attr.bgcolor="white"),s.attr.size=[a/3+u*g,r/3+u*g],e.drawBox(s,t);"textures"==s.type&&(s.attr.zIndex=10,e.drawImage(s,t))}),"textures"==n){var h=s%3,g=Math.floor(s/3);i.attr.pos=[o+a/3*h,r/3*g],i.attr.size=[a/3,r/3],e.drawImage(i,t)}})},drawLabel:function(t,e){var i=spritejs,s=(i.Scene,i.Sprite,i.Label),a=(i.Path,new s(t.value));a.attr(t.attr),e.append(a)},drawBox:function(t,e){var i=spritejs,s=(i.Scene,i.Sprite),a=(i.Label,i.Path,new s(t.attr));e.append(a)},drawImage:function(t,e){var i=spritejs,s=(i.Scene,i.Sprite),a=(i.Label,i.Path,new s);a.attr(t.attr),e.append(a)}}},g=h,u=(i("004e"),i("2877")),A=Object(u["a"])(g,c,l,!1,null,"7fc1c9c4",null);A.options.__file="canvas.vue";var d=A.exports,p={name:"Question",props:{question:Object,last:Boolean},components:{Canvas:d},data:function(){var t={typeMap:{0:"描述题",1:"选择题",2:"滑动选择题",3:"开放性问题",4:"图像描述题"},prob1:{columns:[{title:"Barriers",key:"level"},{title:"Chance of going through",key:"percent"}],data:[{level:"Easy",percent:"100%"},{level:"Miedium",percent:"83%"},{level:"Difficult",percent:"66%"}]},prob2:{columns:[{title:"Barriers",key:"level"},{title:"Chance of going through",key:"percent"}],data:[{level:"Easy",percent:"100%"},{level:"Miedium",percent:"83%"},{level:"Difficult",percent:"50%"}]},slide:[],active:-1};return t},methods:{setActive:function(t){this.active=t,this.emitData(t,t)},emitData:function(t,e){var i={value:e,id:this.question.id,score:this.getScore(t)};this.$emit("addAnswer",i)},input:function(t){this.emitData(0,this.question.answer)},getScore:function(t){var e,i=Object.prototype.toString.call(this.question.score).slice(8,-1).toLowerCase();return"null"===i&&(e="null"),"array"===i&&(e=this.question.score[t]),"string"!==i&&"number"!==i||(e=this.question.score),e},slideChange:function(t){var e=this.slide.length,i=this.question.q.choices.length;(e==i||t==i-1&&e==i-1)&&this.emitData(0,this.slide)}},mounted:function(){}},E=p,I=(i("b05e"),Object(u["a"])(E,o,n,!1,null,"7fc7271c",null));I.options.__file="question.vue";var Q=I.exports,C={name:"app",components:{Question:Q},data:function(){return{index:0,last:!1,splice:0,logic_idx:[],page:[],otherScore:0,answer:{random:"",userID:"",score:0,list:[]},showResult:!1}},mounted:function(){this.getQuestion()},methods:{getQuestion:function(){var t=this,e=parseInt(4*Math.random()),i=parseInt(3*Math.random());this.answer.random=[e,i],this.$axios.get("/api/getJson").then(function(s){"string"===typeof s&&(s=JSON.parse(s)),s=s.data;var a=s.questions_all[e][i],r=[],o=0,n={title:"Human Robot Trust Experiment",list:[]};a.forEach(function(t,e){5!==t.q.type?n.list.push(t):(n.list.length&&(r[o]=n,o++),n={title:t.q.title,list:[]})}),t.page=r,t.logic_idx=s.logic_idx}).catch(function(){t.$Message.error({content:"get question failed"})})},addAnswer:function(t){var e=this,i=!1;this.answer.list.forEach(function(s,a){s.id==t.id&&(e.answer.list[a]=t,i=!0)}),i||this.answer.list.push(t)},next:function(){var t=this,e=this.checkAnswer();if(e.result)if(this.getOtherScore(),this.last)this.getAllScore(),this.submit();else{var i=this.logic_idx,s=this.answer.list.slice(this.splice);s.forEach(function(e,s){var a=parseInt(e.id.split("_")[2]),r=i.indexOf(a)>-1;r&&(t.splice+=s+1,0!=e.value?t.page[t.index+1].hide=!0:t.page[t.index+2].hide=!0)}),this.index++,this.page[this.index].hide&&this.index++,(this.index==this.page.length-1||this.index==this.page.length-2&&this.page[this.index+1].hide)&&(this.last=!0),this.$nextTick(function(){console.log(this.page[this.index],this.index),window.scrollTo(0,0)})}else this.$Message.error({content:e.msg})},checkAnswer:function(){var t,e=this,i=this.answer.list.length,s=0;if(this.page.forEach(function(t,i){i<=e.index&&(t.hide||t.list.forEach(function(t){var e=t.q.type;1!=e&&2!=e&&3!=e||s++}))}),i==s){var a=this.answer.list.some(function(t){return-1==t.score});t=a?{result:!1,msg:"Please read carefully and chooseagain"}:{result:!0}}else t={result:!1,msg:"Please answer all questions!"};return t},getAllScore:function(){var t=this,e=this.answer.list;e.forEach(function(e){"null"!==e.score&&(t.answer.score+=e.score)})},getOtherScore:function(){var t=this,e=this.index,i=this.page,s=i[e].list;s.forEach(function(e){if((0==e.q.type||4==e.q.type)&&e.score){var i=Object.prototype.toString.call(e.score).slice(8,-1).toLowerCase();"string"==i||"number"==i?t.answer.score+=e.score:console.error("查看下score数据结构")}})},submit:function(){var t=this,e=(new Date).getTime().toString(),i=Object.assign(this.answer,{userID:e.slice(1)});this.$axios.post("/api/submit",i).then(function(){t.$Message.success({content:"submit success"}),t.showResult=!0}).catch(function(){t.showResult=!0,t.$Message.error({content:"submit failed"})})}}},m=C,b=(i("5c0b"),Object(u["a"])(m,a,r,!1,null,null,null));b.options.__file="App.vue";var f=b.exports,v=i("e069"),B=i.n(v),x=(i("dcad"),i("e008"),i("bc3a")),k=i.n(x);s["default"].use(B.a),s["default"].prototype.$axios=k.a,s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(f)}}).$mount("#app")},"5a31":function(t,e,i){},"5c0b":function(t,e,i){"use strict";var s=i("106f"),a=i.n(s);a.a},"7e8e":function(t,e,i){t.exports=i.p+"img/repair1.775aef16.png"},afde:function(t,e,i){t.exports=i.p+"img/repair0.c7f93023.png"},b05e:function(t,e,i){"use strict";var s=i("5a31"),a=i.n(s);a.a},cb72:function(t,e,i){},e008:function(t,e,i){}});
//# sourceMappingURL=app.5519a08b.js.map
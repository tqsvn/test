(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0290":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"allBox"},[s("div",{staticClass:"login-wrap"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.isIEbrowser,expression:"isIEbrowser"}],staticClass:"login-msg"},[s("div",{staticClass:"msg-left"},[e._v("当前系统不兼容ie浏览器点击右侧确定按钮下载谷歌浏览器")]),s("a",{staticClass:"msg-right",attrs:{alt:"谷歌浏览器",href:"./91.0.4472.124_chrome32_stable_windows_installer.exe",download:""}},[e._v("确定下载")])]),s("div",{staticClass:"ms-login"},[e._m(0),s("el-form",{ref:"login",staticClass:"ms-content",attrs:{model:e.userInfo,rules:e.rules,"label-width":"0px"}},[s("div",{staticClass:"ms-title"},[s("img",{attrs:{id:"logo",src:o("9920"),alt:""}})]),s("div",{attrs:{id:"ms-cut"}},[s("div",{attrs:{id:"ms-cut-left"},on:{click:function(t){return e.cut(0)}}},[s("span",[e._v("短信登录")]),0==e.ct?s("div"):e._e()]),s("div",{attrs:{id:"ms-cut-right"},on:{click:function(t){return e.cut(1)}}},[s("span",[e._v("密码登录")]),1==e.ct?s("div"):e._e()])]),0==e.ct?s("div",[s("el-form-item",{attrs:{prop:"mobileNum"}},[s("el-input",{attrs:{placeholder:"请输入登录账户"},model:{value:e.userInfo.mobileNum,callback:function(t){e.$set(e.userInfo,"mobileNum",t)},expression:"userInfo.mobileNum"}},[s("el-button",{attrs:{slot:"prepend",icon:"el-icon-phone-outline"},slot:"prepend"})],1)],1),s("el-form-item",{staticClass:"mobileCode",attrs:{prop:"mobileCode"}},[s("el-input",{attrs:{type:"text",placeholder:"请输入短信验证码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm()}},model:{value:e.userInfo.mobileCode,callback:function(t){e.$set(e.userInfo,"mobileCode",t)},expression:"userInfo.mobileCode"}},[s("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-lock"},slot:"prepend"})],1),s("button",{staticClass:"el-button el-button--primary el-button--medium",attrs:{id:"btn",value:"发送验证码"},on:{click:function(t){return e.sendCode("#btn")}}},[e._v("\r\n                            发送验证码\r\n                        ")])],1),s("div",{staticClass:"login-btn"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("登录")]),s("div",{on:{click:function(t){e.dialogVisible=!0}}},[e._v("下载操作手册")])],1)],1):e._e(),1==e.ct?s("div",[s("el-form-item",{attrs:{prop:"mobileNum"}},[s("el-input",{attrs:{placeholder:"请输入登录账户"},model:{value:e.userInfo.mobileNum,callback:function(t){e.$set(e.userInfo,"mobileNum",t)},expression:"userInfo.mobileNum"}},[s("el-button",{attrs:{slot:"prepend",icon:"el-icon-phone-outline"},slot:"prepend"})],1)],1),s("el-form-item",{staticClass:"mobileCode",attrs:{prop:"mobileCodes"}},[s("el-input",{attrs:{type:"text",placeholder:"请输入密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm()}},model:{value:e.userInfo.mobileCodes,callback:function(t){e.$set(e.userInfo,"mobileCodes",t)},expression:"userInfo.mobileCodes"}},[s("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-lock"},slot:"prepend"})],1)],1),s("div",{staticClass:"login-btn"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitFormes()}}},[e._v("登录")]),s("div",{on:{click:function(t){e.dialogVisible=!0}}},[e._v("下载操作手册")])],1)],1):e._e()])],1)]),s("el-dialog",{attrs:{title:"手册类型",visible:e.dialogVisible,width:"30%",top:"15%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[s("ul",{staticClass:"payMethods"},[s("li",{class:0==e.chooseIndex?"active":"",on:{click:function(t){return e.setRadioIndex(0)}}},[s("div",{staticClass:"text"},[s("span",[e._v("房产交易与不动产登记业务网上支付操作指南")])])]),s("li",{class:1==e.chooseIndex?"active":"",on:{click:function(t){return e.setRadioIndex(1)}}},[s("div",{staticClass:"text"},[s("span",[e._v("综合收费窗口操作指引")])])]),s("li",{class:2==e.chooseIndex?"active":"",on:{click:function(t){return e.setRadioIndex(2)}}},[s("div",{staticClass:"text"},[s("span",[e._v("收款单位管理台操作指引")])])]),s("li",{class:3==e.chooseIndex?"active":"",on:{click:function(t){return e.setRadioIndex(3)}}},[s("div",{staticClass:"text"},[s("span",[e._v("南京市政务办管理员操作指引")])])])])])],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"ms-login-left"}},[s("img",{attrs:{src:o("220d"),alt:""}})])}],i=o("bd86"),r=o("365c"),a=o("f229"),l=Object(i["a"])({inject:["reload"],data:function(){return{ct:0,isIEbrowser:!1,dialogVisible:!1,chooseIndex:-1,userInfo:{mobileNum:"",mobileCode:"",mobileCodes:""},rules:{mobileNum:[{required:!0,message:"请输入登录账户",trigger:"blur"}],mobileCode:[{required:!0,message:"请输入短信验证码",trigger:"blur"}],mobileCodes:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},created:function(){this.crt()},methods:{cut:function(e){this.ct=e},crt:function(){this.reload()},submitForm:function(){var e=this,t=this.userInfo;this.$refs.login.validate((function(o){if(o)Object(r["L"])(t).then((function(t){200==t.code?(e.$router.push("/home"),e.$message.success("登录成功"),sessionStorage.clear(),localStorage.setItem("token",t.data.token),sessionStorage.setItem("userid",t.data.userId),sessionStorage.setItem("roles",t.data.managerUser.roles.index)):400==t.code&&e.$message.error("账户不存在")}));else{if(!e.userInfo.mobileNum)return e.$message({message:"请输入登录账户",type:"error"}),!1;if(!e.userInfo.mobileCode)return e.$message({message:"请输入短信验证码",type:"error"}),!1;if(!e.userInfo.mobileCodes)return e.$message({message:"请输入密码",type:"error"}),!1}}))},submitFormes:function(){var e=this,t={identityNum:this.userInfo.mobileNum,userPassword:this.userInfo.mobileCodes};this.$refs.login.validate((function(o){if(o)Object(r["M"])(t).then((function(t){200==t.code?(e.$router.push("/home"),e.$message.success("登录成功"),sessionStorage.clear(),localStorage.setItem("token",t.data.token),sessionStorage.setItem("userid",t.data.userId),sessionStorage.setItem("roles",t.data.managerUser.roles.index)):400==t.code&&e.$message.error("账户不存在")}));else{if(!e.userInfo.mobileNum)return e.$message({message:"请输入登录账户",type:"error"}),!1;if(!e.userInfo.mobileCode)return e.$message({message:"请输入短信验证码",type:"error"}),!1;if(!e.userInfo.mobileCodes)return e.$message({message:"请输入密码",type:"error"}),!1}}))},sendCode:function(e){Object(a["a"])(this.userInfo.mobileNum)?(Object(r["Z"])({userMobile:this.userInfo.mobileNum,smsType:"mobile_smsLogin"}).then((function(e){})),Object(a["c"])(e)):this.$message({message:"请输入登录账户",type:"error"})},setRadioIndex:function(e){this.dialogVisible=!1,this.chooseIndex=e,0==e?window.location.href="./0-附件-关于房产交易与不动产登记业务网上支付操作指南.docx":1==e?window.location.href="./1-综合收费窗口操作指引.doc":2==e?window.location.href="./2-收款单位管理台操作指引.docx":3==e&&(window.location.href="./3-南京市政务办管理员操作指引.docx")}},mounted:function(){(window.ActiveXObject||"ActiveXObject"in window)&&(this.isIEbrowser=!0)}},"created",(function(){})),c=l,u=(o("e290"),o("95ab"),o("2877")),d=Object(u["a"])(c,s,n,!1,null,"6b92bffa",null);t["default"]=d.exports},"220d":function(e,t,o){e.exports=o.p+"static/img/left.d0923706.png"},"454f":function(e,t,o){o("46a7");var s=o("584a").Object;e.exports=function(e,t,o){return s.defineProperty(e,t,o)}},"462a":function(e,t,o){},"46a7":function(e,t,o){var s=o("63b6");s(s.S+s.F*!o("8e60"),"Object",{defineProperty:o("d9f6").f})},8437:function(e,t,o){},"85f2":function(e,t,o){e.exports=o("454f")},"95ab":function(e,t,o){"use strict";var s=o("462a"),n=o.n(s);n.a},9920:function(e,t,o){e.exports=o.p+"static/img/LOGO@2x.d9885c93.png"},bd86:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var s=o("85f2"),n=o.n(s);function i(e,t,o){return t in e?n()(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}},e290:function(e,t,o){"use strict";var s=o("8437"),n=o.n(s);n.a},f229:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return i})),o.d(t,"d",(function(){return r})),o.d(t,"c",(function(){return l}));o("c5f6"),o("28a5"),o("386d"),o("4917"),o("3b2b"),o("a481");var s=o("a18c");function n(e){s["a"].push(e)}function i(e){var t=/^1\d{10}$/;return t.test(e)}function r(){var e=new Date,t=e.getFullYear(),o=e.getMonth()+1,s=e.getDate(),n=e.getHours(),i=e.getMinutes(),r=e.getSeconds();o>=0&&o<=9&&(o="0".concat(o)),s>=0&&s<=9&&(s="0".concat(s)),n>=0&&n<=9&&(n="0".concat(n)),i>=0&&i<=9&&(i="0".concat(i)),r>=0&&r<=9&&(r="0".concat(r));return{date:t+"年"+o+"月"+s+"日",time:n+":"+i+":"+r,n:t,y:o,r:s,f:i,m:r}}var a=60;function l(e){try{0==a?(document.querySelector(e).removeAttribute("disabled"),document.querySelector(e).value="发送验证码",document.querySelector(e).innerHTML="发送验证码",a=60):(document.querySelector(e).setAttribute("disabled",!0),document.querySelector(e).innerHTML=a+" S",document.querySelector(e).value=a+" S",a--,setTimeout((function(){l(e)}),1e3))}catch(t){a=0}}}}]);
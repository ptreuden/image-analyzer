(this["webpackJsonpimage-analyzer"]=this["webpackJsonpimage-analyzer"]||[]).push([[0],[,,,,,function(e,t,a){},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(6),i=a.n(c),r=(a(11),a(3)),l=a(2),o=(a(5),a(0)),d=function(e){var t=e.changePermission,a=e.changeUser,n=e.currentUser,c=e.setPreviousImage,i=e.loadingScreen,d=Object(s.useState)(""),m=Object(l.a)(d,2),j=m[0],u=m[1],h=Object(s.useState)(""),b=Object(l.a)(h,2),p=b[0],O=b[1],g=function(){var e=[],t=j.includes("@");(j.length<5||!t)&&e.push("email "),p.length<5&&e.push("password "),0===e.length?(i(!0),function(){var e={email:j,password:p};fetch("https://gentle-brook-34978.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){if(e.email){u(""),O(""),i(!1);var t=e.id,s=e.username,n=e.last_entry,r=e.entries;a({id:t,username:s,last_entry:n,entries:r}),n&&c(n)}else i(!1),u(""),O(""),setTimeout((function(){alert("Login information not correct.  Please try again.")}),100)}))}()):(alert("Please try again using a valid ".concat(e)),u(""),O(""))};return Object(o.jsx)("main",{className:"main pa3 black-80",children:Object(o.jsxs)("div",{className:"form measure center",children:[Object(o.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(o.jsx)("legend",{className:"f4 fw5 ph0 mh0",children:"SIGN IN"}),Object(o.jsxs)("div",{className:"mt3",children:[Object(o.jsx)("label",{className:"db fw5 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(o.jsx)("input",{className:"email pa2 input-reset ba b--mid-gray bg-transparent w-100",type:"email",name:"email-address",id:"email-address",onChange:function(e){return u(e.target.value)},value:j})]}),Object(o.jsxs)("div",{className:"mv3",children:[Object(o.jsx)("label",{className:"db fw5 lh-copy f6",htmlFor:"password",children:"Password"}),Object(o.jsx)("input",{className:"password b pa2 input-reset ba b--mid-gray bg-transparent w-100",type:"password",name:"password",id:"password",onChange:function(e){return O(e.target.value)},value:p})]})]}),Object(o.jsx)("div",{className:"tc",children:Object(o.jsx)("input",{className:"submit-button b ph3 pv2 input-reset ba b--mid-gray pointer f6 dib black-80",type:"submit",onClick:function(e){return g()}})}),Object(o.jsx)("div",{className:" mt3 tc",children:Object(o.jsx)("a",{href:"#0",className:"f6 link dim black-80 db",onClick:function(e){return a(Object(r.a)(Object(r.a)({},n),{},{username:"Guest"}))},children:"Use as Guest"})}),Object(o.jsx)("div",{className:"mt1 tc",children:Object(o.jsx)("a",{href:"#0",className:"f6 link dim black-80 db",onClick:function(e){return t("register")},children:"Register New Account"})})]})})},m=function(e){var t=e.changePermission,a=e.changeUser,n=e.currentUser,c=e.loadingScreen,i=Object(s.useState)(""),d=Object(l.a)(i,2),m=d[0],j=d[1],u=Object(s.useState)(""),h=Object(l.a)(u,2),b=h[0],p=h[1],O=Object(s.useState)(""),g=Object(l.a)(O,2),x=g[0],f=g[1],v=Object(s.useState)(""),N=Object(l.a)(v,2),y=N[0],w=N[1],k=function(){var e=[];(m.length<3||"Guest"===m)&&e.push("username ");var t=b.includes("@");(b.length<5||!t)&&e.push("email "),(x.length<5||x!==y)&&e.push("password "),0===e.length?(c(!0),function(){var e={username:m,email:b,password:x};fetch("https://gentle-brook-34978.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){if("Cannot register - heroku"===e)c(!1),j(""),p(""),f(""),setTimeout((function(){alert("Email already registered. Please try again.")}),100);else if("Invalid register data"===e)c(!1),j(""),p(""),f(""),setTimeout((function(){alert("Invalid register information. Please try again.")}),100);else{c(!1),j(""),p(""),f("");var t=e.id,s=e.username,n=e.last_entry,i=e.entries;a({id:t,username:s,last_entry:n,entries:i})}}))}(),j(""),p(""),f(""),w("")):(c(!1),alert("It looks like there was a problem with your ".concat(e,". Please try again")),j(""),p(""),f(""),w(""))};return Object(o.jsx)("main",{className:"main pa3 black-80",children:Object(o.jsxs)("div",{className:"form measure center",children:[Object(o.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(o.jsx)("legend",{className:"f4 fw5 ph0 mh0",children:"REGISTER NEW ACCOUNT"}),Object(o.jsxs)("div",{className:"mv3",children:[Object(o.jsx)("label",{className:"db fw5 lh-copy f6",htmlFor:"username",children:"Username"}),Object(o.jsx)("input",{className:"register-username pa2 input-reset ba b--mid-gray bg-transparent w-100",type:"text",name:"username",id:"username",onChange:function(e){return j(e.target.value)},value:m})]}),Object(o.jsxs)("div",{className:"mv3",children:[Object(o.jsx)("label",{className:"db fw5 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(o.jsx)("input",{className:"email pa2 input-reset ba b--mid-gray bg-transparent w-100",type:"email",name:"email-address",id:"email-address",onChange:function(e){return p(e.target.value)},value:b})]}),Object(o.jsxs)("div",{className:"mv3",children:[Object(o.jsx)("label",{className:"db fw5 lh-copy f6",htmlFor:"password",children:"Password"}),Object(o.jsx)("input",{className:"password b pa2 input-reset ba b--mid-gray bg-transparent w-100",type:"password",name:"password",id:"password",onChange:function(e){return f(e.target.value)},value:x})]}),Object(o.jsxs)("div",{className:"mv3",children:[Object(o.jsx)("label",{className:"db fw5 lh-copy f6",htmlFor:"password",children:"Confirm Password"}),Object(o.jsx)("input",{className:"password b pa2 input-reset ba b--mid-gray bg-transparent w-100",type:"password",name:"password",id:"passwordConfirm",onChange:function(e){return w(e.target.value)},value:y})]})]}),Object(o.jsx)("div",{className:"tc",children:Object(o.jsx)("input",{className:"submit-button b ph3 pv2 input-reset ba b--mid-gray pointer f6 dib",type:"submit",onClick:function(e){return k()}})}),Object(o.jsx)("div",{className:" mt3 tc",children:Object(o.jsx)("a",{href:"#0",className:"f6 link dim black-80 db",onClick:function(e){return a(Object(r.a)(Object(r.a)({},n),{},{username:"Guest"}))},children:"Use as Guest"})}),Object(o.jsx)("div",{className:"mt1 tc",children:Object(o.jsx)("a",{href:"#0",className:"f6 link dim black-80 db",onClick:function(e){return t("signin")},children:"Sign In With Account"})})]})})},j=a.p+"static/media/outerBrain.5f027ec1.svg",u=a.p+"static/media/gears.45cb39f0.svg",h=function(e){var t=e.changeUser,a=e.currentUser,n=e.setPreviousImage,c=e.loadingScreen,i=Object(s.useState)("signin"),r=Object(l.a)(i,2),h=r[0],b=r[1],p=function(e){b(e)};return Object(o.jsxs)("div",{className:"permission-container",id:"permission-container",children:[Object(o.jsxs)("div",{className:"permission-logo",children:[Object(o.jsxs)("div",{className:"brain-image-container",children:[Object(o.jsx)("img",{src:j,alt:"brain icon",className:"outer-brain"}),Object(o.jsx)("img",{src:u,alt:"gear icon",className:"gears"})]}),Object(o.jsx)("h2",{children:"IMAGE"}),Object(o.jsx)("h2",{children:"ANALYZER"})]}),"signin"===h?Object(o.jsx)(d,{changePermission:p,changeUser:t,currentUser:a,setPreviousImage:n,loadingScreen:c}):Object(o.jsx)(m,{changePermission:p,changeUser:t,currentUser:a,loadingScreen:c})]})},b=(a(13),a.p+"static/media/loadingGif.f53aa23f.gif"),p=function(e){var t=e.loadingScreen,a=e.currentUser;return Object(o.jsx)("div",{className:"loading-container ".concat(t?"loading":"not-loading"),children:t?""===a.username?Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:b,alt:"loading"}),Object(o.jsx)("h3",{children:"GETTING USER INFO... PLEASE WAIT"})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:b,alt:"loading"}),Object(o.jsx)("h3",{children:"PROCESSING... PLEASE WAIT"})]}):Object(o.jsx)("div",{})})},O=a.p+"static/media/brainDataIcon.e27eb040.svg",g=(a(14),function(e){var t=e.changeUser,a=e.currentUser;return Object(o.jsxs)("div",{className:"navigation",children:[Object(o.jsx)("div",{className:"logo-container",children:Object(o.jsx)("img",{src:O,alt:"brain icon"})}),"Guest"===a.username?Object(o.jsx)("div",{className:"sign-out",children:Object(o.jsx)("a",{href:"#1",onClick:function(e){return t({id:0,username:"",last_entry:"",entries:0})},children:"ACCOUNT SIGN IN"})}):Object(o.jsx)("div",{className:"sign-out",children:Object(o.jsx)("a",{href:"#1",onClick:function(e){return s=a,fetch("https://gentle-brook-34978.herokuapp.com/signout",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:s.id,last_entry:s.last_entry})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){return console.log("signout did not work")})),void t({id:0,username:"",last_entry:"",entries:0});var s},children:"SIGN OUT"})})]})}),x=(a(15),a(16),function(e){var t=e.user,a=e.previousImage,s=e.checkUrl,n=e.setUrlToRender,c=t.username;"Guest"===c&&(c="");var i=function(e){document.getElementById("url-input").value=e,n(e),setTimeout((function(){s(e)}),100)};return Object(o.jsx)("div",{className:"personalized-container",children:"Guest"===t.username?Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Your last analyzed image was:"}),Object(o.jsx)("img",{src:a,alt:"pre",onClick:function(e){return i(a)}})]}):Object(o.jsxs)("div",{children:[Object(o.jsxs)("h2",{children:["Hello ",Object(o.jsx)("span",{className:"username",children:c}),"."]}),Object(o.jsx)("h2",{children:"Your last analyzed image was:"}),Object(o.jsx)("img",{src:a,alt:"pre",onClick:function(e){return i(a)}})]})})}),f=function(e){var t=e.user,a=e.previousImage,s=e.checkUrl,n=e.setUrlToRender;return Object(o.jsx)("div",{className:"greeting-container",children:0===t.entries?Object(o.jsx)("div",{children:"Guest"===t.username?Object(o.jsx)("h2",{children:"Complete your analysis below."}):Object(o.jsx)("h2",{children:"Hello ".concat(t.username,", complete your image analysis below.")})}):""!==a?Object(o.jsx)(x,{user:t,previousImage:a,checkUrl:s,setUrlToRender:n}):Object(o.jsx)("div",{children:"Guest"===t.username?Object(o.jsx)("h2",{children:"Complete your analysis below."}):Object(o.jsx)("h2",{children:"Hello ".concat(t.username,", complete your image analysis below.")})})})},v=(a(17),a(18),function(e){var t=e.checkUrl,a=e.clearField,s=e.checkToAnalyze,n=e.setUrlToRender;e.imageValid;return Object(o.jsxs)("div",{className:"input-container",children:[Object(o.jsx)("input",{id:"url-input",type:"text",name:"url",placeholder:"Enter image address",onChange:function(e){return a=e.target.value,n(a),void setTimeout((function(){t(a)}),150);var a}}),Object(o.jsx)("button",{type:"button",onClick:function(){return s()},className:"input-button",children:"Analyze"}),Object(o.jsx)("div",{className:"input-clear",children:Object(o.jsx)("p",{onClick:function(){return a()},children:"Clear"})})]})}),N=(a(19),function(e){var t=e.checkUrl,a=e.setUrlToRender,s="https://images.unsplash.com/photo-1520520731457-9283dd14aa66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGJlYWNofGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",n="https://images.unsplash.com/photo-1621251401027-432cd149a00c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGNpdHl8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",c="https://images.unsplash.com/photo-1559355946-519a96b93456?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGRvZ3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",i=function(e){document.getElementById("url-input").value=e,a(e),setTimeout((function(){t(e)}),100)};return Object(o.jsxs)("div",{className:"samples-container",children:[Object(o.jsx)("div",{className:"samples-text-container",children:Object(o.jsx)("p",{children:"No image?  Try these samples:"})}),Object(o.jsxs)("div",{className:"samples-images-container",children:[Object(o.jsx)("img",{src:s,alt:"beach",onClick:function(){return i(s)}}),Object(o.jsx)("img",{src:n,alt:"city",onClick:function(){return i(n)}}),Object(o.jsx)("img",{src:c,alt:"dog",onClick:function(){return i(c)}})]})]})}),y=function(e){var t=e.checkUrl,a=e.clearField,s=(e.showSample,e.checkToAnalyze),n=e.setUrlToRender,c=e.imageValid;return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"main-buffer",id:"main-buffer"}),Object(o.jsxs)("div",{className:"main-container",id:"main-container",children:[Object(o.jsx)("h3",{children:"ANALYZE AN IMAGE"}),Object(o.jsx)(v,{checkUrl:t,clearField:a,checkToAnalyze:s,setUrlToRender:n,imageValid:c}),Object(o.jsx)(N,{checkUrl:t,setUrlToRender:n})]})]})},w=(a(20),function(e){var t=e.imageValid,a=e.imageToRender;return Object(o.jsxs)("div",{className:"imageOutput-container ".concat(t?"visible":"hidden"),children:[Object(o.jsx)("h3",{children:"IMAGE"}),t?Object(o.jsx)("div",{className:"imageOutput-image",children:Object(o.jsx)("img",{id:"imageShowing",className:"showImage",src:a,alt:"rendered"})}):Object(o.jsx)("div",{className:"imageOutput-image",children:Object(o.jsx)("img",{id:"imageShowing",className:"hideImage",src:a,alt:"hidden"})})]})}),k=(a(21),function(e){var t=e.showThemes,a=e.imageValid,s=e.themeNamesValues,n=s[0].concept,c=100*s[0].value.toPrecision(2),i=s[1].concept,r=100*s[1].value.toPrecision(2),l=s[2].concept,d=100*s[2].value.toPrecision(2),m=s[3].concept,j=100*s[3].value.toPrecision(2),u=s[4].concept,h=100*s[4].value.toPrecision(2);return Object(o.jsxs)("div",{className:"themes-container ".concat(t&&a?"visible":"hidden"),id:"themes-container",children:[Object(o.jsx)("h3",{children:"THEMES"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"themes-data",children:Object(o.jsxs)("div",{className:"theme theme1",children:[Object(o.jsx)("p",{className:"theme-text theme-text1",children:n}),Object(o.jsxs)("div",{className:"theme-bar-container",children:[Object(o.jsx)("div",{className:"theme-bar theme-bar1",style:{width:c/1.15+"%"}}),Object(o.jsx)("div",{className:"theme-percentage theme-percentage1",children:Object(o.jsxs)("p",{children:[c,"%"]})})]})]})}),Object(o.jsx)("div",{className:"themes-data",children:Object(o.jsxs)("div",{className:"theme theme2",children:[Object(o.jsx)("p",{className:"theme-text theme-text2",children:i}),Object(o.jsxs)("div",{className:"theme-bar-container",children:[Object(o.jsx)("div",{className:"theme-bar theme-bar2",style:{width:r/1.15+"%"}}),Object(o.jsx)("div",{className:"theme-percentage theme-percentage2",children:Object(o.jsxs)("p",{children:[r,"%"]})})]})]})}),Object(o.jsx)("div",{className:"themes-data",children:Object(o.jsxs)("div",{className:"theme theme3",children:[Object(o.jsx)("p",{className:"theme-text theme-text3",children:l}),Object(o.jsxs)("div",{className:"theme-bar-container",children:[Object(o.jsx)("div",{className:"theme-bar theme-bar3",style:{width:d/1.15+"%"}}),Object(o.jsx)("div",{className:"theme-percentage theme-percentage3",children:Object(o.jsxs)("p",{children:[d,"%"]})})]})]})}),Object(o.jsx)("div",{className:"themes-data",children:Object(o.jsxs)("div",{className:"theme theme4",children:[Object(o.jsx)("p",{className:"theme-text theme-text4",children:m}),Object(o.jsxs)("div",{className:"theme-bar-container",children:[Object(o.jsx)("div",{className:"theme-bar theme-bar4",style:{width:j/1.15+"%"}}),Object(o.jsx)("div",{className:"theme-percentage theme-percentage4",children:Object(o.jsxs)("p",{children:[j,"%"]})})]})]})}),Object(o.jsx)("div",{className:"themes-data",children:Object(o.jsxs)("div",{className:"theme theme5",children:[Object(o.jsx)("p",{className:"theme-text theme-text5",children:u}),Object(o.jsxs)("div",{className:"theme-bar-container",children:[Object(o.jsx)("div",{className:"theme-bar theme-bar5",style:{width:h/1.15+"%"}}),Object(o.jsx)("div",{className:"theme-percentage theme-percentage5",children:Object(o.jsxs)("p",{children:[h,"%"]})})]})]})})]})]})}),S=(a(22),function(e){var t=e.imageValid,a=e.imageToRender,s=e.showThemes,n=e.themeNamesValues;return Object(o.jsxs)("div",{className:"output-container",id:"output-container",children:[Object(o.jsx)(w,{imageValid:t,imageToRender:a}),Object(o.jsx)(k,{showThemes:s,imageValid:t,themeNamesValues:n})]})}),T=(a(23),function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(o.jsx)("div",{className:"about-container ".concat(a?"about-showing":"about-hidden"),children:Object(o.jsxs)("div",{className:"about-content",children:[Object(o.jsx)("div",{className:"about-tab",onClick:function(e){return n(!a)},children:a?Object(o.jsx)("p",{children:"x"}):Object(o.jsx)("p",{children:"?"})}),Object(o.jsx)("div",{className:"about-text-container",children:Object(o.jsxs)("div",{className:"about-details",children:[Object(o.jsxs)("p",{className:"about-text",children:["This image analyzer uses the ",Object(o.jsx)("a",{href:"https://www.clarifai.com/",target:"_blank",children:"Clarifai"})," API to garner data about inputted images.  Then, through a custom algorithm, this page displays five themes and respective confidence levels in a visual fashion."]}),Object(o.jsx)("p",{className:"about-text",children:"Although this page is simply for demonstration, the generated information could be applied in many ways, including the creation of automatic tags of user uploaded images."}),Object(o.jsxs)("p",{className:"about-text-unsplash",children:["Sample images from ",Object(o.jsx)("a",{href:"https://unsplash.com/",target:"_blank",children:"Unsplash.com"})]})]})})]})})}),U=(a(24),a(25),function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(!1),i=Object(l.a)(c,2),d=i[0],m=i[1],j=Object(s.useState)({id:0,username:"Guest",last_entry:"",entries:0}),u=Object(l.a)(j,2),b=u[0],O=u[1],x=Object(s.useState)(""),v=Object(l.a)(x,2),N=v[0],w=v[1],k=Object(s.useState)(""),U=Object(l.a)(k,2),C=U[0],I=U[1],P=Object(s.useState)(""),E=Object(l.a)(P,2),A=E[0],G=E[1],R=Object(s.useState)(!1),F=Object(l.a)(R,2),M=F[0],V=F[1],z=Object(s.useState)([{concept:"",value:0},{concept:"",value:0},{concept:"",value:0},{concept:"",value:0},{concept:"",value:0}]),_=Object(l.a)(z,2),B=_[0],D=_[1],H=[{concept:"",value:0},{concept:"",value:0},{concept:"",value:0},{concept:"",value:0},{concept:"",value:0}],W=function(e){a&&M&&(I(N),w(""),D(H),V(!1));var t=document.getElementById("imageShowing"),s=document.getElementById("main-buffer");t.width>75?(n(!0),s.scrollIntoView({behavior:"smooth"})):n(!1)},J=function(e){fetch("https://gentle-brook-34978.herokuapp.com/analyze",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})}).then((function(e){return e.json()})).then((function(e){m(!1),D(e);var t=window.innerWidth,a=document.getElementById("themes-container");t<1025&&a.scrollIntoView({behavior:"smooth"}),"Guest"!==b.username?(!function(e){var t=e.id,a=e.last_entry;fetch("https://gentle-brook-34978.herokuapp.com/entries",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,last_entry:a})}).then((function(e){return e.json()})).then((function(e){})).catch((function(e){return alert("Could not update user entry")}))}(b),O(Object(r.a)(Object(r.a)({},b),{},{last_entry:A,entries:b.entries+=1}))):O(Object(r.a)(Object(r.a)({},b),{},{entries:b.entries+=1}))})).catch((function(e){V(!1),n(!1),setTimeout((function(){alert("Sorry, the request could not be fulfilled")}),200)}))},Y=function(e){I(""),n(!1),V(!1),D(H),O(e)};return Object(o.jsx)("div",{className:"app-container ".concat(a?"scrollable":"no-scroll"),children:""===b.username?Object(o.jsxs)("div",{children:[Object(o.jsx)(p,{loadingScreen:d,currentUser:b}),Object(o.jsx)(h,{changeUser:Y,currentUser:b,setPreviousImage:I,loadingScreen:m})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)(p,{loadingScreen:d,currentUser:b}),Object(o.jsx)(g,{changeUser:Y,currentUser:b,setPreviousImage:I}),Object(o.jsx)(f,{user:b,previousImage:C,checkUrl:W,setUrlToRender:G}),Object(o.jsx)(y,{checkUrl:W,clearField:function(){document.getElementById("url-input").value="",a&&M&&(I(N),w("")),n(!1),V(!1),D(H)},checkToAnalyze:function(){a&&!M?(V(!0),m(!0),J(A),w(A)):a&&M?alert("Image already processed"):alert("Please input valid image url address")},setUrlToRender:G,imageValid:a}),Object(o.jsx)(S,{imageValid:a,imageToRender:A,showThemes:M,themeNamesValues:B}),Object(o.jsx)(T,{})]})})}),C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(U,{})}),document.getElementById("root")),C()}],[[26,1,2]]]);
//# sourceMappingURL=main.e2ea728b.chunk.js.map
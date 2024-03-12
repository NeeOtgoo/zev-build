"use strict";(self.webpackChunkemind=self.webpackChunkemind||[]).push([[169],{3042:function(e,t,n){n.r(t);var a=n(1413),r=n(29439),o=n(72791),l=n(49389),c=n(73332),i=n(50419),s=n(66871),u=n(66106),d=n(30914),m=n(55064),f=n(87309),p=n(6443),v=n(53719),h=n(59305),g=n(82630),y=n(96578),Z=n(84376),x=n(81905),b=n(80184),E=l.Z.TextArea;t.default=function(){var e=new RegExp(/^[7-9][0-9]{3}[0-9]{4}$/),t=(0,o.useState)(""),n=(0,r.Z)(t,2),C=n[0],j=n[1],O=c.Z.useForm(),w=(0,r.Z)(O,1)[0],P=(0,o.useContext)(v.S),N=(0,o.useState)(P.user),S=(0,r.Z)(N,1)[0],M=(0,y.a)(x.Pl,{onCompleted:function(e){w.setFieldsValue(e.accountSelf)}}).refetch,k=(0,Z.D)(x.r0,{refetchQueries:[{query:x.ME}],onCompleted:function(e){i.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0448\u0438\u043d\u044d\u0447\u0438\u043b\u043b\u044d\u044d!"),M()}}),T=(0,r.Z)(k,2),D=T[0],L=T[1].loading;return(0,b.jsx)(s.Z,{children:(0,b.jsxs)(u.Z,{children:[(0,b.jsx)(d.Z,{xs:24,sm:24,md:8,className:"text-center mt-4",children:(0,b.jsx)("div",{className:"mt-5",children:(0,b.jsx)(m.Z,(0,a.Z)((0,a.Z)({onChange:function(e){j(e.file)}},{accept:".jpg",name:"file",multiple:!1,listType:"picture-card",showUploadList:!1,beforeUpload:function(e){return!1}}),{},{children:C?(0,b.jsx)("img",{src:URL.createObjectURL(C),alt:"avatar",className:"img-fluid max-h-40"}):(0,b.jsx)("div",{children:S.isStudent?(0,b.jsx)("img",{src:h._O+S.student.photo,alt:"avatar",className:"img-fluid max-h-40"}):S.isTeacher?(0,b.jsx)("img",{src:h._O+S.teacher.photo,alt:"avatar",className:"img-fluid max-h-40"}):(0,b.jsx)("img",{src:h._O+"default.jpg",alt:"avatar",className:"img-fluid max-h-40"})})}))})}),(0,b.jsx)(d.Z,{xs:24,sm:24,md:16,children:(0,b.jsx)("div",{className:"mt-4",children:(0,b.jsx)(c.Z,{name:"basicInformation",layout:"vertical",onFinish:function(e){e.image=C,D({variables:e})},form:w,children:(0,b.jsx)(u.Z,{children:(0,b.jsxs)(d.Z,{xs:24,sm:24,md:24,lg:24,children:[(0,b.jsxs)(u.Z,{gutter:p.KP,children:[(0,b.jsx)(d.Z,{xs:24,sm:24,md:12,children:(0,b.jsx)(c.Z.Item,{label:(0,b.jsx)(g.Z,{id:"familyName"}),name:"familyName",rules:[{required:!0,message:(0,b.jsx)(g.Z,{id:"form.required"})}],children:(0,b.jsx)(l.Z,{})})}),(0,b.jsx)(d.Z,{xs:24,sm:24,md:12,children:(0,b.jsx)(c.Z.Item,{label:(0,b.jsx)(g.Z,{id:"name"}),name:"name",rules:[{required:!0,message:(0,b.jsx)(g.Z,{id:"form.required"})}],children:(0,b.jsx)(l.Z,{})})}),(0,b.jsx)(d.Z,{xs:24,sm:24,md:12,children:(0,b.jsx)(c.Z.Item,{label:(0,b.jsx)(g.Z,{id:"phone"}),name:"phone",rules:[{required:!0,message:(0,b.jsx)(g.Z,{id:"form.required"})},{validator:function(t,n){return e.test(n)?Promise.resolve():Promise.reject("\u0423\u0442\u0430\u0441\u043d\u044b \u0434\u0443\u0433\u0430\u0430\u0440 \u0431\u0443\u0440\u0443\u0443 \u0431\u0430\u0439\u043d\u0430!")}}],children:(0,b.jsx)(l.Z,{})})}),(0,b.jsx)(d.Z,{xs:24,sm:24,md:12,children:(0,b.jsx)(c.Z.Item,{label:(0,b.jsx)(g.Z,{id:"email"}),name:"email",rules:[{required:!0,message:(0,b.jsx)(g.Z,{id:"form.required"})},{type:"email",message:"\u0418-\u043c\u044d\u0439\u043b \u0431\u0443\u0440\u0443\u0443 \u0431\u0430\u0439\u043d\u0430"}],children:(0,b.jsx)(l.Z,{})})}),(0,b.jsx)(d.Z,{xs:24,sm:24,md:24,children:(0,b.jsx)(c.Z.Item,{label:(0,b.jsx)(g.Z,{id:"address"}),name:"address",rules:[{required:!0,message:(0,b.jsx)(g.Z,{id:"form.required"})}],children:(0,b.jsx)(E,{rows:4})})})]}),(0,b.jsx)(c.Z.Item,{className:"text-right",children:(0,b.jsx)(f.Z,{type:"primary",htmlType:"submit",loading:L,children:(0,b.jsx)(g.Z,{id:"main.okText"})})})]})})})})})]})})}},67575:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(1413),r=n(72791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},l=n(8711),c=function(e,t){return r.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:o}))};c.displayName="CheckOutlined";var i=r.forwardRef(c)},11730:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(1413),r=n(72791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},l=n(8711),c=function(e,t){return r.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:o}))};c.displayName="SearchOutlined";var i=r.forwardRef(c)},19581:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(29439),r=n(72791);function o(){var e=r.useReducer((function(e){return e+1}),0);return(0,a.Z)(e,2)[1]}},96096:function(e,t,n){n.d(t,{GL:function(){return l},fk:function(){return c},jD:function(){return o}});var a,r=n(14937),o=function(){return(0,r.Z)()&&window.document.documentElement},l=function(e){if(o()){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1},c=function(){if(!o())return!1;if(void 0!==a)return a;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),a=1===e.scrollHeight,document.body.removeChild(e),a}},66871:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(4942),r=n(87462),o=n(72791),l=n(81694),c=n.n(l),i=n(41818),s=n(69077),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},d=function(e){var t=e.prefixCls,n=e.className,l=e.hoverable,i=void 0===l||l,d=u(e,["prefixCls","className","hoverable"]);return o.createElement(s.C,null,(function(e){var l=(0,e.getPrefixCls)("card",t),s=c()("".concat(l,"-grid"),n,(0,a.Z)({},"".concat(l,"-grid-hoverable"),i));return o.createElement("div",(0,r.Z)({},d,{className:s}))}))},m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},f=function(e){return o.createElement(s.C,null,(function(t){var n=t.getPrefixCls,a=e.prefixCls,l=e.className,i=e.avatar,s=e.title,u=e.description,d=m(e,["prefixCls","className","avatar","title","description"]),f=n("card",a),p=c()("".concat(f,"-meta"),l),v=i?o.createElement("div",{className:"".concat(f,"-meta-avatar")},i):null,h=s?o.createElement("div",{className:"".concat(f,"-meta-title")},s):null,g=u?o.createElement("div",{className:"".concat(f,"-meta-description")},u):null,y=h||g?o.createElement("div",{className:"".concat(f,"-meta-detail")},h,g):null;return o.createElement("div",(0,r.Z)({},d,{className:p}),v,y)}))},p=n(3323),v=n(66106),h=n(30914),g=n(1815),y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var Z=function(e){var t,n,l,u=o.useContext(s.E_),m=u.getPrefixCls,f=u.direction,Z=o.useContext(g.Z),x=e.prefixCls,b=e.className,E=e.extra,C=e.headStyle,j=void 0===C?{}:C,O=e.bodyStyle,w=void 0===O?{}:O,P=e.title,N=e.loading,S=e.bordered,M=void 0===S||S,k=e.size,T=e.type,D=e.cover,L=e.actions,z=e.tabList,I=e.children,q=e.activeTabKey,R=e.defaultActiveTabKey,A=e.tabBarExtraContent,B=e.hoverable,K=e.tabProps,U=void 0===K?{}:K,F=y(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),_=m("card",x),G=0===w.padding||"0px"===w.padding?{padding:24}:void 0,Q=o.createElement("div",{className:"".concat(_,"-loading-block")}),V=o.createElement("div",{className:"".concat(_,"-loading-content"),style:G},o.createElement(v.Z,{gutter:8},o.createElement(h.Z,{span:22},Q)),o.createElement(v.Z,{gutter:8},o.createElement(h.Z,{span:8},Q),o.createElement(h.Z,{span:15},Q)),o.createElement(v.Z,{gutter:8},o.createElement(h.Z,{span:6},Q),o.createElement(h.Z,{span:18},Q)),o.createElement(v.Z,{gutter:8},o.createElement(h.Z,{span:13},Q),o.createElement(h.Z,{span:9},Q)),o.createElement(v.Z,{gutter:8},o.createElement(h.Z,{span:4},Q),o.createElement(h.Z,{span:3},Q),o.createElement(h.Z,{span:16},Q))),H=void 0!==q,W=(0,r.Z)((0,r.Z)({},U),(t={},(0,a.Z)(t,H?"activeKey":"defaultActiveKey",H?q:R),(0,a.Z)(t,"tabBarExtraContent",A),t)),J=z&&z.length?o.createElement(p.Z,(0,r.Z)({size:"large"},W,{className:"".concat(_,"-head-tabs"),onChange:function(t){var n;null===(n=e.onTabChange)||void 0===n||n.call(e,t)}}),z.map((function(e){return o.createElement(p.Z.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(P||E||J)&&(l=o.createElement("div",{className:"".concat(_,"-head"),style:j},o.createElement("div",{className:"".concat(_,"-head-wrapper")},P&&o.createElement("div",{className:"".concat(_,"-head-title")},P),E&&o.createElement("div",{className:"".concat(_,"-extra")},E)),J));var $=D?o.createElement("div",{className:"".concat(_,"-cover")},D):null,X=o.createElement("div",{className:"".concat(_,"-body"),style:w},N?V:I),Y=L&&L.length?o.createElement("ul",{className:"".concat(_,"-actions")},function(e){return e.map((function(t,n){return o.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},o.createElement("span",null,t))}))}(L)):null,ee=(0,i.Z)(F,["onTabChange"]),te=k||Z,ne=c()(_,(n={},(0,a.Z)(n,"".concat(_,"-loading"),N),(0,a.Z)(n,"".concat(_,"-bordered"),M),(0,a.Z)(n,"".concat(_,"-hoverable"),B),(0,a.Z)(n,"".concat(_,"-contain-grid"),function(){var t;return o.Children.forEach(e.children,(function(e){e&&e.type&&e.type===d&&(t=!0)})),t}()),(0,a.Z)(n,"".concat(_,"-contain-tabs"),z&&z.length),(0,a.Z)(n,"".concat(_,"-").concat(te),te),(0,a.Z)(n,"".concat(_,"-type-").concat(T),!!T),(0,a.Z)(n,"".concat(_,"-rtl"),"rtl"===f),n),b);return o.createElement("div",(0,r.Z)({},ee,{className:ne}),l,$,X,Y)};Z.Grid=d,Z.Meta=f;var x=Z},49389:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(6189),r=n(4942),o=n(72791),l=n(81694),c=n.n(l),i=n(69077),s=function(e){return o.createElement(i.C,null,(function(t){var n,a=t.getPrefixCls,l=t.direction,i=e.prefixCls,s=e.className,u=void 0===s?"":s,d=a("input-group",i),m=c()(d,(n={},(0,r.Z)(n,"".concat(d,"-lg"),"large"===e.size),(0,r.Z)(n,"".concat(d,"-sm"),"small"===e.size),(0,r.Z)(n,"".concat(d,"-compact"),e.compact),(0,r.Z)(n,"".concat(d,"-rtl"),"rtl"===l),n),u);return o.createElement("span",{className:m,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},e.children)}))},u=n(87462),d=n(88834),m=n(11730),f=n(87309),p=n(1815),v=n(61113),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},g=o.forwardRef((function(e,t){var n,l,s=e.prefixCls,g=e.inputPrefixCls,y=e.className,Z=e.size,x=e.suffix,b=e.enterButton,E=void 0!==b&&b,C=e.addonAfter,j=e.loading,O=e.disabled,w=e.onSearch,P=e.onChange,N=h(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange"]),S=o.useContext(i.E_),M=S.getPrefixCls,k=S.direction,T=o.useContext(p.Z),D=Z||T,L=o.useRef(null),z=function(e){var t;document.activeElement===(null===(t=L.current)||void 0===t?void 0:t.input)&&e.preventDefault()},I=function(e){var t;w&&w(null===(t=L.current)||void 0===t?void 0:t.input.value,e)},q=M("input-search",s),R=M("input",g),A="boolean"===typeof E?o.createElement(m.Z,null):null,B="".concat(q,"-button"),K=E||{},U=K.type&&!0===K.type.__ANT_BUTTON;l=U||"button"===K.type?(0,v.Tm)(K,(0,u.Z)({onMouseDown:z,onClick:I,key:"enterButton"},U?{className:B,size:D}:{})):o.createElement(f.Z,{className:B,type:E?"primary":void 0,size:D,disabled:O,key:"enterButton",onMouseDown:z,onClick:I,loading:j,icon:A},E),C&&(l=[l,(0,v.Tm)(C,{key:"addonAfter"})]);var F=c()(q,(n={},(0,r.Z)(n,"".concat(q,"-rtl"),"rtl"===k),(0,r.Z)(n,"".concat(q,"-").concat(D),!!D),(0,r.Z)(n,"".concat(q,"-with-button"),!!E),n),y);return o.createElement(a.ZP,(0,u.Z)({ref:(0,d.sQ)(L,t),onPressEnter:I},N,{size:D,prefixCls:R,addonAfter:l,suffix:x,onChange:function(e){e&&e.target&&"click"===e.type&&w&&w(e.target.value,e),P&&P(e)},className:F,disabled:O}))}));g.displayName="Search";var y=g,Z=n(74033),x=n(29439),b=n(41818),E=n(24215),C=n(1413),j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},O=n(8711),w=function(e,t){return o.createElement(O.Z,(0,C.Z)((0,C.Z)({},e),{},{ref:t,icon:j}))};w.displayName="EyeInvisibleOutlined";var P=o.forwardRef(w),N=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},S={click:"onClick",hover:"onMouseOver"},M=o.forwardRef((function(e,t){var n=(0,o.useState)(!1),l=(0,x.Z)(n,2),s=l[0],d=l[1],m=function(){e.disabled||d(!s)},f=function(n){var l=n.getPrefixCls,i=e.className,d=e.prefixCls,f=e.inputPrefixCls,p=e.size,v=e.visibilityToggle,h=N(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),g=l("input",f),y=l("input-password",d),Z=v&&function(t){var n,a=e.action,l=e.iconRender,c=S[a]||"",i=(void 0===l?function(){return null}:l)(s),u=(n={},(0,r.Z)(n,c,m),(0,r.Z)(n,"className","".concat(t,"-icon")),(0,r.Z)(n,"key","passwordIcon"),(0,r.Z)(n,"onMouseDown",(function(e){e.preventDefault()})),(0,r.Z)(n,"onMouseUp",(function(e){e.preventDefault()})),n);return o.cloneElement(o.isValidElement(i)?i:o.createElement("span",null,i),u)}(y),x=c()(y,i,(0,r.Z)({},"".concat(y,"-").concat(p),!!p)),E=(0,u.Z)((0,u.Z)({},(0,b.Z)(h,["suffix","iconRender"])),{type:s?"text":"password",className:x,prefixCls:g,suffix:Z});return p&&(E.size=p),o.createElement(a.ZP,(0,u.Z)({ref:t},E))};return o.createElement(i.C,null,f)}));M.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(e){return e?o.createElement(E.Z,null):o.createElement(P,null)}},M.displayName="Password";var k=M;a.ZP.Group=s,a.ZP.Search=y,a.ZP.TextArea=Z.Z,a.ZP.Password=k;var T=a.ZP},54170:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(1413),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),o="aria-",l="data-";function c(e,t){return 0===e.indexOf(t)}function i(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===n?{aria:!0,data:!0,attr:!0}:!0===n?{aria:!0}:(0,a.Z)({},n);var i={};return Object.keys(e).forEach((function(n){(t.aria&&("role"===n||c(n,o))||t.data&&c(n,l)||t.attr&&r.includes(n))&&(i[n]=e[n])})),i}},84376:function(e,t,n){n.d(t,{D:function(){return u}});var a=n(3431),r=n(72791),o=n(63124),l=n(5970),c=n(72364),i=n(29484),s=n(65046);function u(e,t){var n=(0,s.x)(null===t||void 0===t?void 0:t.client);(0,c.Vp)(e,c.n_.Mutation);var u=(0,r.useState)({called:!1,loading:!1,client:n}),d=u[0],m=u[1],f=(0,r.useRef)({result:d,mutationId:0,isMounted:!0,client:n,mutation:e,options:t});Object.assign(f.current,{client:n,options:t,mutation:e});var p=(0,r.useCallback)((function(e){void 0===e&&(e={});var t=f.current,n=t.client,r=t.options,c=t.mutation,s=(0,a.pi)((0,a.pi)({},r),{mutation:c});f.current.result.loading||s.ignoreResults||!f.current.isMounted||m(f.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:n});var u=++f.current.mutationId,d=(0,o.J)(s,e);return n.mutate(d).then((function(t){var a,r,o,c=t.data,s=t.errors,p=s&&s.length>0?new i.c({graphQLErrors:s}):void 0;if(u===f.current.mutationId&&!d.ignoreResults){var v={called:!0,loading:!1,data:c,error:p,client:n};f.current.isMounted&&!(0,l.D)(f.current.result,v)&&m(f.current.result=v)}return null===(r=null===(a=f.current.options)||void 0===a?void 0:a.onCompleted)||void 0===r||r.call(a,t.data,d),null===(o=e.onCompleted)||void 0===o||o.call(e,t.data,d),t})).catch((function(t){var a,r,o,c;if(u===f.current.mutationId&&f.current.isMounted){var i={loading:!1,error:t,data:void 0,called:!0,client:n};(0,l.D)(f.current.result,i)||m(f.current.result=i)}if((null===(a=f.current.options)||void 0===a?void 0:a.onError)||d.onError)return null===(o=null===(r=f.current.options)||void 0===r?void 0:r.onError)||void 0===o||o.call(r,t,d),null===(c=e.onError)||void 0===c||c.call(e,t,d),{data:void 0,errors:t};throw t}))}),[]),v=(0,r.useCallback)((function(){f.current.isMounted&&m({called:!1,loading:!1,client:n})}),[]);return(0,r.useEffect)((function(){return f.current.isMounted=!0,function(){f.current.isMounted=!1}}),[]),[p,(0,a.pi)({reset:v},d)]}}}]);
//# sourceMappingURL=169.5b65ed23.chunk.js.map
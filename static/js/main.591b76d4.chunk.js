(this.webpackJsonphackathon=this.webpackJsonphackathon||[]).push([[0],{194:function(e){e.exports=JSON.parse('{"CONTRACT_ADDRESS":"","SCAN_LINK":"","NETWORK":{"NAME":"Avalanche","SYMBOL":"AVAX","ID":"43114"},"NFT_NAME":"Arcade Galaxy","SYMBOL":"AG","WHITE_MINT_SUPPLY":0,"GAS_LIMIT":200000,"MARKETPLACE":"Opeansea","MARKETPLACE_LINK":"https://opensea.io/","SHOW_BACKGROUND":false}')},289:function(e){e.exports=JSON.parse("{}")},362:function(e,t,n){},379:function(e,t){},382:function(e,t){},385:function(e,t){},389:function(e,t){},414:function(e,t){},416:function(e,t){},430:function(e,t){},432:function(e,t){},461:function(e,t){},463:function(e,t){},552:function(e,t){},553:function(e,t){},674:function(e,t,n){"use strict";n.r(t);var i,r,a,c,o,d,s,l,h,b,x=n(0),p=n(62),j=n.n(p),g=(n(362),n(29)),m=n(26),u=n(66),O=n(95),w=n(3),f=n.n(w),v=(n(673),n(143),n(307),n(128)),y=n(308),k=n(34),C={loading:!1,account:null,web3:null,errorMsg:""},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(k.a)(Object(k.a)({},C),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(k.a)(Object(k.a)({},e),{},{loading:!1,account:t.payload.account,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(k.a)(Object(k.a)({},C),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(k.a)(Object(k.a)({},e),{},{account:t.payload.account});default:return e}},S={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(k.a)(Object(k.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(k.a)(Object(k.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(k.a)(Object(k.a)({},S),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},E=Object(v.b)({blockchain:A,data:N}),T=[y.a],z=Object(v.c)(v.a.apply(void 0,T)),_=(Object(v.d)(E,z),n(289),n(194),m.a.div(i||(i=Object(g.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"}))),I=(m.a.div(r||(r=Object(g.a)(["\n  height: 8px;\n  width: 8px;\n"]))),m.a.div(a||(a=Object(g.a)(["\n  height: 16px;\n  width: 16px;\n"])))),M=(m.a.div(c||(c=Object(g.a)(["\n  height: 24px;\n  width: 24px;\n"]))),m.a.div(o||(o=Object(g.a)(["\n  height: 32px;\n  width: 32px;\n"]))),m.a.div(d||(d=Object(g.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"}))),W=(m.a.p(s||(s=Object(g.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),m.a.p(l||(l=Object(g.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),m.a.p(h||(h=Object(g.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"]))),m.a.div(b||(b=Object(g.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n.p+"static/media/landing.83e2d660.jpg"),L=n(36),R=n(292),D=n(293),P=n(296),B=n(304),F=n(294),H=n(107),U=n(311),Q=(n(645),n(312)),G=new U.a({url:"https://rpc.ankr.com/avalanche-c",appName:"AG"}),K={injected:new Q.a({}),coinbaseWallet:G},Z=n(13);function J(e){var t=e.isOpen,n=e.closeModal,i=Object(H.b)().activate;return Object(Z.jsxs)(B.a,{isOpen:t,onClose:n,isCentered:!0,children:[Object(Z.jsx)(B.f,{}),Object(Z.jsxs)(B.d,{w:"300px",children:[Object(Z.jsx)(B.e,{children:"Select Wallet"}),Object(Z.jsx)(B.c,{_focus:{boxShadow:"none"}}),Object(Z.jsx)(B.b,{paddingBottom:"1.5rem",children:Object(Z.jsx)(R.c,{children:Object(Z.jsx)(D.a,{variant:"outline",onClick:function(){var e;i(K.coinbaseWallet),e="coinbaseWallet",window.localStorage.setItem("provider",e),n()},w:"100%",children:Object(Z.jsxs)(R.a,{w:"100%",justifyContent:"center",children:[Object(Z.jsx)(F.a,{src:"/cbw.png",alt:"Coinbase Wallet Logo",width:25,height:25,borderRadius:"3px"}),Object(Z.jsx)(R.b,{children:"Coinbase Wallet"})]})})})})]})]})}var V,X,Y,q,$,ee,te,ne,ie=n(295),re={"0xa86a":{chainId:"0xa86a",rpcUrls:["https://api.avax.network/ext/bc/C/rpc"],chainName:"Avalanche Network",nativeCurrency:{name:"AVAX",decimals:18,symbol:"AVAX"},blockExplorerUrls:["https://cchain.explorer.avax.network/"],iconUrls:[""]}},ae=function(e){if(!e)return"No Account";var t=e.match(/^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/);return t?"".concat(t[1],"\u2026").concat(t[2]):e},ce=function(e){return"0x"+Number(e).toString(16)},oe=m.a.button(V||(V=Object(g.a)(["\n  ",";\n"])),{height:"50px",width:"200px",":hover":{"--tw-text-opacity":"1",color:"rgba(209, 213, 219, var(--tw-text-opacity))"},borderRadius:"9999px",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"700",fontSize:"0.875rem",lineHeight:"1.25rem",textShadow:"#000 1px 0 10px;",letterSpacing:"0.025em",fontFamily:"Source Sans Pro, sans-serif",backgroundImage:"linear-gradient(to right, var(--tw-gradient-stops))","--tw-gradient-from":"#8b5cf6","--tw-gradient-stops":"var(--tw-gradient-from), var(--tw-gradient-to, rgba(139, 92, 246, 0))","--tw-gradient-to":"#ec4899","--tw-bg-opacity":"0","@media (min-width: 1024px)":{fontSize:"1.25rem",lineHeight:"1.75rem"},"@media (min-width: 1280px)":{height:"5vw",width:"15vw",fontSize:"1.5rem",lineHeight:"2rem"}}),de=m.a.p(X||(X=Object(g.a)(["\n  ",";\n"])),{fontWeight:"700",fontSize:"1.25rem",lineHeight:"1.75rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",textShadow:"#fff 1px 0 10px;",display:"flex",justifyContent:"center",fontFamily:"Source Sans Pro, sans-serif",borderRadius:"0.5rem"}),se=(m.a.button(Y||(Y=Object(g.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),m.a.button(q||(q=Object(g.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),m.a.div($||($=Object(g.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),m.a.img(ee||(ee=Object(g.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),m.a.img(te||(te=Object(g.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 100px;\n  @media (min-width: 400px) {\n    width: 700px;\n  }\n  @media (min-width: 900px) {\n    width: 400px;\n  }\n  @media (min-width: 1000px) {\n    width: 600px;\n  }\n  transition: width 0.5s;\n"]))));m.a.a(ne||(ne=Object(g.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var le,he,be=function(){var e=Object(L.c)(),t=e.isOpen,n=e.onOpen,i=e.onClose,r=Object(H.b)(),a=r.library,c=r.chainId,o=r.account,d=(r.activate,r.deactivate),s=r.active,l=Object(x.useState)(""),h=Object(O.a)(l,2),b=(h[0],h[1]),p=Object(x.useState)(""),j=Object(O.a)(p,2),g=(j[0],j[1]),m=Object(x.useState)(void 0),w=Object(O.a)(m,2),v=w[0],y=w[1],k=Object(x.useState)(""),C=Object(O.a)(k,2),A=(C[0],C[1]),S=Object(x.useState)(""),N=Object(O.a)(S,2),E=(N[0],N[1],Object(x.useState)()),T=Object(O.a)(E,2),z=(T[0],T[1]),B=function(){var e=Object(u.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.provider.request({method:"wallet_switchEthereumChain",params:[{chainId:ce(v)}]});case 3:e.next=16;break;case 5:if(e.prev=5,e.t0=e.catch(0),4902!==e.t0.code){e.next=16;break}return e.prev=8,e.next=11,a.provider.request({method:"wallet_addEthereumChain",params:[re[ce(v)]]});case 11:e.next=16;break;case 13:e.prev=13,e.t1=e.catch(8),g(e.t1);case 16:case"end":return e.stop()}}),e,null,[[0,5],[8,13]])})));return function(){return e.apply(this,arguments)}}();return Object(Z.jsx)(_,{children:Object(Z.jsxs)(M,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},children:[Object(Z.jsx)(se,{alt:"logo",src:W}),Object(Z.jsx)(I,{}),s?Object(Z.jsx)(oe,{onClick:function(){window.localStorage.setItem("provider",void 0),y(""),A(""),b(""),z(void 0),d()},children:"Disconnect"}):Object(Z.jsx)(oe,{onClick:n,children:"Connect Wallet"}),Object(Z.jsxs)(R.c,{justifyContent:"center",alignItems:"center",padding:"10px 0",children:[Object(Z.jsxs)(R.a,{children:[Object(Z.jsx)(de,{children:"Connection Status: "}),s?Object(Z.jsx)(de,{children:"Connection"}):Object(Z.jsx)(de,{children:"Disconnection"})]}),Object(Z.jsx)(ie.a,{label:o,placement:"right",children:Object(Z.jsx)(de,{children:"Account: ".concat(ae(o))})}),Object(Z.jsx)(de,{children:"Network ID: ".concat(c||"No Network")})]}),s&&Object(Z.jsxs)(R.c,{children:[Object(Z.jsx)(D.a,{onClick:B,isDisabled:!v,children:"Switch Network"}),Object(Z.jsxs)(P.a,{className:"text-white bg-white",placeholder:"Select network",onChange:function(e){var t=e.target.value;y(Number(t))},children:[Object(Z.jsx)("option",{value:"43114",children:"Fuji"}),Object(Z.jsx)("option",{value:"43113",children:"Avalanche"})]})]}),Object(Z.jsx)(J,{isOpen:t,closeModal:i})]})})},xe=n(56),pe=n(314),je=n(313),ge={bmBurgerButton:{position:"absolute",width:"20px",height:"20px",right:"42px",top:"28px"},bmBurgerBars:{background:"#00fff7"},bmBurgerBarsHover:{background:"rgba(0, 0, 0, 0)"},bmCrossButton:{height:"24px",width:"24px"},bmCross:{background:"#bdc3c7"},bmMenuWrap:{position:"fixed",width:"80%",height:"100%",top:"0px"},bmMenu:{background:"#373a47",padding:"2.5em 1.5em 0",fontSize:"1.15em"},bmMorphShape:{fill:"#373a47"},bmItemList:{color:"#b8b7ad",padding:"0.8em"},bmItem:{display:"inline-block"},bmOverlay:{background:"rgba(0, 0, 0, 0.3)"}},me=n.p+"static/media/logo.ab6a3eca.png",ue=m.a.div(le||(le=Object(g.a)(["\n \n  ",";   \n \n"])),{width:"100vw",display:"flex",height:"10vh",marginTop:"0.5rem",borderWidth:"0px",margin:"0px",padding:"0px",alignItems:"center",alignSelf:"center",justifyContent:"center",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"repeat","@media (min-width: 1024px)":{paddingLeft:"1.5rem",paddingRight:"1.5rem"}}),Oe=m.a.ul({listStyleType:"none",width:"100%",height:"auto",display:"flex",justifyContent:"center",alignItems:"center",alignSelf:"center","@media (min-width: 1024px)":{width:"auto",height:"100%"}}),we=m.a.li({display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100%","--tw-text-opacity":"1",color:"rgba(0, 255, 247, var(--tw-text-opacity))",cursor:"pointer",fontWeight:"700",fontSize:"1.125rem",lineHeight:"1.75rem",transitionProperty:"background-color, border-color, color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-text-opacity":"1",color:"rgba(229, 231, 235, var(--tw-text-opacity))"},boxSizing:"content-box",marginLeft:"1.5rem",marginRight:"1.5rem",fontFamily:"Source Sans Pro, sans-serif",letterSpacing:"0.025em",textShadow:"#00fff7 1px 0 10px;","@media (min-width: 1024px)":{marginRight:"2rem",marginBottom:"0px"}}),fe=m.a.ul({width:"100%",marginLeft:"auto",marginRight:"auto","@media (min-width: 380px)":{maxWidth:"380px"},"@media (min-width: 420px)":{maxWidth:"420px"},"@media (min-width: 550px)":{maxWidth:"550px"},"@media (min-width: 640px)":{maxWidth:"640px"},"@media (min-width: 760px)":{maxWidth:"760px"},"@media (min-width: 960px)":{maxWidth:"960px"},"@media (min-width: 1024px)":{maxWidth:"1024px",visibility:"visible"},"@media (min-width: 1280px)":{maxWidth:"1280px"},"@media (min-width: 1536px)":{maxWidth:"1536px"},display:"flex",flexWrap:"nowrap",justifyContent:"flex-end",alignItems:"center",visibility:"hidden"}),ve=m.a.button({display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100%","--tw-text-opacity":"1",color:"rgba(0, 255, 247, var(--tw-text-opacity))",cursor:"pointer",fontWeight:"700",fontSize:"1.125rem",lineHeight:"1.75rem",transitionProperty:"background-color, border-color, color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-text-opacity":"1",color:"rgba(229, 231, 235, var(--tw-text-opacity))"},boxSizing:"content-box",marginLeft:"0.5rem",marginRight:"0.5rem",textShadow:"#00fff7 1px 0 10px;"});function ye(){var e=Object(pe.useMediaQuery)({maxWidth:1024}),t=Object(Z.jsxs)(Oe,{children:[Object(Z.jsx)(we,{children:Object(Z.jsx)(xe.Link,{to:"NFT",children:"NFT"})}),Object(Z.jsx)(we,{children:Object(Z.jsx)(xe.Link,{to:"Roadmap",children:"ROADMAP"})}),Object(Z.jsx)(we,{children:Object(Z.jsx)(xe.Link,{to:"Team",children:"TEAM"})}),Object(Z.jsx)(we,{children:Object(Z.jsx)(xe.Link,{to:"About",children:"ABOUT"})}),Object(Z.jsx)(we,{children:Object(Z.jsx)(xe.Link,{to:"FAQ",children:"FAQ"})}),Object(Z.jsx)(we,{children:Object(Z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://drive.google.com/file/d/1HRdnfppC69s_GPrbLFQg4anrxQsDVjG-/view?usp=sharing",children:"WHITEPAPER"})}),Object(Z.jsx)(we,{children:"OPENSEA"})]}),n=Object(Z.jsxs)(Oe,{children:[Object(Z.jsx)(we,{children:Object(Z.jsx)(xe.Link,{to:"NFT",children:"NFT"})}),Object(Z.jsx)(we,{children:Object(Z.jsx)(xe.Link,{to:"Roadmap",children:"ROADMAP"})}),Object(Z.jsx)(we,{children:Object(Z.jsx)(xe.Link,{to:"Team",children:"TEAM"})}),Object(Z.jsx)(we,{children:Object(Z.jsx)(xe.Link,{to:"About",children:"ABOUT"})}),Object(Z.jsx)(we,{children:Object(Z.jsx)(xe.Link,{to:"FAQ",children:"FAQ"})}),Object(Z.jsx)(we,{children:Object(Z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://drive.google.com/file/d/1HRdnfppC69s_GPrbLFQg4anrxQsDVjG-/view?usp=sharing",children:"WHITEPAPER"})}),Object(Z.jsx)(we,{children:"OPENSEA"}),Object(Z.jsx)(we,{children:Object(Z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/kekayinmao1",children:"TWITTER"})}),Object(Z.jsx)(we,{children:Object(Z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/ccod_nft/?utm_medium=copy_link",children:"INSTAGRAM"})}),Object(Z.jsx)(we,{children:Object(Z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://discord.com/invite/F4JH6Buvas",children:"DISCORD"})})]});return Object(Z.jsxs)(ue,{children:[Object(Z.jsxs)(fe,{children:[Object(Z.jsx)(ve,{children:Object(Z.jsx)("img",{src:me,alt:""})}),Object(Z.jsx)(ve,{children:Object(Z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-instagram",viewBox:"0 0 16 16",opacity:0,children:Object(Z.jsx)("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})})}),Object(Z.jsx)(ve,{children:Object(Z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-discord",viewBox:"0 0 16 16",opacity:0,children:Object(Z.jsx)("path",{d:"M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"})})})]}),e&&Object(Z.jsx)(je.slide,{class:"bg-[url('/images/topplanets.png')]",right:!0,styles:ge,children:n}),!e&&t,Object(Z.jsxs)(fe,{children:[Object(Z.jsx)(ve,{children:Object(Z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/kekayinmao1",children:Object(Z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-twitter",viewBox:"0 0 16 16",children:Object(Z.jsx)("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})})})}),Object(Z.jsx)(ve,{children:Object(Z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/ccod_nft/?utm_medium=copy_link",children:Object(Z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-instagram",viewBox:"0 0 16 16",children:Object(Z.jsx)("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})})})}),Object(Z.jsx)(ve,{children:Object(Z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://discord.com/invite/F4JH6Buvas",children:Object(Z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-discord",viewBox:"0 0 16 16",children:Object(Z.jsx)("path",{d:"M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"})})})})]})]})}var ke=m.a.div(he||(he=Object(g.a)(["\n  ",";\n"])),{display:"flex",flexDirection:"column",width:"100vw",height:"auto",backgroundSize:"cover",backgroundAttachment:"local","--tw-bg-opacity":"1",backgroundColor:"rgba(0, 9, 34, var(--tw-bg-opacity))",overflowX:"hidden"});var Ce=function(){return Object(Z.jsxs)(ke,{children:[Object(Z.jsx)(ye,{}),Object(Z.jsx)(be,{})]})},Ae=n(105),Se=n(317),Ne=document.getElementById("root");j.a.render(Object(Z.jsx)(x.StrictMode,{children:Object(Z.jsx)(Ae.a,{children:Object(Z.jsx)(H.a,{getLibrary:function(e){var t=new Se.a.providers.Web3Provider(e);return t.pollingInterval=8e3,t},children:Object(Z.jsx)(Ce,{})})})}),Ne)}},[[674,1,2]]]);
//# sourceMappingURL=main.591b76d4.chunk.js.map
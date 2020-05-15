(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[9],{112:function(a,e,t){a.exports=t(150)},146:function(a,e,t){},150:function(a,e,t){"use strict";t.r(e);var n=t(31),r=t(79),i=t(89),c=t.n(i),o=t(60),s=t.n(o),d=t(0),l=t.n(d),u=t(172),h=t(162);function m(){var a=Object(h.a)("language","english"),e=Object(n.a)(a,2),t=e[0],i=e[1],o=Object(u.a)().i18n;return Object(d.useEffect)((function(){o&&o.changeLanguage(t)}),[o,t]),l.a.createElement("div",{className:"LanguageSwitcher"},l.a.createElement(s.a,null,l.a.createElement(c.a,{as:"summary",className:"button"},r[t]),l.a.createElement(s.a.Modal,{className:"select-menu-modal"},l.a.createElement(s.a.List,{className:"select-menu-list"},Object.entries(r).map((function(a){var e=Object(n.a)(a,2),t=e[0],r=e[1];return l.a.createElement(s.a.Item,{key:t,className:"select-menu-item",onClick:function(){i(t)}},r)}))))))}var p=t(94),g=t(164),b=t(165),f=t(166),j=t(167),y=t(168),T=t(169),v=t(170),D=t(33),O=t(163),E=t(171),k=t(99),w=function(a){return{style:{stroke:window.location.pathname===a?"#4c75f2":""}}};function N(a){a.expand;var e=a.pages,t=a.setExpand,n=a.darkMode,r=a.setIsThemeSet,i=a.setDarkMode,c=Object(d.useRef)(null),o=Object(u.a)().t;return Object(k.a)((function(){Object(p.a)({targets:c.current,translateX:"10.5rem",easing:"easeOutExpo",duration:250})})),l.a.createElement("div",{className:"expand",ref:c,onMouseLeave:function(){t(!1)}},e.map((function(a,e){return!0===a.showInNavbar?l.a.createElement(D.b,{to:a.pageLink,key:e,onClick:function(){t(!1)}},l.a.createElement("span",(n=a.pageLink,r=a.animationDelayForNavbar,{className:"fadeInUp ".concat(window.location.pathname===n?"focused":""),style:{animationDelay:"".concat(r,"s")}}),o(a.displayName))):null;var n,r})),window.innerWidth<768&&l.a.createElement("div",{className:"fadeInUp",style:{animationDelay:"0.9s"},onClick:function(){i((function(a){return!a})),r(!0)}},l.a.createElement("div",null,n?l.a.createElement(g.a,{color:"#ffc107"}):l.a.createElement(b.a,null))),l.a.createElement("div",{className:"expand-bottom fadeInUp",style:{animationDelay:"1s"}},l.a.createElement("h5",null,o("A crowdsourced initiative."))))}var M=function(a){var e=a.pages,t=a.darkMode,r=a.setDarkMode,i=Object(d.useState)(!1),c=Object(n.a)(i,2),o=c[0],s=c[1],p=Object(h.a)("isThemeSet",!1),k=Object(n.a)(p,2),M=(k[0],k[1]),A=Object(u.a)().t;Object(O.a)(o);var S=Object(E.a)();return l.a.createElement("div",{className:"Navbar"},l.a.createElement(m,null),window.innerWidth>769&&l.a.createElement("div",{className:"navbar-left",onClick:function(){r((function(a){return!a})),M(!0)}},t?l.a.createElement(g.a,{color:"#ffc107"}):l.a.createElement(b.a,null)),l.a.createElement("div",{className:"navbar-middle"},l.a.createElement(D.b,{to:"/",onClick:function(){s(!1)}},"Covid19",l.a.createElement("span",null,"India"))),l.a.createElement("div",{className:"navbar-right",onClick:function(){s(!o)},onMouseEnter:function(){window.innerWidth>769&&s(!0)}},S.width<769&&l.a.createElement("span",null,A(o?"Close":"Menu")),S.width>769&&l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,l.a.createElement(D.b,{to:"/"},l.a.createElement(f.a,w("/")))),l.a.createElement("span",null,l.a.createElement(D.b,{to:"/demographics"},l.a.createElement(j.a,w("/demographics")))),l.a.createElement("span",null,l.a.createElement(D.b,{to:"/deepdive"},l.a.createElement(y.a,w("/deepdive")))),l.a.createElement("span",null,l.a.createElement(D.b,{to:"/essentials"},l.a.createElement(T.a,w("/essentials")))),l.a.createElement("span",null,l.a.createElement(D.b,{to:"/about"},l.a.createElement(v.a,w("/about")))))),o&&l.a.createElement(N,{expand:o,pages:e,setExpand:s,darkMode:t,setIsThemeSet:M,setDarkMode:r}))},A=t(46);function S(){var a=Object(A.h)().pathname;return Object(d.useEffect)((function(){window.scrollTo(0,0)}),[a]),null}var F=t(87),_=(t(146),Object(d.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(16),t.e(6)]).then(t.bind(null,616))}))),P=Object(d.lazy)((function(){return Promise.all([t.e(0),t.e(12),t.e(3)]).then(t.bind(null,614))})),L=Object(d.lazy)((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,606))})),C=Object(d.lazy)((function(){return Promise.all([t.e(0),t.e(13),t.e(7)]).then(t.bind(null,618))})),I=Object(d.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(14),t.e(8)]).then(t.bind(null,617))})),H=Object(d.lazy)((function(){return Promise.all([t.e(0),t.e(2),t.e(15),t.e(4)]).then(t.bind(null,619))})),R={"@context":"http://schema.org/","@type":"NGO",name:"Coronavirus Outbreak in India: Latest Map and Case Count",alternateName:"COVID-19 Tracker",url:"https://www.covid19india.org/",image:"https://www.covid19india.org/thumbnail.png"};var U=function(){var a=Object(u.a)().t,e=[{pageLink:"/",view:_,displayName:"Home",animationDelayForNavbar:.2,showInNavbar:!0},{pageLink:"/demographics",view:C,displayName:a("Demographics"),animationDelayForNavbar:.3,showInNavbar:!0},{pageLink:"/deepdive",view:P,displayName:a("Deep Dive"),animationDelayForNavbar:.4,showInNavbar:!0},{pageLink:"/essentials",view:H,displayName:a("Essentials"),animationDelayForNavbar:.5,showInNavbar:!0},{pageLink:"/about",view:L,displayName:a("About"),animationDelayForNavbar:.6,showInNavbar:!0},{pageLink:"/state/:stateCode",view:I,displayName:a("State"),animationDelayForNavbar:.7,showInNavbar:!1}],t=Object(h.a)("darkMode",!1),r=Object(n.a)(t,2),i=r[0],c=r[1],o=Object(h.a)("isThemeSet",!1),s=Object(n.a)(o,1)[0];return Object(k.a)((function(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&!s?c(!0):!window.matchMedia||window.matchMedia("(prefers-color-scheme: dark)").matches||s||c(!1)})),l.a.useEffect((function(){i?document.querySelector("body").classList.add("dark-mode"):document.querySelector("body").classList.remove("dark-mode")}),[i]),l.a.createElement("div",{className:"App"},l.a.createElement(F.a,null,l.a.createElement("script",{type:"application/ld+json"},JSON.stringify(R))),l.a.createElement(D.a,null,l.a.createElement(S,null),l.a.createElement(d.Suspense,{fallback:l.a.createElement("div",{className:"lazy"})},l.a.createElement(A.b,{render:function(a){var t=a.location;return l.a.createElement(l.a.Fragment,null,l.a.createElement(M,{pages:e,darkMode:i,setDarkMode:c}),l.a.createElement(A.d,{location:t},e.map((function(a,e){return l.a.createElement(A.b,{exact:!0,path:a.pageLink,render:function(t){var n=t.match;return l.a.createElement(a.view,{key:n.params.stateCode||e})},key:e})})),l.a.createElement(A.a,{to:"/"})))}}))))},J=t(72),K=t(43),z=t(103),B=t(105),x=t(54);K.a.use(B.a).use(z.a).use(x.f).init({debug:Object(J.l)()&&!0,lng:"english",fallbackLng:"english",keySeparator:!1,backend:{loadPath:"https://api.covid19india.org/locales/locale_{{lng}}.json",addPath:"http://localhost:9999/"},saveMissing:Object(J.l)()&&!0,interpolation:{escapeValue:!1}});K.a,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=t(86);t.n(G).a.render(l.a.createElement(d.Suspense,{fallback:""},l.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))},32:function(a,e,t){"use strict";t.d(e,"l",(function(){return s})),t.d(e,"a",(function(){return d})),t.d(e,"e",(function(){return l})),t.d(e,"d",(function(){return u})),t.d(e,"f",(function(){return h})),t.d(e,"c",(function(){return p})),t.d(e,"h",(function(){return g})),t.d(e,"j",(function(){return j})),t.d(e,"i",(function(){return y})),t.d(e,"k",(function(){return T})),t.d(e,"g",(function(){return v})),t.d(e,"b",(function(){return D}));var n=t(152),r=t(153),i=t(154),c=t(155),o=t(156),s=["confirmed","active","recovered","deaths"],d=["confirmed","active","recovered","deceased"],l={COUNTRY:"country",STATE:"state",DISTRICT:"district"},u={TOTAL:0,PER_MILLION:1,ZONE:2},h={STATES:0,DISTRICTS:1},m="/mini_maps",p={India:{geoDataFile:"".concat(m,"/india.json"),mapType:l.COUNTRY,graphObjectStates:"india-states",graphObjectDistricts:"india-districts-2019-734"},"Andaman and Nicobar Islands":{geoDataFile:"".concat(m,"/andamannicobarislands.json"),mapType:l.STATE,graphObjectDistricts:"andamannicobarislands_district"},"Arunachal Pradesh":{geoDataFile:"".concat(m,"/arunachalpradesh.json"),mapType:l.STATE,graphObjectDistricts:"arunachalpradesh_district"},"Andhra Pradesh":{geoDataFile:"".concat(m,"/andhrapradesh.json"),mapType:l.STATE,graphObjectDistricts:"andhrapradesh_district"},Assam:{geoDataFile:"".concat(m,"/assam.json"),mapType:l.STATE,graphObjectDistricts:"assam_district"},Bihar:{name:"Bihar",geoDataFile:"".concat(m,"/bihar.json"),mapType:l.STATE,graphObjectDistricts:"bihar_district"},Chandigarh:{name:"Chandigarh",geoDataFile:"".concat(m,"/chandigarh.json"),mapType:l.STATE,graphObjectDistricts:"chandigarh_district"},Chhattisgarh:{name:"Chhattisgarh",geoDataFile:"".concat(m,"/chhattisgarh.json"),mapType:l.STATE,graphObjectDistricts:"chhattisgarh_district"},"Dadra and Nagar Haveli and Daman and Diu":{geoDataFile:"".concat(m,"/dnh-and-dd.json"),mapType:l.STATE,graphObjectDistricts:"dnh-and-dd"},Delhi:{geoDataFile:"".concat(m,"/delhi.json"),mapType:l.STATE,graphObjectDistricts:"delhi_district"},Karnataka:{geoDataFile:"".concat(m,"/karnataka.json"),mapType:l.STATE,graphObjectDistricts:"karnataka_district"},Kerala:{geoDataFile:"".concat(m,"/kerala.json"),mapType:l.STATE,graphObjectDistricts:"kerala_district"},Goa:{geoDataFile:"".concat(m,"/goa.json"),mapType:l.STATE,graphObjectDistricts:"goa_district"},Gujarat:{geoDataFile:"".concat(m,"/gujarat.json"),mapType:l.STATE,graphObjectDistricts:"gujarat_district"},Haryana:{geoDataFile:"".concat(m,"/haryana.json"),mapType:l.STATE,graphObjectDistricts:"haryana_district"},"Himachal Pradesh":{geoDataFile:"".concat(m,"/himachalpradesh.json"),mapType:l.STATE,graphObjectDistricts:"himachalpradesh_district"},"Jammu and Kashmir":{geoDataFile:"".concat(m,"/jammukashmir.json"),mapType:l.STATE,graphObjectDistricts:"jammukashmir_district"},Jharkhand:{geoDataFile:"".concat(m,"/jharkhand.json"),mapType:l.STATE,graphObjectDistricts:"jharkhand_district"},Ladakh:{geoDataFile:"".concat(m,"/ladakh.json"),mapType:l.STATE,graphObjectDistricts:"ladakh_district"},Lakshadweep:{geoDataFile:"".concat(m,"/lakshadweep.json"),mapType:l.STATE,graphObjectDistricts:"lakshadweep_district"},"Madhya Pradesh":{geoDataFile:"".concat(m,"/madhyapradesh.json"),mapType:l.STATE,graphObjectDistricts:"madhyapradesh_district"},Maharashtra:{geoDataFile:"".concat(m,"/maharashtra.json"),mapType:l.STATE,graphObjectDistricts:"maharashtra_district"},Manipur:{geoDataFile:"".concat(m,"/manipur.json"),mapType:l.STATE,graphObjectDistricts:"manipur_district"},Meghalaya:{geoDataFile:"".concat(m,"/meghalaya.json"),mapType:l.STATE,graphObjectDistricts:"meghalaya_district"},Mizoram:{geoDataFile:"".concat(m,"/mizoram.json"),mapType:l.STATE,graphObjectDistricts:"mizoram_district"},Nagaland:{geoDataFile:"".concat(m,"/nagaland.json"),mapType:l.STATE,graphObjectDistricts:"nagaland_district"},Odisha:{geoDataFile:"".concat(m,"/odisha.json"),mapType:l.STATE,graphObjectDistricts:"odisha_district"},Puducherry:{geoDataFile:"".concat(m,"/puducherry.json"),mapType:l.STATE,graphObjectDistricts:"puducherry_district"},Punjab:{geoDataFile:"".concat(m,"/punjab.json"),mapType:l.STATE,graphObjectDistricts:"punjab_district"},Rajasthan:{geoDataFile:"".concat(m,"/rajasthan.json"),mapType:l.STATE,graphObjectDistricts:"rajasthan_district"},Sikkim:{geoDataFile:"".concat(m,"/sikkim.json"),mapType:l.STATE,graphObjectDistricts:"sikkim_district"},"Tamil Nadu":{geoDataFile:"".concat(m,"/tamilnadu.json"),mapType:l.STATE,graphObjectDistricts:"tamilnadu_district"},Telangana:{geoDataFile:"".concat(m,"/telangana.json"),mapType:l.STATE,graphObjectDistricts:"telangana_district"},Tripura:{geoDataFile:"".concat(m,"/tripura.json"),mapType:l.STATE,graphObjectDistricts:"tripura_district"},Uttarakhand:{geoDataFile:"".concat(m,"/uttarakhand.json"),mapType:l.STATE,graphObjectDistricts:"uttarakhand_district"},"Uttar Pradesh":{geoDataFile:"".concat(m,"/uttarpradesh.json"),mapType:l.STATE,graphObjectDistricts:"uttarpradesh_district"},"West Bengal":{geoDataFile:"".concat(m,"/westbengal.json"),mapType:l.STATE,graphObjectDistricts:"westbengal_district"}},g={AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli and Daman and Diu",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",LD:"Lakshadweep",PY:"Puducherry"},b=[],f={};Object.keys(g).map((function(a,e){return f[g[a]]=a,b.push({code:a,name:g[a]}),null}));var j=f,y=b,T={"Andaman and Nicobar Islands":397e3,"Andhra Pradesh":52221e3,"Arunachal Pradesh":1504e3,Assam:34293e3,Bihar:11952e4,Chandigarh:1179e3,Chhattisgarh:28724e3,"Dadra and Nagar Haveli and Daman and Diu":959e3,Delhi:19814e3,Goa:154e4,Gujarat:67936e3,Haryana:28672e3,"Himachal Pradesh":73e5,"Jammu and Kashmir":13203e3,Jharkhand:37403e3,Karnataka:65798e3,Kerala:35125e3,Ladakh:293e3,Lakshadweep:68e3,"Madhya Pradesh":82232e3,Maharashtra:122153e3,Manipur:3103e3,Meghalaya:3224e3,Mizoram:1192e3,Nagaland:215e4,Odisha:43671e3,Puducherry:1504e3,Punjab:29859e3,Rajasthan:77264e3,Sikkim:664e3,"Tamil Nadu":75695e3,Telangana:3722e4,Tripura:3992e3,"Uttar Pradesh":224979e3,Uttarakhand:11141e3,"West Bengal":96906e3,Total:13329e5},v={v1:{start:new Date(2020,0,1),end:new Date(2020,3,19)},v2:{start:new Date(2020,3,20),end:new Date(2020,3,26)},v3:{start:new Date(2020,3,27),end:new Date(2020,4,9)},v4:{start:new Date(2020,4,10),end:new Date}},D={english:null,hindi:n.a,telugu:r.a,kannada:null,gujarati:i.a,marathi:null,tamil:c.a,bengali:o.a,punjabi:null,malayalam:null,odiya:null}},72:function(a,e,t){"use strict";t.d(e,"l",(function(){return b})),t.d(e,"k",(function(){return f})),t.d(e,"d",(function(){return y})),t.d(e,"e",(function(){return T})),t.d(e,"f",(function(){return v})),t.d(e,"g",(function(){return D})),t.d(e,"i",(function(){return O})),t.d(e,"j",(function(){return E})),t.d(e,"r",(function(){return k})),t.d(e,"s",(function(){return w})),t.d(e,"h",(function(){return N})),t.d(e,"p",(function(){return M})),t.d(e,"o",(function(){return A})),t.d(e,"q",(function(){return S})),t.d(e,"m",(function(){return F})),t.d(e,"b",(function(){return _})),t.d(e,"c",(function(){return P})),t.d(e,"a",(function(){return L})),t.d(e,"n",(function(){return C}));var n=t(49),r=t(56),i=t(31),c=t(32),o=t(67),s=t(70),d=t(48),l=t(151),u=t(69),h=t(106),m=t(107),p=t(157),g=t(43),b=function(){return!1},f=function(a){return c.h[a.toUpperCase()]},j=function(){return Object(o.a)(Object(p.a)(new Date,"Asia/Kolkata"))},y=function(a){var e=a.slice(0,2),t=a.slice(3,5),n=a.slice(6,10),r=a.slice(11);return"".concat(n,"-").concat(t,"-").concat(e,"T").concat(r,"+05:30")},T=function(a){return Object(s.a)(Object(d.a)(a,"dd/MM/yyyy HH:mm:ss",new Date),"dd MMM, hh:mm b",{locale:c.b[g.a.language]})},v=function(a){return Object(s.a)(Object(d.a)(a,"dd/MM/yyyy",new Date),"dd MMM",{locale:c.b[g.a.language]})},D=function(a){return Object(l.a)(new Date(y(a)),new Date,{locale:c.b[g.a.language]})},O=function(a){return Object(s.a)(a,"dd MMMM",{locale:c.b[g.a.language]})},E=function(a){return Object(s.a)(a,"d MMM",{locale:c.b[g.a.language]})},k=function(a){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=["dailyconfirmed","dailydeceased","dailyrecovered","totalconfirmed","totaldeceased","totalrecovered"];return a.filter((function(a){return e.every((function(e){return a[e]}))&&a.date})).filter((function(a){return e.every((function(e){return Number(a[e])>=0}))})).filter((function(a){var e=j(),t=Object(d.a)(a.date,"dd MMMM",new Date(2020,0,1));return Object(u.a)(t,e)}))}(a).map((function(a,e){return{date:Object(d.a)(a.date,"dd MMMM",new Date(2020,0,1)),totalconfirmed:+a.totalconfirmed,totalrecovered:+a.totalrecovered,totaldeceased:+a.totaldeceased,dailyconfirmed:+a.dailyconfirmed,dailyrecovered:+a.dailyrecovered,dailydeceased:+a.dailydeceased,totalactive:+a.totalconfirmed-+a.totalrecovered-+a.totaldeceased,dailyactive:+a.dailyconfirmed-+a.dailyrecovered-+a.dailydeceased}}))};function w(a,e){return a.slice(-e)}var N=function(a){var e=new Intl.NumberFormat("en-IN");return isNaN(a)?"-":e.format(a)},M=function(a){for(var e=a.states_daily,t=Object.keys(c.h).reduce((function(a,e){return a[e]=[],a}),{}),n=j(),r=function(a){var r=Object(d.a)(e[a].date,"dd-MMM-yy",new Date);Object(u.a)(r,n)&&Object.entries(t).forEach((function(t){var n=Object(i.a)(t,2),c=n[0],o=n[1],s=c.toLowerCase(),d=o[o.length-1]||{},l=+e[a][s]||0,u=+e[a+1][s]||0,h=+e[a+2][s]||0,m=+e[a][s]+(d.totalconfirmed||0),p=+e[a+1][s]+(d.totalrecovered||0),g=+e[a+2][s]+(d.totaldeceased||0);o.push({date:r,dailyconfirmed:l,dailyrecovered:u,dailydeceased:h,totalconfirmed:m,totalrecovered:p,totaldeceased:g,totalactive:m-p-g,dailyactive:l-u-h})}))},o=0;o<e.length;o+=3)r(o);return t},A=function(a){var e=Object.keys(c.h).reduce((function(a,e){return a[e]=[],a}),{}),t=j();return a.forEach((function(a){var n=Object(d.a)(a.updatedon,"dd/MM/yyyy",new Date),r=+a.totaltested,i=c.j[a.state];if(i&&Object(u.a)(n,t)&&r){var o,s=e[i];if(s.length){var l=s[s.length-1];o=1===Object(h.a)(n,l.date)?r-l.totaltested:NaN}else o=NaN;s.push({date:n,totaltested:r,dailytested:o})}})),e},S=function(a){var e=[],t=j();return a.forEach((function(a){var n=Object(d.a)(a.updatetimestamp.split(" ")[0],"dd/MM/yyyy",new Date),r=+a.totalsamplestested;if(Object(u.a)(n,t)&&r){var i;if(e.length){var c=e[e.length-1];Object(m.a)(n,c.date)?(c.dailytested+=r-c.totaltested,c.totaltested=r):i=1===Object(h.a)(n,c.date)?r-c.totaltested:NaN}else i=NaN;e.push({date:n,totaltested:r,dailytested:i})}})),e},F=function(a,e){var t=Object.assign({},a),n=function(n){a.hasOwnProperty(n)&&(t[n]=a[n].map((function(a){var t=e[n].find((function(e){return Object(m.a)(a.date,e.date)}));return Object(r.a)({totaltested:null===t||void 0===t?void 0:t.totaltested,dailytested:null===t||void 0===t?void 0:t.dailytested},a)})))};for(var i in a)n(i);return t},_=function(a){return"string"!==typeof a?"":a.charAt(0).toUpperCase()+a.slice(1)},P=function(a){if("string"!==typeof a)return"";for(var e=a.toLowerCase().split(" "),t=0;t<e.length;t++)e[t]=_(e[t]);return e.join(" ")},L=function(a){return a.slice(0,1)+a.slice(1).replace(/[aeiou]/gi,"")},C=function(a,e){var t=a.reduce((function(a,e){return a[e.state]=a[e.state]||{},a[e.state][e.district]=e,a}),{});return Object.values(c.h).forEach((function(a){t[a]||(t[a]={})})),e?Object(n.a)({},e,t[e]):t}},79:function(a){a.exports=JSON.parse('{"english":"English","hindi":"\u0939\u093f\u0902\u0926\u0940","bengali":"\u09ac\u09be\u0982\u09b2\u09be","gujarati":"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0","kannada":"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1","malayalam":"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02","marathi":"\u092e\u0930\u093e\u0920\u0940","odiya":"\u0b13\u0b21\u0b3f\u0b06","punjabi":"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40","tamil":"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd","telugu":"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"}')}},[[112,10,11]]]);
//# sourceMappingURL=main.96067494.chunk.js.map
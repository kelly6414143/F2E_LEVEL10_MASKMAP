(this["webpackJsonpmask-map"]=this["webpackJsonpmask-map"]||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),l=a.n(o),c=(a(83),a(9)),i=a(156),s=a(172),m=a(65),u=a.n(m).a.create({baseURL:"https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json"}),d=a(162),p=a(163),g=a(173),b=a(176),f=a(174),E=a(159),h=a(161),y=a(47),v=a.n(y),k=Object(i.a)((function(e){return{root:{width:"100%",boxShadow:"none",borderRadius:"0px",position:"relative"},content:{padding:"0px",backgroundColor:"rgb(224, 226, 224)"},title:{fontSize:16,backgroundColor:"rgb(172, 189, 188)",padding:"10px"},formControl:{margin:e.spacing(1.5),minWidth:200},selectEmpty:{marginTop:e.spacing(2)},rotateIcon:{position:"absolute",bottom:0,right:10,backgroundColor:"gold",borderTopRightRadius:10,borderTopLeftRadius:10,padding:5,zIndex:1,cursor:"pointer"}}}));function O(e){var t=k(),a=Object(n.useState)([]),o=Object(c.a)(a,2),l=o[0],i=o[1],s=Object(n.useState)([]),m=Object(c.a)(s,2),y=m[0],O=m[1],j=Object(n.useState)(""),x=Object(c.a)(j,2),w=x[0],S=x[1],N=Object(n.useState)([]),C=Object(c.a)(N,2),I=C[0],L=C[1],z=Object(n.useState)(""),B=Object(c.a)(z,2),R=B[0],_=B[1],W=Object(n.useState)([]),T=Object(c.a)(W,2),A=T[0],F=T[1];Object(n.useEffect)((function(){M();var e=setInterval((function(){M()}),6e5);return function(){return clearInterval(e)}}),[]),Object(n.useEffect)((function(){var t=[];if(A.forEach((function(e){t.push(e.properties.town)})),t=t.filter((function(e,a){return t.indexOf(e)===a})),L(t),!(t.length<1)){_((function(e){return t.indexOf(e)<0?t[0]:e=e||t[0]}));var a=l.filter((function(e){return e.properties.town===t[0]}));e.getStoreList(a)}}),[w,l]);var D=function(e,t){var a=e.filter((function(e){return e.properties.county===t}));F(a),S(t)},M=function(){var e;document.getElementById("loading").style.display="block",u.get("",e).then((function(e){var t=e.data,a=[];i(t.features),t.features.forEach((function(e){e.geometry&&(e.geometry.position={lat:e.geometry.coordinates[1],lng:e.geometry.coordinates[0]}),a.push(e.properties.county)})),a=a.filter((function(e,t){return a.indexOf(e)===t})),O(a),S((function(e){return e=e||a[0],D(t.features,e),e})),document.getElementById("loading").style.display="none"}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:t.root},r.a.createElement(v.a,{id:"rotate",className:t.rotateIcon,onClick:function(e){return function(){var e=document.getElementById("rotate");e.style.paddingBottom="20px",setTimeout((function(){M(),e.style.paddingBottom="5px"}),200)}()}}),r.a.createElement(h.a,{className:t.content},r.a.createElement(d.a,{className:t.title,align:"center",gutterBottom:!0}," \u5065\u4fdd\u7279\u7d04\u6a5f\u69cb\u53e3\u7f69\u5269\u9918\u6578\u91cf\u660e\u7d30\u6e05\u55ae \u8cc7\u6599\u4f86\u6e90:\u885b\u670d\u90e8 "),r.a.createElement(d.a,{variant:"h5",component:"h2",align:"center"},r.a.createElement(p.a,{className:t.formControl},r.a.createElement(b.a,{shrink:!0,id:"demo-simple-select-placeholder-label-label"},"\u7e23\u5e02"),r.a.createElement(g.a,{labelId:"demo-simple-select-placeholder-label-label",id:"demo-simple-select-placeholder-label",value:w,onChange:function(e){var t=e.target.value;S(t),D(l,t)},displayEmpty:!0,className:t.selectEmpty},y.map((function(e,t){return r.a.createElement(f.a,{key:t,value:e},e)})))," ")," "),r.a.createElement(d.a,{variant:"h5",component:"h2",align:"center"},r.a.createElement(p.a,{className:t.formControl},r.a.createElement(b.a,{shrink:!0,id:"demo-simple-select-placeholder-label-label"},"\u5340\u57df"),r.a.createElement(g.a,{labelId:"demo-simple-select-placeholder-label-label",id:"demo-simple-select-placeholder-label",value:R,onChange:function(t){var a=t.target.value;_(a),function(t,a){var n=t.filter((function(e){return e.properties.town===a}));e.getStoreList(n)}(l,a)},displayEmpty:!0,className:t.selectEmpty},I.map((function(e,t){return r.a.createElement(f.a,{key:t,value:e},e)})))," ")," "))," "))}var j=a(164),x=a(48),w=a.n(x),S=a(67),N=a.n(S),C=a(68),I=a.n(C),L=a(175),z=a(165),B=a(120),R=a(49),_=a.n(R),W=a(167),T=a(171),A=a(170),F=a(166),D=a(168),M=a(169),Y=a(119),G=Object(i.a)((function(e){return{root:{width:"100%",boxShadow:"none",borderRadius:"0px",position:"relative"},content:{padding:"0px",backgroundColor:"rgb(238, 238, 236)",height:"calc(100vh - 240px)",overflowY:"scroll"},title:{fontSize:12,padding:"10px",marginBottom:0,backgroundColor:"rgb(238, 238, 236)"},subRoot:{position:"relative",margin:"15px auto",backgroundColor:"rgb(224, 226, 224)",maxWidth:350},lists:{display:"flex",alignItems:"center",wordSpace:"wrap"},icon:{marginRight:5},operateTime:{fontSize:12},subFooter:{paddingLeft:16,backgroundColor:"#d3dedc"},settingIcon:{position:"absolute",bottom:0,right:16,height:32,cursor:"pointer"},modal:{position:"absolute",height:260,overflowY:"scroll"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},table:{}}}));function J(e){var t=G(),a=Object(n.useState)(!1),o=Object(c.a)(a,2),l=o[0],i=o[1],s=Object(n.useState)({}),m=Object(c.a)(s,2),u=m[0],p=m[1],g=Object(n.useState)({}),b=Object(c.a)(g,2),f=b[0],y=b[1],v=Object(n.useState)([]),k=Object(c.a)(v,2),O=k[0],x=k[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:t.root},r.a.createElement(h.a,{className:t.content},e.storeList.map((function(e,a){var n=e.properties;return r.a.createElement(E.a,{key:a,className:t.subRoot},r.a.createElement(h.a,{className:t.subRootContent},r.a.createElement(d.a,{style:{fontSize:12,color:"grey",textAlign:"right"},color:"textSecondary",variant:"body1",gutterBottom:!0},"\u66f4\u65b0\u6642\u9593 : ",n.updated),r.a.createElement(d.a,{variant:"h5",component:"h2"},n.name," \xa0"),r.a.createElement(d.a,{className:t.operateTime,color:"textSecondary",variant:"body1",gutterBottom:!0},"\u71df\u696d\u6642\u9593 : \u8acb\u9ede\u64ca",r.a.createElement(w.a,{style:{fontSize:12}}),"\u67e5\u770b\u8a73\u7d30"),r.a.createElement(d.a,{className:t.lists,variant:"body2"},r.a.createElement(N.a,{className:t.icon})," ",n.address),r.a.createElement(d.a,{className:t.lists,variant:"body2"},r.a.createElement(I.a,{className:t.icon})," ",n.phone)," "),r.a.createElement(j.a,{className:t.subFooter,style:n.mask_adult+n.mask_child<100?n.mask_adult+n.mask_child===0?{backgroundColor:"rgb(202, 201, 199)"}:{backgroundColor:"rgb(221, 125, 90)"}:{}},r.a.createElement(d.a,{className:t.lists,variant:"body2"},n.mask_adult+n.mask_child===0?r.a.createElement(r.a.Fragment,null,"\u5df2\u552e\u5b8c"):r.a.createElement(r.a.Fragment,null,"\u5269\u9918 ",n.mask_adult+n.mask_child,"\uff0c\u6210\u4eba",n.mask_adult," / \u5152\u7ae5",n.mask_child),r.a.createElement(w.a,{className:t.settingIcon,onClick:function(e){return function(e,t){x((function(e){for(var a,n,r,o,l,c,i,s,m=[],u=t.available.split("\u3001").map((function(e){return e.indexOf("\u770b")>-1?"O":"X"})),d=0;d<u.length;d+=7){var p="\u4e0a\u5348";d>=14?p="\u665a\u4e0a":d>=7&&(p="\u4e2d\u5348"),m.push((a=p,n=u[d],r=u[d+1],o=u[d+2],l=u[d+3],c=u[d+4],i=u[d+5],s=u[d+6],{name:a,mon:n,tus:r,web:o,thur:l,fri:c,sat:i,sun:s}))}return m}));var a=window.screen.height<e.clientY+390?"calc(100vh - 270px)":e.clientY;i(!0),p(t),window.screen.width<500?y({x:"calc(50% - 125px)",y:"calc(100vh - 270px)",width:"250px"}):y({x:e.clientX-20,y:a,width:"500px"})}(e,n)}}))))})))),r.a.createElement(L.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:l,onClose:function(){i(!1)},closeAfterTransition:!0,BackdropComponent:z.a,BackdropProps:{timeout:500},style:{top:f.y,left:f.x,maxWidth:f.width}},r.a.createElement(B.a,{in:l},r.a.createElement("div",{className:t.paper},r.a.createElement("h2",{id:"transition-modal-title"},u.name," \xa0",r.a.createElement("span",{style:{fontSize:12,color:"grey"}},"(\u66f4\u65b0\u6642\u9593 : ",u.updated,")")),r.a.createElement("p",{id:"transition-modal-description"},"\u71df\u696d\u6642\u9593 : "),r.a.createElement(F.a,{component:Y.a},r.a.createElement(W.a,{className:t.table,size:"small","aria-label":"a dense table"},r.a.createElement(D.a,null,r.a.createElement(M.a,null,r.a.createElement(A.a,null,"\u71df\u696d\u6642\u9593"),r.a.createElement(A.a,{align:"right"},"\u4e00"),r.a.createElement(A.a,{align:"right"},"\u4e8c"),r.a.createElement(A.a,{align:"right"},"\u4e09"),r.a.createElement(A.a,{align:"right"},"\u56db"),r.a.createElement(A.a,{align:"right"},"\u4e94"),r.a.createElement(A.a,{align:"right"},"\u516d"),r.a.createElement(A.a,{align:"right"},"\u65e5"))),r.a.createElement(T.a,null,O.map((function(e){return r.a.createElement(M.a,{key:e.name},r.a.createElement(A.a,{component:"th",scope:"row"},e.name),r.a.createElement(A.a,{align:"right"},e.mon),r.a.createElement(A.a,{align:"right"},e.tus),r.a.createElement(A.a,{align:"right"},e.web),r.a.createElement(A.a,{align:"right"},e.thur),r.a.createElement(A.a,{align:"right"},e.fri),r.a.createElement(A.a,{align:"right"},e.sat),r.a.createElement(A.a,{align:"right"},e.sun))}))))),r.a.createElement("p",null,r.a.createElement(_.a,{style:{color:"gold",fontSize:12}}),r.a.createElement("span",null," \u6191\u5065\u4fdd\u5361\u5411\u5065\u4fdd\u7279\u7d04\u85e5\u5c40\u8cfc\u8cb7")),r.a.createElement("p",null,r.a.createElement(_.a,{style:{color:"gold",fontSize:12}}),r.a.createElement("span",null," \u4f9d\u8eab\u5206\u8b49\u672b\u4e00\u78bc\uff0c\u8cfc\u8cb7\u65e5\u671f\u898f\u5b9a\u5982\u4e0b\uff1a")),r.a.createElement("p",null,"\u5947\u6578 : \u661f\u671f\u4e00\u3001\u4e09\u3001\u4e94\u3001\u65e5"),r.a.createElement("p",null,"\u5076\u6578 : \u661f\u671f\u4e8c\u3001\u56db\u3001\u516d\u3001\u65e5")))))}var X=a(40);var q=Object(X.GoogleApiWrapper)({apiKey:"AIzaSyCM8oi4NY9IzC3ntycqsjplsDA75k196i8"})((function(e){var t=Object(n.useState)({}),a=Object(c.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)(!0),s=Object(c.a)(i,2),m=s[0],u=(s[1],Object(n.useState)({})),d=Object(c.a)(u,2),p=d[0],g=d[1],b=function(t,a,n){g(a),l(t.position);var r=e.storeList.filter((function(e){return e.properties.name===t.name}));e.getMarkerData(r)};return Object(n.useEffect)((function(){l(e.storeList[0]&&e.storeList[0].geometry&&e.storeList[0].geometry.position)}),[e.storeList]),r.a.createElement(X.Map,{google:e.google,zoom:17,style:{width:"calc(100% - 400px)",height:"100%"},initialCenter:o,center:o},e.storeList.map((function(e,t){var a=e.properties,n=e.geometry;return r.a.createElement(X.Marker,{key:t,id:t,position:{lat:n.coordinates[1],lng:n.coordinates[0]},onClick:b,name:a.name})})),r.a.createElement(X.InfoWindow,{visible:m,marker:p,onClose:function(){e.resetSearchData("reset")}},p?r.a.createElement("div",null,r.a.createElement("span",{style:{fontWeight:"bolder"}},p.name)):""))})),K=Object(i.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement((function(){var e=K(),t=Object(n.useState)([]),a=Object(c.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)([]),m=Object(c.a)(i,2),u=m[0],d=m[1],p=function(e){l("string"!==typeof e?e:u)};return r.a.createElement("div",{className:e.root},r.a.createElement("div",{id:"loading"},r.a.createElement("span",{className:"loding-title"},"Loading...")),r.a.createElement(s.a,{container:!0,style:{position:"absolute"}},r.a.createElement(s.a,{item:!0},r.a.createElement(O,{getStoreList:function(e){return function(e){l(e),d(e)}(e)}}),r.a.createElement(J,{storeList:o})),r.a.createElement(s.a,{item:!0,xs:!0},r.a.createElement(q,{storeList:o,getMarkerData:function(e){return p(e)},resetSearchData:function(e){return p(e)}}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},78:function(e,t,a){e.exports=a(118)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.c1040990.chunk.js.map
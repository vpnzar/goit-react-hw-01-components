(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__3kX2b",description:"Profile_description__gMooj",stats:"Profile_stats__3Vf5y",quantity:"Profile_quantity__1W-zO",label:"Profile_label__ACFvU"}},function(e,a,t){e.exports={item:"FriendItem_item__2U8aP",status:"FriendItem_status__2cHbF",online:"FriendItem_online__3BGCP",offline:"FriendItem_offline__drfUt",name:"FriendItem_name__2MuW8"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},,function(e,a,t){e.exports={statistics:"Statistics_statistics__30LJ6",title:"Statistics_title__2x3U4",statList:"Statistics_statList__3Sfnr"}},function(e,a,t){e.exports={item:"StatItem_item__1qa9b",label:"StatItem_label__1djQp",percentage:"StatItem_percentage__Nn8Gb"}},,,function(e,a,t){e.exports={friendList:"FriendList_friendList__3soDl"}},function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__1QkbB"}},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(4),c=t.n(n),i=t(8),s=t.n(i),r=(t(18),t(19),t(9)),d=t.n(r),l=t(2),o=t.n(l),b=t(0);function p(e){var a=e.id,t=e.isOnline,n=e.avatar,c=e.name;return Object(b.jsxs)("li",{className:o.a.item,id:a,children:[Object(b.jsx)("span",{className:"".concat(o.a.status,"\n          + ").concat(!0===t?o.a.online:o.a.offline)}),Object(b.jsx)("img",{className:o.a.avatar,src:n,alt:c,width:"48"}),Object(b.jsx)("p",{className:o.a.name,children:c})]})}p.defaultProps={name:"Friend",avatar:"https://data.whicdn.com/images/346390524/original.jpg"};var u=p;var m=function(e){var a=e.friends;return Object(b.jsx)("ul",{className:d.a.friendList,children:a.map((function(e){return Object(b.jsx)(u,{id:e.id,avatar:e.avatar,name:e.name,isOnline:e.isOnline},e.id)}))})},j=t(1),f=t.n(j);function h(e){var a=e.avatar,t=e.name,n=e.tag,c=e.location,i=e.stats;return Object(b.jsxs)("div",{className:f.a.profile,children:[Object(b.jsxs)("div",{className:f.a.description,children:[Object(b.jsx)("img",{src:a,alt:t,className:f.a.avatar,width:"120"}),Object(b.jsx)("p",{className:f.a.name,children:t}),Object(b.jsx)("p",{className:f.a.tag,children:"@"+n}),Object(b.jsx)("p",{className:f.a.location,children:c})]}),Object(b.jsxs)("ul",{className:f.a.stats,children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:f.a.label,children:"Followers"}),Object(b.jsx)("span",{className:f.a.quantity,children:i.followers})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:f.a.label,children:"Views"}),Object(b.jsx)("span",{className:f.a.quantity,children:i.views})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:f.a.label,children:"Likes"}),Object(b.jsx)("span",{className:f.a.quantity,children:i.likes})]})]})]})}h.defaultProps={name:"Unknown",avatar:"https://vectorified.com/images/user-account-icon-34.jpg"};var O=h,y=t(5),x=t.n(y),_=t(6),v=t.n(_);function g(){var e=function(){return 256*Math.random()>>0};return"rgb(".concat(e(),", ").concat(e(),", ").concat(e(),")")}var N=function(e){var a=e.id,t=e.label,n=e.percentage;return Object(b.jsxs)("li",{style:{backgroundColor:"".concat(g())},className:v.a.item,id:a,children:[Object(b.jsx)("span",{className:v.a.label,children:t}),Object(b.jsx)("span",{className:v.a.percentage,children:n+"%"})]})};var w=function(e){var a=e.title,t=e.stats;return Object(b.jsxs)("section",{className:x.a.statistics,children:[Object(b.jsx)("h2",{className:x.a.title,children:a}),Object(b.jsx)("ul",{className:x.a.statList,children:t.map((function(e){return Object(b.jsx)(N,{id:e.id,label:e.label,percentage:e.percentage},e.id)}))})]})};var U=function(e){var a=e.id,t=e.type,n=e.amount,c=e.currency;return Object(b.jsxs)("tr",{id:a,children:[Object(b.jsx)("th",{children:t}),Object(b.jsx)("th",{children:n}),Object(b.jsx)("th",{children:c})]})},P=t(10),S=t.n(P);var L=function(e){var a=e.items;return Object(b.jsxs)("table",{className:S.a.transactionHistory,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"TYPE"}),Object(b.jsx)("th",{children:"AMOUNT"}),Object(b.jsx)("th",{children:"CURRENCY"})]})}),Object(b.jsx)("tbody",{children:a.map((function(e){return Object(b.jsx)(U,{id:e.id,type:e.type,amount:e.amount,currency:e.currency},e.id)}))})]})},k=t(11),F=t(3),I=t(12),J=t(13);var A=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{friends:k}),Object(b.jsx)(O,{name:F.name,tag:F.tag,location:F.location,avatar:F.avatar,stats:F.stats}),Object(b.jsx)(w,{title:"UPLOAD STATS",stats:I}),Object(b.jsx)(L,{items:J})]})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.bc92978f.chunk.js.map
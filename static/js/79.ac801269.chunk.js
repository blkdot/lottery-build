(this.webpackJsonplottery=this.webpackJsonplottery||[]).push([[79],{504:function(t,n,e){"use strict";e.r(n);var r=e(3),o=(e(177),e(178));e(86),e(153),e(152);function a(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(s){return void e(s)}u.done?n(c):Promise.resolve(c).then(r,o)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)}))}}n.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.heading,e=t.description,a=t.icon,u=t.html,c=t.button;return function(){var t=i(Object(r.a)().mark((function t(i){var s,d,l,f;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=i.wallet,d=i.address,l=i.stateSyncStatus,f=i.stateStore,null!==d){t.next=5;break}if(!l.address){t.next=5;break}return t.next=5,new Promise((function(t){l.address&&l.address.then(t),setTimeout((function(){null===d&&t(void 0)}),500)}));case 5:if(f.address.get()||!s||!s.name){t.next=7;break}return t.abrupt("return",{heading:n||"Login and Authorize Your Wallet",description:e||"This dapp requires access to your wallet, please login and authorize access to your ".concat(s.name," accounts to continue."),eventCode:"loginFail",action:s.connect,icon:a||o.g,html:u,button:c});case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=79.ac801269.chunk.js.map
webpackJsonp([0],{"/TYz":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("8yiv"),r=n("Pmg7"),a=!1;var i=function(t){a||n("gznB")},c=n("VU/8")(s.a,r.a,!1,i,"data-v-1b011d9c",null);c.options.__file="pages\\index.vue",e.default=c.exports},"8yiv":function(t,e,n){"use strict";var s=n("Xxa5"),r=n.n(s),a=n("exGp"),i=n.n(a),c=n("fQ5t"),o=n.n(c);e.a={asyncData:function(){var t=i()(r.a.mark(function t(e){e.params;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.getEntries({content_type:"post",order:"-sys.createdAt"}).then(function(t){return console.warn("index entries: ",t),{posts:t.items}}).catch(function(t){return console.log(t)}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),head:{title:"Latest Posts"}}},Pmg7:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-offset-2 is-8"},[n("hr"),t._l(t.posts,function(e,s){return n("h2",{key:s,staticClass:"title is-4"},[n("nuxt-link",{attrs:{to:e.fields.slug}},[t._v("\n            "+t._s(e.fields.title)+"\n          ")])],1)}),n("h3",[t._v("Test H3")]),n("h4",[t._v("Test H4")])],2)])])])};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},gznB:function(t,e,n){var s=n("w/39");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("35f20158",s,!1,{sourceMap:!1})},"w/39":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"h4[data-v-1b011d9c]{font-size:42px;color:#fff}",""])}});
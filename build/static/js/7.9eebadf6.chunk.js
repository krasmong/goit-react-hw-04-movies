(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[7],{46:function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return l}));var r=n(44),a=n.n(r),c=n(45),i=n(49),s=n.n(i);function o(){return u.apply(this,arguments)}function u(){return(u=Object(c.a)(a.a.mark((function t(){var e,n,r,c=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},t.prev=2,t.next=5,s()(e,n);case 5:return r=t.sent,t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}function v(){return o("trending/movie/week")}function l(t){return o("search/movie?query=".concat(t))}s.a.defaults.baseURL="https://api.themoviedb.org/3",s.a.defaults.params={api_key:"91aea6be0a2d3e1853dbbebc31e6363d"}},48:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(0);var r=n(8),a=n(2),c=n(1),i=Object(a.f)((function(t){var e=t.movies,n=t.location;return Object(c.jsx)(c.Fragment,{children:e&&Object(c.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.title,i=t.name;t.release_date;return Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{to:{pathname:"/movies/".concat(e),state:{from:n}},children:a||i})},e)}))})})}))},97:function(t,e,n){"use strict";n.r(e);var r=n(44),a=n.n(r),c=n(45),i=n(40),s=n(41),o=n(43),u=n(42),v=n(0),l=n(46),p=n(18),f=n(48),h=n(1),d=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={movies:[]},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b();case 2:e=t.sent,this.setState({movies:e.data.results});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.movies;return Object(h.jsx)(p.a,{title:"Trending today",children:Object(h.jsx)(f.a,{movies:t})})}}]),n}(v.Component);e.default=d}}]);
//# sourceMappingURL=7.9eebadf6.chunk.js.map
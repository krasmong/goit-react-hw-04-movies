(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{46:function(e,t,r){"use strict";r.d(t,"b",(function(){return h})),r.d(t,"a",(function(){return l}));var n=r(44),a=r.n(n),o=r(45),c=r(49),s=r.n(c);function u(){return i.apply(this,arguments)}function i(){return(i=Object(o.a)(a.a.mark((function e(){var t,r,n,o=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",r=o.length>1&&void 0!==o[1]?o[1]:{},e.prev=2,e.next=5,s()(t,r);case 5:return n=e.sent,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function h(){return u("trending/movie/week")}function l(e){return u("search/movie?query=".concat(e))}s.a.defaults.baseURL="https://api.themoviedb.org/3",s.a.defaults.params={api_key:"91aea6be0a2d3e1853dbbebc31e6363d"}},48:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r(0);var n=r(8),a=r(2),o=r(1),c=Object(a.f)((function(e){var t=e.movies,r=e.location;return Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.title,c=e.name;e.release_date;return Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:{pathname:"/movies/".concat(t),state:{from:r}},children:a||c})},t)}))})})}))},93:function(e,t,r){e.exports={Searchbar:"Form_Searchbar__1vcat",form:"Form_form__3mgkE",formButton:"Form_formButton__2bDyr",formInput:"Form_formInput__2G-_8"}},99:function(e,t,r){"use strict";r.r(t);var n=r(44),a=r.n(n),o=r(94),c=r(45),s=r(17),u=r(40),i=r(41),h=r(43),l=r(42),f=r(0),m=r(78),p=r.n(m),b=r(46),v=r(95),d=r(96),j=(r(92),r(93)),y=r.n(j),O=r(1),g=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()?(e.props.onSubmit(e.state.query),e.setState({query:""})):d.a.warn("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443 \u043f\u043e\u0438\u0441\u043a\u0430")},e}return Object(i.a)(r,[{key:"render",value:function(){return Object(O.jsx)("div",{className:y.a.Searchbar,children:Object(O.jsxs)("form",{className:y.a.form,onSubmit:this.handleSubmit,children:[Object(O.jsx)("button",{type:"submit",className:y.a.formButton,children:Object(O.jsx)(v.a,{style:{marginRight:8}})}),Object(O.jsx)("input",{className:y.a.formInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:this.state.query,onChange:this.handleChange})]})})}}]),r}(f.Component),x=r(48),S=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={query:"",movies:null,error:null},e.handleSearch=function(t){console.log("zapros: ",t);var r=e.props,n=r.history,a=r.location;e.setState({query:t,movies:[],error:null}),n.push(Object(s.a)(Object(s.a)({},a),{},{search:"query=".concat(t)}))},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this.props.location,t=e.search;e.pathname&&this.setState({query:p.a.parse(t).query}),console.log("query: ",this.state.query)}},{key:"componentDidUpdate",value:function(e,t){t.serchQuery!==this.state.serchQuery&&this.fetchMovies()}},{key:"fetchMovies",value:function(){var e=Object(c.a)(a.a.mark((function e(){var t,r,n,c,s=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,r=t.query,n=t.error,c={query:r,error:n},r){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,b.a(c).then((function(e){var t=e.results;if(console.log(t),0===t.length)throw new Error("No matches were found! Try again!");s.setState({movies:Object(o.a)(t)})})).catch((function(e){return s.setState({error:e})}));case 6:e.sent;case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.error;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g,{onSubmit:this.handleSearch}),Object(O.jsx)(x.a,{movies:this.state.movies}),e&&Object(O.jsx)("h3",{children:e.message})]})}}]),r}(f.Component);t.default=S}}]);
//# sourceMappingURL=5.34d1ddcb.chunk.js.map
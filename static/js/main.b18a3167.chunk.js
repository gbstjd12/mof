(this.webpackJsonpmof=this.webpackJsonpmof||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},59:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),i=n.n(s),r=n(28),c=n.n(r),o=(n(37),n(9)),l=n(2);n(38);var u=function(e){return console.log(e),Object(a.jsxs)("div",{className:"about__container",children:[Object(a.jsx)("span",{children:"The movie of fame."}),Object(a.jsx)("span",{children:"Hwang Yun Seong"})]})},j=n(17),m=n.n(j),d=n(29),b=n(11),v=n(12),h=n(14),p=n(13),O=n(30),x=n.n(O),f=n(7),g=n.n(f);n(59);function y(e){var t=e.title,n=e.year,s=e.summary,i=e.poster,r=e.genres;return Object(a.jsx)("div",{className:"movie",children:Object(a.jsxs)(o.b,{to:{pathname:"/movie-detail",state:{year:n,title:t,summary:s,poster:i,genres:r}},children:[Object(a.jsx)("img",{src:i,alt:t,title:t}),Object(a.jsxs)("div",{className:"movie_data",children:[Object(a.jsx)("h3",{className:"movie_title",children:t}),Object(a.jsx)("h5",{className:"movie_year",children:n}),Object(a.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(a.jsx)("li",{className:"movie__genres",children:e},t)}))}),Object(a.jsxs)("p",{className:"movie_summary",children:[s.slice(0,180),"..."]})]})]})})}y.prototype={year:g.a.number.isRequired,title:g.a.string.isRequired,summary:g.a.string.isRequired,poster:g.a.string.isRequired,genres:g.a.arrayOf(g.a.string).isRequired};var _=y,N=(n(66),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var n,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("http://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:n.map((function(e){return Object(a.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(i.a.Component));n(67);var k=function(){return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(o.b,{to:"/",children:"\uc601\ud654 \ud648"}),Object(a.jsx)(o.b,{to:"/about",children:"\ub9cc\ub4e0\uc774"})]})},w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(a.jsx)("span",{children:e.state.title}):null}}]),n}(i.a.Component);var q=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(k,{}),Object(a.jsx)(l.a,{path:"/",exact:!0,component:N}),Object(a.jsx)(l.a,{path:"/about",component:u}),Object(a.jsx)(l.a,{path:"/movie-detail",component:w})]})};c.a.render(Object(a.jsx)(q,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.b18a3167.chunk.js.map
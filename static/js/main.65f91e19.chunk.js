(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),o=s.n(r),i=s(5),c=s(6),a=s(9),l=s(7),u=s(8),b=s(1),h=(s(14),s(15),s(2)),d=s.n(h),p=s(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var y=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={isReversed:!1,sortType:n.NONE},t.sortByAlphabet=function(){t.setState({sortType:n.ALPHABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state,e=t.sortType,s=t.isReversed,r=e===n.ALPHABET,o=e===n.LENGTH,i=e!==n.NONE||s,c=this.sortByAlphabet,a=this.sortByLength,l=this.reverse,b=this.reset,h=function(t,e){var s=e.sortType,r=e.isReversed,o=Object(u.a)(t);return s===n.LENGTH&&o.sort((function(t,e){return t.length-e.length})),s===n.ALPHABET&&o.sort((function(t,e){return t.localeCompare(e)})),r&&o.reverse(),o}(j,{sortType:e,isReversed:s});return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:d()("button is-info",{"is-light":!r}),onClick:c,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:d()("button is-success",{"is-light":!o}),onClick:a,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:d()("button is-warning",{"is-light":!s}),onClick:l,children:"Reverse"}),i&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:b,children:"Reset"})]}),Object(p.jsx)("ul",{children:Object(p.jsx)("ul",{children:h.map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(b.Component);o.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.65f91e19.chunk.js.map
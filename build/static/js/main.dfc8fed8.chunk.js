(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(9),r=n.n(o),c=(n(17),n(11)),s=n(10),u=n(3),d=n(4),l=n(6),h=n(5),m=n(7),b=n(1),p=n(2),v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={editing:!1},n.edit=n.edit.bind(Object(b.a)(Object(b.a)(n))),n.remove=n.remove.bind(Object(b.a)(Object(b.a)(n))),n.renderForm=n.renderForm.bind(Object(b.a)(Object(b.a)(n))),n.renderDisplay=n.renderDisplay.bind(Object(b.a)(Object(b.a)(n))),n.save=n.save.bind(Object(b.a)(Object(b.a)(n))),n.randomBetween=n.randomBetween.bind(Object(b.a)(Object(b.a)(n))),n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){this.style={right:this.randomBetween(0,window.innerWidth-150,"px"),top:this.randomBetween(0,window.innerHeight-150,"px"),transform:"rotate($(this.randomBetween(-25, 25, 'deg')))"}}},{key:"randomBetween",value:function(e,t,n){return e+Math.ceil(Math.random()*(t-e))+n}},{key:"componentDidUpdate",value:function(){var e;this.state.editing&&((e=this._newText).focus(),e.select())}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.children!==e.children||this.state!==t}},{key:"edit",value:function(){this.setState({editing:!0})}},{key:"remove",value:function(){this.props.onRemove(this.props.index)}},{key:"save",value:function(e){e.preventDefault(),this.props.onChange(this._newText.value,this.props.index),this.setState({editing:!1})}},{key:"renderForm",value:function(){var e=this;return i.a.createElement("div",{className:"note",style:this.style},i.a.createElement("form",{onSubmit:this.save},i.a.createElement("textarea",{ref:function(t){return e._newText=t},defaultValue:this.props.children}),i.a.createElement("button",{id:"save"},i.a.createElement(p.c,null))))}},{key:"renderDisplay",value:function(){return i.a.createElement("div",{className:"note",style:this.style},i.a.createElement("p",null,this.props.children),i.a.createElement("span",null,i.a.createElement("button",{onClick:this.edit,id:"edit"},i.a.createElement(p.a,null)),i.a.createElement("button",{onClick:this.remove,id:"remove"},i.a.createElement(p.d,null))))}},{key:"render",value:function(){return this.state.editing?this.renderForm():this.renderDisplay()}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={notes:[]},n.eachNote=n.eachNote.bind(Object(b.a)(Object(b.a)(n))),n.update=n.update.bind(Object(b.a)(Object(b.a)(n))),n.remove=n.remove.bind(Object(b.a)(Object(b.a)(n))),n.add=n.add.bind(Object(b.a)(Object(b.a)(n))),n.nextId=n.nextId.bind(Object(b.a)(Object(b.a)(n))),n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.props.count&&fetch("https://baconipsum.com/api/?type=all-meat&sentences=".concat(this.props.count)).then(function(e){return e.json()}).then(function(t){return t[0].split(". ").forEach(function(t){return e.add(t.substring(0,25))})})}},{key:"nextId",value:function(){return this.uniqueId=this.uniqueId||0,this.uniqueId++}},{key:"add",value:function(e){var t=this;this.setState(function(n){return{notes:Object(s.a)(n.notes).concat([{id:t.nextId(),note:e}])}})}},{key:"update",value:function(e,t){console.log("updating item at index",t,e),this.setState(function(n){return{notes:n.notes.map(function(n){return n.id!==t?n:Object(c.a)({},n,{note:e})})}})}},{key:"remove",value:function(e){console.log("removing item at",e),console.log(this.state.notes[e]),this.setState(function(t){return{notes:t.notes.filter(function(t){return t.id!==e})}})}},{key:"eachNote",value:function(e,t){return i.a.createElement(v,{key:e.id,index:e.id,onChange:this.update,onRemove:this.remove},e.note)}},{key:"render",value:function(){return i.a.createElement("div",{className:"board"},this.state.notes.map(this.eachNote),i.a.createElement("button",{onClick:this.add.bind(null,"New Note"),id:"add"},i.a.createElement(p.b,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(f,{count:50}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.dfc8fed8.chunk.js.map
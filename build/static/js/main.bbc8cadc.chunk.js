(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(7),s=n.n(i),r=(n(14),n(1)),c=n(2),u=n(4),l=n(3),h=n(5),d=(n(15),n(16),n(17),function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement("input",{type:"text",value:this.props.content,onChange:this.changeTitle.bind(this),onKeyPress:this.submit.bind(this)})}},{key:"changeTitle",value:function(t){this.props.onChange(t)}},{key:"submit",value:function(t){"Enter"===t.key&&this.props.onSubmit(t)}}]),e}(o.Component)),p=function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,this.props.todo.title)}}]),e}(o.Component),m=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={newTodo:"",todoList:[]},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"addTodo",value:function(t){this.state.todoList.push({id:f(),title:t.target.value,status:null,deleted:!1}),this.setState({newTodo:"",todoList:this.state.todoList})}},{key:"changeTitle",value:function(t){this.setState({newTodo:t.target.value,todoList:this.state.todoList})}},{key:"render",value:function(){var t=this.state.todoList.map(function(t,e){return a.a.createElement("li",{key:e},a.a.createElement(p,{todo:t}))});return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"\u8fd9\u662f\u6211\u7684\u5f85\u529e"),a.a.createElement("div",{className:"inputWrapper"},a.a.createElement(d,{content:this.state.newTodo,onChange:this.changeTitle.bind(this),onSubmit:this.addTodo.bind(this)})),a.a.createElement("ol",null,t))}}]),e}(o.Component),b=0;function f(){return b+=1}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.bbc8cadc.chunk.js.map
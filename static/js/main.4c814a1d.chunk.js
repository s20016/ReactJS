(this["webpackJsonpmain-react-app"]=this["webpackJsonpmain-react-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(1),c=a.n(s),i=a(9),r=a.n(i);a(16),a(17);function u(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"header1",children:"PROJECTS"}),Object(n.jsx)("p",{className:"header2",children:"ReactJS"})]})}var l=a(3),h=a(4),j=a(2),d=a(6),b=a(5),o=(a(18),function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).handleInput=function(t){var e=t.target.value;n.setState({userInput:e})},n.handleSave=function(t){var e=t.target.value;n.state.inputData.push(n.state.userInput),n.setState({inputData:n.state.inputData.concat(e)})},n.state={title:"Real Time Input",userInput:null,inputData:[]},n.handleInput=n.handleInput.bind(Object(j.a)(n)),n.handleSave=n.handleSave.bind(Object(j.a)(n)),n}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"P3",children:[Object(n.jsx)("h1",{children:this.state.title}),Object(n.jsxs)("div",{className:"P3-InputBox",children:[Object(n.jsx)("input",{type:"text",maxlength:"15",placeholder:"Enter something...",className:"P3-Input",value:this.state.userInput,onChange:this.handleInput}),Object(n.jsx)("button",{type:"button",onClick:this.handleSave,children:"Save"})]}),Object(n.jsx)("h3",{children:this.state.userInput}),Object(n.jsx)("br",{}),this.state.inputData.map((function(t,e){return Object(n.jsx)("p",{children:t},e)}))]})}}]),a}(c.a.Component)),p=a(8),O=a.n(p),x=a(10),m=(a(20),function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).handleJPY=function(t){var e=t.target.value,a=n.state.data.JPY;n.setState({jpyVal:e,usdVal:e*a.USD,phpVal:e*a.PHP})},n.handleUSD=function(t){var e=t.target.value,a=n.state.data.USD;n.setState({usdVal:e,jpyVal:e*a.JPY,phpVal:e*a.PHP})},n.handlePHP=function(t){var e=t.target.value,a=n.state.data.PHP;n.setState({phpVal:e,jpyVal:e*a.JPY,usdVal:e*a.USD})},n.state={jpyVal:"0",usdVal:"0",phpVal:"0",data:[]},n.handleJPY=n.handleJPY.bind(Object(j.a)(n)),n.handleUSD=n.handleUSD.bind(Object(j.a)(n)),n.handlePHP=n.handlePHP.bind(Object(j.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=Object(x.a)(O.a.mark((function t(){var e=this;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://s20016.github.io/ReactJS/data/rates.json",t.next=3,window.fetch("https://s20016.github.io/ReactJS/data/rates.json").then((function(t){return t.json()})).then((function(t){return e.setState({data:t})}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"P1",children:[Object(n.jsx)("h1",{children:this.state.data.title}),Object(n.jsxs)("div",{className:"inputBox",children:[Object(n.jsxs)("div",{className:"Set",children:[Object(n.jsx)("p",{className:"currency",children:"JPY"}),Object(n.jsx)("input",{type:"text",className:"P1-Input",value:this.state.jpyVal,onChange:this.handleJPY})]}),Object(n.jsxs)("div",{className:"Set",children:[Object(n.jsx)("p",{className:"currency",children:"USD"}),Object(n.jsx)("input",{type:"text",className:"P1-Input",value:this.state.usdVal,onChange:this.handleUSD})]}),Object(n.jsxs)("div",{className:"Set",children:[Object(n.jsx)("p",{className:"currency",children:"PHP"}),Object(n.jsx)("input",{type:"text",className:"P1-Input",value:this.state.phpVal,onChange:this.handlePHP})]})]})]})}}]),a}(c.a.Component)),v=(a(21),function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).handleHeight=function(t){var e=t.target.value;n.setState({userHeight:e})},n.handleWeight=function(t){var e=t.target.value;n.setState({userWeight:e})},n.handleSubmit=function(t){n.setState({userBMI:n.state.userWeight/(n.state.userHeight/100^2)}),console.log(n.state.userBMI)},n.state={title:"BMI Calculator",userWeight:"",userHeight:"",userBMI:"0"},n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"P2",children:[Object(n.jsx)("h1",{children:this.state.title}),Object(n.jsxs)("form",{className:"inputBox",onSubmit:this.handleSubmit,children:[Object(n.jsxs)("div",{className:"Set",children:[Object(n.jsx)("p",{className:"P2-P",children:"Height (cm):"}),Object(n.jsx)("input",{className:"P2-Input",type:"number",value:this.state.userHeight,onChange:this.handleHeight}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{className:"Set",children:[Object(n.jsx)("p",{className:"P2-P",children:"Weight (kg):"}),Object(n.jsx)("input",{className:"P2-Input",type:"number",value:this.state.userWeight,onChange:this.handleWeight}),Object(n.jsx)("br",{})]}),Object(n.jsx)("button",{type:"button",onClick:this.handleSubmit,children:"Calculate"})]}),Object(n.jsxs)("p",{className:"BMIResult",children:["BMI: ",this.state.userBMI]})]})}}]),a}(c.a.Component));function g(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("p",{className:"footer",children:"Projects by John Christian Tinio\nJanuary 2021"})})}function P(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(u,{}),Object(n.jsxs)("ul",{className:"container",children:[Object(n.jsx)(o,{}),Object(n.jsx)(m,{}),Object(n.jsx)(v,{})]}),Object(n.jsx)(g,{})]})}var f=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),c(t),i(t)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root")),f()}],[[22,1,2]]]);
//# sourceMappingURL=main.4c814a1d.chunk.js.map
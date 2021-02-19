(this["webpackJsonpmain-react-app"]=this["webpackJsonpmain-react-app"]||[]).push([[0],{38:function(t,e,a){},74:function(t,e,a){},87:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(10),i=a.n(c),r=(a(74),a(21)),l=a(22),h=a(25),u=a(23),j=(a(38),a(56)),d=a(17),o=a(123),b=a(58),p=a.n(b),O=a(4),v=function(t){Object(h.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).handleInput=function(t){var e=t.target.value;n.setState({userInput:e})},n.handleSave=function(t){var e=t.target.value;n.state.inputData.push(n.state.userInput),n.setState({inputData:n.state.inputData.concat(e)})},n.state={userInput:"",inputData:[]},n.handleInput=n.handleInput.bind(Object(d.a)(n)),n.handleSave=n.handleSave.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"P3",children:[Object(O.jsxs)("div",{className:"P3-MainTitle",children:[Object(O.jsx)("h1",{className:"P3-Header",children:"Real time input"}),Object(O.jsx)(p.a,{fontSize:"large"})]}),Object(O.jsx)("div",{className:"P3-InputBox",children:Object(O.jsx)(o.a,{variant:"filled",className:"P3-Input",placeholder:"Enter Something...",value:this.state.userInput,onChange:this.handleInput})}),Object(O.jsx)("h3",{className:"P3-Output",children:this.state.userInput}),this.state.inputData.map((function(t,e){return Object(O.jsx)("p",{className:"P3-History",children:t},e)}))]})}}]),a}(s.a.Component),m=a(53),f=a.n(m),x=a(59),g=a(125),P=a(121),S=a(60),N=a.n(S),I=function(t){Object(h.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).handleJPY=function(t){var e=t.target.value,a=n.state.data.JPY;n.setState({jpyVal:e,usdVal:e*a.USD,phpVal:e*a.PHP})},n.handleUSD=function(t){var e=t.target.value,a=n.state.data.USD;n.setState({usdVal:e,jpyVal:e*a.JPY,phpVal:e*a.PHP})},n.handlePHP=function(t){var e=t.target.value,a=n.state.data.PHP;n.setState({phpVal:e,jpyVal:e*a.JPY,usdVal:e*a.USD})},n.state={jpyVal:"0",usdVal:"0",phpVal:"0",data:[]},n.handleJPY=n.handleJPY.bind(Object(d.a)(n)),n.handleUSD=n.handleUSD.bind(Object(d.a)(n)),n.handlePHP=n.handlePHP.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=Object(x.a)(f.a.mark((function t(){var e=this;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://s20016.github.io/ReactJS/data/rates.json",t.next=3,window.fetch("https://s20016.github.io/ReactJS/data/rates.json").then((function(t){return t.json()})).then((function(t){return e.setState({data:t})}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"P1",children:[Object(O.jsxs)("div",{className:"P1-MainTitle",children:[Object(O.jsx)("h1",{className:"P1-Header",children:"converter"}),Object(O.jsx)(N.a,{fontSize:"large"})]}),Object(O.jsxs)("div",{className:"P1-InputBox",children:[Object(O.jsx)(P.a,{fullWidth:!0,variant:"filled",value:this.state.usdVal,onChange:this.handleUSD,startAdornment:Object(O.jsx)(g.a,{position:"start",children:"$"})}),Object(O.jsx)(P.a,{fullWidth:!0,variant:"filled",value:this.state.jpyVal,onChange:this.handleJPY,startAdornment:Object(O.jsx)(g.a,{position:"start",children:"\xa5"})}),Object(O.jsx)(P.a,{fullWidth:!0,variant:"filled",value:this.state.phpVal,onChange:this.handlePHP,startAdornment:Object(O.jsx)(g.a,{position:"start",children:"\u20b1"})})]})]})}}]),a}(s.a.Component),y=a(122),H=a(61),C=a.n(H),V=a(124),D=function(t){Object(h.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).handleHeight=function(t){var e=t.target.value;n.setState({userHeight:e})},n.handleWeight=function(t){var e=t.target.value;n.setState({userWeight:e})},n.handleSubmit=function(t){var e=n.state.userWeight/(n.state.userHeight/100^2),a=e<=18.5?"Underweight":18.5<e&&e<=24.9?"Normal":24.9<e&&e<=29.9?"Overweight":"Obesity";n.setState({userBMI:a})},n.state={title:"BMI Calculator",userWeight:"",userHeight:"",userBMI:"0"},n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"P2",children:[Object(O.jsxs)("div",{className:"P2-MainTitle",children:[Object(O.jsx)("h1",{className:"P2-Header",children:"BMI calculator"}),Object(O.jsx)(C.a,{fontSize:"large"})]}),Object(O.jsxs)(y.a,{fullWidth:!0,className:"P2-InputBox",onSubmit:this.handleSubmit,children:[Object(O.jsx)(o.a,{label:"Enter your height: cm",className:"Set",value:this.state.userHeight,onChange:this.handleHeight}),Object(O.jsx)(o.a,{label:"Enter your weight: kg",className:"Set",value:this.state.userWeight,onChange:this.handleWeight})]}),Object(O.jsx)(V.a,{className:"P2-Button",variant:"contained",color:"primary",onClick:this.handleSubmit,children:"Calculate"}),Object(O.jsxs)("h3",{className:"BMIResult",children:["BMI: ",this.state.userBMI]})]})}}]),a}(s.a.Component),B=a(62),J=a.n(B),M=function(t){Object(h.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).AppHeader=function(){return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("p",{className:"h1",children:"Projects"}),Object(O.jsx)("p",{className:"h2",children:"ReactJS"})]})},t.AppFooter=function(){return Object(O.jsx)("div",{className:"footer",children:Object(O.jsx)(j.a,{children:Object(O.jsx)(j.b,{to:{pathname:"https://github.com/s20016/ReactJS"},target:"_blank",children:Object(O.jsx)(J.a,{className:"logo"})})})})},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(this.AppHeader,{}),Object(O.jsxs)("div",{className:"ReactProjects",children:[Object(O.jsx)(v,{}),Object(O.jsx)(I,{}),Object(O.jsx)(D,{})]}),Object(O.jsx)(this.AppFooter,{})]})}}]),a}(s.a.Component),k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,127)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),c(t),i(t)}))};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(M,{})}),document.getElementById("root")),k()}},[[87,1,2]]]);
//# sourceMappingURL=main.b29d5464.chunk.js.map
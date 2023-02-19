(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(3),r=t.n(c),o=(t(13),t(1));t(15);var s=function(e){return n.a.createElement("div",{style:{height:"40px"}},e.alert&&n.a.createElement("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),": ",e.alert.msg,n.a.createElement("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})))};function i(e){var a={color:"dark"===e.Mode?"white":"#042743",backgroundColor:"dark"===e.Mode?"rgb(36 74 104)":"white"};return n.a.createElement("div",{className:"container mb-5"},n.a.createElement("br",null),n.a.createElement("h3",{style:{color:"dark"===e.Mode?"white":"#042743"}},"About TextUtils"),n.a.createElement("div",{className:"accordion",id:"accordionFlushExample"},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"flush-headingOne"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne"},"What is TextUtils?")),n.a.createElement("div",{id:"flush-collapseOne",className:"accordion-collapse collapse","aria-labelledby":"flush-headingOne","data-bs-parent":"#accordionFlushExample"},n.a.createElement("div",{className:"accordion-body",style:a},"TextUtils is a simple text editor which can be used to change the text from lowercase to uppercase or vice cersa, remove extra spaces in the paragraphes and copy the text to clipboard."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"flush-headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseTwo","aria-expanded":"false","aria-controls":"flush-collapseTwo"},"About the Creater")),n.a.createElement("div",{id:"flush-collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"flush-headingTwo","data-bs-parent":"#accordionFlushExample"},n.a.createElement("div",{className:"accordion-body",style:a},"This website is created by Anshu Raj, currently persuing Electrical Engineering from M.I.T. Muzaffarpur."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"flush-headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseThree","aria-expanded":"false","aria-controls":"flush-collapseThree"},"Future scope of this website")),n.a.createElement("div",{id:"flush-collapseThree",className:"accordion-collapse collapse","aria-labelledby":"flush-headingThree","data-bs-parent":"#accordionFlushExample"},n.a.createElement("div",{className:"accordion-body",style:a},"This website will be more enhaced using css. More button with different and unique commands will be added in future. Seperate page for About section will be added.")))))}function d(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.Mode," bg-").concat(e.Mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:""},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:""},"Home"))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.Mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.togglemode,type:"checkbox",id:"flexSwitchCheckDefault"})," ",n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"EnableDarkMode"))))))}d.defaultProptypes={title:"Title",aboutText:"About"};var m=function(e){var a=Object(l.useState)("Enter text here"),t=Object(o.a)(a,2),c=t[0],r=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"light"===e.Mode?"grey":"white"}},n.a.createElement("h1",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",style:{backgroundColor:"light"===e.Mode?"white":"#13466e",color:"light"===e.Mode?"black":"white"},value:c,onChange:function(e){r(e.target.value)},id:"myBox",rows:"8"})),n.a.createElement("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var a=c.toUpperCase();r(a),e.showAlert("Converted to uppercase","success")}},"Convert to uppercase"),n.a.createElement("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var a=c.toLowerCase();r(a),e.showAlert("Converted to lowercase","success")}},"Convert to lowercase"),n.a.createElement("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){navigator.clipboard.writeText(c),document.getSelection().removeAllRanges(),e.showAlert("Text copied","success")}},"Copy Text"),n.a.createElement("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var a=c.split(/[ ]+/);r(a.join(" ")),e.showAlert("Removed extra spaces","success")}},"Remove extra spaces")),n.a.createElement("button",{disabled:0===c.length,className:"btn btn-info mx-3 my-1",onClick:function(){r(""),e.showAlert("Text cleared","success")}},"Clear Text"),n.a.createElement("div",{className:"container my-3",style:{color:"light"===e.Mode?"grey":"white"}},n.a.createElement("h2",null,"Your text summary"),n.a.createElement("p",null,c.split(/\s+/).filter(function(e){return 0!==e.length}).length," words and ",c.length," character"),n.a.createElement("h3",null,"Preview"),n.a.createElement("p",null,c.length>0?c:"Nothing to preview")))};var u=function(){var e=Object(l.useState)("light"),a=Object(o.a)(e,2),t=a[0],c=a[1],r=Object(l.useState)(null),u=Object(o.a)(r,2),b=u[0],h=u[1],p=function(e,a){h({msg:e,type:a}),setTimeout(function(){h(null)},1250)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{title:"Textutils",aboutText:"About Textutils",Mode:t,togglemode:function(){"light"===t?(c("dark"),document.body.style.backgroundColor="#23294a",p("Dark mode has been enabled","success")):(c("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"))}}),n.a.createElement(s,{alert:b}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(m,{heading:"Enter the text to perform an action",Mode:t,showAlert:p})),n.a.createElement(i,{Mode:t}))},b=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,18)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),l(e),n(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null))),b()},4:function(e,a,t){e.exports=t(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.8c5d5ff7.chunk.js.map
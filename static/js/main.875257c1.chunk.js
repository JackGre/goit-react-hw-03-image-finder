(this["webpackJsonpskelet-react-home"]=this["webpackJsonpskelet-react-home"]||[]).push([[0],{10:function(e,t,a){e.exports={backdrop:"Modal_backdrop__2wH9t",modal:"Modal_modal__2XBpE",button:"Modal_button__oIwWG",icon:"Modal_icon__pKAGq"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__g99T3",img:"ImageGalleryItem_img__3qz3d"}},13:function(e,t,a){e.exports={Placeholder:"Placeholder_Placeholder__3x4lG",gradient:"Placeholder_gradient__tQG9e",title:"Placeholder_title__3-otS"}},16:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2ZQl3"}},17:function(e,t,a){e.exports={button:"Button_button__2pQqZ"}},18:function(e,t,a){e.exports={Container:"Container_Container__3Uq4M"}},23:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),c=a.n(r),s=(a(23),a(14)),l=a(4),i=a(5),u=a(7),m=a(6),h=a(8),d=(a(24),a(15)),b=a.n(d),g=a(9),j=a.n(g),p=a(1),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={nameImag:""},e.handleNameImag=function(t){e.setState({nameImag:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.nameImag.trim()?(e.props.onSubmit(e.state.nameImag),e.setState({nameImag:""})):Object(h.b)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f!!!")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.nameImag;return Object(p.jsx)("header",{className:j.a.Searchbar,children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:j.a.SearchForm,children:[Object(p.jsx)("button",{type:"submit",className:j.a.button,children:Object(p.jsx)("span",{className:"styles.SearchForm-button-label",children:"\u041f\u043e\u0438\u0441\u043a"})}),Object(p.jsx)("input",{onChange:this.handleNameImag,className:j.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"\u041f\u043e\u0438\u0441\u043a \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438 \u0444\u043e\u0442\u043e",value:e})]})})}}]),a}(n.Component),_=a(16),O=a.n(_),v=a(12),I=a.n(v);function x(e){var t=e.images,a=e.onImgClick;return t.map((function(e){var t=e.id,n=e.webformatURL,o=e.tags;return Object(p.jsx)("li",{className:I.a.ImageGalleryItem,onClick:function(){return a(t)},children:Object(p.jsx)("img",{className:I.a.img,src:n,alt:o})},t)}))}function y(e){var t=e.images,a=e.onImgClick;return Object(p.jsxs)("ul",{className:O.a.ImageGallery,children:[Object(p.jsx)(x,{images:t,onImgClick:a}),"I"]})}var C=a(17),S=a.n(C);function w(e){var t=e.onClick;return Object(p.jsx)("button",{type:"button",onClick:function(){return t()},className:S.a.button,children:"\u0411\u043e\u043b\u044c\u0448\u0435"})}var k=a(10),M=a.n(k),N=document.querySelector("#modal-root"),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).closeModalbyEsc=function(t){"Escape"===t.code&&e.props.showModal()},e.closeModalbyClick=function(t){t.currentTarget===t.target&&e.props.showModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModalbyEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModalbyEsc)}},{key:"render",value:function(){var e=this.props.showModal;return Object(r.createPortal)(Object(p.jsxs)("div",{className:M.a.backdrop,onClick:this.closeModalbyClick,children:[Object(p.jsx)("button",{type:"button",onClick:function(){return e()},className:M.a.button}),Object(p.jsx)("div",{className:M.a.modal,children:this.props.children})]}),N)}}]),a}(n.Component),F=a(13),P=a.n(F);function E(e){var t=e.text;return Object(p.jsx)("section",{className:P.a.Placeholder,children:Object(p.jsx)("h1",{className:P.a.title,children:t})})}var L=a(18),B=a.n(L);function T(e){var t=e.children;return Object(p.jsx)("div",{className:B.a.Container,children:t})}var q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={status:"idel",nameImag:"",page:1,images:[],loader:!1,showModal:!1,modalContent:null},e.setNameImage=function(t){e.setState((function(e){if(e.nameImag!==t.toLowerCase())return{nameImag:t.toLowerCase(),page:1};Object(h.b)("\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0447\u0442\u043e-\u0442\u043e \u0434\u0440\u0443\u0433\u043e\u0435")}))},e.setPage=function(){e.setState((function(e){return{page:e.page+1}}))},e.resetImages=function(){e.setState({images:[]})},e.onImgClick=function(t){var a=e.state.images.find((function(e){return e.id===t}));e.setState({modalContent:a}),e.showModal()},e.showModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,o=n.page,r=n.nameImag;r===t.nameImag&&o===t.page||(1===o&&this.resetImages(),this.setState({loader:!0}),function(e,t){return fetch("https://pixabay.com/api/?key=".concat("22038917-87f11eaed3549b21cb4ab18a1","&q=").concat(t,"&image_type=photo&orientation=horizontal&page=").concat(e,"&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c((("))}))}(o,r).then((function(e){e.hits.length<12&&Object(h.b)("\u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438(("),a.setState((function(t){return{images:[].concat(Object(s.a)(t.images),Object(s.a)(e.hits)),status:"resolved"}}))})).catch((function(){return a.setState({status:"rejected"})})).finally((function(){a.setState({loader:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.showModal,n=e.images,o=e.loader,r=e.modalContent;return Object(p.jsxs)(T,{children:[Object(p.jsx)(f,{onSubmit:this.setNameImage}),"resolved"===t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y,{images:n,onImgClick:this.onImgClick}),Object(p.jsx)(w,{onClick:this.setPage})]}):null,o&&Object(p.jsx)(b.a,{className:"Loader",type:"Grid",color:"#9900cc",height:180,width:180}),"rejectid"===t?Object(p.jsx)(E,{text:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"}):null,a&&Object(p.jsx)(G,{showModal:this.showModal,children:Object(p.jsx)("img",{src:r.largeImageURL,alt:r.tags})}),Object(p.jsx)(h.a,{autoClose:3e3})]})}}]),a}(n.Component),U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),r(e),c(e)}))};c.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root")),U()},9:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__WJfTr",SearchForm:"SearchBar_SearchForm__ZVa67",button:"SearchBar_button__3oEXW",SearchFormInput:"SearchBar_SearchFormInput__1vZ4i"}}},[[46,1,2]]]);
//# sourceMappingURL=main.875257c1.chunk.js.map
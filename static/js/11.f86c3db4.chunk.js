(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(e,t,a){"use strict";a.d(t,"d",function(){return s}),a.d(t,"f",function(){return i}),a.d(t,"e",function(){return c}),a.d(t,"i",function(){return d}),a.d(t,"b",function(){return m}),a.d(t,"g",function(){return u}),a.d(t,"j",function(){return g}),a.d(t,"c",function(){return p}),a.d(t,"h",function(){return h}),a.d(t,"k",function(){return f}),a.d(t,"a",function(){return v});var o=a(17),n=a(11),l=a(10),r=a.n(l),s=function(e,t,a,l,s,i,c){return function(d){r.a.post(n.L,{name:e,email:t,password:a,accessToken:l,phone:s,provider:i,address:c}).then(function(e){var t=e.data;return d({type:o.c,payload:t})}).catch(function(e){console.log(e)})}},i=function(e,t,a,l,s){return function(i){r.a.post(n.S,{name:e,email:t,phone:a,password:l,address:s}).then(function(e){var t=e.data;return i({type:o.e,payload:t})}).catch(function(e){console.log(e)})}},c=function(e){return function(t){e=[];localStorage.removeItem("userSetAddress"),localStorage.removeItem("geoLocation"),t({type:o.d,payload:e}),t({type:o.f,payload:!1}),t({type:o.b,payload:[]})}},d=function(e,t,a){return function(l){return r.a.post(n.ab,{token:t,user_id:e,unique_order_id:a}).then(function(e){var t=e.data;return l({type:o.i,payload:t})}).catch(function(e){console.log(e)})}},m=function(e,t){return function(a){r.a.post(n.f,{token:t,user_id:e}).then(function(e){var t=e.data;return a({type:o.f,payload:t})}).catch(function(e){console.log(e)})}},u=function(e,t,a,l){return function(s){r.a.post(n.W,{email:e,phone:t,accessToken:a,provider:l}).then(function(e){var t=e.data;return s({type:o.g,payload:t})}).catch(function(e){console.log(e)})}},g=function(e,t){return function(a){r.a.post(n.bb,{phone:e,otp:t}).then(function(e){var t=e.data;return a({type:o.j,payload:t})}).catch(function(e){console.log(e)})}},p=function(e,t){return function(a){r.a.post(n.J,{token:e,user_id:t}).then(function(e){var t=e.data;return a({type:o.b,payload:t})}).catch(function(e){console.log(e)})}},h=function(e){return function(t){r.a.post(n.X,{email:e}).then(function(e){var a=e.data;return t({type:o.h,payload:a})}).catch(function(e){console.log(e)})}},f=function(e,t){return function(a){r.a.post(n.cb,{email:e,code:t}).then(function(e){var t=e.data;return a({type:o.k,payload:t})}).catch(function(e){console.log(e)})}},v=function(e,t,a){return function(l){r.a.post(n.d,{email:e,code:t,password:a}).then(function(e){var t=e.data;return l({type:o.a,payload:t})}).catch(function(e){console.log(e)})}}},154:function(e,t,a){"use strict";var o=a(3),n=a(4),l=a(6),r=a(5),s=a(7),i=a(0),c=a.n(i),d=a(15),m=a.n(d),u=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",className:"btn search-navs-btns back-button",style:{position:"relative"},onClick:this.context.router.history.goBack},c.a.createElement("i",{className:"si si-arrow-left"}),c.a.createElement(m.a,{duration:"500"})))}}]),t}(i.Component);u.contextTypes={router:function(){return null}},t.a=u},166:function(e,t,a){"use strict";var o=a(178),n=a(0),l=a.n(n),r=a(174),s=a.n(r);t.a=s()(function(e){var t=e.children,a=e.triggerLogin,n=Object(o.a)(e,["children","triggerLogin"]);return l.a.createElement("button",Object.assign({onClick:a},n,{className:n.className}),t)})},229:function(e,t,a){"use strict";a.r(t);var o=a(66),n=a(3),l=a(4),r=a(6),s=a(5),i=a(7),c=a(67),d=a(0),m=a.n(d),u=a(145),g=a(154),p=a(29),h=a(226),f=a(253),v=a(152),S=a.n(v),b=a(166),y=a(14),E=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(r.a)(this,Object(s.a)(t).call(this))).state={loading:!1,name:"",email:"",phone:"",password:"",otp:"",accessToken:"",provider:"",error:!1,email_phone_already_used:!1,invalid_otp:!1,showResendOtp:!1,countdownStart:!1,countDownSeconds:15},e.handleInputChange=function(t){e.setState(Object(o.a)({},t.target.name,t.target.value))},e.handleRegister=function(t){t.preventDefault(),e.validator.fieldValid("name")&&e.validator.fieldValid("email")&&e.validator.fieldValid("phone")&&e.validator.fieldValid("password")?(e.setState({loading:!0}),"true"===localStorage.getItem("enSOV")?e.props.sendOtp(e.state.email,e.state.phone,null):e.props.registerUser(e.state.name,e.state.email,e.state.phone,e.state.password,JSON.parse(localStorage.getItem("userSetAddress")))):(console.log("Validation Failed"),e.validator.showMessages())},e.handleRegisterAfterSocialLogin=function(t){t.preventDefault(),e.setState({loading:!0}),e.validator.fieldValid("phone")?"true"===localStorage.getItem("enSOV")?e.props.sendOtp(e.state.email,e.state.phone,null):e.props.loginUser(e.state.name,e.state.email,null,e.state.accessToken,e.state.phone,e.state.provider,JSON.parse(localStorage.getItem("userSetAddress"))):(e.setState({loading:!1}),console.log("Validation Failed"),e.validator.showMessages())},e.resendOtp=function(){e.validator.fieldValid("phone")&&(e.setState({countDownSeconds:15,showResendOtp:!1}),e.props.sendOtp(e.state.email,e.state.phone,null))},e.handleVerifyOtp=function(t){t.preventDefault(),console.log("verify otp clicked"),e.validator.fieldValid("otp")&&(e.setState({loading:!0}),e.props.verifyOtp(e.state.phone,e.state.otp))},e.handleSocialLogin=function(t){"true"===localStorage.getItem("enSOV")?(e.setState({name:t._profile.name,email:t._profile.email,accessToken:t._token.accessToken,provider:t._provider,social_login:!0}),e.props.sendOtp(t._profile.email,null,t._token.accessToken,t._provider)):(e.setState({name:t._profile.name,email:t._profile.email,accessToken:t._token.accessToken,provider:t._provider,social_login:!0}),e.props.loginUser(t._profile.name,t._profile.email,null,t._token.accessToken,null,t._provider,JSON.parse(localStorage.getItem("userSetAddress"))))},e.handleSocialLoginFailure=function(t){e.setState({error:!0})},e.handleCountDown=function(){setTimeout(function(){e.setState({showResendOtp:!0}),clearInterval(e.intervalID)},16e3),e.intervalID=setInterval(function(){console.log("interval going on"),e.setState({countDownSeconds:e.state.countDownSeconds-1})},1e3)},e.validator=new S.a({autoForceUpdate:Object(c.a)(Object(c.a)(e)),messages:{required:localStorage.getItem("fieldValidationMsg"),string:localStorage.getItem("nameValidationMsg"),email:localStorage.getItem("emailValidationMsg"),regex:localStorage.getItem("phoneValidationMsg"),min:localStorage.getItem("minimumLengthValidationMessage")}}),e}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;"true"!==localStorage.getItem("enableFacebookLogin")&&"true"!==localStorage.getItem("enableGoogleLogin")||setTimeout(function(){e.refs.socialLogin&&e.refs.socialLogin.classList.remove("hidden"),e.refs.socialLoginLoader&&e.refs.socialLoginLoader.classList.add("hidden")},500)}},{key:"componentWillReceiveProps",value:function(e){if(this.props.user!==e.user&&this.setState({loading:!1}),e.user.success){if(null!==e.user.data.default_address){var t={lat:e.user.data.default_address.latitude,lng:e.user.data.default_address.longitude,address:e.user.data.default_address.address,house:e.user.data.default_address.house,tag:e.user.data.default_address.tag};localStorage.setItem("userSetAddress",JSON.stringify(t))}this.context.router.history.goBack()}e.user.email_phone_already_used&&this.setState({email_phone_already_used:!0}),e.user.otp&&(this.setState({email_phone_already_used:!1,error:!1}),document.getElementById("registerForm").classList.add("hidden"),document.getElementById("socialLoginDiv").classList.add("hidden"),document.getElementById("phoneFormAfterSocialLogin").classList.add("hidden"),document.getElementById("otpForm").classList.remove("hidden"),this.setState({countdownStart:!0}),this.handleCountDown(),this.validator.hideMessages()),e.user.valid_otp&&(this.setState({invalid_otp:!1,error:!1,loading:!0}),this.state.social_login?this.props.loginUser(this.state.name,this.state.email,null,this.state.accessToken,this.state.phone,this.state.provider,JSON.parse(localStorage.getItem("userSetAddress"))):this.props.registerUser(this.state.name,this.state.email,this.state.phone,this.state.password,JSON.parse(localStorage.getItem("userSetAddress"))),console.log("VALID OTP, REG USER NOW"),this.setState({loading:!1})),!1===e.user.valid_otp&&(console.log("Invalid OTP"),this.setState({invalid_otp:!0})),e.user||this.setState({error:!0}),e.user.proceed_login&&(console.log("From Social : user already exists"),this.props.loginUser(this.state.name,this.state.email,null,this.state.accessToken,null,this.state.provider,JSON.parse(localStorage.getItem("userSetAddress")))),e.user.enter_phone_after_social_login&&(this.validator.hideMessages(),document.getElementById("registerForm").classList.add("hidden"),document.getElementById("socialLoginDiv").classList.add("hidden"),document.getElementById("phoneFormAfterSocialLogin").classList.remove("hidden"),console.log("ask to fill the phone number and send otp process..."))}},{key:"componentWillUnmount",value:function(){console.log("Countdown cleared"),clearInterval(this.intervalID)}},{key:"render",value:function(){return window.innerWidth>768?m.a.createElement(f.a,{to:"/"}):null===localStorage.getItem("storeColor")?m.a.createElement(f.a,{to:"/"}):this.props.user.success?m.a.createElement(f.a,{to:"/my-account"}):m.a.createElement(m.a.Fragment,null,m.a.createElement("img",{src:"/assets/img/loading-food.gif",className:"hidden",alt:"prefetching"}),this.state.error&&m.a.createElement("div",{className:"auth-error"},m.a.createElement("div",{className:"error-shake"},localStorage.getItem("registerErrorMessage"))),this.state.email_phone_already_used&&m.a.createElement("div",{className:"auth-error"},m.a.createElement("div",{className:"error-shake"},localStorage.getItem("emailPhoneAlreadyRegistered"))),this.state.invalid_otp&&m.a.createElement("div",{className:"auth-error"},m.a.createElement("div",{className:"error-shake"},localStorage.getItem("invalidOtpMsg"))),this.state.loading&&m.a.createElement("div",{className:"height-100 overlay-loading"},m.a.createElement("div",null,m.a.createElement("img",{src:"/assets/img/loading-food.gif",alt:localStorage.getItem("pleaseWaitText")}))),m.a.createElement("div",{style:{backgroundColor:"#f2f4f9"}},m.a.createElement("div",{className:"input-group"},m.a.createElement("div",{className:"input-group-prepend"},m.a.createElement(g.a,{history:this.props.history}))),m.a.createElement("img",{src:"/assets/img/login-header.png",className:"login-image pull-right mr-15",alt:"login-header"}),m.a.createElement("div",{className:"login-texts px-15 mt-50 pb-20"},m.a.createElement("span",{className:"login-title"},localStorage.getItem("registerRegisterTitle")),m.a.createElement("br",null),m.a.createElement("span",{className:"login-subtitle"},localStorage.getItem("registerRegisterSubTitle")))),m.a.createElement("div",{className:"bg-white"},m.a.createElement("form",{onSubmit:this.handleRegister,id:"registerForm"},m.a.createElement("div",{className:"form-group px-15 pt-30"},m.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("loginLoginNameLabel")," ",this.validator.message("name",this.state.name,"required|string")),m.a.createElement("div",{className:"col-md-9 pb-5"},m.a.createElement("input",{type:"text",name:"name",onChange:this.handleInputChange,className:"form-control edit-address-input"})),m.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("loginLoginEmailLabel")," ",this.validator.message("email",this.state.email,"required|email")),m.a.createElement("div",{className:"col-md-9 pb-5"},m.a.createElement("input",{type:"text",name:"email",onChange:this.handleInputChange,className:"form-control edit-address-input"})),m.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("loginLoginPhoneLabel")," ",this.validator.message("phone",this.state.phone,["required",{regex:["^\\+[1-9]\\d{1,14}$"]},{min:["8"]}])),m.a.createElement("div",{className:"col-md-9 pb-5"},m.a.createElement("input",{defaultValue:null===localStorage.getItem("phoneCountryCode")?"":localStorage.getItem("phoneCountryCode"),name:"phone",type:"tel",onChange:this.handleInputChange,className:"form-control edit-address-input"})),m.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("loginLoginPasswordLabel")," ",this.validator.message("password",this.state.password,"required|min:8")),m.a.createElement("div",{className:"col-md-9"},m.a.createElement("input",{type:"password",name:"password",onChange:this.handleInputChange,className:"form-control edit-address-input"}))),m.a.createElement("div",{className:"mt-20 px-15 pt-15 button-block"},m.a.createElement("button",{type:"submit",className:"btn btn-main",style:{backgroundColor:localStorage.getItem("storeColor")}},localStorage.getItem("registerRegisterTitle")))),m.a.createElement("form",{onSubmit:this.handleVerifyOtp,id:"otpForm",className:"hidden"},m.a.createElement("div",{className:"form-group px-15 pt-30"},m.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("otpSentMsg")," ",this.state.phone,this.validator.message("otp",this.state.otp,"required|numeric|min:4|max:6")),m.a.createElement("div",{className:"col-md-9"},m.a.createElement("input",{name:"otp",type:"tel",onChange:this.handleInputChange,className:"form-control edit-address-input",required:!0})),m.a.createElement("button",{type:"submit",className:"btn btn-main",style:{backgroundColor:localStorage.getItem("storeColor")}},localStorage.getItem("verifyOtpBtnText")),m.a.createElement("div",{className:"mt-30 mb-10"},this.state.showResendOtp&&m.a.createElement("div",{className:"resend-otp",onClick:this.resendOtp},localStorage.getItem("resendOtpMsg")," ",this.state.phone),this.state.countDownSeconds>0&&m.a.createElement("div",{className:"resend-otp countdown"},localStorage.getItem("resendOtpCountdownMsg")," ",this.state.countDownSeconds)))),m.a.createElement("form",{onSubmit:this.handleRegisterAfterSocialLogin,id:"phoneFormAfterSocialLogin",className:"hidden"},m.a.createElement("div",{className:"form-group px-15 pt-30"},m.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("socialWelcomeText")," ",this.state.name,","),m.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("enterPhoneToVerify")," ",this.validator.message("phone",this.state.phone,["required",{regex:["^\\+[1-9]\\d{1,14}$"]},{min:["8"]}])),m.a.createElement("div",{className:"col-md-9 pb-5"},m.a.createElement("input",{defaultValue:null===localStorage.getItem("phoneCountryCode")?"":localStorage.getItem("phoneCountryCode"),name:"phone",type:"tel",onChange:this.handleInputChange,className:"form-control edit-address-input"})),m.a.createElement("button",{type:"submit",className:"btn btn-main",style:{backgroundColor:localStorage.getItem("storeColor")}},localStorage.getItem("registerRegisterTitle")))),m.a.createElement("div",{className:"text-center mt-3 mb-20",id:"socialLoginDiv"},m.a.createElement("p",{className:"login-or mt-2"},"OR"),m.a.createElement("div",{ref:"socialLoginLoader"},m.a.createElement(p.a,{height:60,width:400,speed:1.2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},m.a.createElement("rect",{x:"28",y:"0",rx:"0",ry:"0",width:"165",height:"45"}),m.a.createElement("rect",{x:"210",y:"0",rx:"0",ry:"0",width:"165",height:"45"}))),m.a.createElement("div",{ref:"socialLogin",className:"hidden"},"true"===localStorage.getItem("enableFacebookLogin")&&m.a.createElement(b.a,{provider:"facebook",appId:localStorage.getItem("facebookAppId"),onLoginSuccess:this.handleSocialLogin,onLoginFailure:function(){return console.log("Failed didn't get time to init or login failed")},className:"facebook-login-button mr-2"},localStorage.getItem("facebookLoginButtonText")),"true"===localStorage.getItem("enableGoogleLogin")&&m.a.createElement(b.a,{provider:"google",appId:localStorage.getItem("googleAppId"),onLoginSuccess:this.handleSocialLogin,onLoginFailure:function(){return console.log("Failed didn't get time to init or login failed")},className:"google-login-button"},localStorage.getItem("googleLoginButtonText")))),m.a.createElement("div",{className:"text-center mt-50 mb-100"},localStorage.getItem("regsiterAlreadyHaveAccount")," ",m.a.createElement(h.a,{to:"/login",style:{color:localStorage.getItem("storeColor")}},localStorage.getItem("firstScreenLoginBtn"))),"null"!==localStorage.getItem("registrationPolicyMessage")&&m.a.createElement("div",{className:"mt-20 mb-20 d-flex align-items-center justify-content-center",dangerouslySetInnerHTML:{__html:localStorage.getItem("registrationPolicyMessage")}})))}}]),t}(d.Component);E.contextTypes={router:function(){return null}};t.default=Object(y.b)(function(e){return{user:e.user.user}},{registerUser:u.f,loginUser:u.d,sendOtp:u.g,verifyOtp:u.j})(E)}}]);
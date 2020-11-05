(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{197:function(e,t,a){},199:function(e,t,a){},357:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(0),r=a.n(c),s=a(30),i=a.n(s),o=(a(197),a(6)),l=(a.p,a(198),a(199),a(1)),j=a(367),d=a(358),u=a(359),m=a(363),b=a(366),x=a(44),O={labelCol:{span:8},wrapperCol:{span:16}},f={wrapperCol:{offset:8,span:16}},p=function(e){var t=e.setPage;return Object(n.jsx)(d.a,{style:{paddingTop:30},children:Object(n.jsx)(u.a,{span:8,offset:8,children:Object(n.jsxs)(m.a,Object(l.a)(Object(l.a)({},O),{},{name:"basic",initialValues:{remember:!0},onFinish:function(e){var a=e.username,n=e.password;"admin"===a&&"easy_login"===n?(localStorage.setItem("ascot",(Date.now()+36e5).toString()),t("exam2")):j.b.error("Login failed")},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(n.jsx)(m.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(n.jsx)(b.a,{})}),Object(n.jsx)(m.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(n.jsx)(b.a.Password,{})}),Object(n.jsx)(m.a.Item,Object(l.a)(Object(l.a)({},f),{},{children:Object(n.jsx)(x.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]}))})})},h=a(360),g=a(78),y=a(373),w=a(374),v=a(8),I=a(35),k=a.n(I),C=a(45),S=a(362),Y=a(364),N=a(361),E=a(368),F=a(369),_=a(370),D=a(50),H=a.n(D),P=a(87),A=a.n(P),M=function(e){return e.then((function(e){return[null,e]})).catch((function(e){return[e,null]}))},T="/",q=function(e){return e.data},R=function(e){throw e.response.data},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return M(A.a.get("".concat(T).concat(e),{headers:t}).then(q).catch(R))},J=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return M(A.a.post("".concat(T).concat(e),t,{headers:a}).then(q).catch(R))},V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return M(A.a.delete("".concat(T).concat(e),{headers:t}).then(q).catch(R))},B=S.a.RangePicker,K={labelCol:{span:8},wrapperCol:{span:16}},U={wrapperCol:{offset:8,span:16}},z=function(e){var t=e.onSuccess,a=function(){var e=Object(C.a)(k.a.mark((function e(a){var n,c,r,s,i,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.rate||[10,20];try{c=JSON.parse(a.captureConfig)}catch(d){c={width:320,height:240,image_format:"jpeg",jpeg_quality:90}}return e.next=4,J("create-exam",{name:a.name,examId:a.examId,startAt:a.range[0].valueOf(),endAt:a.range[1].valueOf(),captureConfig:c,captureRate:{min:n[0],max:n[1]}});case 4:r=e.sent,s=Object(o.a)(r,2),i=s[0],l=s[1],i?j.b.error("Something went wrong"):(j.b.success("Exam entry added"),t(l.newExam));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(m.a,Object(l.a)(Object(l.a)({},K),{},{name:"basic",initialValues:{remember:!0},onFinish:a,onFinishFailed:function(e){},children:[Object(n.jsx)(m.a.Item,{label:"Exam Name",name:"name",rules:[{required:!0,message:"Please input exam name!"}],children:Object(n.jsx)(b.a,{})}),Object(n.jsx)(m.a.Item,{label:"Exam Id",name:"examId",rules:[{required:!0,message:"Please input exam ID!"}],children:Object(n.jsx)(b.a,{})}),Object(n.jsx)(m.a.Item,{label:"Enable Time Range",name:"range",rules:[{required:!0,message:"Please add time rage"}],children:Object(n.jsx)(B,{showTime:{format:"HH:mm"},format:"YYYY-MM-DD HH:mm"})}),Object(n.jsx)(m.a.Item,{label:"Capture Rate (min)",name:"rate",children:Object(n.jsx)(Y.a,{range:!0,defaultValue:[10,20]})}),Object(n.jsx)(m.a.Item,{label:"Capturing Configs",name:"captureConfig",children:Object(n.jsx)(b.a.TextArea,{})}),Object(n.jsx)(m.a.Item,{label:"Example",children:Object(n.jsxs)("code",{children:["{"," ",Object(n.jsx)("br",{}),'"width": 320, ',Object(n.jsx)("br",{}),'"height": 240, ',Object(n.jsx)("br",{}),'"image_format": "jpeg", ',Object(n.jsx)("br",{}),'"jpeg_quality": 90 ',Object(n.jsx)("br",{}),"}"]})}),Object(n.jsx)(m.a.Item,Object(l.a)(Object(l.a)({},U),{},{children:Object(n.jsx)(x.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]}))},G=function(){var e,t=Object(c.useState)(!1),a=Object(o.a)(t,2),r=a[0],s=a[1],i=Object(c.useState)([]),l=Object(o.a)(i,2),m=l[0],b=l[1],O=Object(c.useState)(!1),f=Object(o.a)(O,2),p=f[0],h=f[1];return Object(c.useEffect)((function(){Object(C.a)(k.a.mark((function e(){var t,a,n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,L("get-exams");case 3:t=e.sent,a=Object(o.a)(t,2),n=a[0],c=a[1],n?j.b.error("Exam data loading failed. try to reload"):c.success?b(c.data):j.b.error("Exam data loading failed. try to reload"),s(!1);case 9:case"end":return e.stop()}}),e)})))()}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(d.a,{children:Object(n.jsx)(u.a,{span:24,children:Object(n.jsx)(x.a,{type:"primary",style:{float:"left",margin:5},onClick:function(){return h(!0)},children:"Add New"})})}),Object(n.jsx)(d.a,{children:Object(n.jsx)(u.a,{span:24,children:Object(n.jsx)(N.a,{columns:(e=function(e){b(m.filter((function(t){return t._id!==e})))},[{title:"Exam Name",dataIndex:"name",key:"name"},{title:"Exam Id",dataIndex:"examId",key:"examId"},{title:"Start At",dataIndex:"startAt",key:"startAt",render:function(e){return Object(n.jsx)("div",{children:H()(e).format("YYYY-MM-DD HH:mm")})}},{title:"End At",dataIndex:"endAt",key:"endAt",render:function(e){return Object(n.jsx)("div",{children:H()(e).format("YYYY-MM-DD HH:mm")})}},{title:"",key:"actions",render:function(t,a){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x.a,{type:"danger",icon:Object(n.jsx)(F.a,{}),onClick:Object(C.a)(k.a.mark((function t(){var n,c,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V("delete-exam/"+a._id);case 2:n=t.sent,c=Object(o.a)(n,2),r=c[0],c[1],r?j.b.error("Failed to delete"):(j.b.success("Successfully deleted"),e(a._id));case 7:case"end":return t.stop()}}),t)})))}),a.endAt<Date.now()&&Object(n.jsx)(x.a,{icon:Object(n.jsx)(_.a,{}),style:{marginLeft:20},onClick:Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open("/download/"+a.examId,"_blank");case 1:case"end":return e.stop()}}),e)})))})]})}}]),dataSource:m,loading:r})})}),Object(n.jsx)(E.a,{title:"Exam",placement:"right",width:600,onClose:function(){return h(!1)},visible:p,children:Object(n.jsx)(z,{onSuccess:function(e){h(!1),b([].concat(Object(v.a)(m),[e]))}})})]})},Q=a(365),W=a(371),X=a(372),Z=(Q.a.confirm,[{title:"Exam",dataIndex:"examId",key:"examId"},{title:"Student Name",dataIndex:"studentName",key:"studentName"},{title:"Time",dataIndex:"time",key:"time",render:function(e){return Object(n.jsx)("div",{children:H()(parseInt(e)).format("YYYY-MM-DD HH:mm:ss")})}},{title:"Filename",dataIndex:"fileName",key:"fileName"}]),$=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),l=i[0],m=i[1],O=Object(c.useState)(""),f=Object(o.a)(O,2),p=(f[0],f[1],Object(c.useState)(0)),h=Object(o.a)(p,2),g=h[0],y=h[1],w=Object(c.useState)(!1),v=Object(o.a)(w,2),I=v[0],S=v[1];Object(c.useEffect)((function(){Object(C.a)(k.a.mark((function e(){var t,a,n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("all-images");case 2:t=e.sent,a=Object(o.a)(t,2),n=a[0],c=a[1],n?j.b.error("Fail to load images. try again please"):(r(c.filenames.map((function(e){var t=e.split("_");return{examId:t[0],studentName:t[1],time:t[3]&&t[3].split(".")[0],fileName:e}}))),m(""));case 7:case"end":return e.stop()}}),e)})))()}),[]);var Y=a.filter((function(e){return e.fileName.includes(l)}));return Object(n.jsxs)("div",{children:[Object(n.jsxs)(d.a,{children:[Object(n.jsx)(u.a,{span:16,children:Object(n.jsx)(b.a,{value:l,onChange:function(e){return m(e.target.value)},placeholder:"Filter by file name"})}),Object(n.jsx)(u.a,{offset:4,span:4,children:Object(n.jsx)(x.a,{type:"danger",onClick:Object(C.a)(k.a.mark((function e(){var t,a,n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("easy_login"!==prompt("Enter your admin password to continue")){e.next=11;break}return e.next=4,L("delete-images");case 4:t=e.sent,a=Object(o.a)(t,2),n=a[0],c=a[1],n?j.b.error("Something went wrong"):c.success?(r([]),j.b.success("Done")):j.b.error("Something went wrong"),e.next=12;break;case 11:j.b.error("Invalid password");case 12:case"end":return e.stop()}}),e)}))),children:"Delete all Images"})})]}),Object(n.jsx)(d.a,{children:Object(n.jsx)(u.a,{span:24,children:Object(n.jsx)(N.a,{dataSource:Y,columns:Z,onRow:function(e,t){return{onClick:function(){y(t),S(!0)}}},pagination:{position:["topRight"]},scroll:{y:750}})})}),Object(n.jsx)(Q.a,{title:"".concat(Y[g]&&H()(parseInt(Y[g].time)).format("YYYY-MM-DD HH:mm:ss")," | ").concat(g+1,"/").concat(Y.length),visible:I,onOk:function(){return S(!1)},onCancel:function(){return S(!1)},footer:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x.a,{type:"primary",icon:Object(n.jsx)(W.a,{}),onClick:function(){0!==g&&y(g-1)}}),Object(n.jsx)(x.a,{type:"primary",icon:Object(n.jsx)(X.a,{}),onClick:function(){g!==Y.length-1&&y(g+1)}}),Object(n.jsx)(x.a,{onClick:function(){return S(!1)},children:"Cancel"})]}),children:Object(n.jsx)("img",{style:{width:"100%"},src:"/images/".concat(Y[g]&&Y[g].fileName)})})]})},ee=h.a.Sider,te=h.a.Header,ae=h.a.Content,ne=h.a.Footer,ce=function(e){var t=e.page,a=e.setPage,r=Object(c.useState)(!1),s=Object(o.a)(r,2),i=s[0],l=s[1];return Object(n.jsxs)(h.a,{style:{minHeight:"100vh"},children:[Object(n.jsxs)(ee,{collapsible:!0,collapsed:i,onCollapse:function(e){l(e)},children:[Object(n.jsx)("div",{className:"logo",style:{height:60}}),Object(n.jsxs)(g.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",children:[Object(n.jsx)(g.a.Item,{icon:Object(n.jsx)(y.a,{}),onClick:function(){return a("exam")},children:"Exams"},"1"),Object(n.jsx)(g.a.Item,{icon:Object(n.jsx)(w.a,{}),onClick:function(){return a("images")},children:"Images"},"2")]})]}),Object(n.jsxs)(h.a,{className:"site-layout",children:[Object(n.jsx)(te,{className:"site-layout-background",style:{padding:0}}),Object(n.jsxs)(ae,{style:{margin:"0 16px"},children:["exam"===t&&Object(n.jsx)(G,{}),"exam2"===t&&Object(n.jsx)(G,{}),"images"===t&&Object(n.jsx)($,{})]}),Object(n.jsx)(ne,{style:{textAlign:"center"},children:"_______"})]})]})};var re=function(){var e,t=Object(c.useState)("exam"),a=Object(o.a)(t,2),r=a[0],s=a[1],i=parseInt(localStorage.getItem("ascot"));return e=!isNaN(i)&&i>Date.now(),Object(n.jsxs)("div",{className:"App",children:[!e&&Object(n.jsx)(p,{setPage:s}),e&&Object(n.jsx)(ce,{page:r,setPage:s})]})},se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,375)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(re,{})}),document.getElementById("root")),se()}},[[357,1,2]]]);
//# sourceMappingURL=main.6f2223b8.chunk.js.map
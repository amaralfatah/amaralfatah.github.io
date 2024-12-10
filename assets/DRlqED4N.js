import{c as p}from"./C5x2ctdp.js";import{h as x,l as f,o as t,c as a,a as e,t as s,e as i,g as d,F as y,f as _}from"./Ceis__Qt.js";/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=p("CheckCheckIcon",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=p("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),k={class:"relative rounded-lg bg-[#121212] overflow-hidden w-full border border-[#2F2F2F]"},v={class:"flex justify-between items-center px-4 py-2.5 bg-[#1A1A1A] border-b border-[#2F2F2F]"},w={class:"text-[#989898] text-xs font-medium"},b={class:"text-xs font-medium"},C={class:"relative flex"},F={class:"hidden sm:block pl-4 pr-3 py-3.5 text-[#4D4D4D] select-none border-r border-[#2F2F2F] bg-[#121212]"},D={class:"w-full overflow-x-auto"},B={class:"p-3.5 text-sm leading-6 font-['Menlo',_'Monaco',_'Courier_New',_monospace] whitespace-pre sm:whitespace-pre-wrap break-words"},M={class:"text-[#D4D4D4]"},I={__name:"CopyCodeBlock",props:{language:{type:String,default:"javascript"},code:{type:String,required:!0}},setup(c){const r=c,o=x(!1),u=f(()=>r.code.split(`
`).length),h=async()=>{try{await navigator.clipboard.writeText(r.code),o.value=!0,setTimeout(()=>{o.value=!1},2e3)}catch(n){console.error("Failed to copy:",n)}};return(n,j)=>(t(),a("div",k,[e("div",v,[e("span",w,s(c.language),1),e("button",{onClick:h,class:"flex items-center gap-1.5 text-[#989898] hover:text-white transition-colors duration-200"},[e("span",b,s(o.value?"Copied":"Copy code"),1),o.value?(t(),i(d(m),{key:1,class:"w-4 h-4"})):(t(),i(d(g),{key:0,class:"w-4 h-4"}))])]),e("div",C,[e("div",F,[(t(!0),a(y,null,_(u.value,l=>(t(),a("div",{key:l,class:"text-xs leading-6 text-right"},s(l),1))),128))]),e("div",D,[e("pre",B,[e("code",M,s(c.code),1)])])])]))}};export{I as default};

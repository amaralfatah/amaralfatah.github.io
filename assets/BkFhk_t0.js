import{h as a,o as r,c as n,m as u,v as i,a as t,q as p}from"./sZWZoJx_.js";const d={__name:"HomeNewsLetterSection",setup(c){const s=a(""),o=async()=>{console.log("Subscribe:",s.value)};return(m,e)=>(r(),n("form",{onSubmit:p(o,["prevent"]),class:"flex flex-col gap-4 md:flex-row"},[u(t("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),placeholder:"Enter your email",class:"flex-1 input-base",required:""},null,512),[[i,s.value]]),e[1]||(e[1]=t("button",{type:"submit",class:"px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 whitespace-nowrap"}," Subscribe ",-1))],32))}};export{d as default};

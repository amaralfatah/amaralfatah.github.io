import{I as a}from"./Cw7i0of7.js";import{o as s,c as r,a as e,b as n,g as o,t}from"./B2oN5m_e.js";const c={class:"flex items-center justify-between w-full gap-4 card-base"},d={class:"flex items-center gap-6"},f={class:"flex flex-col"},m={class:"text-sm text-mygray"},u=["href"],k={__name:"SocialCard",props:{social:{type:Object,required:!0}},setup(i){const l={twitter:"ri:twitter-fill",instagram:"ri:instagram-fill",linkedin:"ri:linkedin-fill",github:"ri:github-fill",youtube:"ri:youtube-fill",mail:"ri:mail-fill",link:"ri:link",tiktok:"ri:tiktok-fill"};return(h,b)=>(s(),r("div",c,[e("div",d,[n(o(a),{icon:l[i.social.icon],class:"text-mygray w-7 h-7"},null,8,["icon"]),e("div",f,[e("span",null,t(i.social.name),1),e("span",m,t(i.social.description),1)])]),e("a",{href:i.social.url,class:"flex items-center px-6 py-2 border rounded-md border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:text-mywhite",target:"_blank",rel:"noopener noreferrer"},[e("span",null,t(i.social.action),1)],8,u)]))}};export{k as default};

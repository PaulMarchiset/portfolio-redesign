import{p,D as d}from"./backend-11e7fe58.js";import{d as h,w as r,b as u,o as f,c as g,a as t,u as o,t as i,i as x}from"./index-4fbbd58f.js";const b={class:"mx-6 flex flex-col items-center justify-center"},y={class:"grid grid-cols-12"},D=["src"],I={class:"col-start-2 col-span-10 lg:col-start-8 lg:col-end-12 flex flex-col gap-4"},w={class:"font-title text-d-art font-semibold leading-10 pt-8 lg:pt-0"},B={class:"mt-5"},v=t("li",{class:"mb-1"},"Bronze and brass",-1),z=t("li",{class:"mb-1"},"Signed by the author",-1),C=t("li",{class:"mb-1"},"Limited to 1 copy",-1),N={class:"mb-1"},S={class:"font-title text-d-art font-normal"},k=t("span",{class:"font-medium text-m-md lg:text-d-md"},"+ Shipping Fees",-1),F=t("p",null,"(With certificate of authenticity)",-1),E=h({__name:"[id]",props:{image:{},number:{},price:{},size:{},year:{},id:{},created:{},updated:{},collectionId:{},collectionName:{},expand:{}},async setup(m){let e,c;const n=m,s=([e,c]=r(()=>d(n.id)),e=await e,c(),e);u({title:`Dépot n°${s.number} - Pierre Marchiset`});const a=([e,c]=r(()=>d(n.id)),e=await e,c(),e),l=a.image,_=l&&p.getFileUrl(a,l,{thumb:"100x200"});return(V,$)=>(f(),g("main",b,[t("div",y,[t("img",{src:o(_),alt:"CD n°${{ depotInfo.number }}",class:"col-start-2 col-span-10 lg:col-end-7"},null,8,D),t("div",I,[t("h2",w," Dépot "+i(o(s).number)+" - "+i(o(s).year),1),t("ul",B,[v,z,C,t("li",N,i(o(s).size),1)]),t("div",null,[t("h3",S,[x(i(o(s).price)+"€ ",1),k]),F])])])]))}});export{E as default};

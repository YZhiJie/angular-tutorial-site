const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.BQ2GaasN.js","assets/chunks/framework.BYgiQ6KE.js","assets/chunks/mermaid.core.vHxY8aNs.js"])))=>i.map(i=>d[i]);
import{d as h,c,r as p,n as I,o as a,a as F,t as S,b as y,w as g,T as mn,e as f,_ as w,u as Un,i as Gn,f as qn,g as gn,h as x,j as u,k as i,l as W,m as ln,p as L,q as N,s as nn,v as z,x as en,y as fn,z as Wn,A as Yn,F as $,B,C as Y,D as tn,E as v,G as Sn,H,I as An,J as on,K as q,L as rn,M as Kn,N as hn,O as cn,P as bn,Q as In,R as K,S as Jn,U as Qn,V as $n,W as Pn,X as Rn,Y as Xn,Z as Zn,$ as En,a0 as ne,a1 as ee}from"./framework.BYgiQ6KE.js";const te=h({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(n){return(e,t)=>(a(),c("span",{class:I(["VPBadge",n.type])},[p(e.$slots,"default",{},()=>[F(S(n.text),1)])],2))}}),oe={key:0,class:"VPBackdrop"},re=h({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(n){return(e,t)=>(a(),y(mn,{name:"fade"},{default:g(()=>[n.show?(a(),c("div",oe)):f("",!0)]),_:1}))}}),ae=w(re,[["__scopeId","data-v-430a4c34"]]),_=Un;function se(n,e){let t,r=!1;return()=>{t&&clearTimeout(t),r?t=setTimeout(n,e):(n(),(r=!0)&&setTimeout(()=>r=!1,e))}}function pn(n){return n.startsWith("/")?n:`/${n}`}function vn(n){const{pathname:e,search:t,hash:r,protocol:o}=new URL(n,"http://a.com");if(Gn(n)||n.startsWith("#")||!o.startsWith("http")||!qn(e))return n;const{site:s}=_(),l=e.endsWith("/")||e.endsWith(".html")?n:n.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,s.value.cleanUrls?"":".html")}${t}${r}`);return gn(l)}function J({correspondingLink:n=!1}={}){const{site:e,localeIndex:t,page:r,theme:o,hash:s}=_(),l=x(()=>{var m,k;return{label:(m=e.value.locales[t.value])==null?void 0:m.label,link:((k=e.value.locales[t.value])==null?void 0:k.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:x(()=>Object.entries(e.value.locales).flatMap(([m,k])=>l.value.label===k.label?[]:{text:k.label,link:ie(k.link||(m==="root"?"/":`/${m}/`),o.value.i18nRouting!==!1&&n,r.value.relativePath.slice(l.value.link.length-1),!e.value.cleanUrls)+s.value})),currentLang:l}}function ie(n,e,t,r){return e?n.replace(/\/$/,"")+pn(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):n}const le={class:"NotFound"},ce={class:"code"},pe={class:"title"},ue={class:"quote"},de={class:"action"},me=["href","aria-label"],ge=h({__name:"NotFound",setup(n){const{theme:e}=_(),{currentLang:t}=J();return(r,o)=>{var s,l,d,m,k;return a(),c("div",le,[u("p",ce,S(((s=i(e).notFound)==null?void 0:s.code)??"404"),1),u("h1",pe,S(((l=i(e).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),o[0]||(o[0]=u("div",{class:"divider"},null,-1)),u("blockquote",ue,S(((d=i(e).notFound)==null?void 0:d.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),u("div",de,[u("a",{class:"link",href:i(gn)(i(t).link),"aria-label":((m=i(e).notFound)==null?void 0:m.linkLabel)??"go to home"},S(((k=i(e).notFound)==null?void 0:k.linkText)??"Take me home"),9,me)])])}}}),fe=w(ge,[["__scopeId","data-v-c64e0264"]]);function Mn(n,e){if(Array.isArray(n))return X(n);if(n==null)return[];e=pn(e);const t=Object.keys(n).sort((o,s)=>s.split("/").length-o.split("/").length).find(o=>e.startsWith(pn(o))),r=t?n[t]:[];return Array.isArray(r)?X(r):X(r.items,r.base)}function he(n){const e=[];let t=0;for(const r in n){const o=n[r];if(o.items){t=e.push(o);continue}e[t]||e.push({items:[]}),e[t].items.push(o)}return e}function be(n){const e=[];function t(r){for(const o of r)o.text&&o.link&&e.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&t(o.items)}return t(n),e}function un(n,e){return Array.isArray(e)?e.some(t=>un(n,t)):W(n,e.link)?!0:e.items?un(n,e.items):!1}function X(n,e){return[...n].map(t=>{const r={...t},o=r.base||e;return o&&r.link&&(r.link=o+r.link),r.items&&(r.items=X(r.items,o)),r})}function U(){const{frontmatter:n,page:e,theme:t}=_(),r=ln("(min-width: 960px)"),o=L(!1),s=x(()=>{const R=t.value.sidebar,M=e.value.relativePath;return R?Mn(R,M):[]}),l=L(s.value);N(s,(R,M)=>{JSON.stringify(R)!==JSON.stringify(M)&&(l.value=s.value)});const d=x(()=>n.value.sidebar!==!1&&l.value.length>0&&n.value.layout!=="home"),m=x(()=>k?n.value.aside==null?t.value.aside==="left":n.value.aside==="left":!1),k=x(()=>n.value.layout==="home"?!1:n.value.aside!=null?!!n.value.aside:t.value.aside!==!1),T=x(()=>d.value&&r.value),b=x(()=>d.value?he(l.value):[]);function C(){o.value=!0}function j(){o.value=!1}function P(){o.value?j():C()}return{isOpen:o,sidebar:l,sidebarGroups:b,hasSidebar:d,hasAside:k,leftAside:m,isSidebarEnabled:T,open:C,close:j,toggle:P}}function ve(n,e){let t;nn(()=>{t=n.value?document.activeElement:void 0}),z(()=>{window.addEventListener("keyup",r)}),en(()=>{window.removeEventListener("keyup",r)});function r(o){o.key==="Escape"&&n.value&&(e(),t==null||t.focus())}}function ye(n){const{page:e,hash:t}=_(),r=L(!1),o=x(()=>n.value.collapsed!=null),s=x(()=>!!n.value.link),l=L(!1),d=()=>{l.value=W(e.value.relativePath,n.value.link)};N([e,n,t],d),z(d);const m=x(()=>l.value?!0:n.value.items?un(e.value.relativePath,n.value.items):!1),k=x(()=>!!(n.value.items&&n.value.items.length));nn(()=>{r.value=!!(o.value&&n.value.collapsed)}),fn(()=>{(l.value||m.value)&&(r.value=!1)});function T(){o.value&&(r.value=!r.value)}return{collapsed:r,collapsible:o,isLink:s,isActiveLink:l,hasActiveLink:m,hasChildren:k,toggle:T}}function xe(){const{hasSidebar:n}=U(),e=ln("(min-width: 960px)"),t=ln("(min-width: 1280px)");return{isAsideEnabled:x(()=>!t.value&&!e.value?!1:n.value?t.value:e.value)}}const ke=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,dn=[];function On(n){return typeof n.outline=="object"&&!Array.isArray(n.outline)&&n.outline.label||n.outlineTitle||"On this page"}function yn(n){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const r=Number(t.tagName[1]);return{element:t,title:we(t),link:"#"+t.id,level:r}});return Ce(e,n)}function we(n){let e="";for(const t of n.childNodes)if(t.nodeType===1){if(ke.test(t.className))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function Ce(n,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[r,o]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return _e(n,r,o)}function Te(n,e){const{isAsideEnabled:t}=xe(),r=se(s,100);let o=null;z(()=>{requestAnimationFrame(s),window.addEventListener("scroll",r)}),Wn(()=>{l(location.hash)}),en(()=>{window.removeEventListener("scroll",r)});function s(){if(!t.value)return;const d=window.scrollY,m=window.innerHeight,k=document.body.offsetHeight,T=Math.abs(d+m-k)<1,b=dn.map(({element:j,link:P})=>({link:P,top:je(j)})).filter(({top:j})=>!Number.isNaN(j)).sort((j,P)=>j.top-P.top);if(!b.length){l(null);return}if(d<1){l(null);return}if(T){l(b[b.length-1].link);return}let C=null;for(const{link:j,top:P}of b){if(P>d+Yn()+4)break;C=j}l(C)}function l(d){o&&o.classList.remove("active"),d==null?o=null:o=n.value.querySelector(`a[href="${decodeURIComponent(d)}"]`);const m=o;m?(m.classList.add("active"),e.value.style.top=m.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function je(n){let e=0;for(;n!==document.body;){if(n===null)return NaN;e+=n.offsetTop,n=n.offsetParent}return e}function _e(n,e,t){dn.length=0;const r=[],o=[];return n.forEach(s=>{const l={...s,children:[]};let d=o[o.length-1];for(;d&&d.level>=l.level;)o.pop(),d=o[o.length-1];if(l.element.classList.contains("ignore-header")||d&&"shouldIgnore"in d){o.push({level:l.level,shouldIgnore:!0});return}l.level>t||l.level<e||(dn.push({element:l.element,link:l.link}),d?d.children.push(l):r.push(l),o.push(l))}),r}const Le=["href","title"],Se=h({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(n){function e({target:t}){const r=t.href.split("#")[1],o=document.getElementById(decodeURIComponent(r));o==null||o.focus({preventScroll:!0})}return(t,r)=>{const o=Y("VPDocOutlineItem",!0);return a(),c("ul",{class:I(["VPDocOutlineItem",n.root?"root":"nested"])},[(a(!0),c($,null,B(n.headers,({children:s,link:l,title:d})=>(a(),c("li",null,[u("a",{class:"outline-link",href:l,onClick:e,title:d},S(d),9,Le),s!=null&&s.length?(a(),y(o,{key:0,headers:s},null,8,["headers"])):f("",!0)]))),256))],2)}}}),Bn=w(Se,[["__scopeId","data-v-f5a3a57a"]]),Ae={class:"content"},Ie={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},$e=h({__name:"VPDocAsideOutline",setup(n){const{frontmatter:e,theme:t}=_(),r=Sn([]);tn(()=>{r.value=yn(e.value.outline??t.value.outline)});const o=L(),s=L();return Te(o,s),(l,d)=>(a(),c("nav",{"aria-labelledby":"doc-outline-aria-label",class:I(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:o},[u("div",Ae,[u("div",{class:"outline-marker",ref_key:"marker",ref:s},null,512),u("div",Ie,S(i(On)(i(t))),1),v(Bn,{headers:r.value,root:!0},null,8,["headers"])])],2))}}),Pe=w($e,[["__scopeId","data-v-4259ac58"]]),Re={class:"VPDocAsideCarbonAds"},Ee=h({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(n){const e=()=>null;return(t,r)=>(a(),c("div",Re,[v(i(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),Me={class:"VPDocAside"},Oe=h({__name:"VPDocAside",setup(n){const{theme:e}=_();return(t,r)=>(a(),c("div",Me,[p(t.$slots,"aside-top",{},void 0,!0),p(t.$slots,"aside-outline-before",{},void 0,!0),v(Pe),p(t.$slots,"aside-outline-after",{},void 0,!0),r[0]||(r[0]=u("div",{class:"spacer"},null,-1)),p(t.$slots,"aside-ads-before",{},void 0,!0),i(e).carbonAds?(a(),y(Ee,{key:0,"carbon-ads":i(e).carbonAds},null,8,["carbon-ads"])):f("",!0),p(t.$slots,"aside-ads-after",{},void 0,!0),p(t.$slots,"aside-bottom",{},void 0,!0)]))}}),Be=w(Oe,[["__scopeId","data-v-1b8edaf3"]]);function Ve(){const{theme:n,page:e}=_();return x(()=>{const{text:t="Edit this page",pattern:r=""}=n.value.editLink||{};let o;return typeof r=="function"?o=r(e.value):o=r.replace(/:path/g,e.value.filePath),{url:o,text:t}})}function Fe(){const{page:n,theme:e,frontmatter:t}=_();return x(()=>{var k,T,b,C,j,P,R,M;const r=Mn(e.value.sidebar,n.value.relativePath),o=be(r),s=He(o,O=>O.link.replace(/[?#].*$/,"")),l=s.findIndex(O=>W(n.value.relativePath,O.link)),d=((k=e.value.docFooter)==null?void 0:k.prev)===!1&&!t.value.prev||t.value.prev===!1,m=((T=e.value.docFooter)==null?void 0:T.next)===!1&&!t.value.next||t.value.next===!1;return{prev:d?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((b=s[l-1])==null?void 0:b.docFooterText)??((C=s[l-1])==null?void 0:C.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((j=s[l-1])==null?void 0:j.link)},next:m?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((P=s[l+1])==null?void 0:P.docFooterText)??((R=s[l+1])==null?void 0:R.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((M=s[l+1])==null?void 0:M.link)}}})}function He(n,e){const t=new Set;return n.filter(r=>{const o=e(r);return t.has(o)?!1:t.add(o)})}const D=h({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(n){const e=n,t=x(()=>e.tag??(e.href?"a":"span")),r=x(()=>e.href&&An.test(e.href)||e.target==="_blank");return(o,s)=>(a(),y(H(t.value),{class:I(["VPLink",{link:n.href,"vp-external-link-icon":r.value,"no-icon":n.noIcon}]),href:n.href?i(vn)(n.href):void 0,target:n.target??(r.value?"_blank":void 0),rel:n.rel??(r.value?"noreferrer":void 0)},{default:g(()=>[p(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),De={class:"VPLastUpdated"},ze=["datetime"],Ne=h({__name:"VPDocFooterLastUpdated",setup(n){const{theme:e,page:t,lang:r}=_(),o=x(()=>new Date(t.value.lastUpdated)),s=x(()=>o.value.toISOString()),l=L("");return z(()=>{nn(()=>{var d,m,k;l.value=new Intl.DateTimeFormat((m=(d=e.value.lastUpdated)==null?void 0:d.formatOptions)!=null&&m.forceLocale?r.value:void 0,((k=e.value.lastUpdated)==null?void 0:k.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(d,m)=>{var k;return a(),c("p",De,[F(S(((k=i(e).lastUpdated)==null?void 0:k.text)||i(e).lastUpdatedText||"Last updated")+": ",1),u("time",{datetime:s.value},S(l.value),9,ze)])}}}),Ue=w(Ne,[["__scopeId","data-v-1815158c"]]),Ge={key:0,class:"VPDocFooter"},qe={key:0,class:"edit-info"},We={key:0,class:"edit-link"},Ye={key:1,class:"last-updated"},Ke={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Je={class:"pager"},Qe=["innerHTML"],Xe=["innerHTML"],Ze={class:"pager"},nt=["innerHTML"],et=["innerHTML"],tt=h({__name:"VPDocFooter",setup(n){const{theme:e,page:t,frontmatter:r}=_(),o=Ve(),s=Fe(),l=x(()=>e.value.editLink&&r.value.editLink!==!1),d=x(()=>t.value.lastUpdated),m=x(()=>l.value||d.value||s.value.prev||s.value.next);return(k,T)=>{var b,C,j,P;return m.value?(a(),c("footer",Ge,[p(k.$slots,"doc-footer-before",{},void 0,!0),l.value||d.value?(a(),c("div",qe,[l.value?(a(),c("div",We,[v(D,{class:"edit-link-button",href:i(o).url,"no-icon":!0},{default:g(()=>[T[0]||(T[0]=u("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),F(" "+S(i(o).text),1)]),_:1},8,["href"])])):f("",!0),d.value?(a(),c("div",Ye,[v(Ue)])):f("",!0)])):f("",!0),(b=i(s).prev)!=null&&b.link||(C=i(s).next)!=null&&C.link?(a(),c("nav",Ke,[T[1]||(T[1]=u("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),u("div",Je,[(j=i(s).prev)!=null&&j.link?(a(),y(D,{key:0,class:"pager-link prev",href:i(s).prev.link},{default:g(()=>{var R;return[u("span",{class:"desc",innerHTML:((R=i(e).docFooter)==null?void 0:R.prev)||"Previous page"},null,8,Qe),u("span",{class:"title",innerHTML:i(s).prev.text},null,8,Xe)]}),_:1},8,["href"])):f("",!0)]),u("div",Ze,[(P=i(s).next)!=null&&P.link?(a(),y(D,{key:0,class:"pager-link next",href:i(s).next.link},{default:g(()=>{var R;return[u("span",{class:"desc",innerHTML:((R=i(e).docFooter)==null?void 0:R.next)||"Next page"},null,8,nt),u("span",{class:"title",innerHTML:i(s).next.text},null,8,et)]}),_:1},8,["href"])):f("",!0)])])):f("",!0)])):f("",!0)}}}),ot=w(tt,[["__scopeId","data-v-f5668bc0"]]),rt={class:"container"},at={class:"aside-container"},st={class:"aside-content"},it={class:"content"},lt={class:"content-container"},ct={class:"main"},pt=h({__name:"VPDoc",setup(n){const{theme:e}=_(),t=on(),{hasSidebar:r,hasAside:o,leftAside:s}=U(),l=x(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(d,m)=>{const k=Y("Content");return a(),c("div",{class:I(["VPDoc",{"has-sidebar":i(r),"has-aside":i(o)}])},[p(d.$slots,"doc-top",{},void 0,!0),u("div",rt,[i(o)?(a(),c("div",{key:0,class:I(["aside",{"left-aside":i(s)}])},[m[0]||(m[0]=u("div",{class:"aside-curtain"},null,-1)),u("div",at,[u("div",st,[v(Be,null,{"aside-top":g(()=>[p(d.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":g(()=>[p(d.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":g(()=>[p(d.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":g(()=>[p(d.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":g(()=>[p(d.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":g(()=>[p(d.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):f("",!0),u("div",it,[u("div",lt,[p(d.$slots,"doc-before",{},void 0,!0),u("main",ct,[v(k,{class:I(["vp-doc",[l.value,i(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),v(ot,null,{"doc-footer-before":g(()=>[p(d.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),p(d.$slots,"doc-after",{},void 0,!0)])])]),p(d.$slots,"doc-bottom",{},void 0,!0)],2)}}}),ut=w(pt,[["__scopeId","data-v-13ad82b5"]]),dt=h({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(n){const e=n,t=x(()=>e.href&&An.test(e.href)),r=x(()=>e.tag||(e.href?"a":"button"));return(o,s)=>(a(),y(H(r.value),{class:I(["VPButton",[n.size,n.theme]]),href:n.href?i(vn)(n.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:g(()=>[F(S(n.text),1)]),_:1},8,["class","href","target","rel"]))}}),mt=w(dt,[["__scopeId","data-v-f3371e65"]]),gt=["src","alt"],ft=h({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(n){return(e,t)=>{const r=Y("VPImage",!0);return n.image?(a(),c($,{key:0},[typeof n.image=="string"||"src"in n.image?(a(),c("img",q({key:0,class:"VPImage"},typeof n.image=="string"?e.$attrs:{...n.image,...e.$attrs},{src:i(gn)(typeof n.image=="string"?n.image:n.image.src),alt:n.alt??(typeof n.image=="string"?"":n.image.alt||"")}),null,16,gt)):(a(),c($,{key:1},[v(r,q({class:"dark",image:n.image.dark,alt:n.image.alt},e.$attrs),null,16,["image","alt"]),v(r,q({class:"light",image:n.image.light,alt:n.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):f("",!0)}}}),Z=w(ft,[["__scopeId","data-v-b02aa689"]]),ht={class:"container"},bt={class:"main"},vt={class:"heading"},yt=["innerHTML"],xt=["innerHTML"],kt=["innerHTML"],wt={key:0,class:"actions"},Ct={key:0,class:"image"},Tt={class:"image-container"},jt=h({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(n){const e=rn("hero-image-slot-exists");return(t,r)=>(a(),c("div",{class:I(["VPHero",{"has-image":n.image||i(e)}])},[u("div",ht,[u("div",bt,[p(t.$slots,"home-hero-info-before",{},void 0,!0),p(t.$slots,"home-hero-info",{},()=>[u("h1",vt,[n.name?(a(),c("span",{key:0,innerHTML:n.name,class:"name clip"},null,8,yt)):f("",!0),n.text?(a(),c("span",{key:1,innerHTML:n.text,class:"text"},null,8,xt)):f("",!0)]),n.tagline?(a(),c("p",{key:0,innerHTML:n.tagline,class:"tagline"},null,8,kt)):f("",!0)],!0),p(t.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(a(),c("div",wt,[(a(!0),c($,null,B(n.actions,o=>(a(),c("div",{key:o.link,class:"action"},[v(mt,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link,target:o.target,rel:o.rel},null,8,["theme","text","href","target","rel"])]))),128))])):f("",!0),p(t.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||i(e)?(a(),c("div",Ct,[u("div",Tt,[r[0]||(r[0]=u("div",{class:"image-bg"},null,-1)),p(t.$slots,"home-hero-image",{},()=>[n.image?(a(),y(Z,{key:0,class:"image-src",image:n.image},null,8,["image"])):f("",!0)],!0)])])):f("",!0)])],2))}}),_t=w(jt,[["__scopeId","data-v-df6a21dc"]]),Lt=h({__name:"VPHomeHero",setup(n){const{frontmatter:e}=_();return(t,r)=>i(e).hero?(a(),y(_t,{key:0,class:"VPHomeHero",name:i(e).hero.name,text:i(e).hero.text,tagline:i(e).hero.tagline,image:i(e).hero.image,actions:i(e).hero.actions},{"home-hero-info-before":g(()=>[p(t.$slots,"home-hero-info-before")]),"home-hero-info":g(()=>[p(t.$slots,"home-hero-info")]),"home-hero-info-after":g(()=>[p(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":g(()=>[p(t.$slots,"home-hero-actions-after")]),"home-hero-image":g(()=>[p(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):f("",!0)}}),St={class:"box"},At={key:0,class:"icon"},It=["innerHTML"],$t=["innerHTML"],Pt=["innerHTML"],Rt={key:4,class:"link-text"},Et={class:"link-text-value"},Mt=h({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(n){return(e,t)=>(a(),y(D,{class:"VPFeature",href:n.link,rel:n.rel,target:n.target,"no-icon":!0,tag:n.link?"a":"div"},{default:g(()=>[u("article",St,[typeof n.icon=="object"&&n.icon.wrap?(a(),c("div",At,[v(Z,{image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])])):typeof n.icon=="object"?(a(),y(Z,{key:1,image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])):n.icon?(a(),c("div",{key:2,class:"icon",innerHTML:n.icon},null,8,It)):f("",!0),u("h2",{class:"title",innerHTML:n.title},null,8,$t),n.details?(a(),c("p",{key:3,class:"details",innerHTML:n.details},null,8,Pt)):f("",!0),n.linkText?(a(),c("div",Rt,[u("p",Et,[F(S(n.linkText)+" ",1),t[0]||(t[0]=u("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):f("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ot=w(Mt,[["__scopeId","data-v-8eca0f1b"]]),Bt={key:0,class:"VPFeatures"},Vt={class:"container"},Ft={class:"items"},Ht=h({__name:"VPFeatures",props:{features:{}},setup(n){const e=n,t=x(()=>{const r=e.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,o)=>n.features?(a(),c("div",Bt,[u("div",Vt,[u("div",Ft,[(a(!0),c($,null,B(n.features,s=>(a(),c("div",{key:s.title,class:I(["item",[t.value]])},[v(Ot,{icon:s.icon,title:s.title,details:s.details,link:s.link,"link-text":s.linkText,rel:s.rel,target:s.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):f("",!0)}}),Dt=w(Ht,[["__scopeId","data-v-b2243f15"]]),zt=h({__name:"VPHomeFeatures",setup(n){const{frontmatter:e}=_();return(t,r)=>i(e).features?(a(),y(Dt,{key:0,class:"VPHomeFeatures",features:i(e).features},null,8,["features"])):f("",!0)}}),Nt=h({__name:"VPHomeContent",setup(n){const{width:e}=Kn({initialWidth:0,includeScrollbar:!1});return(t,r)=>(a(),c("div",{class:"vp-doc container",style:hn(i(e)?{"--vp-offset":`calc(50% - ${i(e)/2}px)`}:{})},[p(t.$slots,"default",{},void 0,!0)],4))}}),Ut=w(Nt,[["__scopeId","data-v-47ac3bee"]]),Gt=h({__name:"VPHome",setup(n){const{frontmatter:e,theme:t}=_();return(r,o)=>{const s=Y("Content");return a(),c("div",{class:I(["VPHome",{"external-link-icon-enabled":i(t).externalLinkIcon}])},[p(r.$slots,"home-hero-before",{},void 0,!0),v(Lt,null,{"home-hero-info-before":g(()=>[p(r.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":g(()=>[p(r.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":g(()=>[p(r.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":g(()=>[p(r.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":g(()=>[p(r.$slots,"home-hero-image",{},void 0,!0)]),_:3}),p(r.$slots,"home-hero-after",{},void 0,!0),p(r.$slots,"home-features-before",{},void 0,!0),v(zt),p(r.$slots,"home-features-after",{},void 0,!0),i(e).markdownStyles!==!1?(a(),y(Ut,{key:0},{default:g(()=>[v(s)]),_:1})):(a(),y(s,{key:1}))],2)}}}),qt=w(Gt,[["__scopeId","data-v-d9e15bbe"]]),Wt={},Yt={class:"VPPage"};function Kt(n,e){const t=Y("Content");return a(),c("div",Yt,[p(n.$slots,"page-top"),v(t),p(n.$slots,"page-bottom")])}const Jt=w(Wt,[["render",Kt]]),Qt=h({__name:"VPContent",setup(n){const{page:e,frontmatter:t}=_(),{hasSidebar:r}=U();return(o,s)=>(a(),c("div",{class:I(["VPContent",{"has-sidebar":i(r),"is-home":i(t).layout==="home"}]),id:"VPContent"},[i(e).isNotFound?p(o.$slots,"not-found",{},()=>[v(fe)],!0,0):i(t).layout==="page"?(a(),y(Jt,{key:1},{"page-top":g(()=>[p(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":g(()=>[p(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):i(t).layout==="home"?(a(),y(qt,{key:2},{"home-hero-before":g(()=>[p(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":g(()=>[p(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":g(()=>[p(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":g(()=>[p(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":g(()=>[p(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":g(()=>[p(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":g(()=>[p(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":g(()=>[p(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":g(()=>[p(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):i(t).layout&&i(t).layout!=="doc"?(a(),y(H(i(t).layout),{key:3})):(a(),y(ut,{key:4},{"doc-top":g(()=>[p(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":g(()=>[p(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":g(()=>[p(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":g(()=>[p(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":g(()=>[p(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":g(()=>[p(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":g(()=>[p(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":g(()=>[p(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":g(()=>[p(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":g(()=>[p(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":g(()=>[p(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Xt=w(Qt,[["__scopeId","data-v-af125bbf"]]),Zt={class:"container"},no=["innerHTML"],eo=["innerHTML"],to=h({__name:"VPFooter",setup(n){const{theme:e,frontmatter:t}=_(),{hasSidebar:r}=U();return(o,s)=>i(e).footer&&i(t).footer!==!1?(a(),c("footer",{key:0,class:I(["VPFooter",{"has-sidebar":i(r)}])},[u("div",Zt,[i(e).footer.message?(a(),c("p",{key:0,class:"message",innerHTML:i(e).footer.message},null,8,no)):f("",!0),i(e).footer.copyright?(a(),c("p",{key:1,class:"copyright",innerHTML:i(e).footer.copyright},null,8,eo)):f("",!0)])],2)):f("",!0)}}),oo=w(to,[["__scopeId","data-v-0e22472c"]]);function ro(){const{theme:n,frontmatter:e}=_(),t=Sn([]),r=x(()=>t.value.length>0);return tn(()=>{t.value=yn(e.value.outline??n.value.outline)}),{headers:t,hasLocalNav:r}}const ao={class:"menu-text"},so={class:"header"},io={class:"outline"},lo=h({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(n){const e=n,{theme:t}=_(),r=L(!1),o=L(0),s=L(),l=L();function d(b){var C;(C=s.value)!=null&&C.contains(b.target)||(r.value=!1)}N(r,b=>{if(b){document.addEventListener("click",d);return}document.removeEventListener("click",d)}),cn("Escape",()=>{r.value=!1}),tn(()=>{r.value=!1});function m(){r.value=!r.value,o.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function k(b){b.target.classList.contains("outline-link")&&(l.value&&(l.value.style.transition="none"),bn(()=>{r.value=!1}))}function T(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(b,C)=>(a(),c("div",{class:"VPLocalNavOutlineDropdown",style:hn({"--vp-vh":o.value+"px"}),ref_key:"main",ref:s},[n.headers.length>0?(a(),c("button",{key:0,onClick:m,class:I({open:r.value})},[u("span",ao,S(i(On)(i(t))),1),C[0]||(C[0]=u("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(a(),c("button",{key:1,onClick:T},S(i(t).returnToTopLabel||"Return to top"),1)),v(mn,{name:"flyout"},{default:g(()=>[r.value?(a(),c("div",{key:0,ref_key:"items",ref:l,class:"items",onClick:k},[u("div",so,[u("a",{class:"top-link",href:"#",onClick:T},S(i(t).returnToTopLabel||"Return to top"),1)]),u("div",io,[v(Bn,{headers:n.headers},null,8,["headers"])])],512)):f("",!0)]),_:1})],4))}}),co=w(lo,[["__scopeId","data-v-8e510909"]]),po={class:"container"},uo=["aria-expanded"],mo={class:"menu-text"},go=h({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(n){const{theme:e,frontmatter:t}=_(),{hasSidebar:r}=U(),{headers:o}=ro(),{y:s}=In(),l=L(0);z(()=>{l.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),tn(()=>{o.value=yn(t.value.outline??e.value.outline)});const d=x(()=>o.value.length===0),m=x(()=>d.value&&!r.value),k=x(()=>({VPLocalNav:!0,"has-sidebar":r.value,empty:d.value,fixed:m.value}));return(T,b)=>i(t).layout!=="home"&&(!m.value||i(s)>=l.value)?(a(),c("div",{key:0,class:I(k.value)},[u("div",po,[i(r)?(a(),c("button",{key:0,class:"menu","aria-expanded":n.open,"aria-controls":"VPSidebarNav",onClick:b[0]||(b[0]=C=>T.$emit("open-menu"))},[b[1]||(b[1]=u("span",{class:"vpi-align-left menu-icon"},null,-1)),u("span",mo,S(i(e).sidebarMenuLabel||"Menu"),1)],8,uo)):f("",!0),v(co,{headers:i(o),navHeight:l.value},null,8,["headers","navHeight"])])],2)):f("",!0)}}),fo=w(go,[["__scopeId","data-v-50dec29e"]]);function ho(){const n=L(!1);function e(){n.value=!0,window.addEventListener("resize",o)}function t(){n.value=!1,window.removeEventListener("resize",o)}function r(){n.value?t():e()}function o(){window.outerWidth>=768&&t()}const s=on();return N(()=>s.path,t),{isScreenOpen:n,openScreen:e,closeScreen:t,toggleScreen:r}}const bo={},vo={class:"VPSwitch",type:"button",role:"switch"},yo={class:"check"},xo={key:0,class:"icon"};function ko(n,e){return a(),c("button",vo,[u("span",yo,[n.$slots.default?(a(),c("span",xo,[p(n.$slots,"default",{},void 0,!0)])):f("",!0)])])}const wo=w(bo,[["render",ko],["__scopeId","data-v-c3b8a05f"]]),Co=h({__name:"VPSwitchAppearance",setup(n){const{isDark:e,theme:t}=_(),r=rn("toggle-appearance",()=>{e.value=!e.value}),o=L("");return fn(()=>{o.value=e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(s,l)=>(a(),y(wo,{title:o.value,class:"VPSwitchAppearance","aria-checked":i(e),onClick:i(r)},{default:g(()=>[...l[0]||(l[0]=[u("span",{class:"vpi-sun sun"},null,-1),u("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),xn=w(Co,[["__scopeId","data-v-adbda3c9"]]),To={key:0,class:"VPNavBarAppearance"},jo=h({__name:"VPNavBarAppearance",setup(n){const{site:e}=_();return(t,r)=>i(e).appearance&&i(e).appearance!=="force-dark"&&i(e).appearance!=="force-auto"?(a(),c("div",To,[v(xn)])):f("",!0)}}),_o=w(jo,[["__scopeId","data-v-e77e4542"]]),kn=L();let Vn=!1,sn=0;function Lo(n){const e=L(!1);if(K){!Vn&&So(),sn++;const t=N(kn,r=>{var o,s,l;r===n.el.value||(o=n.el.value)!=null&&o.contains(r)?(e.value=!0,(s=n.onFocus)==null||s.call(n)):(e.value=!1,(l=n.onBlur)==null||l.call(n))});en(()=>{t(),sn--,sn||Ao()})}return Jn(e)}function So(){document.addEventListener("focusin",Fn),Vn=!0,kn.value=document.activeElement}function Ao(){document.removeEventListener("focusin",Fn)}function Fn(){kn.value=document.activeElement}const Io={class:"VPMenuLink"},$o=["innerHTML"],Po=h({__name:"VPMenuLink",props:{item:{}},setup(n){const{page:e}=_();return(t,r)=>(a(),c("div",Io,[v(D,{class:I({active:i(W)(i(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon},{default:g(()=>[u("span",{innerHTML:n.item.text},null,8,$o)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),an=w(Po,[["__scopeId","data-v-cd8fc7e3"]]),Ro={class:"VPMenuGroup"},Eo={key:0,class:"title"},Mo=h({__name:"VPMenuGroup",props:{text:{},items:{}},setup(n){return(e,t)=>(a(),c("div",Ro,[n.text?(a(),c("p",Eo,S(n.text),1)):f("",!0),(a(!0),c($,null,B(n.items,r=>(a(),c($,null,["link"in r?(a(),y(an,{key:0,item:r},null,8,["item"])):f("",!0)],64))),256))]))}}),Oo=w(Mo,[["__scopeId","data-v-2e90b567"]]),Bo={class:"VPMenu"},Vo={key:0,class:"items"},Fo=h({__name:"VPMenu",props:{items:{}},setup(n){return(e,t)=>(a(),c("div",Bo,[n.items?(a(),c("div",Vo,[(a(!0),c($,null,B(n.items,r=>(a(),c($,{key:JSON.stringify(r)},["link"in r?(a(),y(an,{key:0,item:r},null,8,["item"])):"component"in r?(a(),y(H(r.component),q({key:1,ref_for:!0},r.props),null,16)):(a(),y(Oo,{key:2,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):f("",!0),p(e.$slots,"default",{},void 0,!0)]))}}),Ho=w(Fo,[["__scopeId","data-v-303e624b"]]),Do=["aria-expanded","aria-label"],zo={key:0,class:"text"},No=["innerHTML"],Uo={key:1,class:"vpi-more-horizontal icon"},Go={class:"menu"},qo=h({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(n){const e=L(!1),t=L();Lo({el:t,onBlur:r});function r(){e.value=!1}return(o,s)=>(a(),c("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:s[1]||(s[1]=l=>e.value=!0),onMouseleave:s[2]||(s[2]=l=>e.value=!1)},[u("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":n.label,onClick:s[0]||(s[0]=l=>e.value=!e.value)},[n.button||n.icon?(a(),c("span",zo,[n.icon?(a(),c("span",{key:0,class:I([n.icon,"option-icon"])},null,2)):f("",!0),n.button?(a(),c("span",{key:1,innerHTML:n.button},null,8,No)):f("",!0),s[3]||(s[3]=u("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(a(),c("span",Uo))],8,Do),u("div",Go,[v(Ho,{items:n.items},{default:g(()=>[p(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),wn=w(qo,[["__scopeId","data-v-f89bf036"]]),Wo=["href","aria-label","innerHTML"],Yo=h({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(n){const e=n,t=L();z(async()=>{var s;await bn();const o=(s=t.value)==null?void 0:s.children[0];o instanceof HTMLElement&&o.className.startsWith("vpi-social-")&&(getComputedStyle(o).maskImage||getComputedStyle(o).webkitMaskImage)==="none"&&o.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const r=x(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(o,s)=>(a(),c("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:n.link,"aria-label":n.ariaLabel??(typeof n.icon=="string"?n.icon:""),target:"_blank",rel:"noopener",innerHTML:r.value},null,8,Wo))}}),Ko=w(Yo,[["__scopeId","data-v-e1bd8700"]]),Jo={class:"VPSocialLinks"},Qo=h({__name:"VPSocialLinks",props:{links:{}},setup(n){return(e,t)=>(a(),c("div",Jo,[(a(!0),c($,null,B(n.links,({link:r,icon:o,ariaLabel:s})=>(a(),y(Ko,{key:r,icon:o,link:r,ariaLabel:s},null,8,["icon","link","ariaLabel"]))),128))]))}}),Cn=w(Qo,[["__scopeId","data-v-90cd8a6e"]]),Xo={key:0,class:"group translations"},Zo={class:"trans-title"},nr={key:1,class:"group"},er={class:"item appearance"},tr={class:"label"},or={class:"appearance-action"},rr={key:2,class:"group"},ar={class:"item social-links"},sr=h({__name:"VPNavBarExtra",setup(n){const{site:e,theme:t}=_(),{localeLinks:r,currentLang:o}=J({correspondingLink:!0}),s=x(()=>r.value.length&&o.value.label||e.value.appearance||t.value.socialLinks);return(l,d)=>s.value?(a(),y(wn,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:g(()=>[i(r).length&&i(o).label?(a(),c("div",Xo,[u("p",Zo,S(i(o).label),1),(a(!0),c($,null,B(i(r),m=>(a(),y(an,{key:m.link,item:m},null,8,["item"]))),128))])):f("",!0),i(e).appearance&&i(e).appearance!=="force-dark"&&i(e).appearance!=="force-auto"?(a(),c("div",nr,[u("div",er,[u("p",tr,S(i(t).darkModeSwitchLabel||"Appearance"),1),u("div",or,[v(xn)])])])):f("",!0),i(t).socialLinks?(a(),c("div",rr,[u("div",ar,[v(Cn,{class:"social-links-list",links:i(t).socialLinks},null,8,["links"])])])):f("",!0)]),_:1})):f("",!0)}}),ir=w(sr,[["__scopeId","data-v-13330135"]]),lr=["aria-expanded"],cr=h({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(n){return(e,t)=>(a(),c("button",{type:"button",class:I(["VPNavBarHamburger",{active:n.active}]),"aria-label":"mobile navigation","aria-expanded":n.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=r=>e.$emit("click"))},[...t[1]||(t[1]=[u("span",{class:"container"},[u("span",{class:"top"}),u("span",{class:"middle"}),u("span",{class:"bottom"})],-1)])],10,lr))}}),pr=w(cr,[["__scopeId","data-v-d34ecdf0"]]),ur=["innerHTML"],dr=h({__name:"VPNavBarMenuLink",props:{item:{}},setup(n){const{page:e}=_();return(t,r)=>(a(),y(D,{class:I({VPNavBarMenuLink:!0,active:i(W)(i(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,tabindex:"0"},{default:g(()=>[u("span",{innerHTML:n.item.text},null,8,ur)]),_:1},8,["class","href","target","rel","no-icon"]))}}),mr=w(dr,[["__scopeId","data-v-dcf9832e"]]),gr=h({__name:"VPNavBarMenuGroup",props:{item:{}},setup(n){const e=n,{page:t}=_(),r=s=>"component"in s?!1:"link"in s?W(t.value.relativePath,s.link,!!e.item.activeMatch):s.items.some(r),o=x(()=>r(e.item));return(s,l)=>(a(),y(wn,{class:I({VPNavBarMenuGroup:!0,active:i(W)(i(t).relativePath,n.item.activeMatch,!!n.item.activeMatch)||o.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),fr={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},hr=h({__name:"VPNavBarMenu",setup(n){const{theme:e}=_();return(t,r)=>i(e).nav?(a(),c("nav",fr,[r[0]||(r[0]=u("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(a(!0),c($,null,B(i(e).nav,o=>(a(),c($,{key:JSON.stringify(o)},["link"in o?(a(),y(mr,{key:0,item:o},null,8,["item"])):"component"in o?(a(),y(H(o.component),q({key:1,ref_for:!0},o.props),null,16)):(a(),y(gr,{key:2,item:o},null,8,["item"]))],64))),128))])):f("",!0)}}),br=w(hr,[["__scopeId","data-v-d2892ffb"]]);function vr(n){const{localeIndex:e,theme:t}=_();function r(o){var P,R,M;const s=o.split("."),l=(P=t.value.search)==null?void 0:P.options,d=l&&typeof l=="object",m=d&&((M=(R=l.locales)==null?void 0:R[e.value])==null?void 0:M.translations)||null,k=d&&l.translations||null;let T=m,b=k,C=n;const j=s.pop();for(const O of s){let V=null;const A=C==null?void 0:C[O];A&&(V=C=A);const E=b==null?void 0:b[O];E&&(V=b=E);const G=T==null?void 0:T[O];G&&(V=T=G),A||(C=V),E||(b=V),G||(T=V)}return(T==null?void 0:T[j])??(b==null?void 0:b[j])??(C==null?void 0:C[j])??""}return r}const yr=["aria-label"],xr={class:"DocSearch-Button-Container"},kr={class:"DocSearch-Button-Placeholder"},_n=h({__name:"VPNavBarSearchButton",setup(n){const t=vr({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(r,o)=>(a(),c("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":i(t)("button.buttonAriaLabel")},[u("span",xr,[o[0]||(o[0]=u("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),u("span",kr,S(i(t)("button.buttonText")),1)]),o[1]||(o[1]=u("span",{class:"DocSearch-Button-Keys"},[u("kbd",{class:"DocSearch-Button-Key"}),u("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,yr))}}),wr={class:"VPNavBarSearch"},Cr={id:"local-search"},Tr={key:1,id:"docsearch"},jr=h({__name:"VPNavBarSearch",setup(n){const e=Qn(()=>$n(()=>import("./VPLocalSearchBox.BQ2GaasN.js"),__vite__mapDeps([0,1]))),t=()=>null,{theme:r}=_(),o=L(!1),s=L(!1);z(()=>{});function l(){o.value||(o.value=!0,setTimeout(d,16))}function d(){const b=new Event("keydown");b.key="k",b.metaKey=!0,window.dispatchEvent(b),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||d()},16)}function m(b){const C=b.target,j=C.tagName;return C.isContentEditable||j==="INPUT"||j==="SELECT"||j==="TEXTAREA"}const k=L(!1);cn("k",b=>{(b.ctrlKey||b.metaKey)&&(b.preventDefault(),k.value=!0)}),cn("/",b=>{m(b)||(b.preventDefault(),k.value=!0)});const T="local";return(b,C)=>{var j;return a(),c("div",wr,[i(T)==="local"?(a(),c($,{key:0},[k.value?(a(),y(i(e),{key:0,onClose:C[0]||(C[0]=P=>k.value=!1)})):f("",!0),u("div",Cr,[v(_n,{onClick:C[1]||(C[1]=P=>k.value=!0)})])],64)):i(T)==="algolia"?(a(),c($,{key:1},[o.value?(a(),y(i(t),{key:0,algolia:((j=i(r).search)==null?void 0:j.options)??i(r).algolia,onVnodeBeforeMount:C[2]||(C[2]=P=>s.value=!0)},null,8,["algolia"])):f("",!0),s.value?f("",!0):(a(),c("div",Tr,[v(_n,{onClick:l})]))],64)):f("",!0)])}}}),_r=h({__name:"VPNavBarSocialLinks",setup(n){const{theme:e}=_();return(t,r)=>i(e).socialLinks?(a(),y(Cn,{key:0,class:"VPNavBarSocialLinks",links:i(e).socialLinks},null,8,["links"])):f("",!0)}}),Lr=w(_r,[["__scopeId","data-v-5287c49b"]]),Sr=["href","rel","target"],Ar=["innerHTML"],Ir={key:2},$r=h({__name:"VPNavBarTitle",setup(n){const{site:e,theme:t}=_(),{hasSidebar:r}=U(),{currentLang:o}=J(),s=x(()=>{var m;return typeof t.value.logoLink=="string"?t.value.logoLink:(m=t.value.logoLink)==null?void 0:m.link}),l=x(()=>{var m;return typeof t.value.logoLink=="string"||(m=t.value.logoLink)==null?void 0:m.rel}),d=x(()=>{var m;return typeof t.value.logoLink=="string"||(m=t.value.logoLink)==null?void 0:m.target});return(m,k)=>(a(),c("div",{class:I(["VPNavBarTitle",{"has-sidebar":i(r)}])},[u("a",{class:"title",href:s.value??i(vn)(i(o).link),rel:l.value,target:d.value},[p(m.$slots,"nav-bar-title-before",{},void 0,!0),i(t).logo?(a(),y(Z,{key:0,class:"logo",image:i(t).logo},null,8,["image"])):f("",!0),i(t).siteTitle?(a(),c("span",{key:1,innerHTML:i(t).siteTitle},null,8,Ar)):i(t).siteTitle===void 0?(a(),c("span",Ir,S(i(e).title),1)):f("",!0),p(m.$slots,"nav-bar-title-after",{},void 0,!0)],8,Sr)],2))}}),Pr=w($r,[["__scopeId","data-v-2143616f"]]),Rr={class:"items"},Er={class:"title"},Mr=h({__name:"VPNavBarTranslations",setup(n){const{theme:e}=_(),{localeLinks:t,currentLang:r}=J({correspondingLink:!0});return(o,s)=>i(t).length&&i(r).label?(a(),y(wn,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:i(e).langMenuLabel||"Change language"},{default:g(()=>[u("div",Rr,[u("p",Er,S(i(r).label),1),(a(!0),c($,null,B(i(t),l=>(a(),y(an,{key:l.link,item:l},null,8,["item"]))),128))])]),_:1},8,["label"])):f("",!0)}}),Or=w(Mr,[["__scopeId","data-v-0bb5c682"]]),Br={class:"wrapper"},Vr={class:"container"},Fr={class:"title"},Hr={class:"content"},Dr={class:"content-body"},zr=h({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(n){const e=n,{y:t}=In(),{hasSidebar:r}=U(),{frontmatter:o}=_(),s=L({});return fn(()=>{s.value={"has-sidebar":r.value,home:o.value.layout==="home",top:t.value===0,"screen-open":e.isScreenOpen}}),(l,d)=>(a(),c("div",{class:I(["VPNavBar",s.value])},[u("div",Br,[u("div",Vr,[u("div",Fr,[v(Pr,null,{"nav-bar-title-before":g(()=>[p(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":g(()=>[p(l.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),u("div",Hr,[u("div",Dr,[p(l.$slots,"nav-bar-content-before",{},void 0,!0),v(jr,{class:"search"}),v(br,{class:"menu"}),v(Or,{class:"translations"}),v(_o,{class:"appearance"}),v(Lr,{class:"social-links"}),v(ir,{class:"extra"}),p(l.$slots,"nav-bar-content-after",{},void 0,!0),v(pr,{class:"hamburger",active:n.isScreenOpen,onClick:d[0]||(d[0]=m=>l.$emit("toggle-screen"))},null,8,["active"])])])])]),d[1]||(d[1]=u("div",{class:"divider"},[u("div",{class:"divider-line"})],-1))],2))}}),Nr=w(zr,[["__scopeId","data-v-54bd18fc"]]),Ur={key:0,class:"VPNavScreenAppearance"},Gr={class:"text"},qr=h({__name:"VPNavScreenAppearance",setup(n){const{site:e,theme:t}=_();return(r,o)=>i(e).appearance&&i(e).appearance!=="force-dark"&&i(e).appearance!=="force-auto"?(a(),c("div",Ur,[u("p",Gr,S(i(t).darkModeSwitchLabel||"Appearance"),1),v(xn)])):f("",!0)}}),Wr=w(qr,[["__scopeId","data-v-faf27e26"]]),Yr=["innerHTML"],Kr=h({__name:"VPNavScreenMenuLink",props:{item:{}},setup(n){const e=rn("close-screen");return(t,r)=>(a(),y(D,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:i(e)},{default:g(()=>[u("span",{innerHTML:n.item.text},null,8,Yr)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Jr=w(Kr,[["__scopeId","data-v-cb488fb1"]]),Qr=["innerHTML"],Xr=h({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(n){const e=rn("close-screen");return(t,r)=>(a(),y(D,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:i(e)},{default:g(()=>[u("span",{innerHTML:n.item.text},null,8,Qr)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Hn=w(Xr,[["__scopeId","data-v-6e2aec58"]]),Zr={class:"VPNavScreenMenuGroupSection"},na={key:0,class:"title"},ea=h({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(n){return(e,t)=>(a(),c("div",Zr,[n.text?(a(),c("p",na,S(n.text),1)):f("",!0),(a(!0),c($,null,B(n.items,r=>(a(),y(Hn,{key:r.text,item:r},null,8,["item"]))),128))]))}}),ta=w(ea,[["__scopeId","data-v-1fe0990b"]]),oa=["aria-controls","aria-expanded"],ra=["innerHTML"],aa=["id"],sa={key:0,class:"item"},ia={key:1,class:"item"},la={key:2,class:"group"},ca=h({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(n){const e=n,t=L(!1),r=x(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function o(){t.value=!t.value}return(s,l)=>(a(),c("div",{class:I(["VPNavScreenMenuGroup",{open:t.value}])},[u("button",{class:"button","aria-controls":r.value,"aria-expanded":t.value,onClick:o},[u("span",{class:"button-text",innerHTML:n.text},null,8,ra),l[0]||(l[0]=u("span",{class:"vpi-plus button-icon"},null,-1))],8,oa),u("div",{id:r.value,class:"items"},[(a(!0),c($,null,B(n.items,d=>(a(),c($,{key:JSON.stringify(d)},["link"in d?(a(),c("div",sa,[v(Hn,{item:d},null,8,["item"])])):"component"in d?(a(),c("div",ia,[(a(),y(H(d.component),q({ref_for:!0},d.props,{"screen-menu":""}),null,16))])):(a(),c("div",la,[v(ta,{text:d.text,items:d.items},null,8,["text","items"])]))],64))),128))],8,aa)],2))}}),pa=w(ca,[["__scopeId","data-v-ebf37338"]]),ua={key:0,class:"VPNavScreenMenu"},da=h({__name:"VPNavScreenMenu",setup(n){const{theme:e}=_();return(t,r)=>i(e).nav?(a(),c("nav",ua,[(a(!0),c($,null,B(i(e).nav,o=>(a(),c($,{key:JSON.stringify(o)},["link"in o?(a(),y(Jr,{key:0,item:o},null,8,["item"])):"component"in o?(a(),y(H(o.component),q({key:1,ref_for:!0},o.props,{"screen-menu":""}),null,16)):(a(),y(pa,{key:2,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):f("",!0)}}),ma=h({__name:"VPNavScreenSocialLinks",setup(n){const{theme:e}=_();return(t,r)=>i(e).socialLinks?(a(),y(Cn,{key:0,class:"VPNavScreenSocialLinks",links:i(e).socialLinks},null,8,["links"])):f("",!0)}}),ga={class:"list"},fa=h({__name:"VPNavScreenTranslations",setup(n){const{localeLinks:e,currentLang:t}=J({correspondingLink:!0}),r=L(!1);function o(){r.value=!r.value}return(s,l)=>i(e).length&&i(t).label?(a(),c("div",{key:0,class:I(["VPNavScreenTranslations",{open:r.value}])},[u("button",{class:"title",onClick:o},[l[0]||(l[0]=u("span",{class:"vpi-languages icon lang"},null,-1)),F(" "+S(i(t).label)+" ",1),l[1]||(l[1]=u("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),u("ul",ga,[(a(!0),c($,null,B(i(e),d=>(a(),c("li",{key:d.link,class:"item"},[v(D,{class:"link",href:d.link},{default:g(()=>[F(S(d.text),1)]),_:2},1032,["href"])]))),128))])],2)):f("",!0)}}),ha=w(fa,[["__scopeId","data-v-be7cdf04"]]),ba={class:"container"},va=h({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(n){const e=L(null),t=Pn(K?document.body:null);return(r,o)=>(a(),y(mn,{name:"fade",onEnter:o[0]||(o[0]=s=>t.value=!0),onAfterLeave:o[1]||(o[1]=s=>t.value=!1)},{default:g(()=>[n.open?(a(),c("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[u("div",ba,[p(r.$slots,"nav-screen-content-before",{},void 0,!0),v(da,{class:"menu"}),v(ha,{class:"translations"}),v(Wr,{class:"appearance"}),v(ma,{class:"social-links"}),p(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):f("",!0)]),_:3}))}}),ya=w(va,[["__scopeId","data-v-cf90cc17"]]),xa={key:0,class:"VPNav"},ka=h({__name:"VPNav",setup(n){const{isScreenOpen:e,closeScreen:t,toggleScreen:r}=ho(),{frontmatter:o}=_(),s=x(()=>o.value.navbar!==!1);return Rn("close-screen",t),nn(()=>{K&&document.documentElement.classList.toggle("hide-nav",!s.value)}),(l,d)=>s.value?(a(),c("header",xa,[v(Nr,{"is-screen-open":i(e),onToggleScreen:i(r)},{"nav-bar-title-before":g(()=>[p(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":g(()=>[p(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":g(()=>[p(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":g(()=>[p(l.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),v(ya,{open:i(e)},{"nav-screen-content-before":g(()=>[p(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":g(()=>[p(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):f("",!0)}}),wa=w(ka,[["__scopeId","data-v-2d0da0aa"]]),Ca=["role","tabindex"],Ta={key:1,class:"items"},ja=h({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(n){const e=n,{collapsed:t,collapsible:r,isLink:o,isActiveLink:s,hasActiveLink:l,hasChildren:d,toggle:m}=ye(x(()=>e.item)),k=x(()=>d.value?"section":"div"),T=x(()=>o.value?"a":"div"),b=x(()=>d.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),C=x(()=>o.value?void 0:"button"),j=x(()=>[[`level-${e.depth}`],{collapsible:r.value},{collapsed:t.value},{"is-link":o.value},{"is-active":s.value},{"has-active":l.value}]);function P(M){"key"in M&&M.key!=="Enter"||!e.item.link&&m()}function R(){e.item.link&&m()}return(M,O)=>{const V=Y("VPSidebarItem",!0);return a(),y(H(k.value),{class:I(["VPSidebarItem",j.value])},{default:g(()=>[n.item.text?(a(),c("div",q({key:0,class:"item",role:C.value},Xn(n.item.items?{click:P,keydown:P}:{},!0),{tabindex:n.item.items&&0}),[O[1]||(O[1]=u("div",{class:"indicator"},null,-1)),n.item.link?(a(),y(D,{key:0,tag:T.value,class:"link",href:n.item.link,rel:n.item.rel,target:n.item.target},{default:g(()=>[(a(),y(H(b.value),{class:"text",innerHTML:n.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(a(),y(H(b.value),{key:1,class:"text",innerHTML:n.item.text},null,8,["innerHTML"])),n.item.collapsed!=null&&n.item.items&&n.item.items.length?(a(),c("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:R,onKeydown:Zn(R,["enter"]),tabindex:"0"},[...O[0]||(O[0]=[u("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):f("",!0)],16,Ca)):f("",!0),n.item.items&&n.item.items.length?(a(),c("div",Ta,[n.depth<5?(a(!0),c($,{key:0},B(n.item.items,A=>(a(),y(V,{key:A.text,item:A,depth:n.depth+1},null,8,["item","depth"]))),128)):f("",!0)])):f("",!0)]),_:1},8,["class"])}}}),_a=w(ja,[["__scopeId","data-v-86917459"]]),La=h({__name:"VPSidebarGroup",props:{items:{}},setup(n){const e=L(!0);let t=null;return z(()=>{t=setTimeout(()=>{t=null,e.value=!1},300)}),En(()=>{t!=null&&(clearTimeout(t),t=null)}),(r,o)=>(a(!0),c($,null,B(n.items,s=>(a(),c("div",{key:s.text,class:I(["group",{"no-transition":e.value}])},[v(_a,{item:s,depth:0},null,8,["item"])],2))),128))}}),Sa=w(La,[["__scopeId","data-v-9272b848"]]),Aa={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Ia=h({__name:"VPSidebar",props:{open:{type:Boolean}},setup(n){const{sidebarGroups:e,hasSidebar:t}=U(),r=n,o=L(null),s=Pn(K?document.body:null);N([r,o],()=>{var d;r.open?(s.value=!0,(d=o.value)==null||d.focus()):s.value=!1},{immediate:!0,flush:"post"});const l=L(0);return N(e,()=>{l.value+=1},{deep:!0}),(d,m)=>i(t)?(a(),c("aside",{key:0,class:I(["VPSidebar",{open:n.open}]),ref_key:"navEl",ref:o,onClick:m[0]||(m[0]=ne(()=>{},["stop"]))},[m[2]||(m[2]=u("div",{class:"curtain"},null,-1)),u("nav",Aa,[m[1]||(m[1]=u("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),p(d.$slots,"sidebar-nav-before",{},void 0,!0),(a(),y(Sa,{items:i(e),key:l.value},null,8,["items"])),p(d.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):f("",!0)}}),$a=w(Ia,[["__scopeId","data-v-aed26b42"]]),Pa=h({__name:"VPSkipLink",setup(n){const{theme:e}=_(),t=on(),r=L();N(()=>t.path,()=>r.value.focus());function o({target:s}){const l=document.getElementById(decodeURIComponent(s.hash).slice(1));if(l){const d=()=>{l.removeAttribute("tabindex"),l.removeEventListener("blur",d)};l.setAttribute("tabindex","-1"),l.addEventListener("blur",d),l.focus(),window.scrollTo(0,0)}}return(s,l)=>(a(),c($,null,[u("span",{ref_key:"backToTop",ref:r,tabindex:"-1"},null,512),u("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:o},S(i(e).skipToContentLabel||"Skip to content"),1)],64))}}),Ra=w(Pa,[["__scopeId","data-v-b5d1cac4"]]),Ea=h({__name:"Layout",setup(n){const{isOpen:e,open:t,close:r}=U(),o=on();N(()=>o.path,r),ve(e,r);const{frontmatter:s}=_(),l=ee(),d=x(()=>!!l["home-hero-image"]);return Rn("hero-image-slot-exists",d),(m,k)=>{const T=Y("Content");return i(s).layout!==!1?(a(),c("div",{key:0,class:I(["Layout",i(s).pageClass])},[p(m.$slots,"layout-top",{},void 0,!0),v(Ra),v(ae,{class:"backdrop",show:i(e),onClick:i(r)},null,8,["show","onClick"]),v(wa,null,{"nav-bar-title-before":g(()=>[p(m.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":g(()=>[p(m.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":g(()=>[p(m.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":g(()=>[p(m.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":g(()=>[p(m.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":g(()=>[p(m.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),v(fo,{open:i(e),onOpenMenu:i(t)},null,8,["open","onOpenMenu"]),v($a,{open:i(e)},{"sidebar-nav-before":g(()=>[p(m.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":g(()=>[p(m.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),v(Xt,null,{"page-top":g(()=>[p(m.$slots,"page-top",{},void 0,!0)]),"page-bottom":g(()=>[p(m.$slots,"page-bottom",{},void 0,!0)]),"not-found":g(()=>[p(m.$slots,"not-found",{},void 0,!0)]),"home-hero-before":g(()=>[p(m.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":g(()=>[p(m.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":g(()=>[p(m.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":g(()=>[p(m.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":g(()=>[p(m.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":g(()=>[p(m.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":g(()=>[p(m.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":g(()=>[p(m.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":g(()=>[p(m.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":g(()=>[p(m.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":g(()=>[p(m.$slots,"doc-before",{},void 0,!0)]),"doc-after":g(()=>[p(m.$slots,"doc-after",{},void 0,!0)]),"doc-top":g(()=>[p(m.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":g(()=>[p(m.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":g(()=>[p(m.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":g(()=>[p(m.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":g(()=>[p(m.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":g(()=>[p(m.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":g(()=>[p(m.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":g(()=>[p(m.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),v(oo),p(m.$slots,"layout-bottom",{},void 0,!0)],2)):(a(),y(T,{key:1}))}}}),Ma=w(Ea,[["__scopeId","data-v-52b0ccd5"]]),Oa={Layout:Ma,enhanceApp:({app:n})=>{n.component("Badge",te)}},Ba={title:"订单分层架构",description:"领域模型、仓储接口、DI Token 与 Facade 状态层。",entry:"src/app/app.ts",playground:!0,files:{"README.md":`# Scaffold

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Development server

To start a local development server, run:

\`\`\`bash
ng serve
\`\`\`

Once the server is running, open your browser and navigate to \`http://localhost:4200/\`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

\`\`\`bash
ng generate component component-name
\`\`\`

For a complete list of available schematics (such as \`components\`, \`directives\`, or \`pipes\`), run:

\`\`\`bash
ng generate --help
\`\`\`

## Building

To build the project run:

\`\`\`bash
ng build
\`\`\`

This will compile your project and store the build artifacts in the \`dist/\` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

\`\`\`bash
ng test
\`\`\`

## Running end-to-end tests

For end-to-end (e2e) testing, run:

\`\`\`bash
ng e2e
\`\`\`

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
`,"angular.json":`{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "architecture": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "architecture:build:production"
            },
            "development": {
              "buildTarget": "architecture:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}
`,"package.json":`{
  "name": "architecture",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "22.2.3",
    "@angular/compiler": "22.2.3",
    "@angular/core": "22.2.3",
    "@angular/forms": "22.2.3",
    "@angular/platform-browser": "22.2.3",
    "@angular/router": "22.2.3",
    "rxjs": "7.8.2",
    "tslib": "2.8.1"
  },
  "devDependencies": {
    "@angular/build": "22.2.3",
    "@angular/cli": "22.2.3",
    "@angular/compiler-cli": "22.2.3",
    "jsdom": "30.0.0",
    "typescript": "~6.0.2",
    "vitest": "^5.0.0"
  },
  "description": "分层架构与仓储模式"
}
`,"src/app/app.config.ts":`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { InMemoryOrderRepository } from './core/order.repository';
import { ORDER_REPOSITORY } from './core/tokens';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // 切换真实 HTTP 实现时，只需替换这一行
    { provide: ORDER_REPOSITORY, useClass: InMemoryOrderRepository },
  ],
};
`,"src/app/app.css":`:host { display: block; padding: 24px; }
.page { max-width: 660px; margin: 0 auto; }
.head h1 { margin: 0 0 6px; font-size: 28px; }
.head p { margin: 0 0 18px; color: var(--muted); }
.card { padding: 20px; background: #fff; border: 1px solid var(--line); border-radius: 14px; }
.form { display: grid; grid-template-columns: 90px 1fr; gap: 8px 10px; align-items: center; }
.form input { padding: 9px 11px; border: 1px solid var(--line); border-radius: 8px; }
.form button { grid-column: 2; justify-self: start; border: 0; background: var(--ng-red); color: #fff; border-radius: 8px; padding: 9px 14px; font-weight: 600; }
.status { font-size: 13px; color: var(--muted); }
.status.error { color: #b91c1c; }
ul { list-style: none; margin: 16px 0 0; padding: 0; display: grid; gap: 8px; }
li { display: grid; grid-template-columns: 1fr auto auto; gap: 12px; align-items: center; padding: 11px 12px; background: #f9fafb; border-radius: 9px; }
.muted { color: var(--muted); font-size: 12px; }
.total { margin: 16px 0 0; text-align: right; color: var(--muted); }
.total strong { color: var(--ng-red); font-size: 20px; }
`,"src/app/app.html":`<main class="page">
  <header class="head">
    <h1>订单分层架构</h1>
    <p>组件 → Facade → 仓储接口 → 内存实现，依赖方向始终向内。</p>
  </header>

  <section class="card">
    <div class="form">
      <label for="title">订单名称</label>
      <input id="title" type="text" [value]="title()" (input)="onTitle($event)" placeholder="例如：增值服务" />
      <label for="amount">金额</label>
      <input id="amount" type="number" min="1" [value]="amount()" (input)="onAmount($event)" />
      <button type="button" (click)="add()">新增订单</button>
    </div>

    @if (facade.loading()) {
      <p class="status" role="status">加载中...</p>
    }
    @if (facade.error()) {
      <p class="status error" role="alert">{{ facade.error() }}</p>
    }

    <ul>
      @for (order of facade.orders(); track order.id) {
        <li>
          <span>{{ order.title }}</span>
          <span class="muted">{{ order.createdAt }}</span>
          <strong>{{ order.amount }} 元</strong>
        </li>
      }
    </ul>

    <p class="total">合计：<strong>{{ facade.total() }} 元</strong></p>
  </section>
</main>
`,"src/app/app.ts":`import { Component, inject, signal } from '@angular/core';
import { OrdersFacade } from './features/orders/orders.facade';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly facade = inject(OrdersFacade);
  protected readonly title = signal('');
  protected readonly amount = signal(0);

  constructor() {
    this.facade.load();
  }

  protected onTitle(event: Event): void {
    this.title.set((event.target as HTMLInputElement).value);
  }

  protected onAmount(event: Event): void {
    this.amount.set(Number((event.target as HTMLInputElement).value));
  }

  protected add(): void {
    this.facade.add(this.title(), this.amount());
    this.title.set('');
    this.amount.set(0);
  }
}
`,"src/app/core/order.model.ts":`export interface Order {
  id: string;
  title: string;
  amount: number;
  createdAt: string;
}
`,"src/app/core/order.repository.ts":`import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Order } from './order.model';

// 领域层只依赖接口，不关心数据来自 HTTP、IndexedDB 还是内存
export interface OrderRepository {
  list(): Observable<Order[]>;
  create(title: string, amount: number): Observable<Order>;
}

@Injectable()
export class InMemoryOrderRepository implements OrderRepository {
  private readonly orders: Order[] = [
    { id: 'o-1', title: '年度订阅', amount: 699, createdAt: '2026-10-01' },
    { id: 'o-2', title: '团队扩容', amount: 1299, createdAt: '2026-10-08' },
  ];

  list(): Observable<Order[]> {
    return of(this.orders).pipe(delay(300));
  }

  create(title: string, amount: number): Observable<Order> {
    const order: Order = {
      id: 'o-' + (this.orders.length + 1),
      title,
      amount,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    this.orders.push(order);
    return of(order).pipe(delay(200));
  }
}
`,"src/app/core/tokens.ts":`import { InjectionToken } from '@angular/core';
import { OrderRepository } from './order.repository';

// 用 Token 绑定接口，测试时可替换为 Fake 实现
export const ORDER_REPOSITORY = new InjectionToken<OrderRepository>('OrderRepository');
`,"src/app/features/orders/orders.facade.ts":`import { Injectable, computed, inject, signal } from '@angular/core';
import { Order } from '../../core/order.model';
import { ORDER_REPOSITORY } from '../../core/tokens';

@Injectable({ providedIn: 'root' })
export class OrdersFacade {
  private readonly repository = inject(ORDER_REPOSITORY);

  private readonly state = signal<Order[]>([]);
  readonly orders = this.state.asReadonly();
  readonly total = computed(() => this.state().reduce((sum, order) => sum + order.amount, 0));
  readonly loading = signal(false);
  readonly error = signal('');

  load(): void {
    this.loading.set(true);
    this.error.set('');
    this.repository.list().subscribe({
      next: (orders) => {
        this.state.set(orders);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('订单加载失败，请稍后重试');
        this.loading.set(false);
      },
    });
  }

  add(title: string, amount: number): void {
    if (!title.trim() || amount <= 0) {
      this.error.set('请填写有效的订单名称与金额');
      return;
    }
    this.error.set('');
    this.repository.create(title.trim(), amount).subscribe((order) => {
      this.state.update((orders) => [...orders, order]);
    });
  }
}
`,"src/index.html":`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>分层架构与仓储模式</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`,"src/main.ts":`import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
`,"src/styles.css":`:root {
  --ng-red: #dd0031;
  --ng-pink: #ff4d6d;
  --ink: #1f2328;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg: #f6f7fb;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
`,"tsconfig.app.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
`,"tsconfig.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
`,"tsconfig.spec.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
`}},Va={title:"注入器与变更检测",description:"组件级注入器覆盖、OnPush 与手动 detectChanges。",entry:"src/app/app.ts",playground:!0,files:{"README.md":`# Scaffold

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Development server

To start a local development server, run:

\`\`\`bash
ng serve
\`\`\`

Once the server is running, open your browser and navigate to \`http://localhost:4200/\`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

\`\`\`bash
ng generate component component-name
\`\`\`

For a complete list of available schematics (such as \`components\`, \`directives\`, or \`pipes\`), run:

\`\`\`bash
ng generate --help
\`\`\`

## Building

To build the project run:

\`\`\`bash
ng build
\`\`\`

This will compile your project and store the build artifacts in the \`dist/\` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

\`\`\`bash
ng test
\`\`\`

## Running end-to-end tests

For end-to-end (e2e) testing, run:

\`\`\`bash
ng e2e
\`\`\`

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
`,"angular.json":`{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "internals": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "internals:build:production"
            },
            "development": {
              "buildTarget": "internals:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}
`,"package.json":`{
  "name": "internals",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "22.2.3",
    "@angular/compiler": "22.2.3",
    "@angular/core": "22.2.3",
    "@angular/forms": "22.2.3",
    "@angular/platform-browser": "22.2.3",
    "@angular/router": "22.2.3",
    "rxjs": "7.8.2",
    "tslib": "2.8.1"
  },
  "devDependencies": {
    "@angular/build": "22.2.3",
    "@angular/cli": "22.2.3",
    "@angular/compiler-cli": "22.2.3",
    "jsdom": "30.0.0",
    "typescript": "~6.0.2",
    "vitest": "^5.0.0"
  },
  "description": "依赖注入与变更检测原理"
}
`,"src/app/app.config.ts":`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { GREETING } from './greeting';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: GREETING, useValue: '根级注入器提供的值' },
  ],
};
`,"src/app/app.css":`:host { display: block; padding: 24px; }
.page { max-width: 640px; margin: 0 auto; display: grid; gap: 14px; }
.head h1 { margin: 0 0 6px; font-size: 28px; }
.head p { margin: 0; color: var(--muted); }
`,"src/app/app.html":`<main class="page">
  <header class="head">
    <h1>注入器与变更检测</h1>
    <p>观察子注入器如何覆盖根级 Token、OnPush 下的刷新时机，以及 signal 依赖图的重算规则。</p>
  </header>

  <app-greeting />
  <app-cd-lab />
  <app-graph-lab />
</main>
`,"src/app/app.ts":`import { Component } from '@angular/core';
import { CdLab } from './cd-lab';
import { GraphLab } from './graph-lab';
import { Greeting } from './greeting';

@Component({
  selector: 'app-root',
  imports: [Greeting, CdLab, GraphLab],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
`,"src/app/cd-lab.css":`.card { padding: 20px; background: #fff; border: 1px solid var(--line); border-radius: 14px; }
h2 { margin: 0 0 8px; font-size: 18px; }
p { margin: 0 0 14px; color: var(--muted); }
strong { color: var(--ink); font-size: 20px; }
.actions { display: flex; flex-wrap: wrap; gap: 8px; }
button { border: 1px solid var(--line); background: #fff; border-radius: 9px; padding: 9px 13px; font-size: 13px; }
button.primary { background: var(--ng-red); border-color: var(--ng-red); color: #fff; }
`,"src/app/cd-lab.html":`<section class="card">
  <h2>变更检测实验</h2>
  <p>普通字段：<strong>{{ plain }}</strong> · signal：<strong>{{ reactive() }}</strong></p>
  <div class="actions">
    <button type="button" (click)="bumpPlainLater()">异步 +1（不刷新）</button>
    <button type="button" (click)="refresh()">手动 detectChanges()</button>
    <button type="button" class="primary" (click)="bumpReactive()">signal +1</button>
  </div>
</section>
`,"src/app/cd-lab.ts":`import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-cd-lab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cd-lab.html',
  styleUrl: './cd-lab.css',
})
export class CdLab {
  private readonly cdr = inject(ChangeDetectorRef);

  // 普通字段不是响应式数据源
  protected plain = 0;
  protected readonly reactive = signal(0);

  protected bumpPlainLater(): void {
    // 异步回调修改普通字段：OnPush 下不会自动刷新
    setTimeout(() => {
      this.plain++;
    }, 0);
  }

  protected refresh(): void {
    // 手动通知本组件检查并刷新视图
    this.cdr.detectChanges();
  }

  protected bumpReactive(): void {
    // signal 写入会自动调度变更检测
    this.reactive.update((value) => value + 1);
  }
}
`,"src/app/graph-lab.css":`.card {
  margin-top: 16px;
  padding: 18px 20px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
}

h2 {
  margin: 0 0 8px;
  font-size: 17px;
}

p {
  margin: 0 0 12px;
  color: #475569;
  font-size: 13px;
  line-height: 1.7;
}

code {
  padding: 2px 5px;
  background: #f1f5f9;
  border-radius: 4px;
  font-size: 12px;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 10px;
  font-size: 13px;
  color: #334155;
}

button {
  padding: 8px 14px;
  border: 0;
  border-radius: 8px;
  background: #dd0031;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

.log {
  margin: 12px 0 0;
  padding-left: 18px;
  color: #475569;
  font-size: 12px;
  line-height: 1.8;
}

.log .empty {
  list-style: none;
  margin-left: -18px;
  color: #94a3b8;
}
`,"src/app/graph-lab.html":`<section class="card">
  <h2>Signal 依赖图</h2>
  <p>
    依赖链：<code>source</code> → <code>double</code> → <code>quad</code>。
    computed 只在自己被读取且依赖变化时重算，effect 在变更检测阶段运行。
  </p>
  <div class="stats">
    <span>source：<strong>{{ source() }}</strong></span>
    <span>double：<strong>{{ double() }}</strong></span>
    <span>quad：<strong>{{ quad() }}</strong></span>
  </div>
  <div class="stats">
    <span>double 计算次数：<strong>{{ doubleRuns }}</strong></span>
    <span>quad 计算次数：<strong>{{ quadRuns }}</strong></span>
  </div>
  <button type="button" class="primary" (click)="bump()">source +1</button>
  <ol class="log">
    @for (line of log(); track $index) {
      <li>{{ line }}</li>
    } @empty {
      <li class="empty">还没有 effect 记录。</li>
    }
  </ol>
</section>
`,"src/app/graph-lab.ts":`import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-graph-lab',
  templateUrl: './graph-lab.html',
  styleUrl: './graph-lab.css',
})
export class GraphLab {
  protected readonly source = signal(1);
  protected doubleRuns = 0;
  protected quadRuns = 0;

  protected readonly log = signal<string[]>([]);

  // computed 是惰性且带缓存的：依赖没变时重复读取不会重新计算
  protected readonly double = computed(() => {
    this.doubleRuns++;
    return this.source() * 2;
  });

  protected readonly quad = computed(() => {
    this.quadRuns++;
    return this.double() * 2;
  });

  constructor() {
    // effect 在变更检测阶段读取依赖，读取动作建立 producer 关系
    effect(() => {
      const value = this.quad();
      this.log.update((lines) => [\`quad = \${value}\`, ...lines].slice(0, 6));
    });
  }

  protected bump(): void {
    this.source.update((value) => value + 1);
  }
}
`,"src/app/greeting.ts":`import { Component, InjectionToken, inject } from '@angular/core';

export const GREETING = new InjectionToken<string>('GREETING');

@Component({
  selector: 'app-greeting',
  // 组件级 providers 会创建子注入器，覆盖祖先提供的同名 Token
  providers: [{ provide: GREETING, useValue: '来自 Greeting 组件的子注入器' }],
  template: '<p>注入结果：{{ greeting }}</p>',
  styles: ':host { display: block; padding: 12px; background: #f9fafb; border-radius: 8px; }',
})
export class Greeting {
  protected readonly greeting = inject(GREETING);
}
`,"src/index.html":`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>依赖注入与变更检测原理</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`,"src/main.ts":`import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
`,"src/styles.css":`:root {
  --ng-red: #dd0031;
  --ng-pink: #ff4d6d;
  --ink: #1f2328;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg: #f6f7fb;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
`,"tsconfig.app.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
`,"tsconfig.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
`,"tsconfig.spec.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
`}},Fa={architecture:Ba,"build-lab":{title:"懒加载与构建优化",description:"路由级代码分割、@defer 延迟加载与 OnPush 策略。",entry:"src/app/app.ts",playground:!0,files:{"README.md":`# Scaffold

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Development server

To start a local development server, run:

\`\`\`bash
ng serve
\`\`\`

Once the server is running, open your browser and navigate to \`http://localhost:4200/\`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

\`\`\`bash
ng generate component component-name
\`\`\`

For a complete list of available schematics (such as \`components\`, \`directives\`, or \`pipes\`), run:

\`\`\`bash
ng generate --help
\`\`\`

## Building

To build the project run:

\`\`\`bash
ng build
\`\`\`

This will compile your project and store the build artifacts in the \`dist/\` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

\`\`\`bash
ng test
\`\`\`

## Running end-to-end tests

For end-to-end (e2e) testing, run:

\`\`\`bash
ng e2e
\`\`\`

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
`,"angular.json":`{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "build-lab": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "build-lab:build:production"
            },
            "development": {
              "buildTarget": "build-lab:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}
`,"package.json":`{
  "name": "build-lab",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "stats": "ng build --stats-json",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "22.2.3",
    "@angular/compiler": "22.2.3",
    "@angular/core": "22.2.3",
    "@angular/forms": "22.2.3",
    "@angular/platform-browser": "22.2.3",
    "@angular/router": "22.2.3",
    "rxjs": "7.8.2",
    "tslib": "2.8.1"
  },
  "devDependencies": {
    "@angular/build": "22.2.3",
    "@angular/cli": "22.2.3",
    "@angular/compiler-cli": "22.2.3",
    "jsdom": "30.0.0",
    "typescript": "~6.0.2",
    "vitest": "^5.0.0"
  },
  "description": "懒加载与构建优化"
}
`,"src/app/app.config.ts":`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
  ],
};
`,"src/app/app.css":`:host { display: block; padding: 24px; }
.page { max-width: 640px; margin: 0 auto; }
nav { display: flex; gap: 8px; margin-bottom: 16px; }
nav a { text-decoration: none; color: var(--ink); padding: 7px 12px; border-radius: 999px; border: 1px solid var(--line); background: #fff; font-size: 14px; }
nav a:hover { border-color: var(--ng-red); color: var(--ng-red); }
`,"src/app/app.html":`<main class="page">
  <nav>
    <a routerLink="/">首页</a>
    <a routerLink="/reports">报表</a>
  </nav>
  <router-outlet />
</main>
`,"src/app/app.routes.ts":`import { Routes } from '@angular/router';

// 路由级懒加载：首屏只下载首页 chunk，报表页按需加载
export const routes: Routes = [
  { path: '', loadComponent: () => import('./home').then((m) => m.Home) },
  { path: 'reports', loadComponent: () => import('./reports').then((m) => m.Reports) },
  { path: '**', redirectTo: '' },
];
`,"src/app/app.ts":`import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
`,"src/app/home.css":`.card { padding: 22px; background: #fff; border: 1px solid var(--line); border-radius: 14px; display: grid; gap: 12px; }
h1 { margin: 0; font-size: 24px; }
p { margin: 0; color: var(--muted); }
a { justify-self: start; text-decoration: none; background: var(--ng-red); color: #fff; padding: 9px 14px; border-radius: 9px; font-weight: 600; }
.ph { padding: 16px; border: 1px dashed var(--line); border-radius: 12px; color: var(--muted); text-align: center; }
`,"src/app/home.html":`<section class="card">
  <h1>首屏内容</h1>
  <p>首页只包含必要内容，统计卡片在浏览器空闲时才加载。</p>
  <a routerLink="/reports">打开报表页（懒加载）</a>

  @defer (on idle) {
    <app-stats />
  } @placeholder {
    <p class="ph">统计卡片将在浏览器空闲时加载。</p>
  } @loading (minimum 300ms) {
    <p class="ph">统计卡片加载中...</p>
  }
</section>
`,"src/app/home.ts":`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Stats } from './stats';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Stats],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
`,"src/app/reports.css":`.card { padding: 22px; background: #fff; border: 1px solid var(--line); border-radius: 14px; }
h1 { margin: 0 0 6px; font-size: 24px; }
p { margin: 0 0 16px; color: var(--muted); }
table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
th, td { text-align: left; padding: 9px 6px; border-bottom: 1px solid var(--line); }
th { color: var(--muted); font-size: 13px; }
a { text-decoration: none; color: var(--ng-red); font-weight: 600; }
`,"src/app/reports.html":`<section class="card">
  <h1>报表页</h1>
  <p>这个页面被单独打包，只有在访问 /reports 时才会下载。</p>
  <table>
    <thead><tr><th>渠道</th><th>金额</th></tr></thead>
    <tbody>
      @for (row of rows(); track row.id) {
        <tr><td>{{ row.name }}</td><td>{{ row.amount }}</td></tr>
      }
    </tbody>
  </table>
  <a routerLink="/">返回首页</a>
</section>
`,"src/app/reports.ts":`import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reports',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reports.html',
  styleUrl: './reports.css',
})
export class Reports {
  protected readonly rows = signal([
    { id: 1, name: '渠道 A', amount: 1280 },
    { id: 2, name: '渠道 B', amount: 960 },
    { id: 3, name: '渠道 C', amount: 2140 },
  ]);
}
`,"src/app/stats.css":`.stats { padding: 16px; border: 1px solid var(--line); border-radius: 12px; background: #fff; }
h3 { margin: 0 0 6px; font-size: 15px; }
p { margin: 0; color: var(--muted); font-size: 14px; }
strong { color: var(--ink); }
`,"src/app/stats.html":`<section class="stats">
  <h3>本周访问统计</h3>
  <p>总量 <strong>{{ total() }}</strong> · 峰值 <strong>{{ peak() }}</strong></p>
</section>
`,"src/app/stats.ts":`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  private readonly samples = signal([12, 18, 9, 24, 16]);
  protected readonly total = computed(() => this.samples().reduce((sum, value) => sum + value, 0));
  protected readonly peak = computed(() => Math.max(...this.samples()));
}
`,"src/index.html":`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>懒加载与构建优化</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`,"src/main.ts":`import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
`,"src/styles.css":`:root {
  --ng-red: #dd0031;
  --ng-pink: #ff4d6d;
  --ink: #1f2328;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg: #f6f7fb;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
`,"tsconfig.app.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
`,"tsconfig.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
`,"tsconfig.spec.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
`}},"di-service":{title:"共享计数器",description:"根级服务、InjectionToken 配置与跨组件共享状态。",entry:"src/app/app.ts",playground:!0,files:{"README.md":`# Scaffold

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Development server

To start a local development server, run:

\`\`\`bash
ng serve
\`\`\`

Once the server is running, open your browser and navigate to \`http://localhost:4200/\`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

\`\`\`bash
ng generate component component-name
\`\`\`

For a complete list of available schematics (such as \`components\`, \`directives\`, or \`pipes\`), run:

\`\`\`bash
ng generate --help
\`\`\`

## Building

To build the project run:

\`\`\`bash
ng build
\`\`\`

This will compile your project and store the build artifacts in the \`dist/\` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

\`\`\`bash
ng test
\`\`\`

## Running end-to-end tests

For end-to-end (e2e) testing, run:

\`\`\`bash
ng e2e
\`\`\`

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
`,"angular.json":`{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "di-service": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "di-service:build:production"
            },
            "development": {
              "buildTarget": "di-service:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}
`,"package.json":`{
  "name": "di-service",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "22.2.3",
    "@angular/compiler": "22.2.3",
    "@angular/core": "22.2.3",
    "@angular/forms": "22.2.3",
    "@angular/platform-browser": "22.2.3",
    "@angular/router": "22.2.3",
    "rxjs": "7.8.2",
    "tslib": "2.8.1"
  },
  "devDependencies": {
    "@angular/build": "22.2.3",
    "@angular/cli": "22.2.3",
    "@angular/compiler-cli": "22.2.3",
    "jsdom": "30.0.0",
    "typescript": "~6.0.2",
    "vitest": "^5.0.0"
  },
  "description": "依赖注入与服务共享"
}
`,"src/app/app.config.ts":`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { LOGGER_PREFIX } from './logger';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: LOGGER_PREFIX, useValue: '[演示]' },
  ],
};
`,"src/app/app.css":`:host { display: block; padding: 24px; }
.page { max-width: 880px; margin: 0 auto; }
.head h1 { margin: 0 0 6px; font-size: 28px; }
.head p { margin: 0 0 20px; color: var(--muted); }
code { background: #fff; border: 1px solid var(--line); border-radius: 5px; padding: 1px 5px; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
@media (max-width: 640px) { .grid { grid-template-columns: 1fr; } }
`,"src/app/app.html":`<main class="page">
  <header class="head">
    <h1>依赖注入与服务共享</h1>
    <p>两个组件各自 <code>inject(CounterStore)</code>，拿到的是同一个根级实例。</p>
  </header>
  <div class="grid">
    <app-counter-panel />
    <app-log-panel />
  </div>
</main>
`,"src/app/app.ts":`import { Component } from '@angular/core';
import { CounterPanel } from './counter-panel';
import { LogPanel } from './log-panel';

@Component({
  selector: 'app-root',
  imports: [CounterPanel, LogPanel],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
`,"src/app/counter-panel.css":`.panel { padding: 20px; background: #fff; border: 1px solid var(--line); border-radius: 14px; }
h2 { margin: 0 0 12px; font-size: 18px; }
.value { margin: 0; font-size: 44px; font-weight: 800; color: var(--ng-red); }
.hint { margin: 4px 0 16px; color: var(--muted); font-size: 14px; }
.actions { display: flex; gap: 8px; }
button { border: 0; border-radius: 9px; padding: 9px 14px; background: var(--ng-red); color: #fff; font-weight: 600; }
button.ghost { background: #fff; color: var(--ink); border: 1px solid var(--line); }
`,"src/app/counter-panel.html":`<section class="panel">
  <h2>计数器</h2>
  <p class="value">{{ store.count() }}</p>
  <p class="hint">两倍值：{{ store.double() }}</p>
  <div class="actions">
    <button type="button" (click)="store.increase(1)">+1</button>
    <button type="button" (click)="store.increase(10)">+10</button>
    <button type="button" class="ghost" (click)="store.reset()">重置</button>
  </div>
</section>
`,"src/app/counter-panel.ts":`import { Component, inject } from '@angular/core';
import { CounterStore } from './counter-store';

@Component({
  selector: 'app-counter-panel',
  templateUrl: './counter-panel.html',
  styleUrl: './counter-panel.css',
})
export class CounterPanel {
  // 与 LogPanel 拿到的是同一个根级实例
  protected readonly store = inject(CounterStore);
}
`,"src/app/counter-store.ts":`import { Injectable, computed, inject, signal } from '@angular/core';
import { Logger } from './logger';

@Injectable({ providedIn: 'root' })
export class CounterStore {
  // 服务之间同样通过 inject() 组合，而不是手工 new
  private readonly logger = inject(Logger);
  private readonly state = signal(0);

  readonly count = this.state.asReadonly();
  readonly double = computed(() => this.count() * 2);

  increase(step = 1): void {
    this.state.update((value) => value + step);
    this.logger.log('count -> ' + this.state());
  }

  reset(): void {
    this.state.set(0);
    this.logger.log('count 重置为 0');
  }
}
`,"src/app/log-panel.css":`.panel { padding: 20px; background: #fff; border: 1px solid var(--line); border-radius: 14px; }
header { display: flex; align-items: center; justify-content: space-between; }
h2 { margin: 0 0 12px; font-size: 18px; }
header button { border: 1px solid var(--line); border-radius: 8px; padding: 5px 10px; background: #fff; }
.empty { color: var(--muted); font-size: 14px; }
ol { margin: 0; padding-left: 20px; display: grid; gap: 6px; font-size: 13px; color: #374151; }
`,"src/app/log-panel.html":`<section class="panel">
  <header>
    <h2>操作日志</h2>
    <button type="button" (click)="logger.clear()">清空</button>
  </header>
  @if (logger.entries().length === 0) {
    <p class="empty">还没有日志，点击左侧按钮试试。</p>
  } @else {
    <ol>
      @for (entry of logger.entries(); track $index) {
        <li>{{ entry }}</li>
      }
    </ol>
  }
</section>
`,"src/app/log-panel.ts":`import { Component, inject } from '@angular/core';
import { Logger } from './logger';

@Component({
  selector: 'app-log-panel',
  templateUrl: './log-panel.html',
  styleUrl: './log-panel.css',
})
export class LogPanel {
  protected readonly logger = inject(Logger);
}
`,"src/app/logger.ts":`import { Injectable, InjectionToken, inject, signal } from '@angular/core';

// InjectionToken 用来注入非类依赖（配置、常量、接口实现）
export const LOGGER_PREFIX = new InjectionToken<string>('日志前缀');

@Injectable({ providedIn: 'root' })
export class Logger {
  private readonly prefix = inject(LOGGER_PREFIX, { optional: true }) ?? '[app]';
  readonly entries = signal<string[]>([]);

  log(message: string): void {
    this.entries.update((list) => [...list, this.prefix + ' ' + message]);
  }

  clear(): void {
    this.entries.set([]);
  }
}
`,"src/index.html":`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>依赖注入与服务共享</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`,"src/main.ts":`import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
`,"src/styles.css":`:root {
  --ng-red: #dd0031;
  --ng-pink: #ff4d6d;
  --ink: #1f2328;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg: #f6f7fb;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
`,"tsconfig.app.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
`,"tsconfig.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
`,"tsconfig.spec.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
`}},"forms-advanced":{title:"表单进阶实验室",description:"FormArray、自定义控件 CVA、异步校验与 Signal Forms。",entry:"src/app/app.ts",playground:!0,files:{"angular.json":`{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "forms-advanced": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "routing-form:build:production"
            },
            "development": {
              "buildTarget": "routing-form:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}
`,"package.json":`{
  "name": "forms-advanced",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "22.2.3",
    "@angular/compiler": "22.2.3",
    "@angular/core": "22.2.3",
    "@angular/forms": "22.2.3",
    "@angular/platform-browser": "22.2.3",
    "@angular/router": "22.2.3",
    "rxjs": "7.8.2",
    "tslib": "2.8.1"
  },
  "devDependencies": {
    "@angular/build": "22.2.3",
    "@angular/cli": "22.2.3",
    "@angular/compiler-cli": "22.2.3",
    "jsdom": "30.0.0",
    "typescript": "~6.0.2",
    "vitest": "^5.0.0"
  },
  "description": "响应式表单进阶与 Signal Forms"
}
`,"src/app/app.config.ts":`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners()],
};
`,"src/app/app.css":`:host { display: block; padding: 24px; }
.page { max-width: 720px; margin: 0 auto; }
h1 { margin-bottom: 4px; }
.muted { color: var(--muted); }
`,"src/app/app.html":`<main class="page">
  <header>
    <h1>表单进阶实验室</h1>
    <p class="muted">同一页对照两种写法：经典响应式表单与 Signal Forms。</p>
  </header>

  <app-classic-form />
  <app-signal-form />
</main>
`,"src/app/app.ts":`import { Component } from '@angular/core';
import { ClassicForm } from './classic-form';
import { SignalForm } from './signal-form';

@Component({
  selector: 'app-root',
  imports: [ClassicForm, SignalForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
`,"src/app/classic-form.css":`.card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 20px;
  margin-bottom: 20px;
}
h2 { margin-top: 0; }
label { display: block; margin-top: 12px; font-size: 14px; }
input { width: 100%; padding: 8px 10px; border: 1px solid var(--line); border-radius: 8px; }
fieldset { margin-top: 16px; border: 1px dashed var(--line); border-radius: 10px; padding: 12px; }
.row { display: flex; gap: 8px; margin-bottom: 8px; }
.row input { flex: 1; }
button { padding: 7px 12px; border: 1px solid var(--line); border-radius: 8px; background: #fff; }
button.primary { background: var(--ng-red); border-color: var(--ng-red); color: #fff; }
.error { color: #b42318; font-size: 13px; margin: 6px 0 0; }
.ok { color: #15803d; font-size: 13px; margin: 6px 0 0; }
.muted { color: var(--muted); font-size: 13px; margin: 6px 0 0; }
`,"src/app/classic-form.html":`<section class="card">
  <h2>经典响应式表单</h2>
  <p class="muted">FormArray、自定义控件与异步校验。用户名试试 admin。</p>

  <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
    <label for="username">用户名</label>
    <input id="username" formControlName="username" autocomplete="username" />
    @if (form.controls.username.pending) {
      <p class="muted" role="status">正在检查用户名是否可用...</p>
    }
    @if (form.controls.username.touched && form.controls.username.hasError('required')) {
      <p class="error" role="alert">用户名不能为空。</p>
    }
    @if (form.controls.username.touched && form.controls.username.hasError('minlength')) {
      <p class="error" role="alert">用户名至少 3 个字符。</p>
    }
    @if (form.controls.username.touched && form.controls.username.hasError('usernameTaken')) {
      <p class="error" role="alert">这个用户名已经被占用。</p>
    }

    <label for="password">密码</label>
    <app-password-strength id="password" formControlName="password" />
    @if (form.controls.password.touched && form.controls.password.invalid) {
      <p class="error" role="alert">密码至少 8 位。</p>
    }

    <fieldset>
      <legend>联系电话（FormArray）</legend>
      @for (phone of form.controls.phones.controls; track $index) {
        <div class="row">
          <input [formControlName]="$index" autocomplete="tel" />
          <button type="button" (click)="removePhone($index)">删除</button>
        </div>
      }
      <button type="button" (click)="addPhone()">添加电话</button>
    </fieldset>

    <button type="submit" class="primary">提交</button>
    @if (submitted() && form.invalid) {
      <p class="error" role="alert">表单仍有错误，请检查后再提交。</p>
    }
    @if (submitted() && form.valid) {
      <p class="ok" role="status">校验通过，数据已打印到控制台。</p>
    }
  </form>
</section>
`,"src/app/classic-form.ts":`import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordStrength } from './password-strength';
import { usernameTaken } from './username.validator';

@Component({
  selector: 'app-classic-form',
  imports: [ReactiveFormsModule, PasswordStrength],
  templateUrl: './classic-form.html',
  styleUrl: './classic-form.css',
})
export class ClassicForm {
  private readonly fb = inject(FormBuilder);
  protected readonly submitted = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    username: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(3)],
      asyncValidators: [usernameTaken()],
      // 异步校验只在失焦时触发，避免每次按键都请求
      updateOn: 'blur',
    }),
    password: this.fb.nonNullable.control('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    // FormArray 用来表达「数量不固定」的字段
    phones: this.fb.nonNullable.array([this.fb.nonNullable.control('')]),
  });

  protected addPhone(): void {
    this.form.controls.phones.push(this.fb.nonNullable.control(''));
  }

  protected removePhone(index: number): void {
    this.form.controls.phones.removeAt(index);
  }

  protected submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('经典表单提交', this.form.getRawValue());
  }
}
`,"src/app/password-strength.ts":`import { Component, forwardRef, signal } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-password-strength',
  template: \`
    <input
      type="password"
      autocomplete="new-password"
      [value]="value()"
      [disabled]="disabled()"
      (input)="onInput($event)"
      (blur)="onTouched()"
    />
    <span class="meter" [attr.data-level]="level()">
      @if (level() === 1) { 弱 }
      @if (level() === 2) { 中 }
      @if (level() === 3) { 强 }
    </span>
  \`,
  styles: \`
    :host { display: flex; gap: 8px; align-items: center; }
    input { flex: 1; }
    .meter { font-size: 12px; color: var(--muted); }
    .meter[data-level='3'] { color: #15803d; }
  \`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordStrength),
      multi: true,
    },
  ],
})
export class PasswordStrength implements ControlValueAccessor {
  protected readonly value = signal('');
  protected readonly disabled = signal(false);

  private onChange: (value: string) => void = () => {};
  protected onTouched: () => void = () => {};

  protected level(): number {
    const value = this.value();
    if (value.length >= 12 && /[A-Z]/.test(value) && /\\d/.test(value)) return 3;
    if (value.length >= 8) return 2;
    return value.length > 0 ? 1 : 0;
  }

  writeValue(value: string): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  protected onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value.set(value);
    this.onChange(value);
  }
}
`,"src/app/signal-form.html":`<section class="card">
  <h2>Signal Forms</h2>
  <p class="muted">模型是 signal，校验规则是 schema，模板用 <code>[formField]</code> 绑定。</p>

  <form novalidate>
    <label for="signal-name">姓名</label>
    <input id="signal-name" [formField]="profile.name" />
    @if (profile.name().invalid()) {
      <p class="error" role="alert">姓名至少 3 个字符。</p>
    }

    <label for="signal-email">邮箱</label>
    <input id="signal-email" [formField]="profile.email" />
    @if (profile.email().invalid()) {
      <p class="error" role="alert">请输入合法邮箱。</p>
    }

    <label for="signal-age">年龄</label>
    <input id="signal-age" type="number" [formField]="profile.age" />
    @if (profile.age().invalid()) {
      <p class="error" role="alert">年龄至少 18 岁。</p>
    }

    <p class="muted">模型实时值：<code>{{ snapshot() }}</code></p>
  </form>
</section>
`,"src/app/signal-form.ts":`import { Component, computed, signal } from '@angular/core';
import {
  FormField,
  email,
  form,
  min,
  minLength,
  required,
} from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form',
  imports: [FormField],
  templateUrl: './signal-form.html',
  styleUrl: './classic-form.css',
})
export class SignalForm {
  // 模型就是普通 signal；表单是围绕模型建立的字段树
  protected readonly model = signal({ name: '', email: '', age: 18 });
  protected readonly profile = form(this.model, (path) => {
    required(path.name);
    minLength(path.name, 3);
    email(path.email);
    min(path.age, 18);
  });

  protected readonly snapshot = computed(() => JSON.stringify(this.model()));
}
`,"src/app/username.validator.ts":`import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay, map, of } from 'rxjs';

const TAKEN = new Set(['admin', 'root', 'test']);

// 异步校验器：返回 Observable，pending 期间表单处于 PENDING 状态
export function usernameTaken(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> =>
    of(String(control.value ?? '')).pipe(
      delay(800),
      map((value) =>
        TAKEN.has(value.trim().toLowerCase()) ? { usernameTaken: true } : null,
      ),
    );
}
`,"src/index.html":`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>表单进阶实验室</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`,"src/main.ts":`import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
`,"src/styles.css":`:root {
  --ng-red: #dd0031;
  --ng-pink: #ff4d6d;
  --ink: #1f2328;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg: #f6f7fb;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
`,"tsconfig.app.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
`,"tsconfig.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
`,"tsconfig.spec.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
`}},"hello-binding":{title:"双绑定计数器",description:"插值、事件绑定、class 绑定与内置管道的最小闭环。",entry:"src/app/app.ts",playground:!0,files:{"README.md":`# Scaffold

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Development server

To start a local development server, run:

\`\`\`bash
ng serve
\`\`\`

Once the server is running, open your browser and navigate to \`http://localhost:4200/\`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

\`\`\`bash
ng generate component component-name
\`\`\`

For a complete list of available schematics (such as \`components\`, \`directives\`, or \`pipes\`), run:

\`\`\`bash
ng generate --help
\`\`\`

## Building

To build the project run:

\`\`\`bash
ng build
\`\`\`

This will compile your project and store the build artifacts in the \`dist/\` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

\`\`\`bash
ng test
\`\`\`

## Running end-to-end tests

For end-to-end (e2e) testing, run:

\`\`\`bash
ng e2e
\`\`\`

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
`,"angular.json":`{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "hello-binding": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "hello-binding:build:production"
            },
            "development": {
              "buildTarget": "hello-binding:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}
`,"package.json":`{
  "name": "hello-binding",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "22.2.3",
    "@angular/compiler": "22.2.3",
    "@angular/core": "22.2.3",
    "@angular/forms": "22.2.3",
    "@angular/platform-browser": "22.2.3",
    "@angular/router": "22.2.3",
    "rxjs": "7.8.2",
    "tslib": "2.8.1"
  },
  "devDependencies": {
    "@angular/build": "22.2.3",
    "@angular/cli": "22.2.3",
    "@angular/compiler-cli": "22.2.3",
    "jsdom": "30.0.0",
    "typescript": "~6.0.2",
    "vitest": "^5.0.0"
  },
  "description": "你好，Angular：绑定与计数器"
}
`,"src/app/app.config.ts":`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners()],
};
`,"src/app/app.css":`:host { display: block; padding: 24px; }
.card {
  max-width: 560px; margin: 0 auto; padding: 28px; background: #fff;
  border: 1px solid var(--line); border-radius: 16px;
  box-shadow: 0 16px 40px rgb(17 24 39 / 8%);
}
h1 { margin: 0 0 8px; font-size: 30px; letter-spacing: -0.5px; }
.muted { margin-top: 0; color: var(--muted); }
.counter { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 22px 0; }
button {
  border: 0; border-radius: 10px; padding: 10px 16px;
  background: var(--ng-red); color: #fff; font-weight: 600;
}
button.ghost { background: #fff; color: var(--ink); border: 1px solid var(--line); }
output {
  margin-left: auto; padding: 8px 12px; border-radius: 10px;
  background: #fef2f2; color: var(--ng-red); font-weight: 700;
}
output.hot { background: var(--ng-red); color: #fff; }
.hint { color: var(--muted); font-size: 14px; }
.meta {
  display: grid; grid-template-columns: 90px 1fr; gap: 8px 12px;
  margin: 22px 0 0; padding-top: 16px; border-top: 1px dashed var(--line);
}
dt { color: var(--muted); }
dd { margin: 0; font-weight: 600; }
`,"src/app/app.html":`<main class="card">
  <h1>你好，{{ framework() }}！</h1>
  <p class="muted">这是第一个可以真实运行的 Angular 组件。</p>

  <section class="counter">
    <button type="button" (click)="increase(1)">+1</button>
    <button type="button" (click)="increase(5)">+5</button>
    <button type="button" class="ghost" (click)="reset()">归零</button>
    <output [class.hot]="count() >= 10">当前计数：{{ count() }}</output>
  </section>

  @if (count() >= 10) {
    <p class="hint">已经达到 10 次，试着把模板里的步长 1 改成 10。</p>
  } @else {
    <p class="hint">点击按钮，signal 更新后视图会自动刷新。</p>
  }

  <dl class="meta">
    <dt>框架</dt>
    <dd>{{ framework() | uppercase }}</dd>
    <dt>渲染时间</dt>
    <dd>{{ today() | date: 'yyyy-MM-dd HH:mm:ss' }}</dd>
  </dl>
</main>
`,"src/app/app.ts":`import { Component, signal } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // signal 是 Angular 的响应式原语：读取用 count()，写入用 set / update
  protected readonly count = signal(0);
  protected readonly framework = signal('Angular');
  protected readonly today = signal(new Date());

  protected increase(step: number): void {
    // update 基于旧值计算，避免读到过期的快照
    this.count.update((value) => value + step);
  }

  protected reset(): void {
    this.count.set(0);
  }
}
`,"src/index.html":`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>你好，Angular：绑定与计数器</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`,"src/main.ts":`import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
`,"src/styles.css":`:root {
  --ng-red: #dd0031;
  --ng-pink: #ff4d6d;
  --ink: #1f2328;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg: #f6f7fb;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
`,"tsconfig.app.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
`,"tsconfig.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
`,"tsconfig.spec.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
`}},"http-rxjs":{title:"用户搜索数据流",description:"debounceTime、switchMap、catchError 与请求生命周期。",entry:"src/app/app.ts",playground:!0,files:{"README.md":`# Scaffold

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Development server

To start a local development server, run:

\`\`\`bash
ng serve
\`\`\`

Once the server is running, open your browser and navigate to \`http://localhost:4200/\`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

\`\`\`bash
ng generate component component-name
\`\`\`

For a complete list of available schematics (such as \`components\`, \`directives\`, or \`pipes\`), run:

\`\`\`bash
ng generate --help
\`\`\`

## Building

To build the project run:

\`\`\`bash
ng build
\`\`\`

This will compile your project and store the build artifacts in the \`dist/\` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

\`\`\`bash
ng test
\`\`\`

## Running end-to-end tests

For end-to-end (e2e) testing, run:

\`\`\`bash
ng e2e
\`\`\`

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
`,"angular.json":`{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "http-rxjs": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "http-rxjs:build:production"
            },
            "development": {
              "buildTarget": "http-rxjs:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}
`,"package.json":`{
  "name": "http-rxjs",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "22.2.3",
    "@angular/compiler": "22.2.3",
    "@angular/core": "22.2.3",
    "@angular/forms": "22.2.3",
    "@angular/platform-browser": "22.2.3",
    "@angular/router": "22.2.3",
    "rxjs": "7.8.2",
    "tslib": "2.8.1"
  },
  "devDependencies": {
    "@angular/build": "22.2.3",
    "@angular/cli": "22.2.3",
    "@angular/compiler-cli": "22.2.3",
    "jsdom": "30.0.0",
    "typescript": "~6.0.2",
    "vitest": "^5.0.0"
  },
  "description": "RxJS 与 HTTP 数据流"
}
`,"src/app/app.config.ts":`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
  ],
};
`,"src/app/app.css":`:host { display: block; padding: 24px; }
.page { max-width: 620px; margin: 0 auto; }
.head h1 { margin: 0 0 6px; font-size: 28px; }
.head p { margin: 0 0 18px; color: var(--muted); }
.search { display: grid; gap: 6px; font-size: 13px; font-weight: 600; }
.search input { padding: 11px 12px; border: 1px solid var(--line); border-radius: 10px; }
.search input:focus { outline: 2px solid rgb(221 0 49 / 25%); border-color: var(--ng-red); }
.status { margin: 12px 0 0; font-size: 13px; color: var(--muted); }
.status.warn { color: #b45309; }
.users { list-style: none; margin: 16px 0 0; padding: 0; display: grid; gap: 8px; }
.users li { display: flex; justify-content: space-between; gap: 12px; padding: 13px 14px; background: #fff; border: 1px solid var(--line); border-radius: 10px; }
.users li span { color: var(--muted); font-size: 13px; }
.users li.empty { justify-content: center; color: var(--muted); border-style: dashed; }
`,"src/app/app.html":`<main class="page">
  <header class="head">
    <h1>用户搜索</h1>
    <p>输入关键字，请求会防抖并在新输入到来时取消旧请求。</p>
  </header>

  <label class="search" for="term">
    <span>搜索用户</span>
    <input id="term" type="search" [value]="term()" (input)="onInput($event)" placeholder="例如：Leanne" />
  </label>

  <p class="status">实际用于搜索的关键字：<strong>{{ effectiveTerm() || '（空）' }}</strong></p>

  @if (loading()) {
    <p class="status" role="status">请求中...</p>
  }
  @if (fallback()) {
    <p class="status warn" role="alert">真实接口不可达，已展示本地兜底数据。</p>
  }

  <ul class="users">
    @for (user of users(); track user.id) {
      <li>
        <strong>{{ user.name }}</strong>
        <span>{{ user.email }}</span>
      </li>
    } @empty {
      <li class="empty">没有匹配的用户。</li>
    }
  </ul>
</main>
`,"src/app/app.ts":`import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Subject, catchError, debounceTime, distinctUntilChanged, finalize, of, switchMap, tap } from 'rxjs';
import { FALLBACK_USERS, User, UserService } from './user.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly userService = inject(UserService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly term = signal('');
  protected readonly users = signal<User[]>([]);
  protected readonly loading = signal(false);
  protected readonly fallback = signal(false);

  // toObservable 把 signal 送进 RxJS，toSignal 再把结果接回 signal
  protected readonly effectiveTerm = toSignal(
    toObservable(this.term).pipe(debounceTime(300), distinctUntilChanged()),
    { initialValue: '' },
  );

  private readonly term$ = new Subject<string>();

  constructor() {
    this.term$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => {
          this.loading.set(true);
          this.fallback.set(false);
        }),
        switchMap((term) =>
          this.userService.search(term).pipe(
            catchError(() => {
              this.fallback.set(true);
              return of(FALLBACK_USERS);
            }),
            finalize(() => this.loading.set(false)),
          ),
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((users) => this.users.set(users));

    // 首屏主动加载一次
    this.term$.next('');
  }

  protected onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.term.set(value);
    this.term$.next(value);
  }
}
`,"src/app/user.service.ts":`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, timeout } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

// 网络不可用时的兜底数据，保证示例在离线环境也能演示交互
export const FALLBACK_USERS: User[] = [
  { id: 1, name: 'Leanne Graham', email: 'leanne@example.com' },
  { id: 2, name: 'Ervin Howell', email: 'ervin@example.com' },
  { id: 3, name: 'Clementine Bauch', email: 'clementine@example.com' },
];

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http = inject(HttpClient);

  search(term: string): Observable<User[]> {
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        // 8 秒未响应就进入错误分支，避免页面一直 loading
        timeout(8000),
        map((users) =>
          users.filter((user) => user.name.toLowerCase().includes(term.trim().toLowerCase())),
        ),
      );
  }
}
`,"src/index.html":`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>RxJS 与 HTTP 数据流</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`,"src/main.ts":`import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
`,"src/styles.css":`:root {
  --ng-red: #dd0031;
  --ng-pink: #ff4d6d;
  --ink: #1f2328;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg: #f6f7fb;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
`,"tsconfig.app.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
`,"tsconfig.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
`,"tsconfig.spec.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
`}},"i18n-a11y":{title:"双语无障碍界面",description:"运行时语言切换、跳过导航、焦点管理与 aria-live。",entry:"src/app/app.ts",playground:!0,files:{"README.md":`# Scaffold

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Development server

To start a local development server, run:

\`\`\`bash
ng serve
\`\`\`

Once the server is running, open your browser and navigate to \`http://localhost:4200/\`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

\`\`\`bash
ng generate component component-name
\`\`\`

For a complete list of available schematics (such as \`components\`, \`directives\`, or \`pipes\`), run:

\`\`\`bash
ng generate --help
\`\`\`

## Building

To build the project run:

\`\`\`bash
ng build
\`\`\`

This will compile your project and store the build artifacts in the \`dist/\` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

\`\`\`bash
ng test
\`\`\`

## Running end-to-end tests

For end-to-end (e2e) testing, run:

\`\`\`bash
ng e2e
\`\`\`

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
`,"angular.json":`{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "i18n-a11y": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "i18n-a11y:build:production"
            },
            "development": {
              "buildTarget": "i18n-a11y:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}
`,"package.json":`{
  "name": "i18n-a11y",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "22.2.3",
    "@angular/compiler": "22.2.3",
    "@angular/core": "22.2.3",
    "@angular/forms": "22.2.3",
    "@angular/platform-browser": "22.2.3",
    "@angular/router": "22.2.3",
    "rxjs": "7.8.2",
    "tslib": "2.8.1"
  },
  "devDependencies": {
    "@angular/build": "22.2.3",
    "@angular/cli": "22.2.3",
    "@angular/compiler-cli": "22.2.3",
    "jsdom": "30.0.0",
    "typescript": "~6.0.2",
    "vitest": "^5.0.0"
  },
  "description": "国际化与可访问性"
}
`,"src/app/app.config.ts":`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners()],
};
`,"src/app/app.css":`:host { display: block; padding: 24px; }
.skip { position: absolute; left: -9999px; top: 8px; background: #111; color: #fff; padding: 8px 12px; border-radius: 8px; z-index: 10; }
.skip:focus { left: 12px; }
.page { max-width: 620px; margin: 0 auto; }
.head h1 { margin: 0 0 6px; font-size: 28px; }
.head p { margin: 0 0 12px; color: var(--muted); }
.langs { display: flex; gap: 6px; }
.langs button { border: 1px solid var(--line); background: #fff; border-radius: 999px; padding: 6px 12px; font-size: 13px; }
.langs button[aria-pressed='true'] { background: var(--ng-red); border-color: var(--ng-red); color: #fff; }
.card { margin-top: 18px; padding: 20px; background: #fff; border: 1px solid var(--line); border-radius: 14px; }
.primary { border: 0; background: var(--ng-red); color: #fff; border-radius: 9px; padding: 10px 16px; font-weight: 600; }
.status { min-height: 20px; margin: 10px 0 0; color: #15803d; font-size: 13px; }
.backdrop { position: fixed; inset: 0; background: rgb(17 24 39 / 45%); display: grid; place-items: center; padding: 20px; }
.dialog { width: min(420px, 100%); background: #fff; border-radius: 16px; padding: 22px; display: grid; gap: 8px; }
.dialog h2 { margin: 0; font-size: 20px; }
.hint { margin: 0 0 6px; color: var(--muted); font-size: 13px; }
label { font-size: 13px; font-weight: 600; }
input, textarea { padding: 10px 12px; border: 1px solid var(--line); border-radius: 9px; font: inherit; }
input:focus, textarea:focus { outline: 2px solid rgb(221 0 49 / 25%); border-color: var(--ng-red); }
.preview { min-height: 40px; margin-top: 8px; padding: 10px 12px; background: #f8fafc; border: 1px dashed var(--line); border-radius: 9px; }
.preview img { max-width: 100%; }
.actions { display: flex; gap: 8px; margin-top: 8px; }
.actions button { border: 1px solid var(--line); background: #fff; border-radius: 9px; padding: 9px 14px; }
.actions button.primary { background: var(--ng-red); border-color: var(--ng-red); color: #fff; }
`,"src/app/app.html":`<a class="skip" href="#main">{{ i18n.t('skip') }}</a>

<main id="main" class="page">
  <header class="head">
    <h1>{{ i18n.t('title') }}</h1>
    <p>{{ i18n.t('intro') }}</p>
    <div class="langs" role="group" aria-label="Language">
      <button type="button" [attr.aria-pressed]="i18n.locale() === 'zh'" (click)="i18n.setLocale('zh')">中文</button>
      <button type="button" [attr.aria-pressed]="i18n.locale() === 'en'" (click)="i18n.setLocale('en')">English</button>
    </div>
  </header>

  <section class="card">
    <button #trigger type="button" class="primary" (click)="openDialog()">{{ i18n.t('open') }}</button>
    <p class="status" role="status" aria-live="polite">
      @if (saved()) { {{ i18n.t('saved') }} }
    </p>
  </section>

  <section class="card">
    <h2>{{ i18n.t('securityTitle') }}</h2>
    <p class="hint">{{ i18n.t('securityIntro') }}</p>
    <label for="raw-html">{{ i18n.t('securityInput') }}</label>
    <textarea id="raw-html" rows="3" [value]="rawHtml()"
      (input)="rawHtml.set($any($event.target).value)"></textarea>
    <p class="hint">{{ i18n.t('securitySafe') }}</p>
    <div class="preview" [innerHTML]="safeHtml()"></div>
    <p class="hint">{{ i18n.t('securityUrl') }}：<code>{{ safeUrl() }}</code></p>
  </section>

  @if (dialogOpen()) {
    <div class="backdrop" (click)="closeDialog()">
      <section class="dialog" role="dialog" aria-modal="true" [attr.aria-label]="i18n.t('dialogTitle')"
        (click)="$event.stopPropagation()" (keydown)="onDialogKeydown($event)">
        <h2>{{ i18n.t('dialogTitle') }}</h2>
        <p class="hint">{{ i18n.t('dialogHint') }}</p>
        <label for="name">{{ i18n.t('name') }}</label>
        <input #dialogInput id="name" type="text" />
        <div class="actions">
          <button type="button" class="primary" (click)="save()">{{ i18n.t('submit') }}</button>
          <button type="button" (click)="closeDialog()">{{ i18n.t('close') }}</button>
        </div>
      </section>
    </div>
  }
</main>
`,"src/app/app.ts":`import {
  Component,
  ElementRef,
  SecurityContext,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { I18nService } from './i18n.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly i18n = inject(I18nService);
  private readonly sanitizer = inject(DomSanitizer);
  protected readonly dialogOpen = signal(false);
  protected readonly saved = signal(false);

  protected readonly rawHtml = signal(
    '<b>你好</b><img src="x" onerror="alert(1)">',
  );
  // Angular 会自动净化 [innerHTML]，这里显式调用便于观察净化结果
  protected readonly safeHtml = computed(
    () =>
      this.sanitizer.sanitize(SecurityContext.HTML, this.rawHtml()) ?? '',
  );
  protected readonly safeUrl = computed(
    () =>
      this.sanitizer.sanitize(
        SecurityContext.URL,
        'javascript:alert(1)',
      ) ?? '',
  );

  @ViewChild('trigger') private trigger?: ElementRef<HTMLButtonElement>;
  @ViewChild('dialogInput') private dialogInput?: ElementRef<HTMLInputElement>;

  protected openDialog(): void {
    this.dialogOpen.set(true);
    // 打开后把焦点移入对话框，键盘用户不会迷失位置
    setTimeout(() => this.dialogInput?.nativeElement.focus());
  }

  protected closeDialog(): void {
    this.dialogOpen.set(false);
    // 关闭后焦点回到触发按钮
    this.trigger?.nativeElement.focus();
  }

  protected onDialogKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeDialog();
    }
  }

  protected save(): void {
    this.saved.set(true);
    this.closeDialog();
  }
}
`,"src/app/i18n.service.ts":`import { Injectable, signal } from '@angular/core';

export type Locale = 'zh' | 'en';

const DICT = {
  zh: {
    title: '无障碍与国际化',
    intro: '这个示例演示运行时切换语言，以及常见的键盘可达性处理。',
    open: '打开对话框',
    close: '关闭',
    name: '姓名',
    submit: '提交',
    saved: '已保存',
    skip: '跳到主要内容',
    dialogTitle: '编辑资料',
    dialogHint: '按 Esc 关闭，焦点会回到打开按钮。',
    securityTitle: '安全边界',
    securityIntro: '用户输入进入 innerHTML 前必须经过净化。',
    securityInput: '用户输入 HTML',
    securitySafe: 'Angular 净化后的结果：',
    securityUrl: '危险 URL 净化结果',
  },
  en: {
    title: 'Accessibility & i18n',
    intro: 'This demo switches locale at runtime and shows keyboard accessibility.',
    open: 'Open dialog',
    close: 'Close',
    name: 'Name',
    submit: 'Submit',
    saved: 'Saved',
    skip: 'Skip to main content',
    dialogTitle: 'Edit profile',
    dialogHint: 'Press Esc to close; focus returns to the trigger.',
    securityTitle: 'Security boundary',
    securityIntro: 'User input must be sanitized before it enters innerHTML.',
    securityInput: 'User-supplied HTML',
    securitySafe: 'Result after Angular sanitization:',
    securityUrl: 'Sanitized dangerous URL',
  },
} as const;

type DictKey = keyof (typeof DICT)['zh'];

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly locale = signal<Locale>('zh');

  // 模板调用 t('title')，locale 变化会自动触发重新渲染
  t(key: DictKey): string {
    return DICT[this.locale()][key];
  }

  setLocale(locale: Locale): void {
    this.locale.set(locale);
  }
}
`,"src/index.html":`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>国际化与可访问性</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`,"src/main.ts":`import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
`,"src/styles.css":`:root {
  --ng-red: #dd0031;
  --ng-pink: #ff4d6d;
  --ink: #1f2328;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg: #f6f7fb;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
`,"tsconfig.app.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
`,"tsconfig.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
`,"tsconfig.spec.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
`}},"i18n-build":{title:"内置 i18n 多语言构建",description:"构建期抽取翻译，按 zh-Hans / en / ar 生成三份产物，含 ICU 复数、$localize 与 RTL。",entry:"src/app/app.ts",playground:!1,preview:{command:"pnpm --filter i18n-build build && pnpm --filter i18n-build preview",url:"http://localhost:4600/zh-Hans/"},files:{"angular.json":`{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "i18n-build": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "i18n": {
        "sourceLocale": "zh-Hans",
        "locales": {
          "en": "src/locale/messages.en.xlf",
          "ar": "src/locale/messages.ar.xlf"
        }
      },
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "polyfills": ["@angular/localize/init"],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": ["src/styles.css"],
            "localize": true
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "600kB",
                  "maximumError": "1.2MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true,
              "localize": false
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "i18n-build:build:production"
            },
            "development": {
              "buildTarget": "i18n-build:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular/build:extract-i18n",
          "options": {
            "buildTarget": "i18n-build:build:production",
            "format": "xlf2",
            "outputPath": "src/locale",
            "outFile": "messages.xlf"
          }
        }
      }
    }
  }
}
`,"package.json":`{
  "name": "i18n-build",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "preview": "node scripts/preview.mjs",
    "extract": "ng extract-i18n --format=xlf2 --output-path src/locale --out-file messages.xlf",
    "verify": "node scripts/verify.mjs"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "22.2.3",
    "@angular/compiler": "22.2.3",
    "@angular/core": "22.2.3",
    "@angular/forms": "22.2.3",
    "@angular/localize": "22.2.3",
    "@angular/platform-browser": "22.2.3",
    "@angular/router": "22.2.3",
    "rxjs": "7.8.2",
    "tslib": "2.8.1"
  },
  "devDependencies": {
    "@angular/build": "22.2.3",
    "@angular/cli": "22.2.3",
    "@angular/compiler-cli": "22.2.3",
    "typescript": "~6.0.2"
  },
  "description": "内置 i18n 构建：locale data、ICU、$localize 与 RTL"
}
`,"src/app/app.config.ts":`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners()],
};
`,"src/app/app.css":`:host { display: block; padding: 24px; }
.page { max-width: 680px; margin-inline: auto; }
.head h1 { margin: 0 0 6px; font-size: 28px; }
.head p { margin: 0 0 12px; color: var(--muted); }
.locales { display: flex; gap: 12px; font-size: 14px; }
.locales a { color: var(--ng-red); }
.card { margin-block-start: 18px; padding: 20px; background: #fff; border: 1px solid var(--line); border-radius: 14px; }
.card h2 { margin: 0 0 10px; font-size: 18px; }
.summary { margin: 0 0 6px; font-weight: 600; }
.row { display: flex; gap: 8px; margin-block-start: 10px; }
.row button { border: 1px solid var(--line); background: #fff; border-radius: 9px; padding: 8px 14px; }
.row button[aria-pressed='true'] { background: var(--ng-red); border-color: var(--ng-red); color: #fff; }
.foot { margin-block-start: 18px; color: var(--muted); font-size: 13px; }
`,"src/app/app.html":`<main class="page">
  <header class="head">
    <h1 i18n="@@app.title">订单中心</h1>
    <p i18n="@@app.intro">内置 i18n 在构建期抽取消息，为每种语言生成独立产物。</p>
    <nav class="locales">
      <a href="/zh-Hans/">中文</a>
      <a href="/en/">English</a>
      <a href="/ar/">العربية</a>
    </nav>
  </header>

  <section class="card">
    <h2 i18n="@@cart.title">购物车</h2>
    <p class="summary">{{ summary(count()) }}</p>
    <p i18n="@@cart.plural">{count(), plural, =0 {购物车是空的} =1 {只有 1 件商品} other {共 {{count()}} 件商品}}</p>
    <div class="row">
      <button type="button" (click)="setCount('0')">0</button>
      <button type="button" (click)="setCount('1')">1</button>
      <button type="button" (click)="setCount('5')">5</button>
    </div>
  </section>

  <section class="card">
    <h2 i18n="@@role.title">权限提示</h2>
    <div class="row">
      <button type="button" [attr.aria-pressed]="role() === 'admin'" (click)="setRole('admin')" i18n="@@role.admin">管理员</button>
      <button type="button" [attr.aria-pressed]="role() === 'editor'" (click)="setRole('editor')" i18n="@@role.editor">编辑</button>
      <button type="button" [attr.aria-pressed]="role() === 'guest'" (click)="setRole('guest')" i18n="@@role.guest">访客</button>
    </div>
    <p i18n="@@role.hint">{role(), select, admin {管理员可以管理全部订单} editor {编辑只能修改草稿} other {访客只能查看}}</p>
  </section>

  <section class="card">
    <h2 i18n="@@format.title">本地化格式</h2>
    <p><span i18n="@@format.amount">金额：</span>{{ total | currency }}</p>
    <p><span i18n="@@format.date">创建时间：</span>{{ created | date: 'long' }}</p>
  </section>

  <footer class="foot">
    <p i18n="@@app.runtime">当前构建语言：{{ localeId }}，布局方向：{{ dir }}</p>
    <p i18n="@@app.hint">切换语言请访问对应产物的 URL；构建期 i18n 不支持页面内即时切换。</p>
  </footer>
</main>
`,"src/app/app.ts":`import { Component, LOCALE_ID, inject, signal } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

type Role = 'admin' | 'editor' | 'guest';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // LOCALE_ID 由构建配置注入：三份产物分别拿到 zh-Hans / en / ar
  protected readonly localeId = inject(LOCALE_ID);
  protected readonly count = signal(0);
  protected readonly role = signal<Role>('guest');
  protected readonly total = 1280.5;
  protected readonly created = new Date('2026-03-18T10:30:00Z');
  protected readonly dir = this.localeId.toLowerCase().startsWith('ar') ? 'rtl' : 'ltr';

  constructor() {
    // 语言与方向没有进模板，而是同步到根元素，读屏与浏览器排版都依赖它们
    document.documentElement.lang = this.localeId;
    document.documentElement.dir = this.dir;
  }

  // $localize 让 TS 里的字符串也进入抽取流程，构建期替换为目标语言
  protected summary(count: number): string {
    return $localize\`:@@order.summary:订单号 A-1024，共 \${count} 件商品\`;
  }

  protected setCount(value: string): void {
    this.count.set(Number(value));
  }

  protected setRole(value: string): void {
    this.role.set(value as Role);
  }
}
`,"src/index.html":`<!doctype html>
<html lang="zh-Hans">
<head>
  <meta charset="utf-8">
  <title>内置 i18n 多语言构建</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`,"src/main.ts":`import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar';
import localeEn from '@angular/common/locales/en';
import localeZhHans from '@angular/common/locales/zh-Hans';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// 内置 i18n 只带 en-US 一份 locale data，其余语言必须显式注册
registerLocaleData(localeZhHans);
registerLocaleData(localeEn);
registerLocaleData(localeAr);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
`,"src/styles.css":`:root {
  --ng-red: #dd0031;
  --ink: #1f2328;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg: #f6f7fb;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
`,"tsconfig.app.json":`{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": ["@angular/localize"]
  },
  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts"]
}
`,"tsconfig.json":`{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }]
}
`}},internals:Va,"perf-lab":{title:"大列表性能实验",description:"track、OnPush、computed 与 content-visibility 的组合优化。",entry:"src/app/app.ts",playground:!0,files:{"README.md":`# Scaffold

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Development server

To start a local development server, run:

\`\`\`bash
ng serve
\`\`\`

Once the server is running, open your browser and navigate to \`http://localhost:4200/\`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

\`\`\`bash
ng generate component component-name
\`\`\`

For a complete list of available schematics (such as \`components\`, \`directives\`, or \`pipes\`), run:

\`\`\`bash
ng generate --help
\`\`\`

## Building

To build the project run:

\`\`\`bash
ng build
\`\`\`

This will compile your project and store the build artifacts in the \`dist/\` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

\`\`\`bash
ng test
\`\`\`

## Running end-to-end tests

For end-to-end (e2e) testing, run:

\`\`\`bash
ng e2e
\`\`\`

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
`,"angular.json":`{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "perf-lab": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "perf-lab:build:production"
            },
            "development": {
              "buildTarget": "perf-lab:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}
`,"package.json":`{
  "name": "perf-lab",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "22.2.3",
    "@angular/compiler": "22.2.3",
    "@angular/core": "22.2.3",
    "@angular/forms": "22.2.3",
    "@angular/platform-browser": "22.2.3",
    "@angular/router": "22.2.3",
    "rxjs": "7.8.2",
    "tslib": "2.8.1"
  },
  "devDependencies": {
    "@angular/build": "22.2.3",
    "@angular/cli": "22.2.3",
    "@angular/compiler-cli": "22.2.3",
    "jsdom": "30.0.0",
    "typescript": "~6.0.2",
    "vitest": "^5.0.0"
  },
  "description": "大列表性能实验"
}
`,"src/app/app.config.ts":`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners()],
};
`,"src/app/app.css":`:host { display: block; padding: 24px; }
.page { max-width: 720px; margin: 0 auto; }
.head h1 { margin: 0 0 6px; font-size: 28px; }
.head p { margin: 0 0 16px; color: var(--muted); }
.toolbar { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.toolbar input { flex: 1 1 180px; padding: 9px 12px; border: 1px solid var(--line); border-radius: 9px; }
.toolbar button { border: 1px solid var(--line); background: #fff; border-radius: 999px; padding: 7px 12px; font-size: 13px; }
.toolbar button.active { background: var(--ng-red); border-color: var(--ng-red); color: #fff; }
.elapsed { color: var(--muted); font-size: 13px; }
.rows { list-style: none; margin: 0; padding: 0; background: #fff; border: 1px solid var(--line); border-radius: 12px; overflow: hidden; }
.rows li {
  display: flex; justify-content: space-between; padding: 11px 14px;
  border-bottom: 1px solid var(--line);
  /* 让浏览器跳过视口外行的布局与绘制 */
  content-visibility: auto;
  contain-intrinsic-size: 44px;
}
.rows li:last-child { border-bottom: 0; }
.group { color: var(--muted); font-size: 12px; }
`,"src/app/app.html":`<main class="page">
  <header class="head">
    <h1>大列表性能实验</h1>
    <p>5000 行数据，通过 track、OnPush 与 content-visibility 保持滚动流畅。</p>
  </header>

  <div class="toolbar">
    <input type="search" placeholder="按名称过滤" [value]="keyword()" (input)="onInput($event)" />
    <button type="button" [class.active]="activeGroup() === -1" (click)="selectGroup(-1)">全部</button>
    @for (group of [0, 1, 2, 3, 4]; track group) {
      <button type="button" [class.active]="activeGroup() === group" (click)="selectGroup(group)">
        分组 {{ group }}
      </button>
    }
  </div>

  <p class="elapsed" role="status">过滤耗时：{{ elapsed() || '尚未执行' }}，当前 {{ visibleRows().length }} 行</p>

  <ul class="rows">
    @for (row of visibleRows(); track row.id) {
      <li>
        <span>{{ row.label }}</span>
        <span class="group">分组 {{ row.group }}</span>
      </li>
    }
  </ul>
</main>
`,"src/app/app.ts":`import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface Row {
  id: number;
  label: string;
  group: number;
}

@Component({
  selector: 'app-root',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly rows = signal<Row[]>(
    Array.from({ length: 5000 }, (_, index) => ({
      id: index + 1,
      label: '记录 #' + (index + 1),
      group: index % 5,
    })),
  );

  protected readonly keyword = signal('');
  protected readonly activeGroup = signal(-1);
  protected readonly elapsed = signal('');

  protected readonly visibleRows = computed(() => {
    const keyword = this.keyword().trim();
    const group = this.activeGroup();
    return this.rows().filter(
      (row) =>
        (group === -1 || row.group === group) &&
        (keyword === '' || row.label.includes(keyword)),
    );
  });

  protected onInput(event: Event): void {
    this.keyword.set((event.target as HTMLInputElement).value);
  }

  protected selectGroup(group: number): void {
    const start = performance.now();
    this.activeGroup.set(group);
    // 读取 computed 触发实际过滤，用耗时量化优化前后的差异
    const count = this.visibleRows().length;
    this.elapsed.set(Math.round((performance.now() - start) * 100) / 100 + ' ms / ' + count + ' 行');
  }
}
`,"src/index.html":`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>大列表性能实验</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`,"src/main.ts":`import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
`,"src/styles.css":`:root {
  --ng-red: #dd0031;
  --ng-pink: #ff4d6d;
  --ink: #1f2328;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg: #f6f7fb;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
`,"tsconfig.app.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
`,"tsconfig.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
`,"tsconfig.spec.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
`}},"routing-form":{title:"注册表单与路由",description:"懒加载路由、路由参数绑定与响应式表单校验。",entry:"src/app/app.ts",playground:!0,files:{"README.md":`# Scaffold

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Development server

To start a local development server, run:

\`\`\`bash
ng serve
\`\`\`

Once the server is running, open your browser and navigate to \`http://localhost:4200/\`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

\`\`\`bash
ng generate component component-name
\`\`\`

For a complete list of available schematics (such as \`components\`, \`directives\`, or \`pipes\`), run:

\`\`\`bash
ng generate --help
\`\`\`

## Building

To build the project run:

\`\`\`bash
ng build
\`\`\`

This will compile your project and store the build artifacts in the \`dist/\` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

\`\`\`bash
ng test
\`\`\`

## Running end-to-end tests

For end-to-end (e2e) testing, run:

\`\`\`bash
ng e2e
\`\`\`

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
`,"angular.json":`{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "routing-form": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "routing-form:build:production"
            },
            "development": {
              "buildTarget": "routing-form:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}
`,"package.json":`{
  "name": "routing-form",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "22.2.3",
    "@angular/compiler": "22.2.3",
    "@angular/core": "22.2.3",
    "@angular/forms": "22.2.3",
    "@angular/platform-browser": "22.2.3",
    "@angular/router": "22.2.3",
    "rxjs": "7.8.2",
    "tslib": "2.8.1"
  },
  "devDependencies": {
    "@angular/build": "22.2.3",
    "@angular/cli": "22.2.3",
    "@angular/compiler-cli": "22.2.3",
    "jsdom": "30.0.0",
    "typescript": "~6.0.2",
    "vitest": "^5.0.0"
  },
  "description": "路由与响应式表单"
}
`,"src/app/admin.ts":`import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: \`
    <section>
      <h2>管理后台</h2>
      <p>这个组件通过 <code>loadComponent</code> 懒加载，只有管理员身份才会下载。</p>
    </section>
  \`,
})
export class Admin {}
`,"src/app/app.config.ts":`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // withComponentInputBinding：把路由参数、query 等直接绑定到组件 input
    provideRouter(routes, withComponentInputBinding()),
  ],
};
`,"src/app/app.css":`:host { display: block; padding: 24px; }
.page { max-width: 560px; margin: 0 auto; }
nav { display: flex; gap: 8px; margin-bottom: 16px; }
nav a { text-decoration: none; color: var(--ink); padding: 7px 12px; border-radius: 999px; border: 1px solid var(--line); background: #fff; font-size: 14px; }
nav a:hover { border-color: var(--ng-red); color: var(--ng-red); }
`,"src/app/app.html":`<main class="page">
  <nav>
    <a routerLink="/">首页</a>
    <a routerLink="/login">登录态</a>
    <a routerLink="/signup">注册</a>
    <a routerLink="/user/42">用户 42</a>
    <a routerLink="/admin">管理后台</a>
  </nav>
  <router-outlet />
</main>
`,"src/app/app.routes.ts":`import { Routes } from '@angular/router';
import { authGuard, adminMatch } from './auth.guards';
import { Home } from './home';
import { Login } from './login';
import { NoAccess } from './no-access';
import { Signup } from './signup';
import { UserDetail } from './user-detail';
import { userResolver } from './user.resolver';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  {
    path: 'user/:id',
    component: UserDetail,
    canActivate: [authGuard],
    resolve: { profile: userResolver },
  },
  // 同一条路径先尝试懒加载的管理后台；canMatch 失败后落到下面的兜底组件
  {
    path: 'admin',
    canMatch: [adminMatch],
    loadComponent: () => import('./admin').then((m) => m.Admin),
  },
  { path: 'admin', component: NoAccess },
  { path: '**', redirectTo: '' },
];
`,"src/app/app.ts":`import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
`,"src/app/auth.guards.ts":`import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

// 未登录时返回 UrlTree，Router 会直接跳转，而不是让组件先创建再失败
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.signedIn() ? true : router.createUrlTree(['/login']);
};

// canMatch 在路由匹配阶段生效：不满足时这条路由直接不参与匹配
export const adminMatch: CanMatchFn = () => inject(AuthService).role() === 'admin';
`,"src/app/auth.service.ts":`import { Injectable, computed, signal } from '@angular/core';

export type Role = 'guest' | 'user' | 'admin';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly role = signal<Role>('guest');
  readonly signedIn = computed(() => this.role() !== 'guest');

  setRole(role: Role): void {
    this.role.set(role);
  }
}
`,"src/app/home.ts":`import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: \`
    <p>请选择：<a routerLink="/signup">注册账号</a>、<a routerLink="/user/42">查看用户 42</a>，
    或先到 <a routerLink="/login">登录态</a> 切换角色再访问 <a routerLink="/admin">管理后台</a>。</p>
  \`,
})
export class Home {}
`,"src/app/login.ts":`import { Component, inject } from '@angular/core';
import { Role, AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: \`
    <section>
      <h2>登录态模拟</h2>
      <p>当前角色：<strong>{{ auth.role() }}</strong></p>
      <button type="button" (click)="setRole('guest')">游客</button>
      <button type="button" (click)="setRole('user')">普通用户</button>
      <button type="button" (click)="setRole('admin')">管理员</button>
    </section>
  \`,
})
export class Login {
  protected readonly auth = inject(AuthService);

  protected setRole(role: Role): void {
    this.auth.setRole(role);
  }
}
`,"src/app/no-access.ts":`import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-no-access',
  imports: [RouterLink],
  template: \`
    <section>
      <h2>无权访问</h2>
      <p><code>canMatch</code> 判定失败，路由没有匹配到管理后台。</p>
      <p><a routerLink="/login">先去登录并切换为管理员</a></p>
    </section>
  \`,
})
export class NoAccess {}
`,"src/app/password-match.ts":`import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// 跨字段校验：返回 null 表示通过，返回对象表示具体错误
export function passwordMatch(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirm = group.get('confirm')?.value;
    if (!password || !confirm) return null;
    return password === confirm ? null : { passwordMismatch: true };
  };
}
`,"src/app/signup.css":`.card { padding: 22px; background: #fff; border: 1px solid var(--line); border-radius: 14px; }
h2 { margin: 0 0 4px; }
.muted { margin: 0 0 16px; color: var(--muted); font-size: 14px; }
form { display: grid; gap: 6px; }
label { margin-top: 8px; font-size: 13px; font-weight: 600; }
input { padding: 10px 12px; border: 1px solid var(--line); border-radius: 9px; }
input:focus { outline: 2px solid rgb(221 0 49 / 25%); border-color: var(--ng-red); }
button { margin-top: 14px; border: 0; border-radius: 9px; padding: 11px; background: var(--ng-red); color: #fff; font-weight: 700; }
.error { margin: 0; color: #b91c1c; font-size: 12px; }
.ok { margin: 0; color: #15803d; font-size: 13px; }
`,"src/app/signup.html":`<section class="card">
  <h2>创建账号</h2>
  <p class="muted">密码至少 8 位，两次输入必须一致。</p>

  <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
    <label for="email">邮箱</label>
    <input id="email" type="email" formControlName="email" autocomplete="email"
      [attr.aria-invalid]="form.controls.email.touched && form.controls.email.invalid" />
    @if (form.controls.email.touched && form.controls.email.invalid) {
      <p class="error" role="alert">
        @if (form.controls.email.hasError('required')) { 邮箱不能为空。 }
        @if (form.controls.email.hasError('email')) { 请输入合法的邮箱地址。 }
      </p>
    }

    <label for="password">密码</label>
    <input id="password" type="password" formControlName="password" autocomplete="new-password" />
    @if (form.controls.password.touched && form.controls.password.hasError('minlength')) {
      <p class="error" role="alert">密码至少 8 位。</p>
    }

    <label for="confirm">确认密码</label>
    <input id="confirm" type="password" formControlName="confirm" autocomplete="new-password" />
    @if (form.controls.confirm.touched && form.hasError('passwordMismatch')) {
      <p class="error" role="alert">两次输入的密码不一致。</p>
    }

    <button type="submit">提交注册</button>
    @if (submitted() && form.invalid) {
      <p class="error" role="alert">表单仍有错误，请检查后再提交。</p>
    }
    @if (submitted() && form.valid) {
      <p class="ok" role="status">校验通过，数据已打印到控制台。</p>
    }
  </form>
</section>
`,"src/app/signup.ts":`import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatch } from './password-match';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  private readonly fb = inject(FormBuilder);
  protected readonly submitted = signal(false);

  protected readonly form = this.fb.nonNullable.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required]],
    },
    { validators: passwordMatch() },
  );

  protected submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      // 让所有字段立即显示错误，而不是只提示第一个
      this.form.markAllAsTouched();
      return;
    }
    console.log('提交数据', this.form.getRawValue());
  }
}
`,"src/app/user-detail.ts":`import { Component, input } from '@angular/core';
import { UserProfile } from './user.resolver';

@Component({
  selector: 'app-user-detail',
  template: \`
    <p>路由参数 ID：<strong>{{ id() }}</strong></p>
    <p>解析结果：<strong>{{ profile().name }}</strong>（{{ profile().plan }}）</p>
  \`,
})
export class UserDetail {
  // 启用 withComponentInputBinding 后，路由参数与 resolve 数据都会绑定到 input
  readonly id = input.required<string>();
  readonly profile = input.required<UserProfile>();
}
`,"src/app/user.resolver.ts":`import { ResolveFn } from '@angular/router';
import { delay, of } from 'rxjs';

export interface UserProfile {
  id: string;
  name: string;
  plan: 'free' | 'pro';
}

const USERS: Record<string, UserProfile> = {
  '42': { id: '42', name: 'Ada Lovelace', plan: 'pro' },
  '7': { id: '7', name: 'Grace Hopper', plan: 'free' },
};

// 模拟网络延迟，展示「路由激活前解析数据」的时序
export const userResolver: ResolveFn<UserProfile> = (route) => {
  const id = route.paramMap.get('id') ?? 'unknown';
  const profile = USERS[id] ?? { id, name: \`访客 \${id}\`, plan: 'free' as const };
  return of(profile).pipe(delay(600));
};
`,"src/index.html":`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>路由与响应式表单</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`,"src/main.ts":`import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
`,"src/styles.css":`:root {
  --ng-red: #dd0031;
  --ng-pink: #ff4d6d;
  --ink: #1f2328;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg: #f6f7fb;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
`,"tsconfig.app.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
`,"tsconfig.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
`,"tsconfig.spec.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
`}},"signals-lab":{title:"Signals 实验室",description:"signal、computed、effect、linkedSignal 的协作方式。",entry:"src/app/app.ts",playground:!0,files:{"README.md":`# Scaffold

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Development server

To start a local development server, run:

\`\`\`bash
ng serve
\`\`\`

Once the server is running, open your browser and navigate to \`http://localhost:4200/\`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

\`\`\`bash
ng generate component component-name
\`\`\`

For a complete list of available schematics (such as \`components\`, \`directives\`, or \`pipes\`), run:

\`\`\`bash
ng generate --help
\`\`\`

## Building

To build the project run:

\`\`\`bash
ng build
\`\`\`

This will compile your project and store the build artifacts in the \`dist/\` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

\`\`\`bash
ng test
\`\`\`

## Running end-to-end tests

For end-to-end (e2e) testing, run:

\`\`\`bash
ng e2e
\`\`\`

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
`,"angular.json":`{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "signals-lab": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "signals-lab:build:production"
            },
            "development": {
              "buildTarget": "signals-lab:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}
`,"package.json":`{
  "name": "signals-lab",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "22.2.3",
    "@angular/compiler": "22.2.3",
    "@angular/core": "22.2.3",
    "@angular/forms": "22.2.3",
    "@angular/platform-browser": "22.2.3",
    "@angular/router": "22.2.3",
    "rxjs": "7.8.2",
    "tslib": "2.8.1"
  },
  "devDependencies": {
    "@angular/build": "22.2.3",
    "@angular/cli": "22.2.3",
    "@angular/compiler-cli": "22.2.3",
    "jsdom": "30.0.0",
    "typescript": "~6.0.2",
    "vitest": "^5.0.0"
  },
  "description": "Signals 响应式实验室"
}
`,"src/app/app.config.ts":`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners()],
};
`,"src/app/app.css":`:host { display: block; padding: 24px; }
.page { max-width: 640px; margin: 0 auto; display: grid; gap: 14px; }
.head h1 { margin: 0 0 6px; font-size: 28px; }
.head p { margin: 0 0 6px; color: var(--muted); }
.card { padding: 20px; background: #fff; border: 1px solid var(--line); border-radius: 14px; display: grid; gap: 8px; }
label { font-size: 14px; font-weight: 600; }
input[type='range'] { width: 100%; accent-color: var(--ng-red); }
.draft { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 8px; padding-top: 8px; border-top: 1px dashed var(--line); }
.draft label, .draft input { grid-column: 1 / -1; }
.draft button { justify-self: start; border: 1px solid var(--line); border-radius: 8px; padding: 7px 12px; background: #fff; font-weight: 600; }
.totals { display: grid; grid-template-columns: 90px 1fr; gap: 8px 12px; margin: 10px 0 0; padding-top: 14px; border-top: 1px solid var(--line); }
dt { color: var(--muted); }
dd { margin: 0; font-weight: 700; }
dd.hot { color: var(--ng-red); font-size: 20px; }
h2 { margin: 0 0 8px; font-size: 16px; }
ul { margin: 0; padding-left: 18px; display: grid; gap: 6px; font-size: 13px; color: #374151; }
`,"src/app/app.html":`<main class="page">
  <header class="head">
    <h1>Signals 实验室</h1>
    <p>调整价格与数量，观察 computed 与 effect 如何自动更新。</p>
  </header>

  <section class="card">
    <label for="price">单价：{{ price() }} 元</label>
    <input id="price" type="range" min="50" max="500" step="10" [value]="price()" (input)="setPrice($event)" />

    <label for="quantity">数量：{{ quantity() }}</label>
    <input id="quantity" type="range" min="1" max="20" [value]="quantity()" (input)="setQuantity($event)" />

    <div class="draft">
      <label for="draft">草稿数量：{{ quantityDraft() }}</label>
      <input id="draft" type="range" min="1" max="20" [value]="quantityDraft()" (input)="setDraft($event)" />
      <button type="button" (click)="applyDraft()">应用草稿</button>
    </div>

    <dl class="totals">
      <dt>总价</dt><dd>{{ total() }} 元</dd>
      <dt>折后价</dt><dd class="hot">{{ discounted() }} 元</dd>
    </dl>
  </section>

  <section class="card">
    <h2>effect 输出</h2>
    <ul>
      @for (line of effectLog(); track $index) {
        <li>{{ line }}</li>
      }
    </ul>
  </section>

  <section class="card">
    <h2>生命周期与互操作</h2>
    <p>RxJS 心跳：<strong>{{ heartbeat() }}</strong> 次（由 <code>toSignal</code> 接入）</p>
    <p class="muted">{{ renderLog() }}</p>
  </section>
</main>
`,"src/app/app.ts":`import {
  Component,
  afterNextRender,
  computed,
  effect,
  linkedSignal,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly price = signal(199);
  protected readonly quantity = signal(2);

  // computed 是惰性求值的派生状态，只有依赖变化且被读取时才重新计算
  protected readonly total = computed(() => this.price() * this.quantity());
  protected readonly discounted = computed(() => Math.round(this.total() * 0.88));

  // linkedSignal：依赖变化时可写，用户可以临时改草稿而不污染源状态
  protected readonly quantityDraft = linkedSignal(() => this.quantity());

  protected readonly effectLog = signal<string[]>([]);

  // toSignal：把 RxJS 冷流接进 signal 图，模板无需订阅
  protected readonly heartbeat = toSignal(
    interval(1000).pipe(map((tick) => tick + 1)),
    { initialValue: 0 },
  );
  protected readonly renderLog = signal('等待首次渲染');

  constructor() {
    // afterNextRender 只在浏览器首次渲染完成后执行一次，适合测量 DOM
    afterNextRender(() => {
      this.renderLog.set('首次渲染完成于 ' + new Date().toLocaleTimeString('zh-CN'));
    });

    // effect 用于同步副作用；不要在 effect 里写会再次触发自身的状态
    effect(() => {
      const summary = '总价 ' + this.total() + ' 元，优惠价 ' + this.discounted() + ' 元';
      this.effectLog.update((list) => [...list.slice(-4), summary]);
    });
  }

  protected setPrice(event: Event): void {
    this.price.set(Number((event.target as HTMLInputElement).value));
  }

  protected setQuantity(event: Event): void {
    this.quantity.set(Number((event.target as HTMLInputElement).value));
  }

  protected setDraft(event: Event): void {
    this.quantityDraft.set(Number((event.target as HTMLInputElement).value));
  }

  protected applyDraft(): void {
    this.quantity.set(this.quantityDraft());
  }
}
`,"src/index.html":`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Signals 响应式实验室</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`,"src/main.ts":`import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
`,"src/styles.css":`:root {
  --ng-red: #dd0031;
  --ng-pink: #ff4d6d;
  --ink: #1f2328;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg: #f6f7fb;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
`,"tsconfig.app.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
`,"tsconfig.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
`,"tsconfig.spec.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
`}},"ssr-lab":{title:"SSR 与水合实验室",description:"服务端渲染、平台差异与水合一致性检查，需在 Node 环境独立预览。",entry:"src/app/app.ts",playground:!1,preview:{command:"pnpm --filter ssr-lab build && pnpm --filter ssr-lab serve:ssr",url:"http://localhost:4000"},files:{"angular.json":`{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "ssr-lab": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "server": "src/main.server.ts",
            "ssr": {
              "entry": "src/server.ts"
            },
            "outputMode": "server",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "ssr-lab:build:production"
            },
            "development": {
              "buildTarget": "ssr-lab:build:development"
            }
          },
          "defaultConfiguration": "development"
        }
      }
    }
  }
}
`,"package.json":`{
  "name": "ssr-lab",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "serve:ssr": "node dist/ssr-lab/server/server.mjs",
    "test:e2e": "node scripts/e2e.mjs"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "22.2.3",
    "@angular/compiler": "22.2.3",
    "@angular/core": "22.2.3",
    "@angular/platform-browser": "22.2.3",
    "@angular/platform-server": "22.2.3",
    "@angular/router": "22.2.3",
    "@angular/ssr": "22.2.3",
    "rxjs": "7.8.2",
    "tslib": "2.8.1"
  },
  "devDependencies": {
    "@angular/build": "22.2.3",
    "@angular/cli": "22.2.3",
    "@angular/compiler-cli": "22.2.3",
    "@types/node": "^22.0.0",
    "typescript": "~6.0.2"
  },
  "description": "SSR 与水合实验室"
}
`,"src/app/app.config.server.ts":`import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

// 只追加服务端能力，浏览器与 Node 共用同一份 appConfig
const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
`,"src/app/app.config.ts":`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // 浏览器端启用水合；事件回放让水合完成前的点击不丢失
    provideClientHydration(withEventReplay()),
  ],
};
`,"src/app/app.css":`:host {
  display: block;
  padding: 24px;
  background: #f6f7f9;
}

.page {
  max-width: 720px;
  margin: 0 auto;
}

.head h1 {
  margin: 0 0 6px;
  font-size: 28px;
}

.head p {
  margin: 0 0 18px;
  color: #64748b;
}

.card {
  margin-top: 16px;
  padding: 18px 20px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
}

.card h2 {
  margin: 0 0 12px;
  font-size: 17px;
}

.facts {
  display: grid;
  gap: 10px;
  margin: 0;
}

.facts > div {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 10px;
  align-items: baseline;
}

dt {
  color: #64748b;
  font-size: 13px;
}

dd {
  margin: 0;
  font-size: 14px;
}

code {
  padding: 2px 5px;
  background: #f1f5f9;
  border-radius: 4px;
  font-size: 12px;
  word-break: break-all;
}

.tag {
  display: inline-block;
  padding: 3px 9px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.tag.server {
  background: #eef2ff;
  color: #4338ca;
}

.tag.browser {
  background: #ecfdf5;
  color: #047857;
}

.actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

button {
  padding: 8px 16px;
  border: 0;
  border-radius: 8px;
  background: #dd0031;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

.count {
  font-size: 13px;
  color: #475569;
}

.steps {
  margin: 0;
  padding-left: 20px;
  color: #475569;
  font-size: 13px;
  line-height: 1.9;
}
`,"src/app/app.html":`<main class="page">
  <header class="head">
    <h1>SSR 与水合实验室</h1>
    <p>同一份组件代码，在服务端先渲染成 HTML，再由浏览器水合接管。</p>
  </header>

  <section class="card">
    <h2>当前渲染环境</h2>
    <dl class="facts">
      <div>
        <dt>平台</dt>
        <dd>
          @if (isServer) { <span class="tag server">服务端渲染</span> }
          @if (isBrowser) { <span class="tag browser">浏览器</span> }
        </dd>
      </div>
      <div>
        <dt>水合状态</dt>
        <dd>
          @if (hydrated()) {
            <span class="tag browser">已水合，交互生效</span>
          } @else {
            <span class="tag server">尚未水合，仅静态 HTML</span>
          }
        </dd>
      </div>
      <div>
        <dt>REQUEST 中的 URL</dt>
        <dd><code>{{ requestUrl }}</code></dd>
      </div>
      <div>
        <dt>本实例构造时间</dt>
        <dd><code>{{ renderStamp }}</code></dd>
      </div>
    </dl>
  </section>

  <section class="card">
    <h2>交互验证</h2>
    <p>按钮只有在水合完成后才会响应点击。服务端输出的 HTML 里它只是一段静态标记。</p>
    <div class="actions">
      <button type="button" (click)="increment()">点击 +1</button>
      <span class="count">当前计数：{{ count() }}</span>
    </div>
  </section>

  <section class="card">
    <h2>怎么观察</h2>
    <ol class="steps">
      <li>运行 <code>pnpm --filter ssr-lab build</code>，产物分为 <code>browser/</code> 与 <code>server/</code>。</li>
      <li>运行 <code>pnpm --filter ssr-lab serve:ssr</code>，访问 <code>http://localhost:4000</code>。</li>
      <li>查看网页源代码：首屏 HTML 已包含上面的平台与时间信息。</li>
      <li>看浏览器 Network：页面本身有内容，JS 随后下载并完成水合。</li>
      <li>点击按钮：水合前无响应，水合后计数递增。</li>
    </ol>
  </section>
</main>
`,"src/app/app.ts":`import { Component, PLATFORM_ID, REQUEST, afterNextRender, inject, signal } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly request = inject(REQUEST, { optional: true });

  protected readonly isServer = isPlatformServer(this.platformId);
  protected readonly isBrowser = isPlatformBrowser(this.platformId);
  protected readonly hydrated = signal(false);
  protected readonly count = signal(0);

  // 服务端能读到原始请求，浏览器端该 Token 为 null
  protected readonly requestUrl = this.request?.url ?? '（浏览器端没有 REQUEST）';

  // 在服务端与浏览器各构造一次，所以两端的值不同，可用于观察首屏 HTML 与水合后的差异
  protected readonly renderStamp = new Date().toISOString();

  constructor() {
    // 只在浏览器端、且首屏渲染完成后执行：这正是「水合完成」的可靠信号
    afterNextRender(() => this.hydrated.set(true));
  }

  protected increment(): void {
    this.count.update((value) => value + 1);
  }
}
`,"src/index.html":`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>SSR 与水合实验室</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`,"src/main.server.ts":`import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

// Angular 的 SSR 引导入口：每个请求用它创建一个独立的服务端应用实例
const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;
`,"src/main.ts":`import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
`,"src/server.ts":`import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';

const engine = new AngularNodeAppEngine({ allowedHosts: ['localhost', '127.0.0.1'] });

// 构建产物结构与 dist/ssr-lab/server/server.mjs 相对：静态资源在 ../browser
const BROWSER_DIR = fileURLToPath(new URL('../browser/', import.meta.url));

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.txt': 'text/plain; charset=utf-8',
};

/**
 * 先让 Angular 引擎处理路由（SSR / 预渲染），
 * 引擎不认识静态资源请求时返回 null，再回退到 browser 目录。
 */
export const reqHandler = createNodeRequestHandler(async (req, res, next) => {
  const response = await engine.handle(req);
  if (response) {
    await writeResponseToNodeResponse(response, res);
    return;
  }

  const pathname = new URL(req.url ?? '/', 'http://localhost').pathname;
  const filePath = normalize(join(BROWSER_DIR, pathname));
  if (!filePath.startsWith(BROWSER_DIR)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }

  try {
    const content = await readFile(filePath);
    res.setHeader('Content-Type', MIME[extname(filePath)] ?? 'application/octet-stream');
    res.end(content);
  } catch {
    res.statusCode = 404;
    res.end('Not Found');
    next();
  }
});

if (isMainModule(import.meta.url)) {
  const port = Number(process.env['PORT'] ?? 4000);
  createServer((req, res) => {
    void reqHandler(req, res, () => {
      if (!res.headersSent) {
        res.statusCode = 404;
        res.end('Not Found');
      }
    });
  }).listen(port, () => {
    console.log(\`SSR 预览已启动：http://localhost:\${port}\`);
  });
}
`,"src/styles.css":`html,
body {
  margin: 0;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  color: #111827;
}
`,"tsconfig.app.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": [
      "node"
    ]
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
`,"tsconfig.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    }
  ]
}
`}},"template-syntax":{title:"团队名片",description:"input() / output() 组件通信，@for、@switch 与内容投影。",entry:"src/app/app.ts",playground:!0,files:{"README.md":`# Scaffold

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Development server

To start a local development server, run:

\`\`\`bash
ng serve
\`\`\`

Once the server is running, open your browser and navigate to \`http://localhost:4200/\`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

\`\`\`bash
ng generate component component-name
\`\`\`

For a complete list of available schematics (such as \`components\`, \`directives\`, or \`pipes\`), run:

\`\`\`bash
ng generate --help
\`\`\`

## Building

To build the project run:

\`\`\`bash
ng build
\`\`\`

This will compile your project and store the build artifacts in the \`dist/\` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

\`\`\`bash
ng test
\`\`\`

## Running end-to-end tests

For end-to-end (e2e) testing, run:

\`\`\`bash
ng e2e
\`\`\`

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
`,"angular.json":`{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "template-syntax": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "template-syntax:build:production"
            },
            "development": {
              "buildTarget": "template-syntax:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}
`,"package.json":`{
  "name": "template-syntax",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "22.2.3",
    "@angular/compiler": "22.2.3",
    "@angular/core": "22.2.3",
    "@angular/forms": "22.2.3",
    "@angular/platform-browser": "22.2.3",
    "@angular/router": "22.2.3",
    "rxjs": "7.8.2",
    "tslib": "2.8.1"
  },
  "devDependencies": {
    "@angular/build": "22.2.3",
    "@angular/cli": "22.2.3",
    "@angular/compiler-cli": "22.2.3",
    "jsdom": "30.0.0",
    "typescript": "~6.0.2",
    "vitest": "^5.0.0"
  },
  "description": "模板语法与组件通信"
}
`,"src/app/app.config.ts":`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners()],
};
`,"src/app/app.css":`:host { display: block; padding: 24px; }
.page { max-width: 720px; margin: 0 auto; }
.head h1 { margin: 0 0 6px; font-size: 28px; }
.head p { margin: 0; color: var(--muted); }
code { background: #fff; border: 1px solid var(--line); border-radius: 5px; padding: 1px 5px; }
.toolbar { display: flex; gap: 8px; margin: 20px 0 14px; }
.toolbar button {
  border: 1px solid var(--line); border-radius: 999px; padding: 7px 14px;
  background: #fff; font-weight: 600; color: var(--muted);
}
.toolbar button.active { background: var(--ng-red); border-color: var(--ng-red); color: #fff; }
.list { display: grid; gap: 12px; }
.empty { padding: 24px; text-align: center; color: var(--muted); background: #fff; border: 1px dashed var(--line); border-radius: 12px; }
.selected { margin: 18px 0 4px; font-weight: 600; }
.summary { color: var(--muted); font-size: 14px; }
`,"src/app/app.html":`<main class="page">
  <header class="head">
    <h1>团队名片</h1>
    <p>演示 <code>&#64;for</code>、<code>&#64;switch</code>、内容投影与组件通信。</p>
  </header>

  <div class="toolbar">
    <button type="button" [class.active]="view() === 'all'" (click)="view.set('all')">全部成员</button>
    <button type="button" [class.active]="view() === 'top'" (click)="view.set('top')">仅看高分</button>
  </div>

  <section class="list">
    @for (member of visibleMembers(); track member.id) {
      <app-user-card
        [name]="member.name"
        [role]="member.role"
        [score]="member.score"
        (select)="onSelect($event)"
      />
    } @empty {
      <p class="empty">没有符合条件的成员。</p>
    }
  </section>

  <p class="selected" aria-live="polite">当前选择：{{ selected() }}</p>

  @switch (visibleMembers().length) {
    @case (0) {
      <p class="summary">列表为空。</p>
    }
    @case (1) {
      <p class="summary">只有一位成员。</p>
    }
    @default {
      <p class="summary">共 {{ visibleMembers().length }} 位成员。</p>
    }
  }
</main>
`,"src/app/app.ts":`import { Component, computed, signal } from '@angular/core';
import { UserCard } from './user-card';

interface Member {
  id: number;
  name: string;
  role: string;
  score: number;
}

@Component({
  selector: 'app-root',
  imports: [UserCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly members = signal<Member[]>([
    { id: 1, name: '林晚', role: '前端工程师', score: 96 },
    { id: 2, name: '周野', role: '全栈工程师', score: 88 },
    { id: 3, name: '陈墨', role: '技术负责人', score: 92 },
  ]);
  protected readonly view = signal<'all' | 'top'>('all');
  protected readonly selected = signal('尚未选择成员');

  protected readonly visibleMembers = computed(() =>
    this.view() === 'top'
      ? this.members().filter((member) => member.score >= 90)
      : this.members(),
  );

  protected onSelect(name: string): void {
    this.selected.set(name);
  }
}
`,"src/app/badge.css":`.badge {
  display: inline-flex; align-items: center; border-radius: 999px;
  padding: 2px 10px; font-size: 12px; font-weight: 600;
  background: #eef2ff; color: #4338ca;
}
.badge--hot { background: #fef2f2; color: var(--ng-red); }
`,"src/app/badge.html":`<span class="badge" [class.badge--hot]="hot()">
  <ng-content />
</span>
`,"src/app/badge.ts":`import { Component, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.html',
  styleUrl: './badge.css',
})
export class Badge {
  // input() 返回 Signal，父组件通过 [hot]="true" 传值
  readonly hot = input(false);
}
`,"src/app/user-card.css":`.user-card {
  display: grid; gap: 10px; padding: 18px; background: #fff;
  border: 1px solid var(--line); border-radius: 14px;
}
header { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
h3 { margin: 0; font-size: 18px; }
.role { margin: 0; color: var(--muted); font-size: 14px; }
button {
  justify-self: start; border: 1px solid var(--line); border-radius: 9px;
  padding: 8px 14px; background: #fff; font-weight: 600;
}
button:hover { border-color: var(--ng-red); color: var(--ng-red); }
`,"src/app/user-card.html":`<article class="user-card">
  <header>
    <h3>{{ name() }}</h3>
    <app-badge [hot]="score() >= 90">{{ score() }} 分</app-badge>
  </header>
  <p class="role">{{ role() }}</p>
  <button type="button" (click)="onSelect()">选择该成员</button>
</article>
`,"src/app/user-card.ts":`import { Component, input, output } from '@angular/core';
import { Badge } from './badge';

@Component({
  selector: 'app-user-card',
  imports: [Badge],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  readonly name = input.required<string>();
  readonly role = input('未分配角色');
  readonly score = input(0);

  // output() 声明事件，父组件用 (select)="onSelect($event)" 接收
  readonly select = output<string>();

  protected onSelect(): void {
    this.select.emit(this.name());
  }
}
`,"src/index.html":`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>模板语法与组件通信</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`,"src/main.ts":`import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
`,"src/styles.css":`:root {
  --ng-red: #dd0031;
  --ng-pink: #ff4d6d;
  --ink: #1f2328;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg: #f6f7fb;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
`,"tsconfig.app.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
`,"tsconfig.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
`,"tsconfig.spec.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
`}},"testing-lab":{title:"可测试的计价模块",description:"纯函数优先的测试设计，配合 Vitest 运行单元测试。",entry:"src/app/price.ts",playground:!0,files:{"README.md":`# Scaffold

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Development server

To start a local development server, run:

\`\`\`bash
ng serve
\`\`\`

Once the server is running, open your browser and navigate to \`http://localhost:4200/\`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

\`\`\`bash
ng generate component component-name
\`\`\`

For a complete list of available schematics (such as \`components\`, \`directives\`, or \`pipes\`), run:

\`\`\`bash
ng generate --help
\`\`\`

## Building

To build the project run:

\`\`\`bash
ng build
\`\`\`

This will compile your project and store the build artifacts in the \`dist/\` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

\`\`\`bash
ng test
\`\`\`

## Running end-to-end tests

For end-to-end (e2e) testing, run:

\`\`\`bash
ng e2e
\`\`\`

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
`,"angular.json":`{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "testing-lab": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "testing-lab:build:production"
            },
            "development": {
              "buildTarget": "testing-lab:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}
`,"e2e/smoke.spec.ts":`import { expect, test } from '@playwright/test';

// 唯一一条冒烟：证明真实浏览器里能渲染首屏、计算折后金额
test('计价页首屏渲染并显示折后金额', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: '购物车计价' })).toBeVisible();
  await expect(page.getByText('1130.4 元')).toBeVisible();
});
`,"package.json":`{
  "name": "testing-lab",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "test:e2e": "playwright test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "22.2.3",
    "@angular/compiler": "22.2.3",
    "@angular/core": "22.2.3",
    "@angular/forms": "22.2.3",
    "@angular/platform-browser": "22.2.3",
    "@angular/router": "22.2.3",
    "rxjs": "7.8.2",
    "tslib": "2.8.1"
  },
  "devDependencies": {
    "@angular/build": "22.2.3",
    "@angular/cli": "22.2.3",
    "@angular/compiler-cli": "22.2.3",
    "@angular/localize": "22.2.3",
    "@playwright/test": "^1.64.0",
    "jsdom": "30.0.0",
    "typescript": "~6.0.2",
    "vitest": "^5.0.0",
    "zone.js": "~0.16.0"
  },
  "description": "可测试的计价模块"
}
`,"playwright.config.ts":`import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  workers: 1,
  timeout: 30_000,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4300',
    headless: true,
  },
  webServer: {
    command: 'pnpm exec ng serve --port 4300',
    url: 'http://localhost:4300',
    reuseExistingServer: !process.env['CI'],
    timeout: 120_000,
  },
});
`,"src/app/app.config.ts":`import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
};
`,"src/app/app.css":`:host { display: block; padding: 24px; }
.page { max-width: 560px; margin: 0 auto; }
.head h1 { margin: 0 0 6px; font-size: 28px; }
.head p { margin: 0 0 18px; color: var(--muted); }
.card { padding: 20px; background: #fff; border: 1px solid var(--line); border-radius: 14px; }
ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
li { display: flex; justify-content: space-between; padding-bottom: 8px; border-bottom: 1px dashed var(--line); }
.muted { color: var(--muted); font-size: 13px; }
dl { display: grid; grid-template-columns: 90px 1fr; gap: 8px 12px; margin: 16px 0 0; }
dt { color: var(--muted); }
dd { margin: 0; font-weight: 700; }
dd.hot { color: var(--ng-red); font-size: 20px; }
.tip { margin-top: 16px; color: var(--muted); font-size: 13px; }
code { background: #fff; border: 1px solid var(--line); padding: 1px 5px; border-radius: 5px; }
`,"src/app/app.html":`<main class="page">
  <header class="head">
    <h1>购物车计价</h1>
    <p>界面只负责展示，金额计算全部由可测试的纯函数完成。</p>
  </header>

  <section class="card">
    <ul>
      @for (item of items(); track item.name) {
        <li>
          <span>{{ item.name }}</span>
          <span class="muted">{{ item.price }} × {{ item.quantity }}</span>
        </li>
      }
    </ul>
    <dl>
      <dt>小计</dt><dd>{{ subtotal() }} 元</dd>
      <dt>九折后</dt><dd class="hot">{{ discounted() }} 元</dd>
    </dl>
  </section>

  <section class="card">
    <h2>远程用户</h2>
    <p class="muted">这段调用由 user.service.spec.ts 用 HttpTestingController 覆盖，不会真的发请求。</p>
    <button type="button" (click)="loadUsers()">加载前三位用户</button>
    @if (remoteState() === 'loading') {
      <p class="muted" role="status">加载中...</p>
    }
    @if (remoteState() === 'error') {
      <p class="muted" role="alert">接口不可达，已清空列表。</p>
    }
    <ul>
      @for (user of remoteUsers(); track user.id) {
        <li><span>{{ user.name }}</span><span class="muted">{{ user.email }}</span></li>
      }
    </ul>
  </section>

  <p class="tip">在终端运行 <code>npm test</code>，查看纯函数、TestBed 与 HTTP 三组断言。</p>
</main>
`,"src/app/app.spec.ts":`import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { App } from './app';

describe('App（TestBed 组件测试）', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      // App 注入了 UserService，TestBed 必须提供 HttpClient
      providers: [provideHttpClient()],
    }).compileComponents();
  });

  it('渲染纯函数计算的小计与折后价', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent as string;
    expect(text).toContain('1256');
    expect(text).toContain('1130.4');
  });
});
`,"src/app/app.ts":`import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CartItem, applyDiscount, subtotal } from './price';
import { User, UserService } from './user.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly userService = inject(UserService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly items = signal<CartItem[]>([
    { name: '机械键盘', price: 399, quantity: 2 },
    { name: '人体工学鼠标', price: 199, quantity: 1 },
    { name: '显示器支架', price: 259, quantity: 1 },
  ]);

  protected readonly subtotal = computed(() => subtotal(this.items()));
  protected readonly discounted = computed(() => applyDiscount(this.subtotal(), 0.1));

  protected readonly remoteUsers = signal<User[]>([]);
  protected readonly remoteState = signal<'idle' | 'loading' | 'error'>('idle');

  protected loadUsers(): void {
    this.remoteState.set('loading');
    this.userService
      .list()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (users) => {
          this.remoteUsers.set(users);
          this.remoteState.set('idle');
        },
        error: () => {
          this.remoteUsers.set([]);
          this.remoteState.set('error');
        },
      });
  }
}
`,"src/app/price.spec.ts":`import { describe, expect, it } from 'vitest';
import { CartItem, applyDiscount, subtotal } from './price';

describe('subtotal', () => {
  it('累加多个商品', () => {
    const items: CartItem[] = [
      { name: '键盘', price: 399, quantity: 2 },
      { name: '鼠标', price: 199, quantity: 1 },
    ];
    expect(subtotal(items)).toBe(997);
  });

  it('空购物车返回 0', () => {
    expect(subtotal([])).toBe(0);
  });
});

describe('applyDiscount', () => {
  it('按折扣率计算并保留两位小数', () => {
    expect(applyDiscount(100, 0.15)).toBe(85);
    expect(applyDiscount(99.99, 0.1)).toBe(89.99);
  });

  it('非法折扣率抛出 RangeError', () => {
    expect(() => applyDiscount(100, 1.2)).toThrow(RangeError);
  });
});
`,"src/app/price.ts":`export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

// 纯函数：输入确定，输出确定，没有隐藏依赖，最容易测试
export function subtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function applyDiscount(amount: number, rate: number): number {
  if (rate < 0 || rate > 1) {
    throw new RangeError('折扣率必须在 0 到 1 之间');
  }
  return Math.round(amount * (1 - rate) * 100) / 100;
}
`,"src/app/user.service.spec.ts":`import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { User, UserService } from './user.service';

const URL = 'https://jsonplaceholder.typicode.com/users';

describe('UserService（HttpTestingController）', () => {
  let service: UserService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(UserService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('只返回前三位用户，不发真实请求', () => {
    let result: User[] | undefined;
    service.list().subscribe((users) => (result = users));

    const req = http.expectOne(URL);
    expect(req.request.method).toBe('GET');
    req.flush([
      { id: 1, name: 'A', email: 'a@example.com' },
      { id: 2, name: 'B', email: 'b@example.com' },
      { id: 3, name: 'C', email: 'c@example.com' },
      { id: 4, name: 'D', email: 'd@example.com' },
    ]);

    expect(result?.length).toBe(3);
  });

  it('网络错误会进入错误通知', () => {
    let error: unknown;
    service.list().subscribe({ error: (value) => (error = value) });

    const req = http.expectOne(URL);
    req.error(new ProgressEvent('error'));

    expect(error).toBeTruthy();
  });
});
`,"src/app/user.service.ts":`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, timeout } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http = inject(HttpClient);

  list(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      // 真实请求必须有超时，测试里用 HttpTestingController 直接替身
      timeout(8000),
      map((users) => users.slice(0, 3)),
    );
  }
}
`,"src/index.html":`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>可测试的计价模块</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`,"src/main.ts":`import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
`,"src/styles.css":`:root {
  --ng-red: #dd0031;
  --ng-pink: #ff4d6d;
  --ink: #1f2328;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg: #f6f7fb;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
`,"tsconfig.app.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
`,"tsconfig.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
`,"tsconfig.spec.json":`/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
`}}},Ha={sandboxId:"s6y9dy",hash:"ed2c57687302e68a"},Da={sandboxId:"558zcs",hash:"604757ae95854e79"},za={architecture:Ha,"build-lab":{sandboxId:"68crwh",hash:"4e1f8d45ff497b15"},"di-service":{sandboxId:"88x8nv",hash:"4c97b52760f5883a"},"hello-binding":{sandboxId:"xy7c8h",hash:"99702f2b1b189d31"},"http-rxjs":{sandboxId:"k73h29",hash:"b6ceee6be3d2992f"},"i18n-a11y":{sandboxId:"3clsqs",hash:"07a4fb65dc4cc7ef"},internals:Da,"perf-lab":{sandboxId:"stxgrz",hash:"5ee232ff557989d8"},"routing-form":{sandboxId:"kjkr7r",hash:"c9af35df6dc70d38"},"signals-lab":{sandboxId:"l98dzy",hash:"8d903057538c5eee"},"template-syntax":{sandboxId:"t4glx5",hash:"b77117e2381d7b47"},"testing-lab":{sandboxId:"6xfryy",hash:"dcb59f6c2b8e38aa"},"forms-advanced":{sandboxId:"4zfw2z",hash:"62569dadb3505c35"}},Na=["data-example"],Ua={class:"ng-playground__bar"},Ga={class:"ng-playground__meta"},qa={key:0},Wa={class:"ng-playground__actions"},Ya={key:0,class:"ng-playground__placeholder"},Ka={key:0},Ja={key:1},Qa=["src","title"],Xa={key:2,class:"ng-playground__placeholder"},Za={class:"error"},ns=h({__name:"Playground",props:{id:{},height:{default:560},openFile:{}},setup(n){const e=n,t=Fa,r=za,o=x(()=>t[e.id]),s=x(()=>{var A;return((A=o.value)==null?void 0:A.playground)===!1}),l=x(()=>{var A;return(A=r[e.id])==null?void 0:A.sandboxId}),d=x(()=>{var A;return e.openFile??((A=o.value)==null?void 0:A.entry)??"src/app/app.ts"}),m=x(()=>{if(s.value)return 220;const A=Number(e.height);return Number.isFinite(A)&&A>240?A:560}),k=L(),T=L(!1),b=L(!1),C=L("");let j=null;const P=x(()=>{if(!l.value)return"";const A=new URLSearchParams({file:d.value,view:"split",hidenavigation:"1",theme:"dark"});return`https://codesandbox.io/embed/${l.value}?${A.toString()}`}),R=x(()=>{if(!l.value)return"";const A=new URLSearchParams({file:d.value});return`https://codesandbox.io/s/${l.value}?${A.toString()}`});async function M(){if(!T.value){if(!o.value){b.value=!0,C.value=`未找到示例 ${e.id}，请先运行 pnpm sync:examples`;return}if(!s.value){if(!l.value){b.value=!0,C.value="该示例还没有对应的在线沙箱。请在仓库根目录运行 pnpm sync:sandboxes 生成后重新构建。";return}b.value=!1,C.value="",await bn(),T.value=!0}}}function O(){R.value&&window.open(R.value,"_blank","noopener")}async function V(){const A=o.value;if(!A)return;const E=Object.entries(A.files).map(([G,Q])=>`// 文件：${G}
${Q}`).join(`

`);await navigator.clipboard.writeText(E)}return z(()=>{if(!o.value){b.value=!0,C.value=`未找到示例 ${e.id}，请先运行 pnpm sync:examples`;return}if(!s.value){if(!l.value){b.value=!0,C.value="该示例还没有对应的在线沙箱。请在仓库根目录运行 pnpm sync:sandboxes 生成后重新构建。";return}if(!("IntersectionObserver"in window)){M();return}j=new IntersectionObserver(A=>{A.some(E=>E.isIntersecting)&&(j==null||j.disconnect(),j=null,M())},{rootMargin:"600px 0px"}),k.value&&j.observe(k.value)}}),En(()=>{j==null||j.disconnect(),j=null}),(A,E)=>{var G,Q,Tn,jn;return a(),c("section",{class:"ng-playground","data-example":n.id},[u("div",Ua,[u("div",Ga,[E[0]||(E[0]=u("span",{class:"ng-playground__dot","aria-hidden":"true"},null,-1)),u("div",null,[u("strong",null,S(((G=o.value)==null?void 0:G.title)??n.id),1),(Q=o.value)!=null&&Q.description?(a(),c("p",qa,S(o.value.description),1)):f("",!0)])]),u("div",Wa,[u("button",{type:"button",onClick:V},"复制代码"),s.value?f("",!0):(a(),c("button",{key:0,type:"button",class:"primary",onClick:O}," 在新窗口打开沙箱 "))])]),u("div",{ref_key:"host",ref:k,class:"ng-playground__host",style:hn({height:`${m.value}px`})},[s.value?(a(),c("div",Ya,[E[4]||(E[4]=u("p",null,[u("strong",null,"该示例需要本地运行，不在浏览器沙箱内。")],-1)),(Tn=o.value)!=null&&Tn.preview?(a(),c("p",Ka,[E[1]||(E[1]=F(" 在仓库根目录执行 ",-1)),u("code",null,S(o.value.preview.command),1),E[2]||(E[2]=F("， 然后访问 ",-1)),u("code",null,S(o.value.preview.url),1),E[3]||(E[3]=F("。 ",-1))])):(a(),c("p",Ja,"请参考对应章节的运行说明。"))])):T.value&&!b.value?(a(),c("iframe",{key:1,class:"ng-playground__frame",src:P.value,title:((jn=o.value)==null?void 0:jn.title)??n.id,allow:"clipboard-read; clipboard-write; fullscreen"},null,8,Qa)):(a(),c("div",Xa,[b.value?(a(),c($,{key:0},[E[5]||(E[5]=u("p",null,"该示例暂时无法内嵌运行。",-1)),u("p",Za,S(C.value),1),R.value?(a(),c("button",{key:0,type:"button",class:"primary",onClick:O}," 在新窗口打开沙箱 ")):f("",!0)],64)):(a(),c($,{key:1},[E[6]||(E[6]=u("p",null,"示例会在滚动到此处时加载，首次启动需要等待依赖安装。",-1)),u("button",{type:"button",class:"primary",onClick:M},"立即加载")],64))]))],4)],8,Na)}}}),es=w(ns,[["__scopeId","data-v-2874ce90"]]),ts=h({__name:"Mermaid",props:{graph:{},id:{},class:{}},setup(n){const e=n,t=L();let r,o=0;async function s(){const l=++o,{default:d}=await $n(async()=>{const{default:k}=await import("./mermaid.core.vHxY8aNs.js").then(T=>T.be);return{default:k}},__vite__mapDeps([2,1]));if(l!==o||!t.value)return;d.initialize({startOnLoad:!1,securityLevel:"loose",theme:document.documentElement.classList.contains("dark")?"dark":"default"});const{svg:m}=await d.render(`${e.id}-${l}`,decodeURIComponent(e.graph));t.value&&l===o&&(t.value.innerHTML=m)}return z(async()=>{r=new MutationObserver(l=>{l.some(d=>d.attributeName==="class")&&s()}),r.observe(document.documentElement,{attributes:!0}),await s()}),en(()=>r==null?void 0:r.disconnect()),(l,d)=>(a(),c("div",{ref_key:"host",ref:t,class:I(["mermaid-host",e.class])},null,2))}}),os=".VPSidebarItem.is-active",rs=".VPDocAsideOutline";function as(n){const e=getComputedStyle(n).overflowY;return(e==="auto"||e==="scroll"||e==="overlay")&&n.scrollHeight-n.clientHeight>1}function Dn(n){let e=(n==null?void 0:n.parentElement)??null;for(;e;){if(as(e))return e;e=e.parentElement}return null}function zn(n,e,t){const r=n.getBoundingClientRect(),o=e.getBoundingClientRect(),s=r.top+n.clientTop,l=s+n.clientHeight;let d=0;o.top<s+t?d=o.top-s-t:o.bottom>l-t&&(d=o.bottom-l+t),d!==0&&(n.scrollTop+=d)}function ss(){const n=document.querySelector(os);if(!n)return;const e=Dn(n);e&&zn(e,n,12)}function Nn(){const n=document.querySelector(rs);if(!n||n.getBoundingClientRect().height===0)return;const e=n.querySelector(".outline-link.active");if(!e)return;const t=Dn(e);t&&zn(t,e,8)}function is(){window.scrollTo(0,0),document.querySelectorAll("#VPSidebarNav, .VPDocAsideOutline, .VPDoc .aside-container").forEach(n=>{n.scrollTop=0})}function Ln(){requestAnimationFrame(()=>{requestAnimationFrame(()=>{ss(),Nn()})})}function ls(n){if(!K)return;let e=!1;window.addEventListener("popstate",()=>{e=!0},{passive:!0});const t=n.onAfterRouteChange;n.onAfterRouteChange=async o=>{await(t==null?void 0:t(o));const s=o.includes("#"),l=e;e=!1,!s&&!l&&is(),Ln()};let r=!1;window.addEventListener("scroll",()=>{r||(r=!0,requestAnimationFrame(()=>{r=!1,Nn()}))},{passive:!0}),Ln()}function cs(){if(typeof window>"u"||!document.body)return;const n=document.createElement("div");n.style.cssText="position:absolute;top:-9999px;left:-9999px;width:100px;height:100px;overflow:scroll;visibility:hidden;pointer-events:none",document.body.appendChild(n);const e=n.offsetWidth-n.clientWidth>0;n.remove(),document.documentElement.classList.toggle("classic-scrollbars",e)}cs();const us={extends:Oa,enhanceApp({app:n,router:e}){n.component("Playground",es),n.component("Mermaid",ts),ls(e)}};export{us as R,vr as c,_ as u};

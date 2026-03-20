const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DNYz0DpC.js","./DsnmJJEf.js","./qdrOppoQ.js","./BRL-An01.js","./BzuKMfWL.js","./PPVm8Dsz.js","./Cpj98o6Y.js","./CS1iRX9v.js","./D0iwhpLH.js","./BaQAdUY2.js","./DD8QeZgg.js","./Cy-1ktEm.js"])))=>i.map(i=>d[i]);
import"./DsnmJJEf.js";import{q as Wr,t as Af,bJ as wf,v as Rf,bK as ec,I as Nd,y as Od,x as Fd,z as La,a0 as Cf,L as Da,R as tc,S as nc,bL as Bd,b5 as zd,bM as kd,bN as Hd,av as Vd,bD as Gd,ab as Wd,E as Xd,bO as qd,bP as Yd,e as jd,k as Ws,bQ as $d,bR as Kd,bS as Zd,aZ as Jd,aJ as zn,ak as Pf,p as cs,j as Gn,aI as qe,f as Ir,a7 as pr,b as Ot,a as us,b0 as xt,c as zt,s as Fn,r as Dt,a9 as Fo,a8 as Bo,g as de,aa as Sr,a6 as oi,u as kn,aA as Lf,bF as Df,aN as Qd,bT as ep,aR as Xs,aF as tp,aH as np,aG as ip}from"./BRL-An01.js";import{B as Uf,d as rp,s as Js,a as ma}from"./BzuKMfWL.js";import{b as zo,a as sp,h as ap}from"./CCM15zyz.js";import{b as Qs,s as op}from"./Be1jPpTy.js";import{p as mr,b as ei,s as hl,i as If,a as dl}from"./Cvc6p45_.js";import{e as Nf,i as Of}from"./BYAFX8LQ.js";import{P as ko,B as lp}from"./6dllJcUx.js";import{s as cp,o as up,a as fp,g as ic}from"./CS1iRX9v.js";import{g as _a}from"./Cpj98o6Y.js";import"./CAFn5JMJ.js";import{P as hp}from"./BClvnzpD.js";import{s as dp}from"./DD8QeZgg.js";import{_ as Ff}from"./PPVm8Dsz.js";import{c as pp}from"./CvxDqm5-.js";import{o as mp}from"./qdrOppoQ.js";const rc=0,Ua=1;function _p(r,e,t,n,i){Wr&&Af();var s=wf(),o=Gd,a=s?tc(o):nc(o,!1,!1),l=s?tc(o):nc(o,!1,!1),u=new Uf(r);Rf(()=>{var c=e(),f=!1;let d=Wr&&ec(c)===(r.data===Nd);if(d&&(Od(Fd()),La(!1)),ec(c)){var p=Bd(),g=!1;const _=m=>{if(!f){g=!0,p(!1),zd.ensure(),Wr&&La(!1);try{m()}finally{kd(!1),Hd||Vd()}}};c.then(m=>{_(()=>{Da(a,m),u.ensure(Ua,n&&(h=>n(h,a)))})},m=>{_(()=>{if(Da(l,m),u.ensure(Ua,i&&(h=>i(h,l))),!i)throw l.v})}),Wr?u.ensure(rc,t):Cf(()=>{g||_(()=>{u.ensure(rc,t)})})}else Da(a,c),u.ensure(Ua,n&&(_=>n(_,a)));return d&&La(!0),()=>{f=!0}})}const gp=Symbol("NaN");function vp(r,e,t){Wr&&Af();var n=new Uf(r),i=!wf();Rf(()=>{var s=e();s!==s&&(s=gp),i&&s!==null&&typeof s=="object"&&(s={}),n.ensure(s,t)})}const xp=()=>performance.now(),Hn={tick:r=>requestAnimationFrame(r),now:()=>xp(),tasks:new Set};function Bf(){const r=Hn.now();Hn.tasks.forEach(e=>{e.c(r)||(Hn.tasks.delete(e),e.f())}),Hn.tasks.size!==0&&Hn.tick(Bf)}function yp(r){let e;return Hn.tasks.size===0&&Hn.tick(Bf),{promise:new Promise(t=>{Hn.tasks.add(e={c:r,f:t})}),abort(){Hn.tasks.delete(e)}}}function ea(r,e){Pf(()=>{r.dispatchEvent(new CustomEvent(e))})}function Sp(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const e=r.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function sc(r){const e={},t=r.split(";");for(const n of t){const[i,s]=n.split(":");if(!i||s===void 0)break;const o=Sp(i.trim());e[o]=s.trim()}return e}const Mp=r=>r;function ac(r,e,t,n){var i=(r&Kd)!==0,s=(r&Zd)!==0,o=i&&s,a=(r&$d)!==0,l=o?"both":i?"in":"out",u,c=e.inert,f=e.style.overflow,d,p;function g(){return Pf(()=>u??=t()(e,n?.()??{},{direction:l}))}var _={is_global:a,in(){if(e.inert=c,!i){p?.abort(),p?.reset?.();return}s||d?.abort(),d=Ho(e,g(),p,1,()=>{ea(e,"introend"),d?.abort(),d=u=void 0,e.style.overflow=f})},out(x){if(!s){x?.(),u=void 0;return}e.inert=!0,p=Ho(e,g(),d,0,()=>{ea(e,"outroend"),x?.()})},stop:()=>{d?.abort(),p?.abort()}},m=Wd;if((m.nodes.t??=[]).push(_),i&&rp){var h=a;if(!h){for(var v=m.parent;v&&(v.f&Xd)!==0;)for(;(v=v.parent)&&(v.f&qd)===0;);h=!v||(v.f&Yd)!==0}h&&jd(()=>{Ws(()=>_.in())})}}function Ho(r,e,t,n,i){var s=n===1;if(Jd(e)){var o,a=!1;return Cf(()=>{if(!a){var m=e({direction:s?"in":"out"});o=Ho(r,m,t,n,i)}}),{abort:()=>{a=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(t?.deactivate(),!e?.duration&&!e?.delay)return ea(r,s?"introstart":"outrostart"),i(),{abort:zn,deactivate:zn,reset:zn,t:()=>n};const{delay:l=0,css:u,tick:c,easing:f=Mp}=e;var d=[];if(s&&t===void 0&&(c&&c(0,1),u)){var p=sc(u(0,1));d.push(p,p)}var g=()=>1-n,_=r.animate(d,{duration:l,fill:"forwards"});return _.onfinish=()=>{_.cancel(),ea(r,s?"introstart":"outrostart");var m=t?.t()??1-n;t?.abort();var h=n-m,v=e.duration*Math.abs(h),x=[];if(v>0){var S=!1;if(u)for(var M=Math.ceil(v/16.666666666666668),b=0;b<=M;b+=1){var E=m+h*f(b/M),P=sc(u(E,1-E));x.push(P),S||=P.overflow==="hidden"}S&&(r.style.overflow="hidden"),g=()=>{var y=_.currentTime;return m+h*f(y/v)},c&&yp(()=>{if(_.playState!=="running")return!1;var y=g();return c(y,1-y),!0})}_=r.animate(x,{duration:v,fill:"forwards"}),_.onfinish=()=>{g=()=>n,c?.(n,1-n),i()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=zn)},deactivate:()=>{i=zn},reset:()=>{n===0&&c?.(1,0)},t:()=>g()}}function On(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function zf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var en={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Mr={duration:.5,overwrite:!1,delay:0},pl,Et,nt,un=1e8,Ze=1/un,Vo=Math.PI*2,Ep=Vo/4,Tp=0,kf=Math.sqrt,bp=Math.cos,Ap=Math.sin,yt=function(e){return typeof e=="string"},lt=function(e){return typeof e=="function"},Wn=function(e){return typeof e=="number"},ml=function(e){return typeof e>"u"},wn=function(e){return typeof e=="object"},Ht=function(e){return e!==!1},_l=function(){return typeof window<"u"},gs=function(e){return lt(e)||yt(e)},Hf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rt=Array.isArray,wp=/random\([^)]+\)/g,Rp=/,\s*/g,oc=/(?:-?\.?\d|\.)+/gi,Vf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,fr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ia=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gf=/[+-]=-?[.\d]+/,Cp=/[^,'"\[\]\s]+/gi,Pp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,rt,xn,Go,gl,nn={},ta={},Wf,Xf=function(e){return(ta=Er(e,nn))&&qt},vl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Jr=function(e,t){return!t&&console.warn(e)},qf=function(e,t){return e&&(nn[e]=t)&&ta&&(ta[e]=t)||nn},Qr=function(){return 0},Lp={suppressEvents:!0,isStart:!0,kill:!1},qs={suppressEvents:!0,kill:!1},Dp={suppressEvents:!0},xl={},li=[],Wo={},Yf,Kt={},Na={},lc=30,Ys=[],yl="",Sl=function(e){var t=e[0],n,i;if(wn(t)||lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ys.length;i--&&!Ys[i].targetTest(t););n=Ys[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new gh(e[i],n)))||e.splice(i,1);return e},Di=function(e){return e._gsap||Sl(fn(e))[0]._gsap},jf=function(e,t,n){return(n=e[t])&&lt(n)?e[t]():ml(n)&&e.getAttribute&&e.getAttribute(t)||n},Vt=function(e,t){return(e=e.split(",")).forEach(t)||e},ut=function(e){return Math.round(e*1e5)/1e5||0},it=function(e){return Math.round(e*1e7)/1e7||0},_r=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Up=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},na=function(){var e=li.length,t=li.slice(0),n,i;for(Wo={},li.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ml=function(e){return!!(e._initted||e._startAt||e.add)},$f=function(e,t,n,i){li.length&&!Et&&na(),e.render(t,n,!!(Et&&t<0&&Ml(e))),li.length&&!Et&&na()},Kf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Cp).length<2?t:yt(e)?e.trim():e},Zf=function(e){return e},rn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ip=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Er=function(e,t){for(var n in t)e[n]=t[n];return e},cc=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=wn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ia=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},jr=function(e){var t=e.parent||rt,n=e.keyframes?Ip(Rt(e.keyframes)):rn;if(Ht(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Np=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Jf=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ga=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},di=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ui=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Op=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Xo=function(e,t,n,i){return e._startAt&&(Et?e._startAt.revert(qs):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Fp=function r(e){return!e||e._ts&&r(e.parent)},uc=function(e){return e._repeat?Tr(e._tTime,e=e.duration()+e._rDelay)*e:0},Tr=function(e,t){var n=Math.floor(e=it(e/t));return e&&n===e?n-1:n},ra=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},va=function(e){return e._end=it(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ze)||0))},xa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=it(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),va(e),n._dirty||Ui(n,e)),e},Qf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ra(e.rawTime(),t),(!t._dur||fs(0,t.totalDuration(),n)-t._tTime>Ze)&&t.render(n,!0)),Ui(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ze}},Sn=function(e,t,n,i){return t.parent&&di(t),t._start=it((Wn(n)?n:n||e!==rt?on(e,n,t):e._time)+t._delay),t._end=it(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Jf(e,t,"_first","_last",e._sort?"_start":0),qo(t)||(e._recent=t),i||Qf(e,t),e._ts<0&&xa(e,e._tTime),e},eh=function(e,t){return(nn.ScrollTrigger||vl("scrollTrigger",t))&&nn.ScrollTrigger.create(t,e)},th=function(e,t,n,i,s){if(Tl(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Et&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Yf!==Zt.frame)return li.push(e),e._lazy=[s,i],1},Bp=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},qo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},zp=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Bp(e)&&!(!e._initted&&qo(e))||(e._ts<0||e._dp._ts<0)&&!qo(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=fs(0,e._tDur,t),c=Tr(l,a),e._yoyo&&c&1&&(o=1-o),c!==Tr(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Et||i||e._zTime===Ze||!t&&e._zTime){if(!e._initted&&th(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Ze:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Xo(e,t,n,!0),e._onUpdate&&!n&&Jt(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Jt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&di(e,1),!n&&!Et&&(Jt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kp=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},br=function(e,t,n,i){var s=e._repeat,o=it(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:it(o*(s+1)+e._rDelay*s):o,a>0&&!i&&xa(e,e._tTime=e._tDur*a),e.parent&&va(e),n||Ui(e.parent,e),e},fc=function(e){return e instanceof Nt?Ui(e):br(e,e._dur)},Hp={_start:0,endTime:Qr,totalDuration:Qr},on=function r(e,t,n){var i=e.labels,s=e._recent||Hp,o=e.duration()>=un?s.endTime(!1):e._dur,a,l,u;return yt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&n&&(l=l/100*(Rt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},$r=function(e,t,n){var i=Wn(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ht(l.vars.inherit)&&l.parent;o.immediateRender=Ht(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new mt(t[0],o,t[s+1])},vi=function(e,t){return e||e===0?t(e):t},fs=function(e,t,n){return n<e?e:n>t?t:n},wt=function(e,t){return!yt(e)||!(t=Pp.exec(e))?"":t[1]},Vp=function(e,t,n){return vi(n,function(i){return fs(e,t,i)})},Yo=[].slice,nh=function(e,t){return e&&wn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wn(e[0]))&&!e.nodeType&&e!==xn},Gp=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return yt(i)&&!t||nh(i,1)?(s=n).push.apply(s,fn(i)):n.push(i)})||n},fn=function(e,t,n){return nt&&!t&&nt.selector?nt.selector(e):yt(e)&&!n&&(Go||!Ar())?Yo.call((t||gl).querySelectorAll(e),0):Rt(e)?Gp(e,n):nh(e)?Yo.call(e,0):e?[e]:[]},jo=function(e){return e=fn(e)[0]||Jr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return fn(t,n.querySelectorAll?n:n===e?Jr("Invalid scope")||gl.createElement("div"):e)}},ih=function(e){return e.sort(function(){return .5-Math.random()})},rh=function(e){if(lt(e))return e;var t=wn(e)?e:{each:e},n=Ii(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,u=t.axis,c=i,f=i;return yt(i)?c=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(c=i[0],f=i[1]),function(d,p,g){var _=(g||t).length,m=o[_],h,v,x,S,M,b,E,P,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,un])[1],!y){for(E=-un;E<(E=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],h=l?Math.min(y,_)*c-.5:i%y,v=y===un?0:l?_*f/y-.5:i/y|0,E=0,P=un,b=0;b<_;b++)x=b%y-h,S=v-(b/y|0),m[b]=M=u?Math.abs(u==="y"?S:x):kf(x*x+S*S),M>E&&(E=M),M<P&&(P=M);i==="random"&&ih(m),m.max=E-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:u?u==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=wt(t.amount||t.each)||0,n=n&&_<0?ph(n):n}return _=(m[d]-m.min)/m.max||0,it(m.b+(n?n(_):_)*m.v)+m.u}},$o=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=it(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Wn(n)?0:wt(n))}},sh=function(e,t){var n=Rt(e),i,s;return!n&&wn(e)&&(i=n=e.radius||un,e.values?(e=fn(e.values),(s=!Wn(e[0]))&&(i*=i)):e=$o(e.increment)),vi(t,n?lt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=un,c=0,f=e.length,d,p;f--;)s?(d=e[f].x-a,p=e[f].y-l,d=d*d+p*p):d=Math.abs(e[f]-a),d<u&&(u=d,c=f);return c=!i||u<=i?e[c]:o,s||c===o||Wn(o)?c:c+wt(o)}:$o(e))},ah=function(e,t,n,i){return vi(Rt(e)?!t:n===!0?!!(n=0):!i,function(){return Rt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Wp=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Xp=function(e,t){return function(n){return e(parseFloat(n))+(t||wt(n))}},qp=function(e,t,n){return lh(e,t,0,1,n)},oh=function(e,t,n){return vi(n,function(i){return e[~~t(i)]})},Yp=function r(e,t,n){var i=t-e;return Rt(e)?oh(e,r(0,e.length),t):vi(n,function(s){return(i+(s-e)%i)%i+e})},jp=function r(e,t,n){var i=t-e,s=i*2;return Rt(e)?oh(e,r(0,e.length-1),t):vi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},es=function(e){return e.replace(wp,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Rp);return ah(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},lh=function(e,t,n,i,s){var o=t-e,a=i-n;return vi(s,function(l){return n+((l-e)/o*a||0)})},$p=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=yt(e),a={},l,u,c,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Rt(e)&&!Rt(t)){for(c=[],f=e.length,d=f-2,u=1;u<f;u++)c.push(r(e[u-1],e[u]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return c[_](g-_)},n=t}else i||(e=Er(Rt(e)?[]:{},e));if(!c){for(l in t)El.call(a,e,l,"get",t[l]);s=function(g){return wl(g,a)||(o?e.p:e)}}}return vi(n,s)},hc=function(e,t,n){var i=e.labels,s=un,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Jt=function(e,t,n){var i=e.vars,s=i[t],o=nt,a=e._ctx,l,u,c;if(s)return l=i[t+"Params"],u=i.callbackScope||e,n&&li.length&&na(),a&&(nt=a),c=l?s.apply(u,l):s.call(u),nt=o,c},Xr=function(e){return di(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Et),e.progress()<1&&Jt(e,"onInterrupt"),e},hr,ch=[],uh=function(e){if(e)if(e=!e.name&&e.default||e,_l()||e.headless){var t=e.name,n=lt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Qr,render:wl,add:El,kill:fm,modifier:um,rawVars:0},o={targetTest:0,get:0,getSetter:Al,aliases:{},register:0};if(Ar(),e!==i){if(Kt[t])return;rn(i,rn(ia(e,s),o)),Er(i.prototype,Er(s,ia(e,o))),Kt[i.prop=t]=i,e.targetTest&&(Ys.push(i),xl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qf(t,i),e.register&&e.register(qt,i,Gt)}else ch.push(e)},Ke=255,qr={aqua:[0,Ke,Ke],lime:[0,Ke,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ke],navy:[0,0,128],white:[Ke,Ke,Ke],olive:[128,128,0],yellow:[Ke,Ke,0],orange:[Ke,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ke,0,0],pink:[Ke,192,203],cyan:[0,Ke,Ke],transparent:[Ke,Ke,Ke,0]},Oa=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ke+.5|0},fh=function(e,t,n){var i=e?Wn(e)?[e>>16,e>>8&Ke,e&Ke]:0:qr.black,s,o,a,l,u,c,f,d,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),qr[e])i=qr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ke,i&Ke,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ke,e&Ke]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(oc),!t)l=+i[0]%360/360,u=+i[1]/100,c=+i[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,i.length>3&&(i[3]*=1),i[0]=Oa(l+1/3,s,o),i[1]=Oa(l,s,o),i[2]=Oa(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Vf),n&&i.length<4&&(i[3]=1),i}else i=e.match(oc)||qr.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Ke,o=i[1]/Ke,a=i[2]/Ke,f=Math.max(s,o,a),d=Math.min(s,o,a),c=(f+d)/2,f===d?l=u=0:(p=f-d,u=c>.5?p/(2-f-d):p/(f+d),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},hh=function(e){var t=[],n=[],i=-1;return e.split(ci).forEach(function(s){var o=s.match(fr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},dc=function(e,t,n){var i="",s=(e+i).match(ci),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(d){return(d=fh(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(c=hh(e),l=n.c,l.join(i)!==c.c.join(i)))for(u=e.replace(ci,"1").split(fr),f=u.length-1;a<f;a++)i+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:n).shift());if(!u)for(u=e.split(ci),f=u.length-1;a<f;a++)i+=u[a]+s[a];return i+u[f]},ci=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in qr)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Kp=/hsl[a]?\(/,dh=function(e){var t=e.join(" "),n;if(ci.lastIndex=0,ci.test(t))return n=Kp.test(t),e[1]=dc(e[1],n),e[0]=dc(e[0],n,hh(e[1])),!0},ts,Zt=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,u,c,f,d,p,g=function _(m){var h=r()-i,v=m===!0,x,S,M,b;if((h>e||h<0)&&(n+=h-t),i+=h,M=i-n,x=M-o,(x>0||v)&&(b=++f.frame,d=M-f.time*1e3,f.time=M=M/1e3,o+=x+(x>=s?4:s-x),S=1),v||(l=u(_)),S)for(p=0;p<a.length;p++)a[p](M,d,b,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Wf&&(!Go&&_l()&&(xn=Go=window,gl=xn.document||{},nn.gsap=qt,(xn.gsapVersions||(xn.gsapVersions=[])).push(qt.version),Xf(ta||xn.GreenSockGlobals||!xn.gsap&&xn||{}),ch.forEach(uh)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},ts=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),ts=0,u=Qr},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,h,v){var x=h?function(S,M,b,E){m(S,M,b,E),f.remove(x)}:m;return f.remove(m),a[v?"unshift":"push"](x),Ar(),x},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},f})(),Ar=function(){return!ts&&Zt.wake()},We={},Zp=/^[\d.\-M][\d.\-,\s]/,Jp=/["']/g,Qp=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,u;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[i]=isNaN(u)?u.replace(Jp,"").trim():+u,i=l.substr(a+1).trim();return t},em=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},tm=function(e){var t=(e+"").split("("),n=We[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Qp(t[1])]:em(e).split(",").map(Kf)):We._CE&&Zp.test(e)?We._CE("",e):n},ph=function(e){return function(t){return 1-e(1-t)}},mh=function r(e,t){for(var n=e._first,i;n;)n instanceof Nt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ii=function(e,t){return e&&(lt(e)?e:We[e]||tm(e))||t},Hi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Vt(e,function(a){We[a]=nn[a]=s,We[o=a.toLowerCase()]=n;for(var l in s)We[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=We[a+"."+l]=s[l]}),s},_h=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fa=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Vo*(Math.asin(1/i)||0),a=function(c){return c===1?1:i*Math.pow(2,-10*c)*Ap((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:_h(a);return s=Vo/s,l.config=function(u,c){return r(e,u,c)},l},Ba=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:_h(n);return i.config=function(s){return r(e,s)},i};Vt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Hi(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});We.Linear.easeNone=We.none=We.Linear.easeIn;Hi("Elastic",Fa("in"),Fa("out"),Fa());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Hi("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Hi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Hi("Circ",function(r){return-(kf(1-r*r)-1)});Hi("Sine",function(r){return r===1?1:-bp(r*Ep)+1});Hi("Back",Ba("in"),Ba("out"),Ba());We.SteppedEase=We.steps=nn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Ze;return function(a){return((i*fs(0,o,a)|0)+s)*n}}};Mr.ease=We["quad.out"];Vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return yl+=r+","+r+"Params,"});var gh=function(e,t){this.id=Tp++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:jf,this.set=t?t.getSetter:Al},ns=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,br(this,+t.duration,1,1),this.data=t.data,nt&&(this._ctx=nt,nt.data.push(this)),ts||Zt.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,br(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ar(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(xa(this,n),!s._dp||s.parent||Qf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Sn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ze||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$f(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+uc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+uc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Tr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ze?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ra(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ze?0:this._rts,this.totalTime(fs(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),va(this),Op(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ar(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ze&&(this._tTime-=Ze)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=it(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Sn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ht(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ra(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Dp);var i=Et;return Et=n,Ml(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Et=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,fc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,fc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(on(this,n),Ht(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ht(i)),this._dur||(this._zTime=-Ze),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ze:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ze,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ze)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=lt(n)?n:Zf,l=function(){var c=i.then;i.then=null,s&&s(),lt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),o(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Xr(this)},r})();rn(ns.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ze,_prom:0,_ps:!1,_rts:1});var Nt=(function(r){zf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ht(n.sortChildren),rt&&Sn(n.parent||rt,On(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&eh(On(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return $r(0,arguments,this),this},t.from=function(i,s,o){return $r(1,arguments,this),this},t.fromTo=function(i,s,o,a){return $r(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,jr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new mt(i,s,on(this,o),1),this},t.call=function(i,s,o){return Sn(this,mt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new mt(i,o,on(this,l)),this},t.staggerFrom=function(i,s,o,a,l,u,c){return o.runBackwards=1,jr(o).immediateRender=Ht(o.immediateRender),this.staggerTo(i,s,o,a,l,u,c)},t.staggerFromTo=function(i,s,o,a,l,u,c,f){return a.startAt=o,jr(a).immediateRender=Ht(a.immediateRender),this.staggerTo(i,s,a,l,u,c,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=i<=0?0:it(i),f=this._zTime<0!=i<0&&(this._initted||!u),d,p,g,_,m,h,v,x,S,M,b,E;if(this!==rt&&c>l&&i>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,i+=this._time-a),d=c,S=this._start,x=this._ts,h=!x,f&&(u||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=it(c%m),c===l?(_=this._repeat,d=u):(M=it(c/m),_=~~M,_&&_===M&&(d=u,_--),d>u&&(d=u)),M=Tr(this._tTime,m),!a&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),b&&_&1&&(d=u-d,E=1),_!==M&&!this._lock){var P=b&&M&1,y=P===(b&&_&1);if(_<M&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(E?0:it(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Jt(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,M=_),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,y&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;mh(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=kp(this,it(a),it(d)),v&&(c-=d-(d=v._start))),this._tTime=c,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&c&&u&&!s&&!M&&(Jt(this,"onStart"),this._tTime!==c))return this;if(d>=a&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!h){v=0,g&&(c+=this._zTime=-Ze);break}}p=g}else{p=this._last;for(var A=i<0?i:d;p;){if(g=p._prev,(p._act||A<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(A-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(A-p._start)*p._ts,s,o||Et&&Ml(p)),d!==this._time||!this._ts&&!h){v=0,g&&(c+=this._zTime=A?-Ze:Ze);break}}p=g}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-Ze)._zTime=d>=a?1:-1,this._ts))return this._start=S,va(this),this.render(i,s,o);this._onUpdate&&!s&&Jt(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&di(this,1),!s&&!(i<0&&!a)&&(c||a||!l)&&(Jt(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Wn(s)||(s=on(this,s,i)),!(i instanceof ns)){if(Rt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(yt(i))return this.addLabel(i,s);if(lt(i))i=mt.delayedCall(0,i);else return this}return this!==i?Sn(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-un);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof mt?s&&l.push(u):(o&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return yt(i)?this.removeLabel(i):lt(i)?this.killTweensOf(i):(i.parent===this&&ga(this,i),i===this._recent&&(this._recent=this._last),Ui(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=it(Zt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=on(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=mt.delayedCall(0,s||Qr,o);return a.data="isPause",this._hasPause=1,Sn(this,a,on(this,i))},t.removePause=function(i){var s=this._first;for(i=on(this,i);s;)s._start===i&&s.data==="isPause"&&di(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ti!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=fn(i),l=this._first,u=Wn(s),c;l;)l instanceof mt?Up(l._targets,a)&&(u?(!ti||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=on(o,i),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,d=l.immediateRender,p,g=mt.to(o,rn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Ze,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&br(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,rn({startAt:{time:on(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),hc(this,on(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),hc(this,on(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ze)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(i=it(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=i);return Ui(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ui(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=un,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Sn(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=it(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;br(o,o===rt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(rt._ts&&($f(rt,ra(i,rt)),Yf=Zt.frame),Zt.frame>=lc){lc+=en.autoSleep||120;var s=rt._first;if((!s||!s._ts)&&en.autoSleep&&Zt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zt.sleep()}}},e})(ns);rn(Nt.prototype,{_lock:0,_hasPause:0,_forcing:0});var nm=function(e,t,n,i,s,o,a){var l=new Gt(this._pt,e,t,0,1,Eh,null,s),u=0,c=0,f,d,p,g,_,m,h,v;for(l.b=n,l.e=i,n+="",i+="",(h=~i.indexOf("random("))&&(i=es(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),d=n.match(Ia)||[];f=Ia.exec(i);)g=f[0],_=i.substring(u,f.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==d[c++]&&(m=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?_r(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=Ia.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=a,(Gf.test(i)||h)&&(l.e=0),this._pt=l,l},El=function(e,t,n,i,s,o,a,l,u,c){lt(i)&&(i=i(s||0,e,o));var f=e[t],d=n!=="get"?n:lt(f)?u?e[t.indexOf("set")||!lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=lt(f)?u?om:Sh:bl,g;if(yt(i)&&(~i.indexOf("random(")&&(i=es(i)),i.charAt(1)==="="&&(g=_r(d,i)+(wt(d)||0),(g||g===0)&&(i=g))),!c||d!==i||Ko)return!isNaN(d*i)&&i!==""?(g=new Gt(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?cm:Mh,0,p),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&vl(t,i),nm.call(this,e,t,d,i,p,l||en.stringFilter,u))},im=function(e,t,n,i,s){if(lt(e)&&(e=Kr(e,s,t,n,i)),!wn(e)||e.style&&e.nodeType||Rt(e)||Hf(e))return yt(e)?Kr(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Kr(e[a],s,t,n,i);return o},vh=function(e,t,n,i,s,o){var a,l,u,c;if(Kt[e]&&(a=new Kt[e]).init(s,a.rawVars?t[e]:im(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Gt(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==hr))for(u=n._ptLookup[n._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ti,Ko,Tl=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,u=i.onUpdate,c=i.runBackwards,f=i.yoyoEase,d=i.keyframes,p=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!pl,S=e.timeline,M,b,E,P,y,A,z,X,G,I,O,R,N;if(S&&(!d||!s)&&(s="none"),e._ease=Ii(s,Mr.ease),e._yEase=f?ph(Ii(f===!0?s:f,Mr.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(X=m[0]?Di(m[0]).harness:0,R=X&&i[X.prop],M=ia(i,xl),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&g?qs:Lp),_._lazy=0),o){if(di(e._startAt=mt.set(m,rn({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!_&&Ht(l),startAt:null,delay:0,onUpdate:u&&function(){return Jt(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Et||!a&&!p)&&e._startAt.revert(qs),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),E=rn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Ht(l),immediateRender:a,stagger:0,parent:h},M),R&&(E[X.prop]=R),di(e._startAt=mt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Et?e._startAt.revert(qs):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Ze,Ze);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Ht(l)||l&&!g,b=0;b<m.length;b++){if(y=m[b],z=y._gsap||Sl(m)[b]._gsap,e._ptLookup[b]=I={},Wo[z.id]&&li.length&&na(),O=v===m?b:v.indexOf(y),X&&(G=new X).init(y,R||M,e,O,v)!==!1&&(e._pt=P=new Gt(e._pt,y,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(q){I[q]=P}),G.priority&&(A=1)),!X||R)for(E in M)Kt[E]&&(G=vh(E,M,e,O,y,v))?G.priority&&(A=1):I[E]=P=El.call(e,y,E,"get",M[E],O,v,0,i.stringFilter);e._op&&e._op[b]&&e.kill(y,e._op[b]),x&&e._pt&&(ti=e,rt.killTweensOf(y,I,e.globalTime(t)),N=!e.parent,ti=0),e._pt&&l&&(Wo[z.id]=1)}A&&Th(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!N,d&&t<=0&&S.render(un,!0,!0)},rm=function(e,t,n,i,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,d,p;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(c=d[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Ko=1,e.vars[t]="+=0",Tl(e,a),Ko=0,l?Jr(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,f.e&&(f.e=ut(n)+wt(f.e)),f.b&&(f.b=c.s+wt(f.b))},sm=function(e,t){var n=e[0]?Di(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Er({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},am=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Rt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Kr=function(e,t,n,i,s){return lt(e)?e.call(t,n,i,s):yt(e)&&~e.indexOf("random(")?es(e):e},xh=yl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",yh={};Vt(xh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return yh[r]=1});var mt=(function(r){zf(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:jr(i))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,h=l.yoyoEase,v=i.parent||rt,x=(Rt(n)||Hf(n)?Wn(n[0]):"length"in i)?[n]:fn(n),S,M,b,E,P,y,A,z;if(a._targets=x.length?Sl(x):Jr("GSAP target "+n+" not found. https://gsap.com",!en.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||d||gs(u)||gs(c)){if(i=a.vars,S=a.timeline=new Nt({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),S.kill(),S.parent=S._dp=On(a),S._start=0,d||gs(u)||gs(c)){if(E=x.length,A=d&&rh(d),wn(d))for(P in d)~xh.indexOf(P)&&(z||(z={}),z[P]=d[P]);for(M=0;M<E;M++)b=ia(i,yh),b.stagger=0,h&&(b.yoyoEase=h),z&&Er(b,z),y=x[M],b.duration=+Kr(u,On(a),M,y,x),b.delay=(+Kr(c,On(a),M,y,x)||0)-a._delay,!d&&E===1&&b.delay&&(a._delay=c=b.delay,a._start+=c,b.delay=0),S.to(y,b,A?A(M,y,x):0),S._ease=We.none;S.duration()?u=c=0:a.timeline=0}else if(g){jr(rn(S.vars.defaults,{ease:"none"})),S._ease=Ii(g.ease||i.ease||"none");var X=0,G,I,O;if(Rt(g))g.forEach(function(R){return S.to(x,R,">")}),S.duration();else{b={};for(P in g)P==="ease"||P==="easeEach"||am(P,g[P],b,g.easeEach);for(P in b)for(G=b[P].sort(function(R,N){return R.t-N.t}),X=0,M=0;M<G.length;M++)I=G[M],O={ease:I.e,duration:(I.t-(M?G[M-1].t:0))/100*u},O[P]=I.v,S.to(x,O,X),X+=O.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||a.duration(u=S.duration())}else a.timeline=0;return p===!0&&!pl&&(ti=On(a),rt.killTweensOf(x),ti=0),Sn(v,On(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!u&&!g&&a._start===it(v._time)&&Ht(f)&&Fp(On(a))&&v.data!=="nested")&&(a._tTime=-Ze,a.render(Math.max(0,-c)||0)),m&&eh(On(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,u=this._dur,c=i<0,f=i>l-Ze&&!c?l:i<Ze?0:i,d,p,g,_,m,h,v,x,S;if(!u)zp(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=f,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+i,s,o);if(d=it(f%_),f===l?(g=this._repeat,d=u):(m=it(f/_),g=~~m,g&&g===m?(d=u,g--):d>u&&(d=u)),h=this._yoyo&&g&1,h&&(S=this._yEase,d=u-d),m=Tr(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(x&&this._yEase&&mh(x,h),this.vars.repeatRefresh&&!h&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(it(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(th(this,c?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(S||this._ease)(d/u),this._from&&(this.ratio=v=1-v),!a&&f&&!s&&!m&&(Jt(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(c&&Xo(this,i,s,o),Jt(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Jt(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Xo(this,i,!0,!0),(i||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&di(this,1),!s&&!(c&&!a)&&(f||a||h)&&(Jt(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){ts||Zt.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Tl(this,u),c=this._ease(u/this._dur),rm(this,i,s,o,a,c,u,l)?this.resetTo(i,s,o,a,1):(xa(this,0),this.parent||Jf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Xr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Et),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ti&&ti.vars.overwrite!==!0)._first||Xr(this),this.parent&&o!==this.timeline.totalDuration()&&br(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?fn(i):a,u=this._ptLookup,c=this._pt,f,d,p,g,_,m,h;if((!s||s==="all")&&Np(a,l))return s==="all"&&(this._pt=0),Xr(this);for(f=this._op=this._op||[],s!=="all"&&(yt(s)&&(_={},Vt(s,function(v){return _[v]=1}),s=_),s=sm(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){d=u[h],s==="all"?(f[h]=s,g=d,p={}):(p=f[h]=f[h]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ga(this,m,"_pt"),delete d[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&Xr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return $r(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return $r(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return rt.killTweensOf(i,s,o)},e})(ns);rn(mt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vt("staggerTo,staggerFrom,staggerFromTo",function(r){mt[r]=function(){var e=new Nt,t=Yo.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var bl=function(e,t,n){return e[t]=n},Sh=function(e,t,n){return e[t](n)},om=function(e,t,n,i){return e[t](i.fp,n)},lm=function(e,t,n){return e.setAttribute(t,n)},Al=function(e,t){return lt(e[t])?Sh:ml(e[t])&&e.setAttribute?lm:bl},Mh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},cm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Eh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},wl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},um=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},fm=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ga(this,t,"_pt"):t.dep||(n=1),t=i;return!n},hm=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Th=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Gt=(function(){function r(t,n,i,s,o,a,l,u,c){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Mh,this.d=l||this,this.set=u||bl,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=hm,this.m=n,this.mt=s,this.tween=i},r})();Vt(yl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return xl[r]=1});nn.TweenMax=nn.TweenLite=mt;nn.TimelineLite=nn.TimelineMax=Nt;rt=new Nt({sortChildren:!1,defaults:Mr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});en.stringFilter=dh;var Ni=[],js={},dm=[],pc=0,pm=0,za=function(e){return(js[e]||dm).map(function(t){return t()})},Zo=function(){var e=Date.now(),t=[];e-pc>2&&(za("matchMediaInit"),Ni.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,u;for(a in i)o=xn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(n.revert(),l&&t.push(n))}),za("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),pc=e,za("matchMedia"))},bh=(function(){function r(t,n){this.selector=n&&jo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=pm++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){lt(n)&&(s=i,i=n,n=lt);var o=this,a=function(){var u=nt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=jo(s)),nt=o,f=i.apply(o,arguments),lt(f)&&o._r.push(f),nt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,n===lt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=nt;nt=null,n(this),nt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof mt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),l=s.data.length;l--;)u=s.data[l],u instanceof Nt?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof mt)&&u.revert&&u.revert(n);s._r.forEach(function(c){return c(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ni.length;o--;)Ni[o].id===this.id&&Ni.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),mm=(function(){function r(t){this.contexts=[],this.scope=t,nt&&nt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){wn(n)||(n={matches:n});var o=new bh(0,s||this.scope),a=o.conditions={},l,u,c;nt&&!o.selector&&(o.selector=nt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(u in n)u==="all"?c=1:(l=xn.matchMedia(n[u]),l&&(Ni.indexOf(o)<0&&Ni.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Zo):l.addEventListener("change",Zo)));return c&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),sa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return uh(i)})},timeline:function(e){return new Nt(e)},getTweensOf:function(e,t){return rt.getTweensOf(e,t)},getProperty:function(e,t,n,i){yt(e)&&(e=fn(e)[0]);var s=Di(e||{}).get,o=n?Zf:Kf;return n==="native"&&(n=""),e&&(t?o((Kt[t]&&Kt[t].get||s)(e,t,n,i)):function(a,l,u){return o((Kt[a]&&Kt[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,n){if(e=fn(e),e.length>1){var i=e.map(function(c){return qt.quickSetter(c,t,n)}),s=i.length;return function(c){for(var f=s;f--;)i[f](c)}}e=e[0]||{};var o=Kt[t],a=Di(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;hr._pt=0,f.init(e,n?c+n:c,hr,0,[e]),f.render(1,f),hr._pt&&wl(1,hr)}:a.set(e,l);return o?u:function(c){return u(e,l,n?c+n:c,a,1)}},quickTo:function(e,t,n){var i,s=qt.to(e,rn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ii(e.ease,Mr.ease)),cc(Mr,e||{})},config:function(e){return cc(en,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Kt[a]&&!nn[a]&&Jr(t+" effect requires "+a+" plugin.")}),Na[t]=function(a,l,u){return n(fn(a),rn(l||{},s),u)},o&&(Nt.prototype[t]=function(a,l,u){return this.add(Na[t](a,wn(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){We[e]=Ii(t)},parseEase:function(e,t){return arguments.length?Ii(e,t):We},getById:function(e){return rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nt(e),i,s;for(n.smoothChildTiming=Ht(e.smoothChildTiming),rt.remove(n),n._dp=0,n._time=n._tTime=rt._time,i=rt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof mt&&i.vars.onComplete===i._targets[0]))&&Sn(n,i,i._start-i._delay),i=s;return Sn(rt,n,0),n},context:function(e,t){return e?new bh(e,t):nt},matchMedia:function(e){return new mm(e)},matchMediaRefresh:function(){return Ni.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Zo()},addEventListener:function(e,t){var n=js[e]||(js[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=js[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Yp,wrapYoyo:jp,distribute:rh,random:ah,snap:sh,normalize:qp,getUnit:wt,clamp:Vp,splitColor:fh,toArray:fn,selector:jo,mapRange:lh,pipe:Wp,unitize:Xp,interpolate:$p,shuffle:ih},install:Xf,effects:Na,ticker:Zt,updateRoot:Nt.updateRoot,plugins:Kt,globalTimeline:rt,core:{PropTween:Gt,globals:qf,Tween:mt,Timeline:Nt,Animation:ns,getCache:Di,_removeLinkedListItem:ga,reverting:function(){return Et},context:function(e){return e&&nt&&(nt.data.push(e),e._ctx=nt),nt},suppressOverwrites:function(e){return pl=e}}};Vt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return sa[r]=mt[r]});Zt.add(Nt.updateRoot);hr=sa.to({},{duration:0});var _m=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},gm=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=_m(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},ka=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,u;if(yt(s)&&(l={},Vt(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}gm(a,s)}}}},qt=sa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Et?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ka("roundProps",$o),ka("modifiers"),ka("snap",sh))||sa;mt.version=Nt.version=qt.version="3.14.2";Wf=1;_l()&&Ar();We.Power0;We.Power1;We.Power2;We.Power3;We.Power4;We.Linear;We.Quad;We.Cubic;We.Quart;We.Quint;We.Strong;var mc=We.Elastic;We.Back;We.SteppedEase;We.Bounce;We.Sine;We.Expo;We.Circ;var _c,ni,gr,Rl,Li,gc,Cl,vm=function(){return typeof window<"u"},Xn={},Ri=180/Math.PI,vr=Math.PI/180,Wi=Math.atan2,vc=1e8,Pl=/([A-Z])/g,xm=/(left|right|width|margin|padding|x)/i,ym=/[\s,\(]\S/,En={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Sm=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Mm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Em=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Tm=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ah=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},wh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},bm=function(e,t,n){return e.style[t]=n},Am=function(e,t,n){return e.style.setProperty(t,n)},wm=function(e,t,n){return e._gsap[t]=n},Rm=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Cm=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Pm=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},st="transform",Wt=st+"Origin",Lm=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Xn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=En[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Bn(i,a)}):this.tfm[e]=o.x?o[e]:Bn(i,e),e===Wt&&(this.tfm.zOrigin=o.zOrigin);else return En.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(st)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Wt,t,"")),e=st}(s||t)&&this.props.push(e,t,s[e])},Rh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Dm=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Pl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Cl(),(!s||!s.isStart)&&!n[st]&&(Rh(n),i.zOrigin&&n[Wt]&&(n[Wt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ch=function(e,t){var n={target:e,props:[],revert:Dm,save:Lm};return e._gsap||qt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Ph,Qo=function(e,t){var n=ni.createElementNS?ni.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ni.createElement(e);return n&&n.style?n:ni.createElement(e)},Qt=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Pl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,wr(t)||t,1)||""},xc="O,Moz,ms,Ms,Webkit".split(","),wr=function(e,t,n){var i=t||Li,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(xc[o]+e in s););return o<0?null:(o===3?"ms":o>=0?xc[o]:"")+e},el=function(){vm()&&window.document&&(_c=window,ni=_c.document,gr=ni.documentElement,Li=Qo("div")||{style:{}},Qo("div"),st=wr(st),Wt=st+"Origin",Li.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ph=!!wr("perspective"),Cl=qt.core.reverting,Rl=1)},yc=function(e){var t=e.ownerSVGElement,n=Qo("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),gr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),gr.removeChild(n),s},Sc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Lh=function(e){var t,n;try{t=e.getBBox()}catch{t=yc(e),n=1}return t&&(t.width||t.height)||n||(t=yc(e)),t&&!t.width&&!t.x&&!t.y?{x:+Sc(e,["x","cx","x1"])||0,y:+Sc(e,["y","cy","y1"])||0,width:0,height:0}:t},Dh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Lh(e))},pi=function(e,t){if(t){var n=e.style,i;t in Xn&&t!==Wt&&(t=st),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Pl,"-$1").toLowerCase())):n.removeAttribute(t)}},ii=function(e,t,n,i,s,o){var a=new Gt(e._pt,t,n,0,1,o?wh:Ah);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Mc={deg:1,rad:1,turn:1},Um={grid:1,flex:1},mi=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Li.style,l=xm.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",p=i==="%",g,_,m,h;if(i===o||!s||Mc[i]||Mc[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),h=e.getCTM&&Dh(e),(p||o==="%")&&(Xn[t]||~t.indexOf("adius")))return g=h?e.getBBox()[l?"width":"height"]:e[c],ut(p?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ni||!_.appendChild)&&(_=ni.body),m=_._gsap,m&&p&&m.width&&l&&m.time===Zt.time&&!m.uncache)return ut(s/m.width*f);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+i,g=e[c],v?e.style[t]=v:pi(e,t)}else(p||o==="%")&&!Um[Qt(_,"display")]&&(a.position=Qt(e,"position")),_===e&&(a.position="static"),_.appendChild(Li),g=Li[c],_.removeChild(Li),a.position="absolute";return l&&p&&(m=Di(_),m.time=Zt.time,m.width=_[c]),ut(d?g*s/f:g&&s?f/g*s:0)},Bn=function(e,t,n,i){var s;return Rl||el(),t in En&&t!=="transform"&&(t=En[t],~t.indexOf(",")&&(t=t.split(",")[0])),Xn[t]&&t!=="transform"?(s=rs(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:oa(Qt(e,Wt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=aa[t]&&aa[t](e,t,n)||Qt(e,t)||jf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?mi(e,t,s,n)+n:s},Im=function(e,t,n,i){if(!n||n==="none"){var s=wr(t,e,1),o=s&&Qt(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Qt(e,"borderTopColor"))}var a=new Gt(this._pt,e.style,t,0,1,Eh),l=0,u=0,c,f,d,p,g,_,m,h,v,x,S,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Qt(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Qt(e,t)||i,_?e.style[t]=_:pi(e,t)),c=[n,i],dh(c),n=c[0],i=c[1],d=n.match(fr)||[],M=i.match(fr)||[],M.length){for(;f=fr.exec(i);)m=f[0],v=i.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=d[u++]||"")&&(p=parseFloat(_)||0,S=_.substr((p+"").length),m.charAt(1)==="="&&(m=_r(p,m)+S),h=parseFloat(m),x=m.substr((h+"").length),l=fr.lastIndex-x.length,x||(x=x||en.units[t]||S,l===i.length&&(i+=x,a.e+=x)),S!==x&&(p=mi(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:h-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?wh:Ah;return Gf.test(i)&&(a.e=0),this._pt=a,a},Ec={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Nm=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ec[n]||n,t[1]=Ec[i]||i,t.join(" ")},Om=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,u;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Xn[a]&&(l=1,a=a==="transformOrigin"?Wt:st),pi(n,a);l&&(pi(n,st),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",rs(n,1),o.uncache=1,Rh(i)))}},aa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Gt(e._pt,t,n,0,0,Om);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},is=[1,0,0,1,0,0],Uh={},Ih=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Tc=function(e){var t=Qt(e,st);return Ih(t)?is:t.substr(7).match(Vf).map(ut)},Ll=function(e,t){var n=e._gsap||Di(e),i=e.style,s=Tc(e),o,a,l,u;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?is:s):(s===is&&!e.offsetParent&&e!==gr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,gr.appendChild(e)),s=Tc(e),l?i.display=l:pi(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):gr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},tl=function(e,t,n,i,s,o){var a=e._gsap,l=s||Ll(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],h=l[4],v=l[5],x=t.split(" "),S=parseFloat(x[0])||0,M=parseFloat(x[1])||0,b,E,P,y;n?l!==is&&(E=p*m-g*_)&&(P=S*(m/E)+M*(-_/E)+(_*v-m*h)/E,y=S*(-g/E)+M*(p/E)-(p*v-g*h)/E,S=P,M=y):(b=Lh(e),S=b.x+(~x[0].indexOf("%")?S/100*b.width:S),M=b.y+(~(x[1]||x[0]).indexOf("%")?M/100*b.height:M)),i||i!==!1&&a.smooth?(h=S-u,v=M-c,a.xOffset=f+(h*p+v*_)-h,a.yOffset=d+(h*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Wt]="0px 0px",o&&(ii(o,a,"xOrigin",u,S),ii(o,a,"yOrigin",c,M),ii(o,a,"xOffset",f,a.xOffset),ii(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},rs=function(e,t){var n=e._gsap||new gh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Qt(e,Wt)||"0",c,f,d,p,g,_,m,h,v,x,S,M,b,E,P,y,A,z,X,G,I,O,R,N,q,k,j,D,B,ee,J,Q;return c=f=d=_=m=h=v=x=S=0,p=g=1,n.svg=!!(e.getCTM&&Dh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[st]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[st]!=="none"?l[st]:"")),i.scale=i.rotate=i.translate="none"),E=Ll(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),u=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",N=""):N=!t&&e.getAttribute("data-svg-origin"),tl(e,N||u,!!N||n.originIsAbsolute,n.smooth!==!1,E)),M=n.xOrigin||0,b=n.yOrigin||0,E!==is&&(z=E[0],X=E[1],G=E[2],I=E[3],c=O=E[4],f=R=E[5],E.length===6?(p=Math.sqrt(z*z+X*X),g=Math.sqrt(I*I+G*G),_=z||X?Wi(X,z)*Ri:0,v=G||I?Wi(G,I)*Ri+_:0,v&&(g*=Math.abs(Math.cos(v*vr))),n.svg&&(c-=M-(M*z+b*G),f-=b-(M*X+b*I))):(Q=E[6],ee=E[7],j=E[8],D=E[9],B=E[10],J=E[11],c=E[12],f=E[13],d=E[14],P=Wi(Q,B),m=P*Ri,P&&(y=Math.cos(-P),A=Math.sin(-P),N=O*y+j*A,q=R*y+D*A,k=Q*y+B*A,j=O*-A+j*y,D=R*-A+D*y,B=Q*-A+B*y,J=ee*-A+J*y,O=N,R=q,Q=k),P=Wi(-G,B),h=P*Ri,P&&(y=Math.cos(-P),A=Math.sin(-P),N=z*y-j*A,q=X*y-D*A,k=G*y-B*A,J=I*A+J*y,z=N,X=q,G=k),P=Wi(X,z),_=P*Ri,P&&(y=Math.cos(P),A=Math.sin(P),N=z*y+X*A,q=O*y+R*A,X=X*y-z*A,R=R*y-O*A,z=N,O=q),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,h=180-h),p=ut(Math.sqrt(z*z+X*X+G*G)),g=ut(Math.sqrt(R*R+Q*Q)),P=Wi(O,R),v=Math.abs(P)>2e-4?P*Ri:0,S=J?1/(J<0?-J:J):0),n.svg&&(N=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ih(Qt(e,st)),N&&e.setAttribute("transform",N))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=c-((n.xPercent=c&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=ut(p),n.scaleY=ut(g),n.rotation=ut(_)+a,n.rotationX=ut(m)+a,n.rotationY=ut(h)+a,n.skewX=v+a,n.skewY=x+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(u.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Wt]=oa(u)),n.xOffset=n.yOffset=0,n.force3D=en.force3D,n.renderTransform=n.svg?Bm:Ph?Nh:Fm,n.uncache=0,n},oa=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ha=function(e,t,n){var i=wt(t);return ut(parseFloat(t)+parseFloat(mi(e,"x",n+"px",i)))+i},Fm=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Nh(e,t)},Mi="0deg",Fr="0px",Ei=") ",Nh=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,u=n.rotation,c=n.rotationY,f=n.rotationX,d=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,h=n.force3D,v=n.target,x=n.zOrigin,S="",M=h==="auto"&&e&&e!==1||h===!0;if(x&&(f!==Mi||c!==Mi)){var b=parseFloat(c)*vr,E=Math.sin(b),P=Math.cos(b),y;b=parseFloat(f)*vr,y=Math.cos(b),o=Ha(v,o,E*y*-x),a=Ha(v,a,-Math.sin(b)*-x),l=Ha(v,l,P*y*-x+x)}m!==Fr&&(S+="perspective("+m+Ei),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(M||o!==Fr||a!==Fr||l!==Fr)&&(S+=l!==Fr||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ei),u!==Mi&&(S+="rotate("+u+Ei),c!==Mi&&(S+="rotateY("+c+Ei),f!==Mi&&(S+="rotateX("+f+Ei),(d!==Mi||p!==Mi)&&(S+="skew("+d+", "+p+Ei),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Ei),v.style[st]=S||"translate(0, 0)"},Bm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,u=n.skewX,c=n.skewY,f=n.scaleX,d=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,h=n.yOffset,v=n.forceCSS,x=parseFloat(o),S=parseFloat(a),M,b,E,P,y;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=vr,u*=vr,M=Math.cos(l)*f,b=Math.sin(l)*f,E=Math.sin(l-u)*-d,P=Math.cos(l-u)*d,u&&(c*=vr,y=Math.tan(u-c),y=Math.sqrt(1+y*y),E*=y,P*=y,c&&(y=Math.tan(c),y=Math.sqrt(1+y*y),M*=y,b*=y)),M=ut(M),b=ut(b),E=ut(E),P=ut(P)):(M=f,P=d,b=E=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=mi(p,"x",o,"px"),S=mi(p,"y",a,"px")),(g||_||m||h)&&(x=ut(x+g-(g*M+_*E)+m),S=ut(S+_-(g*b+_*P)+h)),(i||s)&&(y=p.getBBox(),x=ut(x+i/100*y.width),S=ut(S+s/100*y.height)),y="matrix("+M+","+b+","+E+","+P+","+x+","+S+")",p.setAttribute("transform",y),v&&(p.style[st]=y)},zm=function(e,t,n,i,s){var o=360,a=yt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ri:1),u=l-i,c=i+u+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*vc)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*vc)%o-~~(u/o)*o)),e._pt=d=new Gt(e._pt,t,n,i,u,Sm),d.e=c,d.u="deg",e._props.push(n),d},bc=function(e,t){for(var n in t)e[n]=t[n];return e},km=function(e,t,n){var i=bc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,u,c,f,d,p,g;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),o[st]=t,a=rs(n,1),pi(n,st),n.setAttribute("transform",u)):(u=getComputedStyle(n)[st],o[st]=t,a=rs(n,1),o[st]=u);for(l in Xn)u=i[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=wt(u),g=wt(c),f=p!==g?mi(n,l,u,g):parseFloat(u),d=parseFloat(c),e._pt=new Gt(e._pt,a,l,f,d-f,Jo),e._pt.u=g||0,e._props.push(l));bc(a,i)};Vt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});aa[e>1?"border"+r:r]=function(a,l,u,c,f){var d,p;if(arguments.length<4)return d=o.map(function(g){return Bn(a,g,u)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(c+"").split(" "),p={},o.forEach(function(g,_){return p[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,p,f)}});var Oh={name:"css",register:el,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,u,c,f,d,p,g,_,m,h,v,x,S,M,b,E,P,y;Rl||el(),this.styles=this.styles||Ch(e),P=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Kt[_]&&vh(_,t,n,i,e,s)))){if(p=typeof c,g=aa[_],p==="function"&&(c=c.call(n,i,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=es(c)),g)g(this,e,_,c,n)&&(E=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",ci.lastIndex=0,ci.test(u)||(m=wt(u),h=wt(c),h?m!==h&&(u=mi(e,_,u,h)+h):m&&(c+=m)),this.add(a,"setProperty",u,c,i,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],yt(u)&&~u.indexOf("random(")&&(u=es(u)),wt(u+"")||u==="auto"||(u+=en.units[_]||wt(Bn(e,_))||""),(u+"").charAt(1)==="="&&(u=Bn(e,_))):u=Bn(e,_),d=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),_ in En&&(_==="autoAlpha"&&(d===1&&Bn(e,"visibility")==="hidden"&&f&&(d=0),P.push("visibility",0,a.visibility),ii(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=En[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Xn,x){if(this.styles.save(_),y=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Qt(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=c,c=Qt(e,"perspective"),A?e.style.perspective=A:pi(e,"perspective")}f=parseFloat(c)}if(S||(M=e._gsap,M.renderTransform&&!t.parseTransform||rs(e,t.parseTransform),b=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new Gt(this._pt,a,st,0,1,M.renderTransform,M,0,-1),S.dep=1),_==="scale")this._pt=new Gt(this._pt,M,"scaleY",M.scaleY,(v?_r(M.scaleY,v+f):f)-M.scaleY||0,Jo),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Wt,0,a[Wt]),c=Nm(c),M.svg?tl(e,c,0,b,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==M.zOrigin&&ii(this,M,"zOrigin",M.zOrigin,h),ii(this,a,_,oa(u),oa(c)));continue}else if(_==="svgOrigin"){tl(e,c,1,b,0,this);continue}else if(_ in Uh){zm(this,M,_,d,v?_r(d,v+c):c);continue}else if(_==="smoothOrigin"){ii(this,M,"smooth",M.smooth,c);continue}else if(_==="force3D"){M[_]=c;continue}else if(_==="transform"){km(this,c,e);continue}}else _ in a||(_=wr(_)||_);if(x||(f||f===0)&&(d||d===0)&&!ym.test(c)&&_ in a)m=(u+"").substr((d+"").length),f||(f=0),h=wt(c)||(_ in en.units?en.units[_]:m),m!==h&&(d=mi(e,_,u,h)),this._pt=new Gt(this._pt,x?M:a,_,d,(v?_r(d,v+f):f)-d,!x&&(h==="px"||_==="zIndex")&&t.autoRound!==!1?Tm:Jo),this._pt.u=h||0,x&&y!==c?(this._pt.b=u,this._pt.e=y,this._pt.r=Em):m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=Mm);else if(_ in a)Im.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,i,s);else if(_!=="parseTransform"){vl(_,c);continue}x||(_ in a?P.push(_,0,a[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,u||e[_])),o.push(_)}}E&&Th(this)},render:function(e,t){if(t.tween._time||!Cl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Bn,aliases:En,getSetter:function(e,t,n){var i=En[t];return i&&i.indexOf(",")<0&&(t=i),t in Xn&&t!==Wt&&(e._gsap.x||Bn(e,"x"))?n&&gc===n?t==="scale"?Rm:wm:(gc=n||{})&&(t==="scale"?Cm:Pm):e.style&&!ml(e.style[t])?bm:~t.indexOf("-")?Am:Al(e,t)},core:{_removeProperty:pi,_getMatrix:Ll}};qt.utils.checkPrefix=wr;qt.core.getStyleSaver=Ch;(function(r,e,t,n){var i=Vt(r+","+e+","+t,function(s){Xn[s]=1});Vt(e,function(s){en.units[s]="deg",Uh[s]=1}),En[i[13]]=r+","+e,Vt(n,function(s){var o=s.split(":");En[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){en.units[r]="px"});qt.registerPlugin(Oh);var ri=qt.registerPlugin(Oh)||qt;ri.core.Tween;const Hm=()=>{const r=cp;return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},updated:r.updated}},Dl={subscribe(r){return Hm().page.subscribe(r)}},Rr=[{link:"/about",label:"About"},{link:"/portfolio",label:"Portfolio"},{link:"/team",label:"Team"},{link:"/content",label:"Content"},{link:"https://talent.cyber.fund/jobs",label:"Talent"},{link:"/contact",label:"Contact"}],Vm=768,Gm=1280;var Wm=Ir('<nav><div class="logo-container navigation-unit svelte-uoct51"><a href="/" class="nav-item logo svelte-uoct51"><svg xmlns="http://www.w3.org/2000/svg" width="92" height="17" fill="none"><path fill="#fff" d="m6.908 9.146 1.802 1.166c-.836 1.685-2.203 2.527-4.099 2.527-1.32 0-2.42-.424-3.304-1.272C.436 10.707 0 9.588 0 8.21c0-1.366.448-2.48 1.343-3.339.895-.86 1.984-1.29 3.268-1.29.978 0 1.814.212 2.509.636a3.52 3.52 0 0 1 1.501 1.75l-1.82 1.2c-.459-1-1.195-1.501-2.208-1.501-.67 0-1.23.236-1.678.707-.436.459-.654 1.071-.654 1.837 0 .777.218 1.396.654 1.855.436.46.995.69 1.678.69.566 0 1.025-.13 1.378-.39.366-.27.678-.677.937-1.219ZM10.01 16.125l.353-2.067c.259.141.524.212.795.212.46 0 .789-.277.99-.83l.282-.778L8.826 3.83h2.526l2.262 5.688 2.155-5.688h2.526l-4.17 10.352c-.305.766-.694 1.314-1.165 1.644-.46.33-1.037.494-1.732.494a3.53 3.53 0 0 1-1.219-.194ZM18.965 12.591V.225h2.226v4.681c.695-.883 1.655-1.325 2.88-1.325 1.2 0 2.196.418 2.985 1.255.801.836 1.202 1.96 1.202 3.374 0 1.413-.407 2.538-1.22 3.374-.8.837-1.801 1.255-3.003 1.255-1.225 0-2.173-.442-2.844-1.325v1.077h-2.226Zm2.773-2.544c.472.471 1.066.707 1.785.707.718 0 1.307-.236 1.767-.707.47-.482.706-1.095.706-1.837s-.235-1.349-.706-1.82c-.46-.483-1.049-.724-1.767-.724-.719 0-1.313.241-1.785.724-.459.471-.689 1.078-.689 1.82s.23 1.354.69 1.837ZM37.851 8.74h-6.749c.071.671.324 1.207.76 1.608.436.388.984.583 1.643.583 1.084 0 1.89-.536 2.42-1.608l1.661.954c-.824 1.708-2.196 2.562-4.116 2.562-1.249 0-2.315-.43-3.198-1.29-.871-.871-1.307-1.984-1.307-3.339 0-1.354.441-2.462 1.325-3.321.895-.872 1.99-1.308 3.286-1.308 1.248 0 2.273.413 3.074 1.237.8.824 1.201 1.873 1.201 3.145v.777Zm-4.346-3.463c-.577 0-1.078.171-1.502.513a2.758 2.758 0 0 0-.9 1.325h4.699c-.106-.577-.36-1.025-.76-1.343-.4-.33-.913-.495-1.537-.495ZM44.515 3.687l-.353 2.103a1.987 1.987 0 0 0-.725-.124c-.66 0-1.177.241-1.554.724s-.566 1.107-.566 1.873v4.328h-2.226V3.83h2.226v1.395c.542-1.095 1.355-1.643 2.438-1.643.271 0 .524.036.76.106ZM47.081 9.235a2.044 2.044 0 0 1-.618-1.502c0-.589.206-1.09.618-1.502a2.044 2.044 0 0 1 1.502-.618c.589 0 1.09.206 1.502.618.412.413.618.913.618 1.502s-.206 1.09-.618 1.502a2.044 2.044 0 0 1-1.502.618c-.589 0-1.09-.206-1.502-.618ZM53.672 12.591V.225h8.745v2.084h-6.413v3.198h5.883v2.085h-5.883v5h-2.332ZM63.49 9.27V3.829h2.226v4.929c0 1.33.594 1.996 1.784 1.996.624 0 1.119-.218 1.484-.654.365-.447.548-1.03.548-1.749V3.83h2.226v8.762h-2.226v-1.378c-.578 1.084-1.508 1.626-2.792 1.626-.954 0-1.737-.312-2.35-.937-.6-.624-.9-1.501-.9-2.632ZM81.631 6.62v5.971h-2.226V7.54c0-1.249-.595-1.873-1.784-1.873-.601 0-1.09.23-1.467.689-.377.448-.565 1.042-.565 1.784v4.452h-2.226V3.83h2.226v1.413c.718-1.107 1.708-1.66 2.968-1.66.942 0 1.69.276 2.244.83.553.553.83 1.29.83 2.208ZM92 .225V12.59h-2.226v-1.236c-.26.447-.624.806-1.095 1.077-.472.271-1.025.407-1.661.407-1.237 0-2.267-.418-3.092-1.255-.812-.836-1.219-1.96-1.219-3.374 0-1.39.43-2.509 1.29-3.357.871-.848 1.879-1.272 3.02-1.272 1.308 0 2.227.442 2.757 1.325V.225H92Zm-6.325 9.822c.471.471 1.06.707 1.767.707.707 0 1.296-.236 1.767-.707.47-.482.706-1.095.706-1.837s-.235-1.349-.706-1.82c-.472-.483-1.06-.724-1.767-.724-.707 0-1.296.241-1.767.724-.47.471-.706 1.078-.706 1.82s.235 1.354.706 1.837Z"></path></svg></a></div> <div class="main-links-container svelte-uoct51"><div class="main-links-align navigation-unit svelte-uoct51"></div></div> <div class="contact-container navigation-unit svelte-uoct51"><!></div></nav>');function Xm(r,e){cs(e,!0);const t=()=>dl(Dl,"$page",n),[n,i]=hl();let s=mr(e,"expanded",3,!1),o=mr(e,"collapsedWidth",3,0),a=mr(e,"showPillButtonBackgrounds",3,!1);const l="elastic.out(1,1)",u=.7;let c,f,d=xt(0),p=Rr.find(E=>E.link==="/contact"),g=xt(!1);Gn(()=>{qe(g,!0)});function _(E=0){if(c)if(s())ri.to(c,{duration:E,x:0,ease:l}),ri.to(f,{duration:E,x:0,ease:l});else{const P=de(d)/2-o()/2;ri.to(c,{duration:E,x:P,ease:l}),ri.to(f,{duration:E,x:-P,ease:l})}}Gn(()=>{o(),_()}),Gn(()=>{s(),_(u)});var m=Wm();let h;var v=zt(m);ei(v,E=>c=E,()=>c);var x=Fn(v,2),S=zt(x);Nf(S,21,()=>Rr,Of,(E,P)=>{var y=Sr(),A=oi(y);{var z=X=>{{let G=kn(()=>t().url.pathname.indexOf(de(P).link)>-1);ko(X,{get active(){return de(G)},get link(){return de(P).link},children:(I,O)=>{Fo();var R=Bo();pr(()=>Js(R,de(P).label)),Ot(I,R)},$$slots:{default:!0}})}};If(A,X=>{de(P).link!="/contact"&&X(z)})}Ot(E,y)}),Dt(S),Dt(x);var M=Fn(x,2),b=zt(M);ko(b,{get link(){return p.link},children:(E,P)=>{Fo();var y=Bo();pr(()=>Js(y,p.label)),Ot(E,y)},$$slots:{default:!0}}),Dt(M),ei(M,E=>f=E,()=>f),Dt(m),pr(()=>h=Qs(m,1,"navigation svelte-uoct51",null,h,{in:de(g),expanded:s(),showPillButtonBackgrounds:a()})),zo("innerWidth",E=>qe(d,E,!0)),Ot(r,m),us(),i()}const Ul="157",Xi={ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qm=0,Ac=1,Ym=2,Fh=1,jm=2,Nn=3,_i=0,Ft=1,Mn=2,ui=0,xr=1,wc=2,Rc=3,Cc=4,$m=5,ur=100,Km=101,Zm=102,Pc=103,Lc=104,Jm=200,Qm=201,e_=202,t_=203,Bh=204,zh=205,n_=206,i_=207,r_=208,s_=209,a_=210,o_=0,l_=1,c_=2,nl=3,u_=4,f_=5,h_=6,d_=7,kh=0,p_=1,m_=2,fi=0,__=1,g_=2,v_=3,x_=4,y_=5,Hh=300,Cr=301,Pr=302,il=303,rl=304,ya=306,sl=1e3,_n=1001,al=1002,Ut=1003,Dc=1004,Va=1005,kt=1006,S_=1007,ss=1008,hi=1009,M_=1010,E_=1011,Il=1012,Vh=1013,si=1014,ai=1015,as=1016,Gh=1017,Wh=1018,Oi=1020,T_=1021,gn=1023,b_=1024,A_=1025,Fi=1026,Lr=1027,w_=1028,Xh=1029,R_=1030,qh=1031,Yh=1033,Ga=33776,Wa=33777,Xa=33778,qa=33779,Uc=35840,Ic=35841,Nc=35842,Oc=35843,C_=36196,Fc=37492,Bc=37496,zc=37808,kc=37809,Hc=37810,Vc=37811,Gc=37812,Wc=37813,Xc=37814,qc=37815,Yc=37816,jc=37817,$c=37818,Kc=37819,Zc=37820,Jc=37821,Ya=36492,Qc=36494,eu=36495,P_=36283,tu=36284,nu=36285,iu=36286,jh=3e3,Bi=3001,L_=3200,D_=3201,U_=0,I_=1,cn="",St="srgb",qn="srgb-linear",Nl="display-p3",Sa="display-p3-linear",la="linear",tt="srgb",ca="rec709",ua="p3",ja=7680,N_=519,O_=512,F_=513,B_=514,z_=515,k_=516,H_=517,V_=518,G_=519,ru=35044,su="300 es",ol=1035,Vn=2e3,fa=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$s=Math.PI/180,ll=180/Math.PI;function hs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[r&255]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function It(r,e,t){return Math.max(e,Math.min(t,r))}function W_(r,e){return(r%e+e)%e}function $a(r,e,t){return(1-t)*r+t*e}function au(r){return(r&r-1)===0&&r!==0}function cl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Br(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const X_={DEG2RAD:$s};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,s,o,a,l,u){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,u)}set(e,t,n,i,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],c=n[4],f=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],h=i[6],v=i[1],x=i[4],S=i[7],M=i[2],b=i[5],E=i[8];return s[0]=o*_+a*v+l*M,s[3]=o*m+a*x+l*b,s[6]=o*h+a*S+l*E,s[1]=u*_+c*v+f*M,s[4]=u*m+c*x+f*b,s[7]=u*h+c*S+f*E,s[2]=d*_+p*v+g*M,s[5]=d*m+p*x+g*b,s[8]=d*h+p*S+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-n*s*c+n*a*l+i*s*u-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,g=t*f+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*u-c*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(c*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=p*_,e[7]=(n*l-u*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-i*u,i*l,-i*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new ke;function $h(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function os(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function q_(){const r=os("canvas");return r.style.display="block",r}const ou={};function Zr(r){r in ou||(ou[r]=!0,console.warn(r))}const lu=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cu=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vs={[qn]:{transfer:la,primaries:ca,toReference:r=>r,fromReference:r=>r},[St]:{transfer:tt,primaries:ca,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Sa]:{transfer:la,primaries:ua,toReference:r=>r.applyMatrix3(cu),fromReference:r=>r.applyMatrix3(lu)},[Nl]:{transfer:tt,primaries:ua,toReference:r=>r.convertSRGBToLinear().applyMatrix3(cu),fromReference:r=>r.applyMatrix3(lu).convertLinearToSRGB()}},Y_=new Set([qn,Sa]),$e={enabled:!0,_workingColorSpace:qn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Y_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=vs[e].toReference,i=vs[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return vs[r].primaries},getTransfer:function(r){return r===cn?la:vs[r].transfer}};function yr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Za(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Yi;class Kh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=os("canvas")),Yi.width=e.width,Yi.height=e.height;const n=Yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=yr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yr(t[n]/255)*255):t[n]=yr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let j_=0;class Zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=hs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ja(i[o].image)):s.push(Ja(i[o]))}else s=Ja(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ja(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Kh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $_=0;class Xt extends Vi{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=_n,i=_n,s=kt,o=ss,a=gn,l=hi,u=Xt.DEFAULT_ANISOTROPY,c=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=hs(),this.name="",this.source=new Zh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Bi?St:cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sl:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sl:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===St?Bi:jh}set encoding(e){Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Bi?St:cn}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Hh;Xt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,i=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,M=(h+1)/2,b=(c+d)/4,E=(f+_)/4,P=(g+m)/4;return x>S&&x>M?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=E/n):S>M?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=b/i,s=P/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=E/s,i=P/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(d-c)/v,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K_ extends Vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Zr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Bi?St:cn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends K_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jh extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Z_ extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],u=n[i+1],c=n[i+2],f=n[i+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||u!==p||c!==g){let m=1-a;const h=l*d+u*p+c*g+f*_,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const M=Math.sqrt(x),b=Math.atan2(M,h*v);m=Math.sin(m*b)/M,a=Math.sin(a*b)/M}const S=a*v;if(l=l*m+d*S,u=u*m+p*S,c=c*m+g*S,f=f*m+_*S,m===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=M,u*=M,c*=M,f*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],u=n[i+2],c=n[i+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*f+l*p-u*d,e[t+1]=l*g+c*d+u*f-a*p,e[t+2]=u*g+c*p+a*d-l*f,e[t+3]=c*g-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(i/2),f=a(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f-d*p*g;break;case"YXZ":this._x=d*c*f+u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f+d*p*g;break;case"ZXY":this._x=d*c*f-u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f-d*p*g;break;case"ZYX":this._x=d*c*f-u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f+d*p*g;break;case"YZX":this._x=d*c*f+u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f-d*p*g;break;case"XZY":this._x=d*c*f-u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=n+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-i)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-u)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-i)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+o*a+i*u-s*l,this._y=i*c+o*l+s*a-n*u,this._z=s*c+o*u+n*l-i*a,this._w=o*c-n*a-i*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*i-a*n,c=l*n+a*t-s*i,f=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new V,uu=new ki;class ds{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ji.copy(e.boundingBox),ji.applyMatrix4(e.matrixWorld),this.union(ji);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Pn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Pn)}else i.boundingBox===null&&i.computeBoundingBox(),ji.copy(i.boundingBox),ji.applyMatrix4(e.matrixWorld),this.union(ji)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),xs.subVectors(this.max,zr),$i.subVectors(e.a,zr),Ki.subVectors(e.b,zr),Zi.subVectors(e.c,zr),Yn.subVectors(Ki,$i),jn.subVectors(Zi,Ki),Ti.subVectors($i,Zi);let t=[0,-Yn.z,Yn.y,0,-jn.z,jn.y,0,-Ti.z,Ti.y,Yn.z,0,-Yn.x,jn.z,0,-jn.x,Ti.z,0,-Ti.x,-Yn.y,Yn.x,0,-jn.y,jn.x,0,-Ti.y,Ti.x,0];return!eo(t,$i,Ki,Zi,xs)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,$i,Ki,Zi,xs))?!1:(ys.crossVectors(Yn,jn),t=[ys.x,ys.y,ys.z],eo(t,$i,Ki,Zi,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new V,new V,new V,new V,new V,new V,new V,new V],Pn=new V,ji=new ds,$i=new V,Ki=new V,Zi=new V,Yn=new V,jn=new V,Ti=new V,zr=new V,xs=new V,ys=new V,bi=new V;function eo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){bi.fromArray(r,s);const a=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),l=e.dot(bi),u=t.dot(bi),c=n.dot(bi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const J_=new ds,kr=new V,to=new V;class Ol{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):J_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);const t=kr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(kr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(to)),this.expandByPoint(kr.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new V,no=new V,Ss=new V,$n=new V,io=new V,Ms=new V,ro=new V;class Qh{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){no.copy(e).add(t).multiplyScalar(.5),Ss.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(no);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ss),a=$n.dot(this.direction),l=-$n.dot(Ss),u=$n.lengthSq(),c=Math.abs(1-o*o);let f,d,p,g;if(c>0)if(f=o*l-a,d=o*a-l,g=s*c,f>=0)if(d>=-g)if(d<=g){const _=1/c;f*=_,d*=_,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(no).addScaledVector(Ss,d),p}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,i=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,i=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,i,s){io.subVectors(t,e),Ms.subVectors(n,e),ro.crossVectors(io,Ms);let o=this.direction.dot(ro),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,e);const l=a*this.direction.dot(Ms.crossVectors($n,Ms));if(l<0)return null;const u=a*this.direction.dot(io.cross($n));if(u<0||l+u>o)return null;const c=-a*$n.dot(ro);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,n,i,s,o,a,l,u,c,f,d,p,g,_,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,u,c,f,d,p,g,_,m)}set(e,t,n,i,s,o,a,l,u,c,f,d,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=i,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ji.setFromMatrixColumn(e,0).length(),s=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),u=Math.sin(i),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+g*u,t[5]=d-_*u,t[9]=-a*l,t[2]=_-d*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,g=u*c,_=u*f;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,g=u*c,_=u*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=g*u-p,t[8]=d*u+_,t[1]=l*f,t[5]=_*u+d,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+_,t[5]=o*c,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*c,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q_,e,eg)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Kn.crossVectors(n,jt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Kn.crossVectors(n,jt)),Kn.normalize(),Es.crossVectors(jt,Kn),i[0]=Kn.x,i[4]=Es.x,i[8]=jt.x,i[1]=Kn.y,i[5]=Es.y,i[9]=jt.y,i[2]=Kn.z,i[6]=Es.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],c=n[1],f=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],h=n[14],v=n[3],x=n[7],S=n[11],M=n[15],b=i[0],E=i[4],P=i[8],y=i[12],A=i[1],z=i[5],X=i[9],G=i[13],I=i[2],O=i[6],R=i[10],N=i[14],q=i[3],k=i[7],j=i[11],D=i[15];return s[0]=o*b+a*A+l*I+u*q,s[4]=o*E+a*z+l*O+u*k,s[8]=o*P+a*X+l*R+u*j,s[12]=o*y+a*G+l*N+u*D,s[1]=c*b+f*A+d*I+p*q,s[5]=c*E+f*z+d*O+p*k,s[9]=c*P+f*X+d*R+p*j,s[13]=c*y+f*G+d*N+p*D,s[2]=g*b+_*A+m*I+h*q,s[6]=g*E+_*z+m*O+h*k,s[10]=g*P+_*X+m*R+h*j,s[14]=g*y+_*G+m*N+h*D,s[3]=v*b+x*A+S*I+M*q,s[7]=v*E+x*z+S*O+M*k,s[11]=v*P+x*X+S*R+M*j,s[15]=v*y+x*G+S*N+M*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*f-i*u*f-s*a*d+n*u*d+i*a*p-n*l*p)+_*(+t*l*p-t*u*d+s*o*d-i*o*p+i*u*c-s*l*c)+m*(+t*u*f-t*a*p-s*o*f+n*o*p+s*a*c-n*u*c)+h*(-i*a*c-t*l*f+t*a*d+i*o*f-n*o*d+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],v=f*m*u-_*d*u+_*l*p-a*m*p-f*l*h+a*d*h,x=g*d*u-c*m*u-g*l*p+o*m*p+c*l*h-o*d*h,S=c*_*u-g*f*u+g*a*p-o*_*p-c*a*h+o*f*h,M=g*f*l-c*_*l-g*a*d+o*_*d+c*a*m-o*f*m,b=t*v+n*x+i*S+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=v*E,e[1]=(_*d*s-f*m*s-_*i*p+n*m*p+f*i*h-n*d*h)*E,e[2]=(a*m*s-_*l*s+_*i*u-n*m*u-a*i*h+n*l*h)*E,e[3]=(f*l*s-a*d*s-f*i*u+n*d*u+a*i*p-n*l*p)*E,e[4]=x*E,e[5]=(c*m*s-g*d*s+g*i*p-t*m*p-c*i*h+t*d*h)*E,e[6]=(g*l*s-o*m*s-g*i*u+t*m*u+o*i*h-t*l*h)*E,e[7]=(o*d*s-c*l*s+c*i*u-t*d*u-o*i*p+t*l*p)*E,e[8]=S*E,e[9]=(g*f*s-c*_*s-g*n*p+t*_*p+c*n*h-t*f*h)*E,e[10]=(o*_*s-g*a*s+g*n*u-t*_*u-o*n*h+t*a*h)*E,e[11]=(c*a*s-o*f*s-c*n*u+t*f*u+o*n*p-t*a*p)*E,e[12]=M*E,e[13]=(c*_*i-g*f*i+g*n*d-t*_*d-c*n*m+t*f*m)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*E,e[15]=(o*f*i-c*a*i+c*n*l-t*f*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+n,u*a-i*l,u*l+i*a,0,u*a+i*l,c*a+n,c*l-i*o,0,u*l-i*a,c*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,g=s*f,_=o*c,m=o*f,h=a*f,v=l*u,x=l*c,S=l*f,M=n.x,b=n.y,E=n.z;return i[0]=(1-(_+h))*M,i[1]=(p+S)*M,i[2]=(g-x)*M,i[3]=0,i[4]=(p-S)*b,i[5]=(1-(d+h))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(g+x)*E,i[9]=(m-v)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ji.set(i[0],i[1],i[2]).length();const o=Ji.set(i[4],i[5],i[6]).length(),a=Ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],hn.copy(this);const u=1/s,c=1/o,f=1/a;return hn.elements[0]*=u,hn.elements[1]*=u,hn.elements[2]*=u,hn.elements[4]*=c,hn.elements[5]*=c,hn.elements[6]*=c,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,t.setFromRotationMatrix(hn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Vn){const l=this.elements,u=2*s/(t-e),c=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(a===Vn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===fa)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Vn){const l=this.elements,u=1/(t-e),c=1/(n-i),f=1/(o-s),d=(t+e)*u,p=(n+i)*c;let g,_;if(a===Vn)g=(o+s)*f,_=-2*f;else if(a===fa)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ji=new V,hn=new Tt,Q_=new V(0,0,0),eg=new V(1,1,1),Kn=new V,Es=new V,jt=new V,fu=new Tt,hu=new ki;class Ma{constructor(e=0,t=0,n=0,i=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],u=i[5],c=i[9],f=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-It(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hu.setFromEuler(this),this.setFromQuaternion(hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class ed{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tg=0;const du=new V,Qi=new ki,Dn=new Tt,Ts=new V,Hr=new V,ng=new V,ig=new ki,pu=new V(1,0,0),mu=new V(0,1,0),_u=new V(0,0,1),rg={type:"added"},sg={type:"removed"};class tn extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new V,t=new Ma,n=new ki,i=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Tt},normalMatrix:{value:new ke}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ed,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(pu,e)}rotateY(e){return this.rotateOnAxis(mu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pu,e)}translateY(e){return this.translateOnAxis(mu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ts.copy(e):Ts.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Hr,Ts,this.up):Dn.lookAt(Ts,Hr,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,ng),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}tn.DEFAULT_UP=new V(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new V,Un=new V,so=new V,In=new V,er=new V,tr=new V,gu=new V,ao=new V,oo=new V,lo=new V;let bs=!1;class mn{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),dn.subVectors(e,t),i.cross(dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){dn.subVectors(i,t),Un.subVectors(n,t),so.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(Un),l=dn.dot(so),u=Un.dot(Un),c=Un.dot(so),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(u*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,In),In.x>=0&&In.y>=0&&In.x+In.y<=1}static getUV(e,t,n,i,s,o,a,l){return bs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bs=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,In),l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l}static isFrontFacing(e,t,n,i){return dn.subVectors(n,t),Un.subVectors(e,t),dn.cross(Un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),dn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return bs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bs=!0),mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;er.subVectors(i,n),tr.subVectors(s,n),ao.subVectors(e,n);const l=er.dot(ao),u=tr.dot(ao);if(l<=0&&u<=0)return t.copy(n);oo.subVectors(e,i);const c=er.dot(oo),f=tr.dot(oo);if(c>=0&&f<=c)return t.copy(i);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(n).addScaledVector(er,o);lo.subVectors(e,s);const p=er.dot(lo),g=tr.dot(lo);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(n).addScaledVector(tr,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return gu.subVectors(s,i),a=(f-c)/(f-c+(p-g)),t.copy(i).addScaledVector(gu,a);const h=1/(m+_+d);return o=_*h,a=d*h,t.copy(n).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ag=0;class Ea extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=xr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=zh,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ja,this.stencilZFail=ja,this.stencilZPass=ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},As={h:0,s:0,l:0};function co(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=W_(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=co(o,s,e+1/3),this.g=co(o,s,e),this.b=co(o,s,e-1/3)}return $e.toWorkingColorSpace(this,i),this}setStyle(e,t=St){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=td[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=Za(e.r),this.g=Za(e.g),this.b=Za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return $e.fromWorkingColorSpace(At.copy(this),e),Math.round(It(At.r*255,0,255))*65536+Math.round(It(At.g*255,0,255))*256+Math.round(It(At.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(At.copy(this),t);const n=At.r,i=At.g,s=At.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=St){$e.fromWorkingColorSpace(At.copy(this),e);const t=At.r,n=At.g,i=At.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(As);const n=$a(Zn.h,As.h,t),i=$a(Zn.s,As.s,t),s=$a(Zn.l,As.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Qe;Qe.NAMES=td;class nd extends Ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new V,ws=new He;class bn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ru,this.updateRange={offset:0,count:-1},this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ws.fromBufferAttribute(this,t),ws.applyMatrix3(e),this.setXY(t,ws.x,ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Br(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Br(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Br(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Br(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ru&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class id extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rd extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class An extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let og=0;const an=new Tt,uo=new tn,nr=new V,$t=new ds,Vr=new ds,vt=new V;class xi extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($h(e)?rd:id)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return uo.lookAt(e),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new An(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors($t.min,Vr.min),$t.expandByPoint(vt),vt.addVectors($t.max,Vr.max),$t.expandByPoint(vt)):($t.expandByPoint(Vr.min),$t.expandByPoint(Vr.max))}$t.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)vt.fromBufferAttribute(a,u),l&&(nr.fromBufferAttribute(e,u),vt.add(nr)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<a;A++)u[A]=new V,c[A]=new V;const f=new V,d=new V,p=new V,g=new He,_=new He,m=new He,h=new V,v=new V;function x(A,z,X){f.fromArray(i,A*3),d.fromArray(i,z*3),p.fromArray(i,X*3),g.fromArray(o,A*2),_.fromArray(o,z*2),m.fromArray(o,X*2),d.sub(f),p.sub(f),_.sub(g),m.sub(g);const G=1/(_.x*m.y-m.x*_.y);isFinite(G)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(G),v.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(G),u[A].add(h),u[z].add(h),u[X].add(h),c[A].add(v),c[z].add(v),c[X].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let A=0,z=S.length;A<z;++A){const X=S[A],G=X.start,I=X.count;for(let O=G,R=G+I;O<R;O+=3)x(n[O+0],n[O+1],n[O+2])}const M=new V,b=new V,E=new V,P=new V;function y(A){E.fromArray(s,A*3),P.copy(E);const z=u[A];M.copy(z),M.sub(E.multiplyScalar(E.dot(z))).normalize(),b.crossVectors(P,z);const G=b.dot(c[A])<0?-1:1;l[A*4]=M.x,l[A*4+1]=M.y,l[A*4+2]=M.z,l[A*4+3]=G}for(let A=0,z=S.length;A<z;++A){const X=S[A],G=X.start,I=X.count;for(let O=G,R=G+I;O<R;O+=3)y(n[O+0]),y(n[O+1]),y(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new V,s=new V,o=new V,a=new V,l=new V,u=new V,c=new V,f=new V;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(i,s),c.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,m),a.add(c),l.add(c),u.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(i,s),c.cross(f),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let h=0;h<c;h++)d[g++]=u[p++]}return new bn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],u=e(l,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(i[l]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const c=i[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vu=new Tt,Ai=new Qh,Rs=new Ol,xu=new V,ir=new V,rr=new V,sr=new V,fo=new V,Cs=new V,Ps=new He,Ls=new He,Ds=new He,yu=new V,Su=new V,Mu=new V,Us=new V,Is=new V;class Tn extends tn{constructor(e=new xi,t=new nd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Cs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(fo.fromBufferAttribute(f,e),o?Cs.addScaledVector(fo,c):Cs.addScaledVector(fo.sub(t),c))}t.add(Cs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),!(Rs.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Rs,xu)===null||Ai.origin.distanceToSquared(xu)>(e.far-e.near)**2))&&(vu.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(vu),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,M=x;S<M;S+=3){const b=a.getX(S),E=a.getX(S+1),P=a.getX(S+2);i=Ns(this,h,e,n,u,c,f,b,E,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);i=Ns(this,o,e,n,u,c,f,v,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,M=x;S<M;S+=3){const b=S,E=S+1,P=S+2;i=Ns(this,h,e,n,u,c,f,b,E,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=m,x=m+1,S=m+2;i=Ns(this,o,e,n,u,c,f,v,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function lg(r,e,t,n,i,s,o,a){let l;if(e.side===Ft?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===_i,a),l===null)return null;Is.copy(a),Is.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(Is);return u<t.near||u>t.far?null:{distance:u,point:Is.clone(),object:r}}function Ns(r,e,t,n,i,s,o,a,l,u){r.getVertexPosition(a,ir),r.getVertexPosition(l,rr),r.getVertexPosition(u,sr);const c=lg(r,e,t,n,ir,rr,sr,Us);if(c){i&&(Ps.fromBufferAttribute(i,a),Ls.fromBufferAttribute(i,l),Ds.fromBufferAttribute(i,u),c.uv=mn.getInterpolation(Us,ir,rr,sr,Ps,Ls,Ds,new He)),s&&(Ps.fromBufferAttribute(s,a),Ls.fromBufferAttribute(s,l),Ds.fromBufferAttribute(s,u),c.uv1=mn.getInterpolation(Us,ir,rr,sr,Ps,Ls,Ds,new He),c.uv2=c.uv1),o&&(yu.fromBufferAttribute(o,a),Su.fromBufferAttribute(o,l),Mu.fromBufferAttribute(o,u),c.normal=mn.getInterpolation(Us,ir,rr,sr,yu,Su,Mu,new V),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new V,materialIndex:0};mn.getNormal(ir,rr,sr,f.normal),c.face=f}return c}class ps extends xi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new An(u,3)),this.setAttribute("normal",new An(c,3)),this.setAttribute("uv",new An(f,2));function g(_,m,h,v,x,S,M,b,E,P,y){const A=S/E,z=M/P,X=S/2,G=M/2,I=b/2,O=E+1,R=P+1;let N=0,q=0;const k=new V;for(let j=0;j<R;j++){const D=j*z-G;for(let B=0;B<O;B++){const ee=B*A-X;k[_]=ee*v,k[m]=D*x,k[h]=I,u.push(k.x,k.y,k.z),k[_]=0,k[m]=0,k[h]=b>0?1:-1,c.push(k.x,k.y,k.z),f.push(B/E),f.push(1-j/P),N+=1}}for(let j=0;j<P;j++)for(let D=0;D<E;D++){const B=d+D+O*j,ee=d+D+O*(j+1),J=d+(D+1)+O*(j+1),Q=d+(D+1)+O*j;l.push(B,ee,Q),l.push(ee,J,Q),q+=6}a.addGroup(p,q,y),p+=q,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Dr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Lt(r){const e={};for(let t=0;t<r.length;t++){const n=Dr(r[t]);for(const i in n)e[i]=n[i]}return e}function cg(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function sd(r){return r.getRenderTarget()===null?r.outputColorSpace:$e.workingColorSpace}const ug={clone:Dr,merge:Lt};var fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fg,this.fragmentShader=hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=cg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ad extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ln extends ad{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ll*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ll*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=-90,or=1;class dg extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ln(ar,or,e,t);i.layers=this.layers,this.add(i);const s=new ln(ar,or,e,t);s.layers=this.layers,this.add(s);const o=new ln(ar,or,e,t);o.layers=this.layers,this.add(o);const a=new ln(ar,or,e,t);a.layers=this.layers,this.add(a);const l=new ln(ar,or,e,t);l.layers=this.layers,this.add(l);const u=new ln(ar,or,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,c),e.setRenderTarget(f,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class od extends Xt{constructor(e,t,n,i,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Cr,super(e,t,n,i,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pg extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Zr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Bi?St:cn),this.texture=new od(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ps(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:ui});s.uniforms.tEquirect.value=t;const o=new Tn(i,s),a=t.minFilter;return t.minFilter===ss&&(t.minFilter=kt),new dg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const ho=new V,mg=new V,_g=new ke;class Qn{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ho.subVectors(n,t).cross(mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ho),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_g.getNormalMatrix(e),i=this.coplanarPoint(ho).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Ol,Os=new V;class ld{constructor(e=new Qn,t=new Qn,n=new Qn,i=new Qn,s=new Qn,o=new Qn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],u=i[4],c=i[5],f=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],h=i[12],v=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-s,d-u,m-p,S-h).normalize(),n[1].setComponents(l+s,d+u,m+p,S+h).normalize(),n[2].setComponents(l+o,d+c,m+g,S+v).normalize(),n[3].setComponents(l-o,d-c,m-g,S-v).normalize(),n[4].setComponents(l-a,d-f,m-_,S-x).normalize(),t===Vn)n[5].setComponents(l+a,d+f,m+_,S+x).normalize();else if(t===fa)n[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Os.x=i.normal.x>0?e.max.x:e.min.x,Os.y=i.normal.y>0?e.max.y:e.min.y,Os.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cd(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function gg(r,e){const t=e.isWebGL2,n=new WeakMap;function i(u,c){const f=u.array,d=u.usage,p=r.createBuffer();r.bindBuffer(c,p),r.bufferData(c,f,d),u.onUploadCallback();let g;if(f instanceof Float32Array)g=r.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=r.SHORT;else if(f instanceof Uint32Array)g=r.UNSIGNED_INT;else if(f instanceof Int32Array)g=r.INT;else if(f instanceof Int8Array)g=r.BYTE;else if(f instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,p=c.updateRange;r.bindBuffer(f,u),p.count===-1?r.bufferSubData(f,0,d):(t?r.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c&&(r.deleteBuffer(c.buffer),n.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);f===void 0?n.set(u,i(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class Ta extends xi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),u=a+1,c=l+1,f=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let h=0;h<c;h++){const v=h*d-o;for(let x=0;x<u;x++){const S=x*f-s;g.push(S,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+u*h,S=v+u*(h+1),M=v+1+u*(h+1),b=v+1+u*h;p.push(x,S,b),p.push(S,M,b)}this.setIndex(p),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(_,3)),this.setAttribute("uv",new An(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.widthSegments,e.heightSegments)}}var vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,r0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,s0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,c0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,m0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,M0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,A0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,L0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,D0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,I0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,X0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ev=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,av=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_v=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ev=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cv=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Iv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ov=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:vg,alphahash_pars_fragment:xg,alphamap_fragment:yg,alphamap_pars_fragment:Sg,alphatest_fragment:Mg,alphatest_pars_fragment:Eg,aomap_fragment:Tg,aomap_pars_fragment:bg,begin_vertex:Ag,beginnormal_vertex:wg,bsdfs:Rg,iridescence_fragment:Cg,bumpmap_pars_fragment:Pg,clipping_planes_fragment:Lg,clipping_planes_pars_fragment:Dg,clipping_planes_pars_vertex:Ug,clipping_planes_vertex:Ig,color_fragment:Ng,color_pars_fragment:Og,color_pars_vertex:Fg,color_vertex:Bg,common:zg,cube_uv_reflection_fragment:kg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Vg,displacementmap_vertex:Gg,emissivemap_fragment:Wg,emissivemap_pars_fragment:Xg,colorspace_fragment:qg,colorspace_pars_fragment:Yg,envmap_fragment:jg,envmap_common_pars_fragment:$g,envmap_pars_fragment:Kg,envmap_pars_vertex:Zg,envmap_physical_pars_fragment:c0,envmap_vertex:Jg,fog_vertex:Qg,fog_pars_vertex:e0,fog_fragment:t0,fog_pars_fragment:n0,gradientmap_pars_fragment:i0,lightmap_fragment:r0,lightmap_pars_fragment:s0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:o0,lights_pars_begin:l0,lights_toon_fragment:u0,lights_toon_pars_fragment:f0,lights_phong_fragment:h0,lights_phong_pars_fragment:d0,lights_physical_fragment:p0,lights_physical_pars_fragment:m0,lights_fragment_begin:_0,lights_fragment_maps:g0,lights_fragment_end:v0,logdepthbuf_fragment:x0,logdepthbuf_pars_fragment:y0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:M0,map_fragment:E0,map_pars_fragment:T0,map_particle_fragment:b0,map_particle_pars_fragment:A0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:R0,morphcolor_vertex:C0,morphnormal_vertex:P0,morphtarget_pars_vertex:L0,morphtarget_vertex:D0,normal_fragment_begin:U0,normal_fragment_maps:I0,normal_pars_fragment:N0,normal_pars_vertex:O0,normal_vertex:F0,normalmap_pars_fragment:B0,clearcoat_normal_fragment_begin:z0,clearcoat_normal_fragment_maps:k0,clearcoat_pars_fragment:H0,iridescence_pars_fragment:V0,opaque_fragment:G0,packing:W0,premultiplied_alpha_fragment:X0,project_vertex:q0,dithering_fragment:Y0,dithering_pars_fragment:j0,roughnessmap_fragment:$0,roughnessmap_pars_fragment:K0,shadowmap_pars_fragment:Z0,shadowmap_pars_vertex:J0,shadowmap_vertex:Q0,shadowmask_pars_fragment:ev,skinbase_vertex:tv,skinning_pars_vertex:nv,skinning_vertex:iv,skinnormal_vertex:rv,specularmap_fragment:sv,specularmap_pars_fragment:av,tonemapping_fragment:ov,tonemapping_pars_fragment:lv,transmission_fragment:cv,transmission_pars_fragment:uv,uv_pars_fragment:fv,uv_pars_vertex:hv,uv_vertex:dv,worldpos_vertex:pv,background_vert:mv,background_frag:_v,backgroundCube_vert:gv,backgroundCube_frag:vv,cube_vert:xv,cube_frag:yv,depth_vert:Sv,depth_frag:Mv,distanceRGBA_vert:Ev,distanceRGBA_frag:Tv,equirect_vert:bv,equirect_frag:Av,linedashed_vert:wv,linedashed_frag:Rv,meshbasic_vert:Cv,meshbasic_frag:Pv,meshlambert_vert:Lv,meshlambert_frag:Dv,meshmatcap_vert:Uv,meshmatcap_frag:Iv,meshnormal_vert:Nv,meshnormal_frag:Ov,meshphong_vert:Fv,meshphong_frag:Bv,meshphysical_vert:zv,meshphysical_frag:kv,meshtoon_vert:Hv,meshtoon_frag:Vv,points_vert:Gv,points_frag:Wv,shadow_vert:Xv,shadow_frag:qv,sprite_vert:Yv,sprite_frag:jv},he={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},yn={basic:{uniforms:Lt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Lt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Lt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Lt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Lt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Lt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Lt([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Lt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Lt([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Lt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Lt([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Lt([he.common,he.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Lt([he.lights,he.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};yn.physical={uniforms:Lt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Fs={r:0,b:0,g:0};function $v(r,e,t,n,i,s,o){const a=new Qe(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function g(m,h){let v=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ya)?(c===void 0&&(c=new Tn(new ps(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Dr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=$e.getTransfer(x.colorSpace)!==tt,(f!==x||d!==x.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Tn(new Ta(2,2),new gi({name:"BackgroundMaterial",uniforms:Dr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=$e.getTransfer(x.colorSpace)!==tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,h){m.getRGB(Fs,sd(r)),n.buffers.color.setClear(Fs.r,Fs.g,Fs.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Kv(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(I,O,R,N,q){let k=!1;if(o){const j=_(N,R,O);u!==j&&(u=j,p(u.object)),k=h(I,N,R,q),k&&v(I,N,R,q)}else{const j=O.wireframe===!0;(u.geometry!==N.id||u.program!==R.id||u.wireframe!==j)&&(u.geometry=N.id,u.program=R.id,u.wireframe=j,k=!0)}q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),(k||c)&&(c=!1,P(I,O,R,N),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,O,R){const N=R.wireframe===!0;let q=a[I.id];q===void 0&&(q={},a[I.id]=q);let k=q[O.id];k===void 0&&(k={},q[O.id]=k);let j=k[N];return j===void 0&&(j=m(d()),k[N]=j),j}function m(I){const O=[],R=[],N=[];for(let q=0;q<i;q++)O[q]=0,R[q]=0,N[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:R,attributeDivisors:N,object:I,attributes:{},index:null}}function h(I,O,R,N){const q=u.attributes,k=O.attributes;let j=0;const D=R.getAttributes();for(const B in D)if(D[B].location>=0){const J=q[B];let Q=k[B];if(Q===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),J===void 0||J.attribute!==Q||Q&&J.data!==Q.data)return!0;j++}return u.attributesNum!==j||u.index!==N}function v(I,O,R,N){const q={},k=O.attributes;let j=0;const D=R.getAttributes();for(const B in D)if(D[B].location>=0){let J=k[B];J===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));const Q={};Q.attribute=J,J&&J.data&&(Q.data=J.data),q[B]=Q,j++}u.attributes=q,u.attributesNum=j,u.index=N}function x(){const I=u.newAttributes;for(let O=0,R=I.length;O<R;O++)I[O]=0}function S(I){M(I,0)}function M(I,O){const R=u.newAttributes,N=u.enabledAttributes,q=u.attributeDivisors;R[I]=1,N[I]===0&&(r.enableVertexAttribArray(I),N[I]=1),q[I]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,O),q[I]=O)}function b(){const I=u.newAttributes,O=u.enabledAttributes;for(let R=0,N=O.length;R<N;R++)O[R]!==I[R]&&(r.disableVertexAttribArray(R),O[R]=0)}function E(I,O,R,N,q,k,j){j===!0?r.vertexAttribIPointer(I,O,R,q,k):r.vertexAttribPointer(I,O,R,N,q,k)}function P(I,O,R,N){if(n.isWebGL2===!1&&(I.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=N.attributes,k=R.getAttributes(),j=O.defaultAttributeValues;for(const D in k){const B=k[D];if(B.location>=0){let ee=q[D];if(ee===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),ee!==void 0){const J=ee.normalized,Q=ee.itemSize,pe=t.get(ee);if(pe===void 0)continue;const fe=pe.buffer,_e=pe.type,Pe=pe.bytesPerElement,Xe=n.isWebGL2===!0&&(_e===r.INT||_e===r.UNSIGNED_INT||ee.gpuType===Vh);if(ee.isInterleavedBufferAttribute){const Te=ee.data,F=Te.stride,Je=ee.offset;if(Te.isInstancedInterleavedBuffer){for(let be=0;be<B.locationSize;be++)M(B.location+be,Te.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let be=0;be<B.locationSize;be++)S(B.location+be);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let be=0;be<B.locationSize;be++)E(B.location+be,Q/B.locationSize,_e,J,F*Pe,(Je+Q/B.locationSize*be)*Pe,Xe)}else{if(ee.isInstancedBufferAttribute){for(let Te=0;Te<B.locationSize;Te++)M(B.location+Te,ee.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Te=0;Te<B.locationSize;Te++)S(B.location+Te);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let Te=0;Te<B.locationSize;Te++)E(B.location+Te,Q/B.locationSize,_e,J,Q*Pe,Q/B.locationSize*Te*Pe,Xe)}}else if(j!==void 0){const J=j[D];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(B.location,J);break;case 3:r.vertexAttrib3fv(B.location,J);break;case 4:r.vertexAttrib4fv(B.location,J);break;default:r.vertexAttrib1fv(B.location,J)}}}}b()}function y(){X();for(const I in a){const O=a[I];for(const R in O){const N=O[R];for(const q in N)g(N[q].object),delete N[q];delete O[R]}delete a[I]}}function A(I){if(a[I.id]===void 0)return;const O=a[I.id];for(const R in O){const N=O[R];for(const q in N)g(N[q].object),delete N[q];delete O[R]}delete a[I.id]}function z(I){for(const O in a){const R=a[O];if(R[I.id]===void 0)continue;const N=R[I.id];for(const q in N)g(N[q].object),delete N[q];delete R[I.id]}}function X(){G(),c=!0,u!==l&&(u=l,p(u.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:X,resetDefaultState:G,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:S,disableUnusedAttributes:b}}function Zv(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,c){r.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,u,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Jv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),h=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,S=o||e.has("OES_texture_float"),M=x&&S,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:b}}function Qv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Qn,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||i;return i=d,n=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:n,x=v*4;let S=h.clippingState||null;l.value=S,S=c(g,d,x,p);for(let M=0;M!==x;++M)S[M]=t[M];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,S=p;x!==_;++x,S+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ex(r){let e=new WeakMap;function t(o,a){return a===il?o.mapping=Cr:a===rl&&(o.mapping=Pr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===il||a===rl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new pg(l.height/2);return u.fromEquirectangularTexture(r,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class tx extends ad{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const dr=4,Eu=[.125,.215,.35,.446,.526,.582],Pi=20,po=new tx,Tu=new Qe;let mo=null;const Ci=(1+Math.sqrt(5))/2,lr=1/Ci,bu=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Ci,lr),new V(0,Ci,-lr),new V(lr,0,Ci),new V(-lr,0,Ci),new V(Ci,lr,0),new V(-Ci,lr,0)];class Au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){mo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mo),e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cr||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:as,format:gn,colorSpace:qn,depthBuffer:!1},i=wu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nx(s)),this._blurMaterial=ix(s,e,t)}return i}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,po)}_sceneToCubeUV(e,t,n,i){const a=new ln(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Tu),c.toneMapping=fi,c.autoClear=!1;const p=new nd({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new Tn(new ps,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Tu),_=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const x=this._cubeSize;Bs(i,v*x,h>2?x:0,x,x),c.setRenderTarget(i),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Cr||e.mapping===Pr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,po)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=bu[(i-1)%bu.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Tn(this._lodPlanes[i],u),d=u.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Pi-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):Pi;m>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);const h=[];let v=0;for(let E=0;E<Pi;++E){const P=E/_,y=Math.exp(-P*P/2);h.push(y),E===0?v+=y:E<m&&(v+=2*y)}for(let E=0;E<h.length;E++)h[E]=h[E]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const S=this._sizeLods[i],M=3*S*(i>x-dr?i-x+dr:0),b=4*(this._cubeSize-S);Bs(t,M,b,3*S,2*S),l.setRenderTarget(t),l.render(f,po)}}function nx(r){const e=[],t=[],n=[];let i=r;const s=r-dr+1+Eu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-dr?l=Eu[o-r+dr-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,_=3,m=2,h=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let b=0;b<p;b++){const E=b%3*2/3-1,P=b>2?0:-1,y=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];v.set(y,_*g*b),x.set(d,m*g*b);const A=[b,b,b,b,b,b];S.set(A,h*g*b)}const M=new xi;M.setAttribute("position",new bn(v,_)),M.setAttribute("uv",new bn(x,m)),M.setAttribute("faceIndex",new bn(S,h)),e.push(M),i>dr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wu(r,e,t){const n=new zi(r,e,t);return n.texture.mapping=ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ix(r,e,t){const n=new Float32Array(Pi),i=new V(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ru(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Cu(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rx(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===il||l===rl,c=l===Cr||l===Pr;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Au(r)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&i(f)){t===null&&(t=new Au(r));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function sx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ax(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],r.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,S=v.length;x<S;x+=3){const M=v[x+0],b=v[x+1],E=v[x+2];d.push(M,b,b,E,E,M)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const M=x+0,b=x+1,E=x+2;d.push(M,b,b,E,E,M)}}else return;const m=new($h(d)?rd:id)(d,1);m.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function ox(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,p){r.drawElements(s,p,a,d*l),t.update(p,s,1)}function f(d,p,g){if(g===0)return;let _,m;if(i)_=r,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,a,d*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function lx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cx(r,e){return r[0]-e[0]}function ux(r,e){return Math.abs(e[1])-Math.abs(r[1])}function fx(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Mt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let _=s.get(c);if(_===void 0||_.count!==g){let I=function(){X.dispose(),s.delete(c),c.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();const v=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let P=0;v===!0&&(P=1),x===!0&&(P=2),S===!0&&(P=3);let y=c.attributes.position.count*P,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const z=new Float32Array(y*A*4*g),X=new Jh(z,y,A,g);X.type=ai,X.needsUpdate=!0;const G=P*4;for(let O=0;O<g;O++){const R=M[O],N=b[O],q=E[O],k=y*A*4*O;for(let j=0;j<R.count;j++){const D=j*G;v===!0&&(o.fromBufferAttribute(R,j),z[k+D+0]=o.x,z[k+D+1]=o.y,z[k+D+2]=o.z,z[k+D+3]=0),x===!0&&(o.fromBufferAttribute(N,j),z[k+D+4]=o.x,z[k+D+5]=o.y,z[k+D+6]=o.z,z[k+D+7]=0),S===!0&&(o.fromBufferAttribute(q,j),z[k+D+8]=o.x,z[k+D+9]=o.y,z[k+D+10]=o.z,z[k+D+11]=q.itemSize===4?o.w:1)}}_={count:g,texture:X,size:new He(y,A)},s.set(c,_),c.addEventListener("dispose",I)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];const h=c.morphTargetsRelative?1:1-m;f.getUniforms().setValue(r,"morphTargetBaseInfluence",h),f.getUniforms().setValue(r,"morphTargetInfluences",d),f.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let g=n[c.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];n[c.id]=g}for(let x=0;x<p;x++){const S=g[x];S[0]=x,S[1]=d[x]}g.sort(ux);for(let x=0;x<8;x++)x<p&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(cx);const _=c.morphAttributes.position,m=c.morphAttributes.normal;let h=0;for(let x=0;x<8;x++){const S=a[x],M=S[0],b=S[1];M!==Number.MAX_SAFE_INTEGER&&b?(_&&c.getAttribute("morphTarget"+x)!==_[M]&&c.setAttribute("morphTarget"+x,_[M]),m&&c.getAttribute("morphNormal"+x)!==m[M]&&c.setAttribute("morphNormal"+x,m[M]),i[x]=b,h+=b):(_&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),m&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),i[x]=0)}const v=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(r,"morphTargetBaseInfluence",v),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function hx(r,e,t,n){let i=new WeakMap;function s(l){const u=n.render.frame,c=l.geometry,f=e.get(l,c);if(i.get(f)!==u&&(e.update(f),i.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==u&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==u&&(d.update(),i.set(d,u))}return f}function o(){i=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const ud=new Xt,fd=new Jh,hd=new Z_,dd=new od,Pu=[],Lu=[],Du=new Float32Array(16),Uu=new Float32Array(9),Iu=new Float32Array(4);function Nr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Pu[i];if(s===void 0&&(s=new Float32Array(i),Pu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function _t(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function gt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ba(r,e){let t=Lu[e];t===void 0&&(t=new Int32Array(e),Lu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function dx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function px(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2fv(this.addr,e),gt(t,e)}}function mx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;r.uniform3fv(this.addr,e),gt(t,e)}}function _x(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4fv(this.addr,e),gt(t,e)}}function gx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;Iu.set(n),r.uniformMatrix2fv(this.addr,!1,Iu),gt(t,n)}}function vx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;Uu.set(n),r.uniformMatrix3fv(this.addr,!1,Uu),gt(t,n)}}function xx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;Du.set(n),r.uniformMatrix4fv(this.addr,!1,Du),gt(t,n)}}function yx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2iv(this.addr,e),gt(t,e)}}function Mx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;r.uniform3iv(this.addr,e),gt(t,e)}}function Ex(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4iv(this.addr,e),gt(t,e)}}function Tx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function bx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2uiv(this.addr,e),gt(t,e)}}function Ax(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;r.uniform3uiv(this.addr,e),gt(t,e)}}function wx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4uiv(this.addr,e),gt(t,e)}}function Rx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ud,i)}function Cx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hd,i)}function Px(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||dd,i)}function Lx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fd,i)}function Dx(r){switch(r){case 5126:return dx;case 35664:return px;case 35665:return mx;case 35666:return _x;case 35674:return gx;case 35675:return vx;case 35676:return xx;case 5124:case 35670:return yx;case 35667:case 35671:return Sx;case 35668:case 35672:return Mx;case 35669:case 35673:return Ex;case 5125:return Tx;case 36294:return bx;case 36295:return Ax;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Lx}}function Ux(r,e){r.uniform1fv(this.addr,e)}function Ix(r,e){const t=Nr(e,this.size,2);r.uniform2fv(this.addr,t)}function Nx(r,e){const t=Nr(e,this.size,3);r.uniform3fv(this.addr,t)}function Ox(r,e){const t=Nr(e,this.size,4);r.uniform4fv(this.addr,t)}function Fx(r,e){const t=Nr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Bx(r,e){const t=Nr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function zx(r,e){const t=Nr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function kx(r,e){r.uniform1iv(this.addr,e)}function Hx(r,e){r.uniform2iv(this.addr,e)}function Vx(r,e){r.uniform3iv(this.addr,e)}function Gx(r,e){r.uniform4iv(this.addr,e)}function Wx(r,e){r.uniform1uiv(this.addr,e)}function Xx(r,e){r.uniform2uiv(this.addr,e)}function qx(r,e){r.uniform3uiv(this.addr,e)}function Yx(r,e){r.uniform4uiv(this.addr,e)}function jx(r,e,t){const n=this.cache,i=e.length,s=ba(t,i);_t(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ud,s[o])}function $x(r,e,t){const n=this.cache,i=e.length,s=ba(t,i);_t(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||hd,s[o])}function Kx(r,e,t){const n=this.cache,i=e.length,s=ba(t,i);_t(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||dd,s[o])}function Zx(r,e,t){const n=this.cache,i=e.length,s=ba(t,i);_t(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||fd,s[o])}function Jx(r){switch(r){case 5126:return Ux;case 35664:return Ix;case 35665:return Nx;case 35666:return Ox;case 35674:return Fx;case 35675:return Bx;case 35676:return zx;case 5124:case 35670:return kx;case 35667:case 35671:return Hx;case 35668:case 35672:return Vx;case 35669:case 35673:return Gx;case 5125:return Wx;case 36294:return Xx;case 36295:return qx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Zx}}class Qx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Dx(t.type)}}class ey{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Jx(t.type)}}class ty{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const _o=/(\w+)(\])?(\[|\.)?/g;function Nu(r,e){r.seq.push(e),r.map[e.id]=e}function ny(r,e,t){const n=r.name,i=n.length;for(_o.lastIndex=0;;){const s=_o.exec(n),o=_o.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===i){Nu(t,u===void 0?new Qx(a,r,e):new ey(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new ty(a),Nu(t,f)),t=f}}}class Ks{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);ny(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ou(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let iy=0;function ry(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function sy(r){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(r);let n;switch(e===t?n="":e===ua&&t===ca?n="LinearDisplayP3ToLinearSRGB":e===ca&&t===ua&&(n="LinearSRGBToLinearDisplayP3"),r){case qn:case Sa:return[n,"LinearTransferOETF"];case St:case Nl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Fu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+ry(r.getShaderSource(e),o)}else return i}function ay(r,e){const t=sy(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function oy(r,e){let t;switch(e){case __:t="Linear";break;case g_:t="Reinhard";break;case v_:t="OptimizedCineon";break;case x_:t="ACESFilmic";break;case y_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ly(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yr).join(`
`)}function cy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uy(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Yr(r){return r!==""}function Bu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(r){return r.replace(fy,dy)}const hy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dy(r,e){let t=Be[e];if(t===void 0){const n=hy.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ul(t)}const py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(r){return r.replace(py,my)}function my(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Hu(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _y(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===jm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function gy(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Cr:case Pr:e="ENVMAP_TYPE_CUBE";break;case ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vy(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Pr&&(e="ENVMAP_MODE_REFRACTION"),e}function xy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case kh:e="ENVMAP_BLENDING_MULTIPLY";break;case p_:e="ENVMAP_BLENDING_MIX";break;case m_:e="ENVMAP_BLENDING_ADD";break}return e}function yy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sy(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=_y(t),u=gy(t),c=vy(t),f=xy(t),d=yy(t),p=t.isWebGL2?"":ly(t),g=cy(s),_=i.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),h.length>0&&(h+=`
`)):(m=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),h=[p,Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Be.tonemapping_pars_fragment:"",t.toneMapping!==fi?oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,ay("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),o=ul(o),o=Bu(o,t),o=zu(o,t),a=ul(a),a=Bu(a,t),a=zu(a,t),o=ku(o),a=ku(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+m+o,S=v+h+a,M=Ou(i,i.VERTEX_SHADER,x),b=Ou(i,i.FRAGMENT_SHADER,S);if(i.attachShader(_,M),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const y=i.getProgramInfoLog(_).trim(),A=i.getShaderInfoLog(M).trim(),z=i.getShaderInfoLog(b).trim();let X=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,b);else{const I=Fu(i,M,"vertex"),O=Fu(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+I+`
`+O)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(A===""||z==="")&&(G=!1);G&&(this.diagnostics={runnable:X,programLog:y,vertexShader:{log:A,prefix:m},fragmentShader:{log:z,prefix:h}})}i.deleteShader(M),i.deleteShader(b);let E;this.getUniforms=function(){return E===void 0&&(E=new Ks(i,_)),E};let P;return this.getAttributes=function(){return P===void 0&&(P=uy(i,_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=b,this}let My=0;class Ey{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ty(e),t.set(e,n)),n}}class Ty{constructor(e){this.id=My++,this.code=e,this.usedTimes=0}}function by(r,e,t,n,i,s,o){const a=new ed,l=new Ey,u=[],c=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,A,z,X,G){const I=X.fog,O=G.geometry,R=y.isMeshStandardMaterial?X.environment:null,N=(y.isMeshStandardMaterial?t:e).get(y.envMap||R),q=N&&N.mapping===ya?N.image.height:null,k=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,D=j!==void 0?j.length:0;let B=0;O.morphAttributes.position!==void 0&&(B=1),O.morphAttributes.normal!==void 0&&(B=2),O.morphAttributes.color!==void 0&&(B=3);let ee,J,Q,pe;if(k){const et=yn[k];ee=et.vertexShader,J=et.fragmentShader}else ee=y.vertexShader,J=y.fragmentShader,l.update(y),Q=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);const fe=r.getRenderTarget(),_e=G.isInstancedMesh===!0,Pe=!!y.map,Xe=!!y.matcap,Te=!!N,F=!!y.aoMap,Je=!!y.lightMap,be=!!y.bumpMap,Re=!!y.normalMap,Ce=!!y.displacementMap,je=!!y.emissiveMap,Oe=!!y.metalnessMap,Ne=!!y.roughnessMap,ge=y.anisotropy>0,Ye=y.clearcoat>0,ze=y.iridescence>0,C=y.sheen>0,T=y.transmission>0,Y=ge&&!!y.anisotropyMap,re=Ye&&!!y.clearcoatMap,ie=Ye&&!!y.clearcoatNormalMap,se=Ye&&!!y.clearcoatRoughnessMap,ye=ze&&!!y.iridescenceMap,oe=ze&&!!y.iridescenceThicknessMap,me=C&&!!y.sheenColorMap,U=C&&!!y.sheenRoughnessMap,ae=!!y.specularMap,Z=!!y.specularColorMap,Ae=!!y.specularIntensityMap,Me=T&&!!y.transmissionMap,Ee=T&&!!y.thicknessMap,xe=!!y.gradientMap,L=!!y.alphaMap,le=y.alphaTest>0,ne=!!y.alphaHash,ue=!!y.extensions,ce=!!O.attributes.uv1,te=!!O.attributes.uv2,Se=!!O.attributes.uv3;let Le=fi;return y.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Le=r.toneMapping),{isWebGL2:c,shaderID:k,shaderType:y.type,shaderName:y.name,vertexShader:ee,fragmentShader:J,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:_e,instancingColor:_e&&G.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:qn,map:Pe,matcap:Xe,envMap:Te,envMapMode:Te&&N.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:Je,bumpMap:be,normalMap:Re,displacementMap:d&&Ce,emissiveMap:je,normalMapObjectSpace:Re&&y.normalMapType===I_,normalMapTangentSpace:Re&&y.normalMapType===U_,metalnessMap:Oe,roughnessMap:Ne,anisotropy:ge,anisotropyMap:Y,clearcoat:Ye,clearcoatMap:re,clearcoatNormalMap:ie,clearcoatRoughnessMap:se,iridescence:ze,iridescenceMap:ye,iridescenceThicknessMap:oe,sheen:C,sheenColorMap:me,sheenRoughnessMap:U,specularMap:ae,specularColorMap:Z,specularIntensityMap:Ae,transmission:T,transmissionMap:Me,thicknessMap:Ee,gradientMap:xe,opaque:y.transparent===!1&&y.blending===xr,alphaMap:L,alphaTest:le,alphaHash:ne,combine:y.combine,mapUv:Pe&&_(y.map.channel),aoMapUv:F&&_(y.aoMap.channel),lightMapUv:Je&&_(y.lightMap.channel),bumpMapUv:be&&_(y.bumpMap.channel),normalMapUv:Re&&_(y.normalMap.channel),displacementMapUv:Ce&&_(y.displacementMap.channel),emissiveMapUv:je&&_(y.emissiveMap.channel),metalnessMapUv:Oe&&_(y.metalnessMap.channel),roughnessMapUv:Ne&&_(y.roughnessMap.channel),anisotropyMapUv:Y&&_(y.anisotropyMap.channel),clearcoatMapUv:re&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:U&&_(y.sheenRoughnessMap.channel),specularMapUv:ae&&_(y.specularMap.channel),specularColorMapUv:Z&&_(y.specularColorMap.channel),specularIntensityMapUv:Ae&&_(y.specularIntensityMap.channel),transmissionMapUv:Me&&_(y.transmissionMap.channel),thicknessMapUv:Ee&&_(y.thicknessMap.channel),alphaMapUv:L&&_(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Re||ge),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:te,vertexUv3s:Se,pointsUvs:G.isPoints===!0&&!!O.attributes.uv&&(Pe||L),fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:G.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:B,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Le,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Pe&&y.map.isVideoTexture===!0&&$e.getTransfer(y.map.colorSpace)===tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mn,flipSided:y.side===Ft,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ue&&y.extensions.derivatives===!0,extensionFragDepth:ue&&y.extensions.fragDepth===!0,extensionDrawBuffers:ue&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)A.push(z),A.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(v(A,y),x(A,y),A.push(r.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function v(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function x(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function S(y){const A=g[y.type];let z;if(A){const X=yn[A];z=ug.clone(X.uniforms)}else z=y.uniforms;return z}function M(y,A){let z;for(let X=0,G=u.length;X<G;X++){const I=u[X];if(I.cacheKey===A){z=I,++z.usedTimes;break}}return z===void 0&&(z=new Sy(r,A,y,s),u.push(z)),z}function b(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),y.destroy()}}function E(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:M,releaseProgram:b,releaseShaderCache:E,programs:u,dispose:P}}function Ay(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function wy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Vu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Gu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,p,g,_,m){let h=r[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function a(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?n.push(h):p.transparent===!0?i.push(h):t.push(h)}function l(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?n.unshift(h):p.transparent===!0?i.unshift(h):t.unshift(h)}function u(f,d){t.length>1&&t.sort(f||wy),n.length>1&&n.sort(d||Vu),i.length>1&&i.sort(d||Vu)}function c(){for(let f=e,d=r.length;f<d;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:c,sort:u}}function Ry(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Gu,r.set(n,[o])):i>=s.length?(o=new Gu,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Cy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Qe};break;case"SpotLight":t={position:new V,direction:new V,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new V,halfWidth:new V,halfHeight:new V};break}return r[e.id]=t,t}}}function Py(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ly=0;function Dy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Uy(r,e){const t=new Cy,n=Py(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,o=new Tt,a=new Tt;function l(c,f){let d=0,p=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let _=0,m=0,h=0,v=0,x=0,S=0,M=0,b=0,E=0,P=0,y=0;c.sort(Dy);const A=f===!0?Math.PI:1;for(let X=0,G=c.length;X<G;X++){const I=c[X],O=I.color,R=I.intensity,N=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=O.r*R*A,p+=O.g*R*A,g+=O.b*R*A;else if(I.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(I.sh.coefficients[k],R);y++}else if(I.isDirectionalLight){const k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity*A),I.castShadow){const j=I.shadow,D=n.get(I);D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,i.directionalShadow[_]=D,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=I.shadow.matrix,S++}i.directional[_]=k,_++}else if(I.isSpotLight){const k=t.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(O).multiplyScalar(R*A),k.distance=N,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,i.spot[h]=k;const j=I.shadow;if(I.map&&(i.spotLightMap[E]=I.map,E++,j.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[h]=j.matrix,I.castShadow){const D=n.get(I);D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,i.spotShadow[h]=D,i.spotShadowMap[h]=q,b++}h++}else if(I.isRectAreaLight){const k=t.get(I);k.color.copy(O).multiplyScalar(R),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=k,v++}else if(I.isPointLight){const k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity*A),k.distance=I.distance,k.decay=I.decay,I.castShadow){const j=I.shadow,D=n.get(I);D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,D.shadowCameraNear=j.camera.near,D.shadowCameraFar=j.camera.far,i.pointShadow[m]=D,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=I.shadow.matrix,M++}i.point[m]=k,m++}else if(I.isHemisphereLight){const k=t.get(I);k.skyColor.copy(I.color).multiplyScalar(R*A),k.groundColor.copy(I.groundColor).multiplyScalar(R*A),i.hemi[x]=k,x++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const z=i.hash;(z.directionalLength!==_||z.pointLength!==m||z.spotLength!==h||z.rectAreaLength!==v||z.hemiLength!==x||z.numDirectionalShadows!==S||z.numPointShadows!==M||z.numSpotShadows!==b||z.numSpotMaps!==E||z.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=h,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+E-P,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=y,z.directionalLength=_,z.pointLength=m,z.spotLength=h,z.rectAreaLength=v,z.hemiLength=x,z.numDirectionalShadows=S,z.numPointShadows=M,z.numSpotShadows=b,z.numSpotMaps=E,z.numLightProbes=y,i.version=Ly++)}function u(c,f){let d=0,p=0,g=0,_=0,m=0;const h=f.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const S=c[v];if(S.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),d++}else if(S.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),g++}else if(S.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(h),a.identity(),o.copy(S.matrixWorld),o.premultiply(h),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(h),p++}else if(S.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:i}}function Wu(r,e){const t=new Uy(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function u(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Iy(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Wu(r,e),t.set(s,[l])):o>=a.length?(l=new Wu(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ny extends Ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Oy extends Ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,By=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zy(r,e,t){let n=new ld;const i=new He,s=new He,o=new Mt,a=new Ny({depthPacking:D_}),l=new Oy,u={},c=t.maxTextureSize,f={[_i]:Ft,[Ft]:_i,[Mn]:Mn},d=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Fy,fragmentShader:By}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new xi;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let h=this.type;this.render=function(M,b,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const P=r.getRenderTarget(),y=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),z=r.state;z.setBlending(ui),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const X=h!==Nn&&this.type===Nn,G=h===Nn&&this.type!==Nn;for(let I=0,O=M.length;I<O;I++){const R=M[I],N=R.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const q=N.getFrameExtents();if(i.multiply(q),s.copy(N.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/q.x),i.x=s.x*q.x,N.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/q.y),i.y=s.y*q.y,N.mapSize.y=s.y)),N.map===null||X===!0||G===!0){const j=this.type!==Nn?{minFilter:Ut,magFilter:Ut}:{};N.map!==null&&N.map.dispose(),N.map=new zi(i.x,i.y,j),N.map.texture.name=R.name+".shadowMap",N.camera.updateProjectionMatrix()}r.setRenderTarget(N.map),r.clear();const k=N.getViewportCount();for(let j=0;j<k;j++){const D=N.getViewport(j);o.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),z.viewport(o),N.updateMatrices(R,j),n=N.getFrustum(),S(b,E,N.camera,R,this.type)}N.isPointLightShadow!==!0&&this.type===Nn&&v(N,E),N.needsUpdate=!1}h=this.type,m.needsUpdate=!1,r.setRenderTarget(P,y,A)};function v(M,b){const E=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new zi(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(b,null,E,d,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(b,null,E,p,_,null)}function x(M,b,E,P){let y=null;const A=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)y=A;else if(y=E.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=y.uuid,X=b.uuid;let G=u[z];G===void 0&&(G={},u[z]=G);let I=G[X];I===void 0&&(I=y.clone(),G[X]=I),y=I}if(y.visible=b.visible,y.wireframe=b.wireframe,P===Nn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:f[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,E.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=r.properties.get(y);z.light=E}return y}function S(M,b,E,P,y){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===Nn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);const X=e.update(M),G=M.material;if(Array.isArray(G)){const I=X.groups;for(let O=0,R=I.length;O<R;O++){const N=I[O],q=G[N.materialIndex];if(q&&q.visible){const k=x(M,q,P,y);r.renderBufferDirect(E,null,X,k,M,N)}}}else if(G.visible){const I=x(M,G,P,y);r.renderBufferDirect(E,null,X,I,M,null)}}const z=M.children;for(let X=0,G=z.length;X<G;X++)S(z[X],b,E,P,y)}}function ky(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const le=new Mt;let ne=null;const ue=new Mt(0,0,0,0);return{setMask:function(ce){ne!==ce&&!L&&(r.colorMask(ce,ce,ce,ce),ne=ce)},setLocked:function(ce){L=ce},setClear:function(ce,te,Se,Le,ft){ft===!0&&(ce*=Le,te*=Le,Se*=Le),le.set(ce,te,Se,Le),ue.equals(le)===!1&&(r.clearColor(ce,te,Se,Le),ue.copy(le))},reset:function(){L=!1,ne=null,ue.set(-1,0,0,0)}}}function s(){let L=!1,le=null,ne=null,ue=null;return{setTest:function(ce){ce?fe(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(ce){le!==ce&&!L&&(r.depthMask(ce),le=ce)},setFunc:function(ce){if(ne!==ce){switch(ce){case o_:r.depthFunc(r.NEVER);break;case l_:r.depthFunc(r.ALWAYS);break;case c_:r.depthFunc(r.LESS);break;case nl:r.depthFunc(r.LEQUAL);break;case u_:r.depthFunc(r.EQUAL);break;case f_:r.depthFunc(r.GEQUAL);break;case h_:r.depthFunc(r.GREATER);break;case d_:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ne=ce}},setLocked:function(ce){L=ce},setClear:function(ce){ue!==ce&&(r.clearDepth(ce),ue=ce)},reset:function(){L=!1,le=null,ne=null,ue=null}}}function o(){let L=!1,le=null,ne=null,ue=null,ce=null,te=null,Se=null,Le=null,ft=null;return{setTest:function(et){L||(et?fe(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(et){le!==et&&!L&&(r.stencilMask(et),le=et)},setFunc:function(et,vn,Ct){(ne!==et||ue!==vn||ce!==Ct)&&(r.stencilFunc(et,vn,Ct),ne=et,ue=vn,ce=Ct)},setOp:function(et,vn,Ct){(te!==et||Se!==vn||Le!==Ct)&&(r.stencilOp(et,vn,Ct),te=et,Se=vn,Le=Ct)},setLocked:function(et){L=et},setClear:function(et){ft!==et&&(r.clearStencil(et),ft=et)},reset:function(){L=!1,le=null,ne=null,ue=null,ce=null,te=null,Se=null,Le=null,ft=null}}}const a=new i,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,h=!1,v=null,x=null,S=null,M=null,b=null,E=null,P=null,y=!1,A=null,z=null,X=null,G=null,I=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let R=!1,N=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(q)[1]),R=N>=1):q.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),R=N>=2);let k=null,j={};const D=r.getParameter(r.SCISSOR_BOX),B=r.getParameter(r.VIEWPORT),ee=new Mt().fromArray(D),J=new Mt().fromArray(B);function Q(L,le,ne,ue){const ce=new Uint8Array(4),te=r.createTexture();r.bindTexture(L,te),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Se=0;Se<ne;Se++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(le,0,r.RGBA,1,1,ue,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(le+Se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return te}const pe={};pe[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),pe[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(pe[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),pe[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),fe(r.DEPTH_TEST),l.setFunc(nl),Ce(!1),je(Ac),fe(r.CULL_FACE),be(ui);function fe(L){d[L]!==!0&&(r.enable(L),d[L]=!0)}function _e(L){d[L]!==!1&&(r.disable(L),d[L]=!1)}function Pe(L,le){return p[L]!==le?(r.bindFramebuffer(L,le),p[L]=le,n&&(L===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=le),L===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=le)),!0):!1}function Xe(L,le){let ne=_,ue=!1;if(L)if(ne=g.get(le),ne===void 0&&(ne=[],g.set(le,ne)),L.isWebGLMultipleRenderTargets){const ce=L.texture;if(ne.length!==ce.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let te=0,Se=ce.length;te<Se;te++)ne[te]=r.COLOR_ATTACHMENT0+te;ne.length=ce.length,ue=!0}}else ne[0]!==r.COLOR_ATTACHMENT0&&(ne[0]=r.COLOR_ATTACHMENT0,ue=!0);else ne[0]!==r.BACK&&(ne[0]=r.BACK,ue=!0);ue&&(t.isWebGL2?r.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Te(L){return m!==L?(r.useProgram(L),m=L,!0):!1}const F={[ur]:r.FUNC_ADD,[Km]:r.FUNC_SUBTRACT,[Zm]:r.FUNC_REVERSE_SUBTRACT};if(n)F[Pc]=r.MIN,F[Lc]=r.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(F[Pc]=L.MIN_EXT,F[Lc]=L.MAX_EXT)}const Je={[Jm]:r.ZERO,[Qm]:r.ONE,[e_]:r.SRC_COLOR,[Bh]:r.SRC_ALPHA,[a_]:r.SRC_ALPHA_SATURATE,[r_]:r.DST_COLOR,[n_]:r.DST_ALPHA,[t_]:r.ONE_MINUS_SRC_COLOR,[zh]:r.ONE_MINUS_SRC_ALPHA,[s_]:r.ONE_MINUS_DST_COLOR,[i_]:r.ONE_MINUS_DST_ALPHA};function be(L,le,ne,ue,ce,te,Se,Le){if(L===ui){h===!0&&(_e(r.BLEND),h=!1);return}if(h===!1&&(fe(r.BLEND),h=!0),L!==$m){if(L!==v||Le!==y){if((x!==ur||b!==ur)&&(r.blendEquation(r.FUNC_ADD),x=ur,b=ur),Le)switch(L){case xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wc:r.blendFunc(r.ONE,r.ONE);break;case Rc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Cc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Rc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Cc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,M=null,E=null,P=null,v=L,y=Le}return}ce=ce||le,te=te||ne,Se=Se||ue,(le!==x||ce!==b)&&(r.blendEquationSeparate(F[le],F[ce]),x=le,b=ce),(ne!==S||ue!==M||te!==E||Se!==P)&&(r.blendFuncSeparate(Je[ne],Je[ue],Je[te],Je[Se]),S=ne,M=ue,E=te,P=Se),v=L,y=!1}function Re(L,le){L.side===Mn?_e(r.CULL_FACE):fe(r.CULL_FACE);let ne=L.side===Ft;le&&(ne=!ne),Ce(ne),L.blending===xr&&L.transparent===!1?be(ui):be(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ue=L.stencilWrite;u.setTest(ue),ue&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(L){A!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),A=L)}function je(L){L!==qm?(fe(r.CULL_FACE),L!==z&&(L===Ac?r.cullFace(r.BACK):L===Ym?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),z=L}function Oe(L){L!==X&&(R&&r.lineWidth(L),X=L)}function Ne(L,le,ne){L?(fe(r.POLYGON_OFFSET_FILL),(G!==le||I!==ne)&&(r.polygonOffset(le,ne),G=le,I=ne)):_e(r.POLYGON_OFFSET_FILL)}function ge(L){L?fe(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function Ye(L){L===void 0&&(L=r.TEXTURE0+O-1),k!==L&&(r.activeTexture(L),k=L)}function ze(L,le,ne){ne===void 0&&(k===null?ne=r.TEXTURE0+O-1:ne=k);let ue=j[ne];ue===void 0&&(ue={type:void 0,texture:void 0},j[ne]=ue),(ue.type!==L||ue.texture!==le)&&(k!==ne&&(r.activeTexture(ne),k=ne),r.bindTexture(L,le||pe[L]),ue.type=L,ue.texture=le)}function C(){const L=j[k];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function T(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function U(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(L){ee.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function Ae(L){J.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),J.copy(L))}function Me(L,le){let ne=f.get(le);ne===void 0&&(ne=new WeakMap,f.set(le,ne));let ue=ne.get(L);ue===void 0&&(ue=r.getUniformBlockIndex(le,L.name),ne.set(L,ue))}function Ee(L,le){const ue=f.get(le).get(L);c.get(le)!==ue&&(r.uniformBlockBinding(le,ue,L.__bindingPointIndex),c.set(le,ue))}function xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},k=null,j={},p={},g=new WeakMap,_=[],m=null,h=!1,v=null,x=null,S=null,M=null,b=null,E=null,P=null,y=!1,A=null,z=null,X=null,G=null,I=null,ee.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:fe,disable:_e,bindFramebuffer:Pe,drawBuffers:Xe,useProgram:Te,setBlending:be,setMaterial:Re,setFlipSided:Ce,setCullFace:je,setLineWidth:Oe,setPolygonOffset:Ne,setScissorTest:ge,activeTexture:Ye,bindTexture:ze,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:Y,texImage2D:U,texImage3D:ae,updateUBOMapping:Me,uniformBlockBinding:Ee,texStorage2D:oe,texStorage3D:me,texSubImage2D:re,texSubImage3D:ie,compressedTexSubImage2D:se,compressedTexSubImage3D:ye,scissor:Z,viewport:Ae,reset:xe}}function Hy(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,c=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,T){return h?new OffscreenCanvas(C,T):os("canvas")}function x(C,T,Y,re){let ie=1;if((C.width>re||C.height>re)&&(ie=re/Math.max(C.width,C.height)),ie<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const se=T?cl:Math.floor,ye=se(ie*C.width),oe=se(ie*C.height);_===void 0&&(_=v(ye,oe));const me=Y?v(ye,oe):_;return me.width=ye,me.height=oe,me.getContext("2d").drawImage(C,0,0,ye,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ye+"x"+oe+")."),me}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return au(C.width)&&au(C.height)}function M(C){return a?!1:C.wrapS!==_n||C.wrapT!==_n||C.minFilter!==Ut&&C.minFilter!==kt}function b(C,T){return C.generateMipmaps&&T&&C.minFilter!==Ut&&C.minFilter!==kt}function E(C){r.generateMipmap(C)}function P(C,T,Y,re,ie=!1){if(a===!1)return T;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=T;if(T===r.RED&&(Y===r.FLOAT&&(se=r.R32F),Y===r.HALF_FLOAT&&(se=r.R16F),Y===r.UNSIGNED_BYTE&&(se=r.R8)),T===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(se=r.R8UI),Y===r.UNSIGNED_SHORT&&(se=r.R16UI),Y===r.UNSIGNED_INT&&(se=r.R32UI),Y===r.BYTE&&(se=r.R8I),Y===r.SHORT&&(se=r.R16I),Y===r.INT&&(se=r.R32I)),T===r.RG&&(Y===r.FLOAT&&(se=r.RG32F),Y===r.HALF_FLOAT&&(se=r.RG16F),Y===r.UNSIGNED_BYTE&&(se=r.RG8)),T===r.RGBA){const ye=ie?la:$e.getTransfer(re);Y===r.FLOAT&&(se=r.RGBA32F),Y===r.HALF_FLOAT&&(se=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(se=ye===tt?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(se=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(se=r.RGB5_A1)}return(se===r.R16F||se===r.R32F||se===r.RG16F||se===r.RG32F||se===r.RGBA16F||se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function y(C,T,Y){return b(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==Ut&&C.minFilter!==kt?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function A(C){return C===Ut||C===Dc||C===Va?r.NEAREST:r.LINEAR}function z(C){const T=C.target;T.removeEventListener("dispose",z),G(T),T.isVideoTexture&&g.delete(T)}function X(C){const T=C.target;T.removeEventListener("dispose",X),O(T)}function G(C){const T=n.get(C);if(T.__webglInit===void 0)return;const Y=C.source,re=m.get(Y);if(re){const ie=re[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&I(C),Object.keys(re).length===0&&m.delete(Y)}n.remove(C)}function I(C){const T=n.get(C);r.deleteTexture(T.__webglTexture);const Y=C.source,re=m.get(Y);delete re[T.__cacheKey],o.memory.textures--}function O(C){const T=C.texture,Y=n.get(C),re=n.get(T);if(re.__webglTexture!==void 0&&(r.deleteTexture(re.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(Y.__webglFramebuffer[ie]))for(let se=0;se<Y.__webglFramebuffer[ie].length;se++)r.deleteFramebuffer(Y.__webglFramebuffer[ie][se]);else r.deleteFramebuffer(Y.__webglFramebuffer[ie]);Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer[ie])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ie=0;ie<Y.__webglFramebuffer.length;ie++)r.deleteFramebuffer(Y.__webglFramebuffer[ie]);else r.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ie=0;ie<Y.__webglColorRenderbuffer.length;ie++)Y.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(Y.__webglColorRenderbuffer[ie]);Y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ie=0,se=T.length;ie<se;ie++){const ye=n.get(T[ie]);ye.__webglTexture&&(r.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(T[ie])}n.remove(T),n.remove(C)}let R=0;function N(){R=0}function q(){const C=R;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),R+=1,C}function k(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function j(C,T){const Y=n.get(C);if(C.isVideoTexture&&Ye(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(Y,C,T);return}}t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+T)}function D(C,T){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){Pe(Y,C,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+T)}function B(C,T){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){Pe(Y,C,T);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+T)}function ee(C,T){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){Xe(Y,C,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+T)}const J={[sl]:r.REPEAT,[_n]:r.CLAMP_TO_EDGE,[al]:r.MIRRORED_REPEAT},Q={[Ut]:r.NEAREST,[Dc]:r.NEAREST_MIPMAP_NEAREST,[Va]:r.NEAREST_MIPMAP_LINEAR,[kt]:r.LINEAR,[S_]:r.LINEAR_MIPMAP_NEAREST,[ss]:r.LINEAR_MIPMAP_LINEAR},pe={[O_]:r.NEVER,[G_]:r.ALWAYS,[F_]:r.LESS,[z_]:r.LEQUAL,[B_]:r.EQUAL,[V_]:r.GEQUAL,[k_]:r.GREATER,[H_]:r.NOTEQUAL};function fe(C,T,Y){if(Y?(r.texParameteri(C,r.TEXTURE_WRAP_S,J[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,J[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,J[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,Q[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,Q[T.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==_n||T.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,A(T.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==Ut&&T.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,pe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ut||T.minFilter!==Va&&T.minFilter!==ss||T.type===ai&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===as&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function _e(C,T){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",z));const re=T.source;let ie=m.get(re);ie===void 0&&(ie={},m.set(re,ie));const se=k(T);if(se!==C.__cacheKey){ie[se]===void 0&&(ie[se]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ie[se].usedTimes++;const ye=ie[C.__cacheKey];ye!==void 0&&(ie[C.__cacheKey].usedTimes--,ye.usedTimes===0&&I(T)),C.__cacheKey=se,C.__webglTexture=ie[se].texture}return Y}function Pe(C,T,Y){let re=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(re=r.TEXTURE_3D);const ie=_e(C,T),se=T.source;t.bindTexture(re,C.__webglTexture,r.TEXTURE0+Y);const ye=n.get(se);if(se.version!==ye.__version||ie===!0){t.activeTexture(r.TEXTURE0+Y);const oe=$e.getPrimaries($e.workingColorSpace),me=T.colorSpace===cn?null:$e.getPrimaries(T.colorSpace),U=T.colorSpace===cn||oe===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,U);const ae=M(T)&&S(T.image)===!1;let Z=x(T.image,ae,!1,c);Z=ze(T,Z);const Ae=S(Z)||a,Me=s.convert(T.format,T.colorSpace);let Ee=s.convert(T.type),xe=P(T.internalFormat,Me,Ee,T.colorSpace,T.isVideoTexture);fe(re,T,Ae);let L;const le=T.mipmaps,ne=a&&T.isVideoTexture!==!0,ue=ye.__version===void 0||ie===!0,ce=y(T,Z,Ae);if(T.isDepthTexture)xe=r.DEPTH_COMPONENT,a?T.type===ai?xe=r.DEPTH_COMPONENT32F:T.type===si?xe=r.DEPTH_COMPONENT24:T.type===Oi?xe=r.DEPTH24_STENCIL8:xe=r.DEPTH_COMPONENT16:T.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Fi&&xe===r.DEPTH_COMPONENT&&T.type!==Il&&T.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=si,Ee=s.convert(T.type)),T.format===Lr&&xe===r.DEPTH_COMPONENT&&(xe=r.DEPTH_STENCIL,T.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Oi,Ee=s.convert(T.type))),ue&&(ne?t.texStorage2D(r.TEXTURE_2D,1,xe,Z.width,Z.height):t.texImage2D(r.TEXTURE_2D,0,xe,Z.width,Z.height,0,Me,Ee,null));else if(T.isDataTexture)if(le.length>0&&Ae){ne&&ue&&t.texStorage2D(r.TEXTURE_2D,ce,xe,le[0].width,le[0].height);for(let te=0,Se=le.length;te<Se;te++)L=le[te],ne?t.texSubImage2D(r.TEXTURE_2D,te,0,0,L.width,L.height,Me,Ee,L.data):t.texImage2D(r.TEXTURE_2D,te,xe,L.width,L.height,0,Me,Ee,L.data);T.generateMipmaps=!1}else ne?(ue&&t.texStorage2D(r.TEXTURE_2D,ce,xe,Z.width,Z.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Z.width,Z.height,Me,Ee,Z.data)):t.texImage2D(r.TEXTURE_2D,0,xe,Z.width,Z.height,0,Me,Ee,Z.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ne&&ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,xe,le[0].width,le[0].height,Z.depth);for(let te=0,Se=le.length;te<Se;te++)L=le[te],T.format!==gn?Me!==null?ne?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,L.width,L.height,Z.depth,Me,L.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,xe,L.width,L.height,Z.depth,0,L.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,L.width,L.height,Z.depth,Me,Ee,L.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,xe,L.width,L.height,Z.depth,0,Me,Ee,L.data)}else{ne&&ue&&t.texStorage2D(r.TEXTURE_2D,ce,xe,le[0].width,le[0].height);for(let te=0,Se=le.length;te<Se;te++)L=le[te],T.format!==gn?Me!==null?ne?t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,L.width,L.height,Me,L.data):t.compressedTexImage2D(r.TEXTURE_2D,te,xe,L.width,L.height,0,L.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?t.texSubImage2D(r.TEXTURE_2D,te,0,0,L.width,L.height,Me,Ee,L.data):t.texImage2D(r.TEXTURE_2D,te,xe,L.width,L.height,0,Me,Ee,L.data)}else if(T.isDataArrayTexture)ne?(ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,xe,Z.width,Z.height,Z.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Me,Ee,Z.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,Z.width,Z.height,Z.depth,0,Me,Ee,Z.data);else if(T.isData3DTexture)ne?(ue&&t.texStorage3D(r.TEXTURE_3D,ce,xe,Z.width,Z.height,Z.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Me,Ee,Z.data)):t.texImage3D(r.TEXTURE_3D,0,xe,Z.width,Z.height,Z.depth,0,Me,Ee,Z.data);else if(T.isFramebufferTexture){if(ue)if(ne)t.texStorage2D(r.TEXTURE_2D,ce,xe,Z.width,Z.height);else{let te=Z.width,Se=Z.height;for(let Le=0;Le<ce;Le++)t.texImage2D(r.TEXTURE_2D,Le,xe,te,Se,0,Me,Ee,null),te>>=1,Se>>=1}}else if(le.length>0&&Ae){ne&&ue&&t.texStorage2D(r.TEXTURE_2D,ce,xe,le[0].width,le[0].height);for(let te=0,Se=le.length;te<Se;te++)L=le[te],ne?t.texSubImage2D(r.TEXTURE_2D,te,0,0,Me,Ee,L):t.texImage2D(r.TEXTURE_2D,te,xe,Me,Ee,L);T.generateMipmaps=!1}else ne?(ue&&t.texStorage2D(r.TEXTURE_2D,ce,xe,Z.width,Z.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Ee,Z)):t.texImage2D(r.TEXTURE_2D,0,xe,Me,Ee,Z);b(T,Ae)&&E(re),ye.__version=se.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Xe(C,T,Y){if(T.image.length!==6)return;const re=_e(C,T),ie=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+Y);const se=n.get(ie);if(ie.version!==se.__version||re===!0){t.activeTexture(r.TEXTURE0+Y);const ye=$e.getPrimaries($e.workingColorSpace),oe=T.colorSpace===cn?null:$e.getPrimaries(T.colorSpace),me=T.colorSpace===cn||ye===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const U=T.isCompressedTexture||T.image[0].isCompressedTexture,ae=T.image[0]&&T.image[0].isDataTexture,Z=[];for(let te=0;te<6;te++)!U&&!ae?Z[te]=x(T.image[te],!1,!0,u):Z[te]=ae?T.image[te].image:T.image[te],Z[te]=ze(T,Z[te]);const Ae=Z[0],Me=S(Ae)||a,Ee=s.convert(T.format,T.colorSpace),xe=s.convert(T.type),L=P(T.internalFormat,Ee,xe,T.colorSpace),le=a&&T.isVideoTexture!==!0,ne=se.__version===void 0||re===!0;let ue=y(T,Ae,Me);fe(r.TEXTURE_CUBE_MAP,T,Me);let ce;if(U){le&&ne&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,L,Ae.width,Ae.height);for(let te=0;te<6;te++){ce=Z[te].mipmaps;for(let Se=0;Se<ce.length;Se++){const Le=ce[Se];T.format!==gn?Ee!==null?le?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,0,0,Le.width,Le.height,Ee,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,L,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,0,0,Le.width,Le.height,Ee,xe,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,L,Le.width,Le.height,0,Ee,xe,Le.data)}}}else{ce=T.mipmaps,le&&ne&&(ce.length>0&&ue++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,L,Z[0].width,Z[0].height));for(let te=0;te<6;te++)if(ae){le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Z[te].width,Z[te].height,Ee,xe,Z[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,L,Z[te].width,Z[te].height,0,Ee,xe,Z[te].data);for(let Se=0;Se<ce.length;Se++){const ft=ce[Se].image[te].image;le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,0,0,ft.width,ft.height,Ee,xe,ft.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,L,ft.width,ft.height,0,Ee,xe,ft.data)}}else{le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ee,xe,Z[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,L,Ee,xe,Z[te]);for(let Se=0;Se<ce.length;Se++){const Le=ce[Se];le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,0,0,Ee,xe,Le.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,L,Ee,xe,Le.image[te])}}}b(T,Me)&&E(r.TEXTURE_CUBE_MAP),se.__version=ie.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Te(C,T,Y,re,ie,se){const ye=s.convert(Y.format,Y.colorSpace),oe=s.convert(Y.type),me=P(Y.internalFormat,ye,oe,Y.colorSpace);if(!n.get(T).__hasExternalTextures){const ae=Math.max(1,T.width>>se),Z=Math.max(1,T.height>>se);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,se,me,ae,Z,T.depth,0,ye,oe,null):t.texImage2D(ie,se,me,ae,Z,0,ye,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),ge(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,ie,n.get(Y).__webglTexture,0,Ne(T)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,ie,n.get(Y).__webglTexture,se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function F(C,T,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let re=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(Y||ge(T)){const ie=T.depthTexture;ie&&ie.isDepthTexture&&(ie.type===ai?re=r.DEPTH_COMPONENT32F:ie.type===si&&(re=r.DEPTH_COMPONENT24));const se=Ne(T);ge(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,re,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,se,re,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,re,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const re=Ne(T);Y&&ge(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,T.width,T.height):ge(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const re=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ie=0;ie<re.length;ie++){const se=re[ie],ye=s.convert(se.format,se.colorSpace),oe=s.convert(se.type),me=P(se.internalFormat,ye,oe,se.colorSpace),U=Ne(T);Y&&ge(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,U,me,T.width,T.height):ge(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U,me,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,me,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Je(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const re=n.get(T.depthTexture).__webglTexture,ie=Ne(T);if(T.depthTexture.format===Fi)ge(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0);else if(T.depthTexture.format===Lr)ge(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function be(C){const T=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Je(T.__webglFramebuffer,C)}else if(Y){T.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[re]),T.__webglDepthbuffer[re]=r.createRenderbuffer(),F(T.__webglDepthbuffer[re],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),F(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(C,T,Y){const re=n.get(C);T!==void 0&&Te(re.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&be(C)}function Ce(C){const T=C.texture,Y=n.get(C),re=n.get(T);C.addEventListener("dispose",X),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=T.version,o.memory.textures++);const ie=C.isWebGLCubeRenderTarget===!0,se=C.isWebGLMultipleRenderTargets===!0,ye=S(C)||a;if(ie){Y.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[oe]=[];for(let me=0;me<T.mipmaps.length;me++)Y.__webglFramebuffer[oe][me]=r.createFramebuffer()}else Y.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)Y.__webglFramebuffer[oe]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(se)if(i.drawBuffers){const oe=C.texture;for(let me=0,U=oe.length;me<U;me++){const ae=n.get(oe[me]);ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ge(C)===!1){const oe=se?T:[T];Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let me=0;me<oe.length;me++){const U=oe[me];Y.__webglColorRenderbuffer[me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[me]);const ae=s.convert(U.format,U.colorSpace),Z=s.convert(U.type),Ae=P(U.internalFormat,ae,Z,U.colorSpace,C.isXRRenderTarget===!0),Me=Ne(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,Ae,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,Y.__webglColorRenderbuffer[me])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),F(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),fe(r.TEXTURE_CUBE_MAP,T,ye);for(let oe=0;oe<6;oe++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let me=0;me<T.mipmaps.length;me++)Te(Y.__webglFramebuffer[oe][me],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me);else Te(Y.__webglFramebuffer[oe],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);b(T,ye)&&E(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const oe=C.texture;for(let me=0,U=oe.length;me<U;me++){const ae=oe[me],Z=n.get(ae);t.bindTexture(r.TEXTURE_2D,Z.__webglTexture),fe(r.TEXTURE_2D,ae,ye),Te(Y.__webglFramebuffer,C,ae,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,0),b(ae,ye)&&E(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?oe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,re.__webglTexture),fe(oe,T,ye),a&&T.mipmaps&&T.mipmaps.length>0)for(let me=0;me<T.mipmaps.length;me++)Te(Y.__webglFramebuffer[me],C,T,r.COLOR_ATTACHMENT0,oe,me);else Te(Y.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,oe,0);b(T,ye)&&E(oe),t.unbindTexture()}C.depthBuffer&&be(C)}function je(C){const T=S(C)||a,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,ie=Y.length;re<ie;re++){const se=Y[re];if(b(se,T)){const ye=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,oe=n.get(se).__webglTexture;t.bindTexture(ye,oe),E(ye),t.unbindTexture()}}}function Oe(C){if(a&&C.samples>0&&ge(C)===!1){const T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,re=C.height;let ie=r.COLOR_BUFFER_BIT;const se=[],ye=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=n.get(C),me=C.isWebGLMultipleRenderTargets===!0;if(me)for(let U=0;U<T.length;U++)t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+U,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+U,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let U=0;U<T.length;U++){se.push(r.COLOR_ATTACHMENT0+U),C.depthBuffer&&se.push(ye);const ae=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(ae===!1&&(C.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),me&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,oe.__webglColorRenderbuffer[U]),ae===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ye]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ye])),me){const Z=n.get(T[U]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Z,0)}r.blitFramebuffer(0,0,Y,re,0,0,Y,re,ie,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),me)for(let U=0;U<T.length;U++){t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+U,r.RENDERBUFFER,oe.__webglColorRenderbuffer[U]);const ae=n.get(T[U]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+U,r.TEXTURE_2D,ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ne(C){return Math.min(f,C.samples)}function ge(C){const T=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ye(C){const T=o.render.frame;g.get(C)!==T&&(g.set(C,T),C.update())}function ze(C,T){const Y=C.colorSpace,re=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ol||Y!==qn&&Y!==cn&&($e.getTransfer(Y)===tt?a===!1?e.has("EXT_sRGB")===!0&&re===gn?(C.format=ol,C.minFilter=kt,C.generateMipmaps=!1):T=Kh.sRGBToLinear(T):(re!==gn||ie!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}this.allocateTextureUnit=q,this.resetTextureUnits=N,this.setTexture2D=j,this.setTexture2DArray=D,this.setTexture3D=B,this.setTextureCube=ee,this.rebindTextures=Re,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ge}function Vy(r,e,t){const n=t.isWebGL2;function i(s,o=cn){let a;const l=$e.getTransfer(o);if(s===hi)return r.UNSIGNED_BYTE;if(s===Gh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Wh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===M_)return r.BYTE;if(s===E_)return r.SHORT;if(s===Il)return r.UNSIGNED_SHORT;if(s===Vh)return r.INT;if(s===si)return r.UNSIGNED_INT;if(s===ai)return r.FLOAT;if(s===as)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===T_)return r.ALPHA;if(s===gn)return r.RGBA;if(s===b_)return r.LUMINANCE;if(s===A_)return r.LUMINANCE_ALPHA;if(s===Fi)return r.DEPTH_COMPONENT;if(s===Lr)return r.DEPTH_STENCIL;if(s===ol)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===w_)return r.RED;if(s===Xh)return r.RED_INTEGER;if(s===R_)return r.RG;if(s===qh)return r.RG_INTEGER;if(s===Yh)return r.RGBA_INTEGER;if(s===Ga||s===Wa||s===Xa||s===qa)if(l===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ga)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ga)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Uc||s===Ic||s===Nc||s===Oc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Uc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ic)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Oc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===C_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Fc||s===Bc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Fc)return l===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Bc)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===zc||s===kc||s===Hc||s===Vc||s===Gc||s===Wc||s===Xc||s===qc||s===Yc||s===jc||s===$c||s===Kc||s===Zc||s===Jc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===zc)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kc)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Hc)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vc)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gc)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wc)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xc)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qc)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yc)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jc)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$c)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kc)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zc)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jc)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ya||s===Qc||s===eu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ya)return l===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Qc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===eu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===P_||s===tu||s===nu||s===iu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ya)return a.COMPRESSED_RED_RGTC1_EXT;if(s===tu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===iu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Oi?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Gy extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zs extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wy={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),h=this._getHandJoint(u,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Xy extends Xt{constructor(e,t,n,i,s,o,a,l,u,c){if(c=c!==void 0?c:Fi,c!==Fi&&c!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Fi&&(n=si),n===void 0&&c===Lr&&(n=Oi),super(null,i,s,o,a,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qy extends Vi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,h=null;const v=[],x=[],S=new ln;S.layers.enable(1),S.viewport=new Mt;const M=new ln;M.layers.enable(2),M.viewport=new Mt;const b=[S,M],E=new Gy;E.layers.enable(1),E.layers.enable(2);let P=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let B=v[D];return B===void 0&&(B=new go,v[D]=B),B.getTargetRaySpace()},this.getControllerGrip=function(D){let B=v[D];return B===void 0&&(B=new go,v[D]=B),B.getGripSpace()},this.getHand=function(D){let B=v[D];return B===void 0&&(B=new go,v[D]=B),B.getHandSpace()};function A(D){const B=x.indexOf(D.inputSource);if(B===-1)return;const ee=v[B];ee!==void 0&&(ee.update(D.inputSource,D.frame,u||o),ee.dispatchEvent({type:D.type,data:D.inputSource}))}function z(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",X);for(let D=0;D<v.length;D++){const B=x[D];B!==null&&(x[D]=null,v[D].disconnect(B))}P=null,y=null,e.setRenderTarget(m),p=null,d=null,f=null,i=null,h=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(D){u=D},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",z),i.addEventListener("inputsourceschange",X),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,B),i.updateRenderState({baseLayer:p}),h=new zi(p.framebufferWidth,p.framebufferHeight,{format:gn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let B=null,ee=null,J=null;_.depth&&(J=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=_.stencil?Lr:Fi,ee=_.stencil?Oi:si);const Q={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:s};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(Q),i.updateRenderState({layers:[d]}),h=new zi(d.textureWidth,d.textureHeight,{format:gn,type:hi,depthTexture:new Xy(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const pe=e.properties.get(h);pe.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(a),j.setContext(i),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(D){for(let B=0;B<D.removed.length;B++){const ee=D.removed[B],J=x.indexOf(ee);J>=0&&(x[J]=null,v[J].disconnect(ee))}for(let B=0;B<D.added.length;B++){const ee=D.added[B];let J=x.indexOf(ee);if(J===-1){for(let pe=0;pe<v.length;pe++)if(pe>=x.length){x.push(ee),J=pe;break}else if(x[pe]===null){x[pe]=ee,J=pe;break}if(J===-1)break}const Q=v[J];Q&&Q.connect(ee)}}const G=new V,I=new V;function O(D,B,ee){G.setFromMatrixPosition(B.matrixWorld),I.setFromMatrixPosition(ee.matrixWorld);const J=G.distanceTo(I),Q=B.projectionMatrix.elements,pe=ee.projectionMatrix.elements,fe=Q[14]/(Q[10]-1),_e=Q[14]/(Q[10]+1),Pe=(Q[9]+1)/Q[5],Xe=(Q[9]-1)/Q[5],Te=(Q[8]-1)/Q[0],F=(pe[8]+1)/pe[0],Je=fe*Te,be=fe*F,Re=J/(-Te+F),Ce=Re*-Te;B.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Ce),D.translateZ(Re),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const je=fe+Re,Oe=_e+Re,Ne=Je-Ce,ge=be+(J-Ce),Ye=Pe*_e/Oe*je,ze=Xe*_e/Oe*je;D.projectionMatrix.makePerspective(Ne,ge,Ye,ze,je,Oe),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function R(D,B){B===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(B.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;E.near=M.near=S.near=D.near,E.far=M.far=S.far=D.far,(P!==E.near||y!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,y=E.far);const B=D.parent,ee=E.cameras;R(E,B);for(let J=0;J<ee.length;J++)R(ee[J],B);ee.length===2?O(E,S,M):E.projectionMatrix.copy(S.projectionMatrix),N(D,E,B)};function N(D,B,ee){ee===null?D.matrix.copy(B.matrixWorld):(D.matrix.copy(ee.matrixWorld),D.matrix.invert(),D.matrix.multiply(B.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(B.projectionMatrix),D.projectionMatrixInverse.copy(B.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=ll*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(D){l=D,d!==null&&(d.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)};let q=null;function k(D,B){if(c=B.getViewerPose(u||o),g=B,c!==null){const ee=c.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let J=!1;ee.length!==E.cameras.length&&(E.cameras.length=0,J=!0);for(let Q=0;Q<ee.length;Q++){const pe=ee[Q];let fe=null;if(p!==null)fe=p.getViewport(pe);else{const Pe=f.getViewSubImage(d,pe);fe=Pe.viewport,Q===0&&(e.setRenderTargetTextures(h,Pe.colorTexture,d.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(h))}let _e=b[Q];_e===void 0&&(_e=new ln,_e.layers.enable(Q),_e.viewport=new Mt,b[Q]=_e),_e.matrix.fromArray(pe.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(pe.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(fe.x,fe.y,fe.width,fe.height),Q===0&&(E.matrix.copy(_e.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),J===!0&&E.cameras.push(_e)}}for(let ee=0;ee<v.length;ee++){const J=x[ee],Q=v[ee];J!==null&&Q!==void 0&&Q.update(J,B,u||o)}q&&q(D,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),g=null}const j=new cd;j.setAnimationLoop(k),this.setAnimationLoop=function(D){q=D},this.dispose=function(){}}}function Yy(r,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,sd(r)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,v,x,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ft&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ft&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*x,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ft&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jy(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const S=x.program;n.uniformBlockBinding(v,S)}function u(v,x){let S=i[v.id];S===void 0&&(g(v),S=c(v),i[v.id]=S,v.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(v,M);const b=e.render.frame;s[v.id]!==b&&(d(v),s[v.id]=b)}function c(v){const x=f();v.__bindingPointIndex=x;const S=r.createBuffer(),M=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,M,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],S=v.uniforms,M=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let b=0,E=S.length;b<E;b++){const P=S[b];if(p(P,b,M)===!0){const y=P.__offset,A=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let X=0;X<A.length;X++){const G=A[X],I=_(G);typeof G=="number"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,y+z,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=G.elements[0],P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=G.elements[0],P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=G.elements[0]):(G.toArray(P.__data,z),z+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,y,P.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(v,x,S){const M=v.value;if(S[x]===void 0){if(typeof M=="number")S[x]=M;else{const b=Array.isArray(M)?M:[M],E=[];for(let P=0;P<b.length;P++)E.push(b[P].clone());S[x]=E}return!0}else if(typeof M=="number"){if(S[x]!==M)return S[x]=M,!0}else{const b=Array.isArray(S[x])?S[x]:[S[x]],E=Array.isArray(M)?M:[M];for(let P=0;P<b.length;P++){const y=b[P];if(y.equals(E[P])===!1)return y.copy(E[P]),!0}}return!1}function g(v){const x=v.uniforms;let S=0;const M=16;let b=0;for(let E=0,P=x.length;E<P;E++){const y=x[E],A={boundary:0,storage:0},z=Array.isArray(y.value)?y.value:[y.value];for(let X=0,G=z.length;X<G;X++){const I=z[X],O=_(I);A.boundary+=O.boundary,A.storage+=O.storage}if(y.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=S,E>0){b=S%M;const X=M-b;b!==0&&X-A.boundary<0&&(S+=M-b,y.__offset=S)}S+=A.storage}return b=S%M,b>0&&(S+=M-b),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function h(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:u,dispose:h}}class pd{constructor(e={}){const{canvas:t=q_(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this._useLegacyLights=!1,this.toneMapping=fi,this.toneMappingExposure=1;const x=this;let S=!1,M=0,b=0,E=null,P=-1,y=null;const A=new Mt,z=new Mt;let X=null;const G=new Qe(0);let I=0,O=t.width,R=t.height,N=1,q=null,k=null;const j=new Mt(0,0,O,R),D=new Mt(0,0,O,R);let B=!1;const ee=new ld;let J=!1,Q=!1,pe=null;const fe=new Tt,_e=new He,Pe=new V,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return E===null?N:1}let F=n;function Je(w,H){for(let $=0;$<w.length;$++){const W=w[$],K=t.getContext(W,H);if(K!==null)return K}return null}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ul}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",ue,!1),F===null){const H=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&H.shift(),F=Je(H,w),F===null)throw Je(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let be,Re,Ce,je,Oe,Ne,ge,Ye,ze,C,T,Y,re,ie,se,ye,oe,me,U,ae,Z,Ae,Me,Ee;function xe(){be=new sx(F),Re=new Jv(F,be,e),be.init(Re),Ae=new Vy(F,be,Re),Ce=new ky(F,be,Re),je=new lx(F),Oe=new Ay,Ne=new Hy(F,be,Ce,Oe,Re,Ae,je),ge=new ex(x),Ye=new rx(x),ze=new gg(F,Re),Me=new Kv(F,be,ze,Re),C=new ax(F,ze,je,Me),T=new hx(F,C,ze,je),U=new fx(F,Re,Ne),ye=new Qv(Oe),Y=new by(x,ge,Ye,be,Re,Me,ye),re=new Yy(x,Oe),ie=new Ry,se=new Iy(be,Re),me=new $v(x,ge,Ye,Ce,T,d,l),oe=new zy(x,T,Re),Ee=new jy(F,je,Re,Ce),ae=new Zv(F,be,je,Re),Z=new ox(F,be,je,Re),je.programs=Y.programs,x.capabilities=Re,x.extensions=be,x.properties=Oe,x.renderLists=ie,x.shadowMap=oe,x.state=Ce,x.info=je}xe();const L=new qy(x,F);this.xr=L,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(w){w!==void 0&&(N=w,this.setSize(O,R,!1))},this.getSize=function(w){return w.set(O,R)},this.setSize=function(w,H,$=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,R=H,t.width=Math.floor(w*N),t.height=Math.floor(H*N),$===!0&&(t.style.width=w+"px",t.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(O*N,R*N).floor()},this.setDrawingBufferSize=function(w,H,$){O=w,R=H,N=$,t.width=Math.floor(w*$),t.height=Math.floor(H*$),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(j)},this.setViewport=function(w,H,$,W){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,H,$,W),Ce.viewport(A.copy(j).multiplyScalar(N).floor())},this.getScissor=function(w){return w.copy(D)},this.setScissor=function(w,H,$,W){w.isVector4?D.set(w.x,w.y,w.z,w.w):D.set(w,H,$,W),Ce.scissor(z.copy(D).multiplyScalar(N).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(w){Ce.setScissorTest(B=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){k=w},this.getClearColor=function(w){return w.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(w=!0,H=!0,$=!0){let W=0;if(w){let K=!1;if(E!==null){const ve=E.texture.format;K=ve===Yh||ve===qh||ve===Xh}if(K){const ve=E.texture.type,we=ve===hi||ve===si||ve===Il||ve===Oi||ve===Gh||ve===Wh,Ue=me.getClearColor(),Ie=me.getClearAlpha(),Ve=Ue.r,De=Ue.g,Fe=Ue.b;we?(p[0]=Ve,p[1]=De,p[2]=Fe,p[3]=Ie,F.clearBufferuiv(F.COLOR,0,p)):(g[0]=Ve,g[1]=De,g[2]=Fe,g[3]=Ie,F.clearBufferiv(F.COLOR,0,g))}else W|=F.COLOR_BUFFER_BIT}H&&(W|=F.DEPTH_BUFFER_BIT),$&&(W|=F.STENCIL_BUFFER_BIT),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ie.dispose(),se.dispose(),Oe.dispose(),ge.dispose(),Ye.dispose(),T.dispose(),Me.dispose(),Ee.dispose(),Y.dispose(),L.dispose(),L.removeEventListener("sessionstart",et),L.removeEventListener("sessionend",vn),pe&&(pe.dispose(),pe=null),Ct.stop()};function le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=je.autoReset,H=oe.enabled,$=oe.autoUpdate,W=oe.needsUpdate,K=oe.type;xe(),je.autoReset=w,oe.enabled=H,oe.autoUpdate=$,oe.needsUpdate=W,oe.type=K}function ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ce(w){const H=w.target;H.removeEventListener("dispose",ce),te(H)}function te(w){Se(w),Oe.remove(w)}function Se(w){const H=Oe.get(w).programs;H!==void 0&&(H.forEach(function($){Y.releaseProgram($)}),w.isShaderMaterial&&Y.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,$,W,K,ve){H===null&&(H=Xe);const we=K.isMesh&&K.matrixWorld.determinant()<0,Ue=Ld(w,H,$,W,K);Ce.setMaterial(W,we);let Ie=$.index,Ve=1;if(W.wireframe===!0){if(Ie=C.getWireframeAttribute($),Ie===void 0)return;Ve=2}const De=$.drawRange,Fe=$.attributes.position;let at=De.start*Ve,ct=(De.start+De.count)*Ve;ve!==null&&(at=Math.max(at,ve.start*Ve),ct=Math.min(ct,(ve.start+ve.count)*Ve)),Ie!==null?(at=Math.max(at,0),ct=Math.min(ct,Ie.count)):Fe!=null&&(at=Math.max(at,0),ct=Math.min(ct,Fe.count));const sn=ct-at;if(sn<0||sn===1/0)return;Me.setup(K,W,Ue,$,Ie);let Rn,ht=ae;if(Ie!==null&&(Rn=ze.get(Ie),ht=Z,ht.setIndex(Rn)),K.isMesh)W.wireframe===!0?(Ce.setLineWidth(W.wireframeLinewidth*Te()),ht.setMode(F.LINES)):ht.setMode(F.TRIANGLES);else if(K.isLine){let Ge=W.linewidth;Ge===void 0&&(Ge=1),Ce.setLineWidth(Ge*Te()),K.isLineSegments?ht.setMode(F.LINES):K.isLineLoop?ht.setMode(F.LINE_LOOP):ht.setMode(F.LINE_STRIP)}else K.isPoints?ht.setMode(F.POINTS):K.isSprite&&ht.setMode(F.TRIANGLES);if(K.isInstancedMesh)ht.renderInstances(at,sn,K.count);else if($.isInstancedBufferGeometry){const Ge=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,wa=Math.min($.instanceCount,Ge);ht.renderInstances(at,sn,wa)}else ht.render(at,sn)},this.compile=function(w,H){function $(W,K,ve){W.transparent===!0&&W.side===Mn&&W.forceSinglePass===!1?(W.side=Ft,W.needsUpdate=!0,_s(W,K,ve),W.side=_i,W.needsUpdate=!0,_s(W,K,ve),W.side=Mn):_s(W,K,ve)}m=se.get(w),m.init(),v.push(m),w.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(x._useLegacyLights),w.traverse(function(W){const K=W.material;if(K)if(Array.isArray(K))for(let ve=0;ve<K.length;ve++){const we=K[ve];$(we,w,W)}else $(K,w,W)}),v.pop(),m=null};let Le=null;function ft(w){Le&&Le(w)}function et(){Ct.stop()}function vn(){Ct.start()}const Ct=new cd;Ct.setAnimationLoop(ft),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(w){Le=w,L.setAnimationLoop(w),w===null?Ct.stop():Ct.start()},L.addEventListener("sessionstart",et),L.addEventListener("sessionend",vn),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(H),H=L.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,H,E),m=se.get(w,v.length),m.init(),v.push(m),fe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ee.setFromProjectionMatrix(fe),Q=this.localClippingEnabled,J=ye.init(this.clippingPlanes,Q),_=ie.get(w,h.length),_.init(),h.push(_),jl(w,H,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(q,k),this.info.render.frame++,J===!0&&ye.beginShadows();const $=m.state.shadowsArray;if(oe.render($,w,H),J===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(_,w),m.setupLights(x._useLegacyLights),H.isArrayCamera){const W=H.cameras;for(let K=0,ve=W.length;K<ve;K++){const we=W[K];$l(_,w,we,we.viewport)}}else $l(_,w,H);E!==null&&(Ne.updateMultisampleRenderTarget(E),Ne.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(x,w,H),Me.resetDefaultState(),P=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function jl(w,H,$,W){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ee.intersectsSprite(w)){W&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);const we=T.update(w),Ue=w.material;Ue.visible&&_.push(w,we,Ue,$,Pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ee.intersectsObject(w))){const we=T.update(w),Ue=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Pe.copy(we.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(fe)),Array.isArray(Ue)){const Ie=we.groups;for(let Ve=0,De=Ie.length;Ve<De;Ve++){const Fe=Ie[Ve],at=Ue[Fe.materialIndex];at&&at.visible&&_.push(w,we,at,$,Pe.z,Fe)}}else Ue.visible&&_.push(w,we,Ue,$,Pe.z,null)}}const ve=w.children;for(let we=0,Ue=ve.length;we<Ue;we++)jl(ve[we],H,$,W)}function $l(w,H,$,W){const K=w.opaque,ve=w.transmissive,we=w.transparent;m.setupLightsView($),J===!0&&ye.setGlobalState(x.clippingPlanes,$),ve.length>0&&Pd(K,ve,H,$),W&&Ce.viewport(A.copy(W)),K.length>0&&ms(K,H,$),ve.length>0&&ms(ve,H,$),we.length>0&&ms(we,H,$),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Pd(w,H,$,W){const K=Re.isWebGL2;pe===null&&(pe=new zi(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?as:hi,minFilter:ss,samples:K?4:0})),x.getDrawingBufferSize(_e),K?pe.setSize(_e.x,_e.y):pe.setSize(cl(_e.x),cl(_e.y));const ve=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(G),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const we=x.toneMapping;x.toneMapping=fi,ms(w,$,W),Ne.updateMultisampleRenderTarget(pe),Ne.updateRenderTargetMipmap(pe);let Ue=!1;for(let Ie=0,Ve=H.length;Ie<Ve;Ie++){const De=H[Ie],Fe=De.object,at=De.geometry,ct=De.material,sn=De.group;if(ct.side===Mn&&Fe.layers.test(W.layers)){const Rn=ct.side;ct.side=Ft,ct.needsUpdate=!0,Kl(Fe,$,W,at,ct,sn),ct.side=Rn,ct.needsUpdate=!0,Ue=!0}}Ue===!0&&(Ne.updateMultisampleRenderTarget(pe),Ne.updateRenderTargetMipmap(pe)),x.setRenderTarget(ve),x.setClearColor(G,I),x.toneMapping=we}function ms(w,H,$){const W=H.isScene===!0?H.overrideMaterial:null;for(let K=0,ve=w.length;K<ve;K++){const we=w[K],Ue=we.object,Ie=we.geometry,Ve=W===null?we.material:W,De=we.group;Ue.layers.test($.layers)&&Kl(Ue,H,$,Ie,Ve,De)}}function Kl(w,H,$,W,K,ve){w.onBeforeRender(x,H,$,W,K,ve),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(x,H,$,W,w,ve),K.transparent===!0&&K.side===Mn&&K.forceSinglePass===!1?(K.side=Ft,K.needsUpdate=!0,x.renderBufferDirect($,H,W,K,w,ve),K.side=_i,K.needsUpdate=!0,x.renderBufferDirect($,H,W,K,w,ve),K.side=Mn):x.renderBufferDirect($,H,W,K,w,ve),w.onAfterRender(x,H,$,W,K,ve)}function _s(w,H,$){H.isScene!==!0&&(H=Xe);const W=Oe.get(w),K=m.state.lights,ve=m.state.shadowsArray,we=K.state.version,Ue=Y.getParameters(w,K.state,ve,H,$),Ie=Y.getProgramCacheKey(Ue);let Ve=W.programs;W.environment=w.isMeshStandardMaterial?H.environment:null,W.fog=H.fog,W.envMap=(w.isMeshStandardMaterial?Ye:ge).get(w.envMap||W.environment),Ve===void 0&&(w.addEventListener("dispose",ce),Ve=new Map,W.programs=Ve);let De=Ve.get(Ie);if(De!==void 0){if(W.currentProgram===De&&W.lightsStateVersion===we)return Zl(w,Ue),De}else Ue.uniforms=Y.getUniforms(w),w.onBuild($,Ue,x),w.onBeforeCompile(Ue,x),De=Y.acquireProgram(Ue,Ie),Ve.set(Ie,De),W.uniforms=Ue.uniforms;const Fe=W.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Fe.clippingPlanes=ye.uniform),Zl(w,Ue),W.needsLights=Ud(w),W.lightsStateVersion=we,W.needsLights&&(Fe.ambientLightColor.value=K.state.ambient,Fe.lightProbe.value=K.state.probe,Fe.directionalLights.value=K.state.directional,Fe.directionalLightShadows.value=K.state.directionalShadow,Fe.spotLights.value=K.state.spot,Fe.spotLightShadows.value=K.state.spotShadow,Fe.rectAreaLights.value=K.state.rectArea,Fe.ltc_1.value=K.state.rectAreaLTC1,Fe.ltc_2.value=K.state.rectAreaLTC2,Fe.pointLights.value=K.state.point,Fe.pointLightShadows.value=K.state.pointShadow,Fe.hemisphereLights.value=K.state.hemi,Fe.directionalShadowMap.value=K.state.directionalShadowMap,Fe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Fe.spotShadowMap.value=K.state.spotShadowMap,Fe.spotLightMatrix.value=K.state.spotLightMatrix,Fe.spotLightMap.value=K.state.spotLightMap,Fe.pointShadowMap.value=K.state.pointShadowMap,Fe.pointShadowMatrix.value=K.state.pointShadowMatrix);const at=De.getUniforms(),ct=Ks.seqWithValue(at.seq,Fe);return W.currentProgram=De,W.uniformsList=ct,De}function Zl(w,H){const $=Oe.get(w);$.outputColorSpace=H.outputColorSpace,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Ld(w,H,$,W,K){H.isScene!==!0&&(H=Xe),Ne.resetTextureUnits();const ve=H.fog,we=W.isMeshStandardMaterial?H.environment:null,Ue=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:qn,Ie=(W.isMeshStandardMaterial?Ye:ge).get(W.envMap||we),Ve=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,De=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!$.morphAttributes.position,at=!!$.morphAttributes.normal,ct=!!$.morphAttributes.color;let sn=fi;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(sn=x.toneMapping);const Rn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ht=Rn!==void 0?Rn.length:0,Ge=Oe.get(W),wa=m.state.lights;if(J===!0&&(Q===!0||w!==y)){const Yt=w===y&&W.id===P;ye.setState(W,w,Yt)}let dt=!1;W.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==wa.state.version||Ge.outputColorSpace!==Ue||K.isInstancedMesh&&Ge.instancing===!1||!K.isInstancedMesh&&Ge.instancing===!0||K.isSkinnedMesh&&Ge.skinning===!1||!K.isSkinnedMesh&&Ge.skinning===!0||K.isInstancedMesh&&Ge.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ge.instancingColor===!1&&K.instanceColor!==null||Ge.envMap!==Ie||W.fog===!0&&Ge.fog!==ve||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ye.numPlanes||Ge.numIntersection!==ye.numIntersection)||Ge.vertexAlphas!==Ve||Ge.vertexTangents!==De||Ge.morphTargets!==Fe||Ge.morphNormals!==at||Ge.morphColors!==ct||Ge.toneMapping!==sn||Re.isWebGL2===!0&&Ge.morphTargetsCount!==ht)&&(dt=!0):(dt=!0,Ge.__version=W.version);let yi=Ge.currentProgram;dt===!0&&(yi=_s(W,H,K));let Jl=!1,Or=!1,Ra=!1;const Pt=yi.getUniforms(),Si=Ge.uniforms;if(Ce.useProgram(yi.program)&&(Jl=!0,Or=!0,Ra=!0),W.id!==P&&(P=W.id,Or=!0),Jl||y!==w){Pt.setValue(F,"projectionMatrix",w.projectionMatrix),Pt.setValue(F,"viewMatrix",w.matrixWorldInverse);const Yt=Pt.map.cameraPosition;Yt!==void 0&&Yt.setValue(F,Pe.setFromMatrixPosition(w.matrixWorld)),Re.logarithmicDepthBuffer&&Pt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Pt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Or=!0,Ra=!0)}if(K.isSkinnedMesh){Pt.setOptional(F,K,"bindMatrix"),Pt.setOptional(F,K,"bindMatrixInverse");const Yt=K.skeleton;Yt&&(Re.floatVertexTextures?(Yt.boneTexture===null&&Yt.computeBoneTexture(),Pt.setValue(F,"boneTexture",Yt.boneTexture,Ne),Pt.setValue(F,"boneTextureSize",Yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ca=$.morphAttributes;if((Ca.position!==void 0||Ca.normal!==void 0||Ca.color!==void 0&&Re.isWebGL2===!0)&&U.update(K,$,yi),(Or||Ge.receiveShadow!==K.receiveShadow)&&(Ge.receiveShadow=K.receiveShadow,Pt.setValue(F,"receiveShadow",K.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Si.envMap.value=Ie,Si.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Or&&(Pt.setValue(F,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&Dd(Si,Ra),ve&&W.fog===!0&&re.refreshFogUniforms(Si,ve),re.refreshMaterialUniforms(Si,W,N,R,pe),Ks.upload(F,Ge.uniformsList,Si,Ne)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ks.upload(F,Ge.uniformsList,Si,Ne),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Pt.setValue(F,"center",K.center),Pt.setValue(F,"modelViewMatrix",K.modelViewMatrix),Pt.setValue(F,"normalMatrix",K.normalMatrix),Pt.setValue(F,"modelMatrix",K.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Yt=W.uniformsGroups;for(let Pa=0,Id=Yt.length;Pa<Id;Pa++)if(Re.isWebGL2){const Ql=Yt[Pa];Ee.update(Ql,yi),Ee.bind(Ql,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function Dd(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Ud(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,H,$){Oe.get(w.texture).__webglTexture=H,Oe.get(w.depthTexture).__webglTexture=$;const W=Oe.get(w);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=$===void 0,W.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,H){const $=Oe.get(w);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,$=0){E=w,M=H,b=$;let W=!0,K=null,ve=!1,we=!1;if(w){const Ie=Oe.get(w);Ie.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(F.FRAMEBUFFER,null),W=!1):Ie.__webglFramebuffer===void 0?Ne.setupRenderTarget(w):Ie.__hasExternalTextures&&Ne.rebindTextures(w,Oe.get(w.texture).__webglTexture,Oe.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(we=!0);const De=Oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[H])?K=De[H][$]:K=De[H],ve=!0):Re.isWebGL2&&w.samples>0&&Ne.useMultisampledRTT(w)===!1?K=Oe.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?K=De[$]:K=De,A.copy(w.viewport),z.copy(w.scissor),X=w.scissorTest}else A.copy(j).multiplyScalar(N).floor(),z.copy(D).multiplyScalar(N).floor(),X=B;if(Ce.bindFramebuffer(F.FRAMEBUFFER,K)&&Re.drawBuffers&&W&&Ce.drawBuffers(w,K),Ce.viewport(A),Ce.scissor(z),Ce.setScissorTest(X),ve){const Ie=Oe.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ie.__webglTexture,$)}else if(we){const Ie=Oe.get(w.texture),Ve=H||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.__webglTexture,$||0,Ve)}P=-1},this.readRenderTargetPixels=function(w,H,$,W,K,ve,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Ue=Ue[we]),Ue){Ce.bindFramebuffer(F.FRAMEBUFFER,Ue);try{const Ie=w.texture,Ve=Ie.format,De=Ie.type;if(Ve!==gn&&Ae.convert(Ve)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=De===as&&(be.has("EXT_color_buffer_half_float")||Re.isWebGL2&&be.has("EXT_color_buffer_float"));if(De!==hi&&Ae.convert(De)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===ai&&(Re.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-W&&$>=0&&$<=w.height-K&&F.readPixels(H,$,W,K,Ae.convert(Ve),Ae.convert(De),ve)}finally{const Ie=E!==null?Oe.get(E).__webglFramebuffer:null;Ce.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(w,H,$=0){const W=Math.pow(2,-$),K=Math.floor(H.image.width*W),ve=Math.floor(H.image.height*W);Ne.setTexture2D(H,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,w.x,w.y,K,ve),Ce.unbindTexture()},this.copyTextureToTexture=function(w,H,$,W=0){const K=H.image.width,ve=H.image.height,we=Ae.convert($.format),Ue=Ae.convert($.type);Ne.setTexture2D($,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,$.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,$.unpackAlignment),H.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,w.x,w.y,K,ve,we,Ue,H.image.data):H.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,w.x,w.y,H.mipmaps[0].width,H.mipmaps[0].height,we,H.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,W,w.x,w.y,we,Ue,H.image),W===0&&$.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,H,$,W,K=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=w.max.x-w.min.x+1,we=w.max.y-w.min.y+1,Ue=w.max.z-w.min.z+1,Ie=Ae.convert(W.format),Ve=Ae.convert(W.type);let De;if(W.isData3DTexture)Ne.setTexture3D(W,0),De=F.TEXTURE_3D;else if(W.isDataArrayTexture)Ne.setTexture2DArray(W,0),De=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Fe=F.getParameter(F.UNPACK_ROW_LENGTH),at=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ct=F.getParameter(F.UNPACK_SKIP_PIXELS),sn=F.getParameter(F.UNPACK_SKIP_ROWS),Rn=F.getParameter(F.UNPACK_SKIP_IMAGES),ht=$.isCompressedTexture?$.mipmaps[0]:$.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ht.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,w.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,w.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,w.min.z),$.isDataTexture||$.isData3DTexture?F.texSubImage3D(De,K,H.x,H.y,H.z,ve,we,Ue,Ie,Ve,ht.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(De,K,H.x,H.y,H.z,ve,we,Ue,Ie,ht.data)):F.texSubImage3D(De,K,H.x,H.y,H.z,ve,we,Ue,Ie,Ve,ht),F.pixelStorei(F.UNPACK_ROW_LENGTH,Fe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,at),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ct),F.pixelStorei(F.UNPACK_SKIP_ROWS,sn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Rn),K===0&&W.generateMipmaps&&F.generateMipmap(De),Ce.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Ne.setTextureCube(w,0):w.isData3DTexture?Ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ne.setTexture2DArray(w,0):Ne.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){M=0,b=0,E=null,Ce.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Nl?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===Sa?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===St?Bi:jh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Bi?St:qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $y extends pd{}$y.prototype.isWebGL1Renderer=!0;class Ky extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Bl extends xi{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new V,d=new V,p=[],g=[],_=[],m=[];for(let h=0;h<=n;h++){const v=[],x=h/n;let S=0;h===0&&o===0?S=.5/t:h===n&&l===Math.PI&&(S=-.5/t);for(let M=0;M<=t;M++){const b=M/t;f.x=-e*Math.cos(i+b*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(i+b*s)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(b+S,1-x),v.push(u++)}c.push(v)}for(let h=0;h<n;h++)for(let v=0;v<t;v++){const x=c[h][v+1],S=c[h][v],M=c[h+1][v],b=c[h+1][v+1];(h!==0||o>0)&&p.push(x,S,b),(h!==n-1||l<Math.PI)&&p.push(S,M,b)}this.setIndex(p),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(_,3)),this.setAttribute("uv",new An(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xu extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const qu={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Zy{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){a++,s===!1&&i.onStart!==void 0&&i.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,i.onProgress!==void 0&&i.onProgress(c,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const Jy=new Zy;class zl{constructor(e){this.manager=e!==void 0?e:Jy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}zl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Qy extends zl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qu.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=os("img");function l(){c(),qu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class eS extends zl{constructor(e){super(e)}load(e,t,n,i){const s=new Xt,o=new Qy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Yu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);var tS=`precision highp float;
attribute vec2 uv;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec3 vPosition, vNormal;
varying vec2 vUV;
varying vec2 ovUV;
uniform float t, q, xi, eta, alpha, lambda, beta, n, omega, scale, translation;
uniform float stereo, rotation, Qinv, posClip, negClip;
#define PI 3.141592653589

float safepow(float x, float n) {
   return pow(abs(x), n);
}
float sqr(float x) {
   return x * x;
}

float intpow(float x, float n) {
   return pow(abs(x), n) * (mod(n, 2.0) == 0.0 ? 1.0 : sign(x));
}

vec3 f(vec2 uv) {
   uv.x = min(PI * 0.5 - 1e-5, uv.x);
   uv.x = max(-PI * 0.5 + 1e-5, uv.x);
   float theta = uv.x;
   float phi = uv.y;
   float cphi = cos(phi);
   float sphi = sin(phi);
   float sth = sin(theta);
   float cosnth = intpow(cos(theta), n);
   float h = omega * sth / cosnth;

   float p = 1.0 - abs(q * t);
   float kappa = mix(0.0, 0.5 * (n - 1.0) / n, stereo);

   float x, y, z;
   bool eq4 = abs(t) < Qinv - 1e-5;
   if (eq4) {
      x = t * cphi + p * sin((n - 1.0) * phi) - h * sphi;
      y = t * sphi + p * cos((n - 1.0) * phi) + h * cphi;
      z = h * sin(n * phi) - (t / n) * cos(n * phi) - q * t * h;
   } else {
      x = (t * (1.0 - lambda + lambda * cosnth) * cphi - lambda * omega * sth * sphi) / cosnth;
      y = (t * (1.0 - lambda + lambda * cosnth) * sphi + lambda * omega * sth * cphi) / cosnth;
      z = lambda * (omega * sth * (sin(n * phi) - q * t) / cosnth - (t / n) * cos(n * phi)) - (1.0 - lambda) * pow(eta, 1.0 + kappa) * t * pow(abs(t), 2.0 * kappa) * sth / sqr(cosnth);
   }
   
   float xiex2y2 = xi + eta * (x * x + y * y);
   float xp = x / safepow(xiex2y2, kappa);
   float yp = y / safepow(xiex2y2, kappa);
   float zp = z / mix(1.0, xiex2y2, stereo);

   float gamma = mix(1.0, 2.0 * sqrt(alpha * beta), stereo);
   float bxpyp = beta * (xp * xp + yp * yp);
   float egz = exp(gamma * zp);
   float xpp = xp * mix(1.0, egz / (alpha + bxpyp), stereo);
   float ypp = yp * mix(1.0, egz / (alpha + bxpyp), stereo);
   float zpp = mix(zp, (alpha - bxpyp) / (alpha + bxpyp) * egz / gamma - (alpha - beta) / (alpha + beta) / gamma, stereo);

   vec3 pos = vec3(xpp, ypp, zpp).xzy * vec3(1, 1, -1) * scale  + vec3(0.0, translation, 0.0);

   float cr = cos(rotation);
   float sr = sin(rotation);
   mat2 R = mat2(cr, sr, -sr, cr);
   pos.xz = R * pos.xz;
   return pos;
}

void main () {
   vec2 cuv = vec2(mix(-PI * .5, PI * .5, uv.y), mix(-PI, PI, uv.x));
   vUV = cuv * vec2(cuv.x > 0.0 ? posClip : negClip, 1.0);
   ovUV = uv;
   vPosition = f(vUV);
   float dx = 2e-2;
   vec3 pu = f(vUV + vec2(dx, 0));
   vec3 pv = f(vUV + vec2(0, dx));
   vec3 dpdu = pu - vPosition;
   vec3 dpdv = pv - vPosition;
   vNormal = normalize(cross(dpdu, dpdv));

   gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1);
}`,nS=`#extension GL_OES_standard_derivatives : enable
precision highp float;

#ifndef SAMPLER_FNC
#if __VERSION__ >= 300
#define SAMPLER_FNC(TEX, UV) texture(TEX, UV)
#else
#define SAMPLER_FNC(TEX, UV) texture2D(TEX, UV)
#endif
#endif

#ifndef SAMPLER_TYPE
#define SAMPLER_TYPE sampler2D
#endif

#ifndef SPHEREMAP_TYPE
#define SPHEREMAP_TYPE vec4
#endif

#ifndef SPHEREMAP_SAMPLER_FNC
#define SPHEREMAP_SAMPLER_FNC(TEX, UV) SAMPLER_FNC(TEX, UV)
#endif

#ifndef FNC_SPHEREMAP
#define FNC_SPHEREMAP
vec2 sphereMap(const in vec3 normal, const in vec3 eye) {
    vec3 r = reflect(-eye, normal);
    r.z += 1.;
    float m = 2. * length(r);
    return r.xy / m + .5;
}

SPHEREMAP_TYPE sphereMap(in SAMPLER_TYPE tex, const in vec3 normal, const in vec3 eye) {
    return SPHEREMAP_SAMPLER_FNC(tex, sphereMap(normal, eye) );
}
#endif

varying vec3 vNormal;
uniform sampler2D matcap;
uniform sampler2D matcap2;
uniform sampler2D texture;
uniform sampler2D texture2;
uniform vec3 eye;

varying vec2 vUV;
varying vec2 ovUV;

void main () {
    

    vec4 matcap = sphereMap(matcap, eye * .1, vNormal); 
    vec4 matcap2 = sphereMap(matcap2, eye * .1, vNormal); 

    vec4 tex = texture2D(texture, ovUV );
    vec4 tex2 = texture2D(texture2, ovUV );

    

    vec4 front = tex.rgba;
    vec4 back = tex2.rgba;
    gl_FragColor = vec4(gl_FrontFacing ? front : back); 
    
}`,iS=`precision highp float;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv; 

void main() {
    vUv = uv; 
    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition; 
}`,rS=`#extension GL_OES_standard_derivatives : enable
precision highp float;

varying vec2 vUv;

uniform sampler2D texture;
uniform sampler2D texture2;
uniform float textureTransitionAmount;

void main() {
    vec4 tex = texture2D(texture, vUv );
    vec4 tex2 = texture2D(texture2, vec2(1. - vUv.x, 1. - vUv.y) );
    
    
    gl_FragColor = mix(tex, tex2, textureTransitionAmount); 
}`;const ju={type:"change"},vo={type:"start"},$u={type:"end"},ks=new Qh,Ku=new Qn,sS=Math.cos(70*X_.DEG2RAD);class aS extends Vi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",T),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",T),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ju),n.update(),s=i.NONE},this.update=(function(){const U=new V,ae=new ki().setFromUnitVectors(e.up,new V(0,1,0)),Z=ae.clone().invert(),Ae=new V,Me=new ki,Ee=new V,xe=2*Math.PI;return function(le=null){const ne=n.object.position;U.copy(ne).sub(n.target),U.applyQuaternion(ae),a.setFromVector3(U),n.autoRotate&&s===i.NONE&&z(y(le)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ue=n.minAzimuthAngle,ce=n.maxAzimuthAngle;isFinite(ue)&&isFinite(ce)&&(ue<-Math.PI?ue+=xe:ue>Math.PI&&(ue-=xe),ce<-Math.PI?ce+=xe:ce>Math.PI&&(ce-=xe),ue<=ce?a.theta=Math.max(ue,Math.min(ce,a.theta)):a.theta=a.theta>(ue+ce)/2?Math.max(ue,a.theta):Math.min(ce,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),n.zoomToCursor&&b||n.object.isOrthographicCamera?a.radius=k(a.radius):a.radius=k(a.radius*u),U.setFromSpherical(a),U.applyQuaternion(Z),ne.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let te=!1;if(n.zoomToCursor&&b){let Se=null;if(n.object.isPerspectiveCamera){const Le=U.length();Se=k(Le*u);const ft=Le-Se;n.object.position.addScaledVector(S,ft),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Le=new V(M.x,M.y,0);Le.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),te=!0;const ft=new V(M.x,M.y,0);ft.unproject(n.object),n.object.position.sub(ft).add(Le),n.object.updateMatrixWorld(),Se=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Se!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Se).add(n.object.position):(ks.origin.copy(n.object.position),ks.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ks.direction))<sS?e.lookAt(n.target):(Ku.setFromNormalAndCoplanarPoint(n.object.up,n.target),ks.intersectPlane(Ku,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),te=!0);return u=1,b=!1,te||Ae.distanceToSquared(n.object.position)>o||8*(1-Me.dot(n.object.quaternion))>o||Ee.distanceToSquared(n.target)>0?(n.dispatchEvent(ju),Ae.copy(n.object.position),Me.copy(n.object.quaternion),Ee.copy(n.target),te=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ie),n.domElement.removeEventListener("pointerdown",Oe),n.domElement.removeEventListener("pointercancel",ge),n.domElement.removeEventListener("wheel",C),n.domElement.removeEventListener("pointermove",Ne),n.domElement.removeEventListener("pointerup",ge),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",T),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Yu,l=new Yu;let u=1;const c=new V,f=new He,d=new He,p=new He,g=new He,_=new He,m=new He,h=new He,v=new He,x=new He,S=new V,M=new He;let b=!1;const E=[],P={};function y(U){return U!==null?2*Math.PI/60*n.autoRotateSpeed*U:2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function z(U){l.theta-=U}function X(U){l.phi-=U}const G=(function(){const U=new V;return function(Z,Ae){U.setFromMatrixColumn(Ae,0),U.multiplyScalar(-Z),c.add(U)}})(),I=(function(){const U=new V;return function(Z,Ae){n.screenSpacePanning===!0?U.setFromMatrixColumn(Ae,1):(U.setFromMatrixColumn(Ae,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(Z),c.add(U)}})(),O=(function(){const U=new V;return function(Z,Ae){const Me=n.domElement;if(n.object.isPerspectiveCamera){const Ee=n.object.position;U.copy(Ee).sub(n.target);let xe=U.length();xe*=Math.tan(n.object.fov/2*Math.PI/180),G(2*Z*xe/Me.clientHeight,n.object.matrix),I(2*Ae*xe/Me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G(Z*(n.object.right-n.object.left)/n.object.zoom/Me.clientWidth,n.object.matrix),I(Ae*(n.object.top-n.object.bottom)/n.object.zoom/Me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function R(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(U){if(!n.zoomToCursor)return;b=!0;const ae=n.domElement.getBoundingClientRect(),Z=U.clientX-ae.left,Ae=U.clientY-ae.top,Me=ae.width,Ee=ae.height;M.x=Z/Me*2-1,M.y=-(Ae/Ee)*2+1,S.set(M.x,M.y,1).unproject(n.object).sub(n.object.position).normalize()}function k(U){return Math.max(n.minDistance,Math.min(n.maxDistance,U))}function j(U){f.set(U.clientX,U.clientY)}function D(U){q(U),h.set(U.clientX,U.clientY)}function B(U){g.set(U.clientX,U.clientY)}function ee(U){d.set(U.clientX,U.clientY),p.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ae=n.domElement;z(2*Math.PI*p.x/ae.clientHeight),X(2*Math.PI*p.y/ae.clientHeight),f.copy(d),n.update()}function J(U){v.set(U.clientX,U.clientY),x.subVectors(v,h),x.y>0?R(A()):x.y<0&&N(A()),h.copy(v),n.update()}function Q(U){_.set(U.clientX,U.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),O(m.x,m.y),g.copy(_),n.update()}function pe(U){q(U),U.deltaY<0?N(A()):U.deltaY>0&&R(A()),n.update()}function fe(U){let ae=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),ae=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),ae=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),ae=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),ae=!0;break}ae&&(U.preventDefault(),n.update())}function _e(){if(E.length===1)f.set(E[0].pageX,E[0].pageY);else{const U=.5*(E[0].pageX+E[1].pageX),ae=.5*(E[0].pageY+E[1].pageY);f.set(U,ae)}}function Pe(){if(E.length===1)g.set(E[0].pageX,E[0].pageY);else{const U=.5*(E[0].pageX+E[1].pageX),ae=.5*(E[0].pageY+E[1].pageY);g.set(U,ae)}}function Xe(){const U=E[0].pageX-E[1].pageX,ae=E[0].pageY-E[1].pageY,Z=Math.sqrt(U*U+ae*ae);h.set(0,Z)}function Te(){n.enableZoom&&Xe(),n.enablePan&&Pe()}function F(){n.enableZoom&&Xe(),n.enableRotate&&_e()}function Je(U){if(E.length==1)d.set(U.pageX,U.pageY);else{const Z=me(U),Ae=.5*(U.pageX+Z.x),Me=.5*(U.pageY+Z.y);d.set(Ae,Me)}p.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ae=n.domElement;z(2*Math.PI*p.x/ae.clientHeight),X(2*Math.PI*p.y/ae.clientHeight),f.copy(d)}function be(U){if(E.length===1)_.set(U.pageX,U.pageY);else{const ae=me(U),Z=.5*(U.pageX+ae.x),Ae=.5*(U.pageY+ae.y);_.set(Z,Ae)}m.subVectors(_,g).multiplyScalar(n.panSpeed),O(m.x,m.y),g.copy(_)}function Re(U){const ae=me(U),Z=U.pageX-ae.x,Ae=U.pageY-ae.y,Me=Math.sqrt(Z*Z+Ae*Ae);v.set(0,Me),x.set(0,Math.pow(v.y/h.y,n.zoomSpeed)),R(x.y),h.copy(v)}function Ce(U){n.enableZoom&&Re(U),n.enablePan&&be(U)}function je(U){n.enableZoom&&Re(U),n.enableRotate&&Je(U)}function Oe(U){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",Ne),n.domElement.addEventListener("pointerup",ge)),se(U),U.pointerType==="touch"?Y(U):Ye(U))}function Ne(U){n.enabled!==!1&&(U.pointerType==="touch"?re(U):ze(U))}function ge(U){ye(U),E.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",Ne),n.domElement.removeEventListener("pointerup",ge)),n.dispatchEvent($u),s=i.NONE}function Ye(U){let ae;switch(U.button){case 0:ae=n.mouseButtons.LEFT;break;case 1:ae=n.mouseButtons.MIDDLE;break;case 2:ae=n.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case Xi.DOLLY:if(n.enableZoom===!1)return;D(U),s=i.DOLLY;break;case Xi.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;B(U),s=i.PAN}else{if(n.enableRotate===!1)return;j(U),s=i.ROTATE}break;case Xi.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;j(U),s=i.ROTATE}else{if(n.enablePan===!1)return;B(U),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(vo)}function ze(U){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ee(U);break;case i.DOLLY:if(n.enableZoom===!1)return;J(U);break;case i.PAN:if(n.enablePan===!1)return;Q(U);break}}function C(U){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(U.preventDefault(),n.dispatchEvent(vo),pe(U),n.dispatchEvent($u))}function T(U){n.enabled===!1||n.enablePan===!1||fe(U)}function Y(U){switch(oe(U),E.length){case 1:switch(n.touches.ONE){case qi.ROTATE:if(n.enableRotate===!1)return;_e(),s=i.TOUCH_ROTATE;break;case qi.PAN:if(n.enablePan===!1)return;Pe(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case qi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(),s=i.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;F(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(vo)}function re(U){switch(oe(U),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Je(U),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;be(U),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(U),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;je(U),n.update();break;default:s=i.NONE}}function ie(U){n.enabled!==!1&&U.preventDefault()}function se(U){E.push(U)}function ye(U){delete P[U.pointerId];for(let ae=0;ae<E.length;ae++)if(E[ae].pointerId==U.pointerId){E.splice(ae,1);return}}function oe(U){let ae=P[U.pointerId];ae===void 0&&(ae=new He,P[U.pointerId]=ae),ae.set(U.pageX,U.pageY)}function me(U){const ae=U.pointerId===E[0].pointerId?E[1]:E[0];return P[ae.pointerId]}n.domElement.addEventListener("contextmenu",ie),n.domElement.addEventListener("pointerdown",Oe),n.domElement.addEventListener("pointercancel",ge),n.domElement.addEventListener("wheel",C,{passive:!1}),this.update()}}var xo,Zu;function oS(){if(Zu)return xo;Zu=1;function r(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}return xo=r,xo}var lS=oS();const cS=_a(lS);var yo,Ju;function uS(){if(Ju)return yo;Ju=1,yo=r;function r(e,t,n,i){var s=t[0],o=t[1],a=t[2];return e[0]=s+i*(n[0]-s),e[1]=o+i*(n[1]-o),e[2]=a+i*(n[2]-a),e}return yo}var fS=uS();const hS=_a(fS);var So,Qu;function dS(){if(Qu)return So;Qu=1,So=r;function r(e,t,n,i){var s=t[0],o=t[1],a=t[2],l=t[3];return e[0]=s+i*(n[0]-s),e[1]=o+i*(n[1]-o),e[2]=a+i*(n[2]-a),e[3]=l+i*(n[3]-l),e}return So}var pS=dS();const mS=_a(pS),_S=(r,e)=>{var t=Object.keys(r);function n(u,c,f){switch(u.length){case void 0:return(1-f)*u+f*c;case 2:return vec2Lerp([],u,c,f);case 3:return hS([],u,c,f);case 4:return mS([],u,c,f)}}var i={},s={};function o(u){for(var c,f=!1,d=0;d<t.length;d++){var p=t[d],g=r[p],_=Array.isArray(g)?g:g.steps;s[p]=!1;for(var m=_[0],h=0;h<_.length;h++){var v=_[h];if(u<v.t)break;m=v}m===v?c=m.value:c=(g.interpolate||n)(m.value,v.value,(v.ease||cS)((u-m.t)/(v.t-m.t))),c!==i[p]&&(s[p]=!0,f=!0,i[p]=c)}return f}var a=0;o(a);const l={setPosition:function(u){a=u;var c=o(u);return c&&e&&e(i,s),l},getPosition:function(){return a},getState:function(){return i}};return l},gS=r=>{const e=new Ky,t=new ln(40,window.innerWidth/window.innerHeight,1,50);e.background=new Qe(1184274);const n=new pd({antialias:!0}),i=window.devicePixelRatio?window.devicePixelRatio:1;n.setPixelRatio(Math.min(i,1.5)),n.setSize(window.innerWidth,window.innerHeight),r.appendChild(n.domElement);const s=window.innerWidth<768?200:400,o=new Ta(1,1,s,s),a=new aS(t,n.domElement);a.minPolarAngle=.7,a.maxPolarAngle=1.75,a.enableDamping=!0,a.enableZoom=!1,a.enablePan=!1,a.autoRotate=!0,a.rotateSpeed=1.5;let l=!1,u,c=-1;const f=[y("/textures/_eclipse_new13.jpg"),y("/textures/_texture_3_8.jpg"),y("/textures/_texture_5.jpg"),y("/textures/4_4_ethereal.jpg")],d=2/3,p=0,g=_S({n:[{t:p+0,value:2}],posClip:[{t:p+0,value:1}],negClip:[{t:p+0,value:1}],stereo:[{t:p+.5,value:1}],rotation:[{t:p-3,value:0},{t:p+0,value:0},{t:p+5.5,value:0},{t:p+9,value:0}],translation:[{t:p+0,value:0},{t:p+.5,value:1.2},{t:p+2,value:1.2},{t:p+4,value:1.2},{t:p+5.5,value:1.2},{t:p+6,value:0}],scale:[{t:p+0,value:1.5/Math.pow(d,.5)},{t:p+.9,value:.55},{t:p+1.7,value:.65},{t:p+4.3,value:.65},{t:p+5.1,value:.6},{t:p+6,value:1.5/Math.pow(d,.5)}],t:[{t:p+0,value:1/d},{t:p+2,value:1/d},{t:p+4,value:-1/d},{t:p+6,value:-1/d}],alpha:[{t:p+0,value:1e-5},{t:p+1,value:1},{t:p+5,value:1},{t:p+6,value:1e-5}],beta:[{t:p+0,value:1},{t:p+1,value:1/20},{t:p+5,value:1/20},{t:p+6,value:1}],xi:[{t:p+0,value:0},{t:p+2,value:1},{t:p+4,value:1},{t:p+5,value:0},{t:p+6,value:0}],lambda:[{t:p+0,value:0},{t:p+2,value:1},{t:p+4,value:1},{t:p+6,value:0}],q:[{t:p+0,value:d}],eta:[{t:p+0,value:1}],omega:[{t:p+0,value:2}],Qinv:[{t:p+0,value:1/d}]},M),_=g.getState(),m=new Xu({uniforms:{t:{value:_.t},q:{value:_.q},xi:{value:_.xi},eta:{value:_.eta},alpha:{value:_.alpha},lambda:{value:_.lambda},beta:{value:_.beta},n:{value:_.n},omega:{value:_.omega},scale:{value:_.scale},translation:{value:_.translation},stereo:{value:_.stereo},rotation:{value:_.rotation},Qinv:{value:_.Qinv},posClip:{value:_.posClip},negClip:{value:_.negClip},eye:{value:t.position},texture:{type:"sampler2D",value:""},texture2:{type:"sampler2D",value:""}},vertexShader:tS,fragmentShader:nS,side:Mn}),h=new Tn(o,m);e.add(h);const v=new Xu({uniforms:{texture:{type:"sampler2D",value:""},texture2:{type:"sampler2D",value:""},textureTransitionAmount:{type:"float",value:0}},vertexShader:iS,fragmentShader:rS,side:Ft}),x=new Bl(5,50,50),S=new Tn(x,v);e.add(S),P();function M(I,O){for(const R in O)O[R]&&(m.uniforms[R].value=I[R])}const b={position:0};function E(){u=ri.to(b,{duration:12,position:6,ease:"power1.inOut",yoyo:!0,repeat:-1,onRepeat:()=>{P()},onUpdate:()=>{const I=ri.utils.clamp(0,1,(b.position-1.75)/1.75);v.uniforms.textureTransitionAmount.value=I}}),G()}function P(){c++;const I=c%f.length,O=(c+1)%f.length,R=f[I],N=f[O];R.minFilter=kt,N.minFilter=kt,c===0?(m.uniforms.texture.value=v.uniforms.texture.value=R,m.uniforms.texture2.value=v.uniforms.texture2.value=N):I%2===0?m.uniforms.texture2.value=v.uniforms.texture2.value=N:m.uniforms.texture.value=v.uniforms.texture.value=N}function y(I){return new eS().load(I)}function A(){l||(g.setPosition(b.position),m.uniforms.eye.value=t.position,a.update(),requestAnimationFrame(A),n.render(e,t))}function z(){l=!0,u&&u.pause()}function X(){l=!1,u&&u.resume()}window.addEventListener("resize",G,!1),document.addEventListener("focus",()=>{X()}),document.addEventListener("blur",()=>{z()});function G(){t.position.set(0,3,11),window.innerWidth>768&&t.position.set(0,3,7),t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}return A(),E(),self};var vS=Ir("<nav><!></nav>");function xS(r,e){cs(e,!0);const t=()=>dl(Dl,"$page",n),[n,i]=hl();let s,o=!0,a=xt(void 0),l=xt(!1);Gn(()=>{qe(a,!0)});function u(){if(!s||!o)return;const g=s.querySelector(`[href="${e.activeRoute}"`);if(g){const m=Array.from(g.parentNode.children).indexOf(g)<(Rr.length-1)/2?"end":"start";g.scrollIntoView({behavior:"instant",inline:m})}o=!1}function c(){qe(l,!0),setTimeout(()=>{qe(l,!1)},800)}Gn(()=>{e.activeRoute&&u()});var f=vS();let d;var p=zt(f);lp(p,{children:(g,_)=>{var m=Sr(),h=oi(m);Nf(h,17,()=>Rr,Of,(v,x)=>{{let S=kn(()=>t().url.pathname===de(x).link);ko(v,{get disabled(){return de(l)},get active(){return de(S)},get target(){return de(x).target},get link(){return de(x).link},$$events:{click:c},children:(M,b)=>{Fo();var E=Bo();pr(()=>Js(E,de(x).label)),Ot(M,E)},$$slots:{default:!0}})}}),Ot(g,m)}}),Dt(f),ei(f,g=>s=g,()=>s),pr(()=>d=Qs(f,1,"mobile-navigation svelte-16yfqh6",null,d,{in:de(a),transparent:e.transparent,hide:e.hide})),Ot(r,f),us(),i()}function yS(r){const e=r-1;return e*e*e+1}function ef(r){const e=typeof r=="string"&&r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[r,"px"]}function tf(r,{delay:e=0,duration:t=400,easing:n=yS,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(r),l=+a.opacity,u=a.transform==="none"?"":a.transform,c=l*(1-o),[f,d]=ef(i),[p,g]=ef(s);return{delay:e,duration:t,easing:n,css:(_,m)=>`
			transform: ${u} translate(${(1-_)*f}${d}, ${(1-_)*p}${g});
			opacity: ${l-c*m}`}}function nf(r){const e=r-1;return e*e*e+1}var ot=(r=>(r.EXPANDED="expanded",r.COLLAPSED="collapsed",r.ISLAND="island",r))(ot||{}),SS=Ir("<!> <!>",1);function MS(r,e){const t=mr(e,"enabled",3,!0);var n=SS(),i=oi(n);ma(i,()=>e.children??zn);var s=Fn(i,2);{var o=a=>{var l=Sr(),u=oi(l);_p(u,()=>Ff(()=>import("./DNYz0DpC.js").then(c=>c.V),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),null,(c,f)=>{var d=kn(()=>{var{default:m}=de(f);return{VisualEditing:m}}),p=kn(()=>de(d).VisualEditing),g=Sr(),_=oi(g);pp(_,()=>de(p),(m,h)=>{h(m,{get components(){return e.components},get plugins(){return e.plugins},get refresh(){return e.refresh},get zIndex(){return e.zIndex}})}),Ot(c,g)}),Ot(a,l)};If(s,a=>{t()&&a(o)})}Ot(r,n)}let Mo;function kl(r){return{lang:r?.lang??Mo?.lang,message:r?.message,abortEarly:r?.abortEarly??Mo?.abortEarly,abortPipeEarly:r?.abortPipeEarly??Mo?.abortPipeEarly}}let ES;function TS(r){return ES?.get(r)}let bS;function AS(r){return bS?.get(r)}let wS;function RS(r,e){return wS?.get(r)?.get(e)}function CS(r){const e=typeof r;return e==="string"?`"${r}"`:e==="number"||e==="bigint"||e==="boolean"?`${r}`:e==="object"||e==="function"?(r&&Object.getPrototypeOf(r)?.constructor?.name)??"null":e}function ls(r,e,t,n,i){const s=i&&"input"in i?i.input:t.value,o=i?.expected??r.expects??null,a=i?.received??CS(s),l={kind:r.kind,type:r.type,input:s,expected:o,received:a,message:`Invalid ${e}: ${o?`Expected ${o} but r`:"R"}eceived ${a}`,requirement:r.requirement,path:i?.path,issues:i?.issues,lang:n.lang,abortEarly:n.abortEarly,abortPipeEarly:n.abortPipeEarly},u=r.kind==="schema",c=i?.message??r.message??RS(r.reference,l.lang)??(u?AS(l.lang):null)??n.message??TS(l.lang);c!==void 0&&(l.message=typeof c=="function"?c(l):c),u&&(t.typed=!1),t.issues?t.issues.push(l):t.issues=[l]}function Gi(r){return{version:1,vendor:"valibot",validate(e){return r["~run"]({value:e},kl())}}}function PS(r,e){return Object.hasOwn(r,e)&&e!=="__proto__"&&e!=="prototype"&&e!=="constructor"}var LS=class extends Error{constructor(r){super(r[0].message),this.name="ValiError",this.issues=r}};function md(r,e){return{kind:"validation",type:"min_length",reference:md,async:!1,expects:`>=${r}`,requirement:r,message:e,"~run"(t,n){return t.typed&&t.value.length<this.requirement&&ls(this,"length",t,n,{received:`${t.value.length}`}),t}}}function _d(r,e,t){return typeof r.fallback=="function"?r.fallback(e,t):r.fallback}function DS(r,e){return{...r,fallback:e,get"~standard"(){return Gi(this)},"~run"(t,n){const i=r["~run"](t,n);return i.issues?{typed:!0,value:_d(this,i,n)}:i}}}function gd(r,e,t){return typeof r.default=="function"?r.default(e,t):r.default}function US(r,e){return!r["~run"]({value:e},{abortEarly:!0}).issues}function vd(r,e){return{kind:"schema",type:"object",reference:vd,expects:"Object",async:!1,entries:r,message:e,get"~standard"(){return Gi(this)},"~run"(t,n){const i=t.value;if(i&&typeof i=="object"){t.typed=!0,t.value={};for(const s in this.entries){const o=this.entries[s];if(s in i||(o.type==="exact_optional"||o.type==="optional"||o.type==="nullish")&&o.default!==void 0){const a=s in i?i[s]:gd(o),l=o["~run"]({value:a},n);if(l.issues){const u={type:"object",origin:"value",input:i,key:s,value:a};for(const c of l.issues)c.path?c.path.unshift(u):c.path=[u],t.issues?.push(c);if(t.issues||(t.issues=l.issues),n.abortEarly){t.typed=!1;break}}l.typed||(t.typed=!1),t.value[s]=l.value}else if(o.fallback!==void 0)t.value[s]=_d(o);else if(o.type!=="exact_optional"&&o.type!=="optional"&&o.type!=="nullish"&&(ls(this,"key",t,n,{input:void 0,expected:`"${s}"`,path:[{type:"object",origin:"key",input:i,key:s,value:i[s]}]}),n.abortEarly))break}}else ls(this,"type",t,n);return t}}}function xd(r,e){return{kind:"schema",type:"optional",reference:xd,expects:`(${r.expects} | undefined)`,async:!1,wrapped:r,default:e,get"~standard"(){return Gi(this)},"~run"(t,n){return t.value===void 0&&(this.default!==void 0&&(t.value=gd(this,t,n)),t.value===void 0)?(t.typed=!0,t):this.wrapped["~run"](t,n)}}}function IS(r,e,t){return{kind:"schema",type:"record",reference:IS,expects:"Object",async:!1,key:r,value:e,message:t,get"~standard"(){return Gi(this)},"~run"(n,i){const s=n.value;if(s&&typeof s=="object"){n.typed=!0,n.value={};for(const o in s)if(PS(s,o)){const a=s[o],l=this.key["~run"]({value:o},i);if(l.issues){const c={type:"object",origin:"key",input:s,key:o,value:a};for(const f of l.issues)f.path=[c],n.issues?.push(f);if(n.issues||(n.issues=l.issues),i.abortEarly){n.typed=!1;break}}const u=this.value["~run"]({value:a},i);if(u.issues){const c={type:"object",origin:"value",input:s,key:o,value:a};for(const f of u.issues)f.path?f.path.unshift(c):f.path=[c],n.issues?.push(f);if(n.issues||(n.issues=u.issues),i.abortEarly){n.typed=!1;break}}(!l.typed||!u.typed)&&(n.typed=!1),l.typed&&(n.value[l.value]=u.value)}}else ls(this,"type",n,i);return n}}}function Hl(r){return{kind:"schema",type:"string",reference:Hl,expects:"string",async:!1,message:r,get"~standard"(){return Gi(this)},"~run"(e,t){return typeof e.value=="string"?e.typed=!0:ls(this,"type",e,t),e}}}function NS(){return{kind:"schema",type:"unknown",reference:NS,expects:"unknown",async:!1,get"~standard"(){return Gi(this)},"~run"(r){return r.typed=!0,r}}}function aE(r,e,t){const n=r["~run"]({value:e},kl(t));if(n.issues)throw new LS(n.issues);return n.value}function OS(...r){return{...r[0],pipe:r,get"~standard"(){return Gi(this)},"~run"(e,t){for(const n of r)if(n.kind!=="metadata"){if(e.issues&&(n.kind==="schema"||n.kind==="transformation")){e.typed=!1;break}(!e.issues||!t.abortEarly&&!t.abortPipeEarly)&&(e=n["~run"](e,t))}return e}}}function oE(r,e,t){const n=r["~run"]({value:e},kl(t));return{typed:n.typed,success:!n.issues,output:n.value,issues:n.issues}}const FS=Symbol("loader");function BS(r){Lf(FS,r)}var Eo={},rf,sf;function zS(){return sf||(sf=1,rf={kValues:Symbol("values"),kStorage:Symbol("kStorage"),kStorages:Symbol("kStorages"),kTransfromer:Symbol("kTransformer"),kTTL:Symbol("kTTL"),kOnDedupe:Symbol("kOnDedupe"),kOnError:Symbol("kOnError"),kOnHit:Symbol("kOnHit"),kOnMiss:Symbol("kOnMiss"),kStale:Symbol("kStale")}),rf}var To={exports:{}},af;function yd(){return af||(af=1,(function(r,e){const{hasOwnProperty:t}=Object.prototype,n=h();n.configure=h,n.stringify=n,n.default=n,e.stringify=n,e.configure=h,r.exports=n;const i=/[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;function s(v){return v.length<5e3&&!i.test(v)?`"${v}"`:JSON.stringify(v)}function o(v,x){if(v.length>200||x)return v.sort(x);for(let S=1;S<v.length;S++){const M=v[S];let b=S;for(;b!==0&&v[b-1]>M;)v[b]=v[b-1],b--;v[b]=M}return v}const a=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array)),Symbol.toStringTag).get;function l(v){return a.call(v)!==void 0&&v.length!==0}function u(v,x,S){v.length<S&&(S=v.length);const M=x===","?"":" ";let b=`"0":${M}${v[0]}`;for(let E=1;E<S;E++)b+=`${x}"${E}":${M}${v[E]}`;return b}function c(v){if(t.call(v,"circularValue")){const x=v.circularValue;if(typeof x=="string")return`"${x}"`;if(x==null)return x;if(x===Error||x===TypeError)return{toString(){throw new TypeError("Converting circular structure to JSON")}};throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined')}return'"[Circular]"'}function f(v){let x;if(t.call(v,"deterministic")&&(x=v.deterministic,typeof x!="boolean"&&typeof x!="function"))throw new TypeError('The "deterministic" argument must be of type boolean or comparator function');return x===void 0?!0:x}function d(v,x){let S;if(t.call(v,x)&&(S=v[x],typeof S!="boolean"))throw new TypeError(`The "${x}" argument must be of type boolean`);return S===void 0?!0:S}function p(v,x){let S;if(t.call(v,x)){if(S=v[x],typeof S!="number")throw new TypeError(`The "${x}" argument must be of type number`);if(!Number.isInteger(S))throw new TypeError(`The "${x}" argument must be an integer`);if(S<1)throw new RangeError(`The "${x}" argument must be >= 1`)}return S===void 0?1/0:S}function g(v){return v===1?"1 item":`${v} items`}function _(v){const x=new Set;for(const S of v)(typeof S=="string"||typeof S=="number")&&x.add(String(S));return x}function m(v){if(t.call(v,"strict")){const x=v.strict;if(typeof x!="boolean")throw new TypeError('The "strict" argument must be of type boolean');if(x)return S=>{let M=`Object can not safely be stringified. Received type ${typeof S}`;throw typeof S!="function"&&(M+=` (${S.toString()})`),new Error(M)}}}function h(v){v={...v};const x=m(v);x&&(v.bigint===void 0&&(v.bigint=!1),"circularValue"in v||(v.circularValue=Error));const S=c(v),M=d(v,"bigint"),b=f(v),E=typeof b=="function"?b:void 0,P=p(v,"maximumDepth"),y=p(v,"maximumBreadth");function A(O,R,N,q,k,j){let D=R[O];switch(typeof D=="object"&&D!==null&&typeof D.toJSON=="function"&&(D=D.toJSON(O)),D=q.call(R,O,D),typeof D){case"string":return s(D);case"object":{if(D===null)return"null";if(N.indexOf(D)!==-1)return S;let B="",ee=",";const J=j;if(Array.isArray(D)){if(D.length===0)return"[]";if(P<N.length+1)return'"[Array]"';N.push(D),k!==""&&(j+=k,B+=`
${j}`,ee=`,
${j}`);const Xe=Math.min(D.length,y);let Te=0;for(;Te<Xe-1;Te++){const Je=A(String(Te),D,N,q,k,j);B+=Je!==void 0?Je:"null",B+=ee}const F=A(String(Te),D,N,q,k,j);if(B+=F!==void 0?F:"null",D.length-1>y){const Je=D.length-y-1;B+=`${ee}"... ${g(Je)} not stringified"`}return k!==""&&(B+=`
${J}`),N.pop(),`[${B}]`}let Q=Object.keys(D);const pe=Q.length;if(pe===0)return"{}";if(P<N.length+1)return'"[Object]"';let fe="",_e="";k!==""&&(j+=k,ee=`,
${j}`,fe=" ");const Pe=Math.min(pe,y);b&&!l(D)&&(Q=o(Q,E)),N.push(D);for(let Xe=0;Xe<Pe;Xe++){const Te=Q[Xe],F=A(Te,D,N,q,k,j);F!==void 0&&(B+=`${_e}${s(Te)}:${fe}${F}`,_e=ee)}if(pe>y){const Xe=pe-y;B+=`${_e}"...":${fe}"${g(Xe)} not stringified"`,_e=ee}return k!==""&&_e.length>1&&(B=`
${j}${B}
${J}`),N.pop(),`{${B}}`}case"number":return isFinite(D)?String(D):x?x(D):"null";case"boolean":return D===!0?"true":"false";case"undefined":return;case"bigint":if(M)return String(D);default:return x?x(D):void 0}}function z(O,R,N,q,k,j){switch(typeof R=="object"&&R!==null&&typeof R.toJSON=="function"&&(R=R.toJSON(O)),typeof R){case"string":return s(R);case"object":{if(R===null)return"null";if(N.indexOf(R)!==-1)return S;const D=j;let B="",ee=",";if(Array.isArray(R)){if(R.length===0)return"[]";if(P<N.length+1)return'"[Array]"';N.push(R),k!==""&&(j+=k,B+=`
${j}`,ee=`,
${j}`);const pe=Math.min(R.length,y);let fe=0;for(;fe<pe-1;fe++){const Pe=z(String(fe),R[fe],N,q,k,j);B+=Pe!==void 0?Pe:"null",B+=ee}const _e=z(String(fe),R[fe],N,q,k,j);if(B+=_e!==void 0?_e:"null",R.length-1>y){const Pe=R.length-y-1;B+=`${ee}"... ${g(Pe)} not stringified"`}return k!==""&&(B+=`
${D}`),N.pop(),`[${B}]`}N.push(R);let J="";k!==""&&(j+=k,ee=`,
${j}`,J=" ");let Q="";for(const pe of q){const fe=z(pe,R[pe],N,q,k,j);fe!==void 0&&(B+=`${Q}${s(pe)}:${J}${fe}`,Q=ee)}return k!==""&&Q.length>1&&(B=`
${j}${B}
${D}`),N.pop(),`{${B}}`}case"number":return isFinite(R)?String(R):x?x(R):"null";case"boolean":return R===!0?"true":"false";case"undefined":return;case"bigint":if(M)return String(R);default:return x?x(R):void 0}}function X(O,R,N,q,k){switch(typeof R){case"string":return s(R);case"object":{if(R===null)return"null";if(typeof R.toJSON=="function"){if(R=R.toJSON(O),typeof R!="object")return X(O,R,N,q,k);if(R===null)return"null"}if(N.indexOf(R)!==-1)return S;const j=k;if(Array.isArray(R)){if(R.length===0)return"[]";if(P<N.length+1)return'"[Array]"';N.push(R),k+=q;let fe=`
${k}`;const _e=`,
${k}`,Pe=Math.min(R.length,y);let Xe=0;for(;Xe<Pe-1;Xe++){const F=X(String(Xe),R[Xe],N,q,k);fe+=F!==void 0?F:"null",fe+=_e}const Te=X(String(Xe),R[Xe],N,q,k);if(fe+=Te!==void 0?Te:"null",R.length-1>y){const F=R.length-y-1;fe+=`${_e}"... ${g(F)} not stringified"`}return fe+=`
${j}`,N.pop(),`[${fe}]`}let D=Object.keys(R);const B=D.length;if(B===0)return"{}";if(P<N.length+1)return'"[Object]"';k+=q;const ee=`,
${k}`;let J="",Q="",pe=Math.min(B,y);l(R)&&(J+=u(R,ee,y),D=D.slice(R.length),pe-=R.length,Q=ee),b&&(D=o(D,E)),N.push(R);for(let fe=0;fe<pe;fe++){const _e=D[fe],Pe=X(_e,R[_e],N,q,k);Pe!==void 0&&(J+=`${Q}${s(_e)}: ${Pe}`,Q=ee)}if(B>y){const fe=B-y;J+=`${Q}"...": "${g(fe)} not stringified"`,Q=ee}return Q!==""&&(J=`
${k}${J}
${j}`),N.pop(),`{${J}}`}case"number":return isFinite(R)?String(R):x?x(R):"null";case"boolean":return R===!0?"true":"false";case"undefined":return;case"bigint":if(M)return String(R);default:return x?x(R):void 0}}function G(O,R,N){switch(typeof R){case"string":return s(R);case"object":{if(R===null)return"null";if(typeof R.toJSON=="function"){if(R=R.toJSON(O),typeof R!="object")return G(O,R,N);if(R===null)return"null"}if(N.indexOf(R)!==-1)return S;let q="";const k=R.length!==void 0;if(k&&Array.isArray(R)){if(R.length===0)return"[]";if(P<N.length+1)return'"[Array]"';N.push(R);const J=Math.min(R.length,y);let Q=0;for(;Q<J-1;Q++){const fe=G(String(Q),R[Q],N);q+=fe!==void 0?fe:"null",q+=","}const pe=G(String(Q),R[Q],N);if(q+=pe!==void 0?pe:"null",R.length-1>y){const fe=R.length-y-1;q+=`,"... ${g(fe)} not stringified"`}return N.pop(),`[${q}]`}let j=Object.keys(R);const D=j.length;if(D===0)return"{}";if(P<N.length+1)return'"[Object]"';let B="",ee=Math.min(D,y);k&&l(R)&&(q+=u(R,",",y),j=j.slice(R.length),ee-=R.length,B=","),b&&(j=o(j,E)),N.push(R);for(let J=0;J<ee;J++){const Q=j[J],pe=G(Q,R[Q],N);pe!==void 0&&(q+=`${B}${s(Q)}:${pe}`,B=",")}if(D>y){const J=D-y;q+=`${B}"...":"${g(J)} not stringified"`}return N.pop(),`{${q}}`}case"number":return isFinite(R)?String(R):x?x(R):"null";case"boolean":return R===!0?"true":"false";case"undefined":return;case"bigint":if(M)return String(R);default:return x?x(R):void 0}}function I(O,R,N){if(arguments.length>1){let q="";if(typeof N=="number"?q=" ".repeat(Math.min(N,10)):typeof N=="string"&&(q=N.slice(0,10)),R!=null){if(typeof R=="function")return A("",{"":O},[],R,q,"");if(Array.isArray(R))return z("",O,[],_(R),q,"")}if(q.length!==0)return X("",O,[],q,"")}return G("",O,[])}return I}})(To,To.exports)),To.exports}var bo,of;function ha(){if(of)return bo;of=1;function r(l,u){const c=[];let f=0;for(let d=0;d<l.length;d++)for(let p=f;p<u.length;p++)l[d]===u[p]&&(c.push(p),f=p+1);return c}function e(l,u){const c=[];let f=0;for(let d=0;d<l.length;d++)for(let p=f;p<u.length;p++)l[d]!==u[p]&&(c.push(u[p]),f=p+1);return c}function t(l,u){let c=0,f=l.length-1;for(;c<=f;){const d=(c+f)/2|0;if(l[d]===u)return d;l[d]<u?c=d+1:f=d-1}return-1}function n(l){return l*Math.random()|0}function i(l,u){return l=Math.floor(l),u=Math.floor(u),l+n(1+u-l)}function s(l,u){if(l.length<1||u<1)return[];const c=Math.min(l.length,u),f=i(1,c),d=new Set;for(let g=0;g<f;g++)d.add(n(l.length));const p=[];for(const g of d)p.push(l[g]);return p}function o(l,u){if(l==="*"||l.length===u.length&&l===u)return!0;let c=0,f=0;for(;c<l.length&&f<u.length;){if(l[c]===u[f]){c++,f++;continue}if(l[c]==="*"){if(l[c+1]===u[f]){c++;continue}f++;continue}return!1}return c>=l.length-1}function a(){const l=()=>{};return{fatal:l,error:l,warn:l,info:l,debug:l,trace:l}}return bo={findNotMatching:e,findMatchingIndexes:r,bsearchIndex:t,wildcardMatch:o,randomSubset:s,abstractLogging:a,isServerSide:typeof window>"u"},bo}var Ao,lf;function Sd(){if(lf)return Ao;lf=1;class r{constructor(t){this.options=t}async get(t){throw new Error("storage get method not implemented")}async set(t,n,i,s){throw new Error("storage set method not implemented")}async remove(t){throw new Error("storage remove method not implemented")}async invalidate(t){throw new Error("storage invalidate method not implemented")}async clear(t){throw new Error("storage clear method not implemented")}async refresh(){throw new Error("storage refresh method not implemented")}}return Ao=r,Ao}var wo,cf;function kS(){if(cf)return wo;cf=1;const r=yd(),e=Sd(),{findNotMatching:t,randomSubset:n,abstractLogging:i}=ha(),s=64,o=64,a=60;class l extends e{constructor(c={}){if(!c.client||typeof c.client!="object")throw new Error("Redis client is required");if(super(c),c.invalidation&&c.invalidation.referencesTTL&&(typeof c.invalidation.referencesTTL!="number"||c.invalidation.referencesTTL<1))throw new Error("invalidation.referencesTTL must be a positive integer greater than 1");this.log=c.log||i(),this.store=c.client,this.invalidation=!!c.invalidation,this.referencesTTL=c.invalidation&&c.invalidation.referencesTTL||a}getReferenceKeyLabel(c){return`r:${c}`}getKeyReferenceLabel(c){return`k:${c}`}async get(c){this.log.debug({msg:"acd/storage/redis.get",key:c});try{const f=await this.store.get(c);if(!f){if(!this.invalidation)return;this.clearReferences(c);return}return JSON.parse(f)}catch(f){this.log.error({msg:"acd/storage/redis.get error",err:f,key:c})}}async getTTL(c){this.log.debug({msg:"acd/storage/memory.getTTL",key:c});let f=await this.store.pttl(c);return f<0?0:(f=Math.ceil(f/1e3),f)}async set(c,f,d,p){if(this.log.debug({msg:"acd/storage/redis.set key",key:c,value:f,ttl:d,references:p}),d=Number(d),!(!d||d<0))try{if(await this.store.set(c,r(f),"EX",d),!p||p.length<1)return;if(!this.invalidation){this.log.warn({msg:"acd/storage/redis.set, invalidation is disabled, references are useless",key:c,references:p});return}const g=[],_=await this.store.smembers(this.getKeyReferenceLabel(c));if(this.log.debug({msg:"acd/storage/redis.set current references",key:c,currentReferences:_}),_.length>1){_.sort(),p.sort();const v=t(p,_);for(const x of v)g.push(["srem",this.getReferenceKeyLabel(x),c]);g.push(["del",this.getKeyReferenceLabel(c)])}const m=_.length>1?t(_,p):p;this.log.debug({msg:"acd/storage/redis.set references to add",key:c,referencesToAdd:m});for(let v=0;v<m.length;v++){const x=m[v],S=this.getReferenceKeyLabel(x);g.push(["sadd",S,c]),g.push(["expire",S,this.referencesTTL])}const h=this.getKeyReferenceLabel(c);g.push(["sadd",h,p]),g.push(["expire",h,d]),this.log.debug({msg:"acd/storage/redis.set references writes",writes:g}),await this.store.pipeline(g).exec()}catch(g){this.log.error({msg:"acd/storage/redis.set error",err:g,key:c,ttl:d,references:p})}}async remove(c){this.log.debug({msg:"acd/storage/redis.remove",key:c});try{const f=await this.store.del(c)>0;return f&&this.invalidation&&await this.clearReferences(c),f}catch(f){this.log.error({msg:"acd/storage/redis.remove error",err:f,key:c})}}async invalidate(c){if(!this.invalidation)return this.log.warn({msg:"acd/storage/redis.invalidate, exit due invalidation is disabled"}),[];this.log.debug({msg:"acd/storage/redis.invalidate",references:c});try{return Array.isArray(c)?await this._invalidateReferences(c):await this._invalidateReference(c)}catch(f){return this.log.error({msg:"acd/storage/redis.invalidate error",err:f,references:c}),[]}}async _invalidateReferences(c,f=!0){const d=c.map(m=>["smembers",f?this.getReferenceKeyLabel(m):m]),p=await this.store.pipeline(d).exec();this.log.debug({msg:"acd/storage/redis._invalidateReferences keys",keys:p});const g=[],_=[];for(let m=0;m<p.length;m++){const h=p[m][1];if(h){this.log.debug({msg:"acd/storage/redis._invalidateReferences got keys to be invalidated",keys:h});for(let v=0;v<h.length;v++){const x=h[v];this.log.debug({msg:"acd/storage/redis._invalidateReferences del key"+x}),_.push(x),g.push(["del",x])}}}return await this.store.pipeline(g).exec(),await this.clearReferences(_),_}async _invalidateReference(c){let f;if(c.includes("*")){const g=await this.store.keys(this.getReferenceKeyLabel(c));return this._invalidateReferences(g,!1)}else f=await this.store.smembers(this.getReferenceKeyLabel(c));this.log.debug({msg:"acd/storage/redis._invalidateReference keys",keys:f});const d=[],p=[];for(let g=0;g<f.length;g++){const _=f[g];this.log.debug({msg:"acd/storage/redis._invalidateReference del key"+_}),p.push(_),d.push(["del",_])}return await this.store.pipeline(d).exec(),await this.clearReferences(p),p}async clear(c){this.log.debug({msg:"acd/storage/redis.clear",name:c});try{if(!c){await this.store.flushall();return}const f=await this.store.keys(`${c}*`);this.log.debug({msg:"acd/storage/redis.clear keys",keys:f});const d=f.map(p=>["del",p]);if(await this.store.pipeline(d).exec(),!this.invalidation)return;await this.clearReferences(f)}catch(f){this.log.error({msg:"acd/storage/redis.clear error",err:f,name:c})}}async refresh(){try{await this.store.flushall()}catch(c){this.log.error({msg:"acd/storage/redis.refresh error",err:c})}}async clearReferences(c){try{if(!c){this.log.warn({msg:"acd/storage/redis.clearReferences invalid call due to empty key"});return}Array.isArray(c)||(c=[c]);const f=c.map(g=>["smembers",this.getKeyReferenceLabel(g)]),d=await this.store.pipeline(f).exec();this.log.debug({msg:"acd/storage/redis.clearReferences references",keys:c,referencesKeys:d});const p={};for(let g=0;g<c.length;g++){for(let m=0;m<d[g][1].length;m++){const h=this.getReferenceKeyLabel(d[g][1][m]);p[h]||(p[h]=["srem",h,c])}const _=this.getKeyReferenceLabel(c[g]);p[_]=["del",_]}this.log.debug({msg:"acd/storage/redis.clearReferences writes pipeline",writes:p}),await this.store.pipeline(Object.values(p)).exec()}catch(f){this.log.error({msg:"acd/storage/redis.clearReferences error",err:f})}}async gc(c="lazy",f={}){if(this.log.debug({msg:"acd/storage/redis.gc",mode:c,options:f}),!this.invalidation){this.log.warn({msg:"acd/storage/redis.gc does not run due to invalidation is disabled"});return}c!=="strict"&&c!=="lazy"&&(c="lazy");const d={references:{scanned:[],removed:[]},keys:{scanned:new Set,removed:new Set},loops:0,cursor:0,error:null};try{let p=0,g=o;if(f.chunk&&(typeof f.chunk!="number"||f.chunk<1))return d.error=new Error("chunk must be a positive integer greater than 1"),d;if(f.lazy){if(f.lazy.chunk){if(typeof f.lazy.chunk!="number"||f.lazy.chunk<1)return d.error=new Error("lazy.chunk must be a positive integer greater than 1"),d;g=f.lazy.chunk}if(f.lazy.cursor){if(typeof f.lazy.cursor!="number"||f.lazy.cursor<0)return d.error=new Error("lazy.cursor must be a positive integer greater than 0"),d;p=f.lazy.cursor}}const _=f.chunk||s,m=Math.min(g,_),h=p;let v=-1,x=-1;do{d.loops++;const S=await this.store.scan(p,"match","r:*","count",m);p=Number(S[0]),v=S[1].length;const M=c==="lazy"?n(S[1],g):S[1];d.references.scanned=d.references.scanned.concat(M);let b=[];for(let O=0;O<M.length;O++){const R=M[O];b.push(["smembers",R])}const E=await this.store.pipeline(b).exec(),P={},y={};for(let O=0;O<E.length;O++){const R=E[O],N=M[O];y[N]=R[1];for(let q=0;q<R[1].length;q++){const k=R[1][q];P[k]?P[k].push(N):P[k]=[N],d.keys.scanned.add(k)}}const A=Object.keys(P);b=A.map(O=>["exists",O]);const z=await this.store.pipeline(b).exec(),X={};for(let O=0;O<A.length;O++){const R=A[O];if(z[O][1]!==1)for(let N=0;N<P[R].length;N++){const q=P[R][N];X[q]?X[q].push(R):X[q]=[R],d.keys.removed.add(R)}}const G=Object.keys(X),I=[];for(let O=0;O<G.length;O++){const R=G[O];y[R].length===X[R].length?(I.push(["del",R]),d.references.removed.push(R)):I.push(["srem",R,X[R]])}if(await this.store.pipeline(I).exec(),x=I.length,c==="lazy"&&d.references.scanned.length>=g)break}while(h!==p&&v>0&&x>0);d.cursor=p,d.keys.scanned=Array.from(d.keys.scanned),d.keys.removed=Array.from(d.keys.removed)}catch(p){this.log.error({msg:"acd/storage/redis.gc error",err:p}),d.error=p}return d}}return wo=l,wo}var Ro,uf;function HS(){if(uf)return Ro;uf=1;function r(e){if(typeof e!="function")throw new Error("obliterator/iterator: expecting a function!");this.next=e}return typeof Symbol<"u"&&(r.prototype[Symbol.iterator]=function(){return this}),r.of=function(){var e=arguments,t=e.length,n=0;return new r(function(){return n>=t?{done:!0}:{done:!1,value:e[n++]}})},r.empty=function(){var e=new r(function(){return{done:!0}});return e},r.fromSequence=function(e){var t=0,n=e.length;return new r(function(){return t>=n?{done:!0}:{done:!1,value:e[t++]}})},r.is=function(e){return e instanceof r?!0:typeof e=="object"&&e!==null&&typeof e.next=="function"},Ro=r,Ro}var Co={},ff;function VS(){return ff||(ff=1,Co.ARRAY_BUFFER_SUPPORT=typeof ArrayBuffer<"u",Co.SYMBOL_SUPPORT=typeof Symbol<"u"),Co}var Po,hf;function Md(){if(hf)return Po;hf=1;var r=VS(),e=r.ARRAY_BUFFER_SUPPORT,t=r.SYMBOL_SUPPORT;return Po=function(n,i){var s,o,a,l,u;if(!n)throw new Error("obliterator/forEach: invalid iterable.");if(typeof i!="function")throw new Error("obliterator/forEach: expecting a callback.");if(Array.isArray(n)||e&&ArrayBuffer.isView(n)||typeof n=="string"||n.toString()==="[object Arguments]"){for(a=0,l=n.length;a<l;a++)i(n[a],a);return}if(typeof n.forEach=="function"){n.forEach(i);return}if(t&&Symbol.iterator in n&&typeof n.next!="function"&&(n=n[Symbol.iterator]()),typeof n.next=="function"){for(s=n,a=0;u=s.next(),u.done!==!0;)i(u.value,a),a++;return}for(o in n)n.hasOwnProperty(o)&&i(n[o],o)},Po}var df={},pf;function Ed(){return pf||(pf=1,(function(r){var e=Math.pow(2,8)-1,t=Math.pow(2,16)-1,n=Math.pow(2,32)-1,i=Math.pow(2,7)-1,s=Math.pow(2,15)-1,o=Math.pow(2,31)-1;r.getPointerArray=function(l){var u=l-1;if(u<=e)return Uint8Array;if(u<=t)return Uint16Array;if(u<=n)return Uint32Array;throw new Error("mnemonist: Pointer Array of size > 4294967295 is not supported.")},r.getSignedPointerArray=function(l){var u=l-1;return u<=i?Int8Array:u<=s?Int16Array:u<=o?Int32Array:Float64Array},r.getNumberType=function(l){return l===(l|0)?Math.sign(l)===-1?l<=127&&l>=-128?Int8Array:l<=32767&&l>=-32768?Int16Array:Int32Array:l<=255?Uint8Array:l<=65535?Uint16Array:Uint32Array:Float64Array};var a={Uint8Array:1,Int8Array:2,Uint16Array:3,Int16Array:4,Uint32Array:5,Int32Array:6,Float32Array:7,Float64Array:8};r.getMinimalRepresentation=function(l,u){var c=null,f=0,d,p,g,_,m;for(_=0,m=l.length;_<m;_++)g=u?u(l[_]):l[_],p=r.getNumberType(g),d=a[p.name],d>f&&(f=d,c=p);return c},r.isTypedArray=function(l){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView(l)},r.concat=function(){var l=0,u,c,f;for(u=0,f=arguments.length;u<f;u++)l+=arguments[u].length;var d=new arguments[0].constructor(l);for(u=0,c=0;u<f;u++)d.set(arguments[u],c),c+=arguments[u].length;return d},r.indices=function(l){for(var u=r.getPointerArray(l),c=new u(l),f=0;f<l;f++)c[f]=f;return c}})(df)),df}var cr={},mf;function GS(){if(mf)return cr;mf=1;var r=Md(),e=Ed();function t(o){return Array.isArray(o)||e.isTypedArray(o)}function n(o){if(typeof o.length=="number")return o.length;if(typeof o.size=="number")return o.size}function i(o){var a=n(o),l=typeof a=="number"?new Array(a):[],u=0;return r(o,function(c){l[u++]=c}),l}function s(o){var a=n(o),l=typeof a=="number"?e.getPointerArray(a):Array,u=typeof a=="number"?new Array(a):[],c=typeof a=="number"?new l(a):[],f=0;return r(o,function(d){u[f]=d,c[f]=f++}),[u,c]}return cr.isArrayLike=t,cr.guessLength=n,cr.toArray=i,cr.toArrayWithIndices=s,cr}var Lo,_f;function WS(){if(_f)return Lo;_f=1;var r=HS(),e=Md(),t=Ed(),n=GS();function i(s,o,a){if(arguments.length<2&&(a=s,s=null,o=null),this.capacity=a,typeof this.capacity!="number"||this.capacity<=0)throw new Error("mnemonist/lru-cache: capacity should be positive number.");if(!isFinite(this.capacity)||Math.floor(this.capacity)!==this.capacity)throw new Error("mnemonist/lru-cache: capacity should be a finite positive integer.");var l=t.getPointerArray(a);this.forward=new l(a),this.backward=new l(a),this.K=typeof s=="function"?new s(a):new Array(a),this.V=typeof o=="function"?new o(a):new Array(a),this.size=0,this.head=0,this.tail=0,this.items={}}return i.prototype.clear=function(){this.size=0,this.head=0,this.tail=0,this.items={}},i.prototype.splayOnTop=function(s){var o=this.head;if(this.head===s)return this;var a=this.backward[s],l=this.forward[s];return this.tail===s?this.tail=a:this.backward[l]=a,this.forward[a]=l,this.backward[o]=s,this.head=s,this.forward[s]=o,this},i.prototype.set=function(s,o){var a=this.items[s];if(typeof a<"u"){this.splayOnTop(a),this.V[a]=o;return}this.size<this.capacity?a=this.size++:(a=this.tail,this.tail=this.backward[a],delete this.items[this.K[a]]),this.items[s]=a,this.K[a]=s,this.V[a]=o,this.forward[a]=this.head,this.backward[this.head]=a,this.head=a},i.prototype.setpop=function(s,o){var a=null,l=null,u=this.items[s];return typeof u<"u"?(this.splayOnTop(u),a=this.V[u],this.V[u]=o,{evicted:!1,key:s,value:a}):(this.size<this.capacity?u=this.size++:(u=this.tail,this.tail=this.backward[u],a=this.V[u],l=this.K[u],delete this.items[l]),this.items[s]=u,this.K[u]=s,this.V[u]=o,this.forward[u]=this.head,this.backward[this.head]=u,this.head=u,l?{evicted:!0,key:l,value:a}:null)},i.prototype.has=function(s){return s in this.items},i.prototype.get=function(s){var o=this.items[s];if(!(typeof o>"u"))return this.splayOnTop(o),this.V[o]},i.prototype.peek=function(s){var o=this.items[s];if(!(typeof o>"u"))return this.V[o]},i.prototype.forEach=function(s,o){o=arguments.length>1?o:this;for(var a=0,l=this.size,u=this.head,c=this.K,f=this.V,d=this.forward;a<l;)s.call(o,f[u],c[u],this),u=d[u],a++},i.prototype.keys=function(){var s=0,o=this.size,a=this.head,l=this.K,u=this.forward;return new r(function(){if(s>=o)return{done:!0};var c=l[a];return s++,s<o&&(a=u[a]),{done:!1,value:c}})},i.prototype.values=function(){var s=0,o=this.size,a=this.head,l=this.V,u=this.forward;return new r(function(){if(s>=o)return{done:!0};var c=l[a];return s++,s<o&&(a=u[a]),{done:!1,value:c}})},i.prototype.entries=function(){var s=0,o=this.size,a=this.head,l=this.K,u=this.V,c=this.forward;return new r(function(){if(s>=o)return{done:!0};var f=l[a],d=u[a];return s++,s<o&&(a=c[a]),{done:!1,value:[f,d]}})},typeof Symbol<"u"&&(i.prototype[Symbol.iterator]=i.prototype.entries),i.prototype.inspect=function(){for(var s=new Map,o=this.entries(),a;a=o.next(),!a.done;)s.set(a.value[0],a.value[1]);return Object.defineProperty(s,"constructor",{value:i,enumerable:!1}),s},typeof Symbol<"u"&&(i.prototype[Symbol.for("nodejs.util.inspect.custom")]=i.prototype.inspect),i.from=function(s,o,a,l){if(arguments.length<2){if(l=n.guessLength(s),typeof l!="number")throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")}else arguments.length===2&&(l=o,o=null,a=null);var u=new i(o,a,l);return e(s,function(c,f){u.set(f,c)}),u},Lo=i,Lo}var Do,gf;function XS(){if(gf)return Do;gf=1;const r=WS(),{abstractLogging:e}=ha(),t=Sd(),{findMatchingIndexes:n,findNotMatching:i,bsearchIndex:s,wildcardMatch:o}=ha(),a=typeof globalThis.setImmediate<"u"?globalThis.setImmediate:(p,...g)=>setTimeout(p,0,...g),l=1024;class u extends t{constructor(g={}){if(g.size&&(typeof g.size!="number"||g.size<1))throw new Error("size must be a positive integer greater than 0");super(g),this.size=g.size||l,this.log=g.log||e(),this.invalidation=g.invalidation||!1,this.init()}init(){this.store=new r(this.size),this.invalidation&&(this.keysReferences=new Map,this.referencesKeys=new Map)}get(g){this.log.debug({msg:"acd/storage/memory.get",key:g});const _=this.store.get(g);if(_){if(this.log.debug({msg:"acd/storage/memory.get, entry",entry:_,now:f()}),_.start+_.ttl>f())return this.log.debug({msg:"acd/storage/memory.get, key is NOT expired",key:g,entry:_}),_.value;this.log.debug({msg:"acd/storage/memory.get, key is EXPIRED",key:g,entry:_}),a(()=>this.remove(g))}}getTTL(g){this.log.debug({msg:"acd/storage/memory.getTTL",key:g});const _=this.store.peek(g);let m=0;return _&&(m=_.start+_.ttl-f(),m<0&&(m=0)),m}set(g,_,m,h){if(this.log.debug({msg:"acd/storage/memory.set",key:g,value:_,ttl:m,references:h}),m=Number(m),!m||m<0)return;const v=this.store.has(g),x=this.store.setpop(g,{value:_,ttl:m,start:f()});if(this.log.debug({msg:"acd/storage/memory.set, evicted",removed:x}),x&&x.evicted&&(this.log.debug({msg:"acd/storage/memory.set, remove evicted key",key:x.key}),this._removeReferences([x.key])),!h||h.length<1)return;if(!this.invalidation){this.log.warn({msg:"acd/storage/memory.set, invalidation is disabled, references are useless"});return}h=[...new Set(h)];let S;if(v&&(S=this.keysReferences.get(g),this.log.debug({msg:"acd/storage/memory.set, current keys-references",key:g,references:S}),S)){S.sort(),h.sort();const b=i(h,S);for(const E of b){const P=this.referencesKeys.get(E);if(!P)continue;const y=s(P,g);if(!(y<0)){if(P.splice(y,1),P.length<1){this.referencesKeys.delete(E);continue}this.referencesKeys.set(E,P)}}}const M=S?i(S,h):h;for(let b=0;b<M.length;b++){const E=M[b];let P=this.referencesKeys.get(E);P?(this.log.debug({msg:"acd/storage/memory.set, add reference-key",key:g,reference:E}),P.push(g)):P=[g],this.log.debug({msg:"acd/storage/memory.set, set reference-keys",keys:P,reference:E}),this.referencesKeys.set(E,P)}this.keysReferences.set(g,h)}remove(g){this.log.debug({msg:"acd/storage/memory.remove",key:g});const _=this._removeKey(g);return this._removeReferences([g]),_}_removeKey(g){return this.log.debug({msg:"acd/storage/memory._removeKey",key:g}),this.store.has(g)?(this.store.set(g,void 0),!0):!1}_removeReferences(g){if(!this.invalidation)return;this.log.debug({msg:"acd/storage/memory._removeReferences",keys:g});const _=new Set;for(let m=0;m<g.length;m++){const h=g[m],v=this.keysReferences.get(h);if(v){for(let x=0;x<v.length;x++)_.add(v[x]);this.log.debug({msg:"acd/storage/memory._removeReferences, delete key-references",key:h}),this.keysReferences.delete(h)}}this._removeReferencesKeys([..._],g)}_removeReferencesKeys(g,_){_.sort(),this.log.debug({msg:"acd/storage/memory._removeReferencesKeys",references:g,keys:_});for(let m=0;m<g.length;m++){const h=g[m],v=this.referencesKeys.get(h);if(this.log.debug({msg:"acd/storage/memory._removeReferencesKeys, get reference-key",reference:h,keys:_,referencesKeys:v}),!v)continue;const x=n(_,v);if(this.log.debug({msg:"acd/storage/memory._removeReferencesKeys, removing",reference:h,referencesToRemove:x,referencesKeys:v}),x.length===v.length){this.log.debug({msg:"acd/storage/memory._removeReferencesKeys, delete",reference:h}),this.referencesKeys.delete(h);continue}for(let S=x.length-1;S>=0;S--)this.log.debug({msg:"acd/storage/memory._removeReferencesKeys, remove",reference:h,referencesKeys:v,at:x[S]}),v.splice(x[S],1)}}invalidate(g){return this.invalidation?(this.log.debug({msg:"acd/storage/memory.invalidate",references:g}),Array.isArray(g)?this._invalidateReferences(g):this._invalidateReference(g)):(this.log.warn({msg:"acd/storage/memory.invalidate, exit due invalidation is disabled"}),[])}_invalidateReferences(g){const _=[];for(let m=0;m<g.length;m++){const h=g[m],v=this.referencesKeys.get(h);if(this.log.debug({msg:"acd/storage/memory._invalidateReferences, remove keys on reference",reference:h,keys:v}),!!v){for(let x=0;x<v.length;x++){const S=v[x];this.log.debug({msg:"acd/storage/memory._invalidateReferences, remove key on reference",reference:h,key:S}),this._removeKey(S)&&_.push(S)}this.log.debug({msg:"acd/storage/memory._invalidateReferences, remove references of",reference:h,keys:v}),this._removeReferences([...v])}}return _}_invalidateReference(g){if(g.includes("*")){const h=[];for(const v of this.referencesKeys.keys())o(g,v)&&h.push(v);return this._invalidateReferences(h)}const _=this.referencesKeys.get(g),m=[];if(this.log.debug({msg:"acd/storage/memory._invalidateReference, remove keys on reference",reference:g,keys:_}),!_)return m;for(let h=0;h<_.length;h++){const v=_[h];this.log.debug({msg:"acd/storage/memory._invalidateReference, remove key on reference",reference:g,key:v}),this._removeKey(v)&&m.push(v)}return this.log.debug({msg:"acd/storage/memory._invalidateReference, remove references of",reference:g,keys:_}),this._removeReferences([..._]),m}clear(g){if(this.log.debug({msg:"acd/storage/memory.clear",name:g}),!g){if(this.store.clear(),!this.invalidation)return;this.referencesKeys.clear(),this.keysReferences.clear();return}const _=[];this.store.forEach((h,v)=>{this.log.debug({msg:"acd/storage/memory.clear, iterate key",key:v}),v.indexOf(g)===0&&(this.log.debug({msg:"acd/storage/memory.clear, remove key",key:v}),_.push(v))});const m=[];for(let h=0;h<_.length;h++)this._removeKey(_[h])&&m.push(_[h]);return this._removeReferences(m),m}refresh(){this.log.debug({msg:"acd/storage/memory.refresh"}),this.init()}}let c;function f(){if(c!==void 0)return c;c=Math.floor(Date.now()/1e3);const p=setTimeout(d,1e3);return typeof p.unref=="function"&&p.unref(),c}function d(){c=void 0}return Do=u,Do}var Uo,vf;function Td(){if(vf)return Uo;vf=1;const{isServerSide:r}=ha();let e;r&&(e=kS());const t=XS(),n={redis:"redis"};function i(s,o){if(!r&&s===n.redis)throw new Error("Redis storage is not supported in the browser");return s===n.redis?new e(o):new t(o)}return Uo=i,Uo}var xf;function qS(){if(xf)return Eo;xf=1;const{kValues:r,kStorage:e,kStorages:t,kTransfromer:n,kTTL:i,kOnDedupe:s,kOnError:o,kOnHit:a,kOnMiss:l,kStale:u}=zS(),c=yd(),f=Td();class d{constructor(h={}){if(!h.storage)throw new Error("storage is required");if(h.ttl&&typeof h.ttl=="number"&&(h.ttl<0||!Number.isInteger(h.ttl)))throw new Error("ttl must be a positive integer greater than 0");if(h.onDedupe&&typeof h.onDedupe!="function")throw new Error("onDedupe must be a function");if(h.onError&&typeof h.onError!="function")throw new Error("onError must be a function");if(h.onHit&&typeof h.onHit!="function")throw new Error("onHit must be a function");if(h.onMiss&&typeof h.onMiss!="function")throw new Error("onMiss must be a function");if(typeof h.stale=="number"&&!(Math.floor(h.stale)===h.stale&&h.stale>=0))throw new Error("stale must be an integer greater or equal to 0");this[r]={},this[e]=h.storage,this[t]=new Map,this[t].set("_default",h.storage),this[n]=h.transformer,this[i]=h.ttl||0,this[s]=h.onDedupe||_,this[o]=h.onError||_,this[a]=h.onHit||_,this[l]=h.onMiss||_,this[u]=h.stale||0}define(h,v,x){if(typeof v=="function"&&(x=v,v={}),h&&this[h])throw new Error(`${h} is already defined in the cache or it is a forbidden name`);if(v=v||{},typeof x!="function")throw new TypeError(`Missing the function parameter for '${h}'`);const S=v.serialize;if(S&&typeof S!="function")throw new TypeError("serialize must be a function");const M=v.references;if(M&&typeof M!="function")throw new TypeError("references must be a function");if(typeof v.ttl!="function"&&v.ttl&&(typeof v.ttl!="number"||v.ttl<0||!Number.isInteger(v.ttl)))throw new Error("ttl must be a positive integer greater than 0");let b;v.storage?(b=f(v.storage.type,v.storage.options),this[t].set(h,b)):b=this[e];const E=v.ttl!==void 0?v.ttl:this[i],P=v.stale!==void 0?v.stale:this[u],y=v.onDedupe||this[s],A=v.onError||this[o],z=v.onHit||this[a],X=v.onMiss||this[l],G=v.transformer||this[n],I=new p(x,h,S,M,b,G,E,y,A,z,X,P);return this[r][h]=I,this[h]=I.add.bind(I),this}async clear(h,v){if(h){if(!this[r][h])throw new Error(`${h} is not defined in the cache`);await this[r][h].clear(v);return}const x=[];for(const S of Object.values(this[r]))x.push(S.clear());await Promise.all(x)}async get(h,v){if(!this[r][h])throw new Error(`${h} is not defined in the cache`);return this[r][h].get(v)}async set(h,v,x,S,M){if(!this[r][h])throw new Error(`${h} is not defined in the cache`);return this[r][h].set(v,x,S,M)}async invalidate(h,v){if(!this[r][h])throw new Error(`${h} is not defined in the cache`);return this[r][h].invalidate(v)}async invalidateAll(h,v="_default"){if(!this[t].has(v))throw new Error(`${v} storage is not defined in the cache`);await this[t].get(v).invalidate(h)}}class p{constructor(h,v,x,S,M,b,E,P,y,A,z,X){this.dedupes=new Map,this.func=h,this.name=v,this.serialize=x,this.references=S,this.storage=M,this.transformer=b,this.ttl=E,this.onDedupe=P,this.onError=y,this.onHit=A,this.onMiss=z,this.stale=X}getKey(h){const v=this.serialize?this.serialize(h):h;return typeof v=="string"?v:c(v)}getStorageKey(h){return`${this.name}~${h}`}getStorageName(){return`${this.name}~`}add(h){try{const v=this.getKey(h);let x=this.dedupes.get(v);return x?this.onDedupe(v):(x=new g,this.buildPromise(x,h,v),this.dedupes.set(v,x)),x.promise}catch(v){this.onError(v)}}async wrapFunction(h,v){const x=this.getStorageKey(v);if(this.ttl>0||typeof this.ttl=="function"){const S=await this.get(x);if(S!==void 0){this.onHit(v);const M=typeof this.stale=="function"?this.stale(S):this.stale;return M>0&&await this.storage.getTTL(x)<=M&&this._wrapFunction(x,h,v).catch(_),S}else this.onMiss(v)}return this._wrapFunction(x,h,v)}async _wrapFunction(h,v,x){const S=await this.func(v,x),M=typeof this.stale=="function"?this.stale(S):this.stale;let b=typeof this.ttl=="function"?this.ttl(S):this.ttl;if(b==null||typeof b!="number"||!Number.isInteger(b))return this.onError(new Error("ttl must be an integer")),S;if(b+=M,b<1)return S;if(!this.references)return await this.set(h,S,b),S;try{let E=this.references(v,x,S),P=S;E&&typeof E.then=="function"&&(E=await E),this.transformer&&(P=this.transformer.serialize(S)),await this.storage.set(h,P,b,E)}catch(E){this.onError(E)}return S}buildPromise(h,v,x){h.promise=this.wrapFunction(v,x),h.promise.then(S=>(this.dedupes.delete(x),S)).catch(S=>{this.onError(S),this.dedupes.delete(x);const M=this.storage.remove(this.getStorageKey(x));M&&typeof M.catch=="function"&&M.catch(_)})}async clear(h){if(h){const v=this.getKey(h);this.dedupes.delete(v),await this.storage.remove(this.getStorageKey(v));return}await this.storage.clear(this.getStorageName()),this.dedupes.clear()}async get(h){const v=await this.storage.get(h);return this.transformer&&v?await this.transformer.deserialize(v):v}async set(h,v,x,S){return this.transformer&&(v=this.transformer.serialize(v)),this.storage.set(h,v,x,S)}async invalidate(h){return this.storage.invalidate(h)}}class g{constructor(){this.promise=null}}function _(){}return Eo.Cache=d,Eo}var Io,yf;function YS(){if(yf)return Io;yf=1;const{Cache:r}=qS(),e=Td();function t(n){n?n.storage||(n.storage={type:"memory"}):n={storage:{type:"memory"}};const i=e(n.storage.type,n.storage.options);return new r({...n,storage:i})}return Io={Cache:r,createCache:t,createStorage:e},Io}var jS=YS();let No=0,Sf=[];function $S(){return No+=1,()=>{if(No-=1,No===0){let r=Sf;Sf=[];for(let e of r)e()}}}let pn=[],Jn=0;const Hs=4;let bd=r=>{let e=[],t={get(){return t.lc||t.listen(()=>{})(),t.value},lc:0,listen(n){return t.lc=e.push(n),()=>{for(let s=Jn+Hs;s<pn.length;)pn[s]===n?pn.splice(s,Hs):s+=Hs;let i=e.indexOf(n);~i&&(e.splice(i,1),--t.lc||t.off())}},notify(n,i){let s=!pn.length;for(let o of e)pn.push(o,t.value,n,i);if(s){for(Jn=0;Jn<pn.length;Jn+=Hs)pn[Jn](pn[Jn+1],pn[Jn+2],pn[Jn+3]);pn.length=0}},off(){},set(n){let i=t.value;i!==n&&(t.value=n,t.notify(i))},subscribe(n){let i=t.listen(n);return n(t.value),i},value:r};return t};const KS=5,Vs=6,Gs=10;let ZS=(r,e,t,n)=>(r.events=r.events||{},r.events[t+Gs]||(r.events[t+Gs]=n(i=>{r.events[t].reduceRight((s,o)=>(o(s),s),{shared:{},...i})})),r.events[t]=r.events[t]||[],r.events[t].push(e),()=>{let i=r.events[t],s=i.indexOf(e);i.splice(s,1),i.length||(delete r.events[t],r.events[t+Gs](),delete r.events[t+Gs])}),JS=1e3,QS=(r,e)=>ZS(r,t=>{let n=e(t);n&&r.events[Vs].push(n)},KS,t=>{let n=r.listen;r.listen=(...s)=>(!r.lc&&!r.active&&(r.active=!0,t()),n(...s));let i=r.off;return r.events[Vs]=[],r.off=()=>{i(),setTimeout(()=>{if(r.active&&!r.lc){r.active=!1;for(let s of r.events[Vs])s();r.events[Vs]=[]}},JS)},()=>{r.listen=n,r.off=i}}),eM=(r={})=>{let e=bd(r);return e.setKey=function(t,n){let i=e.value;typeof n>"u"&&t in e.value?(e.value={...e.value},delete e.value[t],e.notify(i,t)):e.value[t]!==n&&(e.value={...e.value,[t]:n},e.notify(i,t))},e};const fl=typeof document>"u"?"server":"browser",tM=r=>{const{ssr:e,setFetcher:t}=r;return n=>{if(fl==="server")throw new Error("Live mode is not supported in server environments");if(e&&!n.client)throw new Error("The `client` option in `enableLiveMode` is required");const i=n.client||r.client||void 0,s=new AbortController;let o;return Ff(async()=>{const{enableLiveMode:a}=await import("./BaQAdUY2.js");return{enableLiveMode:a}},__vite__mapDeps([9,5,10,11]),import.meta.url).then(({enableLiveMode:a})=>{s.signal.aborted||(o=a({...n,client:i,setFetcher:t,ssr:e}))}),()=>{s.abort(),o?.()}}};function Mf(r){return r.withConfig({allowReconfigure:!1})}const nM=r=>{const{ssr:e=!1,tag:t="core-loader"}=r;if(e&&r.client)throw new TypeError("`client` option is not allowed when `ssr: true`, use `setServerClient` from your server entry point instead");if(!e&&r.client===!1)throw new TypeError("You must set `ssr: true` when `client: false` is used");if(!e&&!r.client)throw new TypeError("`client` is required");let n=e?void 0:Mf(r.client);function i(f){return jS.createCache().define("fetch",async d=>{if(!f)throw new Error("You have to set the Sanity client with `setServerClient` before any data fetching is done");const{query:p,params:g={},perspective:_,useCdn:m,stega:h}=JSON.parse(d),{result:v,resultSourceMap:x}=await f.fetch(p,g,{tag:t,filterResponse:!1,perspective:_,useCdn:m,stega:h});return{result:v,resultSourceMap:x}})}function s(){const f=n?.config().perspective||"published";return o.instance=i(n),{hydrate:(d,p,g)=>({loading:g?.data===void 0||g?.sourceMap===void 0,error:void 0,data:g?.data,sourceMap:g?.sourceMap,perspective:f}),fetch:(d,p,g,_)=>{if(_.signal.aborted)return;const m=$S();g.setKey("loading",!0),g.setKey("error",void 0),o.instance.fetch(JSON.stringify({query:d,params:p})).then(h=>{_.signal.aborted||(g.setKey("data",h.result),g.setKey("sourceMap",h.resultSourceMap),g.setKey("perspective",f))}).catch(h=>{g.setKey("error",h)}).finally(()=>{g.setKey("loading",!1),m()})}}}const o={instance:i(n)},a=bd(n?s():void 0),l=tM({client:n||void 0,ssr:e,setFetcher:f=>{const d=a.get();return a.set(f),()=>a.set(d)}}),u=(f,d={},p)=>{const g=a.get(),_=eM(g?g.hydrate(f,d,p):{loading:!1,error:typeof p?.data>"u"?new Error("The `initial` option is required when `ssr: true`"):void 0,data:p?.data,sourceMap:p?.sourceMap,perspective:p?.perspective});return QS(_,()=>{let m=new AbortController;const h=a.subscribe(v=>{!v||m.signal.aborted||(m.abort(),m=new AbortController,v.fetch(f,d,_,m))});return()=>{m.abort(),h()}}),_},c={instance:void 0,canPreviewDrafts:!1};return{createFetcherStore:u,enableLiveMode:l,setServerClient:f=>{if(fl!=="server")throw new Error("`setServerClient` can only be called in server environments, detected: "+JSON.stringify(fl));if(!e)throw new Error("`setServerClient` can only be called when `ssr: true`");c.instance=n=Mf(f),c.canPreviewDrafts=!!n.config().token,a.set(s())},unstable__cache:o,unstable__serverClient:c}};function iM(r){return Df(typeof r=="object"?r?.config().stega.studioUrl:void 0)}function rM({enableLiveMode:r,studioUrlStore:e}){return({allowStudioOrigin:t,client:n,onConnect:i,onDisconnect:s,studioUrl:o}={})=>(t&&console.warn("`allowStudioOrigin` is deprecated and no longer needed"),e.set(o??(typeof n=="object"?n?.config().stega.studioUrl:void 0)),r({client:n,onConnect:i,onDisconnect:s}))}var Oo,Ef;function sM(){return Ef||(Ef=1,Oo=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,i,s;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(!r(e[i],t[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(s=Object.keys(e),n=s.length,n!==Object.keys(t).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[i]))return!1;for(i=n;i--!==0;){var o=s[i];if(!r(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}),Oo}var aM=sM();const oM=_a(aM),lM=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vl=/_key\s*==\s*['"](.*)['"]/,cM=/^\d*:\d*$/;function Gl(r){return typeof r=="number"||typeof r=="string"&&/^\[\d+\]$/.test(r)}function Aa(r){return typeof r=="string"?Vl.test(r.trim()):typeof r=="object"&&"_key"in r}function Ad(r){if(typeof r=="string"&&cM.test(r))return!0;if(!Array.isArray(r)||r.length!==2)return!1;const[e,t]=r;return(typeof e=="number"||e==="")&&(typeof t=="number"||t==="")}function uM(r,e,t){const n=typeof e=="string"?Wl(e):e;if(!Array.isArray(n))throw new Error("Path must be an array or a string");let i=r;for(let s=0;s<n.length;s++){const o=n[s];if(Gl(o)){if(!Array.isArray(i))return t;i=i[o]}if(Aa(o)){if(!Array.isArray(i))return t;i=i.find(a=>a._key===o._key)}if(typeof o=="string"&&(i=typeof i=="object"&&i!==null?i[o]:void 0),typeof i>"u")return t}return i}function fM(r){if(!Array.isArray(r))throw new Error("Path is not an array");return r.reduce((e,t,n)=>{const i=typeof t;if(i==="number")return`${e}[${t}]`;if(i==="string")return`${e}${n===0?"":"."}${t}`;if(Aa(t)&&t._key)return`${e}[_key=="${t._key}"]`;if(Array.isArray(t)){const[s,o]=t;return`${e}[${s}:${o}]`}throw new Error(`Unsupported path segment \`${JSON.stringify(t)}\``)},"")}function Wl(r){if(typeof r!="string")throw new Error("Path is not a string");const e=r.match(lM);if(!e)throw new Error("Invalid path string");return e.map(hM)}function hM(r){return Gl(r)?dM(r):Aa(r)?pM(r):Ad(r)?mM(r):r}function dM(r){return Number(r.replace(/[^\d]/g,""))}function pM(r){return{_key:r.match(Vl)[1]}}function mM(r){const[e,t]=r.split(":").map(n=>n===""?n:Number(n));return[e,t]}var Xl=Object.freeze({__proto__:null,fromString:Wl,get:uM,isIndexSegment:Gl,isIndexTuple:Ad,isKeySegment:Aa,reKeySegment:Vl,toString:fM});const _M="drafts",gM="versions",Ur=".",da=`${_M}${Ur}`,wd=`${gM}${Ur}`;function Rd(r){return r.startsWith(da)}function ql(r){return r.startsWith(wd)}function lE(r){if(ql(r)){const e=Yl(r);return da+e}return Rd(r)?r:da+r}function cE(r,e){if(e==="drafts"||e==="published")throw new Error('Version can not be "published" or "drafts"');return`${wd}${e}${Ur}${Yl(r)}`}function uE(r){if(!ql(r))return;const[e,t,...n]=r.split(Ur);return t}function Yl(r){return ql(r)?r.split(Ur).slice(2).join(Ur):Rd(r)?r.slice(da.length):r}const pa={"\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","'":"\\'","\\":"\\\\"},Tf={"\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	","\\'":"'","\\\\":"\\"};function vM(r){return`$${r.map(e=>typeof e=="string"?`['${e.replace(/[\f\n\r\t'\\]/g,t=>pa[t])}']`:typeof e=="number"?`[${e}]`:e._key!==""?`[?(@._key=='${e._key.replace(/['\\]/g,t=>pa[t])}')]`:`[${e._index}]`).join("")}`}function xM(r){return r.map(e=>typeof e=="string"?`['${e.replace(/[\f\n\r\t'\\]/g,t=>pa[t])}']`:typeof e=="number"?`[${e}]`:e._key!==""?`[?(@._key=='${e._key.replace(/['\\]/g,t=>pa[t])}')]`:`[${e._index}]`)}function yM(r){const e=[],t=/\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;let n;for(;(n=t.exec(r))!==null;){if(n[1]!==void 0){const i=n[1].replace(/\\(\\|f|n|r|t|')/g,s=>Tf[s]);e.push(i);continue}if(n[2]!==void 0){e.push(parseInt(n[2],10));continue}if(n[3]!==void 0){const i=n[3].replace(/\\(\\')/g,s=>Tf[s]);e.push({_key:i,_index:-1});continue}}return e}function SM(r){return r.map(e=>{if(typeof e=="string"||typeof e=="number")return e;if(e._key!=="")return{_key:e._key};if(e._index!==-1)return e._index;throw new Error(`invalid segment:${JSON.stringify(e)}`)})}function MM(r){return(typeof r=="string"?Wl(r):r).map(e=>{if(typeof e=="string"||typeof e=="number")return e;if(Array.isArray(e))throw new Error(`IndexTuple segments aren't supported:${JSON.stringify(e)}`);if(EM(e))return e;if(e._key)return{_key:e._key,_index:-1};throw new Error(`invalid segment:${JSON.stringify(e)}`)})}function EM(r){return typeof r=="object"&&"_key"in r&&"_index"in r}function bf(r){return r.map(e=>{if(typeof e=="string"||typeof e=="number")return e;if(e._index!==-1)return e._index;throw new Error(`invalid segment:${JSON.stringify(e)}`)})}function TM(r,e){if(!e?.mappings)return;const t=vM(bf(r));if(e.mappings[t]!==void 0)return{mapping:e.mappings[t],matchedPath:t,pathSuffix:""};const n=xM(bf(r));for(let i=n.length-1;i>=0;i--){const s=`$${n.slice(0,i).join("")}`,o=e.mappings[s];if(o){const a=t.substring(s.length);return{mapping:o,matchedPath:s,pathSuffix:a}}}}function bM(r){const{resultSourceMap:e,resultPath:t}=r,{mapping:n,pathSuffix:i}=TM(t,e)||{};if(!n||n.source.type==="literal"||n.source.type==="unknown")return;const s=e.documents[n.source.document],o=e.paths[n.source.path];if(s&&o){const{baseUrl:a,workspace:l,tool:u}=AM(typeof r.studioUrl=="function"?r.studioUrl(s):r.studioUrl);if(!a)return;const{_id:c,_type:f,_projectId:d,_dataset:p}=s;return{baseUrl:a,workspace:l,tool:u,id:c,type:f,path:yM(o+i),projectId:d,dataset:p}}}function AM(r){let e=typeof r=="string"?r:r.baseUrl;return e!=="/"&&(e=e.replace(/\/$/,"")),typeof r=="string"?{baseUrl:e}:{...r,baseUrl:e}}const Zs=OS(Hl(),md(1)),Gr=xd(Zs),wM=vd({baseUrl:Zs,dataset:Gr,id:Zs,path:Zs,projectId:Gr,tool:Gr,type:Gr,workspace:Gr,perspective:DS(Hl(),"drafts")});function RM(r){return US(wM,r)}function CM(r){return r!==null&&Array.isArray(r)}function PM(r){let e="";for(const t of r){if(typeof t=="string"){e&&(e+="."),e+=t;continue}if(typeof t=="number"){e&&(e+=":"),e+=`${t}`;continue}if(CM(t)){e&&(e+=":"),e+=`${t.join(",")}}`;continue}if(t._key){e&&(e+=":"),e+=`${t._key}`;continue}}return e}function LM(r){const{id:e,path:t,baseUrl:n,tool:i,workspace:s,type:o}=r;return RM(r)?[["id",Yl(e)],["type",o],["path",PM(Xl.fromString(t))],["base",encodeURIComponent(n)],["workspace",s],["tool",i]].filter(([,a])=>!!a).map(a=>a.join("=")).join(";"):void 0}const DM=(r,e,t,n)=>{if(!e||!t)return;const i=MM(n),s=bM({resultPath:i,resultSourceMap:e,studioUrl:t});if(s)return LM({baseUrl:s.baseUrl,workspace:s.workspace,tool:s.tool,type:s.type,id:s.id,path:typeof s.path=="string"?s.path:Xl.toString(SM(s.path))})};function Cd(r,e,t,n){const i=o=>o?typeof o=="string"?Xl.fromString(o):o:[],s=i(n);return Object.assign(o=>DM(r,e,t,[...s,...i(o)]),{scope:o=>Cd(r,e,t,[...s,...i(o)])})}function UM(r,e,t){return Cd(r,e,t)}function IM({createFetcherStore:r,studioUrlStore:e}){const t={},n={};return(i,s=t,o=n)=>{typeof i=="object"&&(s=i.params||t,o=i.options||n,i=i.query);const a=o.initial?{perspective:"published",...o.initial}:void 0,l=JSON.parse(JSON.stringify(s)),u=r(i,l,a),c=Df(u.value);return mp(()=>u.subscribe(d=>{const p=Qd(c);(p.error!==d.error||p.loading!==d.loading||p.perspective!==d.perspective||!oM(p.data,d.data))&&c.set(d)})),ep([c,e],([d,p])=>({...d,encodeDataAttribute:UM(d.data,d.sourceMap,p)}))}}const NM=r=>{const{createFetcherStore:e,setServerClient:t,enableLiveMode:n,unstable__cache:i,unstable__serverClient:s}=nM({tag:"svelte-loader",...r}),o=iM(r.client),a=IM({createFetcherStore:e,studioUrlStore:o}),l=rM({enableLiveMode:n,studioUrlStore:o});return{loadQuery:async(c,f={},d={})=>{const{headers:p,tag:g}=d,_=d.perspective||s.instance?.config().perspective||"published",m=d.stega??s.instance?.config().stega??!1;if(typeof document<"u")throw new Error("Cannot use `loadQuery` in a browser environment, you should use it inside a load function.");if(_!=="published"&&!s.instance)throw new Error('You cannot use other perspectives than "published" unless call "setServerClient" first.');if(_==="published"){const x=d.useCdn||s.instance.config().useCdn,{result:S,resultSourceMap:M}=await i.instance.fetch(JSON.stringify({query:c,params:f,perspective:_,useCdn:x,stega:m}));return{data:S,sourceMap:M}}if(!s.canPreviewDrafts)throw new Error('You cannot use "drafts" unless you set a "token" in the "client" instance passed to "setServerClient".');const{result:h,resultSourceMap:v}=await s.instance.fetch(c,f,{filterResponse:!1,resultSourceMap:"withKeyArraySelector",perspective:_,useCdn:!1,headers:p,tag:g,stega:m});return{data:h,sourceMap:v}},useQuery:a,setServerClient:t,useLiveMode:l,unstable__serverClient:s}},{useLiveMode:OM}=NM({client:!1,ssr:!0});function FM(r,e){cs(e,!0);const t=mr(e,"enabled",3,!0),n=Xs({value:void 0});BS(n),Gn(()=>{t()?(n.value="query",OM({client:e.client})):n.value=void 0});var i=Sr(),s=oi(i);ma(s,()=>e.children??zn),Ot(r,i),us()}const BM=Symbol("previewing");function zM(r){Lf(BM,r)}function kM(r,e){cs(e,!0);const t=mr(e,"enabled",3,!0);zM(t());var n=Sr(),i=oi(n);ma(i,()=>e.children??zn),Ot(r,n),us()}var HM=Ir('<div class="page-wrapper svelte-12qhfyh"><!></div>'),VM=Ir('<div><div class="clipped-contents svelte-12qhfyh"><div class="section-title-container svelte-12qhfyh"><h1 class="type:h1 section-title svelte-12qhfyh"> </h1></div> <div class="homepage-copy-container svelte-12qhfyh"><h1 class="headline svelte-12qhfyh"><!></h1> <div class="footnote svelte-12qhfyh"><!></div></div> <div class="webgl-background"><a href="/" aria-label="Home"></a></div></div> <div class="pages svelte-12qhfyh"><!></div></div>'),GM=Ir("<!> <!> <!>",1);function fE(r,e){cs(e,!0);const t=()=>dl(Dl,"$page",n),[n,i]=hl(),s="elastic.out(1,1)",o="elastic.out(1,1.7)",a=1,l=1,u=1100,c=800,f=320,d=100,p=100,g=75;let _,m,h,v,x,S,M=s,b=a,E=0,P,y,A,z=0,X,G=xt(Xs(ot.EXPANDED)),I=xt(u),O=xt(0),R=xt(0),N=xt(0),q=xt(void 0),k=xt(void 0),j=xt("/"),D=xt(0),B=xt(Xs({})),ee=xt(Xs({})),J=xt("/"),Q=xt(""),pe=xt(!1);const fe=e.data.pages.home?.content,{previewEnabled:_e}=e.data,Pe={marks:{}};op.subscribe(ge=>{qe(Q,ge,!0)}),up(ge=>{if(ge?.from?.url.pathname!==ge?.to?.url.pathname){if(qe(J,window.location.pathname,!0),ge?.from?.url.pathname==="/")qe(B,{easing:nf,y:100,duration:450},!0),qe(ee,{duration:0},!0);else if(ge?.to?.url.pathname==="/")qe(B,{duration:0},!0),qe(ee,{easing:nf,y:100,duration:450},!0);else{const Ye=Rr.map(T=>T.link).indexOf(ge?.from?.url.pathname??"NOT_A_REAL_STRING"),ze=Rr.map(T=>T.link).indexOf(ge?.to?.url.pathname??"NOT_A_REAL_STRING"),C=ze>Ye||ze===-1?1:-1;qe(B,{easing:mc.easeOut.config(.6,1),x:C*100+"vw",opacity:1,duration:de(I)},!0),qe(ee,{easing:mc.easeOut.config(.6,1),x:C*-100+"vw",opacity:1,duration:de(I)},!0)}qe(q,!1),qe(j,ge?.to?.url.pathname??"",!0),P=!1,ge?.to?.url.pathname==="/"?(qe(G,ot.EXPANDED,!0),A=ge?.from?.url.pathname??""):qe(G,ot.COLLAPSED,!0),Re(b)}}),fp(()=>{gtag("event","page_view",{page_title:"cyber•Fund | "+de(Q),page_location:"https://cyber.fund"+t().url.pathname})}),Gn(()=>{!_&&!de(pe)&&Ws(()=>{t().url.pathname==="/"?qe(G,ot.EXPANDED,!0):qe(G,ot.COLLAPSED,!0),qe(j,t().url.pathname,!0),_=gS(h),qe(pe,!0),Te()})});function Xe(ge){de(G)===ot.EXPANDED&&ge.deltaY>4?ic(A||"/about"):de(G)===ot.COLLAPSED&&ge.deltaY<-40&&ge.deltaY<z&&de(N)<=0&&!P&&ic("/"),de(N)<=0&&P&&(y=setTimeout(()=>{P=!1},500)),z=ge.deltaY}function Te(){if(de(O)===0||de(R)===0)return;X=de(O)<Vm;let ge=de(O)*(14/16);M=o,b=l,qe(I,c),X||(M=s,b=a,qe(I,u)),de(O)>Gm&&(ge=de(O)*(12/16)-5),qe(D,ge,!0),Re(0)}function F(){qe(k,document.body.scrollHeight<de(R)*2)}function Je(){t().url.pathname==="/"||!S||(X?F():de(N)>d&&de(G)!=ot.ISLAND?(qe(G,ot.ISLAND,!0),Re(b)):de(N)<=10&&de(G)!=ot.COLLAPSED&&(qe(G,ot.COLLAPSED,!0),Re(b)),de(N)>50&&(P=!0,clearInterval(y)),qe(q,de(N)>E&&de(N)>p||de(N)>S.clientHeight-de(R)-g,!0),E=de(N))}function be(ge){de(G)===ot.EXPANDED&&ge.preventDefault()}const Re=ge=>{if(!v||!_)return;const Ye=(de(O)-de(D))/2+"px";let ze={clip:{top:"-200px",bottom:"0",lr:"0"},round:{top:"0",bottom:"0"},sectionTitle:{y:"300px",opacity:"0"},webgl:{scale:"1.15",y:"0"},homepageCopyOpacity:1};de(G)===ot.EXPANDED?ze={clip:{top:"-200px",bottom:"0",lr:"0"},round:{top:"0",bottom:"0"},sectionTitle:{y:"300px",opacity:"0"},webgl:{scale:"1.15",y:"0"},homepageCopyOpacity:1}:X&&(de(G)===ot.ISLAND||de(G)===ot.COLLAPSED)?ze={clip:{top:"25px",bottom:de(R)-25-48+"px",lr:"25px"},round:{top:"24px",bottom:"24px"},sectionTitle:{y:"0px",opacity:"0"},webgl:{scale:"1.5",y:"-200px"},homepageCopyOpacity:0}:de(G)===ot.COLLAPSED?ze={clip:{top:"-200px",bottom:de(R)-f+"px",lr:Ye},round:{top:"0px",bottom:"70px"},sectionTitle:{y:"0px",opacity:"1"},webgl:{scale:"1.5",y:"-200px"},homepageCopyOpacity:0}:de(G)===ot.ISLAND&&(ze={clip:{top:"-200px",bottom:de(R)-35-50+"px",lr:Ye},round:{top:"0px",bottom:"37px"},sectionTitle:{y:"0px",opacity:"1"},webgl:{scale:"1.3",y:"-400px"},homepageCopyOpacity:0}),ri.to(m,{duration:ge,ease:M,overwrite:de(G)!=ot.EXPANDED,"--clip-top":ze.clip.top,"--clip-bottom":ze.clip.bottom,"--clip-lr":ze.clip.lr,"--round-top":ze.round.top,"--round-bottom":ze.round.bottom,"--section-title-y":ze.sectionTitle.y,"--section-title-opacity":ze.sectionTitle.opacity,"--webgl-scale":ze.webgl.scale,"--webgl-y":ze.webgl.y,"--homepage-copy-opacity":ze.homepageCopyOpacity})};Gn(()=>{de(O),de(R),Ws(()=>{Te()})}),Gn(()=>{de(N),Ws(()=>{Je()})});var Ce=GM(),je=oi(Ce);{let ge=kn(()=>de(G)===ot.EXPANDED),Ye=kn(()=>t().url.pathname==="/");Xm(je,{get expanded(){return de(ge)},get showPillButtonBackgrounds(){return de(Ye)},get collapsedWidth(){return de(D)}})}var Oe=Fn(je,2);{let ge=kn(()=>de(q)&&!de(k)),Ye=kn(()=>t().url.pathname==="/");xS(Oe,{get activeRoute(){return de(j)},get hide(){return de(ge)},get transparent(){return de(Ye)}})}var Ne=Fn(Oe,2);kM(Ne,{get enabled(){return _e},children:(ge,Ye)=>{MS(ge,{get enabled(){return _e},children:(ze,C)=>{FM(ze,{get enabled(){return _e},get client(){return dp},children:(T,Y)=>{var re=VM();let ie;var se=zt(re),ye=zt(se),oe=zt(ye),me=zt(oe,!0);Dt(oe),Dt(ye);var U=Fn(ye,2),ae=zt(U),Z=zt(ae);ap(Z,()=>fe?.headline),Dt(ae);var Ae=Fn(ae,2),Me=zt(Ae);{let ne=kn(()=>fe?.footnote||[]);hp(Me,{get value(){return de(ne)},get components(){return Pe}})}Dt(Ae),Dt(U),ei(U,ne=>x=ne,()=>x);var Ee=Fn(U,2),xe=zt(Ee);ei(xe,ne=>h=ne,()=>h),Dt(Ee),Dt(se),ei(se,ne=>v=ne,()=>v);var L=Fn(se,2),le=zt(L);vp(le,()=>de(J),ne=>{var ue=HM(),ce=zt(ue);ma(ce,()=>e.children??zn),Dt(ue),ac(1,ue,()=>tf,()=>de(B)),ac(2,ue,()=>tf,()=>de(ee)),Ot(ne,ue)}),Dt(L),ei(L,ne=>S=ne,()=>S),Dt(re),ei(re,ne=>m=ne,()=>m),pr(()=>{ie=Qs(re,1,"pages-wrapper svelte-12qhfyh",null,ie,{in:de(pe),expanded:de(G)===ot.EXPANDED}),Js(me,de(Q)),Qs(xe,1,`webgl-container ${de(G)===ot.EXPANDED?"":"blur"}`,"svelte-12qhfyh")}),np("wheel",re,Xe),ip("mousedown",xe,be),Ot(T,re)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),zo("innerWidth",ge=>qe(O,ge,!0)),zo("innerHeight",ge=>qe(R,ge,!0)),sp("y",()=>de(N),ge=>qe(N,ge,!0)),Ot(r,Ce),us(),i()}tp(["mousedown"]);export{fE as _,cE as a,lE as b,uE as c,ql as d,bd as e,DS as f,Yl as g,xd as h,Rd as i,OS as j,Hl as k,US as l,md as m,vd as o,aE as p,IS as r,oE as s,NS as u};

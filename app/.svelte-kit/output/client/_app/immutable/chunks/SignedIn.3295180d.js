import{s as d,e as g,c as h,u as S,g as w,d as $}from"./scheduler.f7e2830c.js";import{S as k,i as A,e as _,a as C,d as a,p as F,t as c,b as y,f as O}from"./index.680ae559.js";import{w as u}from"./singletons.0568a79b.js";import{o as q,g as z,b as I}from"./firebase.42cd626d.js";function N(t,n=null){let r;if(!globalThis.window){const{subscribe:s}=u(n);return{subscribe:s}}if(!t){console.warn("Firebase Auth is not initialized. Are you missing FirebaseApp as a parent component?");const{subscribe:s}=u(null);return{subscribe:s}}const{subscribe:e}=u((t==null?void 0:t.currentUser)??null,s=>(r=q(t,o=>{s(o)}),()=>r()));return{subscribe:e}}const T=t=>({user:t&1}),p=t=>({user:t[0],auth:t[1],signOut:t[5]});function b(t){let n;const r=t[4].default,e=h(r,t,t[3],p);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,o){e&&e.m(s,o),n=!0},p(s,o){e&&e.p&&(!n||o&9)&&S(e,r,s,s[3],n?$(r,s[3],o,T):w(s[3]),p)},i(s){n||(a(e,s),n=!0)},o(s){c(e,s),n=!1},d(s){e&&e.d(s)}}}function U(t){let n,r,e=t[0]&&b(t);return{c(){e&&e.c(),n=_()},l(s){e&&e.l(s),n=_()},m(s,o){e&&e.m(s,o),C(s,n,o),r=!0},p(s,[o]){s[0]?e?(e.p(s,o),o&1&&a(e,1)):(e=b(s),e.c(),a(e,1),e.m(n.parentNode,n)):e&&(F(),c(e,1,1,()=>{e=null}),y())},i(s){r||(a(e),r=!0)},o(s){c(e),r=!1},d(s){s&&O(n),e&&e.d(s)}}}function j(t,n,r){let e,{$$slots:s={},$$scope:o}=n;const l=z().auth,f=N(l);g(t,f,i=>r(0,e=i));const m=()=>I(l);return t.$$set=i=>{"$$scope"in i&&r(3,o=i.$$scope)},[e,l,f,o,s,m]}class G extends k{constructor(n){super(),A(this,n,j,U,d,{})}}export{G as S,N as u};

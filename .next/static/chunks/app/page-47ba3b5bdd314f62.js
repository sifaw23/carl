(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{445:function(e,t,a){Promise.resolve().then(a.bind(a,66026))},66026:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return T}});var s=a(57437),r=a(2265),i=a(83533);let n=e=>{let{href:t,variant:a,icon:r,children:n,className:l="",onClick:o}=e;return(0,s.jsxs)(i.E.a,{href:t,onClick:o,className:"".concat("px-6 py-3 rounded-full text-lg font-bold text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2"," ").concat({primary:"bg-gradient-to-r from-pink-500 to-purple-500 shadow-pink-500/25 hover:shadow-pink-500/40 hover:from-pink-600 hover:to-purple-600",secondary:"bg-gradient-to-r from-cyan-400 to-blue-500 shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-cyan-500 hover:to-blue-600"}[a]," ").concat(l),whileHover:{scale:1.05},whileTap:{scale:.95},children:[r&&(0,s.jsx)(i.E.span,{className:"inline-block",animate:{y:[-2,2]},transition:{duration:.6,repeat:1/0,repeatType:"reverse"},children:r}),(0,s.jsx)("span",{children:n})]})};var l=a(16691),o=a.n(l),c=a(37712),d=e=>{let{size:t="md",className:a="",interactive:n=!0,effectIntensity:l="medium"}=e,d=(0,c.E)(),[m,x]=(0,r.useState)(!1),[h,u]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=()=>{u(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let{width:p,height:f,containerClass:w}=(()=>{if(h)return{width:"w-[280px]",height:"h-[280px]",containerClass:"px-4"};switch(t){case"sm":return{width:"w-[300px]",height:"h-[300px]",containerClass:""};case"md":default:return{width:"w-[400px]",height:"h-[400px]",containerClass:""};case"lg":return{width:"w-[600px]",height:"h-[600px]",containerClass:""}}})(),g=async()=>{n&&(x(!0),await d.start({scale:[1,1.1,.95,1.05,1],rotate:[0,-5,8,-3,0],transition:{duration:h?.5:.8,ease:"easeInOut"}}),x(!1))};return(0,s.jsx)(i.E.div,{className:"relative select-none ".concat(w," ").concat(a),onHoverStart:()=>!h&&g(),onTapStart:()=>g(),children:(0,s.jsxs)(i.E.div,{className:"relative mx-auto ".concat(p," ").concat(f),animate:d,children:[(0,s.jsx)(i.E.div,{className:"absolute inset-0 rounded-full opacity-75",animate:{background:["radial-gradient(circle at 30% 30%, #FFD700 0%, transparent 70%)","radial-gradient(circle at 70% 70%, #FF1493 0%, transparent 70%)","radial-gradient(circle at 30% 70%, #00FF7F 0%, transparent 70%)","radial-gradient(circle at 70% 30%, #FFD700 0%, transparent 70%)"],scale:[1,1.05,1],rotate:[0,180,360]},transition:{duration:h?15:10,repeat:1/0,ease:"linear"}}),"low"!==l&&[...Array(h?4:8)].map((e,t)=>(0,s.jsx)(i.E.div,{className:"absolute -inset-4 rounded-full border-2 border-transparent",style:{borderImage:"linear-gradient(45deg, #FF1493, #FFD700, #00FF7F) 1",transform:"rotate(".concat(45*t,"deg)")},animate:{scale:[1,1.05,1],opacity:[.1,.2,.1]},transition:{duration:h?3:2,delay:.2*t,repeat:1/0,ease:"easeInOut"}},"energy-".concat(t))),(0,s.jsxs)(i.E.div,{className:"relative z-10 w-full h-full",animate:{scale:m?1.05:1},transition:{duration:.3},children:["low"!==l&&!h&&(0,s.jsx)(i.E.div,{className:"absolute inset-0 z-20 mix-blend-overlay",animate:{background:["radial-gradient(circle at 35% 35%, rgba(255,255,255,0.8) 0%, transparent 10%)","radial-gradient(circle at 38% 38%, rgba(255,255,255,0.8) 0%, transparent 10%)","radial-gradient(circle at 35% 35%, rgba(255,255,255,0.8) 0%, transparent 10%)"]},transition:{duration:3,repeat:1/0,ease:"easeInOut"}}),(0,s.jsx)("div",{className:"relative w-full h-full",children:(0,s.jsx)(o(),{src:"/crazy-carl.png",alt:"Crazy Carl",fill:!0,priority:!0,className:"object-contain drop-shadow-[0_0_20px_rgba(255,20,147,0.4)]",sizes:h?"280px":"sm"===t?"300px":"md"===t?"400px":"600px"})}),"low"!==l&&(0,s.jsx)(i.E.div,{className:"absolute bottom-[38%] left-1/2 -translate-x-1/2 w-[60%] h-[8%] sm:h-[10%] bg-gradient-to-r from-[#FF1493] via-[#FFD700] to-[#00FF7F] blur-sm",animate:{opacity:[.2,.4,.2],scale:[1,1.03,1]},transition:{duration:h?3:2,repeat:1/0,ease:"easeInOut"}})]}),"low"!==l&&["\uD83E\uDD2A","\uD83D\uDCB8","\uD83D\uDE80"].map((e,t)=>(0,s.jsx)(i.E.div,{className:"absolute ".concat(h?"text-xl":"text-2xl sm:text-3xl"),style:{top:"".concat(15+t*(h?15:12),"%"),left:"".concat(80+t%2*(h?8:10),"%")},animate:{y:[-5,5],x:[-3,3],rotate:[-15,15],scale:[.9,1.1]},transition:{duration:2+.2*t,repeat:1/0,repeatType:"reverse",ease:"easeInOut",delay:.1*t},children:e},"emoji-".concat(t))),"high"===l&&[...Array(h?6:12)].map((e,t)=>(0,s.jsx)(i.E.div,{className:"absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full",style:{top:"".concat(100*Math.random(),"%"),left:"".concat(100*Math.random(),"%")},animate:{scale:[0,1.2,0],opacity:[0,.6,0],rotate:[0,180,360]},transition:{duration:h?2:1.5,repeat:1/0,delay:.1*t,ease:"backOut"}},"sparkle-".concat(t)))]})})};let m=e=>{let{text:t,className:a=""}=e,n=["#FF1493","#FF4500","#FFD700","#00FF7F","#00BFFF","#9400D3"],[l,o]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>o(window.innerWidth<768);return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,s.jsx)("div",{className:"flex flex-wrap ".concat(a),children:t.split("").map((e,t)=>(0,s.jsx)(i.E.span,{style:{color:n[t%n.length]},animate:{scale:[1,1.1,1],rotate:l?0:[0,3,-3,0]},transition:{duration:2,repeat:1/0,delay:t*(l?.05:.1)},className:"inline-block",children:" "===e?"\xa0":e},t))})},x=()=>{let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>t(window.innerWidth<768);return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,s.jsxs)("div",{className:"absolute inset-0 overflow-hidden",children:[(0,s.jsx)(i.E.div,{className:"absolute inset-0 opacity-30",animate:{background:["radial-gradient(circle at 30% 30%, #FF1493 0%, transparent 50%)","radial-gradient(circle at 70% 70%, #00FF7F 0%, transparent 50%)","radial-gradient(circle at 30% 70%, #FFD700 0%, transparent 50%)","radial-gradient(circle at 70% 30%, #FF1493 0%, transparent 50%)"]},transition:{duration:e?15:10,repeat:1/0,ease:"linear"}}),[...Array(e?3:5)].map((e,t)=>(0,s.jsx)(i.E.div,{className:"absolute w-full h-full",animate:{rotate:[0,360],scale:[1,1.1,1]},transition:{duration:15+5*t,repeat:1/0,ease:"linear"},children:(0,s.jsx)("div",{className:"w-full h-full bg-gradient-conic from-purple-500/20 via-pink-500/20 to-yellow-500/20",style:{transform:"rotate(".concat(72*t,"deg)")}})},t))]})},h=e=>{let{children:t,delay:a=0}=e;return(0,s.jsx)(i.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:a,ease:"easeOut"},children:t})},u=()=>{let[e,t]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{t(!0)},[]),e)?(0,s.jsxs)("div",{className:"relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#120321] px-4 py-16 sm:py-0",children:[(0,s.jsx)(x,{}),(0,s.jsx)("div",{className:"container mx-auto relative z-10",children:(0,s.jsxs)("div",{className:"flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-8 md:gap-12 max-w-7xl mx-auto",children:[(0,s.jsxs)("div",{className:"w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left",children:[(0,s.jsx)(h,{children:(0,s.jsxs)("h1",{className:"text-3xl sm:text-5xl md:text-7xl font-bold leading-tight",children:[(0,s.jsx)(m,{text:"The Face of",className:"justify-center md:justify-start mb-2 sm:mb-4"}),(0,s.jsx)(i.E.span,{className:"block text-white mt-2",animate:{textShadow:["0 0 20px rgba(255,20,147,0.8)","0 0 40px rgba(0,255,127,0.8)","0 0 20px rgba(255,20,147,0.8)"]},transition:{duration:2,repeat:1/0},children:"Crypto Chaos"})]})}),(0,s.jsx)(h,{delay:.3,children:(0,s.jsxs)(i.E.p,{className:"text-sm sm:text-base md:text-lg text-gray-300 relative max-w-[90%] mx-auto md:mx-0",children:["Meet crypto's wildest meme – Carl's here to vibe through every pump, dump, and meltdown. Your fave market fail? Bet it's $CARL.",(0,s.jsx)(i.E.span,{animate:{rotate:[0,15,-15,0],scale:[1,1.2,1]},transition:{duration:1.5,repeat:1/0},className:"inline-block ml-1",children:"\uD83E\uDD2A"})]})}),(0,s.jsx)(h,{delay:.6,children:(0,s.jsxs)(i.E.div,{className:"flex gap-3 sm:gap-4 flex-wrap justify-center md:justify-start",whileInView:{opacity:1},viewport:{once:!0},children:[(0,s.jsxs)(n,{href:"#",variant:"primary",icon:"\uD83D\uDCB8",className:"relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-sm sm:text-base",children:[(0,s.jsx)(i.E.span,{className:"absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-pink-500/20",animate:{x:["0%","100%","0%"]},transition:{duration:3,repeat:1/0}}),"Be Like Carl"]}),(0,s.jsx)(n,{href:"https://t.me/+o4XlacsvDoQwMzY0",variant:"secondary",icon:"\uD83D\uDE80",className:"bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-105 hover:rotate-3 text-sm sm:text-base",children:"Share the Madness"})]})})]}),(0,s.jsx)(i.E.div,{className:"w-full md:w-1/2",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.8},children:(0,s.jsx)("div",{className:"max-w-[300px] sm:max-w-[400px] md:max-w-[600px] mx-auto",children:(0,s.jsx)(d,{})})})]})}),(0,s.jsx)(i.E.div,{className:"absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 md:hidden",animate:{y:[0,5,0],opacity:[.5,1,.5]},transition:{duration:2,repeat:1/0},children:(0,s.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,s.jsx)(i.E.div,{className:"w-1 h-6 rounded-full border border-white/30",animate:{borderColor:["rgba(255,255,255,0.3)","rgba(255,255,255,0.6)","rgba(255,255,255,0.3)"]},transition:{duration:2,repeat:1/0},children:(0,s.jsx)(i.E.div,{className:"w-1 h-2 bg-white/50 rounded-full",animate:{y:[0,16,0],opacity:[0,1,0]},transition:{duration:2,repeat:1/0}})}),(0,s.jsx)("span",{className:"text-xs",children:"Scroll"})]})})]}):null};var p=()=>{let e=(0,r.useRef)(null),[t,a]=(0,r.useState)({width:window.innerWidth,height:window.innerHeight});return(0,r.useEffect)(()=>{let e=()=>{a({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.useEffect)(()=>{let a;let s=e.current;if(!s)return;let r=s.getContext("2d");if(!r)return;s.width=t.width,s.height=t.height;let i=["\uD83D\uDE80","\uD83D\uDC8E","\uD83C\uDF19","\uD83D\uDCB0","\uD83E\uDD2A"],n=t.width<768;class l{update(e,t){this.angle+=this.spin,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed,this.x<-50&&(this.x=e+50),this.x>e+50&&(this.x=-50),this.y<-50&&(this.y=t+50),this.y>t+50&&(this.y=-50)}draw(e){e.save(),e.globalAlpha=.4,e.font="".concat(this.size,"px Arial"),e.textAlign="center",e.textBaseline="middle",e.translate(this.x,this.y),e.rotate(this.angle),e.fillText(this.emoji,0,0),e.restore()}constructor(e,t){this.x=Math.random()*e,this.y=Math.random()*t,this.speed=(1+1*Math.random())*(n?.7:1),this.angle=Math.random()*Math.PI*2,this.spin=(.2*Math.random()-.1)*(n?.7:1),this.emoji=i[Math.floor(Math.random()*i.length)],this.size=(15+15*Math.random())*(n?.7:1)}}let o=Array.from({length:n?10:20},()=>new l(t.width,t.height)),c=0,d=e=>{a=requestAnimationFrame(d);let i=e-c;i<16.666666666666668||(c=e-i%16.666666666666668,r.clearRect(0,0,s.width,s.height),o.forEach(e=>{e.update(t.width,t.height),e.draw(r)}))};return d(0),()=>{a&&cancelAnimationFrame(a)}},[t]),(0,s.jsx)("canvas",{ref:e,className:"fixed inset-0 pointer-events-none",style:{width:"100vw",height:"100vh",opacity:.5},width:t.width,height:t.height})},f=a(91393),w=a(45253),g=a(3952),v=a(24235),b=a(50039),j=a(86812),F=a(19223);let y=[{price:3e-4,message:"We just getting started fam! \uD83D\uDE24"},{price:.0012,message:"Ayy we pumping! \uD83D\uDCC8"},{price:6e-4,message:"Paper hands getting shaken \uD83E\uDD23"},{price:5e-4,message:"Weak hands gone, real ones know \uD83D\uDC8E"},{price:.02,message:"HOLY SHIT WE MOONING! \uD83D\uDE80"},{price:.5,message:"BROOO 500M MC! WE EATING GOOD! \uD83C\uDF7D️"},{price:1,message:"1 BILLI MC! IMAGINE NOT APING IN! \uD83E\uDD8D"}],N={pump:["1000x INCOMING! \uD83D\uDE80","BEARS IN SHAMBLES! \uD83D\uDCC8","PAPERHANDS NGMI! \uD83E\uDD21","PUMP OR DIE! \uD83D\uDD25","WE ALL GONNA MAKE IT! \uD83D\uDCB0"],dump:["THANKS FOR THE LIQUIDITY! \uD83D\uDE02","DISCOUNT OF A LIFETIME! \uD83D\uDC8E","FILLING MY BAGS RN! \uD83C\uDFAF","SHAKING OUT PAPER HANDS! \uD83E\uDDFB","LAST CHANCE THIS CHEAP! \uD83D\uDD25"]},D=e=>e>=1e9?"$".concat((e/1e9).toFixed(2),"B"):e>=1e6?"$".concat((e/1e6).toFixed(2),"M"):e>=1e3?"$".concat((e/1e3).toFixed(2),"K"):"$".concat(e.toFixed(2)),E=()=>{let e=[{time:"0",value:y[0].price}],[t,a]=(0,r.useState)(e),[n,l]=(0,r.useState)(!0),[o,c]=(0,r.useState)(0),[d,m]=(0,r.useState)(y[0].price),[x,h]=(0,r.useState)(0),[u,p]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=()=>{p(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.useEffect)(()=>{let e=()=>{let e=d,t=y[x].price,a=t>d,s=a?.5:.3,r=a?1.3:.85;return Array.from({length:20},(i,n)=>(e*=r+(Math.random()-.5)*s,a&&e>1.1*t?e=t*(.9+.2*Math.random()):!a&&e<.9*t&&(e=t*(.9+.2*Math.random())),{time:n.toString(),value:e}))},t=setInterval(()=>{let t=e();a(t);let s=t[t.length-1].value;m(s);let r=y[x].price;Math.abs(s-r)/r<.1&&x<y.length-1&&h(e=>e+1),l(s>d),c(Math.floor(5*Math.random()))},2e3);return()=>clearInterval(t)},[d,x]);let E=e=>e<1e-4?e.toExponential(4):e<.01?e.toFixed(6):e<1?e.toFixed(4):e.toFixed(2),C=e=>D(1e9*e);return(0,s.jsxs)("div",{className:"relative w-full h-full bg-[#0A0A0A] rounded-lg p-2 sm:p-4 border border-gray-800",children:[(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-2 sm:mb-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 sm:gap-4",children:[(0,s.jsx)("span",{className:"text-[#FF1493] text-xl sm:text-2xl font-bold font-mono",children:"$CARL"}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("span",{className:"text-white/60 text-xs sm:text-sm",children:"Price Chart"}),(0,s.jsxs)("span",{className:"text-xs ".concat(n?"text-[#00FF7F]":"text-[#FF1493]"),children:[(()=>{if(t.length<2)return"0";let e=t[0].value;return((t[t.length-1].value-e)/e*100).toFixed(2)})(),"% ",n?"↑":"↓"]})]})]}),(0,s.jsx)("div",{className:"flex items-end sm:items-center gap-2 sm:gap-6",children:(0,s.jsx)(f.M,{mode:"wait",children:(0,s.jsxs)(i.E.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"flex flex-col items-end",children:[(0,s.jsxs)("span",{className:"text-lg sm:text-2xl font-mono font-bold",style:{color:n?"#00FF7F":"#FF1493"},children:["$",E(d)]}),(0,s.jsxs)("span",{className:"text-white/40 font-mono text-xs sm:text-sm",children:["MC: ",C(d)]})]},"price-".concat(d))})})]}),(0,s.jsxs)("div",{className:"relative h-[calc(100%-60px)]",children:[(0,s.jsx)(w.h,{width:"100%",height:"100%",children:(0,s.jsxs)(g.w,{data:t,children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{id:"chartGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:n?"#00FF7F":"#FF1493",stopOpacity:.2}),(0,s.jsx)("stop",{offset:"100%",stopColor:n?"#00FF7F":"#FF1493",stopOpacity:0})]})}),(0,s.jsx)(v.K,{dataKey:"time",stroke:"#333",tick:{fill:"#666",fontSize:u?10:12}}),(0,s.jsx)(b.B,{type:"number",domain:["auto","auto"],stroke:"#333",tick:{fill:"#666",fontSize:u?10:12},tickFormatter:E,width:u?60:80}),(0,s.jsx)(j.u,{content:e=>{let{active:t,payload:a}=e;if(t&&a&&a.length>0){let e=a[0].value;return(0,s.jsx)("div",{className:"bg-black/90 border border-gray-800 p-2 sm:p-3 rounded-lg backdrop-blur-sm",children:(0,s.jsxs)("p",{className:"text-xs sm:text-sm font-mono",children:[(0,s.jsxs)("span",{style:{color:n?"#00FF7F":"#FF1493"},children:["$",E(e)]}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{className:"text-xs text-white/60",children:["MC: ",C(e)]}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"text-xs text-white/60",children:n?N.pump[o]:N.dump[o]})]})})}return null}}),(0,s.jsx)(F.x,{type:"monotone",dataKey:"value",stroke:n?"#00FF7F":"#FF1493",strokeWidth:2,dot:!1,fill:"url(#chartGradient)"})]})}),(0,s.jsx)(i.E.div,{className:"absolute top-4 right-4 z-10",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},children:(0,s.jsx)("span",{className:"px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg ".concat(n?"bg-[#00FF7F]/20 text-[#00FF7F]":"bg-[#FF1493]/20 text-[#FF1493]"),children:y[x].message})},x),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 right-0 h-24",children:[...Array(100)].map((e,t)=>(0,s.jsx)(i.E.div,{className:"absolute bottom-0 w-[1px]",style:{left:"".concat(t,"%"),height:"".concat(20+80*Math.random(),"%"),backgroundColor:n?"#00FF7F":"#FF1493",opacity:.1},animate:{height:["".concat(20+80*Math.random(),"%"),"".concat(20+80*Math.random(),"%")],opacity:[.1,.2,.1]},transition:{duration:2,repeat:1/0,repeatType:"reverse"}},t))})]})]})};var C=a(83039),A=a(76020),k=a(53711);let M=[{title:"Twitter",href:"https://x.com/CrazyCarltoken",icon:(0,s.jsx)(C.Z,{className:"text-[#FF1493] w-5 h-5"})},{title:"Telegram",href:"https://t.me/+o4XlacsvDoQwMzY0",icon:(0,s.jsx)(A.Z,{className:"text-[#00FF7F] w-5 h-5"})}],I=e=>{let{link:t}=e;return(0,s.jsxs)(i.E.a,{href:t.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 px-4 py-3 sm:py-4 rounded-xl bg-black/40 backdrop-blur-sm w-full border border-white/5 hover:border-white/10 transition-all group",whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,s.jsx)("span",{className:"group-hover:scale-110 transition-transform",children:t.icon}),(0,s.jsx)("span",{className:"text-base text-white/80",children:t.title}),(0,s.jsx)(k.Z,{className:"w-4 h-4 opacity-40 ml-auto"})]})},S=()=>(0,s.jsx)("footer",{className:"relative bg-[#13001F]/40 backdrop-blur-xl border-t border-white/5",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-8",children:[(0,s.jsxs)("div",{className:"flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24",children:[(0,s.jsxs)("div",{className:"flex-1 space-y-6",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsx)("div",{className:"relative w-14 h-14",children:(0,s.jsx)(o(),{src:"/crazy-carl.png",alt:"Crazy Carl",fill:!0,className:"object-contain",sizes:"56px",priority:!0})}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h3",{className:"text-2xl font-bold",children:[(0,s.jsx)("span",{className:"text-[#FF1493]",children:"$"}),(0,s.jsx)("span",{className:"text-[#CACACA]",children:"CA"}),(0,s.jsx)("span",{className:"text-[#00FF7F]",children:"RL"})]}),(0,s.jsx)("p",{className:"text-sm text-gray-400",children:"Your favorite degen's favorite token."})]})]}),(0,s.jsx)("div",{className:"flex flex-col gap-2",children:M.map(e=>(0,s.jsx)(I,{link:e},e.title))})]}),(0,s.jsx)("div",{className:"md:w-[400px]",children:(0,s.jsxs)("div",{className:"p-4 sm:p-5 rounded-xl bg-black/40 backdrop-blur-sm  border border-white/5 h-full",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,s.jsx)("p",{className:"text-[#00FF7F] font-medium",children:"Next Target: $1B MCap"}),(0,s.jsx)(i.E.span,{animate:{rotate:[0,360]},transition:{duration:4,repeat:1/0,ease:"linear"},children:"\uD83C\uDFAF"})]}),(0,s.jsx)("p",{className:"text-sm text-gray-400",children:"Carl's taking over crypto fr fr"})]})})]}),(0,s.jsxs)("div",{className:"mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3",children:[(0,s.jsxs)("p",{className:"text-gray-400 text-sm flex items-center gap-2",children:["Get crazy or get rekt ser",(0,s.jsx)(i.E.span,{animate:{rotate:[0,15,-15,0]},transition:{duration:1.5,repeat:1/0},children:"\uD83E\uDD2A"})]}),(0,s.jsxs)("div",{className:"text-sm text-gray-400",children:["Just vibing through the charts",(0,s.jsx)(i.E.span,{className:"inline-block ml-2",animate:{y:[-1,1,-1]},transition:{duration:1,repeat:1/0},children:"\uD83D\uDCC8"})]})]})]})}),z=()=>{let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>t(window.innerWidth<768);return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,s.jsx)("div",{className:"fixed inset-0 pointer-events-none overflow-hidden",children:[...Array(e?2:3)].map((t,a)=>(0,s.jsx)(i.E.div,{className:"absolute rounded-full blur-2xl sm:blur-3xl ".concat(0===a?"bg-[#FF1493]/20":1===a?"bg-[#00FF7F]/20":"bg-[#FF1493]/20"),style:{width:e?"150vw":"800px",aspectRatio:"1",left:"".concat(15+a*(e?20:15),"%"),top:"".concat(25+a*(e?15:10),"%"),zIndex:-1},animate:{scale:[1,1.3,1],rotate:[0,180,360],x:[0,100*(a+1),0],y:[0,50*(a+1),0]},transition:{duration:12+2*a,repeat:1/0,repeatType:"reverse",ease:"linear"}},a))})},L=()=>{let[e,t]=(0,r.useState)({width:0,height:0});return(0,r.useEffect)(()=>{let e=()=>{t({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,s.jsx)("div",{className:"fixed inset-0 pointer-events-none",children:["\uD83D\uDCB8","\uD83D\uDE80","\uD83D\uDE1C","\uD83D\uDC8E","\uD83C\uDF19","\uD83D\uDCC8","\uD83E\uDD2A"].slice(0,e.width<768?4:7).map((t,a)=>(0,s.jsx)(i.E.div,{className:"absolute text-2xl sm:text-4xl md:text-5xl",initial:{y:-20,x:Math.random()*(e.width||100)},animate:{y:e.height,x:[Math.random()*(e.width||100),Math.random()*(e.width||100)],rotate:[0,360],scale:[1,1.2,1]},transition:{duration:8+4*Math.random(),repeat:1/0,ease:"linear"},style:{opacity:.3},children:t},a))})},O=()=>(0,s.jsxs)("div",{className:"relative w-full max-w-[1400px] mx-auto px-2 sm:px-4",children:[(0,s.jsxs)(i.E.div,{className:"relative bg-[#0A0A0A] rounded-xl sm:rounded-3xl p-[2px] shadow-2xl",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,s.jsx)("div",{className:"absolute inset-0 rounded-xl sm:rounded-3xl bg-gradient-to-r from-[#FF1493]/50 to-[#00FF7F]/50 blur-sm"}),(0,s.jsxs)("div",{className:"relative bg-[#0A0A0A] rounded-xl sm:rounded-3xl overflow-hidden border border-white/10",children:[(0,s.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-6 sm:h-8 bg-black/40 backdrop-blur-sm flex items-center justify-between px-2 sm:px-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1 sm:gap-2",children:[(0,s.jsx)(i.E.div,{className:"w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00FF7F]",animate:{opacity:[1,.5,1]},transition:{duration:2,repeat:1/0}}),(0,s.jsx)("span",{className:"text-[10px] sm:text-xs text-white/60",children:"LIVE"})]}),(0,s.jsx)("div",{className:"text-[10px] sm:text-xs text-white/60 font-mono",children:"$CARL/USD"})]}),(0,s.jsx)("div",{className:"pt-6 sm:pt-8",children:(0,s.jsx)("div",{className:"h-[70vh] sm:h-[85vh] w-full",children:(0,s.jsx)(E,{})})}),(0,s.jsx)("div",{className:"absolute inset-0 bg-scan-lines opacity-5 pointer-events-none"}),(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 pointer-events-none"})]})]}),(0,s.jsx)(i.E.div,{className:"absolute -bottom-6 sm:-bottom-10 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 sm:h-1 bg-gradient-to-r from-[#FF1493]/0 via-[#FF1493]/50 to-[#FF1493]/0 blur-lg sm:blur-xl",animate:{opacity:[.5,1,.5]},transition:{duration:2,repeat:1/0}})]});function T(){let[e,t]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{t(!0)},[]),e)?(0,s.jsxs)("main",{className:"min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white overflow-x-hidden",children:[(0,s.jsx)(z,{}),(0,s.jsx)(L,{}),(0,s.jsx)(p,{}),(0,s.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,s.jsx)(u,{}),(0,s.jsx)("section",{className:"flex-grow py-8 sm:py-16 relative",children:(0,s.jsx)(O,{})}),(0,s.jsx)(S,{})]})]}):null}}},function(e){e.O(0,[324,971,938,744],function(){return e(e.s=445)}),_N_E=e.O()}]);
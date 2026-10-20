import React,{useEffect,useRef,useState} from 'react';
export default function FX(){
const cv=useRef(),dot=useRef(),ring=useRef();const[n,setN]=useState(0);const[done,setDone]=useState(false);
useEffect(()=>{let i=0;const t=setInterval(()=>{i+=Math.ceil(Math.random()*9);if(i>=100){i=100;clearInterval(t);setTimeout(()=>setDone(true),350)}setN(i)},40);return()=>clearInterval(t)},[]);
useEffect(()=>{const c=cv.current,x=c.getContext('2d');let w,h,raf;const m={x:-999,y:-999},cols=['#2dd4bf','#38bdf8','#a78bfa','#f472b6','#fbbf24'],pts=[];
const rs=()=>{w=c.width=innerWidth;h=c.height=innerHeight;pts.length=0;const N=Math.min(90,Math.floor(w*h/16000));for(let i=0;i<N;i++)pts.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,c:cols[i%5]})};rs();
const mv=e=>{m.x=e.clientX;m.y=e.clientY};
const draw=()=>{x.clearRect(0,0,w,h);for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;const dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy)||1;if(d<120){p.x+=dx/d*1.2;p.y+=dy/d*1.2}x.fillStyle=p.c;x.globalAlpha=.7;x.beginPath();x.arc(p.x,p.y,1.8,0,6.3);x.fill()}
for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const a=pts[i],b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<130){x.globalAlpha=(1-d/130)*.28;x.strokeStyle=a.c;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
raf=requestAnimationFrame(draw)};
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)draw();
addEventListener('resize',rs);addEventListener('mousemove',mv);return()=>{cancelAnimationFrame(raf);removeEventListener('resize',rs);removeEventListener('mousemove',mv)}},[]);
useEffect(()=>{const fine=matchMedia('(pointer:fine)').matches;if(fine)document.documentElement.classList.add('has-cur');
const mv=e=>{if(!e.target.closest)return;
if(fine){const t=`translate(${e.clientX}px,${e.clientY}px)`;dot.current.style.transform=t;ring.current.style.transform=t;ring.current.classList.toggle('big',!!e.target.closest('a,button,[role=button]'))}
const sp=e.target.closest('.stat-card,.skill-card,.timeline-content,.education-card');if(sp){const r=sp.getBoundingClientRect();sp.style.setProperty('--mx',e.clientX-r.left+'px');sp.style.setProperty('--my',e.clientY-r.top+'px')}
const mg=e.target.closest('.button:not(.nav-cta)');document.querySelectorAll('.magnet').forEach(el=>{if(el!==mg){el.style.transform='';el.classList.remove('magnet')}});
if(mg){mg.classList.add('magnet');const r=mg.getBoundingClientRect();mg.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`}
const fr=document.querySelector('.portrait-frame');if(fr){const r=fr.getBoundingClientRect();if(e.clientY>r.top-200&&e.clientY<r.bottom+200){fr.style.transform=`perspective(900px) rotateY(${((e.clientX-r.left)/r.width-.5)*10}deg) rotateX(${-((e.clientY-r.top)/r.height-.5)*8}deg)`}}};
addEventListener('mousemove',mv);
const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;en.target.classList.add('in');io.unobserve(en.target);const s=en.target.querySelector('strong');if(s&&en.target.classList.contains('stat-card')){const raw=s.textContent,t0=performance.now();const f=t=>{const k=Math.min(1,(t-t0)/1400),e=1-Math.pow(1-k,3);s.textContent=raw.replace(/\d+/g,v=>Math.round(v*e));if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)}}),{threshold:.12});
document.querySelectorAll('.section-heading,.stat-card,.timeline-item,.flip,.skill-card,.education-card,.dm-layer,.dm-card,.dm-foot,.contact-inner').forEach(el=>{el.classList.add('reveal');io.observe(el)});
return()=>{removeEventListener('mousemove',mv);io.disconnect()}},[]);
return <><canvas ref={cv} className="fx-canvas"/><div ref={dot} className="cur-dot"/><div ref={ring} className="cur-ring"/><div className={'preload'+(done?' gone':'')}><div className="pl-mark">GK<span>.</span></div><div className="pl-count">{n}</div><div className="pl-bar"><i style={{width:n+'%'}}/></div></div></>}

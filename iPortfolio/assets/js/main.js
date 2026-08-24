const root=document.documentElement;
const header=document.querySelector('.site-header');
const themeBtn=document.querySelector('.theme-toggle');
const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
const backTop=document.querySelector('.back-to-top');
const storedTheme=localStorage.getItem('portfolio-theme');
if(storedTheme==='light'||storedTheme==='dark') root.dataset.theme=storedTheme;
function syncTheme(){if(themeBtn){const light=root.dataset.theme==='light';themeBtn.textContent=light?'☾':'◐';themeBtn.setAttribute('aria-label',light?'Passer au thème sombre':'Passer au thème clair')}}
syncTheme();
themeBtn?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='light'?'dark':'light';localStorage.setItem('portfolio-theme',root.dataset.theme);syncTheme()});
function closeMenu(){nav?.classList.remove('open');document.body.classList.remove('nav-open');menuBtn?.setAttribute('aria-expanded','false')}
menuBtn?.addEventListener('click',()=>{const open=!nav.classList.contains('open');nav.classList.toggle('open',open);document.body.classList.toggle('nav-open',open);menuBtn.setAttribute('aria-expanded',String(open))});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
window.addEventListener('scroll',()=>{const y=window.scrollY;header?.classList.toggle('scrolled',y>10);backTop?.classList.toggle('visible',y>600)} ,{passive:true});
backTop?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
const reveals=[...document.querySelectorAll('.reveal')];
if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.09,rootMargin:'0px 0px -30px'});reveals.forEach(el=>io.observe(el))}else{reveals.forEach(el=>el.classList.add('visible'))}
const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.main-nav a[href^="#"]')];
if('IntersectionObserver' in window){const spy=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}}),{rootMargin:'-40% 0px -52%'});sections.forEach(s=>spy.observe(s))}
document.querySelector('.copy-email')?.addEventListener('click',async e=>{const btn=e.currentTarget;const email=btn.dataset.email;const feedback=document.querySelector('.copy-feedback');try{await navigator.clipboard.writeText(email);feedback.textContent='Adresse copiée ✓';setTimeout(()=>feedback.textContent='',2400)}catch{window.location.href='mailto:'+email}});
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();

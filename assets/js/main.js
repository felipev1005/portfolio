function show(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  (document.getElementById(id) || document.getElementById('home')).classList.add('active');
  window.scrollTo(0,0);
}
function route(){
  const id = (location.hash || '#home').slice(1);
  show(id);
}
document.addEventListener('click',e=>{
  const a=e.target.closest('a[href^="#"]');
  if(a){
    const id=a.getAttribute('href').slice(1);
    if(document.getElementById(id)){
      e.preventDefault();
      history.pushState({},'',`#${id}`);
      route();
      return;
    }
  }
  const btn=e.target.closest('.toggle-btn');
  if(btn){
    const id=btn.dataset.target;
    const panel=document.getElementById(id);
    if(panel){
      const container=btn.closest('.about__content')||document;
      const nowOpen=!panel.classList.contains('open');
      container.querySelectorAll('.collapsible').forEach(p=>p.classList.remove('open'));
      container.querySelectorAll('.toggle-btn').forEach(b=>b.setAttribute('aria-expanded','false'));
      if(nowOpen){
        panel.classList.add('open');
        btn.setAttribute('aria-expanded','true');
      }
    }
  }
});
window.addEventListener('hashchange',route);
document.addEventListener('DOMContentLoaded',()=>{
  const y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();
  document.querySelectorAll('.toggle-btn').forEach(b=>b.setAttribute('aria-expanded','false'));
  document.querySelectorAll('.collapsible').forEach(p=>p.classList.remove('open'));
  route();
});

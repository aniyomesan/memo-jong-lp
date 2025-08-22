// Smooth scroll
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if(el){
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'start'});
    history.pushState(null, '', '#'+id);
  }
});

// Header elevation
const header = document.querySelector('.site-header');
addEventListener('scroll', ()=>{
  const y = scrollY;
  header.style.boxShadow = y>10 ? '0 10px 30px rgba(0,0,0,.06)' : 'none';
});

// Reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Hero preview toggle
const heroImg = document.getElementById('hero-shot');
const toggleBtn = document.querySelector('.preview-toggle');
let dark = false;
function swapHero(){
  const src = dark ? 'assets/list-dark.png' : 'assets/hero.png';
  if(heroImg) heroImg.src = src;
  toggleBtn.textContent = dark ? 'ライトを試す' : 'ダークを試す';
}
toggleBtn?.addEventListener('click', ()=>{ dark = !dark; swapHero();});
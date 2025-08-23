// Smooth scroll for in-page anchors (header offset safe)
const header = document.getElementById('site-header');
function headerHeight(){ return header ? header.offsetHeight : 72; }

document.addEventListener('click', (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if(el){
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.pageYOffset - (headerHeight() + 12);
    window.scrollTo({ top: y, behavior: 'smooth' });
    history.pushState(null, '', '#'+id);
  }
});

// Header elevation
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

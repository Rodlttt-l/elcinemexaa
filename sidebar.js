document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.createElement('div');
  toggle.className = 'mini-menu';
  toggle.innerHTML = `
    <button class="mini-toggle" aria-label="Abrir menú" aria-expanded="false">☰</button>
    <nav class="mini-nav" aria-hidden="true">
      <button class="mini-close" aria-label="Cerrar">×</button>
      <ul>
        <li><a href="#recomendadas">Películas recomendadas</a></li>
        <li><a href="#cinematografia">Cinematografía</a></li>
        <li><a href="#premios">Premios</a></li>
        <li><a href="#similares">Películas similares</a></li>
        <li><a href="#tabla">Tabla de películas</a></li>
        <li><a href="#musica">Canciones usadas</a></li>
        <li><a href="#opinion">Opiniones</a></li>
        <li><a href="#info-extra">Información del autor</a></li>
      </ul>
    </nav>
  `;

  document.body.appendChild(toggle);

  const btn = toggle.querySelector('.mini-toggle');
  const nav = toggle.querySelector('.mini-nav');
  const close = toggle.querySelector('.mini-close');

  function open(){
    nav.classList.add('open');
    nav.setAttribute('aria-hidden','false');
    btn.setAttribute('aria-expanded','true');
    // move focus into first link
    const firstLink = nav.querySelector('a'); if(firstLink) firstLink.focus();
  }
  function closeNav(){
    nav.classList.remove('open');
    nav.setAttribute('aria-hidden','true');
    btn.setAttribute('aria-expanded','false');
    btn.focus();
  }

  btn.addEventListener('click', () => {
    if(nav.classList.contains('open')) closeNav(); else open();
  });
  close.addEventListener('click', closeNav);

  // close on Escape and outside click
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && nav.classList.contains('open')) closeNav(); });
  document.addEventListener('click', (e)=>{
    if(!nav.classList.contains('open')) return;
    if(!toggle.contains(e.target) && !nav.contains(e.target)) closeNav();
  });

});
// Main site JS: nav toggle, spinner overlay, demo form handling, and link navigation
(function(){
  'use strict';

  function qs(sel, ctx){ return (ctx||document).querySelector(sel) }
  function qsa(sel, ctx){ return Array.from((ctx||document).querySelectorAll(sel)) }

  // Spinner control
  const overlay = qs('#spinner-overlay');
  function showSpinner(){ if(overlay){ overlay.classList.add('visible'); overlay.setAttribute('aria-hidden','false') }}
  function hideSpinner(){ if(overlay){ overlay.classList.remove('visible'); overlay.setAttribute('aria-hidden','true') }}

  // Nav toggle for all pages
  function initNav(){
    qsa('.nav-toggle').forEach(btn => {
      btn.addEventListener('click', ()=>{
        const nav = btn.closest('.navbar');
        const isOpen = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
      });
    });
    // close when clicking a nav link (mobile)
    qsa('.nav_links').forEach(links => {
      links.addEventListener('click', (e)=>{
        if(e.target.tagName === 'A'){
          const nav = links.closest('.navbar');
          if(nav){ nav.classList.remove('open'); const btn = nav.querySelector('.nav-toggle'); if(btn) btn.setAttribute('aria-expanded','false'); }
        }
      });
    });
  }

  // Intercept internal navigation to show spinner briefly
  function initLinkSpinner(){
    qsa('a[href]').forEach(a => {
      const href = a.getAttribute('href') || '';
      // ignore anchors, mailto, external links and links that opt-out via .no-spinner
      if(href.startsWith('#') || href.startsWith('mailto:') || a.classList.contains('no-spinner')) return;
      // external origin check
      try{
        const url = new URL(href, location.href);
        if(url.origin !== location.origin) return;
      }catch(e){ return }

      a.addEventListener('click', (ev)=>{
        // Allow ctrl/meta click to open in new tab
        if(ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.button !== 0) return;
        ev.preventDefault();
        showSpinner();
        setTimeout(()=> { location.href = a.href }, 350);
      });
    });
  }

  // Demo forms and demo buttons: show spinner and prevent real submission
  function initDemoForms(){
    // forms
    qsa('form[data-demo-spinner]').forEach(form => {
      form.addEventListener('submit', (ev)=>{
        ev.preventDefault();
        showSpinner();
        setTimeout(()=>{
          hideSpinner();
          const msg = form.getAttribute('data-demo-message') || 'This is a demo form. No backend is connected.';
          alert(msg);
        }, 700);
      });
    });
    // other demo elements (buttons) with data-demo-spinner
    qsa('[data-demo-spinner]').forEach(el => {
      if(el.tagName === 'FORM') return; // already handled
      el.addEventListener('click', (ev)=>{
        ev.preventDefault();
        showSpinner();
        setTimeout(()=>{
          hideSpinner();
          const msg = el.getAttribute('data-demo-message') || 'Demo action completed.';
          // small feedback
          alert(msg);
        }, 650);
      });
    });
  }

  // Wait for DOM ready
  document.addEventListener('DOMContentLoaded', ()=>{
    initNav();
    initLinkSpinner();
    initDemoForms();
    // ensure overlay exists and is visible initially
    if(overlay){ overlay.classList.add('visible'); }
  });

  // Hide overlay when page fully loaded
  window.addEventListener('load', ()=>{
    setTimeout(()=>{
      hideSpinner();
      document.body.classList.add('loaded');
    }, 220);
  });

})();

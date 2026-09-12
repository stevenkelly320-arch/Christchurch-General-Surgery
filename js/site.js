(function(){
  var nav=document.querySelector('.nav'),btn=document.querySelector('.menu');
  if(btn){btn.addEventListener('click',function(){var open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false');btn.setAttribute('aria-label',open?'Close menu':'Open menu');});
    nav.querySelectorAll('ul a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');});});}
  document.querySelectorAll('form[data-netlify]').forEach(function(f){f.addEventListener('submit',function(){var b=f.querySelector('button[type=submit]');if(b){b.disabled=true;b.textContent='Sending…';}});});
  document.querySelectorAll('a[href^="tel:"]').forEach(function(a){a.addEventListener('click',function(){if(window.gtag){gtag('event','click_to_call',{event_category:'contact',event_label:location.pathname});}});});
  document.querySelectorAll('a[href^="mailto:"]').forEach(function(a){a.addEventListener('click',function(){if(window.gtag){gtag('event','click_to_email',{event_category:'contact',event_label:location.pathname});}});});
})();

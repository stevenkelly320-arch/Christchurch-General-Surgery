/* Meta Pixel (dataset "CGS Website Pixel", Christchurch General Surgery business portfolio).
   Privacy: automatic event/metadata collection is switched off and no form data or
   personal details are ever sent. Events: PageView (every page), Contact (phone or
   email link clicks), Lead (enquiry form thank-you page). */
(function(){
  var PIXEL_ID='2599361263864404';
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('set','autoConfig',false,PIXEL_ID);
  fbq('init',PIXEL_ID);
  fbq('track','PageView');
  if(location.pathname.indexOf('/thank-you')===0){fbq('track','Lead');}
})();
(function(){
  var nav=document.querySelector('.nav'),btn=document.querySelector('.menu');
  if(btn){btn.addEventListener('click',function(){var open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false');btn.setAttribute('aria-label',open?'Close menu':'Open menu');});
    nav.querySelectorAll('ul a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');});});}
  document.querySelectorAll('form[data-netlify]').forEach(function(f){f.addEventListener('submit',function(){var b=f.querySelector('button[type=submit]');if(b){b.disabled=true;b.textContent='Sending…';}});});
  document.querySelectorAll('a[href^="tel:"]').forEach(function(a){a.addEventListener('click',function(){if(window.gtag){gtag('event','click_to_call',{event_category:'contact',event_label:location.pathname});}if(window.fbq){fbq('track','Contact');}});});
  document.querySelectorAll('a[href^="mailto:"]').forEach(function(a){a.addEventListener('click',function(){if(window.gtag){gtag('event','click_to_email',{event_category:'contact',event_label:location.pathname});}if(window.fbq){fbq('track','Contact');}});});
})();

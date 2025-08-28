// Menu toggle para mobile
(function(){
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  if(!toggle || !nav) return;
  toggle.addEventListener('click', ()=>{
    const isOpen = nav.classList.toggle('open');
    if(isOpen){
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.right = '28px';
      nav.style.top = '70px';
      nav.style.background = '#fff';
      nav.style.padding = '12px';
      nav.style.boxShadow = '0 10px 30px rgba(15,23,42,0.08)';
      nav.style.borderRadius = '10px';
    } else {
      nav.style.display = '';
      nav.style.position = '';
      nav.style.right = '';
      nav.style.top = '';
      nav.style.background = '';
      nav.style.padding = '';
      nav.style.boxShadow = '';
      nav.style.borderRadius = '';
    }
  });
})();

// Carousel de testemunhos simples
(function(){
  const carousel = document.getElementById('testimonialCarousel');
  if(!carousel) return;
  const slidesContainer = carousel.querySelector('.slides');
  const slides = Array.from(slidesContainer.querySelectorAll('.slide'));
  const prev = carousel.querySelector('.carousel-btn.prev');
  const next = carousel.querySelector('.carousel-btn.next');
  let index = 0;

  function update(){
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  prev && prev.addEventListener('click', ()=>{
    index = (index - 1 + slides.length) % slides.length;
    update();
  });
  next && next.addEventListener('click', ()=>{
    index = (index + 1) % slides.length;
    update();
  });

  // auto-play
  let timer = setInterval(()=>{ index = (index + 1) % slides.length; update(); }, 6000);
  carousel.addEventListener('mouseenter', ()=> clearInterval(timer));
  carousel.addEventListener('mouseleave', ()=> { timer = setInterval(()=>{ index = (index + 1) % slides.length; update(); }, 6000); });
})();

// Smooth scroll for internal links
(function(){
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){e.preventDefault(); target.scrollIntoView({behavior:'smooth'});} 
    });
  });
})();


// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------



/*=============== TESTIMONIAL SWIPER ===============*/
const swiperTestimonial = new Swiper('.testimonial__swiper', {
   loop: true,
   slidesPerView: 'auto',
   centeredSlides: 'auto',
   spaceBetween: 16,
   grabCursor: true,
   speed: 600,
   effect: 'coverflow',
   coverflowEffect:{
      rotate: -90,
      depth: 600,
      modifier: .5,
      slideShadows: false,
   },

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
})


// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function () {
  const faqContents = document.querySelectorAll('.faq-content');
  const BUFFER = 30;

  faqContents.forEach(content => {
    const header = content.querySelector('h2');
    const body = content.querySelector('.faq-body');

    header.addEventListener('click', () => {
      const isOpen = content.classList.contains('open');

      // Fechar todos antes de abrir outro
      faqContents.forEach(c => {
        c.classList.remove('open');
        c.querySelector('.faq-body').style.maxHeight = null;
      });

      // Se não estava aberto, abre este
      if (!isOpen) {
        content.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
});








$(document).ready(function(){
  infoToggle();
});

function infoToggle(){

  $('.toggle-block:first-child').addClass('active');
  $('.toggle-block:first-child').find('.toggle-able').show();

  $('.toggle-trigger').click(function(){

    $(this).closest('.toggle-block').siblings().removeClass('active');
    $(this).closest('.toggle-block').toggleClass('active');
    $(this).closest('.toggle-block').siblings().find('.toggle-able').stop().hide();
    $(this).closest('.toggle-block').find('.toggle-able').stop().slideToggle();
  });

}

const faders = document.querySelectorAll(".fade-in") ;

const appearOptions =  {

  rootMargin: "-300px",
};

const appearOnScroll = new IntersectionObserver(function(
    entries, 
    appearOnScroll
  ){
    entries.forEach(entry => {
      if (!entry.isIntersecting){
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});
   
close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});
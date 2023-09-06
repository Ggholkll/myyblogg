/* 

Template 2089 Meteor

http://www.tooplate.com/view/2089-meteor

*/

jQuery(document).ready(function($) {

	'use strict';


        $('.counter').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

          {

            duration: 8000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });  
          
        });



        $(".b1").click(function () {
            $(".pop").fadeIn(300);
            
        });
		
		$(".b2").click(function () {
            $(".pop2").fadeIn(300);
            
        });
		
		$(".b3").click(function () {
            $(".pop3").fadeIn(300);
            
        });

        $(".pop > span, .pop").click(function () {
            $(".pop").fadeOut(300);
        });
		
		$(".pop2 > span, .pop2").click(function () {
            $(".pop2").fadeOut(300);
        });
		
		$(".pop3 > span, .pop3").click(function () {
            $(".pop3").fadeOut(300);
        });

    $(".header").addClass("active");

	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });

});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.content-block').style.opacity = '1';
  document.querySelector('.content-block').style.transform = 'translate(0px, 0px)';
})

window.onscroll = () => {
  if (scrollY > 0) {
    document.querySelector('.header-logo').style.transition = 'all 0.3s ease 0s'; 
    document.querySelector('.header-logo').style.fontSize = '20px'; 
  } else {
    document.querySelector('.header-logo').style.fontSize = '30px'; 
  } 
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(item => {
    if (item.isIntersecting) {
      item.target.style.opacity = '1'
      item.target.style.transform = 'translate(0px, 0px)'
    } else {
      item.target.style.opacity = '0'
      item.target.style.transform = 'translate(0px, 10px)'
    }
  })
}, {rootMargin: '-10% 0px'})

const titles = document.querySelectorAll('h4')

for (let i = 0; i < titles.length; i++) {
  observer.observe(titles[i]) 
}

const serviceObserver = new IntersectionObserver((entries) => {
  entries.forEach(item => {
    if (item.isIntersecting) {
      const int = Number(item.target.getAttribute('data-integer'))
      setTimeout(() => {
        item.target.style.opacity = '1'
      }, int * 100)
    } else {
      item.target.style.opacity = '0'

    }
  })
}, {rootMargin: '-10% 0px'})

const serviceItems = document.querySelectorAll('.service-item'); 

for (let i = 0; i < serviceItems.length; i++) {
  serviceItems[i].setAttribute('data-integer', i); 
  serviceObserver.observe(serviceItems[i]);
}

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(item => {
    if (item.isIntersecting) {
      const int = Number(item.target.getAttribute('data-integer'))
      setTimeout(() => {
        item.target.style.opacity = '1'
      }, int * 100)
    } else {
      item.target.style.opacity = '0'
    }
  })
}, {rootMargin: '-10% 0px'})

const projectItems = document.querySelectorAll('.project-item'); 

for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].setAttribute('data-integer', i); 
  projectObserver.observe(projectItems[i]);
}

const postObserver = new IntersectionObserver((entries) => {
  entries.forEach(item => {
    if (item.isIntersecting) {
      const int = Number(item.target.getAttribute('data-integer'))
      setTimeout(() => {
        item.target.style.opacity = '1'
      }, int * 100)
    } else {
      item.target.style.opacity = '0'
    }
  })
}, {rootMargin: '-10% 0px'})

const posts = document.querySelectorAll('.posts .col-md-6'); 

for (let i = 0; i < posts.length; i++) {
  posts[i].setAttribute('data-integer', i); 
  projectObserver.observe(posts[i]);
}
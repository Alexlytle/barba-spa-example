/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

function leaveAnimation(e) {
  return new Promise(async resolve => {
    const elements = e.querySelectorAll("img, h1");
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    await tl.to(elements, {duration: 1,opacity: 0,ease: "power2.inOut",stagger: 0.3})
            .fromTo(".swipe",0.75,{ x: "-100%" },{ x: "0%" }, "-=0.5")
      
    .then();
    resolve()
  });
}

function enterAnimation(e) {
  return new Promise(resolve => {
    const elements = e.querySelectorAll("img, h1");
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    tl.from(elements, {duration: 1,opacity: 0,ease: "power2.inOut",stagger: 0.3})
    tl.fromTo(".swipe", 1, { x: "0%" }, { x: "100%", stagger: 0.2})
      // window.scroll(0,0)
      .then(resolve());

  });
}
function scrolltop(){
   window.scroll(0,0)
}

barba.init({
  debug: true,
  transitions: [
    {
      sync: false,
      leave: ({ current }) =>{
        return leaveAnimation(current.container.querySelector("main"))
      },
      once: ({ next }) => enterAnimation(next.container.querySelector("main")),
      enter: ({ next }) => enterAnimation(next.container.querySelector("main"),scrolltop())
    }
  ],
  views:[
    { 
      namespace:"home",
      beforeEnter(){
          document.querySelector('.homenav').style.color = 'black';
          document.querySelector('.aboutnav').style.color = 'white';
      }
    },
    { 
      namespace:"about",
      beforeEnter(){
          document.querySelector('.homenav').style.color = 'white';
          document.querySelector('.aboutnav').style.color = 'black';
      }
    }
  ]
});

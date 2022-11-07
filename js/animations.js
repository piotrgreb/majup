gsap.fromTo(
  ".astronaut_1",
  {
    y: 500
  },
  {
    y: 0,
    opacity: 1,
    duration: 2.5,
    ease: "elastic.out(1, 0.8)",
    scrollTrigger: {
      trigger: ".astronaut_1",
      start: "top 70%"

    }
  }
);
gsap.fromTo(
  ".chat",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2.5,
    delay: 1,
    scrollTrigger: {
      trigger: ".astronaut_1",
      start: "top 70%"

    }
  }
);
gsap.fromTo(
  ".social_media",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2.5,
    delay: 1,
    scrollTrigger: {
      trigger: ".astronaut_1",
      start: "top 70%"
    }
  }
);
gsap.fromTo(
  ".zahnraeder",
  {
    opacity: 0,
    y: -100,
  },
  {
    y: 100,
    opacity: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".astronaut_1",

    }
  }
);
gsap.fromTo(
  ".email",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    delay: 1.5,
    trigger: ".astronaut_1",


  }
);


gsap.to(".planet_1", { y: 15, ease: "power1.inOut", repeat: -1, duration: 1.5, yoyo: true });
gsap.fromTo(".planet_2", { y: 0 }, { y: 15, ease: "power1.inOut", repeat: -1, duration: 1.5, yoyo: true });
gsap.fromTo(".astronaut_2", { y: 0 }, { y: 15, ease: "power1.inOut", repeat: -1, duration: 1.5, yoyo: true });
gsap.fromTo(".cosmos__div-btn", { scale: 1, }, { scale: 1.05, repeat: -1, duration: 1.5, yoyo: true });
gsap.to(".cosmos__btn", { repeat: -1, duration: 1.5, boxShadow: "0 0 0 9px rgba(46, 174, 222, 0.3)", yoyo: true });
var tl = gsap.timeline({ repeat: -1, duration: 1.5, yoyo: true });


function parallaxIt(e, target, movement) {
  var $this = $(target);
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  var posX = (relX - $this.width() / 2) / $this.width() * movement;
  var posY = (relY - $this.height() / 2) / $this.height() * movement;

  gsap.to(target, 0.5, {
    backgroundPosition: posX + "px " + posY + "px"
  });
}


function parallaxIt2(e, target, movement) {
  var $this = $(target);
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  gsap.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}


$(".cosmos__2").mousemove(function (e) {
  parallaxIt2(e, ".cosmos__background", -30);
  parallaxIt2(e, ".astronaut_1", -5);
});


function movement(target, startX, startY, endX, endY, startRotate, endRotate, startScale, endScale) {

  gsap.fromTo(
    target,
    {
      x: startX,
      y: startY,
      rotate: startRotate,
      scale: startScale
    },
    {
      x: endX,
      y: endY,
      rotate: endRotate,
      scale: endScale,
      scrollTrigger: {
        trigger: target,
        scrub: true,
      }
    }
  );
}

movement(".planet_1", 150, 50, 0, 0, 30, -30, 1, 1.5);
movement(".planet_2", -130, 300, 150, -100, 0, 0, 1, 1.3);
movement(".astronaut_1", 0, 0, 0, 0, -30, 30, 1, 1);
movement(".chat", 0, 0, 150, -100, 0, 0, 1, 1);
movement(".social_media", 80, 0, 180, -50, 0, 0, 1, 1);
movement(".email", -50, 100, -150, 0, 50, 0, 1, 1);
movement(".zahnraeder", 0, 100, -150, 50, 0, 0, 1, 1);
movement(".asteroid_2", 0, 50, -300, -150, 0, -70, 1, 1);
movement(".asteroid_3", 500, 70, 0, -150, 0, -70, 1, 1);
movement(".asteroid_4", 0, 200, -300, -300, 0, -70, 1, 1);
movement(".asteroid_5", 400, 300, 100, -200, 0, -70, 1, 1);
movement(".rakete", -200, 100, 300, -150, 10, 10, 1, 1);
movement(".planet_3", 0, 400, 200, 0, -100, 50, 1, 1);
movement(".alien-1", 0, 500, 200, 0, 0, 0, 1, 0.5);
movement(".astronaut_2", -300, -200, 0, -400, 90, 0, 1.2, 1.2);

function show(target) {
  gsap.fromTo(
    target,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 0.5,
      duration: 3,
      scrollTrigger: {
        trigger: target,
      }
    }
  );

}

show("#text1");
show("#text2");
show("#text3");
show("#text4");
show("#text5");
show("#text6");
show("#text7");
show("#text8");





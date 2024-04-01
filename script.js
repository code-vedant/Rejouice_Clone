function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,

      // for tablet smooth
      tablet: { smooth: true },

      // for mobile
      smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
          return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
          return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
          };
      }
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function cursorAnime() {
  var page1Content = document.querySelector("#page1-content");
  var cursor = document.querySelector("#crsr");

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorAnime();

function page2Anime() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#top h3",
      start: "0% 90%",
      end: "100% 93%",
      // markers: true,
    },
  });
  tl.from("#top h3", {
    y: 22,
    stagger: 0.2,
  });

  tl.from("#elem h1", {
    y: 122,
    stagger: 0.1,
    duration: 0.3,
  });
}
page2Anime();

function page5Anime() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#top-5 h3",
      start: "0% 90%",
      end: "100% 93%",
      // markers: true,
    },
  });
  tl.from("#top-5 h3", {
    y: 22,
    stagger: 0.2,
  });

  tl.from("#elem-5 h1", {
    y: 122,
    stagger: 0.1,
    duration: 0.2,
  });
}
page5Anime();

function page7Anime() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#top-7 h3",
      start: "0% 90%",
      end: "100% 93%",
      // markers: true,
    },
  });
  tl.from("#top-7 h3", {
    y: 22,
    stagger: 0.2,
  });

  tl.from("#elem-7 h1", {
    y: 122,
    stagger: 0.1,
    duration: 0.2,
  });
}
page7Anime();
// locomotiveAnimation()

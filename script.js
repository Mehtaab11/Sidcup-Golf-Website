let cursor = document.querySelector(".cursor");
let blur = document.querySelector(".blur");
let greenDiv = document.querySelector(".green-div");
let card = document.querySelectorAll(".cards");
let h4all = document.querySelectorAll(".nav h4");
let footer = document.querySelector(".footer")
let arrow = document.querySelector(".arrow");



document.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";

  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});

document.addEventListener('mouseleave', () => {
  cursor.style.display = "none"
});

// Show the cursor when re-entering the page
document.addEventListener('mouseenter', () => {
  cursor.style.display = "block"
});

greenDiv.addEventListener('mouseenter', () => {
  cursor.style.backgroundColor = 'black';
});

greenDiv.addEventListener('mouseleave', () => {
  cursor.style.backgroundColor = '#95c11e';
});

card.forEach((e) => {

  e.addEventListener('mouseenter', () => {
    cursor.style.backgroundColor = 'black';
  });

  e.addEventListener('mouseleave', () => {
    cursor.style.backgroundColor = '#95c11e';
  });
})


h4all.forEach((e) => {

  e.addEventListener("mouseenter", () => {

    cursor.style.scale = 3;
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "1px solid #fff";

  })

  e.addEventListener("mouseleave", () => {

    cursor.style.scale = 1;
    cursor.style.backgroundColor = "#95c11e";
    cursor.style.border = "1px solid #95c11e";

  })

})

arrow.addEventListener("mouseenter", () => {
  
  arrow.style.scale = 0.5;
  arrow.style.backgroundColor = "#95c11e";
  // arrow.style.color = "black";
  
  cursor.style.scale = 8;
  cursor.style.backgroundColor = "transparent";
  cursor.style.border = "1px solid #fff";
  
})

arrow.addEventListener("mouseleave", () => {
  
  arrow.style.scale = 1;
  arrow.style.backgroundColor = "transparent";
  // arrow.style.color = "#000";
  
  cursor.style.scale = 1;
  cursor.style.backgroundColor = "#95c11e";
  cursor.style.border = "1px solid #95c11e";
  
})



footer.addEventListener('mouseenter', () => {
  cursor.style.backgroundColor = 'black';
});

footer.addEventListener('mouseleave', () => {
  cursor.style.backgroundColor = '#95c11e';
});

gsap.to(".nav", {
  backgroundColor: "black",
  duration: 0.5,
  height: "110px",

  scrollTrigger: {
    start: "top -11%",
    end: "top -15%",
    trigger: ".nav",
    scroller: "body",
    scrub: 1,
  },
});


gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    start: "top -15%",
    end: "top -50%",
    trigger: ".main",
    scroller: "body",
    scrub: 1
  }

})

gsap.from(".about-us img, .about-us-content", {
  y: 50,
  opacity: 0.2,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    scrub: 1,
    // markers: true,
    start: "top 70%",
    end: "top 50%"
  }


})

gsap.from(".cards", {
  scale: 0.9,
  opacity: 0,
  duration: 1.2,
  stagger: 3,
  scrollTrigger: {
    trigger: ".cards",
    scroller: "body",
    scrub: 1,
    // markers: true,
    start: "top 85%",
    end: "top 70%"
  }


})


gsap.from("#colon1", {
  y: -60,
  x: -60,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    scrub: 4,
    // markers: true,
    start: "top 60%",
    end: "top 55%"

  }

})


gsap.from("#colon2", {
  y: 60,
  x: 60,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    scrub: 5,
    // markers: true,
    start: "top 60%",
    end: "top 55%"

  }

})

gsap.from(".page4 h1", {
  y: 30,
  duration: 1,
  scrollTrigger: {
    trigger: ".page4 h1",
    scroller: "body",
    start: "top 85%",
    end: "top 80%",
    scrub: 2,
  }

})


$(".slide-box").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
});

var tl = gsap.timeline();

tl
    .from("main header", {
        x: "-100%",
        opacity: 0,
    })

    .from("section", {
        x: "-100%",
        opacity: 0
    })


    .from("aside", {
        x: "-100%",
        opacity: 0
    })

    .from("#sideline", {
        x: "-100%",
        opacity: 0
    })

gsap.from("#second>img", {
    scrollTrigger: {
        trigger: "#second>img",
        scroller: "body",
        start: "top 60%",
        end: "top 10%",
        scrub: 5,
    },
    x: "-20%",
    opacity: 0,
    duration: 2
})

gsap.from("#second>div", {
    scrollTrigger: {
        trigger: "#second>div",
        scroller: "body",
        start: "top 60%",
        end: "top 60%",
        scrub: 5,
    },
    x: "20%",
    opacity: 0,
    duration: 1
})


gsap.to(".first-pick", {
    scrollTrigger: {
        trigger: ".first-pick",
        scroller: "body",
        start: "top 90%",
        end: "top 0%",
        scrub: 5,
    },
    opacity: 1,
})

gsap.to(".boxes", {
    scrollTrigger: {
        trigger: ".boxes",
        scroller: "body",
        start: "top 90%",
        end: "top 0%",
        scrub: 5,
    },
    opacity: 1,
})

gsap.to("#service", {
    scrollTrigger: {
        trigger: "#service",
        scroller: "body",
        start: "top 90%",
        end: "top 0%",
        scrub: 5,
    },
    opacity: 1,
})


gsap.from("#footerIMG", {
    scrollTrigger: {
        trigger: "#footerIMG",
        scroller: "body",
        start: "top 90%",
        end: "top 90%",
        scrub: 5,
    },
    x: '-100%',
    opacity: 0,
})
$(".slide-box").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
});

var tl = gsap.timeline();

tl
    .from("main header",{
        x: "-100%",
        opacity: 0,
    })

    .from("section",{
        x:"-100%",
        opacity:0
    })

    
    .from("aside",{
        x:"-100%",
        opacity:0
    })

    .from("#sideline",{
        x:"-100%",
        opacity:0
    })

    gsap.from("#second>img",{
        scrollTrigger:{
            trigger: "#second>img",
            scroller:"body",
            // markers: true,
            start:"top 60%",
            end:"top 10%",
            scrub:5,
        },
        x: "-20%",
        opacity:0,
        // rotate: 360,
        duration:2
    })

    gsap.from("#second>div",{
        scrollTrigger:{
            trigger: "#second>div",
            scroller:"body",
            // markers: true,
            start:"top 60%",
            end:"top 60%",
            scrub:5,
        },
        x: "20%",
        opacity:0,
        // rotate: 360,
        duration:1
    })


    gsap.from("#toppick .first-pick",{
        scrollTrigger:{
            trigger: "#topPick .first-pick",
            scroller:"body",
            // markers: true,
            start:"top 60%",
            end:"top 60%",
            scrub:5,
        },
        y: 100,
       opacity:0,
    //   duration:1,
      stagger: 0.1,

})
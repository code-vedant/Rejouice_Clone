function cursorAnime() {
    var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#crsr");

page1Content.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })

})

page1Content.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

page1Content.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorAnime()

function page2Anime(){
    gsap.from("#left1 h3, #left2 h3, #h3",{
        y:22,
        stagger:0.2,
        delay:2,
    })

    gsap.from("#elem h1",{
        y:122,
        stagger:0.1,
        delay:2,
        duration:0.3,
        scrollTrigger:"#page2"
    })

}
page2Anime()
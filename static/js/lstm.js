$(window).scroll(function(event){
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 3) {
        $("header").addClass("bg-dark");
        $("header a span").addClass("text-light")
        $("header ul li:gt(1) a").addClass("link-warning")
    } else {
        $("header").removeClass("bg-dark");
        $("header a span").removeClass("text-light")
    }
});
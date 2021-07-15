$(window).on("scroll", function () {
    if ($(window).scrollTop() > 20) {
        $(".heading").addClass("active");
    } else {
        $(".heading").removeClass("active");
    }
});
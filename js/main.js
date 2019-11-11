$(".nav-link").click(function(e) {
    e.preventDefault();
    var link = $(this).attr("href");

    $(".nav-link.active").removeClass("active");
    $(this).addClass("active");

    if( $("section.active").attr("id") != link.replace('#','') )
    {
	$("section.active").removeClass("active");
	$(link).addClass("active");
    }
});

$(document).ready(function(){
    $("#main-nav a").click(function(){
        $("section").removeClass("show");
      var target = $(this).attr("href");
      $(target).addClass("show");

    })
    $(".type").typed({
      strings : ["Full Stack Developer","Application Developer","Competitive Programmer","AI and ML Student"],
      typeSpeed:100,backSpeed:50,loop : true
    })
    // $(".type").typed({
    //   String: ["I'm Full Stack Developer","Application Devloper"],
    //   typeSpeed: 100,
    //   backSpeed:50,
    //   loop:true
    // })
});
$(document).ready(function(){

    console.log("Hola");

    $(window).scroll(function(){

        // navbar scroll

        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }    
    });

    var typed = new Typed(".typing", {
        strings: ["Programador", "Desarrollador", "Diseñador", "Freelancer", "Abuelo"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

$(document).ready(function () {
    // CONTENT1 CLICK BUTTON
    var buttons = $("#content1").find("a");
    // console.log(buttons);
    // for (var j = 0; j < buttons.length; j++) {
    //     buttons[j].addEventListener("click", function (e) {
    //         var x = e.clientX - e.target.offsetLeft;
    //         var x = e.clientY - e.target.offsetTop;
    //         var ripples = document.createElement("span");
    //     });
    // }
    $(buttons)
        .toArray()
        .forEach((btn) => {
            $(btn).on("click", function (e) {
                e.preventDefault();
                // var x = e.clientX - e.target.offsetLeft;
                // var y = e.clientY - e.target.offsetTop;
                // console.log(e.offsetY, e.offsetX);
                var ripples = document.createElement("span");
                ripples.style.left = e.offsetX + "px";
                ripples.style.top = e.offsetY + "px";
                this.appendChild(ripples);
                setTimeout(function () {
                    ripples.remove();
                }, 1000);
            });
        });

    // MENU BUTTON
    $(".menuBtn").on("click", function () {
        if ($(this).find("i").hasClass("fa-bars")) {
            $(".menuBtn>i").attr("class", "fas fa-times");
            $("#gnb_mo").addClass("on");
        } else {
            $(".menuBtn>i").attr("class", "fas fa-bars");
            $("#gnb_mo").removeClass("on");
        }
    });

    // TABMENU BUTTON
    $("#tab ul li").on("click", function (e) {
        e.preventDefault();

        var num = $(this).index();
        $("#tab ul li").removeClass('on');
        $(this).addClass('on');
        $('.right .tab').removeClass('on');
        $('.right .tab').eq(num).addClass('on');
       
    });

   

   
});

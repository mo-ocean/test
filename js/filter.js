$(function () {  
    $("#filter dt+dd ").attr("class", "seled");
    $("#filter dl dd").on("click", function () {
        $(this).addClass("seled").siblings().removeClass("seled");
    })
});
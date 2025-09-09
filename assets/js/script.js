$("#calcVAT").click(function () {
    let vat = parseFloat($("#amount").val()) *0.2;
    $("#vat").text(vat.toFixed(2));
    for (let i = 1; i <= 10; i++) {
        $("#vat")
            .fadeOut(300)
            .fadeIn(300);
        }
})

$("#calcVAT").hover(function () {
    $(this).css("color", "red");
    $(this).css("width", "200px");
})

$("#calcVAT").mouseleave(function () {
    $(this).css("color", "black");
     $(this).css("width", "150px");
})
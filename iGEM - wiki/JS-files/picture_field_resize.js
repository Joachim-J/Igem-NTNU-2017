var pricture_field_resize = function () {
    var div = $('#picture_field');
    var width = div.width();
    div.css('height', width * 0.5);
    $(".break_header").css("top", (-width * 0.05) + 27);
    $("#menu").css("width", width);
};

//Call on window resize and document startup
window.onresize = pricture_field_resize;
$(pricture_field_resize);


$("#all1").change(function () {
    var flag = $(this).is(":checked");
    $("input[name=fabu]").each(function () {
        $(this).prop("checked", flag);
    });
});


$("#all2").change(function () {
    var flag = $(this).is(":checked");
    $("input[name=caogao]").each(function () {
        $(this).prop("checked", flag);
    });
});


$(document).ready(function () {
    $("tr").contextmenu(function (e) {
        var winWidth = $(document).width();
        var winHeight = $(document).height();
        var posX = e.pageX;
        var posY = e.pageY;
        var menuWidth = $(".contextmenu").width();
        var menuHeight = $(".contextmenu").height();
        var secMargin = 10;
        if (posX + menuWidth + secMargin >= winWidth
            && posY + menuHeight + secMargin >= winHeight) {
            posLeft = posX - menuWidth - secMargin + "px";
            posTop = posY - menuHeight - secMargin + "px";
        }
        else if (posX + menuWidth + secMargin >= winWidth) {
            posLeft = posX - menuWidth - secMargin + "px";
            posTop = posY + secMargin + "px";
        }
        else if (posY + menuHeight + secMargin >= winHeight) {
            posLeft = posX + secMargin + "px";
            posTop = posY - menuHeight - secMargin + "px";
        }
        else {
            posLeft = posX + secMargin + "px";
            posTop = posY + secMargin + "px";
        };
        $(".contextmenu").css({
            "left": posLeft,
            "top": posTop
        }).show();
        return false;
    });
    $(document).click(function () {
        $(".contextmenu").hide();
    });
});

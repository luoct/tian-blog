// <!-- 点赞功能 -->

$(function () {
    $(".like i").click(function () {
            // if($(this).className == 'fa fa-thumbs-o-up') {
            //     $(this).className = 'fa fa-thumbs-up';
            // }else if ($(this).className == 'fa fa-thumbs-up') {
            //     $(this).className = 'fa fa-thumbs-o-up';
            // }            
            $(this).toggleClass('active');            
    })
})

function zan() {
    $(".like i").toggleClass('active');            
}




// var like = document.getElementsByClassName("like");
// var s = document.getElementsByClassName("s");
// setInterval("zan()", 500);


// function zan() {
//     for (let i = 0; i < like.length; i++) {
//         if (s[i].className == "fa fa-thumbs-o-up s") {
//             like[i].onclick = function () {
//                 like[i].innerHTML = "<i class='fa fa-thumbs-up s' aria-hidden='true'></i>";
//                 like[i].style.color = '#00a1d6!important';
//             }
//         } else if (s[i].className = "fa fa-thumbs-up s") {
//             like[i].onclick = function () {
//                 like[i].innerHTML = "<i class='fa fa-thumbs-o-up s' aria-hidden='true'></i>";
//                 like[i].style.color = '#99a2aa';
//             }
//         }
//     }
// }

// <!-- 评论功能 -->

function pinglun() { //原生js的评论
    var text = document.getElementsByTagName("textarea")[0];
    var txList = ["img/tx3.jpg", "img/tx4.jpg", "img/tx5.jpg", "img/tx6.jpg", "img/tx7.jpg"];
    var userList = ["噬菌体", "施工现场", "天心不是月", "薄脆", "不加香菜"]
    var li = document.createElement("li");
    var pl = document.getElementsByClassName("pl")[0]
    pl.appendChild(li);
    var img = document.createElement("img");
    li.appendChild(img);
    img.className = "tx";
    img.src = txList[parseInt(Math.random() * txList.length)];
    var div = document.createElement("div");
    li.appendChild(div);
    div.className = "user"
    div.innerText = userList[parseInt(Math.random() * userList.length)];
    var p = document.createElement("p");
    li.appendChild(p);
    p.className = "text";
    p.innerText = text.value;
    var info = document.createElement("div");
    li.appendChild(info);
    info.className = "info";
    var floor = document.createElement("span");
    info.appendChild(floor);
    floor.className = "floor";
    floor.innerText = "#3";

    var time = document.createElement("span");
    info.appendChild(time);
    time.className = "time";
    time.innerText = "1分钟前";

    var like = document.createElement("span");
    info.appendChild(like);
    like.className = "like";
    like.innerHTML = "<i class='fa fa-thumbs-up s' aria-hidden='true'></i>";

    var reply = document.createElement("span");
    info.appendChild(reply);
    reply.className = "reply";
    reply.innerText = "回复";

    text.value = "";  //发表评论后textarea置空
}

//用jq实现
// $(".comment button//").click(function() {
//     $(".pl").append("<img src='img/tx3.jpg' class='tx'>");
//     $(".pl").append("<div class='user'>噬菌体</div>");
//     $(".pl").append("<p class='text'></p>");
//     this.innerText = $("textarea")[0].value;

// });


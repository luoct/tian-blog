//m=0;是为了统计留言条数，从0开始统计。

var m = 0;
function func() {
    //获取到input的值；
    var one = document.getElementById("one");
    //获取到放置留言的父元素；
    var ul = document.getElementById("ul");
    //新建放置留言的子节点；
    var newNode = document.createElement("li");
    //往节点中放置留言的文字；


    newNode.innerHTML = one.value + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "<i class='fa fa-times'></i>";
    //把新创建的节点放到显示留言的元素中；


    var show = document.getElementsByClassName("show")[0];
    var containerH = parseInt(show.offsetHeight) - 50;
    var containerW = parseInt(show.offsetWidth) - 300;
    newNode.style.position = "absolute";
    newNode.style.left = Math.random() * containerW + "px";
    newNode.style.top = Math.random() * containerH + "px";
    //给留言一个随机位置

    var bgList = ["#68bde1", "#76b39d", "#d5eeff", "#ededed", "#fbafaf", "#e0ffcd"];
    newNode.style.background = bgList[parseInt(Math.random() * bgList.length)];
    //给留言内容一个随机的颜色

    newNode.onmousedown = function (ev) {
        var disX = ev.clientX - newNode.offsetLeft
        var disY = ev.clientY - newNode.offsetTop

        document.onmousemove = function (ev) {
            var l = ev.clientX - disX
            var t = ev.clientY - disY

            newNode.style.left = l + 'px'
            newNode.style.top = t + 'px'
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null
        }
    }
    //让留言内容可以拖动

    ul.appendChild(newNode);

    if (ul.firstChild) {
        //把新建的节点插入在留言板位置的第一个；
        ul.insertBefore(newNode, ul.firstChild);
        //只要有留言插入就给m加一次。
        m++;
    } else {
        //反之，如果没有留言的情况下，那么这个新建的节点就是第一个节点。
        ul.firstChild = newNode;
        m++;
    }

    function fn() {
        //点击删除留言的节点。
        ul.removeChild(newNode);
        //在删除的情况下，m也会进行运算，减去留言的条数。
        m--;
    }
    //设置输入框的值为空，是为了在留言之后框内不会再有留过言的内容，
    //方便下次继续留不同的话。

    one.value = "";
    var i = document.querySelector("i");
    i.addEventListener("click", fn, false);
}

function count() {
    //点击统计目前留言板的留言条数。
    document.getElementById("p").innerHTML = "您现在有" + m + "条留言";
}

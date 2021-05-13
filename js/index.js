/*快捷查询*/
let search_bar = document.getElementById("search_bar");
let search_i = document.querySelector(".query div i");
search_bar.onfocus = function() {
    search_bar.placeholder = "";
    search_i.style.visibility = "visible";
}
search_bar.onblur = function() {
    search_bar.placeholder = "支持粘贴运单号查询；最多可查询10条，以逗号、空格或回车键隔开";
    search_i.style.visibility = "hidden";
}


/*四图模块*/
let img_module = document.getElementsByClassName("img_module");
for (let i = 0; i < 4; i++){
    img_module[i].onmouseover = function() {
        this.children[1].style.transform= 'translate(0, 0)';
    };
    img_module[i].onmouseout = function() {
        this.children[1].style.transform= 'translate(0, 100%)';
    };
}

/*新闻资讯*/
let news_link = document.getElementsByClassName("news_link");
for (let i = 0; i < 4; i++){
    news_link[i].onmouseover = function() {
        this.children[0].children[0].style.transform = 'scale(1.5)';
    };
    news_link[i].onmouseout = function() {
        this.children[0].children[0].style.transform = 'scale(1)';
    };
}

/*轮播图*/
let carousel = document.querySelector(".carousel");
let carousel_img = document.querySelector(".carousel li");
let button = document.querySelector(".button");
let left_button = document.querySelector(".left_button");
let right_button = document.querySelector(".right_button");
// 用于清除小圆圈的点亮状态
function clean() {
    for (let i = 0; i < button.childElementCount; i++) {
        button.children[i].style.backgroundColor = "transparent";
    }
}
// 动态创建小圆圈
for (let i = 0; i < carousel.childElementCount; i++) {
    var li = document.createElement("li");
    li.setAttribute('index', i);
    button.appendChild(li);
}
// 将第一个小圆圈设为“点亮”状态
button.children[0].style.backgroundColor = "white";
// 为小圆圈绑定点击事件
for (let i = 0; i < button.childElementCount; i++) {
    button.children[i].onclick = function() {
        clean();
        this.style.backgroundColor = "white";
        carousel.style.marginLeft = "-"+i+"00%";
    }
}
// 为左右按钮绑定点击事件
left_button.onclick = function() {
    let i;
    for (i = 0; i < button.childElementCount; i++) {
        if (button.children[i].style.backgroundColor == "white"){
            break;
        }
    }
    clean();
    i = (i + 4) % 5;
    button.children[i].style.backgroundColor = "white";
    carousel.style.marginLeft = "-"+i+"00%";
}
right_button.onclick = function() {
    let i;
    for (i = 0; i < button.childElementCount; i++) {
        if (button.children[i].style.backgroundColor == "white"){
            break;
        }
    }
    clean();
    i = (i + 1) % 5;
    button.children[i].style.backgroundColor = "white";
    carousel.style.marginLeft = "-"+i+"00%";
}
/*自动播放*/
var timer;
timer = setInterval(function() {
    right_button.click();
}, 2000);
for (let i = 0; i < carousel.childElementCount; i++) {
    carousel.children[i].children[0].onmouseover = function() {
        clearInterval(timer);
        // left_button.style.visibility = "visible";
        // right_button.style.visibility = "visible";
    }
    carousel.children[i].children[0].onmouseout = function() {
        timer = setInterval(function() {
            right_button.click();
        }, 2000);
        // left_button.style.visibility = "hidden";
        // right_button.style.visibility = "hidden";
    }
}
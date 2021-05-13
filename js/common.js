/*Cookies使用策略*/
let disagree = document.querySelector('.cookies_container button:first-of-type');
let agree = document.querySelector('.cookies_container button:last-of-type');
let cookies_container = document.getElementsByClassName("cookies_container")[0];
disagree.onclick = function() {
    alert("还是同意吧。");
}
agree.onclick = function() {
    cookies_container.style.display = "none";
}

/*导航栏*/
let menu_header = document.getElementsByClassName("menu_header");
for (let i = 0; i < 4; i++){
    menu_header[i].onmouseover = function() {
        for (let j = 1; j < this.childElementCount; j++){
            this.children[j].style.visibility = "visible";
        }
    };
    menu_header[i].onmouseout = function() {
        for (let j = 1; j < this.childElementCount; j++){
            this.children[j].style.visibility = "hidden";
        }
    };
}
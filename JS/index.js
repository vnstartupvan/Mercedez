// function showItem() {
//     var footerItem =document.getElementById("footer-list")
//     if(window.scrollY>3500){
//         footerItem.style.display ="flex";
//         footerItem.style.transition ="display .5s ease-out"
//     } else {
//         footerItem.style.display ="none";
//     }
// }
// // showItem()
// window.onscroll = showItem;

function changeTab(id, e,naviID) {
    // DOM elements
    var article1 = document.getElementById("news-article-1");
    var article2 = document.getElementById("news-article-2");

    var naviTab1 = document.getElementById("navi-tab-1")
    var naviTab2 = document.getElementById("navi-tab-2")

    // display none
    article1.style.display="none";
    article2.style.display="none";
    // remove class active 
    naviTab1.classList.remove("active");
    naviTab2.classList.remove("active");
    // display block for clicked element
    var showedItem = document.getElementById(id);
    showedItem.style.display="grid";
    // add class active for clicked item
    // var test= e.target;
    // test.classList.add("active")
    var activeNav = document.getElementById(naviID);
    activeNav.classList.add("active")
}

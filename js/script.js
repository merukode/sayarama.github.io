window.onscroll = function () { scrollFunction() };
// window.onscroll = function () { textFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("heading").style.backgroundColor = "white";
    } else {
        document.getElementById("heading").style.backgroundColor = "black";
    }
}




// function textFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("head-text").style.color = "white";
//     } else {
//         document.getElementById("head-text").style.filter = "none";
//     }
// }
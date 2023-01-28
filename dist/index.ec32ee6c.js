window.onscroll = function() {
    scrollFunction();
};
const header = document.getElementById("header");
let height = header.offsetHeight;
function resizeHeader() {
    height = header.offsetHeight;
    return height;
}
window.onresize = resizeHeader;
function scrollFunction() {
    if (window.scrollY >= height) header.classList.add("sticky");
    else header.classList.remove("sticky");
}
document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        scroll({
            top: document.querySelector(this.getAttribute("href")).offsetTop - height,
            behavior: "smooth"
        });
    });
});

//# sourceMappingURL=index.ec32ee6c.js.map

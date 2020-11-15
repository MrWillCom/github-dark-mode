var beforeAfterView = document.getElementsByClassName("before-after")[0];
var imageAfter = document.querySelector(".before-after .after");
var textBefore = document.querySelector(".before-after .text-before");
var textAfter = document.querySelector(".before-after .text-after");
var beforeAfterText = document.querySelector(".before-after .text")

beforeAfterText.style.height = `${textBefore.clientHeight}px`;

window.addEventListener("resize", () => { beforeAfterText.style.height = `${textBefore.clientHeight}px`; })

document.body.addEventListener("mousemove", (e) => {
    textAfter.style.marginLeft = `${(() => {
        var marginLeft = e.clientX - textBefore.clientWidth;
        if (marginLeft > 0) {
            return marginLeft;
        } else if (marginLeft <= 0) {
            return 0;
        }
    })()}px`;
    imageAfter.style.clipPath = `inset(0 0 0 ${e.clientX}px)`;
})

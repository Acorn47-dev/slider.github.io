let mySwiper = new Swiper('.slider-block', {
    slidesPerView: 1,
});
const sliserNavItems = document.querySelectorAll(".slider-nav__item");
const slidernav=document.querySelector(".slider-nav");
sliserNavItems.forEach((el, index) => {
    el.setAttribute("data-index", index);

    el.addEventListener("click", (e) => {
        const index = parseInt(e.currentTarget.dataset.index);
        console.log(index);
        mySwiper.slideTo(index);
    });
})
const showmore = () => {
    let childrenlegth = slidernav.children.length;
    if (childrenlegth>6) {;
        document.querySelectorAll(`.slider-nav__item:nth-child(n+${5+1})`).forEach(element => {
            element.style.display = "none"
        });
        slidernav.insertAdjacentHTML('beforeend',
        `<button class="modal-open" id="modal-open">еще ${childrenlegth - 5}</button>`
        )
        var modal_open = document.getElementById("modal-open");
        modal_open.addEventListener("click", function () {
            alert("click");
        })
        
    }

}
showmore();
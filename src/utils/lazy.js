export default (el, binding) => {
    el.style.background = ` url(${binding.value.loadingimg}) no-repeat center center /200px`
    window.removeEventListener("scroll", el.scrollHandler)
    el.scrollHandler = function () {
        let wh = window.innerHeight
        let st = document.body.scrollTop || document.documentElement.scrollTop
        let ot = el.offsetTop
        if (ot + 100 < wh + st) {
            el.src = binding.value.src
            // console.log(el.src );
            el.style.background = "none"
            window.removeEventListener("scroll", el.scrollHandler)
        }
    }
    el.scrollHandler()
    window.addEventListener("scroll", el.scrollHandler)

}
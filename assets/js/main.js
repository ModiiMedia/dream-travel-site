let bannerContent = document.getElementById("hero-banner-content")
let bannerBar = document.getElementById("hero-banner-bar")

resizeBannerBar();
window.onresize = resizeBannerBar;

function resizeBannerBar() {
    let contentHeight = bannerContent.clientHeight
    if(window.innerWidth <= 1024) {
        bannerBar.style= `height: ${contentHeight + 80}px;`
    } else {
        bannerBar.style = `height: ${contentHeight}px;`
    }
}
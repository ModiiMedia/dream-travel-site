const bannerContent = document.getElementById("hero-banner-content");
const bannerBar = document.getElementById("hero-banner-bar");

const bannerContentMultipleVideos = document.getElementById(
	"hero-banner-content-multiple-videos"
);
const bannerBarMultipleVideos = document.getElementById(
	"hero-banner-bar-multiple-videos"
);

resizeBannerBar(bannerBar, bannerContent);
resizeBannerBar(bannerBarMultipleVideos, bannerContentMultipleVideos);
window.addEventListener("resize", () => {
	resizeBannerBar(bannerBar, bannerContent);
	resizeBannerBar(bannerBarMultipleVideos, bannerContentMultipleVideos);
});

function resizeBannerBar(bar, content) {
	if (!bar || !content) {
		console.error(
			"Missing parameter(s). Must pass in element for bar and content"
		);
		return null;
	}
	let contentHeight = content.clientHeight;
	if (window.innerWidth <= 1024) {
		bar.style = `height: ${contentHeight + 80}px;`;
	} else {
		bar.style = `height: ${contentHeight}px;`;
	}
	return null;
}

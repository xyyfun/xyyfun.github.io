// 头部固定定位
window.addEventListener('DOMContentLoaded', function () {
	var header_fixed = document.querySelector('.header_fixed');
	document.addEventListener('scroll', function () {
		if (window.pageYOffset >= 180) {
			header_fixed.style.position = 'fixed';
			header_fixed.style.top = '0';
		} else {
			header_fixed.style.position = 'absolute';
			header_fixed.style.top = -81 + 'px';
		}
	});
});

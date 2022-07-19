window.addEventListener('load', function () {
	var images = this.document.querySelectorAll('img');
	this.window.addEventListener('scroll', function () {
		images.forEach((image) => {
			var imageTop = image.getBoundingClientRect().top;
			if (imageTop < this.window.innerHeight) {
				var data_src = image.getAttribute('data-src');
				image.setAttribute('src', data_src);
			}
			console.log('day');
		});
	});
});

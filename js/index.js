window.addEventListener('load', function () {
	// ----------------------------------轮播图------------------------------------------
	var carousel = document.querySelector('.carousel');
	var ul = carousel.querySelector('ul');
	var num = 0;
	var flag = true; // 节流
	// 克隆第一张图片
	var first = ul.children[0].cloneNode(true);
	ul.appendChild(first);
	// 每三秒自动切换一次
	function ulImg() {
		if (flag) {
			flag = false;
			if (num == ul.children.length - 1) {
				ul.style.left = 0;
				num = 0;
			}
			num++;
			animate(ul, -num * 500, function () {
				flag = true; // 开启节流
			});
		}
	}
	var timer = setInterval(ulImg, 2000);
	// 鼠标移到轮播图暂停播放
	carousel.addEventListener('mouseenter', function () {
		clearInterval(timer);
	});
	// 鼠标移开继续播放
	carousel.addEventListener('mouseleave', function () {
		timer = setInterval(ulImg, 2000);
	});

	// ------------------------------------音频播放区域--------------------------------
	var btn = document.querySelectorAll('button');
	var aud = document.querySelectorAll('audio');
	for (var i = 0; i < btn.length; i++) {
		// 当按钮文字长度等于或小于5时 则按钮的宽度为100px
		/* if (btn[i].innerHTML.length <= 5) {
					btn[i].style.width = '100px';
				} */
		// 给所有按钮添加自定义属性
		btn[i].setAttribute('index', i);
		btn[i].addEventListener('click', function () {
			// 点击播放暂停上一次点击的音频并使音频进度回到初始值
			for (var i = 0; i < aud.length; i++) {
				aud[i].currentTime = 0;
				aud[i].pause();
			}
			// num获取自定义属性序号
			var num = this.getAttribute('index');
			aud[num].play(); // play播放
		});
	}
	// 点击暂停按钮 暂停全部
	var pause = document.querySelector('.pause');
	pause.addEventListener('click', function () {
		for (var i = 0; i < aud.length; i++) {
			aud[i].currentTime = 0;
			aud[i].pause();
		}
	});
});

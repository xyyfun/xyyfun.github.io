window.addEventListener('load', function () {
	// banner轮播图
	// 获取按键
	var btn_l = document.querySelector('.btn_l');
	var btn_r = document.querySelector('.btn_r');
	var carouselDiagram = document.querySelector('.carouselDiagram');
	// 鼠标经过显示按键
	carouselDiagram.addEventListener('mouseenter', function () {
		btn_l.style.opacity = 1;
		btn_r.style.opacity = 1;
		// 鼠标经过暂停轮播图
		clearInterval(timer);
	});
	// 鼠标离开隐藏按键
	carouselDiagram.addEventListener('mouseleave', function () {
		btn_l.style.opacity = 0;
		btn_r.style.opacity = 0;
		// 鼠标离开开启轮播图
		timer = setInterval(function () {
			btn_r.click();
		}, 3000);
	});
	// 获取ul
	var ul = carouselDiagram.querySelector('ul');
	//  克隆第一张图片
	var first = ul.children[0].cloneNode(true);
	ul.appendChild(first);
	// 获取轮播图的长度
	var carouselDiagramWidth = carouselDiagram.offsetWidth;
	var num = 0;
	// 节流阀
	var flag = true;
	// 右按键点击触发事件
	btn_r.addEventListener('click', function () {
		if (flag) {
			flag = false; // 关闭节流阀
			if (num == ul.children.length - 1) {
				ul.style.left = 0;
				num = 0;
			}
			num++;
			animate(ul, -num * carouselDiagramWidth, function () {
				flag = true; // 打开节流阀
			});
		}
	});
	// 左键点击触发事件
	btn_l.addEventListener('click', function () {
		if (flag) {
			flag = false;
			if (num == 0) {
				num = ul.children.length - 1;
				ul.style.left = -num * carouselDiagramWidth + 'px';
			}
			num--;
			animate(ul, -num * carouselDiagramWidth, function () {
				flag = true;
			});
		}
	});
	// 自动播放 每3秒播放一次
	var timer = setInterval(function () {
		btn_r.click();
	}, 3000);

	// 热门品牌右侧按键
	// 获取两个按键
	var hot_btn = document.querySelector('.brand_head').querySelectorAll('a');
	var brand_ul = document.querySelector('.home_brand').querySelector('ul');
	// 初始化变量 动画执行完毕后才能点击
	var flag_hot = false;
	// 点击左键时触发
	hot_btn[0].addEventListener('click', function () {
		// 当初始化变量为真时执行
		if (flag_hot) {
			this.style.backgroundColor = '#999';
			hot_btn[1].style.backgroundColor = '#39ba9b';
			animate(brand_ul, 0, function () {
				// 动画执行完毕更改初始化变量
				flag_hot = false;
			});
		}
	});
	// 点击右键时触发
	hot_btn[1].addEventListener('click', function () {
		// 当初始化变量为假时执行
		if (flag_hot == false) {
			this.style.backgroundColor = '#999';
			hot_btn[0].style.backgroundColor = '#39ba9b';
			animate(brand_ul, -1240, function () {
				// 动画执行完毕更改初始化变量
				flag_hot = true;
			});
		}
	});

	// 返回顶部按钮功能
	var BackTop = document.querySelector('.BackTop');
	document.addEventListener('scroll', function () {
		if (window.pageYOffset >= 600) {
			BackTop.style.opacity = 1;
		} else {
			BackTop.style.opacity = 0;
		}
	});
	BackTop.addEventListener('click', function () {
		if (window.pageYOffset >= 600) {
			animaterBackTop(window, 0);
		}
	});
	function animaterBackTop(obj, target, callback) {
		clearInterval(obj.timer);
		obj.timer = setInterval(function () {
			var step = (target - window.pageYOffset) / 10;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			if (window.pageYOffset == target) {
				clearInterval(obj.timer);
				callback && callback();
			}
			window.scroll(0, window.pageYOffset + step);
		}, 5);
	}
});

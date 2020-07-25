runtime();
		function runtime() {
			// 初始时间，日/月/年 时:分:秒
			X = new Date("3/3/2020 24:00:00");
			Y = new Date();
			T = (Y.getTime() - X.getTime());
			M = 24 * 60 * 60 * 1000;
			a = T / M;
			A = Math.floor(a);
			b = (a - A) * 24;
			B = Math.floor(b);
			c = (b - B) * 60;
			C = Math.floor((b - B) * 60);
			D = Math.floor((c - C) * 60);
			//信息写入到DIV中
			span.innerHTML = "本站已运行: " + A + "天" + B + "小时" + C + "分" + D + "秒"
		}
		setInterval(runtime, 1000);
function play68_init() {
	updateShare(0);
}

function goHome() {
	window.location.href = "http://njityx.jd-app.com/";
}

function play68_submitScore(score) {
	updateShareScore(score);
	setTimeout( function() { show_share(); }, 1000 );
}

function updateShare(bestScore) {
	imgUrl = 'http://njityx.jd-app.com/jg/static/icon.png';
	lineLink = 'http://njityx.jd-app.com/jg/';
	descContent = "来比比看谁的手指更厉害！";
	updateShareScore(bestScore);
	appid = '';
}

function updateShareScore(bestScore) {
	if(bestScore > 0) {
		shareTitle = "创意游戏《激光防线》我得了" + bestScore + "分，你的手指有我的快吗？";
	}
	else{
		shareTitle = "创意游戏《激光防线》让你用手指画出激光线！";
	}
}
var hoverEffect = true; // set true for hover effect, set false for no hover effect

var searchEngine = 'baidu'; // default search engine - set google for google search, bing for bing search, yahoo for yahoo search

var numberOfScreens = 3; // set number of screens (1 or 2 or 3)
 
var blockName = new Array(); // set names of blocks
blockName[1] = '天印导航';
blockName[2] = '常用导航';
blockName[3] = '娱乐导航';

var bookmark = new Array();
bookmark[0] = new Array();
bookmark[1] = new Array();
bookmark[2] = new Array();

// set your bookmarks here: (If you do not fill 'thumb' for thumbnail will be used title)
// FIRST BLOCK
bookmark[0][0] = {
	'title':'天气预报',
	'url':'http://www.thinkpage.cn',
	'thumb':'../lib/1.png'
};
bookmark[0][1] = {
	'title':'互联IDC',
	'url':'http://www.fishc.com/map',
	'thumb':'idc.png'
};
bookmark[0][2] = {
	'title':'新浪微博',
	'url':'http://weibo.com/378920304',
	'thumb':'xlweibo.png'
};
bookmark[0][3] = {
	'title':'腾讯微博',
	'url':'http://t.qq.com/voidking0304',
	'thumb':'qqweibo.png'
};
bookmark[0][4] = {
	'title':'天印工作室',
	'url':'http://ihelloworld.net',
	'thumb':'bbs.png'
};
bookmark[0][5] = {
	'title':'个人主页',
	'url':'http://blog.ihelloworld.net',
	'thumb':'blog.png'
};
bookmark[0][6] = {
	'title':'微信游戏',
	'url':'http://game.ihelloworld.net',
	'thumb':'game.png'
};
bookmark[0][7] = {
	'title':'音乐',
	'url':'http://bbs.fishc.com/plugin.php?id=it186_qmusic:it186qmusic',
	'thumb':'music.png'
};
bookmark[0][8] = {
	'title':'影视',
	'url':'http://bbs.fishc.com/plugin.php?id=it186_yszx:it186yszx',
	'thumb':'movie.png'
};
bookmark[0][9] = {
	'title':'资源打包',
	'url':'http://fishc.taobao.com',
	'thumb':'dabao.png'
};
bookmark[0][10] = {
	'title':'互助问答',
	'url':'http://bbs.fishc.com/plugin.php?id=hux_zhidao:hux_zhidao',
	'thumb':'wikipedia.png'
};
bookmark[0][11] = {
	'title':'谷歌翻译',
	'url':'http://translate.google.cn/',
	'thumb':'fanyi.png'
};
// end of FIRST BLOCK
// SECOND BLOCK
bookmark[1][0] = {
	'title':'一淘网',
	'url':'http://www.etao.com/',
	'thumb':'etao.png'
};
bookmark[1][1] = {
	'title':'太平洋电脑网',
	'url':'http://www.pconline.com.cn/',
	'thumb':'pconline.png'
};
bookmark[1][2] = {
	'title':'优酷网',
	'url':'http://www.youku.com/',
	'thumb':'youku.png'
};
bookmark[1][3] = {
	'title':'土豆网',
	'url':'http://www.tudou.com/',
	'thumb':'tudou.png'
};
bookmark[1][4] = {
	'title':'豆瓣',
	'url':'http://www.douban.com/',
	'thumb':'douban.png'
};
bookmark[1][5] = {
	'title':'淘宝网',
	'url':'http://www.tmall.com/?ali_trackid=2:mm_17172764_2272893_14890721:1387526224_6k2_917089920',
	'thumb':'taobao.png'
};
bookmark[1][6] = {
	'title':'卓越亚马逊',
	'url':'http://www.amazon.cn/',
	'thumb':'amazon.png'
};
bookmark[1][7] = {
	'title':'远景论坛',
	'url':'http://www.pcbeta.com/',
	'thumb':'pcbeta.png'
};
bookmark[1][8] = {
	'title':'cnBeta',
	'url':'http://www.cnbeta.com/',
	'thumb':'cnbeta.png'
};
bookmark[1][9] = {
	'title':'看雪论坛',
	'url':'http://bbs.pediy.com/',
	'thumb':'kanxue.png'
};
bookmark[1][10] = {
	'title':'CSDN',
	'url':'http://www.csdn.net/',
	'thumb':'csdn.png'
};
bookmark[1][11] = {
	'title':'51CTO',
	'url':'http://www.51cto.com/',
	'thumb':'51cto.png'
};
//end of SECOND BLOCK
// THIRD BLOCK
bookmark[2][0] = {
	'title':'人人影视',
	'url':'http://www.yyets.com/',
	'thumb':'yyets.png'
};
bookmark[2][1] = {
	'title':'豆果网',
	'url':'http://www.douguo.com/',
	'thumb':'douguo.png'
};
bookmark[2][2] = {
	'title':'宇宙点播',
	'url':'http://www.yzdb.tv/',
	'thumb':'yzdb.png'
};
bookmark[2][3] = {
	'title':'M365DY',
	'url':'http://www.m365dy.com/',
	'thumb':'m365dy.png'
};
bookmark[2][4] = {
	'title':'携程旅行网',
	'url':'http://www.ctrip.com/',
	'thumb':'ctrip.png'
};
bookmark[2][5] = {
	'title':'赶集网',
	'url':'http://www.ganji.com/',
	'thumb':'ganji.png'
};
bookmark[2][6] = {
	'title':'人人网',
	'url':'http://www.renren.com/',
	'thumb':'renren.png'
};
bookmark[2][7] = {
	'title':'Mtime时光网',
	'url':'http://www.mtime.com/',
	'thumb':'mtime.png'
};
bookmark[2][8] = {
	'title':'糗事百科',
	'url':'http://www.qiushibaike.com/',
	'thumb':'qiushibaike.png'
};
bookmark[2][9] = {
	'title':'凤凰网',
	'url':'http://www.ifeng.com/',
	'thumb':'fenghuang.png'
};
bookmark[2][10] = {
	'title':'topit',
	'url':'http://topit.me/',
	'thumb':'topit.png'
};
bookmark[2][11] = {
	'title':'科学松鼠会',
	'url':'http://songshuhui.net/',
	'thumb':'songshuhui.png'
};

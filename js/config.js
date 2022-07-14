const picturePath = './pic';
const vertical = true;
const reverse = true;
const data = [
	{
		img:'201009-201206.png',
		primary: '班級網頁',
		secondary: '2010/09 - 2012/06',
		paragraph: [
			'#獨立開發',
			'負責設計，網頁前、後端程式開發、維護，資料庫建置。',
			'2011年 / 台北市中小學班級網頁競賽 / 特優。',
		],
	},
	{
		img:'201202-201302.png',
		primary: '跑步計時系統',
		secondary: '2012/02 - 2013/02',
		paragraph: [
			'#獨立開發',
			'負責設計，網頁前、後端程式開發、維護，資料庫建置。',
			'2013年 / 全國高級中等學校小論文比賽 / 優等。',
		],
	},
	{
		img:'201309-201406.png',
		primary: '虎尾溪社區大學',
		secondary: '2013/09 - 2014/06',
		paragraph: [
			'#團隊開發',
			'於虎尾溪社區大學擔任志工。',
			'負責網站資料上稿，網頁前端程式，開發、維護。',
		],
		url: 'http://www.favorlangriver.com.tw/home.html'
	},
	{
		img:'201309-201408.png',
		primary: '建立癌症蛋白複合體分析及新藥開發之生物資訊平台',
		secondary: '2013/09 - 2014/08',
		paragraph: [
			'#團隊開發',
			'於黃建宏老師實驗室擔任研究助理。',
			'負責網頁前、後端程式開發、維護，伺服器、資料庫建置。',
		],
		url: 'https://www.grb.gov.tw/search/planDetail?id=2850577'
	},
	{
		img:'201506-201701.png',
		primary: '線上測驗系統',
		secondary: '2015/06 - 2017/01',
		paragraph: [
			'#獨立開發',
			'大學專題',
			'負責設計，網頁前、後端程式開發、維護，伺服器、資料庫建置。',
		],
	},
	{
		img:'201812-201901.png',
		primary: '健康樂活平台',
		secondary: '2018/12 - 2019/01',
		paragraph: [
			'#獨立開發',
			'#個人接案',
			'負責設計，網頁前、後端程式開發、維護，資料庫建置。',
		],
	},
	{
		img:'201901-201912.png',
		primary: 'yunjscss1',
		secondary: '2019/01 - 2019/12',
		paragraph: [
			'#獨立開發',
			'#side project',
			'負責設計，網頁前端程式開發、維護。',
		],
		url: 'https://github.com/yunworkspace2/yunjscss1'
	},
	{
		img:'201903-201904.png',
		primary: '電子書平台',
		secondary: '2019/03 - 2019/04',
		paragraph: [
			'#獨立開發',
			'#個人接案',
			'負責設計，網頁前、後端程式開發、維護，資料庫建置。',
		],
	},
	{
		img:'201905-201906.png',
		primary: '餐點、庫存管理系統',
		secondary: '2019/05 - 2019/06',
		paragraph: [
			'#獨立開發',
			'#個人接案',
			'負責設計，網頁前、後端程式開發、維護，伺服器、資料庫建置。',
		],
		url: 'https://github.com/yunworkspace2/pos'
	},
	{
		img:'201907-201908.png',
		primary: '選工系統',
		secondary: '2019/07 - 2019/08',
		paragraph: [
			'#獨立開發',
			'#個人接案',
			'負責設計，網頁前、後端程式開發、維護，伺服器、資料庫建置。',
		],
	},
	{
		img:'201908-201908.png',
		primary: 'Download Sound',
		secondary: '2019/08 - 2019/08',
		paragraph: [
			'#獨立開發',
			'#side project',
			'負責設計，網頁前端程式開發、維護。',
		],
		url: 'https://github.com/yunworkspace2/yun-Download-Sound'
	},
	{
		img:'201909-201909.png',
		primary: 'Classic Blue Theme',
		secondary: '2019/09 - 2019/09',
		paragraph: [
			'#獨立開發',
			'#side project',
			'負責設計，網頁前端程式開發、維護。',
		],
		url: 'https://chrome.google.com/webstore/detail/classic-blue-theme/maejegjiekmgjakcgkdkjgjoifhihekp'
	},
	{
		img:'201910-201911.png',
		primary: '照護管理系統',
		secondary: '2019/10 - 2019/11',
		paragraph: [
			'#團隊開發',
			'#個人接案',
			'負責網頁前端程式，開發、維護。',
		],
	},
	{
		img:'201912-202103.png',
		primary: 'yunjscss2',
		secondary: '2019/12 - 2021/03',
		paragraph: [
			'#獨立開發',
			'#side project',
			'負責設計，網頁前端程式開發、維護。',
		],
		url: 'https://github.com/yunworkspace2/yunjscss2'
	},
	{
		img:'201912-now.png',
		primary: '內部管理系統',
		secondary: '2019/12 - now',
		paragraph: [
			'#獨立開發',
			'負責設計，網頁前、後端程式開發、維護，資料庫建置。',
		],
	},
	{
		img:'201912-now2.png',
		primary: '電商網站',
		secondary: '2019/12 - now',
		paragraph: [
			'#團隊開發',
			'負責網頁前端程式，維護。',
		],
		url: 'http://hang-huo.com/'
	},
	{
		img:'201912-now3.png',
		primary: '自動化測試工具',
		secondary: '2019/12 - now',
		paragraph: [
			'#獨立開發',
			'負責設計，網頁前、後端程式開發、維護，資料庫建置。',
		],
	},
	{
		img:'201912-now4.png',
		primary: '登入資料管理系統',
		secondary: '2019/12 - now',
		paragraph: [
			'#獨立開發',
			'負責設計，網頁前、後端程式開發、維護，資料庫建置。',
		],
	},
	{
		img:'202012-now.png',
		primary: '第三方支付整合系統',
		secondary: '2020/12 - now',
		paragraph: [
			'#團隊開發',
			'負責api串接，網頁前、後端程式開發、維護。',
		],
	},
	{
		img:'202012-now2.png',
		primary: '電商網站',
		secondary: '2020/12 - now',
		paragraph: [
			'#團隊開發',
			'負責網頁前端程式開發、維護。',
		],
		url: 'https://sky9.tw/'
	},
	{
		img:'202103-now.png',
		primary: 'yunjscss3',
		secondary: '2021/03 - now',
		paragraph: [
			'#獨立開發',
			'#side project',
			'負責設計，網頁前端程式開發、維護。',
		],
		url: 'https://github.com/yunworkspace2/yunjscss3'
	},
	{
		img:'202103-now2.png',
		primary: '第三方支付整合系統',
		secondary: '2021/03 - now',
		paragraph: [
			'#團隊開發',
			'負責網頁後端程式，開發、維護。',
		],
	},
	{
		img:'202103-now3.png',
		primary: '財務整合系統',
		secondary: '2021/03 - now',
		paragraph: [
			'#團隊開發',
			'負責網頁後端程式，開發、維護。',
		],
	},
	{
		img:'202103-now4.png',
		primary: '財務整合系統',
		secondary: '2021/03 - now',
		paragraph: [
			'#團隊開發',
			'負責網頁後端程式，開發、維護。',
		],
	},
];
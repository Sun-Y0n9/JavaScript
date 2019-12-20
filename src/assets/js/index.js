// Array.reduce()
let arrayReduce = [
	{
		code: 12,
		name: '上海'
	}, {
		code: 15,
		name: '北京'
	}, {
		code: 100,
		name: '天津'
	}, {
		code: 50,
		name: '重启'
	}, {
		code: 30,
		name: '贵州'
	}, {
		code: 7,
		name: '黑龙江'
	}
];
let allCode = arrayReduce.reduce((total, current) => {
	return total.concat(current.code);
}, []);
console.log(allCode); // [12, 15, 100, 50, 30, 7]
let bigAreaName = arrayReduce.reduce((total, current) => {
	return current.code >= 30 ? total.concat(current.name) : total;
}, []);
console.log(bigAreaName); // ["天津", "重启", "贵州"]


// Array.flat()
let multidimensionalArray = [
	1, 2, 4,
	[4, 5],
	{
		name: 'Y0n9'
	},
	[
		[6, 7, [8, [9]]]
	]
];
// 参数4 是深度层级, 层级未知时支持传入Infinity 
console.log(multidimensionalArray.flat(Infinity)); // [1, 2, 4, 4, 5, {…}, 6, 7, 8, 9]
console.log(multidimensionalArray.flat(4)); // [1, 2, 4, 4, 5, {…}, 6, 7, 8, 9]

// URLSearchParams
let url = new URL('https://www.baidu.com/s?wd=mdn&rsv_spt=21&f=8&rsv_bp=41&&ie=utf-8&rqlang=&tn=baiduhome_pg&ch=chn&rsv_enter=79&rsv_dl=ib&inputT=3112');
console.log();
let params = new URLSearchParams(url.search);
for (let p of params) {
  console.log(p);
  /*
	["wd", "mdn"]
	["rsv_spt", "21"]
	["f", "8"]
	["rsv_bp", "41"]
	["ie", "utf-8"]
	["rqlang", ""]
	["tn", "baiduhome_pg"]
	["ch", "chn"]
	["rsv_enter", "79"]
	["rsv_dl", "ib"]
	["inputT", "3112"]
  */
}
let ie = params.get('ie');
console.log(ie); // utf-8
// URLSearchParams实例有get set has keys等方法 (实验性api);

// String.replace(res, '$n')
let discountInfo = '满#5#, 跨店#95#折';
let repalceReg = /([#])(\d+)([#])/g;
let renderHTML = discountInfo.replace(repalceReg, '<span>$2</span>');
console.log(renderHTML); // 满<span>5</span>, 跨店<span>95</span>折

// RegExp 断言
// 提取文本中, 所有的省会, 存入数组
let provinceMsg = '黑龙江: 哈尔滨,吉林: 长春,辽宁: 沈阳,内蒙古自治区: 呼和浩特,北京: 北京,天津: 天津,河北: 石家庄,山东: 济南,山西: 太原,陕西: 西安,甘肃: 兰州,新疆维吾尔自治区: 乌鲁木齐,青海: 西宁,西藏自治区: 拉萨,四川: 成都,河南: 郑州,江苏: 南京,安徽: 合肥,湖北: 武汉,重庆: 重庆,贵州: 贵阳,湖南: 长沙,江西: 南昌,上海: 上海,浙江: 杭州,福建: 福州,云南: 昆明,广西壮族自治区: 南宁,广东: 广州,海南: 海口,香港特别行政区: 香港,澳门特别行政区: 澳门,台湾: 台北.';
let assertionsReg = /(?<=(:\s))[\u4e00-\u9fa5]+/g;
// (?<=y)x x只有在y后面才匹配。
let provincialCapitalArr = provinceMsg.match(assertionsReg);
console.log(provincialCapitalArr);
//  ["哈尔滨", "长春", "沈阳", "呼和浩特", "北京", "天津", "石家庄", "济南", "太原", "西安", "兰州", "乌鲁木齐", "西宁", "拉萨", "成都", "郑州", "南京", "合肥", "武汉", "重庆", "贵阳", "长沙", "南昌", "上海", "杭州", "福州", "昆明", "南宁", "广州", "海口", "香港", "澳门", "台北"]
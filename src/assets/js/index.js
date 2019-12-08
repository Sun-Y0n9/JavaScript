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
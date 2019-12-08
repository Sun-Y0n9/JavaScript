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
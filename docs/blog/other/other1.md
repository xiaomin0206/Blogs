---
title: 变量和遍历
date: 2020-02-21
type: 3
blog: true
excerpt: 原型，作为前端开发者，或多或少都有听说。你可能一直想了解它，但是由于各种原因还没有了解，现在就跟随我来一起探索它吧。本文将由浅入深，一点一点揭开 JavaScript 原型的神秘面纱。（需要了解基本的 JavaScript 对象知识）
tags:
    - JavaScript
---

# 变量和遍历
```
var name='福布斯',years='2020'
console.log(`您好，今年是 ${ name } 发布 ${ years + 1} 周年`)
console.log('您好，今年是'+` ${ name } `+'发布'+` ${ years + 1} `+'周年')
````


## for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等
```
let someArray = [1, "string", false];
 
for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}
```
## for...in(数组,对象)
```


var arr=[{name:'张三'},{name:'李四'}];
var obj={name:'张三'};
for (var i in arr){
	console.log(i)
}
for (var i in obj){
	console.log(i)
}

for (var i of arr){
	console.log(i)
}
///////////0  1  name  {name:'张三'}  {name:'李四'}
```
## forEach
```
let list = [4, 5, 6];
list.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
});
```
**1. forEach() 用于遍历数组无返回值，会改变原来数组中的值**
```
let arr = [1, 3, 12, 2, 20, -1, 6, 17];
arr.forEach((item, index, array) => {
    array[index] = item * 2;
});
console.log(arr);					//	[2, 6, 24, 4, 40, -2, 12, 34]
```
**2. map() 用于遍历数组，返回处理之后的新数组**
```
const arr = [1, 3, 12, 2, 20, -1, 6, 17];
const newArr = arr.map((item, index, array) => item * 2);
console.log(arr);					//	[1, 3, 12, 2, 20, -1, 6, 17]
console.log(newArr);					//	[2, 6, 24, 4, 40, -2, 12, 34]
```


**3. filter() 用于筛选数组中满足条件的元素，返回一个筛选后的新数组**
```
const arr = [1, 3, 12, 2, 20, -1, 6, 17];
const newArr = arr.filter((item, index, array) => item < 5);
console.log(arr);					//	[1, 3, 12, 2, 20, -1, 6, 17]
console.log(newArr);					//	[1, 3, 2, -1]
```

**4. every() 用于判断数组中的每一项元素是否都满足条件，返回一个布尔值**
```
const arr = [1, 3, 12, 2, 20, -1, 6, 17];
const bool = arr.every((item, index, array) => item < 12);
console.log(bool);					//	false
```

**5. some() 用于判断数组中是否存在满足条件的元素，返回一个布尔值**
```
const arr = [1, 3, 12, 2, 20, -1, 6, 17];
const bool = arr.some((item, index, array) => item < 12);
console.log(bool);					//	true
```

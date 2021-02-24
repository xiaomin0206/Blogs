---
title: number和String的知识点
date: 2020-02-22
type: 3
blog: true
tags:
    - JavaScript
---

# Number的对象方法

### 1. toFixed()(把数字转换为字符串，并对小数点指定位数。)
```
var num3 = 177.234 
console.log(num3.toFixed())    177(其typeof为字符串)
```
### 2. toPrecision()(把数字格式化为指定的长度)

```
var num = new Number(7.123456); 
console.log(num.toPrecision());  // 输出：7.123456 
console.log(num.toPrecision(1)); // 输出：7
console.log(num.toPrecision(2)); // 输出：7.1
```
### 3. toString()(把数字转换为字符串)


# String的对象方法
### 1. charAt()(返回在指定位置的字符串)
```
var str = new String("RUNOOB"); 
console.log("str.charAt(0) 为:" + str.charAt(0)); // R
```
### 2.concat()(连接两个或更多字符串，并返回新的字符串)
```
var str='name',str1='张三'
console.log(str.concat(str1))
```
### 3. indexOf()(返回某个指定的字符串值在字符串中首次出现的位置,不存在则为-1)
```
var str1 = new String( "RUNOOB" ); 

var index = str1.indexOf( "OO" ); 
console.log("查找的字符串位置 :" + index );  // 3
```

### 4. lastIndexOf()(从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。)
```
var str='this is one one ne'
console.log(str.lastIndexOf('one'))   12
```

### 5. localeCompare()(用本地特定的顺序来比较两个字符串,如果str1大于index,返回大于0的数，小于的话返回小于0的数，相等的话返回等于0的数)
```
var str1 = new String( "This is beautiful string" );
  
var index = str1.localeCompare( "This is beautiful string");  

console.log("localeCompare first :" + index );  // 0
```

### 6. match()(查找找到一个或多个正则表达式的匹配)
```
var str="The rain in SPAIN stays mainly in the plain"; 
var n=str.match(/ain/g);  // ain,ain,ain
console.log(n) ////["ain", "ain", "ain"]
```
### 7. slice(start，end)(数组截取，返回新的数组，不改变原数组，start为负数，从后面算起，end为非必填，不包含此下标的值)
```
var arr=['测试','测试1','测试2']
console.log(arr.slice(1),arr.slice(1,2),arr,arr.slice(-1))//////["测试1", "测试2"] ["测试1"] ["测试", "测试1", "测试2"]   ["测试2"]
```
### 8. substr(start，length)(字符串截取，返回新的字符串，不改变原字符串，length为非必填，为长度)
```
var str="Hello world!"
console.log(str.substr(3,6),str.substr(3),str)///////lo wor lo world! Hello world!
```

### 9. substring(start，end)(字符串截取，返回新的数组，不改变原数组，start为非负的整数，end为非必填，不包含此下标的值)
```
var str = "RUNOOB GOOGLE TAOBAO FACEBOOK"; 
console.log(str.substring(1,2),str); //////RU RUNOOB GOOGLE TAOBAO FACEBOOK
```
### 10. split(separator,howmany)(字符串成为数组，separator正则，howmany为长度,不改变原字符串)
```
var str="How are you doing today?"
console.log(str.split(" ",3),str,str.split(" "))////["How", "are", "you"] "How are you doing today?" (5) ["How", "are", "you", "doing", "today?"]
```
### 10. splice(index,length)(数组删除，改变原数组)
```
var arra=['测试一','测试二','测试三']
console.log(arra.splice(1,2),arra)//// ["测试二", "测试三"] ["测试一"]
```





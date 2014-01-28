---
layout: post
title: "Js经典去重函数浅析"
category : javascript
articleType : blog
---

去重函数多如牛毛，各种算法也各有自己的特点，根据不同的需求，我们实现相应的算法。废话不多说，上代码：


    var arr = [1,2,3,4,5,6,7,5,6,3,5];

    function unique(arr) {
        var ret = [];
        var hash = {};

        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            var key = typeof(item) + item;
            if (hash[key] !== 1) {
                ret.push(item)
                hash[key] = 1
            }
        }
        return ret
    }

以上代码中，方法unique会接收一个数组作为参数，首先新增一个空数组用来保存返回的新数组，再建一个空的hash对象留在后面的遍历中使用。
按常规的办法，先遍历这个arr数组，将每个项保存在item变量中，**最关键的地方是这里**，将每个项的数据类型和值相加保存在key变量中，当
hash[key] 不等于1的时候，将这个项目push到新数组ret中，并且将该hash[key]的值赋值为1。（这就是聪明的地方了，比如第一个值的hash[key]是
hash[number1],循环出来的时候，hash[number1] = 1;当数组中有第二个1项的时候，那个项的key会等于number1,所以进入判断的时候，hash[key] == hash[number1],
由于前面有一个1 了，这个hash[number1]会等于1，所以进入不了判断体的代码。so，去重了，重复的项被隔离了。

---
layout: post
category : javascript
tagline: "Supporting tagline"
title : js方法
tags : [javascript, split, function]
articleType : blog
---



.map() 方法，对数组遍历执行，同时也会返回一个数组。其中x参数相当于数组中的项，这里，要截断“=”号后面的字符，只要对单个项也就是字符串
通过split方法生成有两个项的数组，然后，取数组的第一项，再加上字符串“=”。再把这个字符串赋值给传入的参数x。这样就可以了

    //截断字符串中“=”之后的字符
    (function() {

       var n = [1,2,3,4,5,6];

       var result = n.map(function(x) {
           return x + '+' + x + '='+ (x+x);
       });

       var results = result.map(function(x) {
           var h = x.split("=");
           return x = h[0]+"=";
       })
    })();


---
layout: post
category : lessons
tagline: ""
tags : [A]
title : "给一个字符串数组，根据他们的开头分类"
articleType : blog
---


首先使用随机数动态生成一个包含多个字符串的数组：

    let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let s = [];
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    
    for(let i = 0; i < 28; i++) {
    	let n = parseInt(getRandomArbitrary(1,26));
    	let b = parseInt(getRandomArbitrary(1,26));
    	let a = parseInt(getRandomArbitrary(1,26));
    	
    	s.push(arr[n] + arr[b] + arr[a]);
    }
    
再使用hash map 保存各个类型的字符串，具体思路如下：
对给定的数组遍历，取数组中没个元素的第一个字符为key,保存在hash map中，当这个map中这个key所对应的value为空的时候，则初始化该value为一个数组，数组的第一个元素就是当前这个单元。
当这个key所对应的value已经存在在map中的时候，则继续追加当前元素到这个value数组中，注意！这里所取的key都是来自于当前元素的第一个字符。


    let hash = {};
    
    s.forEach((item,i)=>{
    	let key = item.substring(0,1);
    	if(!hash[key]) {
    		hash[key] = [item];
    	} else {
    		hash[key].push(item);
    	}
    });
    
最后打印下结果：

    { h: [ 'hqt', 'hoc', 'hhj' ],
      q: [ 'qjw', 'qch' ],
      b: [ 'bsx', 'bjm', 'bpq' ],
      r: [ 'rxm', 'rqk' ],
      v: [ 'vrh' ],
      g: [ 'gih' ],
      w: [ 'wlk' ],
      m: [ 'mzb', 'mln', 'mvk' ],
      y: [ 'ywk', 'yor', 'yno' ],
      f: [ 'frb', 'fdk' ],
      j: [ 'jlh' ],
      l: [ 'lwc', 'lwn' ],
      z: [ 'znt' ],
      i: [ 'ipw' ],
      s: [ 'sqe' ],
      x: [ 'xxt' ] }
    

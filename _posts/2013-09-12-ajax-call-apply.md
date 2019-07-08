---
layout: post
title: "Ajax and call&apply"
tags: [ajax]
category : javascript
articleType : blog
---

首先，ajax是一个柔和了多种手段的技术，其目的也是为了在不刷新页面的情况下，与服务器交互。

传统方式的js ajax执行方式代码如下：

先对DOM对象新增一个输入框（input）

    <input type="button" value="Ajax提交" onclick="Ajax();"/>

给这个输入框绑定点击事件，触发Ajax();

跟新代码，新增id为resText的元素，用来显示响应后的信息

    <input type="button" value="Ajax提交" onclick="Ajax();"/>
    <div id="resText"></div>

下面是js代码，首先声明一个Ajax(),然后将实例化一个XMLHttpRequest对象

    function Ajax() {
        .....
    }

以下是所有细节

    function Ajax() {

        var xmlHttpReq = null; //定义一个空对象

        //为xmlHttpReq变量赋值

        if(window.ActiveXObject) {

            xmlHttpReq = new Active Xobject("Microsoft.XMLHTTP");//实例化一个IE浏览器下的XMLHttpRequest对象

        } else if(window.XMLHttpRequest) {

            xmlHttpReq = new XMLHttpRequest(); //实例化非IE浏览下的XMLHttpRequest对象

        }
        //实例化XMLHttpRequest对象后，要对其初始化

        xmlHttpReq.open("GET","test.php",true);

        //初始化对象之后，要声明一个回调函数，用来当响应返回的时候执行
        xmlHttpReq.onreadystatechange = RequestCallBack;

        //初始化后，将请求发送,由于是GET请求，所以，参数为null
        xmlHttpReq.send(null);

        //声明RequestCallBack()函数体
        function RequestCallBack() {
            if(xmlHttpReq.readyState == 4) {
                if(xmlHttpReq.status == 200) {
                    document.getElementById("resText").innerHTML = xmlHttpReq.responseText;
                }
            }
        }

    }

总结：
由于各个浏览器的表现不同，在实例化XMLHttpRequest对象的时候，需要做一些判断，用以生成正确的XMLHttpRequest对象。实际上，当实例化一个XMLHttpRequest对象之后，首先要做的就是对其初始化。使用open()方法
初始化，类似于子弹上膛，等待send()方法将请求发送出去。至于res响应之后，XMLHttpRequest对象该做什么事情，默认的它有个onreadystatechange()回调函数，用来对响应的状态做出判断从而执行相应的代码。在这个
例子中，只有当状态码都显示最后的时候，也就是完全响应之后，再执行打印的方法。


下面来讲讲js中call()和apply()这两个方法：
通常，这两个方法是用来实现方法重用的，因为他们都接收两个参数，前者是为当前方法提供作用域的对象（也就是要执行这个方法的对象），后者则是要传入这个方法中的形参。这两个方法唯一的区别就是在于这个形参，call传递的
是单个参数，而apply则必须传递arguments数组作为参数。

上栗子：

    function A() {
        this.name = "elliot";
        this.age = 19;
    }

    A.prototype = {
        app: function() {
            alert(10);
        },
        appNext: function() {
            alert(20);
        }
    }
以上，是一个常规的对象声明方式，先声明一个function A对象（其实是个构造函数），再给改构造函数的原型指向了一个包含两个方法的对象。
    var B = new A();
很常规，我们实例化了一个对象B。那么该对象中就会包含name,age这两个属性，而且，他们会拥有两个方法的使用权：app和appNext。
如果说，这个A构造函数，是一个需要大量重用的函数，而我们当然不希望，这两个成员函数（暂且这么叫吧，我认为这些函数是有它的使用范围的，只能给他们的子类或者实例化对象使用。不能轻易借人用）
被所有实例化对象调用。那么我们就要用到call方法了
代码：

    var C = {};
    A.call(C); //C = {}

这样，A构造函数里的成员变量（私有属性，每个实例都拥有一份，绝无仅有）就会通过这个方法被空对象C“继承”了，实事上，只要设计合理，对象都可以通过call或者apply方法去调用一个不相干的方法，作为它的
构造函数。

为了进一步说明call 和 apply之间的不同，我们把例子扩充一下：

    function A(n) {
        this.name = "elliot";
        this.age = 19;
        this.n = ++n;
    }

    A.prototype = {
        app: function() {
            alert(1);
        },
        appNext: function() {
            alert(2);
        }
    }

    var B = {};
    var n = 2;
    A.call(B,n);

上面的方法A多了个形参n，也就意味着，call方法可以传递第二个参数（当然也可以不传）。这个参数就是给前面的方法调用使用的。
如果，我们把call换成apply:

    A.apply(B,n);

结果就会报错
但是如果是这样：

    var n = [2];
    A.apply(B,n);

结果，就是通过了。他们的唯一区别就是后面的参数，call接收的参数类型可以很多，但是apply只接收数组作为参数。由于数组内可以是各种数据类型的项，因此，这两个方法也是各有所长的。
值得注意的是，A.apply(B)的执行结果不能被赋值到其他变量上，这个动作只表示B通过A实例化了，并且获得了一些属性。




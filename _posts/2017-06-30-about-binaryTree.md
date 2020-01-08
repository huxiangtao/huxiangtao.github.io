---
layout: post
category : lessons
tagline: "建议大家在看『 XXX 10 分钟入门』一类文章之前，先阅读 Peter Norvig 的这篇文章"
tags : [C]
title : "关于binaryTree"
articleType : blog
---


在聊二叉树之前，要先解决梳理一些关于指针概念上的问题，在c语言中，指针是一种数据类型，用于保存内存地址，而且往往是以16进制的形式来保存。先看下面的代码：
```c
	void changeInt(int * p);
    
    int main(void) {
      int n = 6;
      int * p = &n;
      changeInt(p)
      printf("the n's value is %d\n",n);
      return 0;
    }
    
    void changeInt(int * s) {
      *s = 7;
	}
```
    
&nbsp;&nbsp;理解以上代码比较容易，程序一开始就初始化一个int整数n为6。再初始化一个指向int的指针p，将n的地址赋值给该指针。在调用changeInt()方法的时候，将该指针的值（也就是变量n的地址）作为参数传递进去。实际上，就是将指针p的值复制给了函数changeInt(int * p)的形参s，在函数chanegInt中，对该值（地址值）取值，得到该地址所对应的内存，将内存中的值赋值为7，执行完后，返回到main()函数中，在main()函数中第7行打印值的时候，输出的是新的值——7；
那么，这种程序如果改变的是一个struct结构，效果是不是一样的呢？

```c
  typedef struct person {
    char * name;
    int age;
  } person;
  
  void changeStruct(person *);
  
  int main(void) {
    person * p;
    changeStruct(p);
    printf("The age of person is %d\n",p->age);
    return 0;
  }
  
  void changeStruct(person * s) {
    p->name = "elliot";
    p->age = 19;
  }
```

首先，定义了一个结构struct person为一种数据类型，取名为person，在main()函数中，声明了一个指向该结构的指针，此时该指针的值是一个随机的值，不清楚指向哪里，但是该指针所指向的内存空间的大小就是这个结构所需要的大小。同样的，在main函数中，调用changeStruct()函数，将一个person结构的地址传递给函数changeStruct()，函数changeStruct()获得该地址的一份拷贝，然后再使用->符号来调用该地址所指向的结构中的一个属性，并改变之。这个调用非常类似于以下javascript的代码：

```c
  var person = {
    name:"",
    age:0
  }
  
  changeObj(person);
  console.log(person.name,person.age);
  
  function changeObj(obj) {
    obj.name = "elliot";
    obj.age = 19;
  }
```   
在js中，虽然并没有指针的概念，但是，我们可以通过给函数传递实例对象来改变该对象中的属性值。这里，方法changeObj()无法改变对象person本身，但是可以改变该对象中所保存的属性变量。因为，js中对象都是引用保存的，这个就类似于C中的指针变量。C语言中定义的指针变量，保存的就是对某些对象的引用。
像前面C的那个例子中，指针p保存的是对结构（姑且理解成对象）struct person的引用，当p作为参数传递的时候，函数接收到的就是这个对象的引用，所以操作的也是这个引用所对应的内存空间。

###好，

二叉搜索树是一种数据结构，为何在创建二叉树的时候，要传递的是双指针而不是一维指针呢？因为，在创建函数内部，需要为该节点分配内存空间；换句话说，创建节点要改变的是新指针的指向，而不是改变新指针所指向的对象的内容。
试想，如果传递 一维指针，createNode()函数得到的是某个对象的地址，它只能改变该引用地址所对应的对象的内部的属性值，而创建节点的目的是要给传递进来的指针地址指向一个新的内存空间。换句话说，创建节点的目的是创建空间并改变指针指向，而不是改变指针对象的内部变量值。举个例子：

```c
    #include <stdio.h>
    #include <stdlib.h>
    
    typedef struct person {
      char * name;
      int age;
    }person;
    
    void createPerson(person *);
    
    int main(void) {
      person * p;
      createPerson(p);
      return 0;
    }
    
    void createPerson(person * s) {
      s = (person *)malloc(sizeof(person)); //为新的指针s分配一块新的内存空间
      s->name = "elliot"; //为新对象赋值
      s->age = 19; //为新对象赋值
    }
```

如以上代码所示，createPerson函数接收一个指向person结构的指针的地址，在函数体内为该指针重新赋值到一个新分配到内存空间。再改变该指针所指向的对象的属性值，然后结束函数。在这个时候，由于函数createPerson都是按值传参的，也就是说，参数person * s得到了main函数中指针p的值的拷贝。在函数体内分配的空间会被成功创建并初始化，但在createPerson函数调用结束后，参数s也就被自动释放掉了。但是，新分配的内存并没有被释放，所以，这样的结果会造成内存泄漏，而且外部函数也无法访问到新创建的节点node。

###当然，

上面的方法完全可以改写成这样：
```c
    person * createPerson(void) {
      person * s = (person *)malloc(sizeof(person));
      s->name = "elliot";
      s->age = 19;
      return s;
    }
```   
这个函数，新分配内存给内部变量，然后将该指针返回出来。这个办法可以成功返回。但是，这里介绍的方法是递归创建，所以只能在createPerson函数内部完成新指针的初始化过程。
也就是说，要让函数接收一个指针作为操作对象，将该指针的值被赋予到新的内存空间地址。这里，应该将被操作的指针看作一个普通变量，要想改变这个变量的值，则要将该变量的指针传递进操作函数中去。就像，要改变n=5变量的值为10，函数接收的是&n，变量n的地址也就是指向n的指针。如果把n 当作一个指针变量，要改变的是该指针变量的值，则传递的是&n，指针变量的地址。那么，函数接收的就是指针的指针了。这就是二维指针的缘由。

终于可以谈谈二叉树的创建了，二叉搜索树是非常经典也非常重要的一种数据结构，下面我详细的分析下如何建立和使用二叉搜索树。以C语言为例：
```c
    #include<stdio.h>
    #include<stdlib.h>
    
    //定义单个binaryNode的结构
    typedef struct binaryNode {
      int data;
      struct binaryTree * left;
      struct binaryTree * right;
    }binaryNode,* node;
    
    void createNode(node * p) {
      *p = (binaryNode *)malloc(sizeof(binaryNode));//为新节点分配空间,这里通过对p取值从而操作外部变量的值。
      scanf("%d",*p->data);//为新节点的数据赋值
      createNode(&(*p->left));
      createNode(&(*p->right));
    }
    
    int main(void) {
      binaryNode * node;//定义一个节点
      createNode(&node);//将这个节点的地址传递进去，函数得到该地址并对地址取值后可以获得该节点对值。
      return 0;
    }
```
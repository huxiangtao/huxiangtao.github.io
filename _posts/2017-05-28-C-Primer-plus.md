---
layout: post
category : C
tagline: "basic of C"
tags : [C]
title : 具有代码块作用域的静态变量
articleType : blog
---

静态变量（static variable）这一名称听起来很矛盾，像是一个不可变的变量。实际上，“静态”是指变量的位置固定不动。具有文件作用域的变量自动具有静态存储时期。也可以创建具有代码块作用域，兼具静态存储位置的局部变量。这些变量和自动变量具有相同的作用域，但当包含这些变量的函数完成工作时，他们并不消失。

    #include<stdio.h>
    void trystat(void)
    int main(void) {
      int count;
      for(count = 1;count <= 3;count++) {
        printf("Here comes iteration %d: \n",count);
        trystat();
      }
      return 0;
    }
    void trystat(void) {
      int fade = 1;
      static int stay = 1;
      printf("fade = %d and stay = %d\n",fade++,stay++);
    }
    
    Here comes iteration 1: 
    fade = 1 and stay = 1
    Here comes iteration 2: 
    fade = 1 and stay = 2
    Here comes iteration 3: 
    fade = 1 and stay = 3
    huxtdeMBP:c huxt$ 
    
静态变量stay记得它的值曾经被加1，而变量fade每次重新开始。这表明了初始化的不同；在每次调用trystat()时fade都被初始化，而stay只在编译trystat()时被初始化一次。如果不是显式的对静态变量进行初始化，他们将被初始化为0。

    int fade = 1;
    static int stay = 1;
    
第一个语句确实是函数trystat()的一部分，每次调用该函数时都会执行它，它是个运行时的动作。而第二个语句实际上并不是函数trystat()的一部分。如果用调试程序逐步运行该程序，你会发现程序看起来跳过了那一步，那是因为静态变量和外部变量在程序调入内存时已经就位了。把这个语句放在trystat()函数中是为了告诉编译器只有函数trystat()可以看到该变量。它不是在运行时执行的语句。
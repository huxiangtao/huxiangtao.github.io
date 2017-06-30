---
layout: post
category : C
tagline: "basic of C"
tags : [C]
title : 存储类、链接和内存管理
articleType : blog
---

    > auto , extern , static , register , const , volatile , resticted 
    > rand() , stand() , time() , malloc() , calloc() , free() 
    > 在C中如何确定变量的作用域，它在多大范围内可知，以及变量的生存期有多长
    
不带{}的代码块

  先前提到过c99有一个特性，语句若为循环或者if语句的一部分，即使没有使用{ }，也认为是一个代码块。
  更完整的说，整个循环是该循环所在代码块的子代码块，而循环体是整个循环代码块的子代码块。与之类似，if语句是一个代码块，其相关子语句也是if语句的子代码块。这一规则影响到你能够在何处定义变量以及该变量的作用域。
  
    #include <stdio.h>
    int main(void) {
        int n = 10;
        printf("Initially, n = %d\n",n);
        for(int n = 1; n < 3; n++)
            printf("loop 1; n = %d\n",n);
        printf("After loop 1, n = %d\n",n);
        for(int n = 1; n < 3; n++ ) {
            printf("loop 2 index n = %d\n",n);
            int n = 30;
            printf("loop 2: n = %d\n",n);
            n++;
            printf("%d\n",n);
        }
        printf("After loop 2, n = %d\n",n);
      return 0;
    }
    
在上面的代码中，循环体是这整个循环的子代码。for() {…..}省略号部分是这整个循环的子代码，因此，循环体中的n会覆盖for(....)中的索引n，当循环体执行完毕一轮， n的值又会恢复到索引值。
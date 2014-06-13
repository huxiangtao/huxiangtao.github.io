---
layout: post
category : C
tagline: "Integer type"
tags : [android]
title : C Primer Plus 03
articleType : blog
---

###整数类型

C的整数类型包括：
>int
>char
>_Bool

C不仅仅能表示8位字节。16位、32位、64位等等也都是可以的，前提是必须有编码系统的支持，为了兼容各个系统的差异，C99标准引入了一个.h头文件。

另外，C中，printf()函数和scanf()函数比较特殊，其参数数目可以不受限制。
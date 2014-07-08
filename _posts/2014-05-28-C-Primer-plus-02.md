---
layout: post
category : C
tagline: "Compile C"
tags : [android]
title : C Primer Plus 02
articleType : blog
---

###目标代码文件、可执行文件和库

C编程的基本策略是使用程序将源代码文件转换为可执行文件，此文件包含可以运行的机器语言代码。C分两步完成这一工作：

>编译和链接

编译器将源代码转换为中间代码，链接器将此中间代码与其他代码相结合来生成可执行文件。C使用被划分为两部分的这一方法使程序便于模块化。
您可以分别编译各个模块，然后使用链接器将编译过的模块结合起来。这样，如果需要改变一个模块，则不必重新编译所有其他模块。同时，链接器将您的程序
与编译的库代码结合起来。

中间文件的形式有多种选择。最一般的选择，同时也是我们这里讲述的实现方式所采取的选择，是将源代码转换为机器语言代码，将结果放置在一个目标代码文件（或简称为目标文件）中（这里假设您的源代码由单个文件组成）。
虽然目标文件包含机器语言代码，但该文件还不能运行。目标文件包含源代码的转换结果，但它还不是一个完整的程序。

目标代码文字中所缺少的第一个元素是一种叫做启动代码（start-up code）的东西，此代码相当于您的程序和操作系统之间的接口。例如，您可以在DOS或Linux下运行一个IBM PC兼容机，在两种情况中硬件是相同的，所以都会使用同样的目标代码，但DOS
和Linux要使用不同的启动代码，因为这两种系统处理程序的方式是不同的。

所缺少的第二个元素是库例程的代码。几乎所有C程序都利用标准C库中所包含的例程（称为函数）。例如，前面的concrete.c使用了函数printf()。目标代码文件不包含这一函数的代码，它只包含声明使用printf()函数的指令。实际代码存储在另一个称为“库”的文件中，
库文件中包含许多函数的目标代码。

###链接器的作用：

>将3个元素（目标代码、系统的标准启动代码、库代码）结合在一起，并将它们存放在单个文件，即可执行文件中。对库代码来说，链接器只从库中提取您所使用的函数所需要的代码。

简而言之，目标文件和可执行文件都是由机器语言指令组成。但目标文件只包含您所编写的代码转换成的机器语言，而可执行文件还包含您所使用的库例程以及启动代码的机器代码。

在一些系统上，您必须分别运行编译和链接程序。在另外一些系统上，编译器可以自动启动链接器，所以只须给出编译命令即可。

###UNIX系统

因为C的流行开始于UNIX系统，所以，我们首先讲述该系统。

####一、在UNIX系统上编辑

UNIX C
---
layout: post
category : C
tagline: "basic of Browser"
tags : [Browser work]
title : How Browsers work
articleType : blog
---

###The browser’s main functionality

the browser main functionality is to present the web resource you choose, by requesting it from the server and display it on the browser window.The resource format is usually HTML but also PDF,image and more.The location of the resource is specified by the user using a URI(Uniform resource Identifier).More on that in the network chapter.
The way the browser interprets and displays HTML files is specified in the HTML and CSS specification.These specifications are maintained by the W3C(World Wide Web Consortium)organization,which is the standards organization for the web.The current version of HTML is 4

###The browser’s high level structure

The browser’s main components are:

1、The user interface
2、The browser engine
3、The rending engine
4、Networking
5、UI backend- used for drawing basic widgets like combo boxes and windows. It exposes a generic interface that is not platform specific. Underneath it uses the operating system user interface methods.
6、Javascript interpreter
7、Data storage

![](img/2.png)

###Communication between the components

The rending engine

By default the rending engine can display HTML and XML documents and images.It can display other types through a plug-in (a browser extension).An example is displaying PDF using a PDF viewer plug-in.

###Displaying Html and images that are formatted using CSS

Rending engines

* Gecko -a “home made” Mozilla rendering engine.
* Webkit -safari and chrome,this is a open source rendering engine which started as an engine for the Linux platform and was modified by Apple to support Mac and Windows.See http://webkit.org/ for more details.

###The main flow

The rendering engine will start getting the contents of the requested document from the networking layer.This will usually be done in 8K chunks.
After that this is the basic flow of the rendering engine:
![](img/3.png)

The rendering engine will start parsing the HTML document and turn the tags to DOM nodes in a tree called the “content tree”.It will parse the style data,both in external CSS files and in style elements.The styling information together with visual instructions in the HTML will be user to create another tree—the render tree.
The render tree contains rectangles with visual attributes like color and dimensions.The rectangles are in the right order to be displayed on the screen.
After the construction of the render tree it goes through a “layout” process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting.-the render tree will be traversed and each node will be painted using the UI backend layer.

It is important to understand that this is a gradual process.For better user experience, the rendering engine will try to display contents on the screen as soon as possible.It will not wait until all HTML is parsed before starting to build and layout the render tree.Parts of the content will parsed and displayed,while the process continues with the rest of the contents that keeps coming from the network.

###main flow examples
![](img/4.png)
###Figure 3:webkit main flow
![](img/5.png)

###Figure 4:Mozilla's Gecko rendering engine main flow
from figure 3 and 4 you can see that although Webkit and Gecko use slightly different terminology,the flow is basically the same.Gecko calls the tree of visually formatted elements-Frame tree.Each element is a frame.Webkit uses the term “Render tree” and it consists of “Render Objects”.Webkit uses the term “layout” for the palcing of element, while Gecko calls it “Reflow”. “Attachment” is Webkit’s term for connecting DOM nodes and visual information to create the render tree. 

###Parsing - general
Since parsing is a very significant process within the rendering engine, we will go into it a little more deeply.Let’s begin with a little introduction about parsing.
Parsing a document means translating it to som strucrture that makes sense — something the code can understand and use. The result of parsing is usually a tree of nodes that represent the structure of the document.It is called a parse tree or a syntax tree.

Example — parsing the expression “2 + 3 -1” could return this tree:
![](img/6.png)





//在网络节点中，负责消费资源的电脑，叫做客户端；负责对外提供网络资源的电脑，叫做服务器
//http模块是Node.js官方提供的、用来创建web服务器的模块。通过http模块提供的http.createServer()方法，就能方便地把一台普通的电脑，变成一台Web服务器，从而对外提供Web资源服务

//如果要希望使用http模块创建Web服务器，则需要先导入它
const http = require('http')

//服务器和普通电脑的区别在于，服务器上安装了web服务器软件，例如：IIS,Apache等。通过安装这些服务器软件，就能把一台普通的电脑变成一台web服务器
//在Node.js中，我们不需要使用IIS、Apache等这些第三方web服务器软件。因为我们可以基于Node.js提供的http模块，通过几行简单的代码，就能轻松的手写一个服务器软件

//--------------------------------------
//IP地址
//IP地址就是互联网上每台计算机的唯一地址，因此IP地址具有唯一性。如果把'个人电脑'比作'一台电话'，那么'IP地址'就相当于'电话号码'，只有在知道对方IP地址的前提下，才能与对应的电脑之间进行数据通信
//IP地址的格式：通常用'点分十进制'表示成（a.b.c.d）的形式，其中，a、b、c、d都是0~255之间的十进制整数。例如：用点分十进表示的IP地址（192.168.1.1）

//注意：1.互联网中每台Web服务器，都有自己的IP地址，例如：大家可以再Windows的中断中运行ping www.baiu.com命令，即可查看到百度副武器的IP地址
//     2.在开发期间，自己的电脑既是一台服务器，也是一个客户端，为了方便测试，可以在自己的浏览器中输入127.0.0.1这个IP地址，就能把自己的电脑当做一台服务器进行访问了
//--------------------------------------
//域名和域名服务器
//尽管IP地址能够唯一的标记网络上的计算机，但IP地址是一长串数字，不直观，而且不便于记忆，于是人们又发明了另一套字符型的地址方案，即所谓的域名地址
//IP地址和域名是一一对应的关系，这份对应关系存放在一种叫做域名服务器的电脑中。使用者只需要通过好记的域名访问对应的服务器即可，对应的转换工作由域名服务器实现。因此，域名服务器就是提供IP地址和域名之间的转换服务的服务器
//注意：1.单纯使用IP地址，互联网中的电脑也能够正常工作。但是有了域名的加持，能让互联网的世界变得更加方便。
//     2.在开发测试期间，127.0.0.1对应的域名是localhost，它们都代表我们自己的这台电脑，在使用效果上没有任何区别
//--------------------------------------
//端口号
//计算机中的端口号，就好像是现实生活中的门牌号一样。通过门牌号，外卖小哥可以在整栋大楼众多的房间中，准确把外卖送到你都手中。
//同样的道理，在一台电脑中，可以运行成百上千个web服务。每个web服务都对应一个唯一的端口号。客户端发送过来的的网络请求，通过端口号，可以被准确地交给对应的web服务进行处理
//注意：1.每个端口号不能同时被多个web服务占用
//     2.在实际应用中，URL中的80端口可以被省略
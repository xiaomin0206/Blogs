---
title: 变量和遍历
date: 2020-02-21
type: 3
blog: true
excerpt: 原型，作为前端开发者，或多或少都有听说。你可能一直想了解它，但是由于各种原因还没有了解，现在就跟随我来一起探索它吧。本文将由浅入深，一点一点揭开 JavaScript 原型的神秘面纱。（需要了解基本的 JavaScript 对象知识）
tags:
    - JavaScript
---
##websocket不需要心跳机制
```
data(){
	return{
		 wsSrc:'ws://192.168.1.187/ninca-qk-alarm-app/alarm/ws/alarm/',//本地
	}
}
created(){
	this.initWebSocket();
}
beforeDestroy() {
    this.websocketclose("关闭");
  },
methods:{
	//初始化weosocket
	initWebSocket() {
	  // let date = new Date().getTime()
	  const wsuri = this.wsSrc+new Date().getTime()+this.currentId;
	  this.ws = new WebSocket(wsuri);
	  this.ws.onopen = this.websocketonopen;
	  this.ws.onmessage = this.websocketonmessage;
	  this.ws.onerror = this.websocketonerror;
	  this.ws.onclose = this.websocketonerror;
	},
	websocketonopen() {
	  console.log("建立连接成功");
	  //建立连接
	  this.websocketsend(this.currentId);
	},
	websocketonerror() {
	  //连接建立失败重连
	  this.initWebSocket();
	},
	<!--数据接收  -->
	websocketonmessage(e) {
	  let received_msg = JSON.parse(e.data);//////接收到消息
	  this.dataList.shift();
	  this.dataList.unshift(received_msg[0]);
	  // console.log( this.newsList,"数据已接收...",received_msg);
	},
	websocketsend(Data) {
	  //数据发送
	  this.ws.send(Data);
	},
	websocketclose(e) {
	  //关闭
	  console.log("断开连接", e);
	  this.ws.close();
	},
}
```
##websocket需要心跳机制
```
  export default{
	  data(){
		  return{
			  lockReconnect:false,////避免重复连接
			  wsUrl:'wss://echo.websocket.org',
			  ws:'',
			  tt:''
		  }
	  },
	  created(){
		  this.createWebSocket()
	  },
	  methods:{
		  createWebSocket() {
		    try {
		      this.ws = new WebSocket(this.wsUrl);
		      this.init();
		    } catch(e) {
		      console.log('catch');
		      this.reconnect(wsUrl);
		    }
		  },
		  init() {
		    this.ws.onclose = function () {
		      console.log('链接关闭');
		      this.reconnect(this.wsUrl);
		    };
		    this.ws.onerror = function() {
		      console.log('发生异常了');
		      this.reconnect(this.wsUrl);
		    };
		    this.ws.onopen = function () {
				this.ws.send(Data);////////发送数据
		      //心跳检测重置
		      this.heartFun.start();
		    };
		   this.ws.onmessage = function (event) {
		      //拿到任何消息都说明当前连接是正常的
		      console.log('接收到消息');
		      this.heartFun.start();
		    }
		  },
		  reconnect(url) {
		    if(this.lockReconnect) {
		      return;
		    };
		    this.lockReconnect = true;
		    //没连接上会一直重连，设置延迟避免请求过多
		    this.tt && clearTimeout(this.tt);
		    this.tt = setTimeout(function () {
		      this.createWebSocket(url);
		      this.lockReconnect = false;
		    }, 4000);
		  },
		  //心跳检测
		  heartFun(){
			  var heartCheck = {
				timeout: 3000,
				timeoutObj: null,
				serverTimeoutObj: null,
				start: function(){
				  console.log('start');
				  var self = this;
				  this.timeoutObj && clearTimeout(this.timeoutObj);
				  this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj);
				  this.timeoutObj = setTimeout(function(){
					//这里发送一个心跳，后端收到后，返回一个心跳消息，
					console.log('55555');
					this.ws.send("123456789");
					self.serverTimeoutObj = setTimeout(function() {
					  console.log(111);
					  console.log(ws);
					  this.ws.close();////在一段时间后(在不同的浏览器下，时间是不一样的，firefox响应更快)，
可以通过 onclose事件监听到。因此在onclose事件内，我们可以调用 reconnect事件进行重连操作
					}, self.timeout);
				
				  }, this.timeout)
				}
			  }
			return heartCheck
		}
		  
	  }
  }
  
```
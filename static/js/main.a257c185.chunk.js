(this.webpackJsonpcryptoss=this.webpackJsonpcryptoss||[]).push([[0],{105:function(t,e,n){},127:function(t,e){},129:function(t,e){},162:function(t,e){},163:function(t,e){},205:function(t,e,n){"use strict";n.r(e);var a=n(18),c=n.n(a),o=n(96),i=n.n(o),s=(n(105),n.p,n(50),n(13)),r=n.n(s),l=n(8),p=n(25),u=n(97),h=n(98),d=n(100),b=n(99),m=n(10),g=n.n(m),y=n(2),x=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).handleChange=function(t){n.setState({NobitexToken:t.target.value}),""===t.target.value&&n.setState({NobitexToken:null})},n.handleChange1=function(t){n.setState({quantity:t.target.value}),""===t.target.value&&n.setState({quantity:null})},n.handleChange2=function(t){n.setState({BinanceApiKey:t.target.value}),""===t.target.value&&n.setState({BinanceApiKey:null})},n.handleChange3=function(t){n.setState({BinanceSecretKey:t.target.value}),""===t.target.value&&n.setState({BinanceSecretKey:null})},n.handleClickButton=function(){window.localStorage.setItem("NobitexToken",n.state.NobitexToken)},n.handleClickButton1=function(){window.localStorage.setItem("quantity",n.state.quantity)},n.handleClickButton2=function(){window.localStorage.setItem("BinanceApiKey",n.state.BinanceApiKey)},n.handleClickButton3=function(){window.localStorage.setItem("BinanceSecretKey",n.state.BinanceSecretKey)},n.state={},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){t.handleMax()}),1e4)}},{key:"handleMax",value:function(){var t=Object(p.a)(r.a.mark((function t(){var e,a,c,o,i,s,p,u,h,d,b,m,y,x,f,S,k,v,T,j,w,C,O,B,I,A,E,_,D,U,X,K,R,N,F,q,L,M,W,P,H=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e={symbol:"USDTIRT"},a=new Audio("https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3"),g.a.post("https://api.nobitex.ir/v2/trades",e,{}).then((function(t){H.setState({tether:Number.parseFloat(t.data.trades[0].price,10)})})).catch((function(t){console.log("erroppppppp")})),c=["btc","eth","ltc","bch","xlm","trx","doge","etc","bnb","eos","xrp"],o=["BTCIRT","ETHIRT","LTCIRT","BCHIRT","XLMIRT","TRXIRT","DOGEIRT","ETCIRT","BNBIRT","EOSIRT","XRPIRT"],i=["BTCUSDT","ETHUSDT","LTCUSDT","BCHUSDT","XLMUSDT","TRXUSDT","DOGEUSDT","ETCUSDT","BNBUSDT","EOSUSDT","XRPUSDT"],s=[3,3,3,3,0,0,0,2,2,1,1],p=[2,2,2,2,5,5,5,3,2,3,4],u=1;case 9:if(!(u<o.length+1)){t.next=80;break}return h=u-1,window["data"+h]={symbol:o[u-1]},t.next=14,g.a.post("https://api.nobitex.ir/v2/trades",window["data"+h],{}).then((function(t){var e=Number.parseFloat(t.data.trades[0].price,10)/H.state.tether;H.setState(Object(l.a)({},"nobitex_price".concat(h),e))})).catch((function(t){console.log("erroppppppp")}));case 14:return t.next=16,g.a.get("https://fapi.binance.com/fapi/v1/trades?symbol="+i[h],{}).then((function(t){console.log("aaaaaaaaaaa");var e=Number.parseFloat(t.data[0].price,10);H.setState(Object(l.a)({},"binance_price".concat(h),e))})).catch((function(t){console.log(t)}));case 16:if(this.state["binance_price".concat(h)]>=this.state["nobitex_price".concat(h)]?(this.setState(Object(l.a)({},"min".concat(h),this.state["binance_price".concat(h)])),this.setState(Object(l.a)({},"name_min".concat(h),i[h])),this.setState(Object(l.a)({},"max".concat(h),this.state["nobitex_price".concat(h)])),this.setState(Object(l.a)({},"name_max".concat(h),o[h]))):(this.setState(Object(l.a)({},"max".concat(h),this.state["binance_price".concat(h)])),this.setState(Object(l.a)({},"name_max".concat(h),i[h])),this.setState(Object(l.a)({},"min".concat(h),this.state["nobitex_price".concat(h)])),this.setState(Object(l.a)({},"name_min".concat(h),o[h]))),!(Math.abs((this.state["max".concat(h)]-this.state["min".concat(h)])/this.state["min".concat(h)]*100)>2.4&&this.state["binance_price".concat(h)]>this.state["nobitex_price".concat(h)])){t.next=47;break}return console.log("nobitex",.985*this.state.tether*this.state["binance_price".concat(h)]),console.log("maxxxx",this.state["max".concat(h)],this.state["name_max".concat(h)]),console.log("minnnn",this.state["min".concat(h)],this.state["name_min".concat(h)]),d=new Date,console.log("taghir",(this.state["max".concat(h)]-this.state["min".concat(h)])/this.state["min".concat(h)]*100,d),a.play(),b=window.localStorage.getItem("quantity"),m=.985*this.state.tether*this.state["binance_price".concat(h)],y=b/m,x=window.localStorage.getItem("NobitexToken"),f={type:"buy",srcCurrency:c[h],dstCurrency:"rls",amount:String(y),price:String(m)},S={headers:{Authorization:"token ".concat(x)}},t.next=32,g.a.post("https://api.nobitex.ir/market/orders/add",f,S).then((function(t){console.log("buy",t)})).catch((function(t){console.log("erroppppppp",t)}));case 32:return k=n(26),v="https://fapi.binance.com",T="/fapi/v1/order",j=1.005*this.state["binance_price".concat(h)],w=b/(this.state.tether*j),C=w.toFixed(s[h]),O=j.toFixed(p[h]),B="symbol="+i[h]+"&side=SELL&type=LIMIT&timeInForce=GTC&quantity="+String(C)+"&price="+String(O)+"&recvWindow=59999&timestamp="+Date.now(),console.log(j,C),I={akey:String(window.localStorage.getItem("BinanceApiKey")),skey:String(window.localStorage.getItem("BinanceSecretKey"))},A=k.createHmac("sha256",I.skey).update(B).digest("hex"),E=v+T+"?"+B+"&signature="+A,_={headers:{"X-MBX-APIKEY":I.akey}},t.next=47,g.a.post(E,null,_).then((function(t){console.log("selll",t)})).catch((function(t){console.log("erroppppppp",t)}));case 47:if(!(Math.abs((this.state["max".concat(h)]-this.state["min".concat(h)])/this.state["min".concat(h)]*100)>1.4&&this.state["binance_price".concat(h)]<this.state["nobitex_price".concat(h)])){t.next=77;break}return console.log("nobitex",1.005*this.state.tether*this.state["binance_price".concat(h)]),console.log("maxxxx",this.state["max".concat(h)],this.state["name_max".concat(h)]),console.log("minnnn",this.state["min".concat(h)],this.state["name_min".concat(h)]),d=new Date,console.log("taghir",(this.state["max".concat(h)]-this.state["min".concat(h)])/this.state["min".concat(h)]*100,d),a.play(),D=window.localStorage.getItem("quantity"),U=1.005*this.state.tether*this.state["binance_price".concat(h)],X=D/U,K=window.localStorage.getItem("NobitexToken"),R={type:"sell",srcCurrency:c[h],dstCurrency:"rls",amount:String(X),price:String(U)},N={headers:{Authorization:"token ".concat(K)}},t.next=62,g.a.post("https://api.nobitex.ir/market/orders/add",R,N).then((function(t){console.log("sell",t)})).catch((function(t){console.log("erroppppppp",t)}));case 62:return F=n(26),v="https://fapi.binance.com",T="/fapi/v1/order",q=.995*this.state["binance_price".concat(h)],L=D/(this.state.tether*q),M=L.toFixed(s[h]),W=q.toFixed(p[h]),B="symbol="+i[h]+"&side=BUY&type=LIMIT&timeInForce=GTC&quantity="+String(M)+"&price="+String(W)+"&recvWindow=59999&timestamp="+Date.now(),console.log(q,M),I={akey:String(window.localStorage.getItem("BinanceApiKey")),skey:String(window.localStorage.getItem("BinanceSecretKey"))},A=F.createHmac("sha256",I.skey).update(B).digest("hex"),E=v+T+"?"+B+"&signature="+A,P={headers:{"X-MBX-APIKEY":I.akey}},t.next=77,g.a.post(E,null,P).then((function(t){console.log("selll",t)})).catch((function(t){console.log("erroppppppp",t)}));case 77:u++,t.next=9;break;case 80:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"Buy",value:function(){var t=Object(p.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.handleMax();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"SellBinance",value:function(){var t=Object(p.a)(r.a.mark((function t(){var e,a,c,o,i,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("rrrrrrrrr"),e=n(26),"https://fapi.binance.com","/fapi/v1/order",.001,a="symbol=BTCUSDT&side=SELL&type=LIMIT&timeInForce=GTC&quantity="+String(.001)+"&price=38000&recvWindow=59999&timestamp="+Date.now(),c={akey:"OKqHSnXkuyEXEOOcJnA6NwpuAUaWCt9ZkCuLmpaOEQuWdhoW16v7gT54vmUFAf3b",skey:"hbWzT9auRiTkmhnFY7j6k5z33UaRJA1iqyEv3uvyPwcRqjCAQa8SKXbdcGPtrvZX"},o=e.createHmac("sha256",c.skey).update(a).digest("hex"),console.log("yyyyyyyyyy",o,a),i="https://fapi.binance.com/fapi/v1/order?"+a+"&signature="+o,console.log("ssssssssss",i),s={headers:{"X-MBX-APIKEY":window.localStorage.getItem("BinanceApiKey")}},t.next=14,g.a.post(i,null,s).then((function(t){console.log("buyyyyyy",t)})).catch((function(t){console.log("erroppppppp",t)}));case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"BuyBinance",value:function(){var t=Object(p.a)(r.a.mark((function t(){var e,a,c,o,i,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n(26),"https://fapi.binance.com","/fapi/v1/order",a="symbol=BTCUSDT&side=BUY&type=LIMIT&timeInForce=GTC&quantity=0.001&price=37100&recvWindow=59999&timestamp="+Date.now(),c={akey:"OKqHSnXkuyEXEOOcJnA6NwpuAUaWCt9ZkCuLmpaOEQuWdhoW16v7gT54vmUFAf3b",skey:"hbWzT9auRiTkmhnFY7j6k5z33UaRJA1iqyEv3uvyPwcRqjCAQa8SKXbdcGPtrvZX"},o=e.createHmac("sha256",c.skey).update(a).digest("hex"),i="https://fapi.binance.com/fapi/v1/order?"+a+"&signature="+o,s={headers:{"X-MBX-APIKEY":"OKqHSnXkuyEXEOOcJnA6NwpuAUaWCt9ZkCuLmpaOEQuWdhoW16v7gT54vmUFAf3b"}},t.next=10,g.a.post(i,null,s).then((function(t){console.log("buyyyyyy",t)})).catch((function(t){console.log("erroppppppp",t)}));case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(y.jsxs)("div",{className:"Container",children:[Object(y.jsxs)("div",{className:"NobitexToken",children:[Object(y.jsx)("p",{children:"Nobitex Token"}),Object(y.jsx)("input",{className:"NobitexToken",placeholder:"Nobitex Token",onChange:function(e){return t.handleChange(e)}}),Object(y.jsx)("button",{onClick:function(e){return t.handleClickButton(e)},children:"send"}),Object(y.jsx)("button",{onClick:function(e){return t.SellBinance(e)},children:"send"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{children:"\u0645\u0642\u062f\u0627\u0631 \u062e\u0631\u06cc\u062f \u0628\u0647 \u0631\u06cc\u0627\u0644"}),Object(y.jsx)("input",{placeholder:"\u0645\u0642\u062f\u0627\u0631 \u062e\u0631\u06cc\u062f \u0628\u0647 \u0631\u06cc\u0627\u0644",onChange:function(e){return t.handleChange1(e)}}),Object(y.jsx)("button",{onClick:function(e){return t.handleClickButton1(e)},children:"send"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{children:"Binance API key"}),Object(y.jsx)("input",{placeholder:"Binance Api key",onChange:function(e){return t.handleChange2(e)}}),Object(y.jsx)("button",{onClick:function(e){return t.handleClickButton2(e)},children:"send"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{children:"Binance Secret key"}),Object(y.jsx)("input",{placeholder:"Binance Secret key",onChange:function(e){return t.handleChange3(e)}}),Object(y.jsx)("button",{onClick:function(e){return t.handleClickButton3(e)},children:"send"})]})]})}}]),a}(c.a.Component);var f=function(){return Object(y.jsx)(x,{})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,206)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),o(t),i(t)}))};i.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(f,{})}),document.getElementById("root")),S()},50:function(t,e,n){}},[[205,1,2]]]);
//# sourceMappingURL=main.a257c185.chunk.js.map
import React from 'react';
import '../App.css';
import axios from 'axios'

class List extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.handleMax()
    }, 10000)
    }

  async handleMax(){

    let data100 = {
      symbol: "USDTIRT"
    }

    var audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');

    axios.post('https://api.nobitex.ir/v2/trades', data100,{})
    .then((response) => {
      this.setState({ tether: Number.parseFloat(response.data.trades[0].price, 10) })
    })
    .catch((error) => {
      console.log('erroppppppp')
    })

    // const crypto = require('crypto');

    // var base_url= "https://fapi.binance.com"
    // var endpoint= "/fapi/v1/order"
    // var dataQueryString= "symbol=BTCUSDT&side=BUY&type=LIMIT&quantity=0.09&price=200&timestamp="+Date.now();

    // var keys = {
    //   "akey" : 'KJWngO56TN7dMbjhzYHACOthAxnXoAn5364kpBlW5AAR05Ohi42QI9dmIwgZNHz7',
    //   "skey" : '4ACTmHNamr8T4TnrQzWNIeHnofr7FwtBUDGSEf3U7lAfNcfeQcwAi4zxzSQa6r2h'
    // }

    // var signature= crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex')

    // var url = base_url + endpoint + '?' + dataQueryString + '&signature' + signature;

    let coin_list = [
      "btc",
      "eth",
      "ltc",
      "bch",
      "xlm",
      "trx",
      "doge",
      "etc",
      "bnb",
      "eos",
      "xrp",
    ]

    let nobitex_coin_list = [
      "BTCIRT",
      "ETHIRT",
      "LTCIRT",
      "BCHIRT",
      "XLMIRT",
      "TRXIRT",
      "DOGEIRT",
      "ETCIRT",
      "BNBIRT",
      "EOSIRT",
      "XRPIRT",
    ]

    let binance_coin_list = [
      "BTCUSDT",
      "ETHUSDT",
      "LTCUSDT",
      "BCHUSDT",
      "XLMUSDT",
      "TRXUSDT",
      "DOGEUSDT",
      "ETCUSDT",
      "BNBUSDT",
      "EOSUSDT",
      "XRPUSDT",
    ]

    let binance_quantity_restriction = [
      3,
      3,
      3,
      3,
      0,
      0,
      0,
      2,
      2,
      1,
      1,
    ]

    let binance_price_restriction = [
      2,
      2,
      2,
      2,
      5,
      5,
      5,
      3,
      2,
      3,
      4,
    ]

    // let exir_coin_list = [
    // //   "btc-irt",
    // //   "eth-irt",
    // //   "ltc-irt",
    // //   "bch-irt",
    // //   "xlm-irt",
    // //   "trx-irt",
    // //   "doge-irt",
    // //   // "etc-irt",
    // //   // "bnb-irt",
    // //   // "eos-irt",
    // //   // "xrp-irt",
    // // ]

    
    for (let i = 1; i < nobitex_coin_list.length+1; i++) {

      var j = i-1;
      window["data"+j] = {
        symbol: nobitex_coin_list[i-1]
      }

      // nobitex API

      await axios.post('https://api.nobitex.ir/v2/trades', window["data"+j],{})
      .then((response) => {
        var price= Number.parseFloat(response.data.trades[0].price, 10)/this.state.tether
        // this.setState({nobitex_volume2: response.data.trades[0].volume})
        this.setState({ [`nobitex_price${j}`]: price })
      })
      .catch((error) => {
        console.log('erroppppppp')
      })
      
      //binance API

      await axios.get("https://fapi.binance.com/fapi/v1/trades?symbol="+binance_coin_list[j], {
      })
      .then(response => {
        console.log('aaaaaaaaaaa')
        var price= Number.parseFloat(response.data[0].price, 10)
        this.setState({ [`binance_price${j}`]: price })
      })
      .catch(error => {
        console.log(error);
      });

      

      if(this.state[`binance_price${j}`]>=this.state[`nobitex_price${j}`]){
        this.setState({ [`min${j}`]: this.state[`binance_price${j}`] })
        this.setState({ [`name_min${j}`]: binance_coin_list[j] })
        this.setState({ [`max${j}`]: this.state[`nobitex_price${j}`] })
        this.setState({ [`name_max${j}`]: nobitex_coin_list[j] })
      }else{
        this.setState({ [`max${j}`]: this.state[`binance_price${j}`] })
        this.setState({ [`name_max${j}`]: binance_coin_list[j] })
        this.setState({ [`min${j}`]: this.state[`nobitex_price${j}`] })
        this.setState({ [`name_min${j}`]: nobitex_coin_list[j] })
      }

      //exir API
      // if(j<7){
      //   await axios.get('https://api.exir.io/v1/trades', {
      //   })
      //   .then(response => {
      //     var price= Number.parseFloat(response.data[exir_coin_list[j]][0].price, 10)/Number.parseFloat(response.data["usdt-irt"][0].price, 10)
      //     this.setState({ [`exir_price${j}`]: price })
      //   })
      //   .catch(error => {
      //     console.log('error:')
      //   })

      //   if(this.state[`binance_price${j}`]>=this.state[`exir_price${j}`]){
      //     this.setState({ [`minn${j}`]: this.state[`binance_price${j}`] })
      //     this.setState({ [`name_minn${j}`]: binance_coin_list[j] })
      //     this.setState({ [`maxx${j}`]: this.state[`exir_price${j}`] })
      //     this.setState({ [`name_maxx${j}`]: exir_coin_list[j] })
      //   }else{
      //     this.setState({ [`maxx${j}`]: this.state[`binance_price${j}`] })
      //     this.setState({ [`name_maxx${j}`]: binance_coin_list[j] })
      //     this.setState({ [`minn${j}`]: this.state[`exir_price${j}`] })
      //     this.setState({ [`name_minn${j}`]: exir_coin_list[j] })
      //   }

      //   // if(Math.abs((this.state[`maxx${j}`]-this.state[`minn${j}`])/this.state[`minn${j}`]*100)>4 && this.state[`binance_price${j}`] > this.state[`exir_price${j}`]){
      //   //   console.log("maxxxx",this.state[`maxx${j}`],this.state[`name_maxx${j}`])
      //   //   console.log("minnnn",this.state[`minn${j}`],this.state[`name_minn${j}`])
      //   //   console.log("exir",this.state[`binance_price${j}`])
      //   //   // console.log("nobitex",  this.state.binance_price,this.state.nobitex_volume)
      //   //   var now = new Date();
      //   //   console.log("taghir",(this.state[`maxx${j}`]-this.state[`minn${j}`])/this.state[`minn${j}`]*100,now) 
      //   //   audio.play(); 
      //   // }
        
      // }

      if(Math.abs((this.state[`max${j}`]-this.state[`min${j}`])/this.state[`min${j}`]*100)>2.4 && this.state[`binance_price${j}`] > this.state[`nobitex_price${j}`]){
        console.log("nobitex",(this.state.tether)*0.985*this.state[`binance_price${j}`])
        console.log("maxxxx",this.state[`max${j}`],this.state[`name_max${j}`])
        console.log("minnnn",this.state[`min${j}`],this.state[`name_min${j}`])
        // console.log("nobitex",  this.state.binance_price,this.state.nobitex_volume)
        var now = new Date();
        console.log("taghir",(this.state[`max${j}`]-this.state[`min${j}`])/this.state[`min${j}`]*100,now) 
        audio.play(); 

        let quantity= window.localStorage.getItem('quantity')
        let allowed_price = (this.state.tether)*0.985*this.state[`binance_price${j}`]
        let amount=quantity/allowed_price

        let NobitexToken= window.localStorage.getItem('NobitexToken');

        let buy_data = {
          type: "buy",
          srcCurrency: coin_list[j],
          dstCurrency: "rls",
          amount: String(amount),
          price: String(allowed_price)
        }
    
        let config = {
          headers: { Authorization: `token ${NobitexToken}` }
        };
    
        await axios.post('https://api.nobitex.ir/market/orders/add', buy_data,config)
        .then((response) => {
          console.log('buy',response)
        })
        .catch((error) => {
          console.log('erroppppppp',error)
        })

        const crypto = require('crypto');

        var base_url= "https://fapi.binance.com"
        var endpoint= "/fapi/v1/order"
        let binance_allowed_price = 1.005*this.state[`binance_price${j}`]
        let binance_quantity=quantity/(this.state.tether*binance_allowed_price)
        let binance_quantity2= binance_quantity.toFixed(binance_quantity_restriction[j])
        let binance_allowed_price2= binance_allowed_price.toFixed(binance_price_restriction[j])
        var dataQueryString= "symbol="+binance_coin_list[j]+"&side=SELL&type=LIMIT&timeInForce=GTC&quantity="+String(binance_quantity2)+"&price="+String(binance_allowed_price2)+"&recvWindow=59999&timestamp="+Date.now();
        console.log(binance_allowed_price,binance_quantity2)
        var keys = {
          "akey" : String(window.localStorage.getItem('BinanceApiKey')),
          "skey" : String(window.localStorage.getItem('BinanceSecretKey'))
        }

        // var keys = {
        //   "akey" : 'OKqHSnXkuyEXEOOcJnA6NwpuAUaWCt9ZkCuLmpaOEQuWdhoW16v7gT54vmUFAf3b',
        //   "skey" : 'hbWzT9auRiTkmhnFY7j6k5z33UaRJA1iqyEv3uvyPwcRqjCAQa8SKXbdcGPtrvZX'
        // }
    
        var signature= crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');
        var url1 = base_url + endpoint + '?' + dataQueryString + '&signature=' + signature;
        let config1 = {
          headers: { 'X-MBX-APIKEY': keys['akey'] }
        };

        await axios.post(url1,null,config1)
        .then((response) => {
          console.log('selll',response)
        })
        .catch((error) => {
          console.log('erroppppppp',error)
        })
      }
     
      if(Math.abs((this.state[`max${j}`]-this.state[`min${j}`])/this.state[`min${j}`]*100)>1.4 && this.state[`binance_price${j}`] < this.state[`nobitex_price${j}`]){
        console.log("nobitex",(this.state.tether)*1.005*this.state[`binance_price${j}`])
        console.log("maxxxx",this.state[`max${j}`],this.state[`name_max${j}`])
        console.log("minnnn",this.state[`min${j}`],this.state[`name_min${j}`])
        // console.log("nobitex",  this.state.binance_price,this.state.nobitex_volume)
        var now = new Date();
        console.log("taghir",(this.state[`max${j}`]-this.state[`min${j}`])/this.state[`min${j}`]*100,now) 

        let quantity= window.localStorage.getItem('quantity')
        let allowed_price = (this.state.tether)*1.005*this.state[`binance_price${j}`]
        let amount=quantity/allowed_price

        let NobitexToken= window.localStorage.getItem('NobitexToken');

        let sell_data = {
          type: "sell",
          srcCurrency: coin_list[j],
          dstCurrency: "rls",
          amount: String(amount),
          price: String(allowed_price)
        }
    
        let config = {
          headers: { Authorization: `token ${NobitexToken}` }
        };
    
        await axios.post('https://api.nobitex.ir/market/orders/add', sell_data,config)
        .then((response) => {
			audio.play(); 
			const crypto = require('crypto');
			var base_url= "https://fapi.binance.com"
			var endpoint= "/fapi/v1/order"
			let binance_allowed_price = 0.995*this.state[`binance_price${j}`]
			let binance_quantity=quantity/(this.state.tether*binance_allowed_price)
			let binance_quantity2= binance_quantity.toFixed(binance_quantity_restriction[j])
			let binance_allowed_price2= binance_allowed_price.toFixed(binance_price_restriction[j])
			var dataQueryString= "symbol="+binance_coin_list[j]+"&side=BUY&type=LIMIT&timeInForce=GTC&quantity="+String(binance_quantity2)+"&price="+String(binance_allowed_price2)+"&recvWindow=59999&timestamp="+Date.now();
			console.log(binance_allowed_price,binance_quantity2)
			var keys = {
			  "akey" : String(window.localStorage.getItem('BinanceApiKey')),
			  "skey" : String(window.localStorage.getItem('BinanceSecretKey'))
			}
	
			// var keys = {
			//   "akey" : 'OKqHSnXkuyEXEOOcJnA6NwpuAUaWCt9ZkCuLmpaOEQuWdhoW16v7gT54vmUFAf3b',
			//   "skey" : 'hbWzT9auRiTkmhnFY7j6k5z33UaRJA1iqyEv3uvyPwcRqjCAQa8SKXbdcGPtrvZX'
			// }
		
			var signature= crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');
			var url1 = base_url + endpoint + '?' + dataQueryString + '&signature=' + signature;
			let config1 = {
			  headers: { 'X-MBX-APIKEY': keys['akey'] }
			};
	
			await axios.post(url1,null,config1)
			.then((response) => {
			  console.log('selll',response)
			})
			.catch((error) => {
			  console.log('erroppppppp',error)
			})
        })
        .catch((error) => {
          console.log('erroppppppp',error)
        })

      }

      // if(this.state[`nobitex_price${0}`]*(this.state.tether)<91650){
      //   console.log(this.state[`nobitex_price${0}`]*(this.state.tether))
      //   console.log("maxxxx",this.state[`max${j}`],this.state[`name_max${j}`])
      //   console.log("minnnn",this.state[`min${j}`],this.state[`name_min${j}`])
      //   console.log("nobitex",(this.state.tether)*this.state[`binance_price${j}`])
      //   // console.log("nobitex",  this.state.binance_price,this.state.nobitex_volume)
      //   var now = new Date();
      //   console.log("taghir",(this.state[`max${j}`]-this.state[`min${j}`])/this.state[`min${j}`]*100,now) 
      //   audio.play(); 
      // }

    }
  }

  handleChange = (e) => {
    this.setState({ 'NobitexToken': e.target.value })
    { e.target.value === '' && this.setState({ 'NobitexToken': null})}
  }

  handleChange1 = (e) => {
    this.setState({ 'quantity': e.target.value })
    { e.target.value === '' && this.setState({ 'quantity': null})}
  }

  handleChange2 = (e) => {
    this.setState({ 'BinanceApiKey': e.target.value })
    { e.target.value === '' && this.setState({ 'BinanceApiKey': null})}
  }

  handleChange3 = (e) => {
    this.setState({ 'BinanceSecretKey': e.target.value })
    { e.target.value === '' && this.setState({ 'BinanceSecretKey': null})}
  }

  handleClickButton = () => {
    window.localStorage.setItem('NobitexToken',this.state.NobitexToken)
  }

  handleClickButton1 = () => {
    window.localStorage.setItem('quantity',this.state.quantity)
  }

  handleClickButton2 = () => {
    window.localStorage.setItem('BinanceApiKey',this.state.BinanceApiKey)
  }

  handleClickButton3 = () => {
    window.localStorage.setItem('BinanceSecretKey',this.state.BinanceSecretKey)
  }

  async Buy() {

    this.handleMax()
  }


  render(){
    return (
      <div className="Container">
        <div className="NobitexToken">
          <p>Nobitex Token</p>
          <input
            className="NobitexToken"
            placeholder="Nobitex Token"
            onChange={(e) => this.handleChange(e)}
          />
          <button
            onClick={(e) => this.handleClickButton(e)}
          >send</button>
        </div>

        <div>
          <p>مقدار خرید به ریال</p>
          <input
            placeholder="مقدار خرید به ریال"
            onChange={(e) => this.handleChange1(e)}
          />
          <button
            onClick={(e) => this.handleClickButton1(e)}
          >send</button>
        </div>

        <div>
          <p>Binance API key</p>
          <input
            placeholder="Binance Api key"
            onChange={(e) => this.handleChange2(e)}
          />
          <button
            onClick={(e) => this.handleClickButton2(e)}
          >send</button>
        </div>

        <div>
          <p>Binance Secret key</p>
          <input
            placeholder="Binance Secret key"
            onChange={(e) => this.handleChange3(e)}
          />
          <button
            onClick={(e) => this.handleClickButton3(e)}
          >send</button>
        </div>

      </div>
    );
  }
}
export default List;

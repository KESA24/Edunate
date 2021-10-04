const request = require('request');
const options = {
  'method': 'POST',
  'url': 'https://auth.reloadly.com/oauth/token',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "client_id": "1ScbTXkRoSdTwO3vjwQAIrANqRLTgDwD",
    "client_secret": "rvoipdSmJ9-r6y8OlLafTw3IeVLPaR-9myqLD5QgkE9ZuMuwEkqGOatlfSUJ5Te",
    "grant_type": "client_credentials",
    "audience": "https://topups.reloadly.com"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

const Flutterwave = require('flutterwave-node-v3');

const flw = new Flutterwave('FLWPUBK_TEST-5bfc5f1c934a77a60db781344229e03b-X', 'FLWSECK_TEST-008b90f8aa80b94dfa401accef4c1487-X');


const flutterwave = (request) => {
    const flwSecretKey = 'FLWSECK_TEST-008b90f8aa80b94dfa401accef4c1487-X';

    const initializePayment = (form, mycallback) => {

 
 
        const options = {
            url : 'https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/hosted/pay',
            headers : {
                authorization: flwSecretKey,
                'content-type': 'application/json',
                'cache-control': 'no-cache',
                
            },
           form
        }
        const callback = (error, response, body)=>{
            return mycallback(error, body);
        }
        request.post(options,callback);
    }

    const verifyPayment = (ref, mycallback) => {
        const options = {
            url : 'https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/hosted/pay'+encodeURIComponent(ref    ),
            headers : {
                authorization:  flwSecretKey,
                'content-type': 'application/json',
                'cache-control': 'no-cache'
           }
        }
        const callback = (error, response, body)=>{
            return mycallback(error, body);
        }
        request(options,callback);
    }

   return {initializePayment, verifyPayment};
}

module.exports = flutterwave
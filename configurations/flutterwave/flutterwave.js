const Flutterwave = require('flutterwave-node-v3');


const flutterwave = (request) => {
    const flw = new Flutterwave('FLWPUBK_TEST-5bfc5f1c934a77a60db781344229e03b-X', 'FLWSECK_TEST-008b90f8aa80b94dfa401accef4c1487-X');
    const initializePayment = (form, mycallback) => {

 
 
        const options = {
            url : 'https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/hosted/pay',
            headers : {
                authorization: flw,
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
                authorization:  flw,
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
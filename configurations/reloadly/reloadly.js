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
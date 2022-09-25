function sendAll() {
  sendSms("5104587177","YOU HAVE COVID");
  console.log("yu have covid");
}
function sendSms(to, body) {
  var messages_url = "https://api.twilio.com/2010-04-01/Accounts/AC62e25862712ad207b166324a78fd5bf1/Messages.json";

  var payload = {
    "To": to,
    "Body" : body,
    "From" : "6205828940"
  };

  var options = {
    "method" : "post",
    "payload" : payload
  };

  options.headers = { 
    "Authorization" : "Basic " + Utilities.base64Encode("AC62e25862712ad207b166324a78fd5bf1:647910b79acdb2c5bc6511636d1b30ea")
  };

  UrlFetchApp.fetch(messages_url, options);
}
function myFunction() {
  sendAll();
}

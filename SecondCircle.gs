function floop(row, col) {
  //var cell = SpreadsheetApp.getActiveSheet().getActiveCell();
  //var a1 = cell.getA1Notation();
  //var val = cell.getValue();
  var value = SpreadsheetApp.getActiveSheet().getRange(row, col).getValue();
  //console.log(value);
  var index = 0;
  var phones = [];
  for( var i = 2; i < value.length; i++ ) {
    if( value[i] == "%" ) {
      phones.push(value.substring(index+1, i));
      index = i
    }
  }
  return phones;
}

function anotherloop(number) {
  var formInput =  SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var lR = formInput.getLastRow();
  numbers = [];
  for(var i = 2; i <= lR; i++ ) {
    x = floop(i, 18); 
    for( var j = 0; j < x.length; j++ ) {
      if( x[j] == number ) {
        numbers.push(SpreadsheetApp.getActiveSheet().getRange(i, 3).getValue());
      }
    }  
  }
  return numbers;
} 

  function findCol(num) {
    var formInput =  SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var lR = formInput.getLastRow();
    for( var i = 1; i < lR; i++ ) {
      if( SpreadsheetApp.getActiveSheet().getRange(i, 3).getValue() == num ) {
        return i;
      }
    }
    return null;
  }

    function removeDuplicates(arr) {
      arr2 = [];
      
      var w = false;
      for(var y = 0; y < arr.length; y++ ) {
        for(var x = 0; x < arr2.length; x++ ) {
          if(arr[y] == arr2[x]) {
            w = true;
          }
        }
        if( !w ) {
          arr2.push(arr[y])
        }  
        w = false;
      }

      return arr2;
    }

  function numberFromRow(row) {
      SpreadsheetApp.getActiveSheet().getRange(row, 3).getValue()
  }

  function findNumbers(row) {
    finalNums = floop(row, 18);
    var al = anotherloop(numberFromRow(row));
    for( var k = 0; k < al.length; k++  ) {
      finalNums.push(al[k]);
    }
    finalNums = removeDuplicates(finalNums);
    //console.log(finalNums);

    finalfinalNums = [];
    for( var i = 0; i < finalNums.length; i++ ) {
      console.log("printing line 78");
        if( findCol(finalNums[i]) !== null ) { 
          console.log("printing line 80");
          var a3 = floop(findCol(finalNums[i]), 18);
          for( var j = 0; j < a3.length; j++ ) {
            console.log("printing line 83");
            console.log(a3[j]);
            finalfinalNums.push(a3[j]);
          }
        }

        var a4 = anotherloop(finalNums[i]);
        if( a4 != null ) {
          for( var k = 0; k < a4.length; k++ ) {
            finalfinalNums.push(a4[k]);
          }
        }
    }
    finalfinalNums = removeDuplicates(finalfinalNums);
    //console.log(finalfinalNums);

    for(var i = 0; i < finalfinalNums.length; i++ ) {
        for(var j = 0; j < finalNums.length; j++ ) {
          if( finalfinalNums[i] == finalNums[j] ) {
            finalfinalNums.splice(i,1);
            i--;
          }
        }
    }

    //console.log(finalNums);
    //console.log(finalfinalNums);

    for( var i = 0; i < finalNums.length; i++ ) {
      //console.log(finalNums[i]);
      if(finalNums[i]==null){
        console.log("blank check 111");

      }
      else {
        console.log(finalNums[i]);
        sendSms(finalNums[i].toString(), "**PROTECT PURDUE NOTICE!** Someone in your close friends has tested positive for COVID. It is advised that you take a COVID test ASAP.");
      }  
    }

    for( var j = 0; j < finalfinalNums.length; j++ ) {
      //console.log(finalNums[i])
       if(finalfinalNums[j]==null){
        console.log("blank check 120");

      }
      else {
        console.log("2nd circle numbers");
        console.log(finalfinalNums[j]);
        sendSms(finalfinalNums[j].toString(), "**PROTECT PURDUE NOTICE!** One of your close friend's close friends has tested positive for COVID. It is advised that you watch out for symptoms and take a COVID test if possible.");
      }
    }  
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

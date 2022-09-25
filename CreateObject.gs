function createObjectId() {
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn());
  range.sort({column: 1, ascending: true});
  var formInput =  SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  
  var lR = formInput.getLastRow();
  var column = 3;
  var phoneNumber = SpreadsheetApp.getActiveSheet().getRange(lR, column).getValue();
  var column = 4;
  var userName = SpreadsheetApp.getActiveSheet().getRange(lR, column).getValue();
  var column = 6;
  var p1Number = SpreadsheetApp.getActiveSheet().getRange(lR, column).getValue();
  var column = 8;
  var p2Number = SpreadsheetApp.getActiveSheet().getRange(lR, column).getValue();
  var column = 10;
  var p3Number = SpreadsheetApp.getActiveSheet().getRange(lR, column).getValue();
  var column = 12;
  var p4Number = SpreadsheetApp.getActiveSheet().getRange(lR, column).getValue();
  var column = 14;
  var p5Number = SpreadsheetApp.getActiveSheet().getRange(lR, column).getValue();
  var column = 15;
  var covid19Status = SpreadsheetApp.getActiveSheet().getRange(lR, column).getValue();
  var column = 16;
  var email = SpreadsheetApp.getActiveSheet().getRange(lR, column).getValue();
  
  if(SpreadsheetApp.getActiveSheet().getRange(lR, 2).getValue()=="Yes"){
    console.log(phoneNumber);
    start(phoneNumber.toString())
  } 

  


  var objectStringId = "##" + phoneNumber + "//" + userName + "%" + p1Number + "%" + p2Number + "%" + p3Number + "%" + p4Number + "%" + p5Number + "^^" + covid19Status + "@@" + email;
  var closePhoneList = "%" + p1Number + "%" + p2Number + "%" + p3Number + "%" + p4Number + "%" + p5Number + "%";
  var toWrite = "Q" + lR;


  var idBox = SpreadsheetApp.getActiveSpreadsheet().getRange(toWrite);
idBox.setValue(objectStringId); 
 toWrite = "R" + lR;
 var idBox = SpreadsheetApp.getActiveSpreadsheet().getRange(toWrite);
idBox.setValue(closePhoneList);
if(covid19Status=="Positive"){
  //console.log("this is a positive test");
  findNumbers(lR);
} 
  //=arrayformula(CONCATENATE("##",#REF!,"//",#REF!,#REF!,"^^",#REF!,"**",#REF!))
 // console.log(objectStringId);
  
}

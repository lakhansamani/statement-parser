var XLSX = require('xlsx');
var fs = require('fs');
var workbook = XLSX.readFile('example/sample.xlsx');
var jsonData=XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
fs.writeFile("output/meta.json", JSON.stringify(workbook, null, 4), function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Output written in output/meta.json");
  }
});
fs.writeFile("output/parsed.json", JSON.stringify(jsonData, null, 4), function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Output written in output/parsed.json");
  }
});
